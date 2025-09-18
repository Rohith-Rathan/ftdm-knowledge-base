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

## **SMART DEVELOPMENT APPROACH**

### **FRONTEND-FIRST DEVELOPMENT (RECOMMENDED)**
**Why Frontend-First?**
- **Immediate Testing**: Test complete frontend with comprehensive mock backend
- **Faster Iteration**: Validate UI/UX without waiting for backend implementation
- **Better Requirements**: Frontend development reveals missing requirements
- **Parallel Development**: Backend team can work on real implementation while frontend is tested
- **Client Validation**: Show working frontend to stakeholders early

**Development Sequence:**
1. **Phase 4**: Develop complete frontend with comprehensive mock backend
2. **Test all features** and user flows with realistic data
3. **Validate requirements** and UI/UX based on frontend testing
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

### **Phase 1: FSD Analysis & Validation**
1. **Analyze FSD requirements** for completeness
2. **Validate against Mermaid diagrams** for consistency
3. **Identify implementation priorities** and dependencies
4. **Create implementation roadmap** based on requirements
5. **Migrate assets** from Stage 4 to development folder using asset migration script
6. **Execute asset migration**: Run `./scripts/stage5-asset-migration.sh` to move assets to `src/assets/figma_assets/`
7. **Validate asset migration**: Ensure all assets are properly moved and accessible
8. **Setup incremental testing**: Run `./scripts/setup-incremental-testing.sh` for immediate frontend testing
9. **Setup complete frontend testing**: Run `./scripts/setup-complete-frontend-testing.sh` for full application testing

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
