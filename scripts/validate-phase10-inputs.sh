#!/bin/bash

# Phase 10: REST API Development - Input Validation Script
# This script validates all required inputs for Phase 10

echo "🔍 Phase 10: REST API Development - Input Validation"
echo "=================================================="

# Check if FSD document exists and is complete
if [ ! -f "Stage2_FSD_Creation/fsd_output.md" ]; then
    echo "❌ ERROR: FSD document not found"
    echo "📋 REQUIRED: Complete FSD document in Stage2_FSD_Creation/fsd_output.md"
    echo "💡 ACTION: Run Stage 2: FSD Creation first"
    exit 1
fi

# Check if TSD document exists and is complete
if [ ! -f "Stage3_TSD_Creation/tsd_output.md" ]; then
    echo "❌ ERROR: TSD document not found"
    echo "📋 REQUIRED: Complete TSD document in Stage3_TSD_Creation/tsd_output.md"
    echo "💡 ACTION: Run Stage 3: TSD Creation first"
    exit 1
fi

# Check if RTSD document exists and is complete
if [ ! -f "Stage4_RTSD_Creation/rtsd_output.md" ]; then
    echo "❌ ERROR: RTSD document not found"
    echo "📋 REQUIRED: Complete RTSD document in Stage4_RTSD_Creation/rtsd_output.md"
    echo "💡 ACTION: Run Stage 4: RTSD Creation first"
    exit 1
fi

# Check if Figma screens are analyzed
if [ ! -f "Stage1_Mermaid_Generation/UXD/figma_analysis.md" ]; then
    echo "❌ ERROR: Figma screen analysis not found"
    echo "📋 REQUIRED: Figma screen analysis document in Stage1_Mermaid_Generation/UXD/figma_analysis.md"
    echo "💡 ACTION: Run Stage 1: Mermaid Generation with Figma analysis first"
    exit 1
fi

# Check if service implementations exist
if [ ! -f "Stage4_RTSD_Creation/service_implementations.md" ]; then
    echo "❌ ERROR: Service implementations not found"
    echo "📋 REQUIRED: Service implementations document in Stage4_RTSD_Creation/service_implementations.md"
    echo "💡 ACTION: Run Phase 8: Business Service Implementations first"
    exit 1
fi

echo "✅ All Phase 10 inputs validated successfully!"
echo "📊 REST API development inputs are complete and contain:"
echo "   - FSD document"
echo "   - TSD document"
echo "   - RTSD document"
echo "   - Figma screen analysis"
echo "   - Service implementations"
echo ""
echo "🚀 Ready to proceed with Phase 10: REST API Development"
echo "💡 Use: frameworks/phase_prompts/phase10_rest_api_development.md"
