# 🎯 STAGE 1: MERMAID GENERATION

## **PURPOSE**
Transform raw requirements into visual Mermaid flow diagrams for validation and clarity.

## **INPUT**
- Raw Requirements (text)
- Mermaid Templates/Scripts
- **UXD Folder Structure** (see `UXD/` folder for example)

## **OUTPUT**
- User Journey Flow (MMD + PNG)
- System Architecture Flow (MMD + PNG)
- Business Process Flow (MMD + PNG)
- Data Flow Diagram (MMD + PNG)
- Decision Tree Flow (MMD + PNG)
- Gantt Chart (MMD + PNG)

## **PROCESS**
1. **Requirement Analysis** → AI analyzes raw requirements
2. **Interactive Refinement** → AI asks clarifying questions
3. **Mermaid Generation** → AI creates flow diagrams
4. **Human Validation** → You review and provide feedback
5. **Iterative Refinement** → AI refines based on feedback
6. **Final Approval** → You confirm diagrams are accurate

## **FILES**
- `mermaid_generation_prompt.md` - Main prompt for AI
- `mermaid_templates/` - Pre-built Mermaid templates
- `example_outputs/` - Sample Mermaid diagrams
- `validation_checklist.md` - What to validate
- **`UXD/`** - **Example UXD folder structure** with design system files

## **HUMAN-IN-THE-LOOP**
✅ **Required**: You must validate each diagram before proceeding to Stage 2

## **SUCCESS CRITERIA**
- [ ] Requirements are crystal clear
- [ ] All flow diagrams accurately represent your vision
- [ ] No ambiguities or missing flows
- [ ] Ready for FSD creation

## **NEXT STAGE**
Once validated, proceed to **Stage 2: FSD Creation**
