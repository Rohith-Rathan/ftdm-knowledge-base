# 🖼️ Images Directory

This directory contains PNG image files generated from Mermaid diagrams.

## **Generated Images:**

After Stage 1 execution, this directory will contain:

- `user_journey.png` - User journey flow diagram
- `system_architecture.png` - System architecture diagram  
- `business_process.png` - Business process flow diagram
- `data_flow.png` - Data flow diagram
- `decision_tree.png` - Decision tree diagram
- `gantt_chart.png` - Project timeline Gantt chart

## **Image Generation:**

Images are automatically generated using:
1. **Mermaid CLI** (preferred method)
2. **Online Mermaid API** (fallback method)

## **Important:**

- **This folder starts empty** - images are generated only after Stage 1 execution
- **Images are replaced** on each Stage 1 run with updated content
- **Images are generated from MMD files** in the parent directory
