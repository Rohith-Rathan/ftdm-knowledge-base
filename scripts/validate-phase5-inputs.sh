#!/bin/bash

# Phase 5: ORM Mapper & MongoDB Classes - Input Validation Script
# This script validates all required inputs for Phase 5

echo "🔍 Phase 5: ORM Mapper & MongoDB Classes - Input Validation"
echo "=========================================================="

# Check if database model design exists
if [ ! -f "Stage5_RTSD_Creation/database_schema.md" ]; then
    echo "❌ ERROR: Database schema not found"
    echo "📋 REQUIRED: Database schema document in Stage5_RTSD_Creation/database_schema.md"
    echo "💡 ACTION: Run Phase 4: Database Model Design first"
    exit 1
fi

# Check if entity models exist
if [ ! -f "Stage5_RTSD_Creation/entity_models.md" ]; then
    echo "❌ ERROR: Entity models not found"
    echo "📋 REQUIRED: Entity models document in Stage5_RTSD_Creation/entity_models.md"
    echo "💡 ACTION: Run Phase 4: Database Model Design first"
    exit 1
fi

# Check if relationship mappings exist
if [ ! -f "Stage5_RTSD_Creation/relationship_mappings.md" ]; then
    echo "❌ ERROR: Relationship mappings not found"
    echo "📋 REQUIRED: Relationship mappings document in Stage5_RTSD_Creation/relationship_mappings.md"
    echo "💡 ACTION: Run Phase 4: Database Model Design first"
    exit 1
fi

# Check if data constraints exist
if [ ! -f "Stage5_RTSD_Creation/data_constraints.md" ]; then
    echo "❌ ERROR: Data constraints not found"
    echo "📋 REQUIRED: Data constraints document in Stage5_RTSD_Creation/data_constraints.md"
    echo "💡 ACTION: Run Phase 4: Database Model Design first"
    exit 1
fi

# Check if performance indexes exist
if [ ! -f "Stage5_RTSD_Creation/performance_indexes.md" ]; then
    echo "❌ ERROR: Performance indexes not found"
    echo "📋 REQUIRED: Performance indexes document in Stage5_RTSD_Creation/performance_indexes.md"
    echo "💡 ACTION: Run Phase 4: Database Model Design first"
    exit 1
fi

echo "✅ All Phase 5 inputs validated successfully!"
echo "📊 Database model design is complete and contains:"
echo "   - Database schema"
echo "   - Entity models"
echo "   - Relationship mappings"
echo "   - Data constraints"
echo "   - Performance indexes"
echo ""
echo "🚀 Ready to proceed with Phase 5: ORM Mapper & MongoDB Classes"
echo "💡 Use: frameworks/phase_prompts/phase5_orm_mapper_mongodb_classes.md"
