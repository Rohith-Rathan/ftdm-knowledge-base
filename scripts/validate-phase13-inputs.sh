#!/bin/bash

# Phase 13: CI/CD Deployment & Azure App Service - Input Validation Script
# This script validates all required inputs for Phase 13

echo "🔍 Phase 13: CI/CD Deployment & Azure App Service - Input Validation"
echo "================================================================="

# Check if complete application exists
if [ ! -f "Stage4_RTSD_Creation/complete_application.md" ]; then
    echo "❌ ERROR: Complete application not found"
    echo "📋 REQUIRED: Complete application document in Stage4_RTSD_Creation/complete_application.md"
    echo "💡 ACTION: Run all previous phases to complete application"
    exit 1
fi

# Check if unit tests exist
if [ ! -f "Stage4_RTSD_Creation/unit_tests.md" ]; then
    echo "❌ ERROR: Unit tests not found"
    echo "📋 REQUIRED: Unit tests document in Stage4_RTSD_Creation/unit_tests.md"
    echo "💡 ACTION: Run Phase 9: Unit Testing Cases first"
    exit 1
fi

# Check if API tests exist
if [ ! -f "Stage4_RTSD_Creation/api_tests.md" ]; then
    echo "❌ ERROR: API tests not found"
    echo "📋 REQUIRED: API tests document in Stage4_RTSD_Creation/api_tests.md"
    echo "💡 ACTION: Run Phase 10: REST API Development first"
    exit 1
fi

# Check if frontend tests exist
if [ ! -f "Stage4_RTSD_Creation/frontend_tests.md" ]; then
    echo "❌ ERROR: Frontend tests not found"
    echo "📋 REQUIRED: Frontend tests document in Stage4_RTSD_Creation/frontend_tests.md"
    echo "💡 ACTION: Run Phase 12: Frontend Unit Test Cases first"
    exit 1
fi

# Check if Azure configuration exists
if [ ! -f "Stage4_RTSD_Creation/azure_configuration.md" ]; then
    echo "❌ ERROR: Azure configuration not found"
    echo "📋 REQUIRED: Azure configuration document in Stage4_RTSD_Creation/azure_configuration.md"
    echo "💡 ACTION: Create Azure App Service configuration"
    exit 1
fi

echo "✅ All Phase 13 inputs validated successfully!"
echo "📊 CI/CD deployment inputs are complete and contain:"
echo "   - Complete application"
echo "   - Unit tests"
echo "   - API tests"
echo "   - Frontend tests"
echo "   - Azure configuration"
echo ""
echo "🚀 Ready to proceed with Phase 13: CI/CD Deployment & Azure App Service"
echo "💡 Use: frameworks/phase_prompts/phase13_cicd_deployment_azure.md"
