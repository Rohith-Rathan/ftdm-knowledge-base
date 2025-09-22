#!/bin/bash
# iterative-mermaid-refinement.sh
# Interactive Mermaid Diagram Refinement Workflow

set -e  # Exit on any error

echo "🔄 ITERATIVE MERMAID DIAGRAM REFINEMENT WORKFLOW"
echo "================================================"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if we're in the right directory
if [ ! -f "Stage1_Mermaid_Generation/mermaid_generation_prompt.md" ]; then
    print_error "Please run this script from the EFTDM_FRAMEWORK root directory"
    exit 1
fi

# Function to backup existing files
backup_existing_files() {
    local backup_dir="Stage1_Mermaid_Generation/diagrams/backup_$(date +%Y%m%d_%H%M%S)"
    mkdir -p "$backup_dir"
    
    if [ -d "Stage1_Mermaid_Generation/diagrams" ]; then
        cp -r Stage1_Mermaid_Generation/diagrams/*.mmd "$backup_dir/" 2>/dev/null || true
        cp -r Stage1_Mermaid_Generation/diagrams/images/*.png "$backup_dir/" 2>/dev/null || true
        print_success "Backed up existing files to: $backup_dir"
    fi
}

# Function to generate diagrams with custom requirements
generate_with_requirements() {
    local requirements="$1"
    local custom_diagrams="$2"
    
    print_status "Generating diagrams with updated requirements..."
    
    if [ -n "$custom_diagrams" ] && [ -f "$custom_diagrams" ]; then
        python3 scripts/enhanced-iterative-mermaid-generator.py \
            --requirements "$requirements" \
            --custom-diagrams "$custom_diagrams" \
            --output-dir "Stage1_Mermaid_Generation/diagrams"
    else
        python3 scripts/enhanced-iterative-mermaid-generator.py \
            --requirements "$requirements" \
            --output-dir "Stage1_Mermaid_Generation/diagrams"
    fi
}

# Function to create custom diagram modifications file
create_custom_diagrams_file() {
    local custom_file="Stage1_Mermaid_Generation/diagrams/custom_diagrams.json"
    
    cat > "$custom_file" << 'EOF'
{
  "user_journey.mmd": "graph TD\n    A[Custom Start] --> B[Custom Step 1]\n    B --> C[Custom Step 2]\n    C --> D[Custom End]",
  "system_architecture.mmd": "graph TD\n    A[Custom Frontend] --> B[Custom API]\n    B --> C[Custom Database]",
  "business_process.mmd": "graph TD\n    A[Custom Event] --> B[Custom Process]\n    B --> C[Custom End]",
  "data_flow.mmd": "graph TD\n    A[Custom Input] --> B[Custom Processing]\n    B --> C[Custom Output]",
  "decision_tree.mmd": "graph TD\n    A[Custom Decision] --> B{Custom Condition?}\n    B -->|Yes| C[Custom Action]\n    B -->|No| D[Custom Alternative]",
  "gantt_chart.mmd": "gantt\n    title Custom Timeline\n    dateFormat  YYYY-MM-DD\n    section Custom Phase\n    Custom Task    :2024-01-01, 7d"
}
EOF
    
    print_success "Created custom diagrams template: $custom_file"
    print_warning "Edit this file to customize specific diagrams, then re-run the script"
}

# Function to show current files
show_current_files() {
    print_status "Current generated files:"
    echo ""
    echo "📁 MMD Files:"
    ls -la Stage1_Mermaid_Generation/diagrams/*.mmd 2>/dev/null || echo "   No MMD files found"
    
    echo ""
    echo "🖼️  PNG Files:"
    ls -la Stage1_Mermaid_Generation/diagrams/images/*.png 2>/dev/null || echo "   No PNG files found"
    
    echo ""
    echo "📋 Other Files:"
    ls -la Stage1_Mermaid_Generation/diagrams/*.json Stage1_Mermaid_Generation/diagrams/*.txt 2>/dev/null || echo "   No other files found"
}

# Function to show diagram content
show_diagram_content() {
    local diagram_file="$1"
    if [ -f "$diagram_file" ]; then
        echo ""
        echo "📊 Content of $(basename "$diagram_file"):"
        echo "----------------------------------------"
        cat "$diagram_file"
        echo ""
    fi
}

# Main workflow
print_status "Starting iterative refinement workflow..."

# Check if diagrams already exist
if [ -d "Stage1_Mermaid_Generation/diagrams" ] && [ "$(ls -A Stage1_Mermaid_Generation/diagrams/*.mmd 2>/dev/null)" ]; then
    print_warning "Existing diagrams found!"
    show_current_files
    
    echo ""
    echo "What would you like to do?"
    echo "1. Backup existing files and generate new ones"
    echo "2. Show content of existing diagrams"
    echo "3. Create custom diagram modifications"
    echo "4. Exit"
    echo ""
    read -p "Enter your choice (1-4): " choice
    
    case $choice in
        1)
            backup_existing_files
            echo ""
            echo "Please provide your updated requirements:"
            echo "(You can paste multiple lines, press Ctrl+D when done)"
            echo ""
            requirements=$(cat)
            generate_with_requirements "$requirements"
            ;;
        2)
            echo ""
            echo "Which diagram would you like to see?"
            echo "1. user_journey.mmd"
            echo "2. system_architecture.mmd"
            echo "3. business_process.mmd"
            echo "4. data_flow.mmd"
            echo "5. decision_tree.mmd"
            echo "6. gantt_chart.mmd"
            echo "7. All diagrams"
            echo ""
            read -p "Enter your choice (1-7): " diagram_choice
            
            case $diagram_choice in
                1) show_diagram_content "Stage1_Mermaid_Generation/diagrams/user_journey.mmd" ;;
                2) show_diagram_content "Stage1_Mermaid_Generation/diagrams/system_architecture.mmd" ;;
                3) show_diagram_content "Stage1_Mermaid_Generation/diagrams/business_process.mmd" ;;
                4) show_diagram_content "Stage1_Mermaid_Generation/diagrams/data_flow.mmd" ;;
                5) show_diagram_content "Stage1_Mermaid_Generation/diagrams/decision_tree.mmd" ;;
                6) show_diagram_content "Stage1_Mermaid_Generation/diagrams/gantt_chart.mmd" ;;
                7)
                    for file in Stage1_Mermaid_Generation/diagrams/*.mmd; do
                        show_diagram_content "$file"
                    done
                    ;;
                *) print_error "Invalid choice" ;;
            esac
            ;;
        3)
            create_custom_diagrams_file
            ;;
        4)
            print_status "Exiting..."
            exit 0
            ;;
        *)
            print_error "Invalid choice"
            exit 1
            ;;
    esac
else
    print_status "No existing diagrams found. Generating initial diagrams..."
    echo ""
    echo "Please provide your requirements:"
    echo "(You can paste multiple lines, press Ctrl+D when done)"
    echo ""
    requirements=$(cat)
    generate_with_requirements "$requirements"
fi

# Show final results
echo ""
print_success "Workflow completed!"
show_current_files

echo ""
echo "🔄 ITERATIVE REFINEMENT OPTIONS:"
echo "================================"
echo ""
echo "To refine diagrams:"
echo "1. Run this script again: ./scripts/iterative-mermaid-refinement.sh"
echo "2. Edit custom diagrams: Stage1_Mermaid_Generation/diagrams/custom_diagrams.json"
echo "3. Update requirements: Edit Stage1_Mermaid_Generation/diagrams/current_requirements.txt"
echo ""
echo "The system will:"
echo "✅ Backup existing files before making changes"
echo "✅ Generate new MMD files based on updated requirements"
echo "✅ Generate new PNG images from updated MMD files"
echo "✅ Replace old files with new versions"
echo "✅ Maintain complete history in backup folders"
echo ""
echo "🔗 Ready for Stage 2 or further refinements!"

exit 0
