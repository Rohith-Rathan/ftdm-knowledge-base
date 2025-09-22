#!/bin/bash
# test-mermaid-generation.sh
# Test script to diagnose Mermaid image generation issues

echo "🔍 DIAGNOSING MERMAID IMAGE GENERATION ISSUES"
echo "============================================="

# Check if we're in the right directory
if [ ! -f "Stage1_Mermaid_Generation/mermaid_generation_prompt.md" ]; then
    echo "❌ Please run this script from the EFTDM_FRAMEWORK root directory"
    exit 1
fi

echo "✅ Running from correct directory"

# Check Python availability
echo "🐍 Checking Python..."
if command -v python3 &> /dev/null; then
    echo "✅ Python3 found: $(python3 --version)"
else
    echo "❌ Python3 not found"
    exit 1
fi

# Check required Python modules
echo "📦 Checking Python modules..."
python3 -c "
import json, os, subprocess, sys
print('✅ All required modules available')
" 2>/dev/null || {
    echo "❌ Missing required Python modules"
    exit 1
}

# Check if requests module is available
echo "🌐 Checking requests module..."
python3 -c "import requests" 2>/dev/null && echo "✅ requests module available" || echo "⚠️  requests module not available"

# Check Node.js and npm
echo "📦 Checking Node.js and npm..."
if command -v node &> /dev/null; then
    echo "✅ Node.js found: $(node --version)"
else
    echo "❌ Node.js not found"
fi

if command -v npm &> /dev/null; then
    echo "✅ npm found: $(npm --version)"
else
    echo "❌ npm not found"
fi

# Check Mermaid CLI
echo "🎨 Checking Mermaid CLI..."
if command -v mmdc &> /dev/null; then
    echo "✅ Mermaid CLI (global) found: $(mmdc --version)"
elif command -v npx &> /dev/null; then
    if npx mmdc --version &> /dev/null; then
        echo "✅ Mermaid CLI (local) found via npx"
    else
        echo "⚠️  Mermaid CLI not found locally"
    fi
else
    echo "❌ Neither mmdc nor npx found"
fi

# Check directory structure
echo "📁 Checking directory structure..."
if [ -d "Stage1_Mermaid_Generation/diagrams" ]; then
    echo "✅ diagrams directory exists"
    if [ -d "Stage1_Mermaid_Generation/diagrams/images" ]; then
        echo "✅ images directory exists"
    else
        echo "⚠️  images directory missing"
    fi
else
    echo "⚠️  diagrams directory missing"
fi

# Test Python script execution
echo "🧪 Testing Python script execution..."
if python3 scripts/enhanced-mermaid-generator.py --help 2>/dev/null; then
    echo "✅ Python script can be executed"
else
    echo "❌ Python script execution failed"
    echo "Error details:"
    python3 scripts/enhanced-mermaid-generator.py --help 2>&1 || true
fi

echo ""
echo "🔍 DIAGNOSIS COMPLETE"
echo "====================="
echo "If you see any ❌ errors above, those need to be fixed first."
echo "If you see ⚠️  warnings, those might cause image generation to fail."
echo "If everything shows ✅, the issue might be in the script logic."
