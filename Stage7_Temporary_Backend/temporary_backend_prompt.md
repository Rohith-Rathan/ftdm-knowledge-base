# 🎯 STAGE 7: TEMPORARY DEVELOPMENT BACKEND GENERATOR

## **INSTRUCTIONS FOR CURSOR AI**

You are a Senior Full-Stack Developer with 10+ years of experience. I need you to create a temporary mock backend for immediate local testing of my Vue.js frontend application.

## **PURPOSE**
Create a temporary development backend that allows immediate testing of the frontend without requiring real backend setup, while keeping the original backend code intact for future implementation.

## **INPUTS FROM PREVIOUS STAGES**

### **FSD Document**
[USER_PROVIDES_FSD_DOCUMENT]

### **TSD Document**
[USER_PROVIDES_TSD_DOCUMENT]

### **UXD Assets (From Stage 4)**
[USER_PROVIDES_UXD_ASSETS]

**UXD Integration for Mock Data:**
- **MUST** use navigation structure from UXD/screens/navigation_list.md
- **MUST** create mock data that matches UI components from UXD analysis
- **MUST** simulate realistic data flows based on UXD user journeys
- **MUST** provide mock endpoints that support UXD screen requirements

### **Frontend Implementation**
[USER_PROVIDES_FRONTEND_CODE]

## **YOUR TASK**

### **Step 1: API Analysis**
1. **Analyze the frontend code** to identify all API calls and endpoints
2. **Extract API requirements** from TSD/RTSD documents
3. **Identify data models** and response structures
4. **Map authentication requirements** and user roles
5. **Determine business logic** and validation rules

### **Step 2: Mock Backend Generation**
Create a comprehensive mock backend with:

#### **2.1: Express.js Mock Server**
- **Technology**: Node.js + Express.js
- **Port**: 3001 (configurable)
- **CORS**: Enabled for localhost:3000 (Vue.js)
- **JSON**: Automatic request/response parsing
- **Logging**: Request/response logging for debugging

#### **2.2: Mock Data Generation**
- **Realistic data** based on FSD requirements
- **Multiple user roles** and permissions
- **Sample entities** (users, products, orders, etc.)
- **Realistic relationships** between data
- **Edge cases** and error scenarios

#### **2.3: API Endpoints Simulation**
- **All CRUD operations** (Create, Read, Update, Delete)
- **Authentication endpoints** (login, logout, register)
- **File upload simulation** (if required)
- **Search and filtering** capabilities
- **Pagination** support
- **Error handling** with appropriate HTTP status codes

#### **2.4: Authentication Simulation**
- **Mock JWT tokens** for authentication
- **Role-based access control** simulation
- **Session management** (if required)
- **Password validation** simulation
- **User profile management**

#### **2.5: Business Logic Simulation**
- **Validation rules** from FSD
- **Business processes** simulation
- **State management** (pending, approved, rejected, etc.)
- **Notification simulation** (if required)
- **Workflow simulation** (if required)

### **Step 3: Configuration & Setup**
Create easy setup and configuration:

#### **3.1: Package Configuration**
- **package.json** with all dependencies
- **Scripts** for easy startup
- **Environment variables** configuration
- **Port configuration** (3001 by default)

#### **3.2: Frontend Integration**
- **API base URL** configuration
- **Environment-specific** settings
- **Easy switching** between mock and real backend
- **Development vs Production** modes

#### **3.3: Documentation**
- **API documentation** with all endpoints
- **Sample requests** and responses
- **Setup instructions** for team members
- **Replacement guide** for real backend

### **Step 4: Quality Assurance**
- [ ] All frontend API calls are handled
- [ ] Realistic data is generated
- [ ] Authentication works correctly
- [ ] Error scenarios are covered
- [ ] Performance is acceptable for testing
- [ ] Easy to start and stop
- [ ] Original backend code is untouched

## **MOCK BACKEND STRUCTURE**

```javascript
// Example structure
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

// Mock data
const mockUsers = [...];
const mockProducts = [...];
const mockOrders = [...];

// Authentication middleware
const authenticateToken = (req, res, next) => {
  // Mock JWT validation
};

// API Routes
app.post('/api/auth/login', (req, res) => {
  // Mock login logic
});

app.get('/api/users', authenticateToken, (req, res) => {
  // Mock user listing
});

app.post('/api/users', authenticateToken, (req, res) => {
  // Mock user creation
});

// ... all other endpoints

app.listen(PORT, () => {
  console.log(`Mock API server running on http://localhost:${PORT}`);
});
```

## **CONFIGURATION FILES TO CREATE**

### **1. package.json**
```json
{
  "name": "mock-backend-dev",
  "version": "1.0.0",
  "description": "Temporary mock backend for frontend testing",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "test": "echo 'Mock backend ready for testing'"
  },
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5",
    "jsonwebtoken": "^9.0.0",
    "multer": "^1.4.5"
  }
}
```

### **2. .env**
```env
PORT=3001
JWT_SECRET=mock-secret-key-for-development
API_BASE_URL=http://localhost:3001
FRONTEND_URL=http://localhost:3000
```

### **3. Frontend Configuration Update**
```javascript
// config/api.js
const API_BASE_URL = process.env.NODE_ENV === 'development' 
  ? 'http://localhost:3001'  // Mock backend
  : 'https://your-real-backend.com';  // Real backend

export default API_BASE_URL;
```

## **EXPECTED OUTPUT**

After completion, you will have:
- ✅ **Complete mock backend** running on localhost:3001
- ✅ **All API endpoints** simulated with realistic data
- ✅ **Authentication system** working with mock JWT
- ✅ **Easy startup** with `npm start`
- ✅ **Frontend integration** ready for testing
- ✅ **Documentation** for team members
- ✅ **Original backend code** completely untouched
- ✅ **Easy replacement** guide for real backend

## **USAGE INSTRUCTIONS**

### **Start Mock Backend:**
```bash
cd mock-backend-dev
npm install
npm start
# Server running on http://localhost:3001
```

### **Start Frontend:**
```bash
cd frontend
npm run dev
# Frontend running on http://localhost:3000
```

### **Test Application:**
- Frontend calls mock backend automatically
- All features work with realistic data
- Authentication and user roles work
- Can test all CRUD operations

### **Switch to Real Backend Later:**
1. Update `API_BASE_URL` in frontend config
2. Remove mock backend
3. Deploy real backend
4. Frontend works with real backend

## **BENEFITS**

### **Immediate Testing**
- ✅ No backend setup required
- ✅ Frontend works immediately
- ✅ Realistic data and behavior
- ✅ All features testable

### **Development Efficiency**
- ✅ Single prompt solution
- ✅ No multiple follow-ups needed
- ✅ Team can test independently
- ✅ Faster development cycle

### **Future-Ready**
- ✅ Original backend code untouched
- ✅ Easy to replace mock with real backend
- ✅ Same API structure maintained
- ✅ Smooth transition path

## **NEXT STEPS**

1. **Review the generated mock backend** for completeness
2. **Test all frontend features** with mock data
3. **Validate business logic** simulation
4. **Share with team** for independent testing
5. **Use for demos** and presentations
6. **Replace with real backend** when ready

---

**Ready to begin?** Please provide your FSD, TSD, RTSD, and frontend implementation, and I'll create your comprehensive mock backend for immediate testing.
