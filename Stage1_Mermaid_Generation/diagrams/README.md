# 📁 Diagrams Directory

This directory is created dynamically when Stage 1 generates Mermaid diagrams.

## **Generated Files:**

After running Stage 1, this directory will contain:

- **6 MMD files**: `user_journey.mmd`, `system_architecture.mmd`, `business_process.mmd`, `data_flow.mmd`, `decision_tree.mmd`, `gantt_chart.mmd`
- **6 PNG images**: Corresponding image files in the `images/` subdirectory
- **Analysis file**: `analysis_results.json` with extracted requirements data

## **Important:**

- **This folder starts empty** - files are generated only after Stage 1 execution
- **Do not add files manually** - the framework generates everything automatically
- **Files are replaced** on each Stage 1 run with updated content
