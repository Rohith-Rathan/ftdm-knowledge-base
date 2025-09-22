'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { 
  FileText, 
  Copy, 
  CheckCircle, 
  ArrowRight,
  Download,
  Code,
  Eye,
  Play
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

  const kickoffCommand = `Hi, take the prompt from @mermaid_generation_prompt.md`

  const steps = [
    {
      step: 1,
      title: 'Create Requirements File',
      description: 'Create a requirements file in the Stage1_Mermaid_Generation folder',
      details: [
        'Create a file named `raw-requirement.md` (or any name you prefer)',
        'Write your raw requirements using the template below',
        'Save it in the `Stage1_Mermaid_Generation/` folder',
        'Example: `Stage1_Mermaid_Generation/my-app-requirements.md`'
      ],
      icon: FileText,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      step: 2,
      title: 'Update Prompt File',
      description: 'Update the mermaid_generation_prompt.md with your file path',
      details: [
        'Open `mermaid_generation_prompt.md`',
        'Find the line: `## **MY RAW REQUIREMENTS**`',
        'Replace `[USER_PROVIDES_RAW_REQUIREMENTS]` with your file path',
        'Example: `Stage1_Mermaid_Generation/my-app-requirements.md`'
      ],
      icon: Code,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      step: 3,
      title: 'Execute Stage 1',
      description: 'Copy and paste the kickoff command in Cursor',
      details: [
        'Copy the kickoff command below',
        'Paste it in Cursor AI chat',
        'Answer the 3 clarifying questions',
        'Review and refine the generated diagrams'
      ],
      icon: Play,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    }
  ]

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
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-foreground text-sm font-medium">
            <FileText className="w-5 h-5 mr-3 text-blue-400" />
            Stage 1 Kickoff Guide
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              How to Start Stage 1
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Follow this simple 3-step process to kickoff Stage 1 and generate your Mermaid diagrams
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-6 rounded-2xl border border-border bg-card/50 hover:bg-card transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="relative space-y-6">
                {/* Step Number */}
                <div className="flex items-center justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xl font-bold shadow-md group-hover:shadow-lg group-hover:shadow-blue-500/15 transition-all duration-300">
                    {step.step}
                  </div>
                  <step.icon className={`h-8 w-8 ${step.color} group-hover:scale-110 transition-transform duration-300`} />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-blue-600 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-lg text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {step.description}
                  </p>
                  
                  {/* Details */}
                  <div className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <motion.div
                        key={detailIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: (index * 0.1) + (detailIndex * 0.05) }}
                        className="flex items-start space-x-3"
                      >
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                          {detail}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Code Examples */}
        <div className="space-y-8">
          {/* Requirements Template */}
          <div className="bg-card/50 rounded-xl border border-border p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-foreground flex items-center">
                <FileText className="h-6 w-6 mr-2 text-blue-500" />
                Requirements File Template
              </h3>
              <Button
                variant="outline"
                size="sm"
                onClick={() => copyToClipboard(requirementsTemplate, 'template')}
                className="flex items-center space-x-2"
              >
                <Copy className="h-4 w-4" />
                <span>{copied === 'template' ? 'Copied!' : 'Copy'}</span>
              </Button>
            </div>
            <div className="bg-muted/50 rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm text-foreground whitespace-pre-wrap">
                {requirementsTemplate}
              </pre>
            </div>
          </div>

          {/* Kickoff Command */}
          <div className="bg-card/50 rounded-xl border border-border p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-foreground flex items-center">
                <Play className="h-6 w-6 mr-2 text-purple-500" />
                Kickoff Command
              </h3>
              <Button
                variant="outline"
                size="sm"
                onClick={() => copyToClipboard(kickoffCommand, 'command')}
                className="flex items-center space-x-2"
              >
                <Copy className="h-4 w-4" />
                <span>{copied === 'command' ? 'Copied!' : 'Copy'}</span>
              </Button>
            </div>
            <div className="bg-muted/50 rounded-lg p-4">
              <code className="text-lg text-foreground font-mono">
                {kickoffCommand}
              </code>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Copy this command and paste it in Cursor AI chat to start Stage 1
            </p>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-border p-8">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Why This Approach Works
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: FileText, title: 'Clean Separation', desc: 'Requirements separate from prompt logic' },
              { icon: Code, title: 'Reusable', desc: 'Same prompt works for any project' },
              { icon: Eye, title: 'Organized', desc: 'Easy to manage multiple projects' },
              { icon: Download, title: 'Professional', desc: 'Follows documentation best practices' }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center space-y-3"
              >
                <div className="flex justify-center">
                  <div className="p-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20">
                    <benefit.icon className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <h4 className="font-semibold text-foreground">{benefit.title}</h4>
                <p className="text-sm text-muted-foreground">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Next Steps */}
        <div className="text-center space-y-6">
          <h3 className="text-2xl font-bold text-foreground">
            Ready to Generate Your Diagrams?
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Follow the 3 steps above, and Stage 1 will automatically generate 6 comprehensive Mermaid diagrams with visual previews and persistent files.
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Visual Previews</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>MMD Files</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>PNG Images</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Iterative Refinement</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
