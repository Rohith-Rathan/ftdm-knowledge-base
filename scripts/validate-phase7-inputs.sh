#!/bin/bash

# Phase 7: Interface Validation & Coverage - Input Validation Script
# This script validates all required inputs for Phase 7

echo "🔍 Phase 7: Interface Validation & Coverage - Input Validation"
echo "============================================================"

# Check if service interfaces exist
if [ ! -f "Stage5_RTSD_Creation/service_interfaces.md" ]; then
    echo "❌ ERROR: Service interfaces not found"
    echo "📋 REQUIRED: Service interfaces document in Stage5_RTSD_Creation/service_interfaces.md"
    echo "💡 ACTION: Run Phase 6: Business Service Interfaces first"
    exit 1
fi

# Check if FSD document exists and is complete
if [ ! -f "Stage2_FSD_Creation/fsd_output.md" ]; then
    echo "❌ ERROR: FSD document not found"
    echo "📋 REQUIRED: Complete FSD document in Stage2_FSD_Creation/fsd_output.md"
    echo "💡 ACTION: Run Stage 2: FSD Creation first"
    exit 1
fi

# Check if business requirements exist
if [ ! -f "Stage2_FSD_Creation/business_requirements.md" ]; then
    echo "❌ ERROR: Business requirements not found"
    echo "📋 REQUIRED: Business requirements document in Stage2_FSD_Creation/business_requirements.md"
    echo "💡 ACTION: Run Stage 2: FSD Creation first"
    exit 1
fi

# Check if service contracts exist
if [ ! -f "Stage5_RTSD_Creation/service_contracts.md" ]; then
    echo "❌ ERROR: Service contracts not found"
    echo "📋 REQUIRED: Service contracts document in Stage5_RTSD_Creation/service_contracts.md"
    echo "💡 ACTION: Run Phase 6: Business Service Interfaces first"
    exit 1
fi

# Check if business logic exists
if [ ! -f "Stage5_RTSD_Creation/business_logic.md" ]; then
    echo "❌ ERROR: Business logic not found"
    echo "📋 REQUIRED: Business logic document in Stage5_RTSD_Creation/business_logic.md"
    echo "💡 ACTION: Run Phase 6: Business Service Interfaces first"
    exit 1
fi

echo "✅ All Phase 7 inputs validated successfully!"
echo "📊 Interface validation inputs are complete and contain:"
echo "   - Service interfaces"
echo "   - FSD document"
echo "   - Business requirements"
echo "   - Service contracts"
echo "   - Business logic"
echo ""
echo "🚀 Ready to proceed with Phase 7: Interface Validation & Coverage"
echo "💡 Use: frameworks/phase_prompts/phase7_interface_validation_coverage.md"
