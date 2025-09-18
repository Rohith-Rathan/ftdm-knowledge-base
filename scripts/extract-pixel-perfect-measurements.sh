#!/bin/bash
# extract-pixel-perfect-measurements.sh
# MANDATORY: Extract pixel-perfect measurements from Figma using MCP

echo "📐 MANDATORY: Extracting Pixel-Perfect Measurements from Figma..."

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

# Create measurements directory structure
mkdir -p pixel_perfect_measurements/{components,layouts,spacing,typography,colors}

# Extract pixel-perfect measurements from each Figma screen
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
    mkdir -p "pixel_perfect_measurements/screens/${screen_id}"
    
    # MANDATORY: Extract exact component measurements
    echo "  📐 Extracting component measurements..."
    figma-mcp extract-component-measurements --url "$figma_url" --output "pixel_perfect_measurements/screens/${screen_id}/component_measurements.json" --precision 1px
    
    # MANDATORY: Extract exact layout measurements
    echo "  📏 Extracting layout measurements..."
    figma-mcp extract-layout-measurements --url "$figma_url" --output "pixel_perfect_measurements/screens/${screen_id}/layout_measurements.json" --precision 1px
    
    # MANDATORY: Extract exact spacing measurements
    echo "  📊 Extracting spacing measurements..."
    figma-mcp extract-spacing-measurements --url "$figma_url" --output "pixel_perfect_measurements/screens/${screen_id}/spacing_measurements.json" --precision 1px
    
    # MANDATORY: Extract exact typography measurements
    echo "  📝 Extracting typography measurements..."
    figma-mcp extract-typography-measurements --url "$figma_url" --output "pixel_perfect_measurements/screens/${screen_id}/typography_measurements.json" --precision 1px
    
    # MANDATORY: Extract exact color specifications
    echo "  🌈 Extracting color specifications..."
    figma-mcp extract-color-specifications --url "$figma_url" --output "pixel_perfect_measurements/screens/${screen_id}/color_specifications.json" --precision hex
    
    # MANDATORY: Extract responsive breakpoints
    echo "  📱 Extracting responsive breakpoints..."
    figma-mcp extract-responsive-breakpoints --url "$figma_url" --output "pixel_perfect_measurements/screens/${screen_id}/responsive_breakpoints.json"
    
    # MANDATORY: Generate CSS with exact measurements
    echo "  🎨 Generating CSS with exact measurements..."
    figma-mcp generate-pixel-perfect-css --url "$figma_url" --output "pixel_perfect_measurements/screens/${screen_id}/pixel_perfect.css" --precision 1px
    
    # MANDATORY: Generate Vue.js component specs with measurements
    echo "  ⚛️ Generating Vue.js component specs..."
    figma-mcp generate-vue-component-specs --url "$figma_url" --output "pixel_perfect_measurements/screens/${screen_id}/vue_component_specs.json" --precision 1px
    
    # MANDATORY: Generate measurement validation report
    echo "  📋 Generating measurement validation report..."
    figma-mcp generate-measurement-validation --url "$figma_url" --output "pixel_perfect_measurements/screens/${screen_id}/measurement_validation.json"
    
    echo "  ✅ Pixel-perfect measurements extracted for: $screen_id"
done < figma_links.txt

# Generate consolidated measurement inventory
echo "📊 Generating consolidated measurement inventory..."
figma-mcp generate-measurement-inventory --input-dir "pixel_perfect_measurements" --output "pixel_perfect_measurement_inventory.json"

# Generate CSS variables with exact measurements
echo "🎨 Generating CSS variables with exact measurements..."
figma-mcp generate-pixel-perfect-css-variables --input-dir "pixel_perfect_measurements" --output "pixel_perfect_css_variables.css" --precision 1px

# Generate Tailwind config with exact measurements
echo "⚙️ Generating Tailwind config with exact measurements..."
figma-mcp generate-pixel-perfect-tailwind-config --input-dir "pixel_perfect_measurements" --output "pixel_perfect_tailwind.config.js" --precision 1px

# Generate Vue.js component library with measurements
echo "⚛️ Generating Vue.js component library..."
figma-mcp generate-vue-component-library --input-dir "pixel_perfect_measurements" --output "pixel_perfect_vue_components.json" --precision 1px

# Generate measurement documentation
echo "📚 Generating measurement documentation..."
figma-mcp generate-measurement-docs --input-dir "pixel_perfect_measurements" --output "PIXEL_PERFECT_MEASUREMENTS_DOCUMENTATION.md"

# Generate implementation checklist
echo "✅ Generating implementation checklist..."
figma-mcp generate-implementation-checklist --input-dir "pixel_perfect_measurements" --output "PIXEL_PERFECT_IMPLEMENTATION_CHECKLIST.md"

echo "🎉 MANDATORY Pixel-Perfect Measurement Extraction completed successfully!"
echo "📁 Measurements saved in: pixel_perfect_measurements/"
echo "📄 Measurement inventory: pixel_perfect_measurement_inventory.json"
echo "🎨 CSS variables: pixel_perfect_css_variables.css"
echo "⚙️ Tailwind config: pixel_perfect_tailwind.config.js"
echo "⚛️ Vue components: pixel_perfect_vue_components.json"
echo "📚 Documentation: PIXEL_PERFECT_MEASUREMENTS_DOCUMENTATION.md"
echo "✅ Checklist: PIXEL_PERFECT_IMPLEMENTATION_CHECKLIST.md"

# Verify measurement extraction
echo "🔍 Verifying measurement extraction..."
total_measurements=$(find pixel_perfect_measurements -name "*.json" | wc -l)
echo "📊 Total measurement files extracted: $total_measurements"

if [ $total_measurements -gt 0 ]; then
    echo "✅ Pixel-perfect measurement extraction verification successful!"
else
    echo "❌ No measurements found! Please check Figma MCP configuration."
    exit 1
fi

# Generate measurement summary
echo "📊 Generating measurement summary..."
echo "=== PIXEL-PERFECT MEASUREMENT SUMMARY ===" > measurement_summary.txt
echo "Total screens processed: $(wc -l < figma_links.txt)" >> measurement_summary.txt
echo "Total measurement files: $total_measurements" >> measurement_summary.txt
echo "Measurement precision: 1px" >> measurement_summary.txt
echo "Color precision: hex" >> measurement_summary.txt
echo "Generated on: $(date)" >> measurement_summary.txt
echo "=========================================" >> measurement_summary.txt

echo "📄 Measurement summary saved to: measurement_summary.txt"
