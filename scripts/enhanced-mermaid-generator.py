#!/usr/bin/env python3
# enhanced-mermaid-generator.py
# Enhanced Mermaid Diagram Generation with Proper File Persistence and Image Generation

import re
import json
import os
import subprocess
import sys
from pathlib import Path
from datetime import datetime, timedelta

def ensure_directory_exists(directory_path):
    """Ensure directory exists, create if it doesn't"""
    Path(directory_path).mkdir(parents=True, exist_ok=True)
    return directory_path

def check_mermaid_cli():
    """Check if Mermaid CLI is available"""
    try:
        # First try global installation
        result = subprocess.run(['mmdc', '--version'], capture_output=True, text=True)
        if result.returncode == 0:
            return True, 'global'
    except FileNotFoundError:
        pass
    
    try:
        # Then try local installation via npx
        result = subprocess.run(['npx', 'mmdc', '--version'], capture_output=True, text=True)
        if result.returncode == 0:
            return True, 'local'
    except FileNotFoundError:
        pass
    
    return False, None

def install_mermaid_cli():
    """Install Mermaid CLI if not available"""
    try:
        print("📦 Installing Mermaid CLI locally...")
        subprocess.run(['npm', 'install', '@mermaid-js/mermaid-cli'], check=True)
        print("✅ Mermaid CLI installed successfully!")
        return True
    except subprocess.CalledProcessError:
        print("❌ Failed to install Mermaid CLI")
        return False

def generate_image_from_mmd(mmd_file_path, output_dir, cli_type='local'):
    """Generate PNG image from MMD file using Mermaid CLI"""
    try:
        # Extract filename without extension
        filename = Path(mmd_file_path).stem
        output_file = os.path.join(output_dir, f"{filename}.png")
        
        # Choose command based on installation type
        if cli_type == 'global':
            cmd = ['mmdc', '-i', mmd_file_path, '-o', output_file, '-t', 'neutral', '-b', 'white']
        else:
            cmd = ['npx', 'mmdc', '-i', mmd_file_path, '-o', output_file, '-t', 'neutral', '-b', 'white']
        
        result = subprocess.run(cmd, capture_output=True, text=True)
        
        if result.returncode == 0:
            print(f"✅ Generated image: {output_file}")
            return True
        else:
            print(f"❌ Failed to generate image: {result.stderr}")
            return False
            
    except Exception as e:
        print(f"❌ Error generating image: {str(e)}")
        return False

def generate_image_from_mmd_online(mmd_file_path, output_dir):
    """Generate PNG image from MMD file using online Mermaid API (fallback)"""
    try:
        import requests
        import base64
        
        # Read MMD content
        with open(mmd_file_path, 'r', encoding='utf-8') as f:
            mmd_content = f.read()
        
        # Extract filename without extension
        filename = Path(mmd_file_path).stem
        output_file = os.path.join(output_dir, f"{filename}.png")
        
        # Use Mermaid online API
        url = "https://mermaid.ink/img/" + base64.b64encode(mmd_content.encode()).decode()
        
        response = requests.get(url)
        if response.status_code == 200:
            with open(output_file, 'wb') as f:
                f.write(response.content)
            print(f"✅ Generated image (online): {output_file}")
            return True
        else:
            print(f"❌ Failed to generate image online: HTTP {response.status_code}")
            return False
            
    except ImportError:
        print("❌ requests library not available for online image generation")
        return False
    except Exception as e:
        print(f"❌ Error generating image online: {str(e)}")
        return False

def generate_images_from_mmd_files(mmd_dir, images_dir):
    """Generate images for all MMD files"""
    ensure_directory_exists(images_dir)
    
    print(f"🔍 Looking for MMD files in: {mmd_dir}")
    print(f"📁 Images will be saved to: {images_dir}")
    
    # Check if Mermaid CLI is available
    cli_available, cli_type = check_mermaid_cli()
    print(f"🎨 Mermaid CLI status: {'Available' if cli_available else 'Not available'} ({cli_type})")
    
    if not cli_available:
        print("⚠️  Mermaid CLI not found. Attempting to install...")
        if not install_mermaid_cli():
            print("⚠️  CLI installation failed. Trying online method...")
            return generate_images_online(mmd_dir, images_dir)
        cli_type = 'local'  # After local installation
        print("✅ Mermaid CLI installed successfully")
    
    success_count = 0
    total_files = 0
    
    # Find all MMD files
    if not os.path.exists(mmd_dir):
        print(f"❌ MMD directory does not exist: {mmd_dir}")
        return False
        
    mmd_files = [f for f in os.listdir(mmd_dir) if f.endswith('.mmd')]
    print(f"📋 Found {len(mmd_files)} MMD files: {mmd_files}")
    
    for filename in mmd_files:
        total_files += 1
        mmd_path = os.path.join(mmd_dir, filename)
        print(f"🖼️  Processing: {filename}")
        if generate_image_from_mmd(mmd_path, images_dir, cli_type):
            success_count += 1
        else:
            print(f"⚠️  Failed to generate image for: {filename}")
    
    print(f"📊 Image generation: {success_count}/{total_files} files")
    return success_count > 0

def generate_images_online(mmd_dir, images_dir):
    """Generate images using online Mermaid API as fallback"""
    try:
        import requests
        print("🌐 Using online Mermaid API for image generation...")
        
        success_count = 0
        total_files = 0
        
        # Find all MMD files
        for filename in os.listdir(mmd_dir):
            if filename.endswith('.mmd'):
                total_files += 1
                mmd_path = os.path.join(mmd_dir, filename)
                if generate_image_from_mmd_online(mmd_path, images_dir):
                    success_count += 1
        
        print(f"📊 Online image generation: {success_count}/{total_files} files")
        return success_count > 0
        
    except ImportError:
        print("❌ Cannot generate images - neither CLI nor online method available")
        print("💡 Install requests: pip install requests")
        return False

def analyze_requirements(file_path):
    """Analyze raw requirements and extract flow information"""
    
    if not os.path.exists(file_path):
        print(f"⚠️  Warning: {file_path} not found. Using default requirements.")
        return get_default_requirements()
    
    with open(file_path, 'r') as f:
        content = f.read()
    
    # Extract user actions
    user_actions = re.findall(r'user\s+(?:can\s+)?(?:should\s+)?(?:must\s+)?(\w+)', content, re.IGNORECASE)
    
    # Extract decision points (improved regex)
    decision_points = re.findall(r'(?:if|when|whether)\s+([^,\.\n]+)', content, re.IGNORECASE)
    
    # Clean up decision points
    decision_points = [d.strip() for d in decision_points if d.strip() and len(d.strip()) > 3]
    
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

def sanitize_mermaid_text(text):
    """Sanitize text for Mermaid diagram compatibility"""
    if not text:
        return "condition"
    
    # Remove newlines and extra whitespace
    text = re.sub(r'\s+', ' ', text.strip())
    
    # Limit length to prevent diagram issues
    if len(text) > 30:
        text = text[:27] + "..."
    
    # Escape special Mermaid characters
    text = text.replace('"', "'").replace('\n', ' ').replace('\r', ' ')
    
    # Remove any remaining problematic characters
    text = re.sub(r'[^\w\s\-\.]', '', text)
    
    return text or "condition"

def generate_business_process_diagram(decisions):
    """Generate business process Mermaid diagram"""
    
    diagram = "graph TD\n"
    diagram += "    A[Business Event] --> B[Process Step 1]\n"
    diagram += "    B --> C{Decision Point}\n"
    
    # Use sanitized decisions
    sanitized_decisions = [sanitize_mermaid_text(d) for d in decisions[:3]]
    
    for i, decision in enumerate(sanitized_decisions):
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

def find_requirements_file():
    """Find the requirements file in Stage1_Mermaid_Generation directory"""
    stage1_dir = 'Stage1_Mermaid_Generation'
    
    # Common requirement file patterns
    patterns = [
        'raw-requirement.md',
        'requirements.md', 
        'raw_requirements.txt',
        'requirements.txt',
        'my-requirements.md',
        'project-requirements.md'
    ]
    
    # Look for files matching patterns
    for pattern in patterns:
        file_path = os.path.join(stage1_dir, pattern)
        if os.path.exists(file_path):
            return file_path
    
    # Look for any .md or .txt file in Stage1_Mermaid_Generation
    if os.path.exists(stage1_dir):
        for filename in os.listdir(stage1_dir):
            if filename.endswith(('.md', '.txt')) and not filename.startswith(('mermaid_', 'kickoff_', 'stage1_', 'troubleshooting', 'user_guide', 'validation_')):
                return os.path.join(stage1_dir, filename)
    
    # Default fallback
    return 'raw_requirements.txt'

def main():
    """Main function to generate all Mermaid diagrams"""
    
    print("🎯 Enhanced Mermaid Diagram Generator")
    print("=" * 50)
    
    # Create diagrams directory
    diagrams_dir = ensure_directory_exists('Stage1_Mermaid_Generation/diagrams')
    print(f"📁 Diagrams directory: {diagrams_dir}")
    
    # Find requirements file
    requirements_file = find_requirements_file()
    print(f"📋 Using requirements file: {requirements_file}")
    
    # Analyze requirements
    print("\n📋 Analyzing requirements...")
    requirements = analyze_requirements(requirements_file)
    
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
    
    # List generated files
    print(f"\n📋 Generated MMD files:")
    for filename in diagrams.keys():
        file_path = os.path.join(diagrams_dir, filename)
        if os.path.exists(file_path):
            size = os.path.getsize(file_path)
            print(f"   ✅ {filename} ({size} bytes)")
        else:
            print(f"   ❌ {filename} (missing)")
    
    # List generated image files
    if os.path.exists(images_dir):
        print(f"\n🖼️  Generated image files:")
        for filename in os.listdir(images_dir):
            if filename.endswith('.png'):
                file_path = os.path.join(images_dir, filename)
                size = os.path.getsize(file_path)
                print(f"   ✅ {filename} ({size} bytes)")
    
    return success_count > 0

if __name__ == "__main__":
    main()
