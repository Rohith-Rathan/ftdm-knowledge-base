'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { 
  FileText, 
  Copy, 
  CheckCircle, 
  ArrowRight,
  Code,
  Play,
  FolderOpen,
  Edit3
} from 'lucide-react'

export function Stage1Kickoff() {
  const [copied, setCopied] = useState<string | null>(null)

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }

  const requirementsTemplate = `# My Application Requirements

## Project Overview
[Describe your project in 2-3 sentences]

## Core Features
- Feature 1: [Description]
- Feature 2: [Description]
- Feature 3: [Description]

## User Roles
- Role 1: [Description]
- Role 2: [Description]

## Business Goals
- Goal 1: [Description]
- Goal 2: [Description]

## Technical Requirements
- Platform: [Web/Mobile/Desktop]
- Performance: [Any specific requirements]
- Integrations: [External systems needed]

## Additional Context
[Any other important information]`

  const kickoffCommand = `Hi, take the prompt from @mermaid_generation_prompt.md and read the requirements from @[YOUR_FILE_NAME]`

  return (
    <section id="stage1-kickoff" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-16"
      >
        {/* Header */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-500/10 dark:bg-blue-500/20 border border-blue-500/20 dark:border-blue-500/30 text-foreground text-sm font-medium">
            <FileText className="w-5 h-5 mr-3 text-blue-400" />
            Stage 1 Kickoff Guide
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              How to Start Stage 1
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-full sm:max-w-3xl mx-auto">
            Follow these step-by-step instructions to kickoff Stage 1 and generate your Mermaid diagrams
          </p>
        </div>

        {/* Main Instruction Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card/50 rounded-2xl border border-border p-8 shadow-sm hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
        >
          <div className="space-y-8">
            {/* Introduction */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground flex items-center">
                <FileText className="h-6 w-6 mr-3 text-blue-500" />
                Complete Step-by-Step Instructions
              </h3>
              <p className="text-lg text-muted-foreground">
                This guide will walk you through the entire process of starting Stage 1. By the end, you'll have generated 6 comprehensive Mermaid diagrams with visual previews and persistent files.
              </p>
            </div>

            {/* Step 1 */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white text-sm font-bold">
                  1
                </div>
                <h4 className="text-xl font-bold text-foreground">Create Your Requirements File</h4>
              </div>
              
              <div className="ml-11 space-y-3">
                <p className="text-muted-foreground">
                  First, you need to create a file containing your project requirements. This file will be used by Stage 1 to generate your custom diagrams.
                </p>
                
                <div className="bg-muted/50 rounded-lg p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <h5 className="font-semibold text-foreground flex items-center">
                      <FolderOpen className="h-4 w-4 mr-2 text-blue-500" />
                      Where to create the file:
                    </h5>
                  </div>
                  <code className="block text-sm text-foreground bg-background/50 p-2 rounded border">
                    Stage1_Mermaid_Generation/your-requirements.md
                  </code>
                  <p className="text-sm text-muted-foreground">
                    You can name the file anything you want (e.g., <code className="bg-background/50 px-1 rounded">my-app-requirements.md</code>, <code className="bg-background/50 px-1 rounded">project-specs.md</code>, etc.)
                  </p>
                </div>

                <div className="bg-muted/50 rounded-lg p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <h5 className="font-semibold text-foreground flex items-center">
                      <Edit3 className="h-4 w-4 mr-2 text-green-500" />
                      What to write in the file:
                    </h5>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard(requirementsTemplate, 'template')}
                      className="flex items-center space-x-2"
                    >
                      <Copy className="h-4 w-4" />
                      <span>{copied === 'template' ? 'Copied!' : 'Copy Template'}</span>
                    </Button>
                  </div>
                  <div className="bg-background/50 rounded p-3 overflow-x-auto">
                    <pre className="text-sm text-foreground whitespace-pre-wrap">
                      {requirementsTemplate}
                    </pre>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Use this template as a starting point. Fill in the bracketed sections with your actual project details.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-white text-sm font-bold">
                  2
                </div>
                <h4 className="text-xl font-bold text-foreground">Update the Prompt File</h4>
              </div>
              
              <div className="ml-11 space-y-3">
                <p className="text-muted-foreground">
                  Now you need to tell the Stage 1 prompt where to find your requirements file.
                </p>
                
                <div className="bg-muted/50 rounded-lg p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <h5 className="font-semibold text-foreground flex items-center">
                      <Code className="h-4 w-4 mr-2 text-green-500" />
                      What to do:
                    </h5>
                  </div>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                    <li>Open the file <code className="bg-background/50 px-1 rounded">Stage1_Mermaid_Generation/mermaid_generation_prompt.md</code></li>
                    <li>Find the line that says <code className="bg-background/50 px-1 rounded">## **MY RAW REQUIREMENTS**</code></li>
                    <li>Look for <code className="bg-background/50 px-1 rounded">[USER_PROVIDES_RAW_REQUIREMENTS]</code></li>
                    <li>Replace it with your file name using @ syntax</li>
                  </ol>
                  
                  <div className="bg-background/50 rounded p-3">
                    <p className="text-sm text-muted-foreground mb-2">Example:</p>
                    <code className="text-sm text-foreground">
                      @my-app-requirements.md
                    </code>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">
                    Use the @ syntax with just the filename (no path needed).
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-white text-sm font-bold">
                  3
                </div>
                <h4 className="text-xl font-bold text-foreground">Execute Stage 1</h4>
              </div>
              
              <div className="ml-11 space-y-3">
                <p className="text-muted-foreground">
                  Now you're ready to start Stage 1! This will generate your Mermaid diagrams automatically.
                </p>
                
                <div className="bg-muted/50 rounded-lg p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <h5 className="font-semibold text-foreground flex items-center">
                      <Play className="h-4 w-4 mr-2 text-purple-500" />
                      How to start:
                    </h5>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard(kickoffCommand, 'command')}
                      className="flex items-center space-x-2"
                    >
                      <Copy className="h-4 w-4" />
                      <span>{copied === 'command' ? 'Copied!' : 'Copy Command'}</span>
                    </Button>
                  </div>
                  
                  <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                    <li>Open Cursor AI chat</li>
                    <li>Copy the command below (replace [YOUR_FILE_NAME] with your actual filename)</li>
                    <li>Paste it in the chat</li>
                    <li>Press Enter to send</li>
                  </ol>
                  
                  <div className="bg-background/50 rounded p-3">
                    <code className="text-lg text-foreground font-mono">
                      Hi, take the prompt from @mermaid_generation_prompt.md and read the requirements from @[YOUR_FILE_NAME]
                    </code>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">
                    Replace <code className="bg-background/50 px-1 rounded">[YOUR_FILE_NAME]</code> with your actual filename (e.g., <code className="bg-background/50 px-1 rounded">@my-app-requirements.md</code>)
                  </p>
                  
                  <p className="text-sm text-muted-foreground">
                    Stage 1 will then ask you 3 clarifying questions about your project. Answer them, and it will generate your diagrams!
                  </p>
                </div>
              </div>
            </div>

            {/* What Happens Next */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-foreground flex items-center">
                <CheckCircle className="h-6 w-6 mr-3 text-green-500" />
                What Happens After You Execute Stage 1
              </h4>
              
              <div className="ml-11 space-y-3">
                <p className="text-muted-foreground">
                  Once you run the command, Stage 1 will automatically:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h5 className="font-semibold text-foreground">Generated Files:</h5>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      <li>6 Mermaid diagram files (.mmd)</li>
                      <li>6 PNG image files</li>
                      <li>Requirements analysis file</li>
                      <li>Generation report</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-semibold text-foreground">Visual Previews:</h5>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      <li>User Journey Flow</li>
                      <li>System Architecture</li>
                      <li>Business Process Flow</li>
                      <li>Data Flow Diagram</li>
                      <li>Decision Tree</li>
                      <li>Project Timeline</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
