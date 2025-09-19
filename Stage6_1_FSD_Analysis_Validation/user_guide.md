# 🎯 STAGE 6.1: FSD ANALYSIS & VALIDATION - USER GUIDE

## **STEP-BY-STEP USAGE GUIDE**

### **Prerequisites**
- ✅ Completed Stage 1: Mermaid Generation
- ✅ Completed Stage 2: FSD Creation
- ✅ Have FSD document ready for analysis

### **Step 1: Prepare Your Documents**

#### **Required Documents:**
```
📄 FSD Document: Stage2_FSD_Creation/{PROJECT_NAME}_fsd.md
📊 Mermaid Diagrams: Stage1_Mermaid_Generation/mermaid_diagrams/
```

#### **Optional Documents:**
```
📁 UXD Folder: Stage4_UI_UX_Designs_Analysis/UXD/
📄 RTSD Document: Stage5_RTSD_Creation/{PROJECT_NAME}_rtsd.md
```

### **Step 2: Run Stage 6.1**

#### **Using Cursor AI:**
1. Open the main prompt: `Stage6_1_FSD_Analysis_Validation/fsd_analysis_prompt.md`
2. Provide your FSD document
3. Include Mermaid diagrams for context
4. Let AI analyze and validate requirements

#### **Using Validation Script:**
```bash
# Validate FSD completeness
./scripts/validate-stage6-1-inputs.sh

# This will check:
# - FSD document exists and is complete
# - User stories have acceptance criteria
# - Business logic is defined
# - No gaps or inconsistencies
```

### **Step 3: Review Analysis Results**

#### **Check Validation Report:**
```
Stage6_1_FSD_Analysis_Validation/
├── analysis_report.md          # Complete analysis results
├── gap_analysis.md            # Identified gaps and issues
├── validation_checklist.md    # Validation checklist
└── implementation_priorities.md # Priority recommendations
```

#### **Verify Requirements:**
- ✅ All functional requirements are complete
- ✅ User stories have clear acceptance criteria
- ✅ Business logic is fully defined
- ✅ No gaps or inconsistencies found

### **Step 4: Address Any Issues**

#### **If Gaps Found:**
1. Review gap analysis report
2. Update FSD document with missing requirements
3. Re-run Stage 6.1 validation
4. Ensure all gaps are addressed

#### **If Inconsistencies Found:**
1. Review validation checklist
2. Resolve conflicting requirements
3. Update FSD document
4. Re-validate until clean

### **Step 5: Proceed to Next Stage**

Once Stage 6.1 is complete:
- ✅ FSD is validated and complete
- ✅ Requirements are implementation-ready
- ✅ Priorities are established

**Proceed to Stage 6.2: Implementation Planning**

## **TROUBLESHOOTING**

### **Issue: FSD Document Not Found**
**Solution:** Ensure FSD was created in Stage 2
```bash
# Check if FSD exists
ls Stage2_FSD_Creation/*_fsd.md
```

### **Issue: Incomplete User Stories**
**Solution:** Update FSD with missing acceptance criteria
- Add "Given-When-Then" format
- Include edge cases
- Define success criteria

### **Issue: Missing Business Logic**
**Solution:** Enhance FSD with detailed business rules
- Add validation rules
- Define business processes
- Include error handling

## **BEST PRACTICES**

### **FSD Quality:**
- Use clear, unambiguous language
- Include all edge cases
- Define success criteria
- Maintain consistency

### **Validation Process:**
- Review systematically
- Check completeness
- Validate consistency
- Document findings

---

**This guide ensures thorough FSD validation before implementation planning.**
