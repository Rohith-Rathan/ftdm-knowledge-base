# 🔧 Mermaid Image Generation Troubleshooting Guide

## **Common Issues and Solutions**

### **Issue 1: Images Not Saving to Images Folder**

#### **Symptoms:**
- MMD files are generated successfully
- No PNG files appear in `Stage1_Mermaid_Generation/diagrams/images/`
- Error messages about image generation failure

#### **Root Causes & Solutions:**

**1. Missing Dependencies**
```bash
# Check if Node.js is installed
node --version
npm --version

# If not installed, install Node.js from https://nodejs.org/
```

**2. Mermaid CLI Not Available**
```bash
# Check if Mermaid CLI is installed globally
mmdc --version

# Check if available via npx
npx mmdc --version

# Install locally if needed
npm install @mermaid-js/mermaid-cli
```

**3. Python Dependencies Missing**
```bash
# Install required Python packages
pip install requests

# Or if using pip3
pip3 install requests
```

**4. File Permissions**
```bash
# Ensure scripts are executable
chmod +x scripts/enhanced-mermaid-generator.py
chmod +x scripts/stage1-complete-workflow.sh
```

### **Issue 2: Requirements File Not Found**

#### **Symptoms:**
- Script runs but uses default requirements
- Warning: "raw_requirements.txt not found"

#### **Solutions:**

**1. Check File Name**
The script now automatically detects these file names:
- `raw-requirement.md`
- `requirements.md`
- `raw_requirements.txt`
- `requirements.txt`
- `my-requirements.md`
- `project-requirements.md`

**2. Use Correct Location**
Place your requirements file in:
```
Stage1_Mermaid_Generation/your-file-name.md
```

### **Issue 3: Network Issues (Online Fallback)**

#### **Symptoms:**
- CLI installation fails
- Online image generation fails
- "Cannot generate images" error

#### **Solutions:**

**1. Check Internet Connection**
```bash
# Test connectivity to Mermaid online API
curl -I https://mermaid.ink/
```

**2. Install Requests Module**
```bash
pip install requests
# or
pip3 install requests
```

**3. Manual Image Generation**
If all else fails, you can manually convert MMD files:
```bash
# Using online tool
# 1. Open https://mermaid.live/
# 2. Copy content from .mmd file
# 3. Export as PNG
# 4. Save to Stage1_Mermaid_Generation/diagrams/images/
```

## **Diagnostic Steps**

### **Step 1: Run Diagnostic Script**
```bash
# From EFTDM_FRAMEWORK root directory
./scripts/test-mermaid-generation.sh
```

This will check:
- ✅ Python availability
- ✅ Required modules
- ✅ Node.js and npm
- ✅ Mermaid CLI
- ✅ Directory structure
- ✅ Script execution

### **Step 2: Test Image Generation Manually**
```bash
# Create a test MMD file
echo 'graph TD
    A[Start] --> B[Process]
    B --> C[End]' > test.mmd

# Try to generate image
npx mmdc -i test.mmd -o test.png

# Check if image was created
ls -la test.png
```

### **Step 3: Check Framework Execution**
```bash
# Run the complete workflow
./scripts/stage1-complete-workflow.sh
```

## **Expected Output**

### **Successful Image Generation:**
```
🎨 Mermaid CLI status: Available (local)
📋 Found 6 MMD files: ['user_journey.mmd', 'system_architecture.mmd', ...]
🖼️  Processing: user_journey.mmd
✅ Generated image: Stage1_Mermaid_Generation/diagrams/images/user_journey.png
🖼️  Processing: system_architecture.mmd
✅ Generated image: Stage1_Mermaid_Generation/diagrams/images/system_architecture.png
...
📊 Image generation: 6/6 files
```

### **Failed Image Generation:**
```
❌ MMD directory does not exist: Stage1_Mermaid_Generation/diagrams
⚠️  Mermaid CLI not found. Attempting to install...
❌ Failed to install Mermaid CLI
⚠️  CLI installation failed. Trying online method...
❌ Cannot generate images - neither CLI nor online method available
```

## **Quick Fixes**

### **Fix 1: Install Missing Dependencies**
```bash
# Install Node.js (if not installed)
# Download from https://nodejs.org/

# Install Mermaid CLI locally
npm install @mermaid-js/mermaid-cli

# Install Python requests
pip install requests
```

### **Fix 2: Reset Directory Structure**
```bash
# Remove old diagrams
rm -rf Stage1_Mermaid_Generation/diagrams

# Recreate structure
mkdir -p Stage1_Mermaid_Generation/diagrams/images

# Run workflow again
./scripts/stage1-complete-workflow.sh
```

### **Fix 3: Manual Image Generation**
If automated generation fails:

1. **Open MMD files** in a text editor
2. **Copy content** from each .mmd file
3. **Go to** https://mermaid.live/
4. **Paste content** into the editor
5. **Export as PNG** and save to `Stage1_Mermaid_Generation/diagrams/images/`

## **Prevention**

### **Before Running Stage 1:**
1. ✅ Ensure Node.js is installed
2. ✅ Run diagnostic script: `./scripts/test-mermaid-generation.sh`
3. ✅ Fix any ❌ errors before proceeding
4. ✅ Place requirements file in correct location

### **After Running Stage 1:**
1. ✅ Check that MMD files are generated
2. ✅ Check that PNG files are generated
3. ✅ Verify files are in correct directories
4. ✅ Test opening PNG files to ensure they're valid

## **Still Having Issues?**

If you're still experiencing problems:

1. **Run the diagnostic script** and share the output
2. **Check your system requirements**:
   - macOS/Linux/Windows
   - Python version
   - Node.js version
   - Available disk space
3. **Try manual image generation** as a workaround
4. **Check the framework logs** for specific error messages

The framework is designed to be robust with multiple fallback methods, but system-specific issues can sometimes occur.
