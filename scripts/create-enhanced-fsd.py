#!/usr/bin/env python3
# create-enhanced-fsd.py
# Enhanced FSD Creation with Mermaid Integration

import os
import json
from pathlib import Path

def read_requirements(file_path):
    """Read raw requirements from file"""
    with open(file_path, 'r') as f:
        return f.read()

def read_mermaid_diagrams(diagrams_dir):
    """Read all Mermaid diagrams from directory"""
    diagrams = {}
    
    for file_path in Path(diagrams_dir).glob('*.mmd'):
        with open(file_path, 'r') as f:
            diagrams[file_path.stem] = f.read()
    
    return diagrams

def create_enhanced_fsd(requirements, diagrams):
    """Create enhanced FSD with embedded Mermaid diagrams"""
    
    fsd_content = f"""# ENHANCED FUNCTIONAL SPECIFICATION DOCUMENT (FSD)
## Employee Time Tracking Application

---

## **1. PROJECT OVERVIEW**

### **1.1 Project Information**
- **Project Name**: Employee Time Tracking Application
- **Version**: 1.0
- **Date**: {os.popen('date').read().strip()}
- **Author**: Enhanced EFTDM System
- **Stakeholders**: Development Team, QA Team, Product Management

### **1.2 Executive Summary**
{requirements[:500]}...

### **1.3 Scope Definition**
- **In Scope**: Time tracking, file upload, AI processing, data review, submission
- **Out of Scope**: Advanced reporting, mobile app, third-party integrations
- **Assumptions**: Users have basic computer skills, stable internet connection

---

## **2. USER JOURNEY & FLOW DIAGRAMS**

### **2.1 High-Level User Journey**
```mermaid
{diagrams.get('user_journey', 'graph TD\\n    A[User Login] --> B[Dashboard]\\n    B --> C[Upload File]\\n    C --> D[AI Processing]\\n    D --> E[Review Data]\\n    E --> F[Submit]')}
```

### **2.2 Detailed User Flows**

#### **2.2.1 Authentication Flow**
```mermaid
sequenceDiagram
    participant U as User
    participant F as Frontend
    participant B as Backend
    participant D as Database
    
    U->>F: Enter Credentials
    F->>B: POST /auth/login
    B->>D: Validate User
    D-->>B: User Data
    B-->>F: JWT Token
    F-->>U: Redirect to Dashboard
```

#### **2.2.2 File Upload & Processing Flow**
```mermaid
{diagrams.get('decision_flow', 'flowchart TD\\n    A[File Upload] --> B{Valid File?}\\n    B -->|Yes| C[Process File]\\n    B -->|No| D[Show Error]')}
```

#### **2.2.3 System Flow Diagram**
```mermaid
{diagrams.get('system_flow', 'sequenceDiagram\\n    participant U as User\\n    participant S as System\\n    U->>S: Action\\n    S-->>U: Response')}
```

---

## **3. FUNCTIONAL REQUIREMENTS**

### **3.1 User Management**

#### **3.1.1 Authentication**
- **REQ-AUTH-001**: User login with email/password
- **REQ-AUTH-002**: JWT token-based session management
- **REQ-AUTH-003**: Password reset functionality
- **REQ-AUTH-004**: Session timeout handling

#### **3.1.2 User Roles & Permissions**
```mermaid
graph TD
    A[User Types] --> B[Employee]
    A --> C[Manager]
    A --> D[Admin]
    
    B --> E[View Own Timesheets]
    B --> F[Create Timesheets]
    B --> G[Edit Own Timesheets]
    
    C --> H[View Team Timesheets]
    C --> I[Approve Timesheets]
    C --> J[Generate Reports]
    
    D --> K[Manage Users]
    D --> L[System Configuration]
    D --> M[All Permissions]
```

### **3.2 Core Functionality**

#### **3.2.1 Timesheet Management**
- **REQ-TS-001**: Create new timesheet
- **REQ-TS-002**: Upload timesheet files (PDF, Excel, CSV)
- **REQ-TS-003**: AI-powered data extraction
- **REQ-TS-004**: Manual data entry
- **REQ-TS-005**: Edit timesheet data
- **REQ-TS-006**: Submit timesheet for approval

#### **3.2.2 Data Processing Flow**
```mermaid
flowchart TD
    A[File Upload] --> B[File Validation]
    B --> C[AI Processing]
    C --> D[Data Extraction]
    D --> E[Data Validation]
    E --> F[User Review]
    F --> G[Data Correction]
    G --> H[Final Submission]
    
    subgraph "AI Processing"
        C1[OCR Text Recognition]
        C2[Data Structure Analysis]
        C3[Field Mapping]
        C4[Confidence Scoring]
    end
    
    C --> C1
    C1 --> C2
    C2 --> C3
    C3 --> C4
    C4 --> D
```

---

## **4. BUSINESS RULES & VALIDATION**

### **4.1 Business Rules**
```mermaid
graph TD
    A[Business Rules] --> B[Time Entry Rules]
    A --> C[Approval Rules]
    A --> D[Data Rules]
    
    B --> B1[Max 12 hours per day]
    B --> B2[Min 0.5 hours per entry]
    B --> B3[No future dates]
    
    C --> C1[Manager approval required]
    C --> C2[Auto-approve if < 8 hours]
    C --> C3[Escalation after 3 days]
    
    D --> D1[Required fields validation]
    D --> D2[Date range validation]
    D --> D3[Project code validation]
```

### **4.2 Validation Rules**
- **VAL-001**: Required field validation
- **VAL-002**: Date range validation
- **VAL-003**: Time format validation
- **VAL-004**: Project code validation
- **VAL-005**: Duplicate entry prevention

---

## **5. USER INTERFACE REQUIREMENTS**

### **5.1 Page Structure**
```mermaid
graph TD
    A[Application] --> B[Authentication Pages]
    A --> C[Main Application]
    
    B --> B1[Login Page]
    B --> B2[Register Page]
    B --> B3[Forgot Password]
    
    C --> C1[Dashboard]
    C --> C2[Timesheet Management]
    C --> C3[Reports]
    C --> C4[Profile]
    
    C2 --> C2A[Upload Timesheet]
    C2 --> C2B[Review Timesheet]
    C2 --> C2C[Edit Timesheet]
    C2 --> C2D[Timesheet History]
```

### **5.2 Component Hierarchy**
```mermaid
graph TD
    A[App Component] --> B[Header Component]
    A --> C[Sidebar Component]
    A --> D[Main Content]
    A --> E[Footer Component]
    
    D --> D1[Dashboard View]
    D --> D2[Timesheet View]
    D --> D3[Profile View]
    
    D2 --> D2A[File Upload Component]
    D2 --> D2B[Data Review Component]
    D2 --> D2C[Edit Form Component]
```

---

## **6. TECHNICAL SPECIFICATIONS**

### **6.1 Technology Stack**
- **Frontend**: Vue.js 3, TypeScript, TailwindCSS
- **Backend**: Node.js, Express, TypeScript
- **Database**: PostgreSQL
- **AI/ML**: Python, OCR libraries
- **Cloud**: AWS (ECS, RDS, S3)

### **6.2 API Endpoints**
```mermaid
graph TD
    A[API Endpoints] --> B[Authentication APIs]
    A --> C[Timesheet APIs]
    A --> D[User APIs]
    
    B --> B1[POST /auth/login]
    B --> B2[POST /auth/register]
    B --> B3[POST /auth/refresh]
    
    C --> C1[POST /timesheets/upload]
    C --> C2[GET /timesheets]
    C --> C3[PUT /timesheets/:id]
    C --> C4[POST /timesheets/:id/submit]
    
    D --> D1[GET /users/profile]
    D --> D2[PUT /users/profile]
    D --> D3[GET /users/team]
```

---

## **7. DATA MODEL**

### **7.1 Entity Relationship Diagram**
```mermaid
{diagrams.get('data_model', 'erDiagram\\n    USER ||--o{ TIMESHEET : creates\\n    TIMESHEET ||--o{ ENTRY : contains\\n    PROJECT ||--o{ ENTRY : belongs_to')}
```

---

## **8. NON-FUNCTIONAL REQUIREMENTS**

### **8.1 Performance Requirements**
- **PERF-001**: Page load time < 2 seconds
- **PERF-002**: API response time < 500ms
- **PERF-003**: File upload processing < 30 seconds
- **PERF-004**: Support 1000 concurrent users

### **8.2 Security Requirements**
- **SEC-001**: HTTPS encryption
- **SEC-002**: JWT token authentication
- **SEC-003**: Input validation and sanitization
- **SEC-004**: SQL injection prevention
- **SEC-005**: XSS protection

### **8.3 Scalability Requirements**
```mermaid
graph TD
    A[Scalability Plan] --> B[Horizontal Scaling]
    A --> C[Database Scaling]
    A --> D[CDN Implementation]
    
    B --> B1[Load Balancer]
    B --> B2[Multiple Instances]
    B --> B3[Auto-scaling Groups]
    
    C --> C1[Read Replicas]
    C --> C2[Database Sharding]
    C --> C3[Caching Layer]
    
    D --> D1[Static Asset CDN]
    D --> D2[API Response Caching]
    D --> D3[Edge Computing]
```

---

## **9. ACCEPTANCE CRITERIA**

### **9.1 User Story Acceptance Criteria**
```mermaid
graph TD
    A[User Story] --> B[Given]
    A --> C[When]
    A --> D[Then]
    
    B --> B1[User is logged in]
    B --> B2[File is selected]
    B --> B3[Data is valid]
    
    C --> C1[User uploads file]
    C --> C2[AI processes data]
    C --> C3[User reviews data]
    
    D --> D1[Data is displayed correctly]
    D --> D2[User can edit data]
    D --> D3[Timesheet is submitted]
```

### **9.2 Testing Scenarios**
- **TEST-001**: Happy path testing
- **TEST-002**: Error handling testing
- **TEST-003**: Edge case testing
- **TEST-004**: Performance testing
- **TEST-005**: Security testing

---

## **10. RISK ASSESSMENT**

### **10.1 Risk Matrix**
```mermaid
graph TD
    A[Risk Assessment] --> B[High Risk]
    A --> C[Medium Risk]
    A --> D[Low Risk]
    
    B --> B1[Data Loss]
    B --> B2[Security Breach]
    B --> B3[System Downtime]
    
    C --> C1[Performance Issues]
    C --> C2[User Adoption]
    C --> C3[Integration Failures]
    
    D --> D1[Minor UI Issues]
    D --> D2[Documentation Gaps]
    D --> D3[Training Requirements]
```

---

## **11. IMPLEMENTATION TIMELINE**

### **11.1 Development Phases**
```mermaid
{diagrams.get('gantt_chart', 'gantt\\n    title Development Timeline\\n    dateFormat  YYYY-MM-DD\\n    section Phase 1\\n    Project Setup    :2024-01-01, 7d\\n    Authentication   :2024-01-08, 14d')}
```

---

## **12. APPENDICES**

### **12.1 Glossary**
- **AI Processing**: Automated data extraction from uploaded files
- **OCR**: Optical Character Recognition
- **JWT**: JSON Web Token
- **API**: Application Programming Interface

### **12.2 References**
- [Link to Design Assets]
- [Link to Technical Documentation]
- [Link to User Research]

---

**Document Version**: 1.0  
**Created**: {os.popen('date').read().strip()}  
**Next Review**: [Date]  
**Status**: Draft/Review/Approved
"""
    
    return fsd_content

def main():
    """Main function to create enhanced FSD"""
    
    # Read requirements
    requirements = read_requirements('raw_requirements.txt')
    
    # Read Mermaid diagrams
    diagrams = read_mermaid_diagrams('diagrams/')
    
    # Create enhanced FSD
    fsd_content = create_enhanced_fsd(requirements, diagrams)
    
    # Save enhanced FSD
    with open('enhanced_fsd.md', 'w') as f:
        f.write(fsd_content)
    
    print("✅ Enhanced FSD created: enhanced_fsd.md")
    print("🎨 FSD includes embedded Mermaid diagrams")
    print("📊 Ready for stakeholder review!")

if __name__ == "__main__":
    main()
