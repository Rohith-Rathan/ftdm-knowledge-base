#!/bin/bash

# EFTDM Framework - Dual Repository Management Script
# This script helps manage both master and clean repositories

set -e

MASTER_DIR="/Users/rohithrathan/Desktop/SDLC_with_EFTDM/timesheet_test_EFTDM/EFTDM_FRAMEWORK"
CLEAN_DIR="/Users/rohithrathan/Desktop/SDLC_with_EFTDM/timesheet_test_EFTDM/EFTDM_FRAMEWORK_CLEAN"

echo "🚀 EFTDM Framework - Dual Repository Manager"
echo "=============================================="

# Function to sync clean repository from master
sync_clean() {
    echo "📁 Syncing clean repository from master..."
    cd "$CLEAN_DIR"
    
    # Copy essential files only
    echo "  📋 Copying essential framework files..."
    cp -r "$MASTER_DIR/frameworks" .
    cp -r "$MASTER_DIR/scripts" .
    cp -r "$MASTER_DIR/Stage"* .
    cp -r "$MASTER_DIR/templates" .
    cp "$MASTER_DIR/README.md" .
    cp "$MASTER_DIR/USAGE_GUIDE.md" .
    
    # Add and commit changes
    git add .
    git commit -m "Sync essential files from master repository $(date '+%Y-%m-%d %H:%M:%S')" || echo "No changes to commit"
    
    echo "✅ Clean repository synced successfully!"
}

# Function to push both repositories
push_both() {
    echo "📤 Pushing both repositories..."
    
    # Push master repository
    echo "  📤 Pushing master repository..."
    cd "$MASTER_DIR"
    git push origin main
    
    # Push clean repository
    echo "  📤 Pushing clean repository..."
    cd "$CLEAN_DIR"
    git push origin main
    
    echo "✅ Both repositories pushed successfully!"
}

# Function to show repository status
show_status() {
    echo "📊 Repository Status:"
    echo "===================="
    
    echo "📁 Master Repository:"
    cd "$MASTER_DIR"
    echo "  📍 Branch: $(git branch --show-current)"
    echo "  📝 Last commit: $(git log -1 --pretty=format:'%h - %s (%cr)')"
    echo "  📊 Files: $(find . -type f | wc -l | tr -d ' ') total files"
    
    echo ""
    echo "📁 Clean Repository:"
    cd "$CLEAN_DIR"
    echo "  📍 Branch: $(git branch --show-current)"
    echo "  📝 Last commit: $(git log -1 --pretty=format:'%h - %s (%cr)')"
    echo "  📊 Files: $(find . -type f | wc -l | tr -d ' ') essential files"
}

# Main menu
case "${1:-menu}" in
    "sync")
        sync_clean
        ;;
    "push")
        push_both
        ;;
    "status")
        show_status
        ;;
    "menu"|*)
        echo "Available commands:"
        echo "  ./manage-repos.sh sync   - Sync clean repo from master"
        echo "  ./manage-repos.sh push   - Push both repositories"
        echo "  ./manage-repos.sh status - Show repository status"
        echo ""
        echo "Repository URLs:"
        echo "  📁 Master: https://github.com/Rohith-Rathan/ftdm-framework-master"
        echo "  📁 Clean:  https://github.com/Rohith-Rathan/ftdm-framework-download"
        ;;
esac
