#!/bin/bash

# 🎨 CREATE UXD STRUCTURE SCRIPT
# This script creates the UXD folder structure for Stage 4: UI/UX Designs Analysis

set -e

echo "🎨 Creating UXD Structure for Stage 4..."

# Get project name from user or use default
if [ -z "$1" ]; then
    echo "📝 Enter project name (or press Enter for 'my_project'):"
    read -r PROJECT_NAME
    PROJECT_NAME=${PROJECT_NAME:-my_project}
else
    PROJECT_NAME="$1"
fi

echo "📁 Creating UXD structure for project: $PROJECT_NAME"

# Create main UXD directory
mkdir -p "UXD"

# Create screens directory
echo "📱 Creating screens directory..."
mkdir -p "UXD/screens"

# Create design system files directory
echo "🎨 Creating design system files directory..."
mkdir -p "UXD/design_system_files"

# Create figma captured assets directory
echo "📦 Creating figma captured assets directory..."
mkdir -p "UXD/figma_captured_assets/icons"
mkdir -p "UXD/figma_captured_assets/images"
mkdir -p "UXD/figma_captured_assets/components"

# Create navigation list from FSD (if available)
echo "📋 Creating navigation list..."
if [ -f "Stage2_FSD_Creation/${PROJECT_NAME}_fsd.md" ]; then
    echo "✅ Found FSD document, extracting screen requirements..."
    
    # Extract screen names from FSD
    cat > "UXD/screens/navigation_list.md" << EOF
# Screen Navigation Structure

## Generated from FSD Requirements

### Main Navigation
EOF
    
    # Extract user stories and create screen list
    grep -i "screen\|page\|view" "Stage2_FSD_Creation/${PROJECT_NAME}_fsd.md" | head -10 | while read -r line; do
        screen_name=$(echo "$line" | sed 's/.*[Ss]creen[[:space:]]*:*[[:space:]]*//' | sed 's/[[:space:]]*$//' | sed 's/[^a-zA-Z0-9]/_/g' | tr '[:upper:]' '[:lower:]')
        if [ ! -z "$screen_name" ] && [ "$screen_name" != "" ]; then
            echo "1. **${screen_name^} Screen** - \`${screen_name}_screen.png\`" >> "UXD/screens/navigation_list.md"
        fi
    done
    
    echo "" >> "UXD/screens/navigation_list.md"
    echo "### Sub Navigation" >> "UXD/screens/navigation_list.md"
    echo "- **Dashboard → Tasks** - \`dashboard_tasks_screen.png\`" >> "UXD/screens/navigation_list.md"
    echo "- **Dashboard → Calendar** - \`dashboard_calendar_screen.png\`" >> "UXD/screens/navigation_list.md"
    echo "- **Profile → Edit** - \`profile_edit_screen.png\`" >> "UXD/screens/navigation_list.md"
    
else
    echo "⚠️  FSD document not found, creating template navigation list..."
    
    cat > "UXD/screens/navigation_list.md" << EOF
# Screen Navigation Structure

## Main Navigation
1. **Login Screen** - \`login_screen.png\`
2. **Dashboard Screen** - \`dashboard_screen.png\`
3. **Profile Screen** - \`profile_screen.png\`
4. **Settings Screen** - \`settings_screen.png\`
5. **Reports Screen** - \`reports_screen.png\`

## Sub Navigation
- **Dashboard → Tasks** - \`dashboard_tasks_screen.png\`
- **Dashboard → Calendar** - \`dashboard_calendar_screen.png\`
- **Profile → Edit** - \`profile_edit_screen.png\`

## Modal Screens
- **Task Creation Modal** - \`task_creation_modal.png\`
- **User Search Modal** - \`user_search_modal.png\`
- **Confirmation Dialog** - \`confirmation_dialog.png\`
EOF
fi

# Create Figma screen links template
echo "🔗 Creating Figma screen links template..."
cat > "UXD/figma_screen_links.md" << EOF
# Figma Screen Links

## Main Screens
1. **Login Screen** - [paste the figma link here]
2. **Dashboard Screen** - [paste the figma link here]
3. **Profile Screen** - [paste the figma link here]
4. **Settings Screen** - [paste the figma link here]
5. **Reports Screen** - [paste the figma link here]

## Sub Screens
- **Dashboard → Tasks** - [paste the figma link here]
- **Dashboard → Calendar** - [paste the figma link here]
- **Profile → Edit** - [paste the figma link here]

## Component Library Links
- **Button Components** - [paste the figma link here]
- **Form Components** - [paste the figma link here]
- **Card Components** - [paste the figma link here]
- **Navigation Components** - [paste the figma link here]

## Design System Links
- **Color Palette** - [paste the figma link here]
- **Typography** - [paste the figma link here]
- **Spacing System** - [paste the figma link here]
- **Icon Library** - [paste the figma link here]
EOF

# Create design system template files
echo "🎨 Creating design system template files..."

# Color palette template
cat > "UXD/design_system_files/color_palette.json" << EOF
{
  "colors": {
    "primary": {
      "main": "#1976d2",
      "light": "#42a5f5",
      "dark": "#1565c0",
      "contrast": "#ffffff"
    },
    "secondary": {
      "main": "#dc004e",
      "light": "#ff5983",
      "dark": "#9a0036",
      "contrast": "#ffffff"
    },
    "success": {
      "main": "#4caf50",
      "light": "#81c784",
      "dark": "#388e3c",
      "contrast": "#ffffff"
    },
    "warning": {
      "main": "#ff9800",
      "light": "#ffb74d",
      "dark": "#f57c00",
      "contrast": "#ffffff"
    },
    "error": {
      "main": "#f44336",
      "light": "#e57373",
      "dark": "#d32f2f",
      "contrast": "#ffffff"
    },
    "info": {
      "main": "#2196f3",
      "light": "#64b5f6",
      "dark": "#1976d2",
      "contrast": "#ffffff"
    }
  }
}
EOF

# Typography template
cat > "UXD/design_system_files/typography.json" << EOF
{
  "font_families": {
    "primary": "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    "secondary": "Roboto, sans-serif",
    "mono": "Fira Code, Monaco, Consolas, monospace"
  },
  "font_sizes": {
    "xs": "0.75rem",
    "sm": "0.875rem",
    "base": "1rem",
    "lg": "1.125rem",
    "xl": "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem"
  },
  "font_weights": {
    "light": 300,
    "normal": 400,
    "medium": 500,
    "semibold": 600,
    "bold": 700
  }
}
EOF

# Spacing template
cat > "UXD/design_system_files/spacing.json" << EOF
{
  "spacing": {
    "xs": "0.25rem",
    "sm": "0.5rem",
    "md": "1rem",
    "lg": "1.5rem",
    "xl": "2rem",
    "2xl": "3rem",
    "3xl": "4rem"
  },
  "breakpoints": {
    "sm": "640px",
    "md": "768px",
    "lg": "1024px",
    "xl": "1280px"
  }
}
EOF

# Components template
cat > "UXD/design_system_files/components.json" << EOF
{
  "components": {
    "button": {
      "variants": ["primary", "secondary", "outline", "ghost", "link"],
      "sizes": ["sm", "md", "lg"],
      "spacing": {
        "sm": "0.5rem 1rem",
        "md": "0.75rem 1.5rem",
        "lg": "1rem 2rem"
      },
      "border_radius": {
        "sm": "0.25rem",
        "md": "0.5rem",
        "lg": "0.75rem"
      }
    },
    "card": {
      "padding": "1.5rem",
      "border_radius": "0.75rem",
      "shadow": "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
      "background": "#ffffff",
      "border": "1px solid #e5e7eb"
    },
    "input": {
      "padding": "0.75rem 1rem",
      "border_radius": "0.5rem",
      "border": "1px solid #d1d5db",
      "font_size": "1rem",
      "line_height": "1.5",
      "focus_border": "2px solid #1976d2"
    }
  }
}
EOF

# Create asset inventory template
echo "📋 Creating asset inventory template..."
cat > "UXD/figma_captured_assets/asset_inventory.json" << EOF
{
  "inventory_date": "$(date -u +%Y-%m-%dT%H:%M:%SZ)",
  "project_name": "$PROJECT_NAME",
  "assets": {
    "icons": [],
    "images": [],
    "components": []
  },
  "screens": {}
}
EOF

# Create screen asset mapping template
echo "🗺️ Creating screen asset mapping template..."
cat > "UXD/figma_captured_assets/screen_asset_mapping.json" << EOF
{
  "screen_asset_mapping": {},
  "asset_reuse": {},
  "generated_date": "$(date -u +%Y-%m-%dT%H:%M:%SZ)"
}
EOF

# Create CSS variables template
echo "🎨 Creating CSS variables template..."
cat > "UXD/figma_captured_assets/css_variables.css" << EOF
/* Design System CSS Variables */
/* Generated for $PROJECT_NAME */

:root {
  /* Primary Colors */
  --color-primary-main: #1976d2;
  --color-primary-light: #42a5f5;
  --color-primary-dark: #1565c0;
  --color-primary-contrast: #ffffff;
  
  /* Secondary Colors */
  --color-secondary-main: #dc004e;
  --color-secondary-light: #ff5983;
  --color-secondary-dark: #9a0036;
  --color-secondary-contrast: #ffffff;
  
  /* Status Colors */
  --color-success: #4caf50;
  --color-warning: #ff9800;
  --color-error: #f44336;
  --color-info: #2196f3;
  
  /* Typography */
  --font-family-primary: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-family-secondary: Roboto, sans-serif;
  --font-family-mono: Fira Code, Monaco, Consolas, monospace;
  
  /* Font Sizes */
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  --font-size-3xl: 1.875rem;
  --font-size-4xl: 2.25rem;
  
  /* Font Weights */
  --font-weight-light: 300;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  
  /* Spacing */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  --spacing-2xl: 3rem;
  --spacing-3xl: 4rem;
  
  /* Border Radius */
  --border-radius-sm: 0.25rem;
  --border-radius-md: 0.5rem;
  --border-radius-lg: 0.75rem;
  --border-radius-xl: 1rem;
  --border-radius-full: 9999px;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  
  /* Transitions */
  --transition-fast: 150ms ease-in-out;
  --transition-normal: 250ms ease-in-out;
  --transition-slow: 350ms ease-in-out;
}

/* Dark mode variables */
@media (prefers-color-scheme: dark) {
  :root {
    --color-background: #121212;
    --color-surface: #1e1e1e;
    --color-text-primary: #ffffff;
    --color-text-secondary: #b3b3b3;
    --color-border: #333333;
  }
}
EOF

# Create usage guide
echo "📚 Creating usage guide..."
cat > "UXD/figma_captured_assets/USAGE_GUIDE.md" << EOF
# 🎨 UXD Assets Usage Guide

## Overview
This guide explains how to use the UXD assets for the $PROJECT_NAME project.

## File Structure
\`\`\`
UXD/
├── screens/
│   └── navigation_list.md          # Screen navigation structure
├── figma_screen_links.md           # Figma links with navigation
├── design_system_files/            # Design system JSON files
└── figma_captured_assets/          # Downloaded assets
    ├── icons/                      # All unique icons
    ├── images/                     # All unique images
    ├── components/                 # All unique components
    ├── css_variables.css           # Generated CSS variables
    ├── asset_inventory.json        # Asset inventory
    ├── screen_asset_mapping.json   # Background relationships
    └── USAGE_GUIDE.md              # This file
\`\`\`

## CSS Variables Usage
Import the CSS variables in your main stylesheet:
\`\`\`css
@import './UXD/figma_captured_assets/css_variables.css';
\`\`\`

## Asset Usage in Vue.js
\`\`\`vue
<template>
  <div class="screen-container">
    <!-- Using icons -->
    <img src="@/UXD/figma_captured_assets/icons/user.svg" alt="User" />
    
    <!-- Using images -->
    <img src="@/UXD/figma_captured_assets/images/login_background.png" alt="Login Background" />
    
    <!-- Using CSS variables -->
    <div class="card" style="background: var(--color-primary-main)">
      <h2 style="color: var(--color-primary-contrast)">Title</h2>
    </div>
  </div>
</template>
\`\`\`

## Design System Integration
- Use centralized icons for consistency
- Import CSS variables for design system
- Follow established color palette
- Use consistent typography and spacing

## Next Steps
1. Add your screen images to \`UXD/screens/\`
2. Update Figma links in \`UXD/figma_screen_links.md\`
3. Customize design system files in \`UXD/design_system_files/\`
4. Run asset analysis scripts to populate \`figma_captured_assets/\`
EOF

echo "✅ UXD structure created successfully!"
echo ""
echo "📋 Summary:"
echo "✅ Created: UXD/"
echo "✅ Screens directory: UXD/screens/"
echo "✅ Design system files: UXD/design_system_files/"
echo "✅ Figma captured assets: UXD/figma_captured_assets/"
echo "✅ Navigation list: UXD/screens/navigation_list.md"
echo "✅ Figma links template: UXD/figma_screen_links.md"
echo "✅ Design system templates: UXD/design_system_files/*.json"
echo "✅ CSS variables: UXD/figma_captured_assets/css_variables.css"
echo "✅ Usage guide: UXD/figma_captured_assets/USAGE_GUIDE.md"
echo ""
echo "🎯 Next steps:"
echo "1. Add your screen images to UXD/screens/"
echo "2. Update Figma links in UXD/figma_screen_links.md"
echo "3. Customize design system files in UXD/design_system_files/"
echo "4. Run asset analysis scripts to populate figma_captured_assets/"
echo "5. Proceed to Stage 5: RTSD Creation"
