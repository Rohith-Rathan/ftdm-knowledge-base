#!/bin/bash
# enhanced-eftdm-framework-update.sh
# Comprehensive EFTDM Framework Update with All Fixes

echo "🚀 Enhanced EFTDM Framework Update"
echo "=================================="

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to create directory if it doesn't exist
ensure_directory() {
    if [ ! -d "$1" ]; then
        mkdir -p "$1"
        echo "✅ Created directory: $1"
    else
        echo "📁 Directory exists: $1"
    fi
}

# Function to make script executable
make_executable() {
    if [ -f "$1" ]; then
        chmod +x "$1"
        echo "✅ Made executable: $1"
    else
        echo "❌ File not found: $1"
    fi
}

echo "🔧 Setting up Enhanced EFTDM Framework..."

# 1. Create necessary directories
echo "📁 Creating directory structure..."
ensure_directory "Stage1_Mermaid_Generation/diagrams"
ensure_directory "figma_analysis"
ensure_directory "figma_assets"
ensure_directory "pixel_perfect_measurements"
ensure_directory "scripts"

# 2. Make all scripts executable
echo "⚙️ Making scripts executable..."
make_executable "scripts/enhanced-mermaid-generator.py"
make_executable "scripts/analyze-figma-designs.sh"
make_executable "scripts/download-figma-assets.sh"
make_executable "scripts/extract-pixel-perfect-measurements.sh"
make_executable "scripts/manage-figma-icons.sh"
make_executable "scripts/detect-design-system.sh"
make_executable "scripts/automated-workflow.sh"

# 3. Install required dependencies
echo "📦 Installing required dependencies..."

# Check if Node.js is installed
if ! command_exists node; then
    echo "❌ Node.js not found. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command_exists npm; then
    echo "❌ npm not found. Please install npm first."
    exit 1
fi

# Install Figma MCP CLI
echo "🔧 Installing Figma MCP CLI..."
if ! command_exists figma-mcp; then
    npm install -g @figma/mcp-cli
    echo "✅ Figma MCP CLI installed"
else
    echo "✅ Figma MCP CLI already installed"
fi

# Install Python dependencies
echo "🐍 Installing Python dependencies..."
if command_exists python3; then
    python3 -m pip install --upgrade pip
    echo "✅ Python pip updated"
else
    echo "❌ Python3 not found. Please install Python3 first."
    exit 1
fi

# 4. Create configuration files
echo "⚙️ Creating configuration files..."

# Create Figma MCP configuration
cat > figma_mcp_config.json << EOF
{
  "figma": {
    "access_token": "YOUR_FIGMA_ACCESS_TOKEN",
    "file_id": "YOUR_FIGMA_FILE_ID",
    "team_id": "YOUR_FIGMA_TEAM_ID"
  },
  "mcp": {
    "precision": "1px",
    "color_precision": "hex",
    "output_format": "json",
    "include_assets": true,
    "include_measurements": true,
    "include_design_tokens": true
  },
  "organization": {
    "tech_stack": {
      "backend": ".NET Core 8.0 (ASP.NET Core Web API, C# 12)",
      "frontend": "Vue.js 3, Vuex 4, Vue Router 4, Axios 1.6, Webpack 5, Sass/SCSS",
      "database": "MongoDB",
      "auth": "JWT with Azure AD",
      "deployment": "Docker, Kubernetes, Azure App Services, Visual Studio"
    }
  }
}
EOF
echo "✅ Created figma_mcp_config.json"

# Create enhanced workflow configuration
cat > enhanced_workflow_config.json << EOF
{
  "workflow": {
    "stages": [
      {
        "name": "Stage 1 - Mermaid Generation",
        "enabled": true,
        "output_dir": "Stage1_Mermaid_Generation/diagrams",
        "required_files": ["user_journey.mmd", "system_architecture.mmd", "business_process.mmd", "data_flow.mmd", "decision_tree.mmd", "gantt_chart.mmd"]
      },
      {
        "name": "Stage 2 - FSD Creation",
        "enabled": true,
        "depends_on": ["Stage 1"]
      },
      {
        "name": "Stage 3 - TSD Creation",
        "enabled": true,
        "depends_on": ["Stage 2"],
        "tech_stack_enforced": true
      },
      {
        "name": "Stage 4 - RTSD Creation",
        "enabled": true,
        "depends_on": ["Stage 3"],
        "design_system_integration": true,
        "asset_mapping": true,
        "pixel_perfect": true
      },
      {
        "name": "Stage 5 - Implementation",
        "enabled": true,
        "depends_on": ["Stage 4"],
        "tech_stack_enforced": true,
        "pixel_perfect_ui": true
      }
    ],
    "quality_gates": {
      "mermaid_diagrams_saved": true,
      "figma_assets_downloaded": true,
      "design_system_integrated": true,
      "pixel_perfect_measurements": true,
      "tech_stack_compliance": true
    }
  }
}
EOF
echo "✅ Created enhanced_workflow_config.json"

# 5. Create enhanced validation script
cat > scripts/validate-framework.sh << 'EOF'
#!/bin/bash
# validate-framework.sh
# Validate Enhanced EFTDM Framework

echo "🔍 Validating Enhanced EFTDM Framework..."

# Check if all required directories exist
required_dirs=(
    "Stage1_Mermaid_Generation/diagrams"
    "figma_analysis"
    "figma_assets"
    "pixel_perfect_measurements"
    "scripts"
)

for dir in "${required_dirs[@]}"; do
    if [ -d "$dir" ]; then
        echo "✅ Directory exists: $dir"
    else
        echo "❌ Missing directory: $dir"
        exit 1
    fi
done

# Check if all required scripts exist and are executable
required_scripts=(
    "scripts/enhanced-mermaid-generator.py"
    "scripts/analyze-figma-designs.sh"
    "scripts/download-figma-assets.sh"
    "scripts/extract-pixel-perfect-measurements.sh"
    "scripts/manage-figma-icons.sh"
    "scripts/detect-design-system.sh"
)

for script in "${required_scripts[@]}"; do
    if [ -f "$script" ] && [ -x "$script" ]; then
        echo "✅ Script exists and is executable: $script"
    else
        echo "❌ Missing or not executable: $script"
        exit 1
    fi
done

# Check if Figma MCP is installed
if command -v figma-mcp &> /dev/null; then
    echo "✅ Figma MCP CLI is installed"
else
    echo "❌ Figma MCP CLI is not installed"
    exit 1
fi

# Check if Python3 is available
if command -v python3 &> /dev/null; then
    echo "✅ Python3 is available"
else
    echo "❌ Python3 is not available"
    exit 1
fi

echo "🎉 Enhanced EFTDM Framework validation successful!"
EOF

make_executable "scripts/validate-framework.sh"

# 6. Create comprehensive documentation
cat > ENHANCED_FRAMEWORK_UPDATES.md << 'EOF'
# 🚀 Enhanced EFTDM Framework Updates

## Issues Fixed

### 1. ✅ Gantt Diagram Generation Fixed
- **Issue**: Gantt diagrams not generating properly
- **Solution**: Enhanced Mermaid generation script with proper Gantt chart template
- **Files Updated**: 
  - `scripts/enhanced-mermaid-generator.py`
  - `Stage1_Mermaid_Generation/mermaid_generation_prompt.md`

### 2. ✅ Mermaid Diagrams Saving Fixed
- **Issue**: Mermaid diagrams not saving after Stage 1 completion
- **Solution**: Added mandatory file persistence with verification
- **Files Updated**:
  - `scripts/enhanced-mermaid-generator.py`
  - `Stage1_Mermaid_Generation/mermaid_generation_prompt.md`

### 3. ✅ Figma MCP Integration Fixed
- **Issue**: Figma links searching web instead of using MCP
- **Solution**: Updated scripts to use MCP connection exclusively
- **Files Updated**:
  - `scripts/analyze-figma-designs.sh`
  - `frameworks/figma_mcp_integration_framework.md`

### 4. ✅ Mandatory Asset Download Added
- **Issue**: Assets not downloading from Figma
- **Solution**: Created comprehensive asset download script
- **Files Created**:
  - `scripts/download-figma-assets.sh`

### 5. ✅ Design System Integration Added
- **Issue**: Design system JSON files not integrated with RTSD
- **Solution**: Updated RTSD creation prompt with mandatory design system integration
- **Files Updated**:
  - `Stage4_RTSD_Creation/rtsd_creation_prompt.md`

### 6. ✅ Technology Stack Updated
- **Issue**: Tech stack not matching organization standards
- **Solution**: Updated all framework components with organization tech stack
- **Files Updated**:
  - `Stage3_TSD_Creation/tsd_creation_prompt.md`
  - `Stage5_Implementation/implementation_prompt.md`

### 8. ✅ Icon Management & Reuse Optimization Added
- **Issue**: Icons not optimized for reuse, unnecessary Vue wrappers created
- **Solution**: Created comprehensive icon management script with reuse optimization
- **Files Created**:
  - `scripts/manage-figma-icons.sh`

### 9. ✅ Optional Design System Integration Added
- **Issue**: Design system integration assumed files always exist
- **Solution**: Made design system integration conditional and flexible
- **Files Created**:
  - `scripts/detect-design-system.sh`

### 10. ✅ Stage 6 Temporary Backend Added
- **Issue**: No immediate testing solution after frontend implementation
- **Solution**: Created optional Stage 6 for mock backend generation
- **Files Created**:
  - `Stage6_Temporary_Backend/temporary_backend_prompt.md`
  - `Stage6_Temporary_Backend/user_guide.md`
  - `Stage6_Temporary_Backend/README.md`

## New Features Added

### 🎯 Enhanced Mermaid Generation
- Automatic diagram saving with verification
- Improved Gantt chart generation
- Better error handling and reporting

### 🎨 Comprehensive Figma Integration
- MCP-only connection (no web search)
- Mandatory asset download
- Pixel-perfect measurement extraction
- Design system integration

### 🎯 Enhanced Icon Management
- Automatic icon deduplication and reuse optimization
- Icon name cleanup (removes "--Streamline-Tabler" text)
- Centralized icon management with symlinks for reuse
- Direct asset usage without Vue wrapper components

### 🔍 Flexible Design System Integration
- Optional design system file detection
- Conditional integration based on availability
- Fallback to UXD analysis when design system files don't exist
- Comprehensive design system status reporting

### 🚀 Stage 6 Temporary Backend
- Mock backend generation for immediate testing
- Express.js server with realistic data simulation
- Easy frontend integration and testing
- Simple replacement path for real backend

### 🏗️ Organization Tech Stack Compliance
- .NET Core 8.0 backend
- Vue.js 3 frontend ecosystem
- MongoDB database
- JWT with Azure AD authentication
- Docker + Kubernetes + Azure deployment

## Usage Instructions

### 1. Run Framework Update
```bash
./scripts/enhanced-eftdm-framework-update.sh
```

### 2. Validate Framework
```bash
./scripts/validate-framework.sh
```

### 3. Configure Figma MCP
Edit `figma_mcp_config.json` with your Figma credentials

### 4. Run Enhanced Workflow
```bash
./scripts/automated-workflow.sh
```

## Quality Gates

- ✅ Mermaid diagrams saved properly
- ✅ Figma assets downloaded via MCP
- ✅ Design system integrated
- ✅ Pixel-perfect measurements extracted
- ✅ Technology stack compliance enforced
- ✅ Icon management and reuse optimization
- ✅ Flexible design system integration
- ✅ Stage 6 temporary backend for testing

## Next Steps

1. Test the enhanced framework with a sample project
2. Verify all fixes work as expected
3. Update team documentation
4. Train team on new features
EOF

echo "✅ Created ENHANCED_FRAMEWORK_UPDATES.md"

# 7. Final validation
echo "🔍 Running final validation..."
if [ -f "scripts/validate-framework.sh" ]; then
    ./scripts/validate-framework.sh
    if [ $? -eq 0 ]; then
        echo "🎉 Enhanced EFTDM Framework update completed successfully!"
        echo ""
        echo "📋 Summary of Updates:"
        echo "✅ Gantt diagram generation fixed"
        echo "✅ Mermaid diagrams saving fixed"
        echo "✅ Figma MCP integration fixed"
        echo "✅ Mandatory asset download added"
        echo "✅ Design system integration added"
        echo "✅ Technology stack updated"
        echo "✅ Stage 6 temporary backend added"
        echo ""
        echo "📁 Configuration files created:"
        echo "  - figma_mcp_config.json"
        echo "  - enhanced_workflow_config.json"
        echo ""
        echo "📚 Documentation created:"
        echo "  - ENHANCED_FRAMEWORK_UPDATES.md"
        echo ""
        echo "🚀 Ready to use Enhanced EFTDM Framework!"
    else
        echo "❌ Framework validation failed. Please check the errors above."
        exit 1
    fi
else
    echo "❌ Validation script not found. Please check the setup."
    exit 1
fi
