#!/bin/bash

# 🎯 STAGE 5 ASSET MIGRATION SCRIPT
# This script moves assets from Stage 4 to development folder during Stage 5 implementation

set -e

echo "🚀 Stage 5 Asset Migration - Starting..."

# Function to move assets to development folder
move_assets_to_development() {
    echo "📦 Moving assets from Stage 4 to development folder..."
    
    # Check if Stage 4 assets exist
    if [ -d "Stage4_RTSD_Creation/figma_assets" ]; then
        echo "✅ Found Stage 4 assets"
        
        # Create development assets directory
        mkdir -p "src/assets/figma_assets"
        
        # Move all assets
        cp -r Stage4_RTSD_Creation/figma_assets/* src/assets/figma_assets/
        
        echo "✅ Assets moved to src/assets/figma_assets/"
        
        # Update asset paths in documentation
        update_asset_paths
        
        # Generate development asset guide
        generate_development_asset_guide
        
    else
        echo "⚠️  No Stage 4 assets found"
        echo "📁 Creating empty assets directory for development"
        mkdir -p "src/assets/figma_assets"
    fi
}

# Function to update asset paths in documentation
update_asset_paths() {
    echo "📝 Updating asset paths in documentation..."
    
    # Update asset usage guide
    if [ -f "src/assets/figma_assets/ASSET_USAGE_GUIDE.md" ]; then
        sed -i 's|Stage4_RTSD_Creation/figma_assets/|src/assets/figma_assets/|g' src/assets/figma_assets/ASSET_USAGE_GUIDE.md
        echo "✅ Updated asset usage guide paths"
    fi
    
    # Update CSS variables path
    if [ -f "src/assets/figma_assets/css_variables.css" ]; then
        echo "✅ CSS variables available at src/assets/figma_assets/css_variables.css"
    fi
    
    # Update icon inventory
    if [ -f "src/assets/figma_assets/figma_icon_inventory.json" ]; then
        echo "✅ Icon inventory available at src/assets/figma_assets/figma_icon_inventory.json"
    fi
}

# Function to generate development asset guide
generate_development_asset_guide() {
    echo "📚 Generating development asset guide..."
    
    cat > src/assets/figma_assets/DEVELOPMENT_GUIDE.md << EOF
# 🎨 Development Asset Guide

## Asset Location
Assets are now located in: \`src/assets/figma_assets/\`

## Usage in Vue.js Components

### Icons
\`\`\`vue
<template>
  <div class="icon-container">
    <img src="@/assets/figma_assets/screens/login/icons/user.svg" alt="User" />
  </div>
</template>
\`\`\`

### Images
\`\`\`vue
<template>
  <div class="image-container">
    <img src="@/assets/figma_assets/screens/dashboard/images/hero.png" alt="Hero" />
  </div>
</template>
\`\`\`

### CSS Variables
\`\`\`vue
<style scoped>
.component {
  background-color: var(--color-primary-main);
  color: var(--color-primary-contrast);
  font-family: var(--font-primary);
  font-size: var(--font-size-base);
  padding: var(--spacing-md);
}
</style>
\`\`\`

## Import CSS Variables
\`\`\`javascript
// In main.js or App.vue
import '@/assets/figma_assets/css_variables.css'
\`\`\`

## Asset Structure
\`\`\`
src/assets/figma_assets/
├── screens/
│   ├── [screen_id]/
│   │   ├── icons/          # SVG icons for this screen
│   │   ├── images/         # PNG/JPG images for this screen
│   │   ├── components/     # SVG/PNG components for this screen
│   │   └── design_tokens.json
│   └── ...
├── icons_centralized/      # Unique icons (no duplicates)
├── css_variables.css      # Generated CSS variables
├── figma_icon_inventory.json
└── ASSET_USAGE_GUIDE.md
\`\`\`

## Best Practices
- Use icons from \`icons_centralized/\` for consistency
- Import CSS variables in main.js
- Use descriptive alt text for images
- Follow naming conventions for new assets
EOF
    
    echo "✅ Development asset guide created"
}

# Function to create Vue.js asset import helper
create_vue_asset_helper() {
    echo "🔧 Creating Vue.js asset import helper..."
    
    cat > src/utils/assetHelper.js << EOF
// Asset Helper for Vue.js Components
// Provides easy access to Figma assets

export const getAssetPath = (screen, type, filename) => {
  return \`@/assets/figma_assets/screens/\${screen}/\${type}/\${filename}\`
}

export const getIconPath = (screen, iconName) => {
  return getAssetPath(screen, 'icons', iconName)
}

export const getImagePath = (screen, imageName) => {
  return getAssetPath(screen, 'images', imageName)
}

export const getComponentPath = (screen, componentName) => {
  return getAssetPath(screen, 'components', componentName)
}

// Centralized icon access
export const getCentralizedIcon = (iconName) => {
  return \`@/assets/figma_assets/icons_centralized/\${iconName}\`
}

// CSS Variables helper
export const importCSSVariables = () => {
  import('@/assets/figma_assets/css_variables.css')
}

// Usage examples:
// import { getIconPath, getImagePath, getCentralizedIcon } from '@/utils/assetHelper'
// 
// const userIcon = getIconPath('login', 'user.svg')
// const heroImage = getImagePath('dashboard', 'hero.png')
// const centralizedIcon = getCentralizedIcon('common-icon.svg')
EOF
    
    echo "✅ Vue.js asset helper created"
}

# Function to update package.json scripts
update_package_scripts() {
    echo "📦 Updating package.json scripts..."
    
    if [ -f "package.json" ]; then
        # Add asset management scripts
        cat >> package.json << EOF

  "scripts": {
    "assets:copy": "cp -r Stage4_RTSD_Creation/figma_assets/* src/assets/figma_assets/",
    "assets:clean": "rm -rf src/assets/figma_assets/*",
    "assets:update": "npm run assets:clean && npm run assets:copy"
  }
EOF
        echo "✅ Package.json scripts updated"
    else
        echo "⚠️  Package.json not found, skipping script updates"
    fi
}

# Function to create asset validation
create_asset_validation() {
    echo "✅ Creating asset validation..."
    
    cat > src/utils/assetValidation.js << EOF
// Asset Validation Utility
// Validates that all required assets are available

export const validateAssets = () => {
  const requiredAssets = [
    'src/assets/figma_assets/css_variables.css',
    'src/assets/figma_assets/icons_centralized',
    'src/assets/figma_assets/figma_icon_inventory.json'
  ]
  
  const missingAssets = []
  
  requiredAssets.forEach(asset => {
    if (!require('fs').existsSync(asset)) {
      missingAssets.push(asset)
    }
  })
  
  if (missingAssets.length > 0) {
    console.warn('⚠️  Missing assets:', missingAssets)
    return false
  }
  
  console.log('✅ All required assets are available')
  return true
}

// Usage:
// import { validateAssets } from '@/utils/assetValidation'
// validateAssets()
EOF
    
    echo "✅ Asset validation utility created"
}

# Main execution
echo "🚀 Starting Stage 5 asset migration..."

# Run all functions
move_assets_to_development
create_vue_asset_helper
update_package_scripts
create_asset_validation

echo "✅ Stage 5 asset migration completed!"
echo ""
echo "📋 Summary:"
echo "✅ Assets moved from Stage 4 to src/assets/figma_assets/"
echo "✅ Asset paths updated in documentation"
echo "✅ Development asset guide created"
echo "✅ Vue.js asset helper created"
echo "✅ Package.json scripts updated"
echo "✅ Asset validation utility created"
echo ""
echo "🎯 Next steps:"
echo "1. Import CSS variables in main.js"
echo "2. Use asset helper in components"
echo "3. Validate assets with validation utility"
echo "4. Start development with proper asset access"
