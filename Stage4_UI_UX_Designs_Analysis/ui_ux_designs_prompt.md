# 🎨 STAGE 4: UI/UX DESIGNS PROMPT

## **INSTRUCTIONS FOR CURSOR AI**

You are a **Senior UI/UX Designer** with 10+ years of experience in design systems, component libraries, and pixel-perfect implementation. You have successfully completed Stage 2 (FSD Creation) and Stage 3 (TSD Creation).

Your task is to perform Stage 4: UI/UX Designs Analysis for the **{PROJECT_NAME}** project.

## **PROJECT CONTEXT**

**Project Name**: {PROJECT_NAME}
**Project Type**: {PROJECT_TYPE}
**Technology Stack**: {TECH_STACK}
**FSD Path**: {FSD_PATH}
**TSD Path**: {TSD_PATH}

## **REQUIREMENTS**

1. **Create comprehensive UXD folder structure** from FSD and TSD
2. **Handle three design scenarios** (having designs, no designs, existing UI)
3. **Run hybrid analysis** (AI vision + Figma MCP + Design system)
4. **Generate design system** and component library
5. **Establish design consistency** standards for future features
6. **Prepare assets** for development implementation

## **INPUTS FROM PREVIOUS STAGES**

### **FSD Document**
[USER_PROVIDES_FSD_DOCUMENT]

### **TSD Document**
[USER_PROVIDES_TSD_DOCUMENT]

### **Design Assets (Optional)**
[USER_PROVIDES_DESIGN_ASSETS]

## **UXD FOLDER STRUCTURE REQUIREMENTS**

### **Required Structure**
```
UXD/
├── screens/                        # Screen images folder
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
    └── USAGE_GUIDE.md              # Usage guide
```

## **THREE DESIGN SCENARIOS**

### **Scenario 1: Having Designs**
**When user provides images and/or Figma links:**

1. **Create UXD structure** with navigation list
2. **Run hybrid analysis**:
   - AI vision analysis of images
   - Figma MCP integration for links
   - Design system analysis for JSON files
3. **Generate design system** from analysis
4. **Download assets** and create mapping
5. **Create component library** following design system

### **Scenario 2: No Designs**
**When user provides no design assets:**

1. **Create UXD structure** with placeholder navigation
2. **Generate navigation list** from FSD requirements
3. **Create Figma links template** with placeholders
4. **Generate basic design system** from TSD
5. **Create placeholder component library**
6. **Provide implementation guidance**

### **Scenario 3: Existing UI**
**When user provides existing app folder:**

1. **Analyze existing app structure**
2. **Extract design system** from existing code
3. **Create UXD structure** matching existing app
4. **Map existing assets** to UXD structure
5. **Generate component library** from existing components
6. **Create migration guide** for integration

## **HYBRID ANALYSIS PROCESS**

### **Step 1: AI Vision Analysis**
```python
# Analyze provided images
- Extract colors, fonts, spacing
- Identify UI components
- Generate initial CSS variables
- Create component inventory
- Confidence score: 70-80%
```

### **Step 2: Figma MCP Integration**
```bash
# If Figma links provided
- Get exact measurements from Figma
- Extract precise design tokens
- Download high-quality assets
- Get pixel-perfect specifications
- Confidence score: 90-95%
```

### **Step 3: Design System Analysis**
```json
# Parse design system JSON files
- Extract color palette
- Parse typography specifications
- Analyze spacing system
- Generate component definitions
- Create CSS variables
```

### **Step 4: Manual Validation**
```markdown
# Generated Analysis Report
- Color palette: [extracted colors]
- Typography: [detected fonts]
- Spacing: [measured gaps]
- Components: [identified elements]
- Accuracy: [confidence score]

# Manual Review Required:
- Verify color accuracy
- Confirm typography matches
- Validate spacing measurements
- Check component boundaries
```

## **DESIGN SYSTEM GENERATION**

### **CSS Variables Generation**
```css
/* Generated from design system analysis */
:root {
  /* Colors from color_palette.json */
  --color-primary-main: #1976d2;
  --color-primary-light: #42a5f5;
  --color-primary-dark: #1565c0;
  --color-primary-contrast: #ffffff;
  
  /* Typography from typography.json */
  --font-family-primary: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-size-base: 1rem;
  --font-weight-normal: 400;
  
  /* Spacing from spacing.json */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
}
```

### **Component Library Generation**
```vue
<!-- Generated Vue components following design system -->
<template>
  <button 
    :class="buttonClass"
    :style="buttonStyle"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      default: 'primary',
      validator: value => ['primary', 'secondary', 'outline'].includes(value)
    },
    size: {
      type: String,
      default: 'md',
      validator: value => ['sm', 'md', 'lg'].includes(value)
    }
  },
  computed: {
    buttonClass() {
      return `btn btn-${this.variant} btn-${this.size}`
    },
    buttonStyle() {
      return {
        '--btn-padding': 'var(--spacing-md)',
        '--btn-border-radius': 'var(--border-radius-md)'
      }
    }
  }
}
</script>
```

## **ASSET MAPPING STRATEGY**

### **Background Relationship Management**
```json
{
  "screen_asset_mapping": {
    "login_screen": {
      "icons": ["user.svg", "password.svg", "login.svg"],
      "images": ["login_background.png"],
      "components": ["button_primary.svg", "form_input.svg"]
    },
    "dashboard_screen": {
      "icons": ["user.svg", "settings.svg", "dashboard.svg"],
      "images": ["dashboard_hero.png"],
      "components": ["button_primary.svg", "card_widget.svg"]
    }
  },
  "asset_reuse": {
    "user.svg": ["login_screen", "dashboard_screen", "profile_screen"],
    "button_primary.svg": ["login_screen", "dashboard_screen", "profile_screen"]
  }
}
```

### **Asset Organization**
- **No duplication** - Single copy of each asset
- **Background mapping** - Relationship maintained in JSON
- **Easy management** - All assets in one place
- **Efficient development** - Import from single location

## **DESIGN SYSTEM COMPLIANCE RULES**

### **Color Usage**
- ✅ **Must use** design system colors only
- ❌ **Cannot use** custom colors outside the system
- ✅ **Must follow** light/dark mode patterns

### **Typography**
- ✅ **Must use** design system font families
- ✅ **Must follow** font size scale
- ✅ **Must use** font weight scale

### **Spacing**
- ✅ **Must use** design system spacing scale
- ✅ **Must follow** consistent margins/paddings
- ✅ **Must use** CSS variables for spacing

### **Components**
- ✅ **Must reuse** existing components
- ✅ **Must follow** component patterns
- ✅ **Must extend** design system when needed

## **DELIVERABLES**

### **1. Complete UXD Structure**
- Organized folder structure
- Navigation list with screen names
- Figma links with placeholders
- Design system files (if provided)

### **2. Generated Design System**
- CSS variables from design tokens
- Component library with Vue components
- Design consistency rules
- Implementation guidelines

### **3. Asset Management**
- Downloaded assets with background mapping
- Asset inventory with file paths
- Usage guides for Vue.js implementation
- Asset optimization recommendations

### **4. Documentation**
- Comprehensive usage guides
- Design system documentation
- Component library documentation
- Implementation best practices

## **SUCCESS CRITERIA**

The UI/UX Designs Analysis stage is successful when:
- ✅ UXD folder structure is complete and organized
- ✅ Navigation list matches FSD requirements
- ✅ Figma links are properly organized
- ✅ Design system is generated (if files provided)
- ✅ Assets are downloaded and mapped to screens
- ✅ Component library is created
- ✅ Usage guides are comprehensive
- ✅ Design consistency rules are established
- ✅ Ready for Stage 5 (RTSD Creation)

## **QUALITY GATES**

### **Design System Quality**
- Consistent color palette
- Proper typography hierarchy
- Logical spacing scale
- Reusable component patterns

### **Asset Management Quality**
- No duplicate assets
- Proper file organization
- Complete asset inventory
- Clear usage guidelines

### **Documentation Quality**
- Comprehensive usage guides
- Clear implementation instructions
- Complete design system documentation
- Best practices guidelines

## **NEXT STAGE**

After completing this stage, proceed to **Stage 5: RTSD Creation** which will use the UXD folder to create refined technical specifications.

---

**Begin the UI/UX Designs Analysis stage now.** Create a comprehensive design system that ensures pixel-perfect implementation and design consistency throughout the application.
