#!/bin/bash
# automated-workflow.sh
# Enhanced EFTDM Workflow Automation Script

echo "🚀 Starting Enhanced EFTDM Workflow Automation"
echo "=============================================="

# Step 1: Analyze Raw Requirements and Generate Mermaid Diagrams
echo "📋 Step 1: Analyzing Raw Requirements..."
python scripts/analyze-requirements.py raw_requirements.txt

echo "🎨 Step 2: Generating Mermaid Diagrams..."
python scripts/generate-mermaid-diagrams.py

echo "✅ Step 3: Validating Mermaid Diagrams..."
python scripts/validate-mermaid-diagrams.py

# Step 2: Create Enhanced FSD with Mermaid Integration
echo "📝 Step 4: Creating Enhanced FSD with Mermaid..."
python scripts/create-enhanced-fsd.py \
    --requirements raw_requirements.txt \
    --diagrams diagrams/ \
    --output enhanced_fsd.md

# Step 3: Generate TSD from FSD
echo "🔧 Step 5: Generating TSD from FSD..."
python scripts/generate-tsd.py \
    --fsd enhanced_fsd.md \
    --output technical_specification.md

# Step 4: Analyze UXD and Generate RTSD
echo "🎨 Step 6: Analyzing UXD and Generating RTSD..."
python scripts/analyze-uxd.py \
    --uxd-folder UXD/ \
    --design-assets DESIGN_ASSETS.md \
    --fsd enhanced_fsd.md \
    --tsd technical_specification.md \
    --output refined_technical_specification.md

# Step 5: Begin EFTDM Development Process
echo "🚀 Step 7: Starting EFTDM Development Process..."
python scripts/start-eftdm-development.py \
    --fsd enhanced_fsd.md \
    --tsd technical_specification.md \
    --rtsd refined_technical_specification.md \
    --mermaid-diagrams diagrams/

echo "✅ Enhanced EFTDM Workflow Complete!"
echo "📁 Generated Files:"
echo "   - enhanced_fsd.md"
echo "   - technical_specification.md"
echo "   - refined_technical_specification.md"
echo "   - diagrams/ (Mermaid diagrams)"
echo "🎉 Ready for development!"
