#!/usr/bin/env python3
# enhanced-mermaid-generator.py
# Enhanced Mermaid Diagram Generation with Proper File Persistence

import re
import json
import os
from pathlib import Path
from datetime import datetime, timedelta

def ensure_directory_exists(directory_path):
    """Ensure directory exists, create if it doesn't"""
    Path(directory_path).mkdir(parents=True, exist_ok=True)
    return directory_path

def analyze_requirements(file_path):
    """Analyze raw requirements and extract flow information"""
    
    if not os.path.exists(file_path):
        print(f"⚠️  Warning: {file_path} not found. Using default requirements.")
        return get_default_requirements()
    
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
        'user_actions': user_actions if user_actions else ['login', 'browse', 'select', 'submit'],
        'decision_points': decision_points if decision_points else ['valid input', 'user authenticated', 'data available'],
        'validation_rules': validation_rules if validation_rules else ['input validation', 'authentication check'],
        'system_interactions': system_interactions if system_interactions else ['process request', 'store data', 'send notification'],
        'data_entities': data_entities if data_entities else ['user', 'session', 'data']
    }

def get_default_requirements():
    """Get default requirements if file doesn't exist"""
    return {
        'user_actions': ['login', 'browse', 'select', 'submit', 'review'],
        'decision_points': ['valid input', 'user authenticated', 'data available', 'permission granted'],
        'validation_rules': ['input validation', 'authentication check', 'authorization verify'],
        'system_interactions': ['process request', 'store data', 'send notification', 'update status'],
        'data_entities': ['user', 'session', 'data', 'audit_log']
    }

def generate_user_journey_diagram(actions):
    """Generate user journey Mermaid diagram"""
    
    diagram = "graph TD\n"
    
    for i, action in enumerate(actions[:6]):  # Limit to 6 actions for clarity
        node_id = chr(65 + i)
        if i == 0:
            diagram += f"    {node_id}[{action.title()}]\n"
        else:
            prev_node = chr(65 + i - 1)
            diagram += f"    {prev_node} --> {node_id}[{action.title()}]\n"
    
    return diagram

def generate_system_architecture_diagram():
    """Generate system architecture Mermaid diagram"""
    
    diagram = "graph TD\n"
    diagram += "    A[Frontend - Vue.js 3] --> B[API Gateway]\n"
    diagram += "    B --> C[Authentication Service]\n"
    diagram += "    B --> D[Business Logic Service]\n"
    diagram += "    C --> E[Azure AD]\n"
    diagram += "    D --> F[MongoDB Database]\n"
    diagram += "    G[Load Balancer] --> A\n"
    diagram += "    H[External APIs] --> B\n"
    
    return diagram

def generate_business_process_diagram(decisions):
    """Generate business process Mermaid diagram"""
    
    diagram = "graph TD\n"
    diagram += "    A[Business Event] --> B[Process Step 1]\n"
    diagram += "    B --> C{Decision Point}\n"
    
    for i, decision in enumerate(decisions[:3]):  # Limit to 3 decisions
        if i == 0:
            diagram += f"    C -->|{decision}| D[Process A]\n"
        elif i == 1:
            diagram += f"    C -->|{decision}| E[Process B]\n"
        else:
            diagram += f"    C -->|{decision}| F[Process C]\n"
    
    diagram += "    D --> G[End State]\n"
    diagram += "    E --> G\n"
    diagram += "    F --> G\n"
    
    return diagram

def generate_data_flow_diagram(entities):
    """Generate data flow Mermaid diagram"""
    
    diagram = "graph TD\n"
    diagram += "    A[Data Source] --> B[Data Processing]\n"
    diagram += "    B --> C[Data Validation]\n"
    diagram += "    C --> D[Data Storage]\n"
    diagram += "    D --> E[Data Retrieval]\n"
    diagram += "    E --> F[Data Presentation]\n"
    diagram += "    G[User Input] --> A\n"
    diagram += "    F --> H[User Output]\n"
    
    return diagram

def generate_decision_tree_diagram(decisions):
    """Generate decision tree Mermaid diagram"""
    
    diagram = "graph TD\n"
    diagram += "    A[Root Decision] --> B{Condition 1?}\n"
    
    for i, decision in enumerate(decisions[:4]):  # Limit to 4 decisions
        if i == 0:
            diagram += f"    B -->|Yes| C[Action A]\n"
            diagram += f"    B -->|No| D{{Condition 2?}}\n"
        elif i == 1:
            diagram += f"    D -->|Yes| E[Action B]\n"
            diagram += f"    D -->|No| F{{Condition 3?}}\n"
        elif i == 2:
            diagram += f"    F -->|Yes| G[Action C]\n"
            diagram += f"    F -->|No| H[Default Action]\n"
    
    return diagram

def generate_gantt_chart():
    """Generate Gantt chart for project timeline"""
    
    # Calculate dates based on current date
    start_date = datetime.now()
    
    diagram = "gantt\n"
    diagram += "    title Development Timeline\n"
    diagram += "    dateFormat  YYYY-MM-DD\n"
    diagram += "    section Phase 1 - Setup\n"
    diagram += f"    Project Setup    :a1, {start_date.strftime('%Y-%m-%d')}, 7d\n"
    diagram += f"    Authentication   :after a1, 14d\n"
    diagram += "    section Phase 2 - Core Features\n"
    diagram += f"    File Upload      :{(start_date + timedelta(days=21)).strftime('%Y-%m-%d')}, 21d\n"
    diagram += f"    AI Processing    :{(start_date + timedelta(days=42)).strftime('%Y-%m-%d')}, 28d\n"
    diagram += "    section Phase 3 - Integration\n"
    diagram += f"    Data Review      :{(start_date + timedelta(days=70)).strftime('%Y-%m-%d')}, 14d\n"
    diagram += f"    Submission       :{(start_date + timedelta(days=84)).strftime('%Y-%m-%d')}, 7d\n"
    diagram += "    section Phase 4 - Deployment\n"
    diagram += f"    Testing          :{(start_date + timedelta(days=91)).strftime('%Y-%m-%d')}, 14d\n"
    diagram += f"    Deployment       :{(start_date + timedelta(days=105)).strftime('%Y-%m-%d')}, 7d\n"
    
    return diagram

def save_diagram(directory, filename, content):
    """Save diagram content to file with verification"""
    file_path = os.path.join(directory, filename)
    
    try:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        # Verify file was created and has content
        if os.path.exists(file_path) and os.path.getsize(file_path) > 0:
            print(f"✅ Generated: {file_path}")
            return True
        else:
            print(f"❌ Failed to create: {file_path}")
            return False
            
    except Exception as e:
        print(f"❌ Error saving {file_path}: {str(e)}")
        return False

def main():
    """Main function to generate all Mermaid diagrams"""
    
    print("🎯 Enhanced Mermaid Diagram Generator")
    print("=" * 50)
    
    # Create diagrams directory
    diagrams_dir = ensure_directory_exists('Stage1_Mermaid_Generation/diagrams')
    print(f"📁 Diagrams directory: {diagrams_dir}")
    
    # Analyze requirements
    print("\n📋 Analyzing requirements...")
    requirements = analyze_requirements('raw_requirements.txt')
    
    # Generate diagrams
    print("\n🎨 Generating Mermaid diagrams...")
    diagrams = {
        'user_journey.mmd': generate_user_journey_diagram(requirements['user_actions']),
        'system_architecture.mmd': generate_system_architecture_diagram(),
        'business_process.mmd': generate_business_process_diagram(requirements['decision_points']),
        'data_flow.mmd': generate_data_flow_diagram(requirements['data_entities']),
        'decision_tree.mmd': generate_decision_tree_diagram(requirements['decision_points']),
        'gantt_chart.mmd': generate_gantt_chart()
    }
    
    # Save diagrams with verification
    print("\n💾 Saving diagrams...")
    success_count = 0
    for filename, content in diagrams.items():
        if save_diagram(diagrams_dir, filename, content):
            success_count += 1
    
    # Save analysis results
    analysis_file = os.path.join(diagrams_dir, 'analysis_results.json')
    try:
        with open(analysis_file, 'w', encoding='utf-8') as f:
            json.dump(requirements, f, indent=2)
        print(f"✅ Generated: {analysis_file}")
        success_count += 1
    except Exception as e:
        print(f"❌ Error saving analysis: {str(e)}")
    
    # Summary
    print(f"\n🎉 Mermaid diagrams generation completed!")
    print(f"📊 Successfully generated: {success_count}/{len(diagrams) + 1} files")
    print(f"📁 All files saved to: {diagrams_dir}")
    print(f"🔗 Ready for FSD integration!")
    
    # List generated files
    print(f"\n📋 Generated files:")
    for filename in diagrams.keys():
        file_path = os.path.join(diagrams_dir, filename)
        if os.path.exists(file_path):
            size = os.path.getsize(file_path)
            print(f"   ✅ {filename} ({size} bytes)")
        else:
            print(f"   ❌ {filename} (missing)")

if __name__ == "__main__":
    main()
