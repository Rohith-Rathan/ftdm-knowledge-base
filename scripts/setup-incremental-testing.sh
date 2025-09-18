#!/bin/bash

# 🎯 INCREMENTAL FRONTEND TESTING SCRIPT
# This script creates a minimal mock backend for testing frontend components as they're developed

set -e

echo "🚀 Incremental Frontend Testing Setup - Starting..."

# Function to create minimal mock backend
create_minimal_mock_backend() {
    echo "🔧 Creating minimal mock backend for incremental testing..."
    
    # Create mock backend directory
    mkdir -p mock-backend-incremental
    
    # Create package.json
    cat > mock-backend-incremental/package.json << EOF
{
  "name": "mock-backend-incremental",
  "version": "1.0.0",
  "description": "Minimal mock backend for incremental frontend testing",
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
EOF

    # Create minimal server
    cat > mock-backend-incremental/server.js << EOF
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

// Mock data storage
let mockData = {
  users: [
    { id: 1, email: 'admin@example.com', name: 'Admin User', role: 'admin' },
    { id: 2, email: 'user@example.com', name: 'Regular User', role: 'user' }
  ],
  // Add more mock data as needed
};

// Authentication middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }
  
  // Mock JWT validation
  try {
    const decoded = jwt.verify(token, 'mock-secret-key');
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ error: 'Invalid token' });
  }
};

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Mock backend is running' });
});

// Authentication endpoints
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  
  // Mock login validation
  const user = mockData.users.find(u => u.email === email);
  if (user && password === 'password123') {
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      'mock-secret-key',
      { expiresIn: '24h' }
    );
    
    res.json({
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role
      }
    });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

app.post('/api/auth/logout', (req, res) => {
  res.json({ message: 'Logged out successfully' });
});

// Generic CRUD endpoints
app.get('/api/:resource', authenticateToken, (req, res) => {
  const { resource } = req.params;
  const data = mockData[resource] || [];
  res.json(data);
});

app.get('/api/:resource/:id', authenticateToken, (req, res) => {
  const { resource, id } = req.params;
  const data = mockData[resource] || [];
  const item = data.find(item => item.id == id);
  
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ error: 'Not found' });
  }
});

app.post('/api/:resource', authenticateToken, (req, res) => {
  const { resource } = req.params;
  const newItem = {
    id: Date.now(),
    ...req.body,
    createdAt: new Date().toISOString()
  };
  
  if (!mockData[resource]) {
    mockData[resource] = [];
  }
  
  mockData[resource].push(newItem);
  res.status(201).json(newItem);
});

app.put('/api/:resource/:id', authenticateToken, (req, res) => {
  const { resource, id } = req.params;
  const data = mockData[resource] || [];
  const index = data.findIndex(item => item.id == id);
  
  if (index !== -1) {
    data[index] = { ...data[index], ...req.body, updatedAt: new Date().toISOString() };
    res.json(data[index]);
  } else {
    res.status(404).json({ error: 'Not found' });
  }
});

app.delete('/api/:resource/:id', authenticateToken, (req, res) => {
  const { resource, id } = req.params;
  const data = mockData[resource] || [];
  const index = data.findIndex(item => item.id == id);
  
  if (index !== -1) {
    data.splice(index, 1);
    res.json({ message: 'Deleted successfully' });
  } else {
    res.status(404).json({ error: 'Not found' });
  }
});

// File upload simulation
app.post('/api/upload', authenticateToken, (req, res) => {
  res.json({
    message: 'File uploaded successfully',
    filename: 'mock-file.jpg',
    url: '/uploads/mock-file.jpg'
  });
});

// Search endpoint
app.get('/api/search', authenticateToken, (req, res) => {
  const { q, resource } = req.query;
  const data = mockData[resource] || [];
  
  const results = data.filter(item => 
    JSON.stringify(item).toLowerCase().includes(q.toLowerCase())
  );
  
  res.json(results);
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

app.listen(PORT, () => {
  console.log(\`🚀 Incremental Mock API server running on http://localhost:\${PORT}\`);
  console.log(\`📋 Available endpoints:\`);
  console.log(\`   GET    /api/health\`);
  console.log(\`   POST   /api/auth/login\`);
  console.log(\`   POST   /api/auth/logout\`);
  console.log(\`   GET    /api/:resource\`);
  console.log(\`   GET    /api/:resource/:id\`);
  console.log(\`   POST   /api/:resource\`);
  console.log(\`   PUT    /api/:resource/:id\`);
  console.log(\`   DELETE /api/:resource/:id\`);
  console.log(\`   POST   /api/upload\`);
  console.log(\`   GET    /api/search\`);
  console.log(\`\`);
  console.log(\`🔑 Test credentials:\`);
  console.log(\`   Email: admin@example.com\`);
  console.log(\`   Password: password123\`);
});
EOF

    echo "✅ Minimal mock backend created"
}

# Function to create frontend testing configuration
create_frontend_testing_config() {
    echo "⚙️ Creating frontend testing configuration..."
    
    # Create environment configuration
    cat > .env.development << EOF
# Development Environment Configuration
VUE_APP_API_BASE_URL=http://localhost:3001
VUE_APP_ENVIRONMENT=development
VUE_APP_MOCK_BACKEND=true
VUE_APP_VERSION=1.0.0
EOF

    # Create API configuration
    cat > src/config/api.js << EOF
// API Configuration for Incremental Testing
const API_CONFIG = {
  development: {
    baseURL: 'http://localhost:3001',
    timeout: 10000,
    mockBackend: true
  },
  production: {
    baseURL: process.env.VUE_APP_API_BASE_URL || 'https://your-real-backend.com',
    timeout: 10000,
    mockBackend: false
  }
};

const currentConfig = API_CONFIG[process.env.NODE_ENV] || API_CONFIG.development;

export default currentConfig;
EOF

    # Create Axios configuration
    cat > src/utils/api.js << EOF
// Axios Configuration for Incremental Testing
import axios from 'axios';
import apiConfig from '@/config/api';

const api = axios.create({
  baseURL: apiConfig.baseURL,
  timeout: apiConfig.timeout,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      config.headers.Authorization = \`Bearer \${token}\`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('auth_token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;
EOF

    echo "✅ Frontend testing configuration created"
}

# Function to create component testing utilities
create_component_testing_utilities() {
    echo "🧪 Creating component testing utilities..."
    
    # Create mock data generator
    cat > src/utils/mockDataGenerator.js << EOF
// Mock Data Generator for Component Testing
export const generateMockData = (type, count = 10) => {
  const generators = {
    users: () => ({
      id: Math.floor(Math.random() * 1000),
      email: \`user\${Math.floor(Math.random() * 1000)}@example.com\`,
      name: \`User \${Math.floor(Math.random() * 1000)}\`,
      role: Math.random() > 0.5 ? 'admin' : 'user',
      createdAt: new Date().toISOString()
    }),
    
    products: () => ({
      id: Math.floor(Math.random() * 1000),
      name: \`Product \${Math.floor(Math.random() * 1000)}\`,
      price: Math.floor(Math.random() * 1000) + 10,
      description: \`Description for product \${Math.floor(Math.random() * 1000)}\`,
      category: ['electronics', 'clothing', 'books'][Math.floor(Math.random() * 3)],
      createdAt: new Date().toISOString()
    }),
    
    orders: () => ({
      id: Math.floor(Math.random() * 1000),
      userId: Math.floor(Math.random() * 100),
      productId: Math.floor(Math.random() * 100),
      quantity: Math.floor(Math.random() * 5) + 1,
      total: Math.floor(Math.random() * 1000) + 10,
      status: ['pending', 'completed', 'cancelled'][Math.floor(Math.random() * 3)],
      createdAt: new Date().toISOISOString()
    })
  };
  
  const generator = generators[type];
  if (!generator) {
    throw new Error(\`Unknown data type: \${type}\`);
  }
  
  return Array.from({ length: count }, generator);
};

// Mock API responses
export const mockApiResponses = {
  success: (data) => ({ data, status: 200, message: 'Success' }),
  error: (message = 'Error occurred') => ({ error: message, status: 400 }),
  notFound: () => ({ error: 'Not found', status: 404 }),
  unauthorized: () => ({ error: 'Unauthorized', status: 401 })
};
EOF

    # Create component testing helper
    cat > src/utils/componentTestingHelper.js << EOF
// Component Testing Helper for Incremental Testing
import { mount } from '@vue/test-utils';
import { createApp } from 'vue';

export const createTestApp = (component, options = {}) => {
  const app = createApp(component);
  
  // Add global plugins if needed
  if (options.plugins) {
    options.plugins.forEach(plugin => app.use(plugin));
  }
  
  return app;
};

export const mountComponent = (component, options = {}) => {
  return mount(component, {
    global: {
      stubs: ['router-link', 'router-view'],
      mocks: {
        \$router: {
          push: jest.fn(),
          go: jest.fn(),
          back: jest.fn()
        },
        \$route: {
          path: '/',
          params: {},
          query: {}
        }
      },
      ...options.global
    },
    ...options
  });
};

export const waitForNextTick = () => {
  return new Promise(resolve => {
    setTimeout(resolve, 0);
  });
};
EOF

    echo "✅ Component testing utilities created"
}

# Function to create incremental testing guide
create_incremental_testing_guide() {
    echo "📚 Creating incremental testing guide..."
    
    cat > INCREMENTAL_TESTING_GUIDE.md << EOF
# 🎯 Incremental Frontend Testing Guide

## Overview
This guide allows you to test frontend components incrementally during development, without waiting for Stage 6 completion.

## Quick Start

### 1. Start Minimal Mock Backend
\`\`\`bash
cd mock-backend-incremental
npm install
npm start
# Server running on http://localhost:3001
\`\`\`

### 2. Start Frontend Development Server
\`\`\`bash
npm run dev
# Frontend running on http://localhost:3000
\`\`\`

### 3. Test Components Incrementally
- Develop one component at a time
- Test with mock data
- Validate API integration
- Move to next component

## Testing Workflow

### Phase 1: Component Development
1. **Create component** with basic structure
2. **Add mock data** for testing
3. **Test component** in isolation
4. **Validate UI/UX** with real data

### Phase 2: API Integration
1. **Connect to mock backend** (localhost:3001)
2. **Test API calls** with real endpoints
3. **Validate data flow** between frontend and backend
4. **Handle error scenarios**

### Phase 3: Integration Testing
1. **Test component interactions**
2. **Validate state management**
3. **Test routing and navigation**
4. **Validate authentication flow**

## Mock Backend Features

### Available Endpoints
- \`GET /api/health\` - Health check
- \`POST /api/auth/login\` - Authentication
- \`POST /api/auth/logout\` - Logout
- \`GET /api/:resource\` - List resources
- \`GET /api/:resource/:id\` - Get specific resource
- \`POST /api/:resource\` - Create resource
- \`PUT /api/:resource/:id\` - Update resource
- \`DELETE /api/:resource/:id\` - Delete resource
- \`POST /api/upload\` - File upload simulation
- \`GET /api/search\` - Search functionality

### Test Credentials
- **Email**: admin@example.com
- **Password**: password123

## Component Testing Examples

### Basic Component Test
\`\`\`vue
<template>
  <div class="user-card">
    <h3>{{ user.name }}</h3>
    <p>{{ user.email }}</p>
    <span class="role">{{ user.role }}</span>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>
\`\`\`

### API Integration Test
\`\`\`vue
<template>
  <div class="user-list">
    <div v-for="user in users" :key="user.id" class="user-item">
      {{ user.name }} - {{ user.email }}
    </div>
  </div>
</template>

<script>
import api from '@/utils/api';

export default {
  data() {
    return {
      users: []
    };
  },
  async mounted() {
    try {
      const response = await api.get('/users');
      this.users = response.data;
    } catch (error) {
      console.error('Failed to fetch users:', error);
    }
  }
}
</script>
\`\`\`

## Benefits

### ✅ Immediate Feedback
- Test components as they're developed
- Validate UI/UX in real-time
- Catch issues early

### ✅ Incremental Development
- Build and test one component at a time
- Validate API integration step by step
- Reduce debugging time

### ✅ Faster Development
- No waiting for complete backend
- Immediate frontend validation
- Faster iteration cycles

## Troubleshooting

### Common Issues
1. **CORS Errors**: Ensure mock backend CORS is configured
2. **Authentication Issues**: Check token format and expiration
3. **API Errors**: Verify endpoint URLs and data format
4. **Component Errors**: Check prop types and data binding

### Debug Tips
1. Use browser dev tools for API monitoring
2. Check console for error messages
3. Validate mock data structure
4. Test API endpoints independently

## Next Steps

1. **Start with basic components** and mock data
2. **Add API integration** gradually
3. **Test authentication flow** early
4. **Validate error handling** scenarios
5. **Move to Stage 6** when ready for complete testing

---

**This incremental testing approach allows you to validate frontend components throughout the development process!**
EOF

    echo "✅ Incremental testing guide created"
}

# Function to create package.json scripts
update_package_scripts() {
    echo "📦 Updating package.json scripts..."
    
    if [ -f "package.json" ]; then
        # Add incremental testing scripts
        cat >> package.json << EOF

  "scripts": {
    "test:incremental": "npm run mock:start & npm run dev",
    "mock:start": "cd mock-backend-incremental && npm start",
    "mock:dev": "cd mock-backend-incremental && npm run dev",
    "test:component": "vue-cli-service test:unit",
    "test:e2e": "vue-cli-service test:e2e"
  }
EOF
        echo "✅ Package.json scripts updated"
    else
        echo "⚠️  Package.json not found, creating sample scripts"
        cat > package-scripts-sample.json << EOF
{
  "scripts": {
    "test:incremental": "npm run mock:start & npm run dev",
    "mock:start": "cd mock-backend-incremental && npm start",
    "mock:dev": "cd mock-backend-incremental && npm run dev",
    "test:component": "vue-cli-service test:unit",
    "test:e2e": "vue-cli-service test:e2e"
  }
}
EOF
        echo "✅ Sample package scripts created"
    fi
}

# Main execution
echo "🚀 Starting incremental frontend testing setup..."

# Run all functions
create_minimal_mock_backend
create_frontend_testing_config
create_component_testing_utilities
create_incremental_testing_guide
update_package_scripts

echo "✅ Incremental frontend testing setup completed!"
echo ""
echo "📋 Summary:"
echo "✅ Minimal mock backend created in mock-backend-incremental/"
echo "✅ Frontend testing configuration created"
echo "✅ Component testing utilities created"
echo "✅ Incremental testing guide created"
echo "✅ Package.json scripts updated"
echo ""
echo "🎯 Next steps:"
echo "1. Run: npm run test:incremental"
echo "2. Start developing components incrementally"
echo "3. Test each component with mock data"
echo "4. Validate API integration step by step"
echo "5. Move to Stage 6 when ready for complete testing"
echo ""
echo "🚀 You can now test frontend components throughout the development process!"
