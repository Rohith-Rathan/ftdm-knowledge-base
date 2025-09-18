# RTSD CREATION METHODOLOGY
## Refined Technical Specification Document (RTSD) Generation Process

---

## 1. RTSD CREATION TRIGGER

### 1.1 When to Create RTSD
**RTSD is created when:**
- ✅ FSD (Functional Specification Document) is complete
- ✅ UXD (UX Design) is complete (images OR Figma links)
- ✅ Initial TSD (Technical Specification Document) exists
- ✅ UX review and approval is done
- ✅ Technical architecture needs UX-driven refinements

### 1.2 RTSD Creation Scenarios
```
Scenario 1: FSD + UXD Images → RTSD
Scenario 2: FSD + Figma MCP Links → RTSD  
Scenario 3: FSD + UXD Images + Figma MCP Links → RTSD
```

---

## 2. UXD INTEGRATION PROCESS

### 2.1 UXD Image Analysis (Scenario 1)
**When UXD folder contains design images:**

```bash
# Automatic UXD Image Analysis
./scripts/analyze-uxd-images.sh

# Extracts from UXD images:
- Layout structure and component placement
- Color palette and design system
- Typography and spacing
- UI element specifications
- User flow patterns
- Responsive breakpoints
```

**RTSD Integration:**
- Maps UX elements to technical components
- Defines component specifications from visual analysis
- Creates UX-driven data models
- Specifies real-time UI requirements

### 2.2 Figma MCP Analysis (Scenario 2)
**When DESIGN_ASSETS.md contains Figma links:**

```bash
# Automatic Figma MCP Analysis
./scripts/analyze-figma-designs.sh

# Extracts from Figma Dev Mode:
- Exact measurements and spacing
- Design tokens and variables
- Component variants and states
- Animation specifications
- Responsive design system
- Accessibility specifications
```

**RTSD Integration:**
- Precise technical specifications from Figma Dev Mode
- Design system implementation details
- Component library specifications
- Animation and interaction requirements

### 2.3 Hybrid Analysis (Scenario 3)
**When both UXD images and Figma links exist:**

```bash
# Combined Analysis
./scripts/detect-design-assets.sh
./scripts/analyze-uxd-images.sh
./scripts/analyze-figma-designs.sh

# Priority: Figma MCP (primary) + UXD Images (fallback/complementary)
```

**RTSD Integration:**
- Figma specifications take precedence for exact measurements
- UXD images provide context and validation
- Cross-reference between Figma and UXD for completeness

---

## 3. RTSD CREATION WORKFLOW

### 3.1 Phase 1: UXD Analysis & Technical Mapping
```markdown
## Step 1: Analyze UXD Assets
- [ ] Scan UXD folder for design images
- [ ] Scan DESIGN_ASSETS.md for Figma links
- [ ] Run appropriate analysis scripts
- [ ] Extract design system specifications
- [ ] Identify UX patterns and flows

## Step 2: Map UX to Technical Requirements
- [ ] Map UX elements to Vue.js components
- [ ] Define component props and state management
- [ ] Specify real-time UI update requirements
- [ ] Identify performance requirements from UX
- [ ] Map accessibility requirements from designs
```

### 3.2 Phase 2: Technical Refinement
```markdown
## Step 3: Refine Technical Architecture
- [ ] Update data models based on UX requirements
- [ ] Enhance API endpoints for UX-driven features
- [ ] Specify frontend architecture refinements
- [ ] Define state management for UX interactions
- [ ] Update validation rules based on UX patterns

## Step 4: Create RTSD Document
- [ ] Use INDUSTRY_STANDARD_RTSD_TEMPLATE.md
- [ ] Fill in UX-driven technical specifications
- [ ] Include component mapping tables
- [ ] Add UX performance requirements
- [ ] Specify real-time validation requirements
```

---

## 4. RTSD CREATION PROMPT

### 4.1 Automatic RTSD Generation Prompt
```markdown
# RTSD CREATION PROMPT

## Context
You are creating a Refined Technical Specification Document (RTSD) based on:
- Completed FSD: [FSD_DOCUMENT]
- Completed UXD: [UXD_ANALYSIS_RESULTS]
- Existing TSD: [TSD_DOCUMENT]

## UXD Analysis Results
[Include results from UXD image analysis or Figma MCP analysis]

## RTSD Creation Tasks
1. **UX-Driven Architecture Refinements**
   - Map UX elements to technical components
   - Define component specifications from UXD analysis
   - Specify real-time UI update requirements

2. **Enhanced Data Models**
   - Update data models based on UX requirements
   - Add UX-specific fields and validation
   - Define mode-specific business logic

3. **Frontend Architecture Refinements**
   - Specify Vue.js component structure
   - Define state management for UX interactions
   - Add real-time calculation requirements

4. **API Endpoint Enhancements**
   - Add UX-driven endpoints
   - Specify mode-aware update endpoints
   - Define user preference endpoints

5. **Performance & UX Requirements**
   - Specify UX performance targets
   - Define real-time validation requirements
   - Add accessibility specifications

## Output Requirements
- Complete RTSD document using INDUSTRY_STANDARD_RTSD_TEMPLATE.md
- Traceability matrix mapping UX elements to technical components
- Component specifications with exact measurements from UXD
- Performance requirements based on UX expectations
- Testing strategy including UX flow testing
```

---

## 5. UXD INTEGRATION EXAMPLES

### 5.1 UXD Image Analysis → RTSD Integration
```markdown
## Example: Upload Flow from UXD Image

### UXD Analysis Results:
- File drop zone with drag-and-drop functionality
- Real-time progress indicator during upload
- Immediate preview of parsed data
- Mode selector (Quick/Detail) prominently displayed

### RTSD Technical Mapping:
```typescript
// Component: FileDropZone.vue
interface FileDropZoneProps {
  onFileSelect: (file: File) => void;
  onDragOver: (event: DragEvent) => void;
  onDrop: (event: DragEvent) => void;
  isProcessing: boolean;
}

// API Endpoint: POST /api/timesheet/upload-and-parse
// Real-time processing with WebSocket updates
```

### 5.2 Figma MCP Analysis → RTSD Integration
```markdown
## Example: Design System from Figma

### Figma MCP Analysis Results:
- Primary color: #3B82F6 (Blue-500)
- Spacing system: 4px, 8px, 12px, 16px, 24px, 32px
- Typography: Inter font family, 14px base size
- Component variants: Button (Primary, Secondary, Outline)

### RTSD Technical Specifications:
```css
/* Design System Implementation */
:root {
  --color-primary: #3B82F6;
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --font-family: 'Inter', sans-serif;
  --font-size-base: 14px;
}
```

---

## 6. RTSD VALIDATION CHECKLIST

### 6.1 UXD Compliance Validation
- [ ] All UX elements mapped to technical components
- [ ] Component specifications match UXD measurements
- [ ] Color palette and typography implemented
- [ ] Responsive breakpoints defined
- [ ] Accessibility requirements specified
- [ ] Animation and interaction requirements defined

### 6.2 Technical Completeness Validation
- [ ] Data models support UX requirements
- [ ] API endpoints enable UX interactions
- [ ] State management handles UX complexity
- [ ] Performance requirements meet UX expectations
- [ ] Testing strategy covers UX flows
- [ ] Deployment supports UX requirements

---

## 7. RTSD CREATION AUTOMATION

### 7.1 Automated RTSD Generation Script
```bash
#!/bin/bash
# generate-rtsd.sh

echo "🔄 Generating RTSD from FSD + UXD..."

# Step 1: Analyze UXD assets
if [ -d "UXD" ]; then
    echo "📸 Analyzing UXD images..."
    ./scripts/analyze-uxd-images.sh
fi

if [ -f "DESIGN_ASSETS.md" ] || [ -f "UXD/DESIGN_ASSETS.md" ]; then
    echo "🎨 Analyzing Figma designs..."
    ./scripts/analyze-figma-designs.sh
fi

# Step 2: Generate RTSD
echo "📝 Generating RTSD document..."
# Use AI to generate RTSD based on FSD + UXD analysis results

# Step 3: Validate RTSD
echo "✅ Validating RTSD completeness..."
./scripts/validate-rtsd.sh

echo "🎉 RTSD generation complete!"
```

### 7.2 RTSD Template Customization
```markdown
# RTSD Template Customization Based on UXD Analysis

## UXD Analysis Results Integration:
- Component specifications from UXD measurements
- Design system from Figma variables
- User flow mappings from UXD analysis
- Performance requirements from UX expectations
- Accessibility specifications from design analysis
```

---

## 8. CONCLUSION

The RTSD creation process is **UXD-driven** and **automated**:

1. **UXD Analysis**: Automatic analysis of design images or Figma links
2. **Technical Mapping**: AI-driven mapping of UX elements to technical components
3. **RTSD Generation**: Automated generation using enhanced template
4. **Validation**: Comprehensive validation of UX compliance

This ensures that the RTSD accurately reflects the UX requirements and provides precise technical specifications for implementation.

---

**Document Version**: 1.0  
**Created**: [Date]  
**Next Review**: [Date]  
**Status**: Ready for Implementation
