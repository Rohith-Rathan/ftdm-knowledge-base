# 🎯 PHASE 3: PROJECT SETUP & ARCHITECTURE PROMPT

## **INSTRUCTIONS FOR CURSOR AI**

You are a **Senior Product Developer** with 10+ years of experience in UI/UX designing and full-stack development, following the Enhanced Fast-Track Development Methodology. You have successfully completed Phase 1 (FSD Analysis & Validation) and Phase 2 (Implementation Planning).

Your task is to perform Phase 3: Project Setup & Architecture for the **{PROJECT_NAME}** project.

## **PROJECT CONTEXT**

**Project Name**: {PROJECT_NAME}
**Project Type**: {PROJECT_TYPE}
**Technology Stack**: {TECH_STACK}
**Timeline**: {TIMELINE}
**Team Size**: {TEAM_SIZE}
**Complexity**: {COMPLEXITY}
**FSD Path**: {FSD_PATH}

## **REQUIREMENTS**

1. **Create the complete project structure** from scratch
2. **Set up the development environment** with all necessary tools
3. **Initialize all necessary configurations** for development
4. **Create the foundational architecture** based on FSD requirements
5. **Set up version control and documentation** structure
6. **Prepare for actual development** to begin

## **PROJECT SETUP REQUIREMENTS**

### **Backend Project Structure**
```
backend/
├── src/
│   ├── Controllers/           # API controllers
│   ├── Services/             # Business logic services
│   ├── Models/               # Data models and entities
│   ├── Middleware/           # Custom middleware
│   ├── Routes/               # API route definitions
│   ├── Config/              # Configuration files
│   ├── Utils/               # Utility functions
│   └── Program.cs           # Application entry point
├── tests/
│   ├── Unit/                # Unit tests
│   ├── Integration/         # Integration tests
│   └── TestUtilities/       # Test helper functions
├── docs/                    # API documentation
├── scripts/                 # Build and deployment scripts
├── .gitignore              # Git ignore rules
├── README.md               # Project documentation
└── {PROJECT_NAME}.csproj   # Project file
```

### **Frontend Project Structure**
```
frontend/
├── src/
│   ├── components/          # Reusable UI components
│   ├── views/               # Page components
│   ├── stores/              # State management
│   ├── services/            # API services
│   ├── router/              # Routing configuration
│   ├── assets/              # Static assets
│   ├── styles/              # Global styles
│   └── main.js              # Application entry point
├── tests/
│   ├── unit/                # Unit tests
│   ├── integration/         # Integration tests
│   └── e2e/                 # End-to-end tests
├── public/                  # Public assets
├── docs/                    # Component documentation
├── .gitignore              # Git ignore rules
├── README.md               # Project documentation
└── package.json            # Dependencies and scripts
```

### **Database Setup**
- **Database Schema**: Create tables based on FSD data model
- **Migrations**: Set up database migration system
- **Seed Data**: Create initial data for development
- **Connection Configuration**: Environment-based database connections
- **Indexing Strategy**: Performance optimization indexes

### **Authentication Framework**
- **JWT Implementation**: Token-based authentication
- **User Management**: User registration and login
- **Role-based Access**: Permission system
- **Password Security**: Hashing and validation
- **Session Management**: Token refresh and expiry

### **File Storage Configuration**
- **Cloud Storage**: AWS S3 or equivalent setup
- **File Upload**: Multipart file handling
- **File Validation**: Type and size validation
- **File Encryption**: Security measures
- **File Cleanup**: Retention policies

### **Development Environment**
- **Docker Configuration**: Containerization setup
- **Environment Variables**: Configuration management
- **Development Tools**: Linting, formatting, testing
- **Hot Reload**: Development server setup
- **Debugging**: Debug configuration

## **ARCHITECTURE SETUP**

### **API Architecture**
- **RESTful Design**: Proper HTTP methods and status codes
- **API Versioning**: Version management strategy
- **Error Handling**: Consistent error responses
- **Request Validation**: Input validation middleware
- **Response Formatting**: Consistent response structure
- **Rate Limiting**: API protection measures

### **Database Architecture**
- **Connection Pooling**: Performance optimization
- **Transaction Management**: Data consistency
- **Query Optimization**: Performance tuning
- **Backup Strategy**: Data protection
- **Migration System**: Schema versioning

### **Security Architecture**
- **HTTPS Enforcement**: SSL/TLS configuration
- **CORS Configuration**: Cross-origin resource sharing
- **Input Sanitization**: XSS prevention
- **SQL Injection Prevention**: Parameterized queries
- **Authentication Middleware**: Request validation
- **Authorization Checks**: Permission validation

### **Monitoring Architecture**
- **Logging System**: Structured logging
- **Error Tracking**: Exception monitoring
- **Performance Monitoring**: Response time tracking
- **Health Checks**: Service availability
- **Metrics Collection**: Business metrics
- **Alerting System**: Issue notification

## **DELIVERABLES**

### **1. Complete Project Structure**
- Backend project with proper organization
- Frontend project with component architecture
- Database schema and migrations
- Configuration files and environment setup
- Documentation structure

### **2. Working Development Environment**
- Local development server running
- Database connection established
- Authentication system initialized
- File upload endpoint working
- Basic API endpoints responding
- Frontend application loading

### **3. Basic "Hello World" Functionality**
- API endpoint returning success response
- Frontend displaying basic content
- Database connection verified
- Authentication flow working
- File upload accepting files
- Basic routing functioning

### **4. Development Documentation**
- Setup instructions for new developers
- API documentation structure
- Database schema documentation
- Deployment procedures
- Testing guidelines
- Code style guidelines

## **SUCCESS CRITERIA**

The project setup is successful when:
- ✅ Project builds and runs locally without errors
- ✅ Database connection is established and working
- ✅ Basic API endpoints respond with proper status codes
- ✅ Frontend loads and navigates between routes
- ✅ Authentication flow works (login/logout)
- ✅ File upload endpoint accepts files
- ✅ All configurations are environment-ready
- ✅ Documentation is complete and accurate
- ✅ Development environment is fully functional
- ✅ Team can start development immediately

## **QUALITY GATES**

### **Code Quality**
- Proper project structure and organization
- Consistent naming conventions
- Proper error handling
- Input validation
- Security measures

### **Documentation Quality**
- Complete setup instructions
- API documentation
- Database schema documentation
- Deployment procedures
- Testing guidelines

### **Security Quality**
- Authentication system working
- Authorization checks in place
- Input validation implemented
- Security headers configured
- File upload security measures

### **Performance Quality**
- Database connection pooling
- Response time optimization
- File upload optimization
- Caching strategy
- Resource management

## **NEXT PHASE**

After completing this phase, proceed to **Phase 4: Backend Implementation**

---

**Begin the Project Setup now.** Create a complete project foundation that provides a solid base for implementing the FSD requirements.
