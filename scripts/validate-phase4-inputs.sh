#!/bin/bash

# Phase 4: Database Model Design - Input Validation Script
# This script validates all required inputs for Phase 4

echo "🔍 Phase 4: Database Model Design - Input Validation"
echo "=================================================="

# Check if FSD document exists and is complete
if [ ! -f "Stage2_FSD_Creation/fsd_output.md" ]; then
    echo "❌ ERROR: FSD document not found"
    echo "📋 REQUIRED: Complete FSD document in Stage2_FSD_Creation/fsd_output.md"
    echo "💡 ACTION: Run Stage 2: FSD Creation first"
    exit 1
fi

# Check if FSD contains business entities
if ! grep -q "Business Entities" "Stage2_FSD_Creation/fsd_output.md"; then
    echo "❌ ERROR: Business entities not defined in FSD"
    echo "📋 REQUIRED: Business entities section in FSD"
    echo "💡 ACTION: Add business entities to FSD document"
    exit 1
fi

# Check if FSD contains data relationships
if ! grep -q "Data Relationships" "Stage2_FSD_Creation/fsd_output.md"; then
    echo "❌ ERROR: Data relationships not defined in FSD"
    echo "📋 REQUIRED: Data relationships section in FSD"
    echo "💡 ACTION: Add data relationships to FSD document"
    exit 1
fi

# Check if FSD contains business rules
if ! grep -q "Business Rules" "Stage2_FSD_Creation/fsd_output.md"; then
    echo "❌ ERROR: Business rules not defined in FSD"
    echo "📋 REQUIRED: Business rules section in FSD"
    echo "💡 ACTION: Add business rules to FSD document"
    exit 1
fi

# Check if FSD contains data constraints
if ! grep -q "Data Constraints" "Stage2_FSD_Creation/fsd_output.md"; then
    echo "❌ ERROR: Data constraints not defined in FSD"
    echo "📋 REQUIRED: Data constraints section in FSD"
    echo "💡 ACTION: Add data constraints to FSD document"
    exit 1
fi

echo "✅ All Phase 4 inputs validated successfully!"
echo "📊 FSD document is complete and contains:"
echo "   - Business entities"
echo "   - Data relationships"
echo "   - Business rules"
echo "   - Data constraints"
echo ""
echo "🚀 Ready to proceed with Phase 4: Database Model Design"
echo "💡 Use: frameworks/phase_prompts/phase4_database_model_design.md"
