#!/bin/bash
# analyze-uxd-images.sh
echo "🎨 Starting UXD Image Analysis..."

# Check if UXD directory exists
if [ ! -d "UXD" ]; then
    echo "❌ UXD directory not found!"
    exit 1
fi

# Analyze each UXD image
for image in UXD/*.jpg UXD/*.png UXD/*.jpeg; do
    if [ -f "$image" ]; then
        echo "📸 Analyzing: $image"
        
        # Extract image metadata
        echo "  📊 Extracting metadata..."
        file "$image"
        
        # Analyze layout structure
        echo "  📐 Analyzing layout structure..."
        analyze-layout-structure "$image"
        
        # Identify UI elements
        echo "  🔍 Identifying UI elements..."
        identify-ui-elements "$image"
        
        # Extract design system
        echo "  🎨 Extracting design system..."
        extract-design-system "$image"
        
        # Generate design specifications
        echo "  📋 Generating design specifications..."
        generate-design-specs "$image"
        
        echo "  ✅ Analysis completed for: $image"
    fi
done

echo "🎉 UXD Image Analysis completed successfully!"

# Generate summary report
echo "📊 Generating analysis summary..."
generate-analysis-summary

echo "✅ UXD Analysis Framework completed!"
