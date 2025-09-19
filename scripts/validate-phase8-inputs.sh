#!/bin/bash

# Phase 8: Business Service Implementations - Input Validation Script
# This script validates all required inputs for Phase 8

echo "🔍 Phase 8: Business Service Implementations - Input Validation"
echo "============================================================="

# Check if service interfaces are validated
if [ ! -f "Stage4_RTSD_Creation/validated_service_interfaces.md" ]; then
    echo "❌ ERROR: Validated service interfaces not found"
    echo "📋 REQUIRED: Validated service interfaces document in Stage4_RTSD_Creation/validated_service_interfaces.md"
    echo "💡 ACTION: Run Phase 7: Interface Validation & Coverage first"
    exit 1
fi

# Check if business logic requirements exist
if [ ! -f "Stage4_RTSD_Creation/business_logic_requirements.md" ]; then
    echo "❌ ERROR: Business logic requirements not found"
    echo "📋 REQUIRED: Business logic requirements document in Stage4_RTSD_Creation/business_logic_requirements.md"
    echo "💡 ACTION: Run Phase 7: Interface Validation & Coverage first"
    exit 1
fi

# Check if service contracts exist
if [ ! -f "Stage4_RTSD_Creation/service_contracts.md" ]; then
    echo "❌ ERROR: Service contracts not found"
    echo "📋 REQUIRED: Service contracts document in Stage4_RTSD_Creation/service_contracts.md"
    echo "💡 ACTION: Run Phase 6: Business Service Interfaces first"
    exit 1
fi

# Check if ORM mappings exist
if [ ! -f "Stage4_RTSD_Creation/orm_mappings.md" ]; then
    echo "❌ ERROR: ORM mappings not found"
    echo "📋 REQUIRED: ORM mappings document in Stage4_RTSD_Creation/orm_mappings.md"
    echo "💡 ACTION: Run Phase 5: ORM Mapper & MongoDB Classes first"
    exit 1
fi

# Check if business rules exist
if [ ! -f "Stage4_RTSD_Creation/business_rules.md" ]; then
    echo "❌ ERROR: Business rules not found"
    echo "📋 REQUIRED: Business rules document in Stage4_RTSD_Creation/business_rules.md"
    echo "💡 ACTION: Run Phase 6: Business Service Interfaces first"
    exit 1
fi

echo "✅ All Phase 8 inputs validated successfully!"
echo "📊 Service implementation inputs are complete and contain:"
echo "   - Validated service interfaces"
echo "   - Business logic requirements"
echo "   - Service contracts"
echo "   - ORM mappings"
echo "   - Business rules"
echo ""
echo "🚀 Ready to proceed with Phase 8: Business Service Implementations"
echo "💡 Use: frameworks/phase_prompts/phase8_business_service_implementations.md"
