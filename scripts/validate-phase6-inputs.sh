#!/bin/bash

# Phase 6: Business Service Interfaces - Input Validation Script
# This script validates all required inputs for Phase 6

echo "🔍 Phase 6: Business Service Interfaces - Input Validation"
echo "========================================================"

# Check if FSD document exists and is complete
if [ ! -f "Stage2_FSD_Creation/fsd_output.md" ]; then
    echo "❌ ERROR: FSD document not found"
    echo "📋 REQUIRED: Complete FSD document in Stage2_FSD_Creation/fsd_output.md"
    echo "💡 ACTION: Run Stage 2: FSD Creation first"
    exit 1
fi

# Check if FSD contains business functionalities
if ! grep -q "Business Functionalities" "Stage2_FSD_Creation/fsd_output.md"; then
    echo "❌ ERROR: Business functionalities not defined in FSD"
    echo "📋 REQUIRED: Business functionalities section in FSD"
    echo "💡 ACTION: Add business functionalities to FSD document"
    exit 1
fi

# Check if FSD contains domain logic
if ! grep -q "Domain Logic" "Stage2_FSD_Creation/fsd_output.md"; then
    echo "❌ ERROR: Domain logic not defined in FSD"
    echo "📋 REQUIRED: Domain logic section in FSD"
    echo "💡 ACTION: Add domain logic to FSD document"
    exit 1
fi

# Check if FSD contains business rules
if ! grep -q "Business Rules" "Stage2_FSD_Creation/fsd_output.md"; then
    echo "❌ ERROR: Business rules not defined in FSD"
    echo "📋 REQUIRED: Business rules section in FSD"
    echo "💡 ACTION: Add business rules to FSD document"
    exit 1
fi

# Check if FSD contains service boundaries
if ! grep -q "Service Boundaries" "Stage2_FSD_Creation/fsd_output.md"; then
    echo "❌ ERROR: Service boundaries not defined in FSD"
    echo "📋 REQUIRED: Service boundaries section in FSD"
    echo "💡 ACTION: Add service boundaries to FSD document"
    exit 1
fi

echo "✅ All Phase 6 inputs validated successfully!"
echo "📊 FSD document is complete and contains:"
echo "   - Business functionalities"
echo "   - Domain logic"
echo "   - Business rules"
echo "   - Service boundaries"
echo ""
echo "🚀 Ready to proceed with Phase 6: Business Service Interfaces"
echo "💡 Use: frameworks/phase_prompts/phase6_business_service_interfaces.md"
