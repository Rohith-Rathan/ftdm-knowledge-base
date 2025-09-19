#!/bin/bash
# download-figma-assets.sh
# MANDATORY: Download all assets from Figma screens using MCP

echo "🎨 MANDATORY: Downloading Figma Assets via MCP..."

# Check if figma_links.md exists (try multiple locations)
FIGMA_LINKS_FILE=""
if [ -f "figma_links.md" ]; then
    FIGMA_LINKS_FILE="figma_links.md"
    echo "📋 Found figma_links.md in root directory"
elif [ -f "UXD/figma_links.md" ]; then
    FIGMA_LINKS_FILE="UXD/figma_links.md"
    echo "📋 Found figma_links.md in UXD folder"
elif [ -f "Stage1_Mermaid_Generation/UXD/figma_links.md" ]; then
    FIGMA_LINKS_FILE="Stage1_Mermaid_Generation/UXD/figma_links.md"
    echo "📋 Found figma_links.md in Stage1 UXD folder"
else
    echo "❌ figma_links.md not found!"
    echo "Please create figma_links.md with Figma links as per the template."
    echo "You can place it in any of these locations:"
    echo "  - Root directory: ./figma_links.md"
    echo "  - UXD folder: ./UXD/figma_links.md"
    echo "  - Stage1 UXD folder: ./Stage1_Mermaid_Generation/UXD/figma_links.md"
    exit 1
fi

# Check if Figma MCP tools are installed
if ! command -v figma-mcp &> /dev/null; then
    echo "❌ Figma MCP CLI not found!"
    echo "Installing Figma MCP CLI..."
    npm install -g @figma/mcp-cli
fi

# Extract Figma links from figma_links.md
echo "📋 Extracting Figma links from $FIGMA_LINKS_FILE..."
grep -o 'https://www.figma.com/[^)]*' "$FIGMA_LINKS_FILE" > figma_links.txt

if [ ! -s figma_links.txt ]; then
    echo "❌ No Figma links found in figma_links.md!"
    exit 1
fi

echo "Found $(wc -l < figma_links.txt) Figma links"

# Create assets directory structure
mkdir -p figma_assets/{icons,images,components,design_tokens}

# Download assets from each Figma screen
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
    
    # Create screen-specific directory
    mkdir -p "figma_assets/screens/${screen_id}"
    
    # MANDATORY: Download all icons (as-is, no Vue wrappers)
    echo "  🎯 Downloading icons (as-is, no Vue wrappers)..."
    figma-mcp download-assets --url "$figma_url" --type icons --output "figma_assets/screens/${screen_id}/icons" --format svg --raw-files --no-wrappers
    
    # Clean up icon names (remove "--Streamline-Tabler" text)
    echo "  🧹 Cleaning up icon names..."
    find "figma_assets/screens/${screen_id}/icons" -name "*--Streamline-Tabler*" -exec sh -c '
        for file; do
            new_name=$(echo "$file" | sed "s/--Streamline-Tabler//g")
            mv "$file" "$new_name"
            echo "    ✅ Renamed: $(basename "$file") → $(basename "$new_name")"
        done
    ' _ {} +
    
    # MANDATORY: Download all images (as-is, no Vue wrappers)
    echo "  🖼️ Downloading images (as-is, no Vue wrappers)..."
    figma-mcp download-assets --url "$figma_url" --type images --output "figma_assets/screens/${screen_id}/images" --format png,jpg --raw-files --no-wrappers
    
    # MANDATORY: Download all components (as-is, no Vue wrappers)
    echo "  🧩 Downloading components (as-is, no Vue wrappers)..."
    figma-mcp download-assets --url "$figma_url" --type components --output "figma_assets/screens/${screen_id}/components" --format svg,png --raw-files --no-wrappers
    
    # OPTIONAL: Extract design tokens (if available)
    echo "  🎨 Extracting design tokens (if available)..."
    if figma-mcp extract-design-tokens --url "$figma_url" --output "figma_assets/screens/${screen_id}/design_tokens.json" 2>/dev/null; then
        echo "    ✅ Design tokens extracted"
    else
        echo "    ⚠️  Design tokens not available for this screen"
    fi
    
    # OPTIONAL: Extract color palette (if available)
    echo "  🌈 Extracting color palette (if available)..."
    if figma-mcp extract-colors --url "$figma_url" --output "figma_assets/screens/${screen_id}/color_palette.json" 2>/dev/null; then
        echo "    ✅ Color palette extracted"
    else
        echo "    ⚠️  Color palette not available for this screen"
    fi
    
    # OPTIONAL: Extract typography (if available)
    echo "  📝 Extracting typography (if available)..."
    if figma-mcp extract-typography --url "$figma_url" --output "figma_assets/screens/${screen_id}/typography.json" 2>/dev/null; then
        echo "    ✅ Typography extracted"
    else
        echo "    ⚠️  Typography not available for this screen"
    fi
    
    # OPTIONAL: Extract spacing/sizing (if available)
    echo "  📐 Extracting spacing and sizing (if available)..."
    if figma-mcp extract-spacing --url "$figma_url" --output "figma_assets/screens/${screen_id}/spacing.json" 2>/dev/null; then
        echo "    ✅ Spacing extracted"
    else
        echo "    ⚠️  Spacing not available for this screen"
    fi
    
    # MANDATORY: Generate asset manifest
    echo "  📋 Generating asset manifest..."
    figma-mcp generate-asset-manifest --url "$figma_url" --output "figma_assets/screens/${screen_id}/asset_manifest.json"
    
    echo "  ✅ Assets downloaded for: $screen_id"
done < figma_links.txt

# Generate consolidated asset inventory
echo "📊 Generating consolidated asset inventory..."
figma-mcp generate-asset-inventory --input-dir "figma_assets" --output "figma_asset_inventory.json"

# Generate CSS variables from all assets
echo "🎨 Generating CSS variables from assets..."
figma-mcp generate-css-variables --input-dir "figma_assets" --output "figma_css_variables.css"

# Generate Vue.js component mappings (for reference only, not creating wrapper files)
echo "⚛️ Generating Vue.js component mappings (reference only)..."
figma-mcp generate-vue-mappings --input-dir "figma_assets" --output "figma_vue_components.json" --reference-only --no-wrapper-generation

# Generate asset usage documentation
echo "📚 Generating asset usage documentation..."
figma-mcp generate-asset-docs --input-dir "figma_assets" --output "FIGMA_ASSETS_DOCUMENTATION.md"

echo "🎉 MANDATORY Figma Asset Download completed successfully!"
echo "📁 Assets saved in: figma_assets/"
echo "📄 Asset inventory: figma_asset_inventory.json"
echo "🎨 CSS variables: figma_css_variables.css"
echo "⚛️ Vue components: figma_vue_components.json"
echo "📚 Documentation: FIGMA_ASSETS_DOCUMENTATION.md"

# Verify asset download
echo "🔍 Verifying asset download..."
total_assets=$(find figma_assets -type f \( -name "*.svg" -o -name "*.png" -o -name "*.jpg" -o -name "*.json" \) | wc -l)
echo "📊 Total assets downloaded: $total_assets"

if [ $total_assets -gt 0 ]; then
    echo "✅ Asset download verification successful!"
else
    echo "❌ No assets found! Please check Figma MCP configuration."
    exit 1
fi
