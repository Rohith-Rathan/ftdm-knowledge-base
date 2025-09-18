# 🎨 UXD FOLDER STRUCTURE GUIDE

## **RECOMMENDED UXD FOLDER STRUCTURE**

```
UXD/
├── 📁 design_system/
│   ├── color_palette.json          # Color system (light/dark modes)
│   ├── typography.json            # Font system and hierarchy
│   ├── spacing.json               # Spacing and layout system
│   ├── components.json            # Component specifications
│   └── design_system.json         # Complete design system
├── 📁 screens/
│   ├── login.jpg                  # Login screen design
│   ├── dashboard.png              # Dashboard layout
│   ├── profile.jpg                # User profile screen
│   └── settings.png               # Settings screen
├── 📁 wireframes/
│   ├── user_flow_wireframe.jpg    # User flow wireframes
│   ├── navigation_wireframe.png   # Navigation structure
│   └── layout_wireframe.jpg       # Overall layout structure
├── 📁 assets/
│   ├── icons/                     # Icon specifications
│   ├── images/                    # Image specifications
│   └── logos/                     # Logo variations
├── 📁 figma_links.md             # Figma design links
└── 📁 design_analysis.md         # Design analysis notes
```

## **DESIGN SYSTEM JSON STRUCTURE**

### **color_palette.json**
```json
{
  "light_mode": {
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
    "background": {
      "default": "#ffffff",
      "paper": "#f5f5f5",
      "elevated": "#ffffff"
    },
    "text": {
      "primary": "#212121",
      "secondary": "#757575",
      "disabled": "#bdbdbd"
    }
  },
  "dark_mode": {
    "primary": {
      "main": "#90caf9",
      "light": "#e3f2fd",
      "dark": "#42a5f5",
      "contrast": "#000000"
    },
    "secondary": {
      "main": "#f48fb1",
      "light": "#fce4ec",
      "dark": "#c2185b",
      "contrast": "#000000"
    },
    "background": {
      "default": "#121212",
      "paper": "#1e1e1e",
      "elevated": "#2d2d2d"
    },
    "text": {
      "primary": "#ffffff",
      "secondary": "#b3b3b3",
      "disabled": "#666666"
    }
  }
}
```

### **typography.json**
```json
{
  "font_family": {
    "primary": "Inter, sans-serif",
    "secondary": "Roboto, sans-serif",
    "monospace": "Fira Code, monospace"
  },
  "font_sizes": {
    "xs": "12px",
    "sm": "14px",
    "base": "16px",
    "lg": "18px",
    "xl": "20px",
    "2xl": "24px",
    "3xl": "30px",
    "4xl": "36px"
  },
  "font_weights": {
    "light": 300,
    "normal": 400,
    "medium": 500,
    "semibold": 600,
    "bold": 700
  },
  "line_heights": {
    "tight": 1.2,
    "normal": 1.5,
    "relaxed": 1.75
  }
}
```

### **spacing.json**
```json
{
  "spacing": {
    "xs": "4px",
    "sm": "8px",
    "md": "16px",
    "lg": "24px",
    "xl": "32px",
    "2xl": "48px",
    "3xl": "64px"
  },
  "breakpoints": {
    "mobile": "320px",
    "tablet": "768px",
    "desktop": "1024px",
    "wide": "1440px"
  },
  "grid": {
    "columns": 12,
    "gutter": "16px",
    "margin": "16px"
  }
}
```

### **components.json**
```json
{
  "buttons": {
    "primary": {
      "height": "40px",
      "padding": "12px 24px",
      "border_radius": "8px",
      "font_size": "16px",
      "font_weight": "500"
    },
    "secondary": {
      "height": "40px",
      "padding": "12px 24px",
      "border_radius": "8px",
      "font_size": "16px",
      "font_weight": "400"
    }
  },
  "inputs": {
    "text": {
      "height": "48px",
      "padding": "12px 16px",
      "border_radius": "8px",
      "font_size": "16px"
    },
    "textarea": {
      "min_height": "120px",
      "padding": "12px 16px",
      "border_radius": "8px",
      "font_size": "16px"
    }
  },
  "cards": {
    "default": {
      "padding": "24px",
      "border_radius": "12px",
      "shadow": "0 2px 8px rgba(0,0,0,0.1)"
    }
  }
}
```

## **FIGMA LINKS STRUCTURE**

### **figma_links.md**
```markdown
# Figma Design Links

## Main Design File
- **Primary Design**: https://www.figma.com/file/ABC123/Project-Design
- **Design System**: https://www.figma.com/file/DEF456/Design-System

## Specific Screens
- **Login Screen**: https://www.figma.com/file/ABC123/Project-Design?node-id=1:2
- **Dashboard**: https://www.figma.com/file/ABC123/Project-Design?node-id=3:4
- **User Profile**: https://www.figma.com/file/ABC123/Project-Design?node-id=5:6
- **Settings**: https://www.figma.com/file/ABC123/Project-Design?node-id=7:8

## Components
- **Button Components**: https://www.figma.com/file/ABC123/Project-Design?node-id=9:10
- **Input Components**: https://www.figma.com/file/ABC123/Project-Design?node-id=11:12
- **Card Components**: https://www.figma.com/file/ABC123/Project-Design?node-id=13:14

## Icons & Assets
- **Icon Library**: https://www.figma.com/file/ABC123/Project-Design?node-id=15:16
- **Logo Variations**: https://www.figma.com/file/ABC123/Project-Design?node-id=17:18
```

## **DESIGN ANALYSIS REQUIREMENTS**

### **Layout Analysis**
- **Grid System**: Identify column structure and spacing
- **Component Positioning**: Exact pixel positions and alignment
- **Responsive Breakpoints**: How layouts adapt to different screens
- **Visual Hierarchy**: Element importance and flow

### **Component Analysis**
- **Button States**: Default, hover, active, disabled
- **Input Variations**: Text, email, password, textarea
- **Card Layouts**: Header, content, footer structure
- **Navigation**: Menu structure and interaction states

### **Color Analysis**
- **Primary Colors**: Main brand colors and usage
- **Secondary Colors**: Supporting colors and accents
- **Background Colors**: Page and component backgrounds
- **Text Colors**: Primary, secondary, and disabled text

### **Typography Analysis**
- **Font Families**: Primary and secondary fonts
- **Font Sizes**: Hierarchy and usage patterns
- **Font Weights**: Bold, medium, regular variations
- **Line Heights**: Spacing and readability

## **ASSET DOWNLOAD REQUIREMENTS**

### **Icons**
- **Format**: SVG preferred, PNG fallback
- **Sizes**: Multiple sizes (16px, 24px, 32px, 48px)
- **States**: Default, hover, active, disabled
- **Naming**: Descriptive names without special characters

### **Images**
- **Format**: PNG, JPG, WebP
- **Optimization**: Compressed for web use
- **Responsive**: Multiple sizes for different screens
- **Alt Text**: Descriptive alternative text

### **Logos**
- **Variations**: Horizontal, vertical, icon-only
- **Formats**: SVG, PNG with transparency
- **Sizes**: Multiple sizes for different use cases
- **Color Variations**: Light and dark versions

## **IMPLEMENTATION GUIDELINES**

### **CSS Variables**
```css
:root {
  /* Light Mode Colors */
  --color-primary-main: #1976d2;
  --color-primary-light: #42a5f5;
  --color-primary-dark: #1565c0;
  
  /* Dark Mode Colors */
  --color-primary-main-dark: #90caf9;
  --color-primary-light-dark: #e3f2fd;
  --color-primary-dark-dark: #42a5f5;
  
  /* Typography */
  --font-family-primary: 'Inter', sans-serif;
  --font-size-base: 16px;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-bold: 700;
  
  /* Spacing */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
}
```

### **Vue.js Component Integration**
```vue
<template>
  <div class="component" :class="{ 'dark-mode': isDarkMode }">
    <button class="btn btn-primary">
      {{ buttonText }}
    </button>
  </div>
</template>

<style scoped>
.component {
  --btn-height: 40px;
  --btn-padding: 12px 24px;
  --btn-radius: 8px;
}

.btn {
  height: var(--btn-height);
  padding: var(--btn-padding);
  border-radius: var(--btn-radius);
  font-family: var(--font-family-primary);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
}

.btn-primary {
  background-color: var(--color-primary-main);
  color: var(--color-primary-contrast);
}

.dark-mode .btn-primary {
  background-color: var(--color-primary-main-dark);
  color: var(--color-primary-contrast-dark);
}
</style>
```

## **VALIDATION CHECKLIST**

### **Design System Files**
- [ ] `color_palette.json` exists and is valid JSON
- [ ] `typography.json` exists and is valid JSON
- [ ] `spacing.json` exists and is valid JSON
- [ ] `components.json` exists and is valid JSON
- [ ] All JSON files have proper structure

### **Figma Links**
- [ ] `figma_links.md` exists with proper structure
- [ ] All Figma URLs are accessible
- [ ] Node IDs are included for specific screens
- [ ] Links are organized by category

### **Screen Images**
- [ ] All screen images are in correct format (JPG/PNG)
- [ ] Images are high resolution and clear
- [ ] File names are descriptive
- [ ] Images are organized in screens folder

### **Asset Organization**
- [ ] Icons are in icons folder
- [ ] Images are in images folder
- [ ] Logos are in logos folder
- [ ] All assets have descriptive names

---

**This structure ensures comprehensive design system integration and pixel-perfect implementation!**
