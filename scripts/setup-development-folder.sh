#!/bin/bash

# 🎯 DEVELOPMENT FOLDER SETUP SCRIPT
# This script creates the development folder structure alongside EFTDM framework

set -e

echo "🚀 Setting up Development Folder Structure..."

# Get project name from user or use default
if [ -z "$1" ]; then
    echo "📝 Enter project name (or press Enter for 'my_project'):"
    read -r PROJECT_NAME
    PROJECT_NAME=${PROJECT_NAME:-my_project}
else
    PROJECT_NAME="$1"
fi

# Create development folder name
DEV_FOLDER="${PROJECT_NAME}_development"

echo "📁 Creating development folder: $DEV_FOLDER"

# Create main development folder
mkdir -p "$DEV_FOLDER"

# Create backend structure
echo "🔧 Creating backend structure..."
mkdir -p "$DEV_FOLDER/backend/src/Controllers"
mkdir -p "$DEV_FOLDER/backend/src/Services"
mkdir -p "$DEV_FOLDER/backend/src/Models"
mkdir -p "$DEV_FOLDER/backend/src/Middleware"
mkdir -p "$DEV_FOLDER/backend/src/Routes"
mkdir -p "$DEV_FOLDER/backend/src/Config"
mkdir -p "$DEV_FOLDER/backend/src/Utils"
mkdir -p "$DEV_FOLDER/backend/tests/Unit"
mkdir -p "$DEV_FOLDER/backend/tests/Integration"
mkdir -p "$DEV_FOLDER/backend/tests/TestUtilities"
mkdir -p "$DEV_FOLDER/backend/docs"
mkdir -p "$DEV_FOLDER/backend/scripts"

# Create frontend structure
echo "🎨 Creating frontend structure..."
mkdir -p "$DEV_FOLDER/frontend/src/components/common"
mkdir -p "$DEV_FOLDER/frontend/src/components/forms"
mkdir -p "$DEV_FOLDER/frontend/src/components/layout"
mkdir -p "$DEV_FOLDER/frontend/src/views"
mkdir -p "$DEV_FOLDER/frontend/src/stores/modules"
mkdir -p "$DEV_FOLDER/frontend/src/services"
mkdir -p "$DEV_FOLDER/frontend/src/router"
mkdir -p "$DEV_FOLDER/frontend/src/assets/figma_assets/screens"
mkdir -p "$DEV_FOLDER/frontend/src/assets/figma_assets/icons_centralized"
mkdir -p "$DEV_FOLDER/frontend/src/assets/images"
mkdir -p "$DEV_FOLDER/frontend/src/assets/fonts"
mkdir -p "$DEV_FOLDER/frontend/src/assets/icons"
mkdir -p "$DEV_FOLDER/frontend/src/styles"
mkdir -p "$DEV_FOLDER/frontend/src/utils"
mkdir -p "$DEV_FOLDER/frontend/src/composables"
mkdir -p "$DEV_FOLDER/frontend/tests/unit/components"
mkdir -p "$DEV_FOLDER/frontend/tests/unit/services"
mkdir -p "$DEV_FOLDER/frontend/tests/unit/utils"
mkdir -p "$DEV_FOLDER/frontend/tests/integration"
mkdir -p "$DEV_FOLDER/frontend/tests/e2e"
mkdir -p "$DEV_FOLDER/frontend/public"
mkdir -p "$DEV_FOLDER/frontend/docs"

# Create project-level folders
echo "📚 Creating project-level folders..."
mkdir -p "$DEV_FOLDER/docs"
mkdir -p "$DEV_FOLDER/tests"
mkdir -p "$DEV_FOLDER/scripts"

# Create README files
echo "📝 Creating README files..."

# Main project README
cat > "$DEV_FOLDER/README.md" << EOF
# 🎯 $PROJECT_NAME Development

## Project Overview
This is the development folder for the $PROJECT_NAME project, created using the EFTDM Framework.

## Folder Structure
\`\`\`
$DEV_FOLDER/
├── 📁 backend/                   # .NET Core 8.0 Backend
├── 📁 frontend/                  # Vue.js 3 Frontend
├── 📁 docs/                      # Project Documentation
├── 📁 tests/                     # Test Files
├── 📁 scripts/                   # Build & Deploy Scripts
└── 📄 README.md                  # This file
\`\`\`

## Getting Started

### Backend Setup
\`\`\`bash
cd backend
dotnet restore
dotnet build
dotnet run
\`\`\`

### Frontend Setup
\`\`\`bash
cd frontend
npm install
npm run serve
\`\`\`

## Development Process
This project follows the EFTDM Framework methodology with 13-phase enterprise development.

## Technology Stack
- **Backend**: .NET Core 8.0, ASP.NET Core Web API, C# 12
- **Frontend**: Vue.js 3, Vuex 4, Vue Router 4, Axios 1.6
- **Database**: MongoDB
- **Authentication**: JWT with Azure AD
- **Deployment**: Docker, Kubernetes, Azure App Services

## Asset Management
Figma assets are stored in \`frontend/src/assets/figma_assets/\` and migrated from Stage 4 of the EFTDM Framework.

## Testing
- Unit tests: \`npm run test\` (Frontend) / \`dotnet test\` (Backend)
- Integration tests: \`npm run test:integration\`
- E2E tests: \`npm run test:e2e\`

## Deployment
Use the scripts in the \`scripts/\` folder for build and deployment processes.
EOF

# Backend README
cat > "$DEV_FOLDER/backend/README.md" << EOF
# 🔧 $PROJECT_NAME Backend

## .NET Core 8.0 Backend API

### Project Structure
\`\`\`
backend/
├── src/
│   ├── Controllers/           # API Controllers
│   ├── Services/             # Business Logic Services
│   ├── Models/               # Data Models & Entities
│   ├── Middleware/           # Custom Middleware
│   ├── Routes/               # API Route Definitions
│   ├── Config/              # Configuration Files
│   ├── Utils/               # Utility Functions
│   └── Program.cs           # Application Entry Point
├── tests/                   # Test Projects
├── docs/                    # API Documentation
└── scripts/                 # Build & Deployment Scripts
\`\`\`

### Getting Started
\`\`\`bash
# Restore dependencies
dotnet restore

# Build project
dotnet build

# Run project
dotnet run

# Run tests
dotnet test
\`\`\`

### API Documentation
API documentation is available in the \`docs/\` folder.

### Configuration
- \`appsettings.json\` - Main configuration
- \`appsettings.Development.json\` - Development settings
- \`appsettings.Production.json\` - Production settings
EOF

# Frontend README
cat > "$DEV_FOLDER/frontend/README.md" << EOF
# 🎨 $PROJECT_NAME Frontend

## Vue.js 3 Frontend Application

### Project Structure
\`\`\`
frontend/
├── src/
│   ├── components/          # Reusable UI Components
│   ├── views/               # Page Components
│   ├── stores/              # State Management (Vuex)
│   ├── services/            # API Services
│   ├── router/              # Routing Configuration
│   ├── assets/              # Static Assets
│   │   └── figma_assets/    # Figma Assets (from Stage 4)
│   ├── styles/              # Global Styles
│   ├── utils/               # Utility Functions
│   └── composables/         # Vue 3 Composables
├── tests/                   # Test Files
├── public/                  # Public Assets
└── docs/                    # Component Documentation
\`\`\`

### Getting Started
\`\`\`bash
# Install dependencies
npm install

# Serve with hot reload
npm run serve

# Build for production
npm run build

# Run unit tests
npm run test:unit

# Run e2e tests
npm run test:e2e
\`\`\`

### Asset Usage
Figma assets are available in \`src/assets/figma_assets/\`:
- Icons: \`src/assets/figma_assets/icons_centralized/\`
- Screen assets: \`src/assets/figma_assets/screens/\`
- CSS variables: \`src/assets/figma_assets/css_variables.css\`

### Component Development
- Use centralized icons for consistency
- Import CSS variables for design system
- Follow Vue.js 3 Composition API patterns
- Implement proper error handling

### State Management
State is managed using Vuex 4 with modular structure in \`src/stores/modules/\`.
EOF

# Create .gitignore files
echo "📄 Creating .gitignore files..."

# Main project .gitignore
cat > "$DEV_FOLDER/.gitignore" << EOF
# Dependencies
node_modules/
packages/*/node_modules/

# Build outputs
dist/
build/
out/

# Environment files
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# IDE files
.vscode/
.idea/
*.swp
*.swo

# OS files
.DS_Store
Thumbs.db

# Logs
logs/
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Runtime data
pids/
*.pid
*.seed
*.pid.lock

# Coverage directory used by tools like istanbul
coverage/

# nyc test coverage
.nyc_output/

# Dependency directories
jspm_packages/

# Optional npm cache directory
.npm

# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz

# Yarn Integrity file
.yarn-integrity

# dotenv environment variables file
.env

# parcel-bundler cache (https://parceljs.org/)
.cache
.parcel-cache

# next.js build output
.next

# nuxt.js build output
.nuxt

# vuepress build output
.vuepress/dist

# Serverless directories
.serverless

# FuseBox cache
.fusebox/

# DynamoDB Local files
.dynamodb/

# TernJS port file
.tern-port

# .NET
bin/
obj/
*.user
*.suo
*.cache
*.dll
*.pdb
*.exe
*.log
*.tmp
*.temp
EOF

# Backend .gitignore
cat > "$DEV_FOLDER/backend/.gitignore" << EOF
# .NET Core
bin/
obj/
*.user
*.suo
*.cache
*.dll
*.pdb
*.exe
*.log
*.tmp
*.temp

# Visual Studio
.vs/
*.user
*.suo
*.cache

# JetBrains Rider
.idea/

# Environment files
appsettings.Development.json
appsettings.Production.json
appsettings.Staging.json

# Database
*.db
*.sqlite
*.sqlite3

# Logs
logs/
*.log
EOF

# Frontend .gitignore
cat > "$DEV_FOLDER/frontend/.gitignore" << EOF
# Dependencies
node_modules/

# Build outputs
dist/
build/

# Environment files
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# IDE files
.vscode/
.idea/

# OS files
.DS_Store
Thumbs.db

# Logs
logs/
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Coverage
coverage/

# Cache
.cache
.parcel-cache

# Temporary files
*.tmp
*.temp
EOF

# Create package.json for frontend
echo "📦 Creating package.json for frontend..."
cat > "$DEV_FOLDER/frontend/package.json" << EOF
{
  "name": "$PROJECT_NAME-frontend",
  "version": "1.0.0",
  "description": "Frontend application for $PROJECT_NAME",
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "test:unit": "vue-cli-service test:unit",
    "test:e2e": "vue-cli-service test:e2e",
    "lint": "vue-cli-service lint",
    "assets:copy": "cp -r ../EFTDM_Framework/Stage4_RTSD_Creation/figma_assets/* src/assets/figma_assets/",
    "assets:clean": "rm -rf src/assets/figma_assets/*",
    "assets:update": "npm run assets:clean && npm run assets:copy"
  },
  "dependencies": {
    "vue": "^3.3.0",
    "vuex": "^4.1.0",
    "vue-router": "^4.2.0",
    "axios": "^1.6.0"
  },
  "devDependencies": {
    "@vue/cli-service": "^5.0.0",
    "@vue/test-utils": "^2.4.0",
    "jest": "^29.0.0",
    "cypress": "^13.0.0"
  }
}
EOF

# Create project file for backend
echo "📄 Creating .csproj file for backend..."
cat > "$DEV_FOLDER/backend/$PROJECT_NAME.csproj" << EOF
<Project Sdk="Microsoft.NET.Sdk.Web">

  <PropertyGroup>
    <TargetFramework>net8.0</TargetFramework>
    <Nullable>enable</Nullable>
    <ImplicitUsings>enable</ImplicitUsings>
  </PropertyGroup>

  <ItemGroup>
    <PackageReference Include="Microsoft.AspNetCore.OpenApi" Version="8.0.0" />
    <PackageReference Include="Swashbuckle.AspNetCore" Version="6.5.0" />
    <PackageReference Include="Microsoft.AspNetCore.Authentication.JwtBearer" Version="8.0.0" />
    <PackageReference Include="MongoDB.Driver" Version="2.19.0" />
    <PackageReference Include="Microsoft.Extensions.Configuration" Version="8.0.0" />
  </ItemGroup>

</Project>
EOF

echo "✅ Development folder structure created successfully!"
echo ""
echo "📋 Summary:"
echo "✅ Created: $DEV_FOLDER/"
echo "✅ Backend structure: $DEV_FOLDER/backend/"
echo "✅ Frontend structure: $DEV_FOLDER/frontend/"
echo "✅ Documentation: $DEV_FOLDER/docs/"
echo "✅ Tests: $DEV_FOLDER/tests/"
echo "✅ Scripts: $DEV_FOLDER/scripts/"
echo ""
echo "🎯 Next steps:"
echo "1. Copy EFTDM_Framework to the same directory as $DEV_FOLDER"
echo "2. Run Stage 5 implementation to populate the development folder"
echo "3. Use the asset migration script to move Figma assets"
echo "4. Start development with the complete project structure"
echo ""
echo "📁 Your project structure should look like:"
echo "[PROJECT_NAME]/"
echo "├── EFTDM_Framework/     # Framework (don't touch)"
echo "└── $DEV_FOLDER/         # Development folder"
