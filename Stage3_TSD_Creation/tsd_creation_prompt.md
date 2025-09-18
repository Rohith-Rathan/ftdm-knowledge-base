# 🎯 STAGE 3: TSD CREATION PROMPT

## **INSTRUCTIONS FOR CURSOR AI**

You are a Senior Product Developer with 10+ years of experience. I need you to create a comprehensive Technical Specification Document (TSD) using my FSD and Mermaid flow diagrams.

## **INPUTS FROM PREVIOUS STAGES**

### **FSD Document**
[USER_PROVIDES_FSD_DOCUMENT]

### **Mermaid Flow Diagrams**
[USER_PROVIDES_MERMAID_DIAGRAMS]

## **YOUR TASK**

### **Step 1: TSD Analysis**
1. **Analyze the FSD** for technical requirements
2. **Map FSD requirements to technical solutions**
3. **Validate against Mermaid diagrams** for consistency
4. **Identify technical gaps** and requirements

### **Step 2: TSD Generation**
Create a comprehensive TSD using the enhanced template:

#### **2.1: Technical Architecture**
- System architecture overview
- Component architecture
- Microservices architecture
- Integration architecture
- Deployment architecture

#### **2.2: Technology Stack**
**MANDATORY ORGANIZATION TECH STACK:**
- **Backend**: .NET Core 8.0 (ASP.NET Core Web API, C# 12)
- **Frontend**: Vue.js 3, State Management: Vuex 4, Routing: Vue Router 4, HTTP Client: Axios 1.6, Build Tool: Webpack 5 with Babel, CSS Preprocessing: Sass/SCSS
- **Database**: MongoDB
- **Authentication/Authorization**: JWT with Azure AD
- **Deployment/CI-CD tools**: Docker, Kubernetes-ready, Azure App Services with Visual Studio
- **Third-party integrations**: Azure services, external APIs

#### **2.3: API Specifications**
- REST API endpoints
- GraphQL schemas
- API authentication
- API documentation
- API versioning

#### **2.4: Database Design**
- Database schema
- Entity relationships
- Data models
- Indexing strategy
- Data migration plans

#### **2.5: Security Requirements**
- Authentication mechanisms
- Authorization policies
- Data encryption
- Security protocols
- Compliance requirements

#### **2.6: Performance Requirements**
- Response time requirements
- Throughput requirements
- Scalability requirements
- Caching strategies
- Load balancing

#### **2.7: Development Standards**
- Coding standards
- Code review process
- Testing standards
- Documentation standards
- Version control

### **Step 3: Mermaid Integration**
Reference the validated Mermaid diagrams:
- System Architecture Flow
- Data Flow Diagram
- Business Process Flow
- User Journey Flow

### **Step 4: Quality Assurance**
- [ ] All FSD requirements are covered
- [ ] Technical architecture is complete
- [ ] API specifications are detailed
- [ ] Database design is comprehensive
- [ ] Security requirements are defined
- [ ] Performance requirements are specified
- [ ] Development standards are clear

## **TSD TEMPLATE STRUCTURE**

```markdown
# TECHNICAL SPECIFICATION DOCUMENT (TSD)

## 1. TECHNICAL ARCHITECTURE
### 1.1 System Overview
### 1.2 Component Architecture
### 1.3 Microservices Architecture
### 1.4 Integration Architecture
### 1.5 Deployment Architecture

## 2. TECHNOLOGY STACK
### 2.1 Frontend Technologies (Vue.js 3 Ecosystem)
### 2.2 Backend Technologies (.NET Core 8.0)
### 2.3 Database Technologies (MongoDB)
### 2.4 Authentication & Authorization (JWT + Azure AD)
### 2.5 Infrastructure & Deployment (Docker + Kubernetes + Azure)
### 2.6 Third-party Integrations

## 3. API SPECIFICATIONS
### 3.1 REST API Endpoints
### 3.2 GraphQL Schemas
### 3.3 API Authentication
### 3.4 API Documentation
### 3.5 API Versioning

## 4. DATABASE DESIGN
### 4.1 Database Schema
### 4.2 Entity Relationships
### 4.3 Data Models
### 4.4 Indexing Strategy
### 4.5 Data Migration Plans

## 5. SECURITY REQUIREMENTS
### 5.1 Authentication Mechanisms
### 5.2 Authorization Policies
### 5.3 Data Encryption
### 5.4 Security Protocols
### 5.5 Compliance Requirements

## 6. PERFORMANCE REQUIREMENTS
### 6.1 Response Time Requirements
### 6.2 Throughput Requirements
### 6.3 Scalability Requirements
### 6.4 Caching Strategies
### 6.5 Load Balancing

## 7. DEVELOPMENT STANDARDS
### 7.1 Coding Standards
### 7.2 Code Review Process
### 7.3 Testing Standards
### 7.4 Documentation Standards
### 7.5 Version Control

## 8. MERMAID DIAGRAMS REFERENCE
### 8.1 System Architecture Flow
### 8.2 Data Flow Diagram
### 8.3 Business Process Flow
### 8.4 User Journey Flow

## 9. APPENDICES
### 9.1 Technical Glossary
### 9.2 API Reference
### 9.3 Database Schema
### 9.4 Security Checklist
### 9.5 Performance Benchmarks
```

## **EXPECTED OUTPUT**

After completion, you will have:
- ✅ **Comprehensive TSD** covering all technical requirements
- ✅ **Complete technical architecture** with components
- ✅ **Detailed API specifications** with endpoints
- ✅ **Comprehensive database design** with schema
- ✅ **Clear security requirements** and protocols
- ✅ **Performance requirements** and strategies
- ✅ **Ready for Stage 4** (RTSD Creation) or Stage 5 (Implementation)

## **NEXT STEPS**

1. **Review the generated TSD** for completeness
2. **Provide feedback** on any missing or unclear sections
3. **Confirm accuracy** of all technical requirements
4. **Approve the TSD** for next stage
5. **Proceed to Stage 4** (RTSD) or **Stage 5** (Implementation)

---

**Ready to begin?** Please provide your FSD document and Mermaid diagrams from previous stages, and I'll create your comprehensive TSD.
