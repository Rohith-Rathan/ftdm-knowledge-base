#!/bin/bash

# Phase 11: Frontend Screen Development - Input Validation Script
# This script validates all required inputs for Phase 11

echo "🔍 Phase 11: Frontend Screen Development - Input Validation"
echo "========================================================="

# Check if Figma designs are complete
if [ ! -f "Stage1_Mermaid_Generation/UXD/figma_designs.md" ]; then
    echo "❌ ERROR: Figma designs not found"
    echo "📋 REQUIRED: Figma designs document in Stage1_Mermaid_Generation/UXD/figma_designs.md"
    echo "💡 ACTION: Run Stage 1: Mermaid Generation with Figma analysis first"
    exit 1
fi

# Check if REST API endpoints are implemented
if [ ! -f "Stage5_RTSD_Creation/rest_api_endpoints.md" ]; then
    echo "❌ ERROR: REST API endpoints not found"
    echo "📋 REQUIRED: REST API endpoints document in Stage5_RTSD_Creation/rest_api_endpoints.md"
    echo "💡 ACTION: Run Phase 10: REST API Development first"
    exit 1
fi

# Check if RTSD document exists and is complete
if [ ! -f "Stage5_RTSD_Creation/rtsd_output.md" ]; then
    echo "❌ ERROR: RTSD document not found"
    echo "📋 REQUIRED: Complete RTSD document in Stage5_RTSD_Creation/rtsd_output.md"
    echo "💡 ACTION: Run Stage 5: RTSD Creation first"
    exit 1
fi

# Check if design system is available
if [ ! -f "Stage1_Mermaid_Generation/UXD/design_system/color_palette.json" ]; then
    echo "❌ ERROR: Design system not found"
    echo "📋 REQUIRED: Design system files in Stage1_Mermaid_Generation/UXD/design_system/"
    echo "💡 ACTION: Add design system JSON files to UXD/design_system/ folder"
    exit 1
fi

# Check if assets are downloaded and organized
if [ ! -d "Stage1_Mermaid_Generation/UXD/assets" ]; then
    echo "❌ ERROR: Assets not found"
    echo "📋 REQUIRED: Assets folder in Stage1_Mermaid_Generation/UXD/assets/"
    echo "💡 ACTION: Download and organize assets from Figma"
    exit 1
fi

echo "✅ All Phase 11 inputs validated successfully!"
echo "📊 Frontend development inputs are complete and contain:"
echo "   - Figma designs"
echo "   - REST API endpoints"
echo "   - RTSD document"
echo "   - Design system"
echo "   - Assets"
echo ""
echo "🚀 Ready to proceed with Phase 11: Frontend Screen Development"
echo "💡 Use: frameworks/phase_prompts/phase11_frontend_screen_development.md"
