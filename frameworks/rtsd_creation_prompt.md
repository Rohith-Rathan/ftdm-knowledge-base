# RTSD CREATION PROMPT
## Refined Technical Specification Document Generation

---

## **CONTEXT & TRIGGER**

You are creating a **Refined Technical Specification Document (RTSD)** because:

✅ **FSD Complete**: Functional Specification Document is finalized  
✅ **UXD Complete**: UX Design assets are available (images OR Figma links)  
✅ **TSD Exists**: Initial Technical Specification Document exists  
✅ **UX Review Done**: UX design has been reviewed and approved  
✅ **Technical Refinement Needed**: Architecture needs UX-driven refinements  

---

## **UXD ASSET ANALYSIS**

### **Scenario Detection**
```
🔍 Detecting UXD assets...
📸 UXD Images: [Count] files in UXD/ folder
🎨 Figma Links: [Count] links in DESIGN_ASSETS.md
📋 Scenario: [1/2/3] - [Images Only/Figma Only/Both]
```

### **UXD Analysis Results**
**From UXD Images:**
- **Layout Structure**: [Component placement and hierarchy]
- **Design System**: [Colors, typography, spacing extracted]
- **UI Elements**: [Buttons, forms, modals, navigation identified]
- **User Flows**: [Interaction patterns and workflows]
- **Responsive Breakpoints**: [Mobile, tablet, desktop layouts]

**From Figma MCP Analysis:**
- **Exact Measurements**: [Precise spacing, sizing from Dev Mode]
- **Design Tokens**: [Variables, colors, typography from Figma]
- **Component Variants**: [All button, input, card variants]
- **Animation Specs**: [Hover, focus, transition specifications]
- **Accessibility**: [ARIA labels, contrast ratios, focus states]

---

## **RTSD CREATION TASKS**

### **1. UX-Driven Architecture Refinements**
- [ ] **Map UX Elements to Technical Components**
  - FileDropZone.vue ← Upload area from UXD
  - ModeSelector.vue ← Quick/Detail toggle from UXD
  - TimeEntryGrid.vue ← Timesheet grid from UXD
  - ActivityManager.vue ← Activity sections from UXD

- [ ] **Define Component Specifications**
  - Props and state management from UX requirements
  - Event handling for UX interactions
  - Real-time update requirements from UX flows
  - Accessibility specifications from design analysis

- [ ] **Specify Frontend Architecture**
  - Vue.js component structure aligned with UX
  - State management for UX-driven features
  - Routing based on UX navigation patterns
  - Performance requirements from UX expectations

### **2. Enhanced Data Models**
- [ ] **Update Data Models Based on UX Requirements**
  - Add UX-specific fields (entryMode, userPreferences)
  - Support for dual-mode data entry (Quick/Detail)
  - Real-time calculation fields (totalHours, totalMinutes)
  - UX metadata fields (processingAccuracy, suggestedMode)

- [ ] **Define Mode-Specific Business Logic**
  - Quick Mode: Simplified validation rules
  - Detail Mode: Comprehensive validation requirements
  - Mode switching: Data preservation and conversion
  - User preference persistence

### **3. API Endpoint Enhancements**
- [ ] **Add UX-Driven Endpoints**
  - POST /api/timesheet/upload-and-parse (single-step UX flow)
  - PUT /api/timesheet/{id}/mode/{mode} (mode switching)
  - GET /api/user/timesheet-preferences (user preferences)
  - PUT /api/user/timesheet-preferences (preference updates)

- [ ] **Enhance Existing Endpoints**
  - Update /api/timesheet/{id} to support mode-specific data
  - Add real-time validation to all endpoints
  - Include UX metadata in responses
  - Support WebSocket for real-time updates

### **4. Performance & UX Requirements**
- [ ] **Specify UX Performance Targets**
  - Upload-to-preview: <3 seconds (from UX expectations)
  - Mode switching: <500ms (from UX interactions)
  - Real-time calculation: <100ms (from UX responsiveness)
  - Page load: <2 seconds (from UX performance)

- [ ] **Define Real-Time Validation Requirements**
  - Client-side validation for immediate feedback
  - Server-side validation for data integrity
  - Progressive enhancement for offline capability
  - Error handling with UX-friendly messages

### **5. Testing Strategy Enhancements**
- [ ] **UX Flow Testing**
  - End-to-end testing of complete user journeys
  - Component testing with UX specifications
  - Cross-browser testing for UX consistency
  - Accessibility testing with UX requirements

- [ ] **Performance Testing**
  - Load testing for UX performance targets
  - Stress testing for concurrent users
  - Mobile performance testing
  - Real-time update performance testing

---

## **RTSD TEMPLATE USAGE**

### **Template Selection**
Use: `INDUSTRY_STANDARD_RTSD_TEMPLATE.md`

### **Customization Instructions**
1. **Replace Placeholders**:
   - `[Project Name]` → Actual project name
   - `[Feature]` → Specific feature names
   - `[Entity]` → Data entity names
   - `[UXSpecific]` → UX-driven service names

2. **Integrate UXD Analysis Results**:
   - Component specifications from UXD measurements
   - Design system from Figma variables
   - User flow mappings from UXD analysis
   - Performance requirements from UX expectations

3. **Add Traceability Matrix**:
   - Map each UX element to technical component
   - Specify API endpoints for each UX interaction
   - Define service layer for each UX requirement
   - Include testing strategy for each UX flow

---

## **OUTPUT REQUIREMENTS**

### **RTSD Document Structure**
1. **Introduction & Purpose** - UX-driven refinements summary
2. **UX-Aligned Architecture** - Component mapping and technical alignment
3. **Refined Data Models** - Enhanced schemas with UX-specific fields
4. **Enhanced API Endpoints** - UX-driven endpoint specifications
5. **Frontend Architecture** - Vue.js structure aligned with UX
6. **Service Layer** - UX-specific services and business logic
7. **Validation & Business Rules** - Mode-specific validation
8. **Traceability Matrix** - UX elements to technical components mapping
9. **Performance & Scalability** - UX-driven performance requirements
10. **Testing Strategy** - UX flow testing and validation
11. **Security Enhancements** - UX-specific security requirements
12. **Monitoring & Observability** - UX performance metrics
13. **Deployment Refinements** - UX-driven deployment requirements
14. **Change Highlights** - Summary of UX-driven changes
15. **Implementation Timeline** - Revised schedule with UX considerations
16. **Risk Mitigation** - UX-specific risk strategies
17. **Future Enhancements** - UX-driven roadmap
18. **Conclusion** - UX alignment validation

### **Quality Validation**
- [ ] All UX elements mapped to technical components
- [ ] Component specifications match UXD measurements
- [ ] API endpoints support all UX interactions
- [ ] Performance requirements meet UX expectations
- [ ] Testing strategy covers all UX flows
- [ ] Security requirements address UX data handling
- [ ] Deployment supports UX requirements

---

## **RTSD CREATION WORKFLOW**

### **Step 1: UXD Analysis Integration**
```
🔄 Integrating UXD analysis results...
📸 Layout structure: [Component hierarchy from UXD]
🎨 Design system: [Colors, typography from Figma]
🔍 UI elements: [Buttons, forms, modals from UXD]
📱 Responsive design: [Breakpoints from UXD]
♿ Accessibility: [Requirements from design analysis]
```

### **Step 2: Technical Mapping**
```
🔗 Mapping UX to technical components...
📝 Component specifications: [Props, state, events]
🌐 API endpoints: [REST endpoints for UX interactions]
🗄️ Data models: [Enhanced schemas with UX fields]
⚡ Performance: [Requirements from UX expectations]
```

### **Step 3: RTSD Generation**
```
📝 Generating RTSD document...
✅ Using INDUSTRY_STANDARD_RTSD_TEMPLATE.md
✅ Integrating UXD analysis results
✅ Adding traceability matrix
✅ Specifying UX-driven requirements
✅ Validating completeness
```

### **Step 4: Quality Validation**
```
✅ Validating RTSD completeness...
✅ All UX elements mapped to technical components
✅ Component specifications match UXD measurements
✅ API endpoints support UX interactions
✅ Performance requirements meet UX expectations
✅ Testing strategy covers UX flows
✅ Security requirements address UX data
```

---

## **SUCCESS CRITERIA**

The RTSD creation is successful when:

✅ **UX Alignment**: All UX elements mapped to technical components  
✅ **Technical Completeness**: All technical aspects covered for implementation  
✅ **Performance Requirements**: UX performance targets specified  
✅ **Testing Coverage**: Complete testing strategy for UX flows  
✅ **Security Compliance**: UX data handling security requirements  
✅ **Implementation Ready**: Clear technical specifications for development  
✅ **Traceability**: Complete mapping from UX to technical implementation  

---

## **NEXT STEPS**

After RTSD creation:

1. **Phase 2**: Use RTSD for Implementation Planning
2. **Phase 3**: Apply RTSD specifications for Project Setup
3. **Phase 4**: Implement backend services per RTSD
4. **Phase 5**: Build frontend components per RTSD
5. **Phase 6**: Test UX flows per RTSD specifications
6. **Phase 7**: Deploy with UX performance requirements

---

**RTSD Creation Complete!**  
**Ready for Phase 2: Implementation Planning with RTSD specifications.**
