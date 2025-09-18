# 🎯 STAGE 2: FSD CREATION - USER GUIDE

## **OVERVIEW**
This stage creates a comprehensive Functional Specification Document (FSD) using your refined requirements and Mermaid flow diagrams from Stage 1.

## **WHAT YOU GET**
- Complete FSD Document (MD)
- User Stories with Acceptance Criteria
- Business Rules and Constraints
- UI/UX Requirements
- Non-Functional Requirements
- Acceptance Criteria

## **HOW TO USE**

### **Step 1: Copy the Prompt**
Copy the content from `fsd_creation_prompt.md` to Cursor AI

### **Step 2: Provide Inputs**
Replace placeholders with:
- `[USER_PROVIDES_REFINED_REQUIREMENTS]` - Your refined requirements from Stage 1
- `[USER_PROVIDES_MERMAID_DIAGRAMS]` - Your Mermaid diagrams from Stage 1

### **Step 3: FSD Generation**
- AI analyzes requirements and diagrams
- AI creates comprehensive FSD using enhanced template
- AI integrates Mermaid diagrams into FSD
- AI ensures all requirements are covered

### **Step 4: Review and Refine**
- Review the generated FSD for completeness
- Provide feedback on any missing or unclear sections
- AI refines based on your feedback
- Iterate until FSD is complete

### **Step 5: Final Validation**
- Confirm FSD covers all requirements
- Verify user stories are complete
- Check business rules are defined
- Ensure acceptance criteria are measurable
- Ready for Stage 3

## **EXAMPLE WORKFLOW**

### **Input from Stage 1:**
```
**Refined Requirements**: Handmade Crafts Marketplace Mobile App
**Target Users**: Craft buyers (ages 25-45) and sellers (ages 30-60)
**Core Features**: Browse, search, cart, checkout, seller dashboard, order tracking
**Business Rules**: 10% commission, free seller registration, 30-day returns
**Technical Requirements**: iOS/Android (React Native), Stripe payments, AWS backend
**Success Criteria**: 1000 users in 6 months, $10K monthly revenue
```

### **Generated FSD Sections:**
1. **Project Overview**: Project name, objectives, target users, success metrics
2. **Functional Requirements**: Core features, user workflows, business rules
3. **User Stories**: Epic and feature-level stories with acceptance criteria
4. **UI/UX Requirements**: User interface specifications, design system
5. **Business Rules**: Business logic, validation rules, workflow rules
6. **Non-Functional Requirements**: Performance, security, scalability
7. **Acceptance Criteria**: Feature, user story, and system criteria
8. **Mermaid Diagrams**: Integrated flow diagrams from Stage 1

## **SUCCESS CRITERIA**
- [ ] FSD covers all requirements
- [ ] User stories are complete and testable
- [ ] Business rules are clearly defined
- [ ] Acceptance criteria are measurable
- [ ] UI/UX requirements are specified
- [ ] Mermaid diagrams are integrated
- [ ] Ready for TSD creation

## **NEXT STAGE**
Once validated, proceed to **Stage 3: TSD Creation** with your FSD document.

## **TROUBLESHOOTING**

### **Common Issues:**
1. **Incomplete Requirements**: AI will identify gaps - provide missing information
2. **Vague User Stories**: AI will ask for more specific acceptance criteria
3. **Missing Business Rules**: AI will identify undefined business logic
4. **Unclear UI/UX**: AI will ask for more specific design requirements

### **Tips for Success:**
1. **Provide Complete Inputs**: Include all refined requirements and diagrams
2. **Review Thoroughly**: Take time to review each section of the FSD
3. **Be Specific**: Provide detailed feedback on what needs improvement
4. **Iterate**: Don't hesitate to ask for refinements until perfect

## **FILES INCLUDED**
- `fsd_creation_prompt.md` - Main prompt for AI
- `fsd_template.md` - Enhanced FSD template
- `example_outputs/` - Sample FSD documents
- `validation_checklist.md` - What to validate
- `user_guide.md` - This guide
- `troubleshooting.md` - Common issues and solutions
