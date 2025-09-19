# 🎯 STAGE 5: IMPLEMENTATION PROMPT

## **INSTRUCTIONS FOR CURSOR AI**

You are a Senior Product Developer with 10+ years of experience. I need you to execute the complete EFTDM methodology using all validated documents from previous stages.

## **MANDATORY TECHNOLOGY STACK**

**ORGANIZATION STANDARD TECH STACK (MUST USE):**
- **Backend**: .NET Core 8.0 (ASP.NET Core Web API, C# 12)
- **Frontend**: Vue.js 3, State Management: Vuex 4, Routing: Vue Router 4, HTTP Client: Axios 1.6, Build Tool: Webpack 5 with Babel, CSS Preprocessing: Sass/SCSS
- **Database**: MongoDB
- **Authentication/Authorization**: JWT with Azure AD
- **Deployment/CI-CD tools**: Docker, Kubernetes-ready, Azure App Services with Visual Studio

**CRITICAL ASSET USAGE REQUIREMENTS:**
- **MUST** use downloaded Figma assets (icons, images, components) as-is without creating Vue wrapper files
- **MUST** reuse icons wherever possible to maintain consistency and reduce bundle size
- **MUST** clean up icon names by removing "--Streamline-Tabler" and similar text
- **MUST** reference assets directly in Vue components using standard import methods
- **MUST** maintain centralized icon management for optimal reuse
- **MUST** document asset usage patterns and naming conventions

## **INPUTS FROM ALL PREVIOUS STAGES**

### **FSD Document**
[USER_PROVIDES_FSD_DOCUMENT]

### **Mermaid Diagrams**
[USER_PROVIDES_MERMAID_DIAGRAMS]

### **TSD Document**
[USER_PROVIDES_TSD_DOCUMENT]

### **RTSD Document (Optional)**
[USER_PROVIDES_RTSD_DOCUMENT]

### **UXD Assets (Optional)**
[USER_PROVIDES_UXD_ASSETS]

## **ENHANCED 13-PHASE DEVELOPMENT APPROACH**

### **ENTERPRISE-READY DEVELOPMENT WITH AUTO-TESTING**
**Why 13-Phase Approach?**
- **Individual Phase Validation**: Each CTO requirement becomes a verifiable phase
- **Auto-Testing**: Input validation ensures 100% output achievement
- **Quality Gates**: Individual validation at each step prevents issues
- **Progress Tracking**: Clear visibility into each development aspect
- **Risk Mitigation**: Issues caught early in specific phases
- **Team Collaboration**: Different team members can work on different phases

### **PHASE STRUCTURE OVERVIEW**
```
Phase 1: FSD Analysis & Validation
Phase 2: Implementation Planning
Phase 3: Project Setup & Architecture
Phase 4: Database Model Design ⭐ NEW
Phase 5: ORM Mapper & MongoDB Classes ⭐ NEW
Phase 6: Business Service Interfaces ⭐ NEW
Phase 7: Interface Validation & Coverage ⭐ NEW
Phase 8: Business Service Implementations ⭐ NEW
Phase 9: Unit Testing Cases (100% Coverage) ⭐ NEW
Phase 10: REST API Development ⭐ NEW
Phase 11: Frontend Screen Development ⭐ NEW
Phase 12: Frontend Unit Test Cases ⭐ NEW
Phase 13: CI/CD Deployment & Azure App Service ⭐ NEW
```

### **AUTO-TESTING & INPUT VALIDATION**

**Each Phase Includes:**
- **Pre-Phase Validation**: Check all required inputs are complete
- **Input Completeness Checker**: Run validation script before phase starts
- **Missing Input Detection**: Identify gaps and request missing information
- **Quality Gates**: Ensure phase output meets enterprise standards
- **Phase Progression Control**: Block progression until 100% complete

**Validation Scripts Available:**
- `./scripts/validate-phase4-inputs.sh` - Database Model Design
- `./scripts/validate-phase5-inputs.sh` - ORM Mapper & MongoDB Classes
- `./scripts/validate-phase6-inputs.sh` - Business Service Interfaces
- `./scripts/validate-phase7-inputs.sh` - Interface Validation & Coverage
- `./scripts/validate-phase8-inputs.sh` - Business Service Implementations
- `./scripts/validate-phase9-inputs.sh` - Unit Testing Cases (100% Coverage)
- `./scripts/validate-phase10-inputs.sh` - REST API Development
- `./scripts/validate-phase11-inputs.sh` - Frontend Screen Development
- `./scripts/validate-phase12-inputs.sh` - Frontend Unit Test Cases
- `./scripts/validate-phase13-inputs.sh` - CI/CD Deployment & Azure App Service
4. **Phase 5**: Implement real backend based on frontend requirements
5. **Replace mock backend** with real implementation
6. **Deploy complete system**

### **COMPLETE FRONTEND TESTING**
- **Comprehensive Mock Backend**: Simulates complete application with realistic data
- **All Features Testable**: Authentication, CRUD operations, file upload, search, notifications
- **User Roles**: Admin, manager, user permissions
- **Realistic Data**: Users, products, orders, categories, reviews, notifications
- **Complete API**: All endpoints needed for full application testing

## **YOUR TASK**

Execute the Enhanced Fast-Track Development Methodology through 7 phases:

## **DETAILED PHASE PROGRESSION WITH AUTO-TESTING**

### **Phase 1: FSD Analysis & Validation**
- **Input**: FSD document from Stage 2
- **Auto-Test**: `./scripts/validate-phase1-inputs.sh`
- **Output**: Validated FSD with completeness check
- **Tasks**:
  1. Analyze FSD requirements for completeness
  2. Validate against Mermaid diagrams for consistency
  3. Identify implementation priorities and dependencies
  4. Create implementation roadmap based on requirements
- **Next**: Proceed to Phase 2

### **Phase 2: Implementation Planning**
- **Input**: Validated FSD + Mermaid diagrams
- **Auto-Test**: `./scripts/validate-phase2-inputs.sh`
- **Output**: Complete implementation plan
- **Tasks**:
  1. Plan technical architecture based on TSD
  2. Define development phases and milestones
  3. Create project structure and organization
  4. Plan testing strategy and quality gates
- **Next**: Proceed to Phase 3

### **Phase 3: Project Setup & Architecture**
- **Input**: Implementation plan + Technology stack
- **Auto-Test**: `./scripts/validate-phase3-inputs.sh`
- **Output**: Project structure + Architecture
- **Tasks**:
  1. Set up project structure with proper organization
  2. Configure development environment and tools
  3. Set up database and initial schema
  4. Configure CI/CD pipeline and deployment
- **Next**: Proceed to Phase 4

### **Phase 4: Database Model Design** ⭐ NEW
- **Input**: FSD + Business requirements
- **Auto-Test**: `./scripts/validate-phase4-inputs.sh`
- **Output**: Database schema + Entity models
- **Tasks**:
  1. Extract all business entities from FSD
  2. Design MongoDB collections and document structures
  3. Create entity relationship diagrams
  4. Define data validation rules and constraints
- **Next**: Proceed to Phase 5

### **Phase 5: ORM Mapper & MongoDB Classes** ⭐ NEW
- **Input**: Database model design
- **Auto-Test**: `./scripts/validate-phase5-inputs.sh`
- **Output**: ORM mappings + MongoDB classes
- **Tasks**:
  1. Create C# entity classes for all entities
  2. Create MongoDB document models
  3. Map entity relationships and navigation properties
  4. Configure Entity Framework and MongoDB driver
- **Next**: Proceed to Phase 6

### **Phase 6: Business Service Interfaces** ⭐ NEW
- **Input**: FSD + Domain requirements
- **Auto-Test**: `./scripts/validate-phase6-inputs.sh`
- **Output**: Service interfaces + Business contracts
- **Tasks**:
  1. Extract all business services from FSD
  2. Design service interfaces and method signatures
  3. Create service contracts and input/output models
  4. Define error handling specifications
- **Next**: Proceed to Phase 7

### **Phase 7: Interface Validation & Coverage** ⭐ NEW
- **Input**: Service interfaces + Business requirements
- **Auto-Test**: `./scripts/validate-phase7-inputs.sh`
- **Output**: 100% business functionality coverage
- **Tasks**:
  1. Analyze FSD against service interfaces
  2. Validate interface completeness and method signatures
  3. Check business logic coverage and domain operations
  4. Generate coverage report and gap analysis
- **Next**: Proceed to Phase 8

### **Phase 8: Business Service Implementations** ⭐ NEW
- **Input**: Validated interfaces + Business logic
- **Auto-Test**: `./scripts/validate-phase8-inputs.sh`
- **Output**: Service implementations + Business logic
- **Tasks**:
  1. Implement all service interfaces
  2. Create concrete service classes and business logic
  3. Implement data access layers and repository patterns
  4. Implement comprehensive error handling
- **Next**: Proceed to Phase 9

### **Phase 9: Unit Testing Cases (100% Coverage)** ⭐ NEW
- **Input**: Service implementations + Business logic
- **Auto-Test**: `./scripts/validate-phase9-inputs.sh`
- **Output**: Unit tests + 100% coverage
- **Tasks**:
  1. Generate unit tests for all services
  2. Create test cases for business logic and data access
  3. Implement test scenarios with mocks and test data
  4. Validate 100% code coverage achievement
- **Next**: Proceed to Phase 10

### **Phase 10: REST API Development** ⭐ NEW
- **Input**: FSD + TSD + RTSD + Figma screens
- **Auto-Test**: `./scripts/validate-phase10-inputs.sh`
- **Output**: REST API + Controllers + Documentation
- **Tasks**:
  1. Design REST API endpoints based on requirements
  2. Implement API controllers and endpoint methods
  3. Create API documentation and request/response models
  4. Implement API tests and validation
- **Next**: Proceed to Phase 11

### **Phase 11: Frontend Screen Development** ⭐ NEW
- **Input**: Figma designs + REST API + RTSD
- **Auto-Test**: `./scripts/validate-phase11-inputs.sh`
- **Output**: Vue.js components + Pixel-perfect UI
- **Tasks**:
  1. Design Vue.js components based on Figma designs
  2. Implement all screen components and page layouts
  3. Integrate with REST API and implement state management
  4. Implement pixel-perfect styling with design system
- **Next**: Proceed to Phase 12

### **Phase 12: Frontend Unit Test Cases** ⭐ NEW
- **Input**: Frontend components + Business logic
- **Auto-Test**: `./scripts/validate-phase12-inputs.sh`
- **Output**: Frontend unit tests + Component coverage
- **Tasks**:
  1. Generate unit tests for all Vue.js components
  2. Create test cases for screen logic and user interactions
  3. Implement API integration tests and state management tests
  4. Validate component test coverage and user interaction testing
- **Next**: Proceed to Phase 13

### **Phase 13: CI/CD Deployment & Azure App Service** ⭐ NEW
- **Input**: Complete application + Tests + Azure config
- **Auto-Test**: `./scripts/validate-phase13-inputs.sh`
- **Output**: CI/CD pipeline + Azure deployment
- **Tasks**:
  1. Design CI/CD pipeline with build and deployment stages
  2. Create build scripts and configure build processes
  3. Create deployment scripts and configure Azure App Service
  4. Setup application monitoring and health checks
- **Next**: 🎉 **PROJECT COMPLETE**

### **Phase 2: Implementation Planning**
1. **Plan technical architecture** based on TSD
2. **Define development phases** and milestones
3. **Create project structure** and organization
4. **Setup incremental testing environment** for immediate frontend validation
5. **Start minimal mock backend** for component testing
6. **Create component testing utilities** for isolated testing
7. **Plan testing strategy** and quality gates

### **Phase 3: Project Setup & Architecture**
1. **Set up project structure** with proper organization
2. **Configure development environment** and tools
3. **Set up database** and initial schema
4. **Configure CI/CD pipeline** and deployment

### **Phase 4: Frontend Implementation**
1. **Setup comprehensive mock backend** for complete frontend testing
2. **Implement UI components** based on RTSD and UXD analysis
3. **Create user interfaces** following pixel-perfect design system
4. **Implement user workflows** and interactions with mock data
5. **Add responsive design** and accessibility features
6. **Test complete frontend** with all features and user flows

### **Phase 5: Backend Implementation**
1. **Implement real API endpoints** based on frontend requirements
2. **Create database models** and relationships
3. **Implement business logic** and validation
4. **Add authentication** and security features
5. **Replace mock backend** with real implementation
6. **Test complete system** end-to-end

### **Phase 6: Integration & Testing**
1. **Integrate frontend and backend** components
2. **Implement comprehensive testing** suite
3. **Validate all requirements** and acceptance criteria
4. **Perform quality assurance** and bug fixes

### **Phase 7: Deployment & Optimization**
1. **Deploy application** to production environment
2. **Configure monitoring** and logging
3. **Optimize performance** and scalability
4. **Complete documentation** and handover

### **Phase 8: Optional - Temporary Backend (Stage 6)**
1. **Create mock backend** for immediate testing
2. **Simulate all API endpoints** with realistic data
3. **Enable frontend testing** without real backend
4. **Provide easy replacement** path for real backend

## **EXECUTION MODE**

### **Semi-Automated Execution**
- I will automatically load each phase prompt
- I will ask for your confirmation before proceeding
- You can approve, modify, or request changes
- Type "PROCEED" to continue to next phase

### **Phase Progression**
1. **Phase 1** → FSD Analysis & Validation
2. **Phase 2** → Implementation Planning
3. **Phase 3** → Project Setup & Architecture
4. **Phase 4** → Frontend Implementation
5. **Phase 5** → Backend Implementation
6. **Phase 6** → Integration & Testing
7. **Phase 7** → Deployment & Optimization
8. **Phase 8** → Optional Temporary Backend (Stage 6)

## **QUALITY ASSURANCE**

### **Validation Points**
- [ ] All FSD requirements are implemented
- [ ] Technical architecture follows TSD
- [ ] UI/UX requirements meet RTSD specifications
- [ ] Mermaid diagrams are accurately implemented
- [ ] All tests pass and code coverage >90%
- [ ] Security requirements are met
- [ ] Performance targets are achieved
- [ ] Documentation is complete

### **Success Criteria**
- [ ] Application is fully functional
- [ ] All user stories are implemented
- [ ] Business rules are correctly implemented
- [ ] UI/UX matches design specifications
- [ ] Application is deployed and accessible
- [ ] All acceptance criteria are met
- [ ] **Optional**: Mock backend available for testing

## **EXPECTED OUTPUT**

After completion, you will have:
- ✅ **Complete application** meeting all requirements
- ✅ **Production-ready codebase** with proper architecture
- ✅ **Comprehensive testing suite** with high coverage
- ✅ **Deployed application** accessible to users
- ✅ **Complete documentation** for maintenance
- ✅ **Monitoring and logging** for production support
- ✅ **Optional mock backend** for immediate testing

## **NEXT STEPS**

1. **Confirm you understand** the implementation plan
2. **Ask any clarifying questions** about requirements
3. **Begin with Phase 1** using the appropriate prompt
4. **Execute each phase sequentially** until completion
5. **Validate each phase** against success criteria

---

**Ready to begin?** Please confirm you understand the implementation plan and provide all documents from previous stages. I'll start with Phase 1: FSD Analysis & Validation.
