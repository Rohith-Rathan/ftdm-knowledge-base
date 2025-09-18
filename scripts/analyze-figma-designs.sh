#!/bin/bash
# analyze-figma-designs.sh
echo "🎨 Starting Figma Design Analysis via MCP..."

# Check if DESIGN_ASSETS.md exists (try both locations)
DESIGN_ASSETS_FILE=""
if [ -f "DESIGN_ASSETS.md" ]; then
    DESIGN_ASSETS_FILE="DESIGN_ASSETS.md"
    echo "📋 Found DESIGN_ASSETS.md in root directory"
elif [ -f "UXD/DESIGN_ASSETS.md" ]; then
    DESIGN_ASSETS_FILE="UXD/DESIGN_ASSETS.md"
    echo "📋 Found DESIGN_ASSETS.md in UXD folder"
else
    echo "❌ DESIGN_ASSETS.md not found in root directory or UXD folder!"
    echo "Please create DESIGN_ASSETS.md with Figma links as per the template."
    echo "You can place it in either:"
    echo "  - Root directory: ./DESIGN_ASSETS.md"
    echo "  - UXD folder: ./UXD/DESIGN_ASSETS.md"
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

# Create analysis output directory
mkdir -p figma_analysis

# Analyze each Figma screen using MCP (NOT web search)
while IFS= read -r figma_url; do
    echo "🔍 Processing Figma URL: $figma_url"
    
    # Extract screen ID from URL
    screen_id=$(echo $figma_url | grep -o '[^/]*$')
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
    echo "📸 Analyzing Figma screen: $figma_url"
    
    # Extract screen ID from URL
    screen_id=$(echo $figma_url | grep -o '[^/]*$' | sed 's/[^a-zA-Z0-9]/_/g')
    
    # Analyze via MCP
    echo "  🔍 Analyzing via MCP..."
    figma-mcp analyze-screen --url "$figma_url" --output "figma_analysis/analysis_${screen_id}.json"
    
    # Extract Dev Mode specifications
    echo "  📐 Extracting Dev Mode specifications..."
    figma-mcp extract-dev-mode --url "$figma_url" --output "figma_analysis/dev_mode_${screen_id}.json"
    
    # Extract design system
    echo "  🎨 Extracting design system..."
    figma-mcp extract-design-system --url "$figma_url" --output "figma_analysis/design_system_${screen_id}.json"
    
    # Generate component specifications
    echo "  📋 Generating component specifications..."
    figma-mcp generate-component-specs --url "$figma_url" --output "figma_analysis/components_${screen_id}.json"
    
    echo "  ✅ Analysis completed for: $screen_id"
done < figma_links.txt

echo "🎉 Figma Design Analysis completed successfully!"

# Generate summary report
echo "📊 Generating analysis summary..."
figma-mcp generate-summary --input-dir "figma_analysis" --output "figma_analysis_summary.json"

# Generate CSS variables
echo "🎨 Generating CSS variables..."
figma-mcp generate-css-variables --input "figma_analysis_summary.json" --output "figma_css_variables.css"

# Generate Tailwind config
echo "⚙️ Generating Tailwind config..."
figma-mcp generate-tailwind-config --input "figma_analysis_summary.json" --output "figma_tailwind.config.js"

echo "✅ Figma Analysis Framework completed!"
echo "📁 Analysis files saved in: figma_analysis/"
echo "📄 Summary report: figma_analysis_summary.json"
echo "🎨 CSS variables: figma_css_variables.css"
echo "⚙️ Tailwind config: figma_tailwind.config.js"
