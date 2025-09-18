#!/bin/bash
# detect-design-system.sh
# Detect and handle optional design system files

echo "🔍 Detecting Design System Files..."

# Function to check if file exists and is valid JSON
check_json_file() {
    local file_path="$1"
    local file_name="$2"
    
    if [ -f "$file_path" ]; then
        if jq empty "$file_path" 2>/dev/null; then
            echo "✅ Found valid $file_name: $file_path"
            return 0
        else
            echo "⚠️  Found invalid $file_name (not valid JSON): $file_path"
            return 1
        fi
    else
        echo "❌ $file_name not found: $file_path"
        return 1
    fi
}

# Check for design system files in UXD folder
echo "📁 Checking UXD folder for design system files..."
uxd_design_files=0

if check_json_file "UXD/color_palette.json" "color_palette.json"; then
    ((uxd_design_files++))
fi

if check_json_file "UXD/typography.json" "typography.json"; then
    ((uxd_design_files++))
fi

if check_json_file "UXD/spacing.json" "spacing.json"; then
    ((uxd_design_files++))
fi

if check_json_file "UXD/design_system.json" "design_system.json"; then
    ((uxd_design_files++))
fi

# Check for design system files in root directory
echo "📁 Checking root directory for design system files..."
root_design_files=0

if check_json_file "color_palette.json" "color_palette.json"; then
    ((root_design_files++))
fi

if check_json_file "typography.json" "typography.json"; then
    ((root_design_files++))
fi

if check_json_file "spacing.json" "spacing.json"; then
    ((root_design_files++))
fi

if check_json_file "design_system.json" "design_system.json"; then
    ((root_design_files++))
fi

# Check for Figma-generated design system files
echo "📁 Checking for Figma-generated design system files..."
figma_design_files=0

if check_json_file "figma_analysis_summary.json" "figma_analysis_summary.json"; then
    ((figma_design_files++))
fi

if check_json_file "figma_asset_inventory.json" "figma_asset_inventory.json"; then
    ((figma_design_files++))
fi

# Generate design system status report
echo "📊 Generating design system status report..."
cat > design_system_status.json << EOF
{
  "design_system_availability": {
    "uxd_folder_files": $uxd_design_files,
    "root_directory_files": $root_design_files,
    "figma_generated_files": $figma_design_files,
    "total_design_files": $((uxd_design_files + root_design_files + figma_design_files))
  },
  "design_system_status": "$(
    if [ $((uxd_design_files + root_design_files + figma_design_files)) -gt 0 ]; then
      echo "AVAILABLE"
    else
      echo "NOT_AVAILABLE"
    fi
  )",
  "recommended_approach": "$(
    if [ $((uxd_design_files + root_design_files + figma_design_files)) -gt 0 ]; then
      echo "Use existing design system files for RTSD integration"
    else
      echo "Extract design system from UXD analysis and Figma designs"
    fi
  )",
  "detected_files": {
    "uxd_folder": [
      $([ -f "UXD/color_palette.json" ] && echo '"color_palette.json"' || echo '')
      $([ -f "UXD/typography.json" ] && echo '"typography.json"' || echo '')
      $([ -f "UXD/spacing.json" ] && echo '"spacing.json"' || echo '')
      $([ -f "UXD/design_system.json" ] && echo '"design_system.json"' || echo '')
    ],
    "root_directory": [
      $([ -f "color_palette.json" ] && echo '"color_palette.json"' || echo '')
      $([ -f "typography.json" ] && echo '"typography.json"' || echo '')
      $([ -f "spacing.json" ] && echo '"spacing.json"' || echo '')
      $([ -f "design_system.json" ] && echo '"design_system.json"' || echo '')
    ],
    "figma_generated": [
      $([ -f "figma_analysis_summary.json" ] && echo '"figma_analysis_summary.json"' || echo '')
      $([ -f "figma_asset_inventory.json" ] && echo '"figma_asset_inventory.json"' || echo '')
    ]
  }
}
EOF

# Generate RTSD guidance based on availability
echo "📚 Generating RTSD guidance..."
cat > RTSD_DESIGN_SYSTEM_GUIDANCE.md << EOF
# 🎨 RTSD Design System Integration Guidance

## Design System Status
- **Total Design Files Found**: $((uxd_design_files + root_design_files + figma_design_files))
- **UXD Folder Files**: $uxd_design_files
- **Root Directory Files**: $root_design_files
- **Figma Generated Files**: $figma_design_files

## Recommended Approach

$(if [ $((uxd_design_files + root_design_files + figma_design_files)) -gt 0 ]; then
cat << 'INNER_EOF'
### ✅ Design System Files Available
**Use existing design system files for RTSD integration:**

1. **Color Palette Integration**
   - Use existing color_palette.json for exact color specifications
   - Map colors to UI components with hex codes and usage guidelines
   - Ensure color consistency across all screens

2. **Typography Integration**
   - Use existing typography.json for font specifications
   - Apply font families, sizes, weights, and line heights
   - Maintain typography hierarchy

3. **Spacing Integration**
   - Use existing spacing.json for layout specifications
   - Apply consistent margins, paddings, and gaps
   - Ensure responsive spacing

4. **Asset Integration**
   - Reference downloaded Figma assets
   - Use icons as-is without Vue wrappers
   - Optimize for reuse

### RTSD Requirements
- **MUST** include complete design system integration section
- **MUST** map every color, typography, and spacing specification
- **MUST** provide pixel-perfect implementation guidance
- **MUST** include asset mapping and usage guidelines
INNER_EOF
else
cat << 'INNER_EOF'
### ⚠️ Design System Files Not Available
**Extract design system from UXD analysis and Figma designs:**

1. **Basic Design Guidelines**
   - Extract color palette from UXD analysis
   - Identify typography patterns from UXD
   - Determine spacing from UXD layout analysis
   - Create basic design system from patterns

2. **Figma Design Analysis**
   - Extract colors from Figma designs
   - Identify typography from Figma text elements
   - Determine spacing from Figma layouts
   - Create design tokens from Figma analysis

3. **Best Practices Application**
   - Apply standard design system principles
   - Use industry-standard color palettes
   - Implement consistent typography scales
   - Apply responsive design patterns

### RTSD Requirements
- **MUST** include basic design guidelines section
- **MUST** extract design patterns from UXD analysis
- **MUST** create design system from available sources
- **MUST** provide implementation guidance based on analysis
INNER_EOF
fi)

## Implementation Strategy

### For RTSD Creation
1. **Check design_system_status.json** for availability
2. **Follow recommended approach** based on status
3. **Include appropriate sections** in RTSD document
4. **Provide implementation guidance** based on available resources

### For Development
1. **Use existing design system** if available
2. **Create design system** from UXD/Figma analysis if not available
3. **Maintain consistency** across all components
4. **Document design decisions** for future reference

## Quality Assurance
- ✅ Design system status detected
- ✅ Appropriate approach recommended
- ✅ RTSD guidance provided
- ✅ Implementation strategy defined

Generated on: $(date)
EOF

# Summary
echo "🎉 Design System Detection completed!"
echo "📊 Status: $(
    if [ $((uxd_design_files + root_design_files + figma_design_files)) -gt 0 ]; then
      echo "Design system files AVAILABLE"
    else
      echo "Design system files NOT AVAILABLE"
    fi
)"
echo "📄 Status report: design_system_status.json"
echo "📚 RTSD guidance: RTSD_DESIGN_SYSTEM_GUIDANCE.md"

# Exit with appropriate code
if [ $((uxd_design_files + root_design_files + figma_design_files)) -gt 0 ]; then
    echo "✅ Design system integration recommended"
    exit 0
else
    echo "⚠️  Basic design guidelines approach recommended"
    exit 0
fi
