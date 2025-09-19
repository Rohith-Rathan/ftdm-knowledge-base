# 🎨 Figma Assets Usage Guide

## Overview
This guide explains how to use the Figma assets downloaded and analyzed for your project.

## File Structure
```
figma_assets/
├── screens/
│   ├── [screen_id]/
│   │   ├── icons/          # SVG icons for this screen
│   │   ├── images/         # PNG/JPG images for this screen
│   │   └── components/     # SVG/PNG components for this screen
│   └── ...
├── css_variables.css       # Generated CSS variables
├── asset_inventory.json    # Asset inventory
└── USAGE_GUIDE.md         # This file
```

## CSS Variables Usage
Import the CSS variables in your main stylesheet:
```css
@import './figma_assets/css_variables.css';
```

## Asset Usage in Vue.js
```vue
<template>
  <div class="screen-container">
    <!-- Using icons -->
    <img src="@/figma_assets/screens/login/icons/user.svg" alt="User" />
    
    <!-- Using images -->
    <img src="@/figma_assets/screens/dashboard/images/hero.png" alt="Hero" />
    
    <!-- Using CSS variables -->
    <div class="card" style="background: var(--color-primary-main)">
      <h2 style="color: var(--color-primary-contrast)">Title</h2>
    </div>
  </div>
</template>
```

## Asset Inventory
Check `asset_inventory.json` for a complete list of available assets.

## Analysis Results
Check `figma_analysis/` folder for:
- Screenshots of each screen
- Metadata about designs
- Code generation results
- Variable definitions
- Code connect mappings

## Next Steps
1. Review the analysis results in `figma_analysis/`
2. Use CSS variables for consistent styling
3. Import assets directly in your Vue components
4. Follow the design system defined in CSS variables
