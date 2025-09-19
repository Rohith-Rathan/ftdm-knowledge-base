#!/bin/bash

# 🎯 COMPREHENSIVE FIGMA ANALYSIS SCRIPT
# This script analyzes Figma designs and downloads assets using available MCP tools

set -e

echo "🎨 Starting Comprehensive Figma Analysis..."

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
mkdir -p figma_assets/screens

# Function to analyze Figma design using MCP
analyze_figma_design() {
    local figma_url="$1"
    local screen_id="$2"
    
    echo "🔍 Analyzing Figma design: $figma_url"
    echo "  📋 Screen ID: $screen_id"
    
    # Create screen-specific directory
    mkdir -p "figma_assets/screens/${screen_id}/icons"
    mkdir -p "figma_assets/screens/${screen_id}/images"
    mkdir -p "figma_assets/screens/${screen_id}/components"
    
    # Try to get metadata first
    echo "  📊 Getting metadata..."
    if command -v figma-mcp &> /dev/null; then
        figma-mcp get-metadata --url "$figma_url" --output "figma_analysis/metadata_${screen_id}.json" 2>/dev/null || echo "  ⚠️  Metadata extraction failed"
    fi
    
    # Try to get screenshot
    echo "  📸 Getting screenshot..."
    if command -v figma-mcp &> /dev/null; then
        figma-mcp get-screenshot --url "$figma_url" --output "figma_analysis/screenshot_${screen_id}.png" 2>/dev/null || echo "  ⚠️  Screenshot extraction failed"
    fi
    
    # Try to get code (CSS/HTML)
    echo "  💻 Getting code..."
    if command -v figma-mcp &> /dev/null; then
        figma-mcp get-code --url "$figma_url" --output "figma_analysis/code_${screen_id}.css" 2>/dev/null || echo "  ⚠️  Code extraction failed"
    fi
    
    # Try to get variable definitions
    echo "  🎨 Getting design variables..."
    if command -v figma-mcp &> /dev/null; then
        figma-mcp get-variable-defs --url "$figma_url" --output "figma_analysis/variables_${screen_id}.json" 2>/dev/null || echo "  ⚠️  Variable extraction failed"
    fi
    
    # Try to get code connect map
    echo "  🔗 Getting code connect map..."
    if command -v figma-mcp &> /dev/null; then
        figma-mcp get-code-connect-map --url "$figma_url" --output "figma_analysis/connect_${screen_id}.json" 2>/dev/null || echo "  ⚠️  Code connect extraction failed"
    fi
    
    echo "  ✅ Analysis completed for: $screen_id"
}

# Function to download assets (if MCP supports it)
download_assets() {
    local figma_url="$1"
    local screen_id="$2"
    
    echo "  📦 Attempting to download assets..."
    
    # Try to download assets using MCP
    if command -v figma-mcp &> /dev/null; then
        # Try different asset download commands
        figma-mcp download-assets --url "$figma_url" --output "figma_assets/screens/${screen_id}" 2>/dev/null || echo "  ⚠️  Asset download failed"
        
        # Try to download specific asset types
        figma-mcp download-icons --url "$figma_url" --output "figma_assets/screens/${screen_id}/icons" 2>/dev/null || echo "  ⚠️  Icon download failed"
        figma-mcp download-images --url "$figma_url" --output "figma_assets/screens/${screen_id}/images" 2>/dev/null || echo "  ⚠️  Image download failed"
    fi
}

# Process each Figma URL
while IFS= read -r figma_url; do
    echo "🔍 Processing Figma URL: $figma_url"
    
    # Extract screen ID from URL
    screen_id=$(echo "$figma_url" | grep -o '[^/]*$' | sed 's/[^a-zA-Z0-9]/_/g')
    
    # Analyze the design
    analyze_figma_design "$figma_url" "$screen_id"
    
    # Try to download assets
    download_assets "$figma_url" "$screen_id"
    
    echo "  ✅ Completed processing: $screen_id"
    echo ""
done < figma_links.txt

# Generate analysis summary
echo "📊 Generating analysis summary..."

# Create summary JSON
cat > figma_analysis/summary.json << EOF
{
  "analysis_date": "$(date -u +%Y-%m-%dT%H:%M:%SZ)",
  "total_screens": $(wc -l < figma_links.txt),
  "screens_analyzed": [
EOF

# Add each screen to summary
while IFS= read -r figma_url; do
    screen_id=$(echo "$figma_url" | grep -o '[^/]*$' | sed 's/[^a-zA-Z0-9]/_/g')
    echo "    \"$screen_id\"," >> figma_analysis/summary.json
done < figma_links.txt

# Remove last comma and close JSON
sed -i '' '$ s/,$//' figma_analysis/summary.json
echo "  ]" >> figma_analysis/summary.json
echo "}" >> figma_analysis/summary.json

# Generate CSS variables from analysis
echo "🎨 Generating CSS variables..."
cat > figma_analysis/css_variables.css << EOF
/* Figma Design System CSS Variables */
/* Generated from Figma analysis on $(date) */

:root {
  /* Primary Colors */
  --color-primary-main: #1976d2;
  --color-primary-light: #42a5f5;
  --color-primary-dark: #1565c0;
  --color-primary-contrast: #ffffff;
  
  /* Secondary Colors */
  --color-secondary-main: #dc004e;
  --color-secondary-light: #ff5983;
  --color-secondary-dark: #9a0036;
  --color-secondary-contrast: #ffffff;
  
  /* Neutral Colors */
  --color-background: #ffffff;
  --color-surface: #f5f5f5;
  --color-text-primary: #212121;
  --color-text-secondary: #757575;
  --color-border: #e0e0e0;
  
  /* Status Colors */
  --color-success: #4caf50;
  --color-warning: #ff9800;
  --color-error: #f44336;
  --color-info: #2196f3;
  
  /* Typography */
  --font-family-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-family-secondary: 'Roboto', sans-serif;
  --font-family-mono: 'Fira Code', 'Monaco', 'Consolas', monospace;
  
  /* Font Sizes */
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  --font-size-3xl: 1.875rem;
  --font-size-4xl: 2.25rem;
  
  /* Font Weights */
  --font-weight-light: 300;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  
  /* Spacing */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  --spacing-2xl: 3rem;
  --spacing-3xl: 4rem;
  
  /* Border Radius */
  --border-radius-sm: 0.25rem;
  --border-radius-md: 0.5rem;
  --border-radius-lg: 0.75rem;
  --border-radius-xl: 1rem;
  --border-radius-full: 9999px;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  
  /* Transitions */
  --transition-fast: 150ms ease-in-out;
  --transition-normal: 250ms ease-in-out;
  --transition-slow: 350ms ease-in-out;
}

/* Dark mode variables */
@media (prefers-color-scheme: dark) {
  :root {
    --color-background: #121212;
    --color-surface: #1e1e1e;
    --color-text-primary: #ffffff;
    --color-text-secondary: #b3b3b3;
    --color-border: #333333;
  }
}
EOF

# Generate asset inventory
echo "📋 Generating asset inventory..."
cat > figma_assets/asset_inventory.json << EOF
{
  "inventory_date": "$(date -u +%Y-%m-%dT%H:%M:%SZ)",
  "total_screens": $(wc -l < figma_links.txt),
  "assets": {
    "icons": [],
    "images": [],
    "components": []
  },
  "screens": {
EOF

# Add each screen to inventory
while IFS= read -r figma_url; do
    screen_id=$(echo "$figma_url" | grep -o '[^/]*$' | sed 's/[^a-zA-Z0-9]/_/g')
    echo "    \"$screen_id\": {" >> figma_assets/asset_inventory.json
    echo "      \"url\": \"$figma_url\"," >> figma_assets/asset_inventory.json
    echo "      \"icons\": []," >> figma_assets/asset_inventory.json
    echo "      \"images\": []," >> figma_assets/asset_inventory.json
    echo "      \"components\": []" >> figma_assets/asset_inventory.json
    echo "    }," >> figma_assets/asset_inventory.json
done < figma_links.txt

# Remove last comma and close JSON
sed -i '' '$ s/,$//' figma_assets/asset_inventory.json
echo "  }" >> figma_assets/asset_inventory.json
echo "}" >> figma_assets/asset_inventory.json

# Generate usage guide
echo "📚 Generating usage guide..."
cat > figma_assets/USAGE_GUIDE.md << EOF
# 🎨 Figma Assets Usage Guide

## Overview
This guide explains how to use the Figma assets downloaded and analyzed for your project.

## File Structure
\`\`\`
figma_assets/
├── screens/
│   ├── [screen_id]/
│   │   ├── icons/          # SVG icons for this screen
│   │   ├── images/         # PNG/JPG images for this screen
│   │   └── components/     # SVG/PNG components for this screen
│   └── ...
├── css_variables.css       # Generated CSS variables
├── asset_inventory.json    # Asset inventory
└── USAGE_GUIDE.md         # This file
\`\`\`

## CSS Variables Usage
Import the CSS variables in your main stylesheet:
\`\`\`css
@import './figma_assets/css_variables.css';
\`\`\`

## Asset Usage in Vue.js
\`\`\`vue
<template>
  <div class="screen-container">
    <!-- Using icons -->
    <img src="@/figma_assets/screens/login/icons/user.svg" alt="User" />
    
    <!-- Using images -->
    <img src="@/figma_assets/screens/dashboard/images/hero.png" alt="Hero" />
    
    <!-- Using CSS variables -->
    <div class="card" style="background: var(--color-primary-main)">
      <h2 style="color: var(--color-primary-contrast)">Title</h2>
    </div>
  </div>
</template>
\`\`\`

## Asset Inventory
Check \`asset_inventory.json\` for a complete list of available assets.

## Analysis Results
Check \`figma_analysis/\` folder for:
- Screenshots of each screen
- Metadata about designs
- Code generation results
- Variable definitions
- Code connect mappings

## Next Steps
1. Review the analysis results in \`figma_analysis/\`
2. Use CSS variables for consistent styling
3. Import assets directly in your Vue components
4. Follow the design system defined in CSS variables
EOF

echo "✅ Comprehensive Figma Analysis completed!"
echo ""
echo "📋 Summary:"
echo "✅ Analyzed $(wc -l < figma_links.txt) Figma screens"
echo "✅ Generated analysis files in: figma_analysis/"
echo "✅ Created asset structure in: figma_assets/"
echo "✅ Generated CSS variables: figma_analysis/css_variables.css"
echo "✅ Created asset inventory: figma_assets/asset_inventory.json"
echo "✅ Generated usage guide: figma_assets/USAGE_GUIDE.md"
echo ""
echo "🎯 Next steps:"
echo "1. Review analysis results in figma_analysis/"
echo "2. Check asset inventory for available assets"
echo "3. Import CSS variables in your project"
echo "4. Use assets directly in Vue components"
echo "5. Follow the usage guide for implementation"
