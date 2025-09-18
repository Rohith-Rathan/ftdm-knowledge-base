# 🎯 STAGE 1: MERMAID TEMPLATES

## **USER JOURNEY FLOW TEMPLATE**
```mermaid
graph TD
    A[User Action] --> B[System Response]
    B --> C{Decision Point}
    C -->|Yes| D[Path A]
    C -->|No| E[Path B]
    D --> F[Next Action]
    E --> F
    F --> G[End State]
```

## **SYSTEM ARCHITECTURE FLOW TEMPLATE**
```mermaid
graph TD
    A[Frontend] --> B[API Gateway]
    B --> C[Microservice 1]
    B --> D[Microservice 2]
    C --> E[Database 1]
    D --> F[Database 2]
    G[External Service] --> B
    H[Load Balancer] --> A
```

## **BUSINESS PROCESS FLOW TEMPLATE**
```mermaid
graph TD
    A[Business Event] --> B[Process Step 1]
    B --> C[Process Step 2]
    C --> D{Decision Point}
    D -->|Condition 1| E[Process A]
    D -->|Condition 2| F[Process B]
    E --> G[End State]
    F --> G
```

## **DATA FLOW DIAGRAM TEMPLATE**
```mermaid
graph TD
    A[Data Source] --> B[Data Processing]
    B --> C[Data Validation]
    C --> D[Data Storage]
    D --> E[Data Retrieval]
    E --> F[Data Presentation]
    G[User Input] --> A
    F --> H[User Output]
```

## **DECISION TREE FLOW TEMPLATE**
```mermaid
graph TD
    A[Root Decision] --> B{Condition 1?}
    B -->|Yes| C[Action A]
    B -->|No| D{Condition 2?}
    D -->|Yes| E[Action B]
    D -->|No| F{Condition 3?}
    F -->|Yes| G[Action C]
    F -->|No| H[Default Action]
```

## **GANTT CHART TEMPLATE**
```mermaid
gantt
    title Project Timeline
    dateFormat  YYYY-MM-DD
    section Phase 1
    Task 1           :a1, 2024-01-01, 30d
    Task 2           :after a1, 20d
    section Phase 2
    Task 3           :2024-02-01, 30d
    Task 4           :after a1, 25d
    section Phase 3
    Task 5           :2024-03-01, 30d
    Task 6           :after a1, 20d
```

## **CUSTOMIZATION GUIDE**

### **For User Journey Flow:**
- Replace `User Action` with specific user actions
- Replace `System Response` with actual system responses
- Add more decision points as needed
- Include error handling paths

### **For System Architecture Flow:**
- Replace `Frontend` with your frontend technology
- Replace `Microservice` with your actual services
- Add load balancers, CDNs, etc.
- Include external integrations

### **For Business Process Flow:**
- Replace `Business Event` with actual business events
- Replace `Process Step` with actual process steps
- Add business rules and constraints
- Include approval workflows

### **For Data Flow Diagram:**
- Replace `Data Source` with actual data sources
- Replace `Data Processing` with actual processing steps
- Add data transformation steps
- Include data security measures

### **For Decision Tree Flow:**
- Replace `Root Decision` with actual decision points
- Replace `Condition` with actual business conditions
- Add more decision levels as needed
- Include exception handling

### **For Gantt Chart:**
- Replace `Task` with actual project tasks
- Adjust dates based on your timeline
- Add dependencies between tasks
- Include milestones and deliverables
