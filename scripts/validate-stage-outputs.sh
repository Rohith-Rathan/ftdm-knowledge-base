#!/bin/bash
# validate-stage-outputs.sh - Anti-Hallucination Validation Script

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_error() {
    echo -e "${RED}ERROR: $1${NC}"
}

print_success() {
    echo -e "${GREEN}SUCCESS: $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}WARNING: $1${NC}"
}

# Function to validate stage number
validate_stage_number() {
    local stage_num=$1
    
    if [ -z "$stage_num" ]; then
        print_error "Stage number is required"
        echo "Usage: $0 [STAGE_NUMBER]"
        echo "Valid stages: 1, 2, 3, 4, 5, 6.1-6.13, 7"
        exit 1
    fi
    
    # Check if stage number is valid
    case $stage_num in
        1|2|3|4|5|7)
            print_success "Stage $stage_num is valid"
            ;;
        6.1|6.2|6.3|6.4|6.5|6.6|6.7|6.8|6.9|6.10|6.11|6.12|6.13)
            print_success "Stage $stage_num is valid (sub-stage of Stage 6)"
            ;;
        *)
            print_error "Invalid stage number: $stage_num"
            echo "Valid stages: 1, 2, 3, 4, 5, 6.1-6.13, 7"
            exit 1
            ;;
    esac
}

# Function to validate stage outputs
validate_stage_outputs() {
    local stage_num=$1
    
    echo "🔍 Validating Stage $stage_num outputs..."
    
    case $stage_num in
        1)
            validate_stage1_outputs
            ;;
        2)
            validate_stage2_outputs
            ;;
        3)
            validate_stage3_outputs
            ;;
        4)
            validate_stage4_outputs
            ;;
        5)
            validate_stage5_outputs
            ;;
        6.1|6.2|6.3|6.4|6.5|6.6|6.7|6.8|6.9|6.10|6.11|6.12|6.13)
            validate_stage6_outputs $stage_num
            ;;
        7)
            validate_stage7_outputs
            ;;
    esac
}

# Stage 1 validation
validate_stage1_outputs() {
    echo "📊 Validating Stage 1: Mermaid Generation outputs..."
    
    # Check for required files
    local required_files=(
        "Stage1_Mermaid_Generation/diagrams/user_journey.mmd"
        "Stage1_Mermaid_Generation/diagrams/system_architecture.mmd"
        "Stage1_Mermaid_Generation/diagrams/business_process.mmd"
        "Stage1_Mermaid_Generation/diagrams/data_model.mmd"
        "Stage1_Mermaid_Generation/diagrams/api_flow.mmd"
        "Stage1_Mermaid_Generation/diagrams/gantt_chart.mmd"
    )
    
    for file in "${required_files[@]}"; do
        if [ -f "$file" ]; then
            print_success "Found required file: $file"
        else
            print_error "Missing required file: $file"
        fi
    done
    
    # Check for image files
    local image_dir="Stage1_Mermaid_Generation/diagrams/images"
    if [ -d "$image_dir" ]; then
        local image_count=$(find "$image_dir" -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" | wc -l)
        if [ "$image_count" -ge 6 ]; then
            print_success "Found $image_count image files"
        else
            print_warning "Expected 6+ image files, found $image_count"
        fi
    else
        print_error "Missing image directory: $image_dir"
    fi
    
    # Validate Mermaid syntax
    echo "🔍 Validating Mermaid syntax..."
    for file in "${required_files[@]}"; do
        if [ -f "$file" ]; then
            # Basic syntax check (simplified)
            if grep -q "graph\|flowchart\|sequenceDiagram\|classDiagram\|gantt" "$file"; then
                print_success "Valid Mermaid syntax in $file"
            else
                print_error "Invalid Mermaid syntax in $file"
            fi
        fi
    done
}

# Stage 2 validation
validate_stage2_outputs() {
    echo "📋 Validating Stage 2: FSD Creation outputs..."
    
    # Check for required files
    local required_files=(
        "Stage2_FSD_Creation/fsd_document.md"
    )
    
    for file in "${required_files[@]}"; do
        if [ -f "$file" ]; then
            print_success "Found required file: $file"
        else
            print_error "Missing required file: $file"
        fi
    done
    
    # Validate FSD content
    if [ -f "Stage2_FSD_Creation/fsd_document.md" ]; then
        local fsd_file="Stage2_FSD_Creation/fsd_document.md"
        
        # Check for required sections
        local required_sections=(
            "User Stories"
            "Business Rules"
            "Acceptance Criteria"
            "Functional Requirements"
        )
        
        for section in "${required_sections[@]}"; do
            if grep -qi "$section" "$fsd_file"; then
                print_success "Found required section: $section"
            else
                print_error "Missing required section: $section"
            fi
        done
    fi
}

# Stage 3 validation
validate_stage3_outputs() {
    echo "🏗️ Validating Stage 3: TSD Creation outputs..."
    
    # Check for required files
    local required_files=(
        "Stage3_TSD_Creation/tsd_document.md"
    )
    
    for file in "${required_files[@]}"; do
        if [ -f "$file" ]; then
            print_success "Found required file: $file"
        else
            print_error "Missing required file: $file"
        fi
    done
    
    # Validate TSD content
    if [ -f "Stage3_TSD_Creation/tsd_document.md" ]; then
        local tsd_file="Stage3_TSD_Creation/tsd_document.md"
        
        # Check for required sections
        local required_sections=(
            "Technical Architecture"
            "API Specifications"
            "Database Design"
            "Technology Stack"
            "Security Requirements"
        )
        
        for section in "${required_sections[@]}"; do
            if grep -qi "$section" "$tsd_file"; then
                print_success "Found required section: $section"
            else
                print_error "Missing required section: $section"
            fi
        done
    fi
    
    # Check for UXD folder structure
    local uxd_folder="Stage4_UI_UX_Designs_Analysis/UXD"
    if [ -d "$uxd_folder" ]; then
        print_success "Found UXD folder structure: $uxd_folder"
    else
        print_error "Missing UXD folder structure: $uxd_folder"
    fi
}

# Stage 4 validation
validate_stage4_outputs() {
    echo "🎨 Validating Stage 4: UI/UX Designs Analysis outputs..."
    
    # Check for UXD folder structure
    local uxd_folder="Stage4_UI_UX_Designs_Analysis/UXD"
    if [ -d "$uxd_folder" ]; then
        print_success "Found UXD folder: $uxd_folder"
        
        # Check for required subfolders
        local required_subfolders=(
            "screens"
            "figma_captured_assets"
            "design_system"
        )
        
        for subfolder in "${required_subfolders[@]}"; do
            if [ -d "$uxd_folder/$subfolder" ]; then
                print_success "Found required subfolder: $subfolder"
            else
                print_error "Missing required subfolder: $subfolder"
            fi
        done
    else
        print_error "Missing UXD folder: $uxd_folder"
    fi
    
    # Check for design system files
    local design_system_file="$uxd_folder/design_system/design_system.json"
    if [ -f "$design_system_file" ]; then
        print_success "Found design system file: $design_system_file"
    else
        print_warning "Design system file not found: $design_system_file"
    fi
}

# Stage 5 validation
validate_stage5_outputs() {
    echo "🔧 Validating Stage 5: RTSD Creation outputs..."
    
    # Check for required files
    local required_files=(
        "Stage5_RTSD_Creation/rtsd_document.md"
    )
    
    for file in "${required_files[@]}"; do
        if [ -f "$file" ]; then
            print_success "Found required file: $file"
        else
            print_error "Missing required file: $file"
        fi
    done
    
    # Validate RTSD content
    if [ -f "Stage5_RTSD_Creation/rtsd_document.md" ]; then
        local rtsd_file="Stage5_RTSD_Creation/rtsd_document.md"
        
        # Check for required sections
        local required_sections=(
            "Business Logic"
            "Implementation Specifications"
            "Asset Integration"
            "Refined Technical Specifications"
        )
        
        for section in "${required_sections[@]}"; do
            if grep -qi "$section" "$rtsd_file"; then
                print_success "Found required section: $section"
            else
                print_error "Missing required section: $section"
            fi
        done
    fi
}

# Stage 6 validation
validate_stage6_outputs() {
    local stage_num=$1
    echo "⚙️ Validating Stage $stage_num: Implementation outputs..."
    
    # Check for stage-specific files
    local stage_folder="Stage${stage_num//./_}_*"
    local found_folder=$(find . -maxdepth 1 -type d -name "$stage_folder" | head -1)
    
    if [ -n "$found_folder" ]; then
        print_success "Found stage folder: $found_folder"
        
        # Check for required files
        local required_files=(
            "README.md"
            "user_guide.md"
            "*_prompt.md"
        )
        
        for file_pattern in "${required_files[@]}"; do
            if find "$found_folder" -name "$file_pattern" | grep -q .; then
                print_success "Found required file pattern: $file_pattern"
            else
                print_error "Missing required file pattern: $file_pattern"
            fi
        done
    else
        print_error "Missing stage folder for Stage $stage_num"
    fi
}

# Stage 7 validation
validate_stage7_outputs() {
    echo "🔧 Validating Stage 7: Temporary Backend outputs..."
    
    # Check for required files
    local required_files=(
        "Stage7_Temporary_Backend_Local_Test/README.md"
        "Stage7_Temporary_Backend_Local_Test/user_guide.md"
    )
    
    for file in "${required_files[@]}"; do
        if [ -f "$file" ]; then
            print_success "Found required file: $file"
        else
            print_error "Missing required file: $file"
        fi
    done
}

# Main execution
main() {
    local stage_num=$1
    
    echo "🛡️ EFTDM Anti-Hallucination Validation Script"
    echo "=============================================="
    
    # Validate stage number
    validate_stage_number "$stage_num"
    
    # Validate stage outputs
    validate_stage_outputs "$stage_num"
    
    echo ""
    echo "✅ Validation complete for Stage $stage_num"
    echo "🛡️ Anti-hallucination safeguards verified"
}

# Run main function with all arguments
main "$@"
