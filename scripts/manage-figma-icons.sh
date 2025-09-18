#!/bin/bash
# manage-figma-icons.sh
# MANDATORY: Manage Figma icons with reuse optimization and name cleanup

echo "🎯 MANDATORY: Managing Figma Icons with Reuse Optimization..."

# Check if DESIGN_ASSETS.md exists
DESIGN_ASSETS_FILE=""
if [ -f "DESIGN_ASSETS.md" ]; then
    DESIGN_ASSETS_FILE="DESIGN_ASSETS.md"
    echo "📋 Found DESIGN_ASSETS.md in root directory"
elif [ -f "UXD/DESIGN_ASSETS.md" ]; then
    DESIGN_ASSETS_FILE="UXD/DESIGN_ASSETS.md"
    echo "📋 Found DESIGN_ASSETS.md in UXD folder"
else
    echo "❌ DESIGN_ASSETS.md not found!"
    echo "Please create DESIGN_ASSETS.md with Figma links as per the template."
    exit 1
fi

# Check if Figma MCP tools are installed
if ! command -v figma-mcp &> /dev/null; then
    echo "❌ Figma MCP CLI not found!"
    echo "Installing Figma MCP CLI..."
    npm install -g @figma/mcp-cli
fi

# Extract Figma links from DESIGN_ASSETS.md
echo "📋 Extracting Figma links from $DESIGN_ASSETS_FILE..."
grep -o 'https://www.figma.com/[^)]*' "$DESIGN_ASSETS_FILE" > figma_links.txt

if [ ! -s figma_links.txt ]; then
    echo "❌ No Figma links found in DESIGN_ASSETS.md!"
    exit 1
fi

echo "Found $(wc -l < figma_links.txt) Figma links"

# Create centralized icons directory
mkdir -p figma_assets/icons_centralized
mkdir -p figma_assets/icons_by_screen

# Function to clean icon name
clean_icon_name() {
    local filename="$1"
    # Remove "--Streamline-Tabler" text
    filename=$(echo "$filename" | sed 's/--Streamline-Tabler//g')
    # Remove other common prefixes/suffixes
    filename=$(echo "$filename" | sed 's/--Outline//g')
    filename=$(echo "$filename" | sed 's/--Filled//g')
    filename=$(echo "$filename" | sed 's/--Solid//g')
    # Clean up any double dashes
    filename=$(echo "$filename" | sed 's/--/-/g')
    # Remove leading/trailing dashes
    filename=$(echo "$filename" | sed 's/^-//g' | sed 's/-$//g')
    echo "$filename"
}

# Function to get icon hash for duplicate detection
get_icon_hash() {
    if [ -f "$1" ]; then
        md5sum "$1" | cut -d' ' -f1
    else
        echo ""
    fi
}

# Process each Figma screen for icons
while IFS= read -r figma_url; do
    echo "🔍 Processing Figma URL: $figma_url"
    
    # Extract screen ID from URL
    screen_id=$(echo $figma_url | grep -o '[^/]*$' | sed 's/[^a-zA-Z0-9]/_/g')
    echo "  📋 Screen ID: $screen_id"
    
    # CRITICAL: Use MCP connection, NOT web search
    echo "  🔗 Using MCP connection to Figma..."
    
    # Check if Figma MCP is properly configured
    if ! figma-mcp test-connection --url "$figma_url" 2>/dev/null; then
        echo "  ❌ MCP connection failed for: $figma_url"
        echo "  ⚠️  Please ensure Figma MCP is properly configured"
        continue
    fi
    
    echo "  ✅ MCP connection verified"
    
    # Create screen-specific icons directory
    mkdir -p "figma_assets/icons_by_screen/${screen_id}"
    
    # MANDATORY: Download icons as-is (no Vue wrappers)
    echo "  🎯 Downloading icons (as-is, no Vue wrappers)..."
    figma-mcp download-assets --url "$figma_url" --type icons --output "figma_assets/icons_by_screen/${screen_id}" --format svg --raw-files --no-wrappers
    
    # Process each downloaded icon
    echo "  🧹 Processing downloaded icons..."
    for icon_file in "figma_assets/icons_by_screen/${screen_id}"/*.svg; do
        if [ -f "$icon_file" ]; then
            original_name=$(basename "$icon_file")
            cleaned_name=$(clean_icon_name "$original_name")
            
            # Skip if name didn't change
            if [ "$original_name" != "$cleaned_name" ]; then
                new_path="figma_assets/icons_by_screen/${screen_id}/${cleaned_name}"
                mv "$icon_file" "$new_path"
                echo "    ✅ Renamed: $original_name → $cleaned_name"
            fi
            
            # Check for duplicates in centralized directory
            icon_hash=$(get_icon_hash "$icon_file")
            if [ -n "$icon_hash" ]; then
                # Check if this icon already exists in centralized directory
                existing_file=$(find figma_assets/icons_centralized -name "*.svg" -exec sh -c 'if [ "$(md5sum "$1" | cut -d" " -f1)" = "$2" ]; then echo "$1"; fi' _ {} "$icon_hash" \;)
                
                if [ -z "$existing_file" ]; then
                    # Icon is unique, copy to centralized directory
                    cp "$icon_file" "figma_assets/icons_centralized/${cleaned_name}"
                    echo "    📁 Added to centralized: $cleaned_name"
                else
                    # Icon already exists, create symlink for reuse
                    rm "$icon_file"
                    ln -s "../../icons_centralized/${cleaned_name}" "$icon_file"
                    echo "    🔗 Reusing existing icon: $cleaned_name"
                fi
            fi
        fi
    done
    
    echo "  ✅ Icon processing completed for: $screen_id"
done < figma_links.txt

# Generate icon inventory with reuse information
echo "📊 Generating icon inventory with reuse information..."
cat > figma_icon_inventory.json << 'EOF'
{
  "icon_inventory": {
    "total_unique_icons": 0,
    "total_icon_instances": 0,
    "reuse_rate": 0,
    "icons": []
  },
  "reuse_statistics": {
    "most_reused_icons": [],
    "screen_usage": {},
    "duplicate_icons": []
  }
}
EOF

# Count unique icons and instances
unique_icons=$(find figma_assets/icons_centralized -name "*.svg" | wc -l)
total_instances=$(find figma_assets/icons_by_screen -name "*.svg" -o -name "*.svg" | wc -l)

# Update inventory
jq --arg unique "$unique_icons" --arg total "$total_instances" '
  .icon_inventory.total_unique_icons = ($unique | tonumber) |
  .icon_inventory.total_icon_instances = ($total | tonumber) |
  .icon_inventory.reuse_rate = (if ($total | tonumber) > 0 then ($unique | tonumber) / ($total | tonumber) else 0 end)
' figma_icon_inventory.json > temp_inventory.json && mv temp_inventory.json figma_icon_inventory.json

# Generate icon usage documentation
echo "📚 Generating icon usage documentation..."
cat > FIGMA_ICONS_USAGE_GUIDE.md << EOF
# 🎯 Figma Icons Usage Guide

## Overview
This document provides guidance on using downloaded Figma icons in your Vue.js application.

## Icon Organization

### Centralized Icons
All unique icons are stored in: \`figma_assets/icons_centralized/\`

### Screen-Specific Icons
Icons used in specific screens are stored in: \`figma_assets/icons_by_screen/{screen_id}/\`

## Usage in Vue.js Components

### Direct SVG Import (Recommended)
\`\`\`vue
<template>
  <div>
    <!-- Use icons directly as SVG -->
    <img src="@/assets/icons/home.svg" alt="Home" />
    <img src="@/assets/icons/user.svg" alt="User" />
  </div>
</template>
\`\`\`

### Inline SVG (For Styling)
\`\`\`vue
<template>
  <div>
    <!-- Import SVG content for styling -->
    <svg class="icon" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  </div>
</template>

<style scoped>
.icon {
  width: 24px;
  height: 24px;
  fill: currentColor;
}
</style>
\`\`\`

## Icon Naming Convention

### Cleaned Names
- Original: \`home--Streamline-Tabler.svg\`
- Cleaned: \`home.svg\`

### Common Cleanup Rules Applied
- Removed \`--Streamline-Tabler\`
- Removed \`--Outline\`
- Removed \`--Filled\`
- Removed \`--Solid\`
- Cleaned up double dashes

## Reuse Optimization

### Automatic Deduplication
The system automatically:
1. Detects duplicate icons by content hash
2. Stores unique icons in centralized directory
3. Creates symlinks for reused icons
4. Maintains reference to original screen usage

### Reuse Statistics
- Total Unique Icons: $unique_icons
- Total Icon Instances: $total_instances
- Reuse Rate: $(echo "scale=2; $unique_icons * 100 / $total_instances" | bc -l)%

## Best Practices

### 1. Use Icons As-Is
- ✅ Import SVG files directly
- ✅ Use in \`<img>\` tags
- ❌ Don't create Vue wrapper components for simple icons

### 2. Optimize for Reuse
- ✅ Use centralized icon directory
- ✅ Reference icons by cleaned names
- ✅ Leverage automatic deduplication

### 3. Maintain Consistency
- ✅ Use consistent naming conventions
- ✅ Apply same styling approach across components
- ✅ Document icon usage patterns

## File Structure
\`\`\`
figma_assets/
├── icons_centralized/          # Unique icons only
│   ├── home.svg
│   ├── user.svg
│   └── settings.svg
├── icons_by_screen/            # Screen-specific references
│   ├── dashboard/
│   │   ├── home.svg -> ../../icons_centralized/home.svg
│   │   └── user.svg -> ../../icons_centralized/user.svg
│   └── profile/
│       ├── user.svg -> ../../icons_centralized/user.svg
│       └── settings.svg -> ../../icons_centralized/settings.svg
└── figma_icon_inventory.json   # Usage statistics
\`\`\`

## Integration with Vue.js

### Webpack Configuration
Ensure your webpack config handles SVG files:
\`\`\`javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ['file-loader']
      }
    ]
  }
}
\`\`\`

### Vue Router Integration
\`\`\`javascript
// Use icons in navigation
const routes = [
  {
    path: '/home',
    name: 'Home',
    icon: '@/assets/icons/home.svg'
  }
]
\`\`\`

Generated on: $(date)
EOF

# Generate Vue.js integration examples (reference only)
echo "⚛️ Generating Vue.js integration examples (reference only)..."
cat > figma_vue_icon_examples.json << EOF
{
  "vue_integration_examples": {
    "direct_import": {
      "description": "Import icons directly in Vue components",
      "example": "<img src='@/assets/icons/home.svg' alt='Home' />"
    },
    "inline_svg": {
      "description": "Use SVG content inline for styling",
      "example": "<svg class='icon' viewBox='0 0 24 24'><path d='...'/></svg>"
    },
    "dynamic_loading": {
      "description": "Load icons dynamically based on props",
      "example": "<img :src='\`@/assets/icons/\${iconName}.svg\`' :alt='iconName' />"
    }
  },
  "best_practices": [
    "Use icons as-is without Vue wrappers",
    "Leverage automatic deduplication",
    "Reference icons by cleaned names",
    "Maintain consistent styling approach"
  ],
  "icon_inventory": {
    "centralized_location": "figma_assets/icons_centralized/",
    "screen_references": "figma_assets/icons_by_screen/",
    "total_unique_icons": $unique_icons,
    "total_instances": $total_instances
  }
}
EOF

echo "🎉 MANDATORY Figma Icon Management completed successfully!"
echo "📁 Centralized icons: figma_assets/icons_centralized/"
echo "📁 Screen-specific icons: figma_assets/icons_by_screen/"
echo "📄 Icon inventory: figma_icon_inventory.json"
echo "📚 Usage guide: FIGMA_ICONS_USAGE_GUIDE.md"
echo "⚛️ Vue examples: figma_vue_icon_examples.json"

# Verify icon management
echo "🔍 Verifying icon management..."
total_icons=$(find figma_assets -name "*.svg" | wc -l)
echo "📊 Total SVG files managed: $total_icons"

if [ $total_icons -gt 0 ]; then
    echo "✅ Icon management verification successful!"
    echo "📈 Reuse optimization: $(echo "scale=1; $unique_icons * 100 / $total_instances" | bc -l)%"
else
    echo "❌ No icons found! Please check Figma MCP configuration."
    exit 1
fi
