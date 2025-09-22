#!/usr/bin/env python3
# enhanced-iterative-mermaid-generator.py
# Enhanced Mermaid Diagram Generation with Iterative Refinement Support

import re
import json
import os
import subprocess
import sys
from pathlib import Path
from datetime import datetime, timedelta
import argparse

def ensure_directory_exists(directory_path):
    """Ensure directory exists, create if it doesn't"""
    Path(directory_path).mkdir(parents=True, exist_ok=True)
    return directory_path

def save_requirements_to_file(requirements_text, file_path="raw_requirements.txt"):
    """Save requirements text to file for processing"""
    try:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(requirements_text)
        print(f"✅ Requirements saved to: {file_path}")
        return True
    except Exception as e:
        print(f"❌ Error saving requirements: {str(e)}")
        return False

def analyze_requirements_from_text(requirements_text):
    """Analyze requirements text directly (not from file)"""
    
    # Extract user actions
    user_actions = re.findall(r'user\s+(?:can\s+)?(?:should\s+)?(?:must\s+)?(\w+)', requirements_text, re.IGNORECASE)
    
    # Extract decision points
    decision_points = re.findall(r'(?:if|when|whether)\s+([^,\.]+)', requirements_text, re.IGNORECASE)
    
    # Extract validation rules
    validation_rules = re.findall(r'(?:validate|check|ensure)\s+([^,\.]+)', requirements_text, re.IGNORECASE)
    
    # Extract system interactions
    system_interactions = re.findall(r'(?:system|application|app)\s+(?:should|must|can)\s+([^,\.]+)', requirements_text, re.IGNORECASE)
    
    # Extract data entities
    data_entities = re.findall(r'(?:create|store|save|update|delete)\s+([^,\.]+)', requirements_text, re.IGNORECASE)
    
    # Extract business processes
    business_processes = re.findall(r'(?:process|workflow|step)\s+([^,\.]+)', requirements_text, re.IGNORECASE)
    
    # Extract integrations
    integrations = re.findall(r'(?:integrate|connect|api|service)\s+([^,\.]+)', requirements_text, re.IGNORECASE)
    
    return {
        'user_actions': user_actions if user_actions else ['login', 'browse', 'select', 'submit'],
        'decision_points': decision_points if decision_points else ['valid input', 'user authenticated', 'data available'],
        'validation_rules': validation_rules if validation_rules else ['input validation', 'authentication check'],
        'system_interactions': system_interactions if system_interactions else ['process request', 'store data', 'send notification'],
        'data_entities': data_entities if data_entities else ['user', 'session', 'data'],
        'business_processes': business_processes if business_processes else ['data processing', 'user management'],
        'integrations': integrations if integrations else ['external API', 'database']
    }

def generate_user_journey_diagram(actions, custom_flow=None):
    """Generate user journey Mermaid diagram with custom flow support"""
    
    if custom_flow:
        return custom_flow
    
    diagram = "graph TD\n"
    
    for i, action in enumerate(actions[:6]):  # Limit to 6 actions for clarity
        node_id = chr(65 + i)
        if i == 0:
            diagram += f"    {node_id}[{action.title()}]\n"
        else:
            prev_node = chr(65 + i - 1)
            diagram += f"    {prev_node} --> {node_id}[{action.title()}]\n"
    
    return diagram

def generate_system_architecture_diagram(custom_architecture=None):
    """Generate system architecture Mermaid diagram with custom support"""
    
    if custom_architecture:
        return custom_architecture
    
    diagram = "graph TD\n"
    diagram += "    A[Frontend - Vue.js 3] --> B[API Gateway]\n"
    diagram += "    B --> C[Authentication Service]\n"
    diagram += "    B --> D[Business Logic Service]\n"
    diagram += "    C --> E[Azure AD]\n"
    diagram += "    D --> F[MongoDB Database]\n"
    diagram += "    G[Load Balancer] --> A\n"
    diagram += "    H[External APIs] --> B\n"
    
    return diagram

def generate_business_process_diagram(decisions, custom_process=None):
    """Generate business process Mermaid diagram with custom support"""
    
    if custom_process:
        return custom_process
    
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

def generate_data_flow_diagram(entities, custom_flow=None):
    """Generate data flow Mermaid diagram with custom support"""
    
    if custom_flow:
        return custom_flow
    
    diagram = "graph TD\n"
    diagram += "    A[Data Source] --> B[Data Processing]\n"
    diagram += "    B --> C[Data Validation]\n"
    diagram += "    C --> D[Data Storage]\n"
    diagram += "    D --> E[Data Retrieval]\n"
    diagram += "    E --> F[Data Presentation]\n"
    diagram += "    G[User Input] --> A\n"
    diagram += "    F --> H[User Output]\n"
    
    return diagram

def generate_decision_tree_diagram(decisions, custom_tree=None):
    """Generate decision tree Mermaid diagram with custom support"""
    
    if custom_tree:
        return custom_tree
    
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

def generate_gantt_chart(custom_timeline=None):
    """Generate Gantt chart with custom timeline support"""
    
    if custom_timeline:
        return custom_timeline
    
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

def generate_images_from_mmd_files(mmd_dir, images_dir):
    """Generate images for all MMD files using online API"""
    ensure_directory_exists(images_dir)
    
    try:
        import requests
        import base64
        
        success_count = 0
        total_files = 0
        
        # Find all MMD files
        for filename in os.listdir(mmd_dir):
            if filename.endswith('.mmd'):
                total_files += 1
                mmd_path = os.path.join(mmd_dir, filename)
                
                try:
                    # Read MMD content
                    with open(mmd_path, 'r', encoding='utf-8') as f:
                        mmd_content = f.read()
                    
                    # Extract filename without extension
                    image_filename = Path(mmd_path).stem
                    output_file = os.path.join(images_dir, f"{image_filename}.png")
                    
                    # Use Mermaid online API
                    url = "https://mermaid.ink/img/" + base64.b64encode(mmd_content.encode()).decode()
                    
                    response = requests.get(url)
                    if response.status_code == 200:
                        with open(output_file, 'wb') as f:
                            f.write(response.content)
                        print(f"✅ Generated image: {output_file}")
                        success_count += 1
                    else:
                        print(f"❌ Failed to generate image for {filename}: HTTP {response.status_code}")
                        
                except Exception as e:
                    print(f"❌ Error generating image for {filename}: {str(e)}")
        
        print(f"📊 Image generation: {success_count}/{total_files} files")
        return success_count > 0
        
    except ImportError:
        print("❌ requests library not available for image generation")
        return False
    except Exception as e:
        print(f"❌ Error in image generation: {str(e)}")
        return False

def generate_diagrams_iterative(requirements_text, custom_diagrams=None, output_dir="Stage1_Mermaid_Generation/diagrams"):
    """Generate diagrams with support for custom modifications"""
    
    print("🎯 Enhanced Iterative Mermaid Diagram Generator")
    print("=" * 50)
    
    # Create diagrams directory
    diagrams_dir = ensure_directory_exists(output_dir)
    print(f"📁 Diagrams directory: {diagrams_dir}")
    
    # Analyze requirements
    print("\n📋 Analyzing requirements...")
    requirements = analyze_requirements_from_text(requirements_text)
    
    # Use custom diagrams if provided, otherwise generate from requirements
    diagrams = {}
    
    if custom_diagrams:
        print("🎨 Using custom diagram modifications...")
        diagrams = custom_diagrams
    else:
        print("🎨 Generating diagrams from requirements...")
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
    
    # Save requirements and analysis
    save_requirements_to_file(requirements_text, os.path.join(diagrams_dir, 'current_requirements.txt'))
    
    analysis_file = os.path.join(diagrams_dir, 'analysis_results.json')
    try:
        with open(analysis_file, 'w', encoding='utf-8') as f:
            json.dump(requirements, f, indent=2)
        print(f"✅ Generated: {analysis_file}")
        success_count += 1
    except Exception as e:
        print(f"❌ Error saving analysis: {str(e)}")
    
    # Generate images from MMD files
    print("\n🖼️  Generating images from MMD files...")
    images_dir = os.path.join(diagrams_dir, 'images')
    image_success = generate_images_from_mmd_files(diagrams_dir, images_dir)
    
    # Summary
    print(f"\n🎉 Mermaid diagrams generation completed!")
    print(f"📊 Successfully generated: {success_count}/{len(diagrams) + 1} MMD files")
    if image_success:
        print(f"🖼️  Successfully generated: Image files in {images_dir}")
    else:
        print(f"⚠️  Image generation failed - MMD files available for manual conversion")
    print(f"📁 All files saved to: {diagrams_dir}")
    print(f"🔗 Ready for FSD integration!")
    
    return success_count > 0

def main():
    """Main function with command line argument support"""
    parser = argparse.ArgumentParser(description='Enhanced Iterative Mermaid Diagram Generator')
    parser.add_argument('--requirements', '-r', help='Requirements text or file path')
    parser.add_argument('--custom-diagrams', '-c', help='JSON file with custom diagram modifications')
    parser.add_argument('--output-dir', '-o', default='Stage1_Mermaid_Generation/diagrams', help='Output directory')
    
    args = parser.parse_args()
    
    # Get requirements
    if args.requirements:
        if os.path.exists(args.requirements):
            with open(args.requirements, 'r', encoding='utf-8') as f:
                requirements_text = f.read()
        else:
            requirements_text = args.requirements
    else:
        # Default requirements
        requirements_text = """
        User can login to the system
        User can browse available options
        User can select items
        User can submit requests
        System should validate user input
        System should process requests
        System should store data
        """
    
    # Get custom diagrams if provided
    custom_diagrams = None
    if args.custom_diagrams and os.path.exists(args.custom_diagrams):
        try:
            with open(args.custom_diagrams, 'r', encoding='utf-8') as f:
                custom_diagrams = json.load(f)
        except Exception as e:
            print(f"❌ Error loading custom diagrams: {str(e)}")
    
    # Generate diagrams
    generate_diagrams_iterative(requirements_text, custom_diagrams, args.output_dir)

if __name__ == "__main__":
    main()
