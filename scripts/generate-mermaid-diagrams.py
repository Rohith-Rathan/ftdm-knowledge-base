#!/usr/bin/env python3
# generate-mermaid-diagrams.py
# Automated Mermaid Diagram Generation Script

import re
import json
import os
from pathlib import Path

def analyze_requirements(file_path):
    """Analyze raw requirements and extract flow information"""
    
    with open(file_path, 'r') as f:
        content = f.read()
    
    # Extract user actions
    user_actions = re.findall(r'user\s+(?:can\s+)?(?:should\s+)?(?:must\s+)?(\w+)', content, re.IGNORECASE)
    
    # Extract decision points
    decision_points = re.findall(r'(?:if|when|whether)\s+([^,\.]+)', content, re.IGNORECASE)
    
    # Extract validation rules
    validation_rules = re.findall(r'(?:validate|check|ensure)\s+([^,\.]+)', content, re.IGNORECASE)
    
    # Extract system interactions
    system_interactions = re.findall(r'(?:system|application|app)\s+(?:should|must|can)\s+([^,\.]+)', content, re.IGNORECASE)
    
    # Extract data entities
    data_entities = re.findall(r'(?:create|store|save|update|delete)\s+([^,\.]+)', content, re.IGNORECASE)
    
    return {
        'user_actions': user_actions,
        'decision_points': decision_points,
        'validation_rules': validation_rules,
        'system_interactions': system_interactions,
        'data_entities': data_entities
    }

def generate_user_journey_diagram(actions):
    """Generate user journey Mermaid diagram"""
    
    diagram = "graph TD\n"
    
    for i, action in enumerate(actions):
        if i == 0:
            diagram += f"    A[{action.title()}]"
        else:
            diagram += f" --> {chr(65+i)}[{action.title()}]"
    
    return diagram

def generate_decision_flow_diagram(decisions):
    """Generate decision flow Mermaid diagram"""
    
    diagram = "flowchart TD\n"
    
    for i, decision in enumerate(decisions):
        diagram += f"    A[{decision}] --> B{{Decision {i+1}}}\n"
        diagram += f"    B -->|Yes| C[Action {i+1}]\n"
        diagram += f"    B -->|No| D[Alternative {i+1}]\n"
    
    return diagram

def generate_system_flow_diagram(interactions):
    """Generate system flow Mermaid diagram"""
    
    diagram = "sequenceDiagram\n"
    diagram += "    participant U as User\n"
    diagram += "    participant F as Frontend\n"
    diagram += "    participant B as Backend\n"
    diagram += "    participant D as Database\n"
    
    for interaction in interactions:
        diagram += f"    U->>F: {interaction}\n"
        diagram += f"    F->>B: API Request\n"
        diagram += f"    B->>D: Data Operation\n"
        diagram += f"    D-->>B: Response\n"
        diagram += f"    B-->>F: API Response\n"
        diagram += f"    F-->>U: UI Update\n"
    
    return diagram

def generate_data_model_diagram(entities):
    """Generate data model Mermaid diagram"""
    
    diagram = "erDiagram\n"
    
    for i, entity in enumerate(entities):
        entity_name = entity.replace(' ', '_').upper()
        diagram += f"    {entity_name} {{\n"
        diagram += f"        int id PK\n"
        diagram += f"        string name\n"
        diagram += f"        datetime created_at\n"
        diagram += f"        datetime updated_at\n"
        diagram += f"    }}\n"
    
    return diagram

def generate_api_flow_diagram():
    """Generate API flow Mermaid diagram"""
    
    diagram = "graph TD\n"
    diagram += "    A[Client Request] --> B[API Gateway]\n"
    diagram += "    B --> C[Authentication]\n"
    diagram += "    C --> D[Validation]\n"
    diagram += "    D --> E[Business Logic]\n"
    diagram += "    E --> F[Database]\n"
    diagram += "    F --> G[Response]\n"
    diagram += "    G --> H[Client]\n"
    
    return diagram

def generate_gantt_chart():
    """Generate Gantt chart for project timeline"""
    
    diagram = "gantt\n"
    diagram += "    title Development Timeline\n"
    diagram += "    dateFormat  YYYY-MM-DD\n"
    diagram += "    section Phase 1\n"
    diagram += "    Project Setup    :2024-01-01, 7d\n"
    diagram += "    Authentication   :2024-01-08, 14d\n"
    diagram += "    section Phase 2\n"
    diagram += "    File Upload      :2024-01-22, 21d\n"
    diagram += "    AI Processing    :2024-02-12, 28d\n"
    diagram += "    section Phase 3\n"
    diagram += "    Data Review      :2024-03-11, 14d\n"
    diagram += "    Submission       :2024-03-25, 7d\n"
    diagram += "    section Phase 4\n"
    diagram += "    Testing          :2024-04-01, 14d\n"
    diagram += "    Deployment       :2024-04-15, 7d\n"
    
    return diagram

def main():
    """Main function to generate all Mermaid diagrams"""
    
    # Create diagrams directory
    os.makedirs('diagrams', exist_ok=True)
    
    # Analyze requirements
    requirements = analyze_requirements('raw_requirements.txt')
    
    # Generate diagrams
    diagrams = {
        'user_journey.mmd': generate_user_journey_diagram(requirements['user_actions']),
        'decision_flow.mmd': generate_decision_flow_diagram(requirements['decision_points']),
        'system_flow.mmd': generate_system_flow_diagram(requirements['system_interactions']),
        'data_model.mmd': generate_data_model_diagram(requirements['data_entities']),
        'api_flow.mmd': generate_api_flow_diagram(),
        'gantt_chart.mmd': generate_gantt_chart()
    }
    
    # Save diagrams
    for filename, content in diagrams.items():
        with open(f'diagrams/{filename}', 'w') as f:
            f.write(content)
        print(f"✅ Generated: diagrams/{filename}")
    
    # Save analysis results
    with open('diagrams/analysis_results.json', 'w') as f:
        json.dump(requirements, f, indent=2)
    
    print("🎉 Mermaid diagrams generated successfully!")
    print("📁 Diagrams saved to: diagrams/")
    print("🔗 Ready for FSD integration!")

if __name__ == "__main__":
    main()
