# UXD Folder Structure Example

This folder demonstrates the recommended UXD (User Experience Design) folder structure for the EFTDM framework.

## 📁 Folder Structure

```
UXD/
├── design_system/          # Design system JSON files
│   ├── color_palette.json  # Color palette (light/dark modes)
│   ├── typography.json     # Typography specifications
│   ├── spacing.json        # Spacing system
│   └── components.json     # UI component specifications
├── screens/                # Screen images (JPG, PNG)
│   ├── login.png
│   ├── dashboard.jpg
│   └── ...
├── figma_links.md          # Markdown file with Figma URLs
└── assets/                 # General assets (logos, illustrations, etc.)
    ├── icons/
    │   ├── icon1.svg
    │   └── ...
    └── images/
        ├── image1.png
        └── ...
```

## 📋 File Descriptions

### **`design_system/`**
Contains JSON files defining the design system:

- **`color_palette.json`**: Defines colors including light and dark modes
- **`typography.json`**: Defines font families, sizes, weights, line heights
- **`spacing.json`**: Defines consistent spacing values, border radius, shadows
- **`components.json`**: Defines specifications for reusable UI components

### **`screens/`**
Contains image files (JPG, PNG) of UI screens for:
- Layout analysis
- Pixel-perfect measurements
- Additional context when Figma links are not available

### **`figma_links.md`**
A markdown file containing Figma URLs for:
- Design extraction
- Asset downloading
- Component analysis
- Layout measurements

### **`assets/`**
General assets like:
- Logos
- Illustrations
- Non-screen-specific images/icons

## 🎯 Benefits

- **Standardization**: Clear, consistent structure for UXD assets
- **Automated Analysis**: EFTDM framework can easily locate and analyze files
- **Clarity**: Reduces ambiguity for developers and designers
- **Scalability**: Easily accommodates growing design assets

## 📖 Usage

1. Follow this structure when organizing your project's UXD folder
2. Ensure all relevant design system JSONs, screen images, and Figma links are placed in their respective locations
3. The EFTDM framework will automatically analyze these files during Stage 5 (RTSD Creation)

## 🔧 Framework Integration

The EFTDM framework will:
- Analyze design system JSONs to generate CSS variables
- Extract assets from Figma links
- Analyze screen images for pixel-perfect measurements
- Create comprehensive design system documentation
- Generate asset usage guides for development
