# 🎯 STAGE 5: RTSD CREATION PROMPT

## **INSTRUCTIONS FOR CURSOR AI**

You are a Senior Technical Architect with 15+ years of experience in designing enterprise-grade, scalable, and secure systems.

I will provide you with:
1. A UX Diagrams Document (UXD) that contains user flows, wireframes, and interaction designs.
2. A previously generated Technical Specification Document (TSD).
3. **MANDATORY**: UXD folder from Stage 4 (UI/UX Designs Analysis) with design system, assets, and navigation structure.
4. **MANDATORY**: Figma asset inventory and component specifications from Stage 4.

Your job is to generate a refined Technical Specification Document (TSD) that merges insights from all inputs.

**MANDATORY ASSET USAGE REQUIREMENTS:**
- **MUST** use downloaded Figma assets (icons, images, components) as-is without creating Vue wrapper files
- **MUST** reuse icons wherever possible to maintain consistency
- **MUST** clean up icon names by removing "--Streamline-Tabler" and similar text
- **MUST** reference assets directly in Vue components using standard import methods
- **MUST** maintain centralized icon management for optimal reuse
- **MUST** document asset usage patterns and naming conventions

Refinement Objectives:
1. Alignment with UX
   - Ensure technical components, APIs, and workflows align with the UX diagrams.
   - Map every key UX flow to the corresponding technical module/service.
   - **MANDATORY**: Map every UI element to its corresponding Figma asset and design token from Stage 4 (UI/UX Designs Analysis) UXD folder.

2. Completeness
   - Fill any gaps left in the previous TSD using details from UXD.
   - Ensure end-to-end coverage of functional flows, data handling, and integrations.
   - **IF** design system files exist: Include complete asset mapping and design system integration from Stage 4 (UI/UX Designs Analysis).
   - **IF** design system files don't exist: Create basic design guidelines from UXD analysis.

3. Consistency
   - Resolve discrepancies between the UXD and the previous TSD.
   - Ensure terminology, module names, and workflows remain consistent.
   - **IF** design system files exist: Ensure design system consistency across all components using Stage 4 (UI/UX Designs Analysis) assets.
   - **IF** design system files don't exist: Establish consistent design patterns from UXD analysis.

4. Enhancements
   - Optimize architecture if UXD reveals performance, usability, or scalability needs.
   - Highlight potential improvements in NFRs (performance, security, maintainability).
   - **IF** Figma designs available: Optimize for pixel-perfect implementation matching Figma designs from Stage 4 (UI/UX Designs Analysis).
   - **IF** Figma designs not available: Optimize based on UXD analysis and best practices.

5. Documentation Standards
   The refined TSD should include (at minimum):
   - Introduction & Purpose
   - Architecture Overview (with updated diagrams if needed)
   - Module-level Design & Data Flow
   - API Contracts / Integration Points
   - Database & Storage Design
   - Security & Compliance Considerations
   - Scalability, Performance & NFRs
   - Deployment & DevOps Considerations
   - Traceability Matrix (UX Flows → Technical Modules)
   - **IF** design system files exist: Design System Integration Section
   - **IF** design system files exist: Asset Mapping & Usage Guidelines
   - **IF** Figma designs available: Pixel-Perfect Implementation Specifications
   - **IF** design system files don't exist: Basic Design Guidelines Section

**CONDITIONAL DESIGN SYSTEM INTEGRATION SECTION:**

**IF DESIGN SYSTEM JSON FILES EXIST:**
- Complete color palette mapping with hex codes and usage guidelines
- Typography specifications with font families, sizes, weights, and line heights
- Spacing system with consistent margins, paddings, and gaps
- Component specifications with exact measurements from Figma
- Asset usage guidelines (icons as-is, no Vue wrappers)
- Icon reuse optimization and naming conventions
- Direct asset import patterns for Vue.js components
- Asset inventory with file paths and usage contexts
- Responsive breakpoints and scaling rules
- Accessibility considerations for colors and typography

**IF DESIGN SYSTEM JSON FILES DON'T EXIST:**
- Basic color palette extracted from UXD analysis
- Typography guidelines based on UXD patterns
- Spacing recommendations from UXD layout analysis
- Component specifications based on UXD patterns
- Basic asset usage guidelines
- Standard Vue.js import patterns
- Responsive design recommendations
- Accessibility best practices

Output Requirements:
- Provide the refined TSD in a clear, structured, and professional format.
- Highlight changes or refinements made compared to the previous TSD.
- **IF** design system files exist: Include complete design system integration and asset mapping.
- **IF** design system files don't exist: Include basic design guidelines extracted from UXD.
- Ensure the final document is ready for developer handoff and implementation.
- **IF** Figma designs available: Ensure pixel-perfect implementation guidance for all UI components.
- **IF** Figma designs not available: Provide implementation guidance based on UXD analysis.

## **INPUTS FROM PREVIOUS STAGES**

### **FSD Document**
[USER_PROVIDES_FSD_DOCUMENT]

### **TSD Document**
[USER_PROVIDES_TSD_DOCUMENT]

### **UXD Assets (Optional)**
- **Images**: JPG/PNG files in `UXD/screens/` folder
- **Figma Links**: URLs in `UXD/figma_links.md` file
- **Design System**: JSON files in `UXD/design_system/` folder:
  - `color_palette.json` (light/dark modes)
  - `typography.json` (font system)
  - `spacing.json` (layout system)
  - `components.json` (component specs)
- **Component Specifications**: Detailed UI component requirements

## **YOUR TASK**

### **Step 1: UXD Analysis (From Stage 4 - UI/UX Designs Analysis)**
If UXD assets are provided from Stage 4:

#### **1.1: UXD Folder Structure Analysis**
- **Check for design system files** in `UXD/design_system_files/` folder
- **Analyze JSON files** for color palette, typography, spacing, components
- **Extract design tokens** and create CSS variables
- **Map design system** to Vue.js implementation

#### **1.2: Image Analysis**
- Analyze UXD images in `UXD/screens/` folder for layout and design
- Extract UI components and patterns
- Identify design system elements
- Map UI elements to functional requirements
- **Scan layout positions** and element structure for pixel-perfect implementation

#### **1.3: Figma Analysis**
- Analyze Figma links from `UXD/figma_screen_links.md` file
- Extract spacing, typography, and colors
- Identify component library and design system
- Extract interaction patterns and animations
- **Download assets** (icons, images, components) and save locally
- **Clean icon names** by removing "--Streamline-Tabler" and similar text

**CRITICAL**: Run comprehensive Figma analysis before proceeding:
```bash
# Run comprehensive Figma analysis
./scripts/comprehensive-figma-analysis.sh

# This will:
# - Analyze all Figma screens from UXD/figma_screen_links.md
# - Download assets to UXD/figma_captured_assets/
# - Generate CSS variables from design system
# - Create asset inventory with file paths
# - Generate usage guide for Vue.js implementation
```

### **Step 2: RTSD Generation**
Create a comprehensive RTSD using the enhanced template:

#### **2.1: UX-Driven Technical Architecture**
- Component-based architecture
- Design system integration
- UI/UX technical requirements
- Responsive design specifications

#### **2.2: Design System Integration**
- Color palette and typography
- Component library specifications
- Spacing and layout system
- Icon and asset requirements

#### **2.3: Component Specifications**
- UI component definitions
- Component props and states
- Component interactions
- Component testing requirements

#### **2.4: UI/UX Technical Requirements**
- Frontend framework requirements
- Styling and CSS requirements
- Animation and transition specifications
- Accessibility requirements

#### **2.5: Integration Specifications**
- Frontend-backend integration
- API integration requirements
- State management requirements
- Data flow specifications

### **Step 3: Quality Assurance**
- [ ] All FSD and TSD requirements are covered
- [ ] UXD is integrated into technical specs
- [ ] Design system is comprehensive
- [ ] Component specifications are complete
- [ ] UI/UX technical requirements are clear
- [ ] Integration requirements are defined

## **RTSD TEMPLATE STRUCTURE**

```markdown
# REFINED TECHNICAL SPECIFICATION DOCUMENT (RTSD)

## 1. UX-DRIVEN TECHNICAL ARCHITECTURE
### 1.1 Component Architecture
### 1.2 Design System Integration
### 1.3 UI/UX Technical Requirements
### 1.4 Responsive Design Specifications

## 2. DESIGN SYSTEM INTEGRATION
### 2.1 Color Palette and Typography
### 2.2 Component Library Specifications
### 2.3 Spacing and Layout System
### 2.4 Icon and Asset Requirements

## 3. COMPONENT SPECIFICATIONS
### 3.1 UI Component Definitions
### 3.2 Component Props and States
### 3.3 Component Interactions
### 3.4 Component Testing Requirements

## 4. UI/UX TECHNICAL REQUIREMENTS
### 4.1 Frontend Framework Requirements
### 4.2 Styling and CSS Requirements
### 4.3 Animation and Transition Specifications
### 4.4 Accessibility Requirements

## 5. INTEGRATION SPECIFICATIONS
### 5.1 Frontend-Backend Integration
### 5.2 API Integration Requirements
### 5.3 State Management Requirements
### 5.4 Data Flow Specifications

## 6. UXD ANALYSIS RESULTS
### 6.1 Design System Elements
### 6.2 UI Component Patterns
### 6.3 Interaction Patterns
### 6.4 Design Specifications

## 7. APPENDICES
### 7.1 Design System Documentation
### 7.2 Component Library Reference
### 7.3 UI/UX Guidelines
### 7.4 Accessibility Checklist
```

## **UXD ANALYSIS PROMPTS**

### **For Images**
```
Analyze the provided UXD images and extract:
1. Layout and grid system
2. UI components and patterns
3. Color palette and typography
4. Spacing and sizing
5. Design system elements
6. User interaction patterns
```

### **For Figma Links**
```
Analyze the provided Figma links and extract:
1. Design specifications from Dev Mode
2. Component library and design system
3. Spacing, typography, and colors
4. Interaction patterns and animations
5. Responsive design specifications
6. Accessibility requirements
```

## **EXPECTED OUTPUT**

### **File Naming Convention**
**CRITICAL**: Save the RTSD document with project-specific naming:
- **File Name**: `{PROJECT_NAME}_rtsd.md`
- **Location**: `Stage5_RTSD_Creation/{PROJECT_NAME}_rtsd.md`
- **Example**: If project is "TaskManager", save as `TaskManager_rtsd.md`

After completion, you will have:
- ✅ **Comprehensive RTSD** with UX-driven technical specs
- ✅ **Integrated design system** with specifications
- ✅ **Complete component library** with technical requirements
- ✅ **UI/UX technical requirements** for implementation
- ✅ **Integration specifications** for frontend-backend
- ✅ **Ready for Stage 5** (Implementation)

## **NEXT STEPS**

1. **Review the generated RTSD** for completeness
2. **Provide feedback** on any missing or unclear sections
3. **Confirm accuracy** of all UX-driven requirements
4. **Approve the RTSD** for Stage 5
5. **Proceed to Stage 5** (Implementation)

---

**Ready to begin?** Please provide your FSD, TSD, and UXD assets (if available), and I'll create your comprehensive RTSD.
