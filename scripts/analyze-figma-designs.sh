#!/bin/bash
# analyze-figma-designs.sh
echo "🎨 Starting Figma Design Analysis via MCP..."

# Check if figma_links.md exists (try both locations)
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
