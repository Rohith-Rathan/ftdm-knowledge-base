#!/bin/bash
# detect-design-assets.sh
echo "🔍 Detecting Design Assets..."

# Initialize variables
HAS_UXD_IMAGES=false
HAS_FIGMA_LINKS=false
DESIGN_ASSETS_FILE=""
UXD_COUNT=0
FIGMA_COUNT=0

# Check for UXD images
if [ -d "UXD" ]; then
    UXD_COUNT=$(find UXD -name "*.jpg" -o -name "*.png" -o -name "*.jpeg" | wc -l)
    if [ $UXD_COUNT -gt 0 ]; then
        HAS_UXD_IMAGES=true
        echo "✅ Found $UXD_COUNT UXD images in UXD/ folder"
        find UXD -name "*.jpg" -o -name "*.png" -o -name "*.jpeg" | while read file; do
            echo "  📸 $file"
        done
    else
        echo "⚠️  UXD folder exists but no images found"
    fi
else
    echo "❌ UXD folder not found"
fi

# Check for Figma links (try both locations)
if [ -f "DESIGN_ASSETS.md" ]; then
    DESIGN_ASSETS_FILE="DESIGN_ASSETS.md"
    echo "✅ Found DESIGN_ASSETS.md in root directory"
elif [ -f "UXD/DESIGN_ASSETS.md" ]; then
    DESIGN_ASSETS_FILE="UXD/DESIGN_ASSETS.md"
    echo "✅ Found DESIGN_ASSETS.md in UXD folder"
else
    echo "❌ DESIGN_ASSETS.md not found in either location"
fi

# Extract Figma links if DESIGN_ASSETS.md exists
if [ -n "$DESIGN_ASSETS_FILE" ]; then
    FIGMA_COUNT=$(grep -o 'https://www.figma.com/[^)]*' "$DESIGN_ASSETS_FILE" | wc -l)
    if [ $FIGMA_COUNT -gt 0 ]; then
        HAS_FIGMA_LINKS=true
        echo "✅ Found $FIGMA_COUNT Figma links in $DESIGN_ASSETS_FILE"
        grep -o 'https://www.figma.com/[^)]*' "$DESIGN_ASSETS_FILE" | while read link; do
            echo "  🔗 $link"
        done
    else
        echo "⚠️  DESIGN_ASSETS.md exists but no Figma links found"
    fi
fi

# Determine design asset scenario
echo ""
echo "🎯 Design Asset Scenario Detected:"

if [ "$HAS_UXD_IMAGES" = true ] && [ "$HAS_FIGMA_LINKS" = true ]; then
    echo "📋 Scenario 3: Both UXD Images and Figma Links"
    echo "   - UXD Images: $UXD_COUNT files"
    echo "   - Figma Links: $FIGMA_COUNT links"
    echo "   - Analysis: UXD images + Figma MCP analysis"
    echo "   - Priority: Figma MCP (primary), UXD images (fallback)"
elif [ "$HAS_UXD_IMAGES" = true ] && [ "$HAS_FIGMA_LINKS" = false ]; then
    echo "📋 Scenario 1: Only UXD Images"
    echo "   - UXD Images: $UXD_COUNT files"
    echo "   - Analysis: UXD image analysis only"
    echo "   - Priority: UXD image analysis"
elif [ "$HAS_UXD_IMAGES" = false ] && [ "$HAS_FIGMA_LINKS" = true ]; then
    echo "📋 Scenario 2: Only Figma Links"
    echo "   - Figma Links: $FIGMA_COUNT links"
    echo "   - Analysis: Figma MCP analysis only"
    echo "   - Priority: Figma MCP analysis"
else
    echo "❌ Scenario 0: No Design Assets Found"
    echo "   - No UXD images found"
    echo "   - No Figma links found"
    echo "   - Recommendation: Add design assets for better implementation"
fi

echo ""
echo "🔧 Recommended Actions:"

if [ "$HAS_UXD_IMAGES" = true ]; then
    echo "✅ Run UXD image analysis: ./scripts/analyze-uxd-images.sh"
fi

if [ "$HAS_FIGMA_LINKS" = true ]; then
    echo "✅ Run Figma MCP analysis: ./scripts/analyze-figma-designs.sh"
fi

if [ "$HAS_UXD_IMAGES" = false ] && [ "$HAS_FIGMA_LINKS" = false ]; then
    echo "⚠️  Create design assets:"
    echo "   - Add UXD images to UXD/ folder, OR"
    echo "   - Create DESIGN_ASSETS.md with Figma links"
fi

echo ""
echo "✅ Design asset detection completed!"
