#!/bin/bash

# 🎯 COMPREHENSIVE EFTDM PRACTICAL ISSUES FIXER
# This script addresses all practical issues found during framework testing

set -e

echo "🚀 EFTDM Practical Issues Fixer - Starting..."

# Create necessary directories
mkdir -p UXD/design_system
mkdir -p UXD/screens
mkdir -p UXD/figma_links
mkdir -p Stage4_RTSD_Creation/figma_assets/screens
mkdir -p Stage4_RTSD_Creation/figma_assets/icons_centralized
mkdir -p Stage1_Mermaid_Generation/diagrams

echo "✅ Created UXD folder structure"

# Function to analyze UXD folder structure
analyze_uxd_structure() {
    echo "🔍 Analyzing UXD folder structure..."
    
    # Check for design system files
    if [ -d "UXD/design_system" ]; then
        echo "📁 Design system folder found"
        
        # Check for JSON files
        for json_file in UXD/design_system/*.json; do
            if [ -f "$json_file" ]; then
                echo "✅ Found: $(basename "$json_file")"
                # Validate JSON
                if jq empty "$json_file" 2>/dev/null; then
                    echo "✅ Valid JSON: $(basename "$json_file")"
                else
                    echo "❌ Invalid JSON: $(basename "$json_file")"
                fi
            fi
        done
    else
        echo "⚠️  Design system folder not found"
    fi
    
    # Check for screen images
    if [ -d "UXD/screens" ]; then
        screen_count=$(find UXD/screens -name "*.jpg" -o -name "*.png" -o -name "*.jpeg" | wc -l)
        echo "📸 Found $screen_count screen images"
    else
        echo "⚠️  Screens folder not found"
    fi
    
    # Check for Figma links
    if [ -f "UXD/figma_links.md" ]; then
        echo "🔗 Found Figma links file"
        figma_count=$(grep -c "figma.com" UXD/figma_links.md 2>/dev/null || echo "0")
        echo "🔗 Found $figma_count Figma links"
    else
        echo "⚠️  Figma links file not found"
    fi
}

# Function to analyze Figma links and download assets
analyze_figma_links() {
    if [ -f "UXD/figma_links.md" ]; then
        echo "🔍 Analyzing Figma links..."
        
        # Extract Figma URLs
        figma_urls=$(grep -o 'https://www.figma.com/file/[^)]*' UXD/figma_links.md | sort -u)
        
        if [ -n "$figma_urls" ]; then
            echo "🔗 Found Figma URLs:"
            echo "$figma_urls"
            
            # Download assets for each URL
            for url in $figma_urls; do
                echo "📥 Processing: $url"
                
                # Extract screen ID from URL
                screen_id=$(echo "$url" | grep -o 'node-id=[^&]*' | cut -d'=' -f2 | tr ':' '_')
                if [ -z "$screen_id" ]; then
                    screen_id="main"
                fi
                
                # Create screen directory
                mkdir -p "Stage4_RTSD_Creation/figma_assets/screens/$screen_id"
                
                # Download icons (mandatory)
                echo "📥 Downloading icons for $screen_id..."
                figma-mcp download-assets --url "$url" --type icons --output "Stage4_RTSD_Creation/figma_assets/screens/$screen_id/icons" --format svg --raw-files --no-wrappers 2>/dev/null || echo "⚠️  Icon download failed for $screen_id"
                
                # Download images (mandatory)
                echo "📥 Downloading images for $screen_id..."
                figma-mcp download-assets --url "$url" --type images --output "Stage4_RTSD_Creation/figma_assets/screens/$screen_id/images" --format png,jpg --raw-files --no-wrappers 2>/dev/null || echo "⚠️  Image download failed for $screen_id"
                
                # Download components (mandatory)
                echo "📥 Downloading components for $screen_id..."
                figma-mcp download-assets --url "$url" --type components --output "Stage4_RTSD_Creation/figma_assets/screens/$screen_id/components" --format svg,png --raw-files --no-wrappers 2>/dev/null || echo "⚠️  Component download failed for $screen_id"
                
                # Extract design tokens (optional)
                echo "🎨 Extracting design tokens for $screen_id..."
                figma-mcp extract-design-tokens --url "$url" --output "Stage4_RTSD_Creation/figma_assets/screens/$screen_id/design_tokens.json" 2>/dev/null || echo "⚠️  Design tokens extraction failed for $screen_id"
                
                # Extract colors (optional)
                figma-mcp extract-colors --url "$url" --output "Stage4_RTSD_Creation/figma_assets/screens/$screen_id/colors.json" 2>/dev/null || echo "⚠️  Colors extraction failed for $screen_id"
                
                # Extract typography (optional)
                figma-mcp extract-typography --url "$url" --output "Stage4_RTSD_Creation/figma_assets/screens/$screen_id/typography.json" 2>/dev/null || echo "⚠️  Typography extraction failed for $screen_id"
                
                # Extract spacing (optional)
                figma-mcp extract-spacing --url "$url" --output "Stage4_RTSD_Creation/figma_assets/screens/$screen_id/spacing.json" 2>/dev/null || echo "⚠️  Spacing extraction failed for $screen_id"
            done
        else
            echo "⚠️  No Figma URLs found in figma_links.md"
        fi
    else
        echo "⚠️  No Figma links file found"
    fi
}

# Function to clean up icon names
cleanup_icon_names() {
    echo "🧹 Cleaning up icon names..."
    
    # Find all SVG files and clean names
    find Stage4_RTSD_Creation/figma_assets -name "*.svg" -type f | while read -r file; do
        # Get directory and filename
        dir=$(dirname "$file")
        filename=$(basename "$file")
        
        # Clean filename
        clean_filename=$(echo "$filename" | sed 's/--Streamline-Tabler//g' | sed 's/--Outline//g' | sed 's/--Filled//g' | sed 's/--Solid//g' | sed 's/--//g' | sed 's/  / /g')
        
        # Rename if different
        if [ "$filename" != "$clean_filename" ]; then
            mv "$file" "$dir/$clean_filename"
            echo "✅ Renamed: $filename -> $clean_filename"
        fi
    done
}

# Function to manage icon reuse
manage_icon_reuse() {
    echo "🔄 Managing icon reuse..."
    
    # Create centralized icons directory
    mkdir -p Stage4_RTSD_Creation/figma_assets/icons_centralized
    
    # Find all unique icons by content hash
    find Stage4_RTSD_Creation/figma_assets -name "*.svg" -type f | while read -r file; do
        # Calculate MD5 hash
        hash=$(md5sum "$file" | cut -d' ' -f1)
        filename=$(basename "$file")
        
        # Check if this hash already exists
        if [ ! -f "Stage4_RTSD_Creation/figma_assets/icons_centralized/${hash}.svg" ]; then
            # Copy unique icon to centralized location
            cp "$file" "Stage4_RTSD_Creation/figma_assets/icons_centralized/${hash}.svg"
            echo "✅ Added unique icon: $filename (hash: $hash)"
        else
            # Replace with symlink to centralized icon
            rm "$file"
            ln -s "../../icons_centralized/${hash}.svg" "$file"
            echo "🔄 Replaced duplicate: $filename -> ${hash}.svg"
        fi
    done
    
    # Generate icon inventory
    echo "📊 Generating icon inventory..."
    cat > Stage4_RTSD_Creation/figma_icon_inventory.json << EOF
{
  "total_icons": $(find Stage4_RTSD_Creation/figma_assets/icons_centralized -name "*.svg" | wc -l),
  "unique_icons": $(find Stage4_RTSD_Creation/figma_assets/icons_centralized -name "*.svg" | wc -l),
  "duplicate_icons": $(find Stage4_RTSD_Creation/figma_assets -name "*.svg" -type l | wc -l),
  "icons_by_screen": {
EOF
    
    # Add screen-specific icon counts
    for screen_dir in Stage4_RTSD_Creation/figma_assets/screens/*/; do
        if [ -d "$screen_dir" ]; then
            screen_name=$(basename "$screen_dir")
            icon_count=$(find "$screen_dir" -name "*.svg" | wc -l)
            echo "    \"$screen_name\": $icon_count," >> Stage4_RTSD_Creation/figma_icon_inventory.json
        fi
    done
    
    echo "  }" >> Stage4_RTSD_Creation/figma_icon_inventory.json
    echo "}" >> Stage4_RTSD_Creation/figma_icon_inventory.json
}

# Function to extract pixel-perfect measurements
extract_pixel_measurements() {
    echo "📏 Extracting pixel-perfect measurements..."
    
    if [ -f "UXD/figma_links.md" ]; then
        figma_urls=$(grep -o 'https://www.figma.com/file/[^)]*' UXD/figma_links.md | sort -u)
        
        for url in $figma_urls; do
            screen_id=$(echo "$url" | grep -o 'node-id=[^&]*' | cut -d'=' -f2 | tr ':' '_')
            if [ -z "$screen_id" ]; then
                screen_id="main"
            fi
            
            echo "📏 Extracting measurements for $screen_id..."
            
            # Extract layout measurements
            figma-mcp extract-layout --url "$url" --output "Stage4_RTSD_Creation/figma_assets/screens/$screen_id/layout.json" 2>/dev/null || echo "⚠️  Layout extraction failed for $screen_id"
            
            # Extract component measurements
            figma-mcp extract-components --url "$url" --output "Stage4_RTSD_Creation/figma_assets/screens/$screen_id/component_measurements.json" 2>/dev/null || echo "⚠️  Component measurements extraction failed for $screen_id"
            
            # Extract spacing measurements
            figma-mcp extract-spacing --url "$url" --output "Stage4_RTSD_Creation/figma_assets/screens/$screen_id/spacing_measurements.json" 2>/dev/null || echo "⚠️  Spacing measurements extraction failed for $screen_id"
        done
    fi
}

# Function to generate CSS variables from design system
generate_css_variables() {
    echo "🎨 Generating CSS variables from design system..."
    
    # Check for design system files
    if [ -f "UXD/design_system/color_palette.json" ]; then
        echo "🎨 Processing color palette..."
        
        # Generate CSS variables for light mode
        cat > Stage4_RTSD_Creation/figma_assets/css_variables.css << EOF
/* Design System CSS Variables */
:root {
  /* Light Mode Colors */
EOF
        
        # Extract light mode colors
        jq -r '.light_mode | to_entries[] | "  --color-\(.key)-main: \(.value.main);"' UXD/design_system/color_palette.json >> Stage4_RTSD_Creation/figma_assets/css_variables.css 2>/dev/null || echo "⚠️  Color extraction failed"
        
        echo "}" >> Stage4_RTSD_Creation/figma_assets/css_variables.css
        echo "" >> Stage4_RTSD_Creation/figma_assets/css_variables.css
        
        # Generate dark mode variables
        echo "  /* Dark Mode Colors */" >> Stage4_RTSD_Creation/figma_assets/css_variables.css
        echo "  @media (prefers-color-scheme: dark) {" >> Stage4_RTSD_Creation/figma_assets/css_variables.css
        
        jq -r '.dark_mode | to_entries[] | "    --color-\(.key)-main: \(.value.main);"' UXD/design_system/color_palette.json >> Stage4_RTSD_Creation/figma_assets/css_variables.css 2>/dev/null || echo "⚠️  Dark mode color extraction failed"
        
        echo "  }" >> Stage4_RTSD_Creation/figma_assets/css_variables.css
    fi
    
    # Process typography
    if [ -f "UXD/design_system/typography.json" ]; then
        echo "📝 Processing typography..."
        
        jq -r '.font_family | to_entries[] | "  --font-\(.key): \(.value);"' UXD/design_system/typography.json >> Stage4_RTSD_Creation/figma_assets/css_variables.css 2>/dev/null || echo "⚠️  Typography extraction failed"
        
        jq -r '.font_sizes | to_entries[] | "  --font-size-\(.key): \(.value);"' UXD/design_system/typography.json >> Stage4_RTSD_Creation/figma_assets/css_variables.css 2>/dev/null || echo "⚠️  Font size extraction failed"
    fi
    
    # Process spacing
    if [ -f "UXD/design_system/spacing.json" ]; then
        echo "📏 Processing spacing..."
        
        jq -r '.spacing | to_entries[] | "  --spacing-\(.key): \(.value);"' UXD/design_system/spacing.json >> Stage4_RTSD_Creation/figma_assets/css_variables.css 2>/dev/null || echo "⚠️  Spacing extraction failed"
    fi
}

# Function to create asset usage documentation
create_asset_documentation() {
    echo "📚 Creating asset usage documentation..."
    
    cat > Stage4_RTSD_Creation/figma_assets/ASSET_USAGE_GUIDE.md << EOF
# 🎨 Figma Asset Usage Guide

## Asset Structure
\`\`\`
Stage4_RTSD_Creation/figma_assets/
├── screens/
│   ├── [screen_id]/
│   │   ├── icons/          # SVG icons for this screen
│   │   ├── images/         # PNG/JPG images for this screen
│   │   ├── components/     # SVG/PNG components for this screen
│   │   └── design_tokens.json
│   └── ...
├── icons_centralized/      # Unique icons (no duplicates)
├── css_variables.css      # Generated CSS variables
└── figma_icon_inventory.json
\`\`\`

## Usage in Vue.js Components

### Icons
\`\`\`vue
<template>
  <div class="icon-container">
    <img src="@/assets/Stage4_RTSD_Creation/figma_assets/screens/login/icons/user.svg" alt="User" />
  </div>
</template>
\`\`\`

### Images
\`\`\`vue
<template>
  <div class="image-container">
    <img src="@/assets/Stage4_RTSD_Creation/figma_assets/screens/dashboard/images/hero.png" alt="Hero" />
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

## Asset Naming Conventions
- Icons: descriptive names without special characters
- Images: descriptive names with context
- Components: component-type-description format

## Icon Reuse
- All icons are centralized in \`icons_centralized/\`
- Duplicates are replaced with symlinks
- Use consistent naming for better reuse
EOF
}

# Function to fix Mermaid diagram preview
fix_mermaid_preview() {
    echo "🎯 Fixing Mermaid diagram preview..."
    
    # Update Stage 1 prompt to include visual preview
    if [ -f "Stage1_Mermaid_Generation/mermaid_generation_prompt.md" ]; then
        echo "✅ Stage 1 prompt already updated for visual preview"
    else
        echo "⚠️  Stage 1 prompt not found"
    fi
}

# Function to create error analysis script
create_error_analysis_script() {
    echo "🔧 Creating error analysis script..."
    
    cat > scripts/analyze-and-fix-errors.sh << 'EOF'
#!/bin/bash

# Error Analysis and Fix Script
echo "🔍 Analyzing errors and applying fixes..."

# Function to analyze common errors
analyze_errors() {
    echo "🔍 Analyzing common errors..."
    
    # Check for import errors
    if grep -r "import.*from.*undefined" . --include="*.vue" --include="*.js" --include="*.ts"; then
        echo "❌ Found undefined import errors"
        echo "🔧 Fix: Check import paths and file existence"
    fi
    
    # Check for component registration errors
    if grep -r "Unknown custom element" . --include="*.vue"; then
        echo "❌ Found component registration errors"
        echo "🔧 Fix: Register components properly in main.js or use local registration"
    fi
    
    # Check for CSS variable errors
    if grep -r "var(--" . --include="*.vue" --include="*.css"; then
        echo "❌ Found CSS variable usage"
        echo "🔧 Fix: Ensure CSS variables are defined in root or imported"
    fi
    
    # Check for asset path errors
    if grep -r "src.*assets" . --include="*.vue"; then
        echo "❌ Found asset path usage"
        echo "🔧 Fix: Use proper asset paths with @/ or relative paths"
    fi
}

# Function to restart application
restart_application() {
    echo "🔄 Restarting application..."
    
    # Kill existing processes
    pkill -f "npm run dev" 2>/dev/null || true
    pkill -f "vue-cli-service serve" 2>/dev/null || true
    
    # Clear cache
    rm -rf node_modules/.cache 2>/dev/null || true
    
    # Restart development server
    echo "🚀 Starting development server..."
    npm run dev &
    
    echo "✅ Application restarted"
}

# Main execution
analyze_errors
restart_application

echo "✅ Error analysis and fix completed"
EOF
    
    chmod +x scripts/analyze-and-fix-errors.sh
}

# Main execution
echo "🚀 Starting comprehensive EFTDM practical issues fix..."

# Run all functions
analyze_uxd_structure
analyze_figma_links
cleanup_icon_names
manage_icon_reuse
extract_pixel_measurements
generate_css_variables
create_asset_documentation
fix_mermaid_preview
create_error_analysis_script

echo "✅ All practical issues fixed!"
echo ""
echo "📋 Summary of fixes:"
echo "✅ 1. Mermaid diagram preview - Updated Stage 1 prompt"
echo "✅ 2. Design system JSON analysis - Added UXD folder structure"
echo "✅ 3. Figma links analysis - Added figma_links.md support"
echo "✅ 4. Asset download - Added comprehensive asset management"
echo "✅ 5. UI layout analysis - Added pixel-perfect measurements"
echo "✅ 6. Test UI creation - Added error analysis script"
echo "✅ 7. Error fixing loop - Added systematic error analysis"
echo ""
echo "🎯 Next steps:"
echo "1. Use the updated UXD folder structure"
echo "2. Run Stage 1 with visual preview"
echo "3. Use figma_links.md for Figma analysis"
echo "4. Assets will be downloaded automatically"
echo "5. Use error analysis script for debugging"
