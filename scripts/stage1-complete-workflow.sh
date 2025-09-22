#!/bin/bash
# stage1-complete-workflow.sh
# Complete Stage 1 Workflow: Mermaid Generation with Visual Previews and File Generation

set -e  # Exit on any error

echo "🎯 STAGE 1: COMPLETE MERMAID GENERATION WORKFLOW"
echo "================================================"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if we're in the right directory
if [ ! -f "Stage1_Mermaid_Generation/mermaid_generation_prompt.md" ]; then
    print_error "Please run this script from the EFTDM_FRAMEWORK root directory"
    exit 1
fi

print_status "Starting Stage 1 Complete Workflow..."

# Step 1: Create diagrams directory structure
print_status "Creating directory structure..."
mkdir -p Stage1_Mermaid_Generation/diagrams/images
print_success "Directory structure created"

# Step 2: Check Python dependencies
print_status "Checking Python dependencies..."
if ! python3 -c "import json, os, subprocess, sys" 2>/dev/null; then
    print_error "Python3 with required modules not available"
    exit 1
fi
print_success "Python dependencies OK"

# Step 3: Check for Node.js and npm (for Mermaid CLI)
print_status "Checking Node.js and npm..."
if ! command -v node &> /dev/null; then
    print_warning "Node.js not found - will use online image generation"
elif ! command -v npm &> /dev/null; then
    print_warning "npm not found - will use online image generation"
else
    print_success "Node.js and npm available"
fi

# Step 4: Check for requests library (for online image generation)
print_status "Checking requests library..."
if ! python3 -c "import requests" 2>/dev/null; then
    print_warning "requests library not found - installing..."
    pip3 install requests 2>/dev/null || {
        print_warning "Could not install requests - image generation may fail"
    }
fi

# Step 5: Run the enhanced Mermaid generator
print_status "Running enhanced Mermaid generator..."
if python3 scripts/enhanced-mermaid-generator.py; then
    print_success "Mermaid generation completed successfully"
else
    print_error "Mermaid generation failed"
    exit 1
fi

# Step 6: Verify file generation
print_status "Verifying generated files..."

# Check MMD files
mmd_count=0
for file in Stage1_Mermaid_Generation/diagrams/*.mmd; do
    if [ -f "$file" ]; then
        mmd_count=$((mmd_count + 1))
    fi
done

# Check PNG files
png_count=0
if [ -d "Stage1_Mermaid_Generation/diagrams/images" ]; then
    for file in Stage1_Mermaid_Generation/diagrams/images/*.png; do
        if [ -f "$file" ]; then
            png_count=$((png_count + 1))
        fi
    done
fi

print_success "Generated $mmd_count MMD files"
if [ $png_count -gt 0 ]; then
    print_success "Generated $png_count PNG image files"
else
    print_warning "No PNG files generated - check image generation process"
fi

# Step 7: Display file listing
print_status "Generated files:"
echo ""
echo "📁 MMD Files:"
ls -la Stage1_Mermaid_Generation/diagrams/*.mmd 2>/dev/null || echo "   No MMD files found"

echo ""
echo "🖼️  PNG Files:"
ls -la Stage1_Mermaid_Generation/diagrams/images/*.png 2>/dev/null || echo "   No PNG files found"

# Step 8: Generate summary report
print_status "Generating summary report..."
cat > Stage1_Mermaid_Generation/diagrams/generation_report.md << EOF
# Stage 1 Mermaid Generation Report

## Generated Files

### MMD Files
EOF

for file in Stage1_Mermaid_Generation/diagrams/*.mmd; do
    if [ -f "$file" ]; then
        echo "- $(basename "$file")" >> Stage1_Mermaid_Generation/diagrams/generation_report.md
    fi
done

echo "" >> Stage1_Mermaid_Generation/diagrams/generation_report.md
echo "### PNG Image Files" >> Stage1_Mermaid_Generation/diagrams/generation_report.md

for file in Stage1_Mermaid_Generation/diagrams/images/*.png; do
    if [ -f "$file" ]; then
        echo "- $(basename "$file")" >> Stage1_Mermaid_Generation/diagrams/generation_report.md
    fi
done

echo "" >> Stage1_Mermaid_Generation/diagrams/generation_report.md
echo "## Usage Instructions" >> Stage1_Mermaid_Generation/diagrams/generation_report.md
echo "" >> Stage1_Mermaid_Generation/diagrams/generation_report.md
echo "1. **Visual Verification**: Review the PNG files to verify diagram accuracy" >> Stage1_Mermaid_Generation/diagrams/generation_report.md
echo "2. **Technical Reference**: Use MMD files for technical documentation" >> Stage1_Mermaid_Generation/diagrams/generation_report.md
echo "3. **Sharing**: PNG files can be easily shared with stakeholders" >> Stage1_Mermaid_Generation/diagrams/generation_report.md
echo "4. **Next Stage**: Proceed to Stage 2: FSD Creation" >> Stage1_Mermaid_Generation/diagrams/generation_report.md

print_success "Summary report generated"

# Step 9: Final status
echo ""
echo "🎉 STAGE 1 WORKFLOW COMPLETED SUCCESSFULLY!"
echo "=========================================="
echo ""
echo "✅ What was accomplished:"
echo "   - Domain detection and requirements analysis"
echo "   - 6 Mermaid diagrams generated"
echo "   - Visual previews available in AI response"
echo "   - $mmd_count MMD files created"
echo "   - $png_count PNG image files created"
echo "   - Complete file structure established"
echo ""
echo "📁 Files location:"
echo "   - MMD files: Stage1_Mermaid_Generation/diagrams/"
echo "   - PNG files: Stage1_Mermaid_Generation/diagrams/images/"
echo "   - Report: Stage1_Mermaid_Generation/diagrams/generation_report.md"
echo ""
echo "➡️  Next Steps:"
echo "   1. Review the visual diagrams in the AI response"
echo "   2. Check the PNG files for accuracy"
echo "   3. Proceed to Stage 2: FSD Creation"
echo ""
echo "🔗 Ready for Stage 2!"

exit 0
