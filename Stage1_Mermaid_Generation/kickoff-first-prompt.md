# 🚀 STAGE 1 KICKOFF PROMPT

## **📋 How to Use This Prompt**

### **Step 1: Prepare Your Requirements**
1. Create a file named `raw-requirement.md` (or any name you prefer)
2. Write your raw requirements in that file
3. Save it in the `Stage1_Mermaid_Generation/` folder

### **Step 2: Update the Prompt**
1. Open `mermaid_generation_prompt.md`
2. Find the line: `## **MY RAW REQUIREMENTS**`
3. Replace `[USER_PROVIDES_RAW_REQUIREMENTS]` with your file name (without path)
4. Example: `@my-app-requirements.md`

### **Step 3: Execute Stage 1**
Copy and paste this exact message in Cursor:

```
Hi, take the prompt from @mermaid_generation_prompt.md and read the requirements from @[YOUR_FILE_NAME]

**CRITICAL: Follow the mandatory workflow in the prompt - ask the 3 clarifying questions FIRST before any analysis or diagram generation.**
```

**Replace `[YOUR_FILE_NAME]` with your actual file name (e.g., `@my-app-requirements.md`)**

## **📁 File Structure Example**

```
Stage1_Mermaid_Generation/
├── mermaid_generation_prompt.md
├── raw-requirement.md                    ← Your requirements file
├── diagrams/                             ← Generated files go here
│   ├── README.md
│   └── images/
│       └── README.md
└── scripts/
    ├── enhanced-mermaid-generator.py
    └── stage1-complete-workflow.sh
```

## **📝 Requirements File Template**

Create your `raw-requirement.md` file with this structure:

```markdown
# My Application Requirements

## Project Overview
[Describe your project in 2-3 sentences]

## Core Features
- Feature 1: [Description]
- Feature 2: [Description]
- Feature 3: [Description]

## User Roles
- Role 1: [Description]
- Role 2: [Description]

## Business Goals
- Goal 1: [Description]
- Goal 2: [Description]

## Technical Requirements
- Platform: [Web/Mobile/Desktop]
- Performance: [Any specific requirements]
- Integrations: [External systems needed]

## Additional Context
[Any other important information]
```

## **🎯 What Happens Next**

After you paste the kickoff prompt, Stage 1 will:

1. **Read your requirements** from the specified file
2. **MANDATORY: Ask 3 clarifying questions FIRST** (Domain, Business Context, Tech Stack)
3. **WAIT for your answers** to all 3 questions
4. **ONLY AFTER** receiving answers, **Generate 6 Mermaid diagrams** with visual previews
5. **Create MMD and PNG files** automatically
6. **Provide iterative refinement** options

**CRITICAL: The AI will NOT proceed to diagram generation until you answer the 3 clarifying questions.**

## **✅ Benefits of This Approach**

- ✅ **Clean separation**: Requirements separate from prompt
- ✅ **Reusable**: Same prompt works for any project
- ✅ **Organized**: Easy to manage multiple projects
- ✅ **Version control**: Requirements file can be tracked separately
- ✅ **Professional**: Follows best practices for documentation

## **🔄 Iterative Refinement**

After Stage 1 generates initial diagrams, you can:

1. **Modify requirements** in your `raw-requirement.md` file
2. **Request specific diagram changes**
3. **Regenerate with updated requirements**

The system will automatically backup old files and create new ones.

## **📋 Quick Checklist**

Before starting Stage 1:

- [ ] Created `raw-requirement.md` with your requirements
- [ ] Updated `mermaid_generation_prompt.md` with correct file path
- [ ] **CRITICAL**: Ready to answer 3 clarifying questions FIRST
- [ ] Have your project context clear
- [ ] Understand that AI will NOT generate diagrams until you answer questions

## **🚀 Ready to Start?**

1. Create your requirements file
2. Update the prompt file path
3. Paste: `Hi, take the prompt from @mermaid_generation_prompt.md`
4. **MANDATORY**: Answer the 3 clarifying questions FIRST
5. **ONLY AFTER** answering questions, review and refine the generated diagrams

**That's it! Stage 1 will handle the rest automatically.**
