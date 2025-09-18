# 🎯 STAGE 1: MERMAID GENERATION - USER GUIDE

## **OVERVIEW**
This stage transforms your raw requirements into visual Mermaid flow diagrams for validation and clarity. It uses the proven ChatGPT approach for interactive refinement.

## **WHAT YOU GET**
- User Journey Flow (MMD)
- System Architecture Flow (MMD)
- Business Process Flow (MMD)
- Data Flow Diagram (MMD)
- Decision Tree Flow (MMD)
- Gantt Chart (MMD)

## **HOW TO USE**

### **Step 1: Copy the Prompt**
Copy the content from `mermaid_generation_prompt.md` to Cursor AI

### **Step 2: Provide Raw Requirements**
Replace `[USER_PROVIDES_RAW_REQUIREMENTS]` with your actual requirements

### **Step 3: Interactive Refinement**
- AI analyzes your requirements
- AI asks clarifying questions
- You answer and refine
- Repeat until requirements are crystal clear

### **Step 4: Mermaid Generation**
- AI generates all 6 types of diagrams
- You review each diagram
- Provide feedback for improvements
- AI refines based on your feedback

### **Step 5: Final Validation**
- Confirm all diagrams accurately represent your vision
- No ambiguities or missing flows
- Ready for Stage 2

## **EXAMPLE WORKFLOW**

### **Raw Requirements Example:**
```
"I want to build a mobile app for selling handmade crafts. Users should be able to browse products, add to cart, and checkout. Sellers should be able to list their products. I need payment integration and order tracking."
```

### **After Refinement:**
```
**Project**: Handmade Crafts Marketplace Mobile App
**Target Users**: Craft buyers (ages 25-45) and sellers (ages 30-60)
**Core Features**: Browse, search, cart, checkout, seller dashboard, order tracking
**Business Rules**: 10% commission, free seller registration, 30-day returns
**Technical Requirements**: iOS/Android (React Native), Stripe payments, AWS backend
**Success Criteria**: 1000 users in 6 months, $10K monthly revenue
```

### **Generated Diagrams:**
- **User Journey Flow**: Complete buyer experience from app download to product review
- **System Architecture Flow**: Mobile app → API Gateway → Microservices → Databases
- **Business Process Flow**: Seller listing → Admin approval → Buyer purchase → Commission calculation
- **Data Flow Diagram**: User data → Authentication → Product data → Order data → Payment data
- **Decision Tree Flow**: User type → Feature access → Business rules → Actions
- **Gantt Chart**: 3-month development timeline with phases and milestones

## **SUCCESS CRITERIA**
- [ ] Requirements are crystal clear
- [ ] All flow diagrams accurately represent your vision
- [ ] No ambiguities or missing flows
- [ ] Ready for FSD creation

## **NEXT STAGE**
Once validated, proceed to **Stage 2: FSD Creation** with your refined requirements and Mermaid diagrams.

## **TROUBLESHOOTING**

### **Common Issues:**
1. **Vague Requirements**: AI will ask clarifying questions - answer them thoroughly
2. **Missing Flows**: Review diagrams and identify what's missing
3. **Incorrect Logic**: Provide specific feedback on what needs to change
4. **Too Complex**: Break down complex requirements into simpler parts

### **Tips for Success:**
1. **Be Specific**: Provide detailed requirements rather than high-level ideas
2. **Answer Questions**: Respond to all clarifying questions from AI
3. **Review Carefully**: Take time to review each diagram thoroughly
4. **Iterate**: Don't hesitate to ask for refinements until perfect

## **FILES INCLUDED**
- `mermaid_generation_prompt.md` - Main prompt for AI
- `mermaid_templates/` - Pre-built Mermaid templates
- `example_outputs/` - Sample Mermaid diagrams
- `validation_checklist.md` - What to validate
- `user_guide.md` - This guide
- `troubleshooting.md` - Common issues and solutions
