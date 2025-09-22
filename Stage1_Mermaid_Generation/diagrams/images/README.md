# Images Folder - Stage 1 Generated Images

## 📁 Purpose
This folder will contain PNG image files generated from Mermaid diagrams **only after** Stage 1 execution.

## 🖼️ Generated Images (After Stage 1)
- `user_journey.png` - Visual user journey flow
- `system_architecture.png` - Visual system architecture
- `business_process.png` - Visual business process flow
- `data_flow.png` - Visual data flow diagram
- `decision_tree.png` - Visual decision tree
- `gantt_chart.png` - Visual project timeline

## 🔄 How Images Are Generated
1. **MMD Files**: First, Mermaid diagram files (.mmd) are created
2. **CLI Conversion**: Mermaid CLI converts MMD files to PNG images
3. **Local Installation**: Uses `npx mmdc` for local CLI execution
4. **Fallback**: Online Mermaid API if CLI fails

## ⚠️ Important
**This folder starts empty.** Images are generated dynamically based on user requirements during Stage 1 execution.

## 🎯 Usage
- **Visual Verification**: Review PNG files to verify diagram accuracy
- **Stakeholder Sharing**: PNG files can be easily shared with non-technical users
- **Documentation**: Use images in presentations and documentation
