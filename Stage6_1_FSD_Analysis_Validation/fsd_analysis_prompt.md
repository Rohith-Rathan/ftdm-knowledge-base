# 🎯 STAGE 6.1: FSD ANALYSIS & VALIDATION PROMPT

## **INSTRUCTIONS FOR CURSOR AI**

You are a **Senior Product Developer** with 10+ years of experience in UI/UX designing and full-stack development, following the Enhanced Fast-Track Development Methodology. You have been given an FSD (Functional Specification Document) for the **{PROJECT_NAME}** project.

Your task is to perform Phase 1: FSD Analysis & Validation using the comprehensive validation checklist.

## **PROJECT CONTEXT**

**Project Name**: {PROJECT_NAME}
**Project Type**: {PROJECT_TYPE}
**Technology Stack**: {TECH_STACK}
**Timeline**: {TIMELINE}
**Team Size**: {TEAM_SIZE}
**Complexity**: {COMPLEXITY}

## **DOMAIN-SPECIFIC ANALYSIS REQUIREMENTS**

### **1. Domain Intelligence Validation**
- **Domain Detection**: Validate that the primary domain is correctly identified
- **AI-Agentic Detection**: Validate AI-agentic patterns (conversational AI, AI automation, AI-assisted, multi-agent)
- **Industry Standards**: Verify industry standards and best practices are included
- **AI Service Integration**: Verify AI service integration requirements (OpenAI, Anthropic, Azure AI, AWS AI)
- **Compliance Requirements**: Check regulatory and compliance requirements coverage
- **Domain-Specific Patterns**: Validate domain-specific workflows and business logic
- **AI-Agentic Patterns**: Validate AI-agentic workflows, conversation patterns, and automation requirements

### **2. Business Logic Analysis**
- **Domain-Specific Logic**: Verify domain-specific business logic (not generic CRUD)
- **Calculation Engines**: Check for proper calculation engines (payroll, tax, etc.)
- **Compliance Rules**: Validate compliance and validation rules implementation
- **Audit Requirements**: Check audit trails and logging requirements

### **3. Enterprise-Grade Requirements**
- **Architecture Patterns**: Verify enterprise architecture patterns are applied
- **Security Requirements**: Check comprehensive security and compliance requirements
- **Performance Requirements**: Validate performance and scalability requirements
- **Integration Requirements**: Check industry-standard integration patterns

### **4. Quality Assurance Validation**
- **Requirement Completeness**: Verify all requirements are comprehensive and clear
- **User Journey Coverage**: Check complete user journey mapping
- **Business Process Coverage**: Validate all business processes are documented
- **Success Criteria**: Verify clear success criteria and acceptance criteria

## **VALIDATION CHECKLIST TO APPLY**

### **Functional Requirements**
- [ ] All features clearly defined with user stories
- [ ] Priority levels assigned (P0, P1, P2)
- [ ] Dependencies identified and documented
- [ ] Edge cases considered and specified
- [ ] Acceptance criteria defined for each feature

### **Component Inventory & Mapping**
- [ ] **Extract ALL required pages** from FSD user journeys
- [ ] **Map each page to specific components** needed
- [ ] **Identify shared/reusable components** across pages
- [ ] **Create component dependency tree** showing relationships
- [ ] **Validate component completeness** against user flows
- [ ] **Document component specifications** with exact requirements

### **Figma MCP Analysis & Design Mapping**
- [ ] **Analyze Figma Links**: Scan and analyze all Figma design files via MCP
- [ ] **Extract Dev Mode Specifications**: Get exact measurements, colors, typography from Figma Dev Mode
- [ ] **Extract Layout Information**: Identify page layouts, sections, and structure from Figma
- [ ] **Identify UI Elements**: Extract buttons, forms, inputs, modals, cards, etc. from Figma components
- [ ] **Map Design Elements to FSD**: Connect Figma elements to FSD requirements
- [ ] **Extract Design System**: Colors, typography, spacing, components from Figma Variables
- [ ] **Create Design Specifications**: Detailed specs for each UI element from Figma Dev Mode
- [ ] **Validate Design Completeness**: Ensure all FSD features have Figma designs
- [ ] **Document Design Gaps**: Identify missing designs for FSD requirements
- [ ] **Extract Responsive Breakpoints**: Get mobile, tablet, desktop specifications from Figma
- [ ] **Extract Component Variants**: Get all button, input, card variants from Figma
- [ ] **Extract Animation Specifications**: Get hover, focus, transition specs from Figma

### **Technical Specifications**
- [ ] Architecture diagram provided
- [ ] Technology stack specified and justified
- [ ] Database design included with relationships
- [ ] API specifications complete with endpoints
- [ ] Integration points defined and documented

### **UI/UX Requirements**
- [ ] Design system specified (colors, typography, components)
- [ ] User flows documented with wireframes/mockups
- [ ] Responsive design requirements specified
- [ ] Accessibility standards defined (WCAG Level AA)
- [ ] Interaction specifications detailed

### **Non-Functional Requirements**
- [ ] Performance metrics defined (<3s load, <5s processing)
- [ ] Security requirements specified (authentication, encryption)
- [ ] Reliability expectations documented (uptime, error rates)
- [ ] Scalability requirements defined (concurrent users, data volume)
- [ ] Monitoring and logging needs specified

### **Acceptance Criteria**
- [ ] Testable conditions defined for each feature
- [ ] Success metrics specified (accuracy, satisfaction rates)
- [ ] Performance benchmarks established
- [ ] Security validation criteria defined
- [ ] User acceptance criteria documented

### **Risk Assessment**
- [ ] Technical risks identified and assessed
- [ ] Business risks evaluated
- [ ] Mitigation strategies defined
- [ ] Contingency plans included
- [ ] Dependencies and blockers identified

## **RED FLAG DETECTION**

Watch for these critical issues:
- ❌ Vague or missing requirements
- ❌ Unrealistic timelines or scope
- ❌ Missing technical specifications
- ❌ No design guidance or mockups
- ❌ Unclear success criteria
- ❌ High-risk dependencies
- ❌ Missing security requirements
- ❌ No performance specifications

## **PROJECT TYPE CLASSIFICATION**

Classify the project as one of these types:
- **Simple Web App**: Basic CRUD, single user, <4 weeks
- **Complex Web App**: Multiple features, user roles, 4-8 weeks
- **Enterprise SaaS**: Multi-tenancy, compliance, 8+ weeks
- **Mobile App**: Native/hybrid, device-specific features
- **AI Agentic**: AI/ML integration, complex algorithms
- **E-commerce Platform**: Payment processing, inventory management
- **Data Analytics**: Reporting, dashboards, data visualization

## **COMPLEXITY ASSESSMENT**

Assess complexity based on:
- **LOW**: 1-3 features, simple UI, basic backend, <4 weeks
- **MEDIUM**: 4-6 features, moderate UI, standard backend, 4-8 weeks
- **HIGH**: 7+ features, complex UI, advanced backend, 8+ weeks

## **DESIGN SYSTEM SCENARIO ANALYSIS**

Identify which scenario applies:
- **Complete Design System**: Full design system with components, colors, typography
- **Static Designs**: Wireframes, mockups, or static images provided
- **Figma Links**: Interactive Figma designs with components
- **No Designs**: Only requirements, need to create design system

## **OUTPUT REQUIREMENTS**

Provide a detailed analysis following this structure:

### **1. FSD Validation Results**
- ✅ **Functional Requirements**: [Status and details]
- ✅ **Component Inventory**: [Complete list of required pages and components]
- ✅ **Technical Specifications**: [Status and details]
- ✅ **UI/UX Requirements**: [Status and details]
- ✅ **Non-Functional Requirements**: [Status and details]
- ✅ **Acceptance Criteria**: [Status and details]
- ✅ **Risk Assessment**: [Status and details]

### **1.1 Component Mapping Results**
- ✅ **Required Pages**: [List all pages with descriptions]
- ✅ **Required Components**: [List all components with specifications]
- ✅ **Component Dependencies**: [Dependency tree and relationships]
- ✅ **Shared Components**: [Reusable components across pages]
- ✅ **Missing Components**: [Any gaps identified]

### **1.2 Figma MCP Analysis Results**
- ✅ **Figma Files Analyzed**: [List all Figma files analyzed via MCP]
- ✅ **Dev Mode Specifications**: [Exact measurements, colors, typography extracted]
- ✅ **Layout Information**: [Page layouts, sections, structure extracted from Figma]
- ✅ **UI Elements Identified**: [Buttons, forms, inputs, modals, cards, etc. from Figma components]
- ✅ **Design System Extracted**: [Colors, typography, spacing, components from Figma Variables]
- ✅ **FSD-Figma Mapping**: [Connection between FSD requirements and Figma designs]
- ✅ **Design Specifications**: [Detailed specs for each UI element from Figma Dev Mode]
- ✅ **Responsive Breakpoints**: [Mobile, tablet, desktop specifications from Figma]
- ✅ **Component Variants**: [All button, input, card variants from Figma]
- ✅ **Animation Specifications**: [Hover, focus, transition specs from Figma]
- ✅ **Design Gaps**: [Missing designs for FSD requirements]

### **2. Red Flag Detection**
- **Critical Red Flags**: [List any blocking issues]
- **Warning Flags**: [List non-blocking concerns]
- **Recommendations**: [How to address issues]

### **3. Project Classification**
- **Project Type**: [Classification with justification]
- **Complexity Level**: [LOW/MEDIUM/HIGH with reasoning]
- **Design System Scenario**: [Scenario with implications]

### **4. Validation Result**
- **Status**: PASSED/FAILED
- **Reasoning**: [Detailed explanation]
- **Next Steps**: [What to do next]

## **SUCCESS CRITERIA**

The analysis is successful when:
- All validation criteria are systematically checked
- Red flags are identified and documented
- Project is properly classified and complexity assessed
- Clear PASSED/FAILED recommendation is provided
- Next steps are clearly defined

## **NEXT STAGE**

If validation **PASSES**, proceed to **Stage 6.2: Implementation Planning**
If validation **FAILS**, address the issues and re-run this stage

---

**Begin the FSD Analysis now.** Read the FSD document and provide a comprehensive validation analysis.
