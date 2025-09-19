#!/bin/bash

# Phase 9: Unit Testing Cases (80% Coverage) - Input Validation Script
# This script validates all required inputs for Phase 9

echo "🔍 Phase 9: Unit Testing Cases (80% Coverage) - Input Validation"
echo "==============================================================="

# Check if service implementations exist
if [ ! -f "Stage4_RTSD_Creation/service_implementations.md" ]; then
    echo "❌ ERROR: Service implementations not found"
    echo "📋 REQUIRED: Service implementations document in Stage4_RTSD_Creation/service_implementations.md"
    echo "💡 ACTION: Run Phase 8: Business Service Implementations first"
    exit 1
fi

# Check if business logic exists
if [ ! -f "Stage4_RTSD_Creation/business_logic_implementations.md" ]; then
    echo "❌ ERROR: Business logic implementations not found"
    echo "📋 REQUIRED: Business logic implementations document in Stage4_RTSD_Creation/business_logic_implementations.md"
    echo "💡 ACTION: Run Phase 8: Business Service Implementations first"
    exit 1
fi

# Check if data access exists
if [ ! -f "Stage4_RTSD_Creation/data_access_implementations.md" ]; then
    echo "❌ ERROR: Data access implementations not found"
    echo "📋 REQUIRED: Data access implementations document in Stage4_RTSD_Creation/data_access_implementations.md"
    echo "💡 ACTION: Run Phase 8: Business Service Implementations first"
    exit 1
fi

# Check if error handling exists
if [ ! -f "Stage4_RTSD_Creation/error_handling_implementations.md" ]; then
    echo "❌ ERROR: Error handling implementations not found"
    echo "📋 REQUIRED: Error handling implementations document in Stage4_RTSD_Creation/error_handling_implementations.md"
    echo "💡 ACTION: Run Phase 8: Business Service Implementations first"
    exit 1
fi

# Check if service contracts exist
if [ ! -f "Stage4_RTSD_Creation/service_contracts.md" ]; then
    echo "❌ ERROR: Service contracts not found"
    echo "📋 REQUIRED: Service contracts document in Stage4_RTSD_Creation/service_contracts.md"
    echo "💡 ACTION: Run Phase 6: Business Service Interfaces first"
    exit 1
fi

echo "✅ All Phase 9 inputs validated successfully!"
echo "📊 Unit testing inputs are complete and contain:"
echo "   - Service implementations"
echo "   - Business logic implementations"
echo "   - Data access implementations"
echo "   - Error handling implementations"
echo "   - Service contracts"
echo ""
echo "🚀 Ready to proceed with Phase 9: Unit Testing Cases (80% Coverage)"
echo "💡 Use: frameworks/phase_prompts/phase9_unit_testing_cases.md"
