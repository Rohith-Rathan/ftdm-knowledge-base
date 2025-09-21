'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Download, 
  Folder, 
  File, 
  Lock, 
  Eye, 
  EyeOff,
  ArrowLeft,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FrameworkDownloadProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FileItem {
  name: string;
  type: 'file' | 'folder';
  children?: FileItem[];
}

const frameworkStructure: FileItem[] = [
  {
    name: 'EFTDM_FRAMEWORK',
    type: 'folder',
    children: [
      {
        name: 'frameworks',
        type: 'folder',
        children: [
          { name: 'all_stage_prompts', type: 'folder' },
          { name: 'anti_hallucination_safeguards.md', type: 'file' },
          { name: 'comprehensive_error_prevention_system.md', type: 'file' },
          { name: 'design_asset_support_guide.md', type: 'file' },
          { name: 'domain_intelligence_framework.md', type: 'file' },
          { name: 'domain_intelligence_integration.md', type: 'file' },
          { name: 'domain_intelligence_prompts.md', type: 'file' },
          { name: 'domain_intelligence_validation.md', type: 'file' },
          { name: 'enhanced_quality_gates.md', type: 'file' },
          { name: 'figma_mcp_integration_framework.md', type: 'file' },
          { name: 'interactive_requirement_example.md', type: 'file' },
          { name: 'interactive_requirement_refinement.md', type: 'file' },
          { name: 'kickstart_prompt.md', type: 'file' },
          { name: 'mermaid_integration_framework.md', type: 'file' },
          { name: 'phase_progression_controller.md', type: 'file' },
          { name: 'real_time_testing_framework.md', type: 'file' },
          { name: 'rtsd_creation_methodology.md', type: 'file' },
          { name: 'rtsd_creation_prompt.md', type: 'file' },
          { name: 'senior_developer_kickstart_prompt.md', type: 'file' },
          { name: 'uxd_folder_structure_guide.md', type: 'file' },
          { name: 'uxd_image_analysis_framework.md', type: 'file' }
        ]
      },
      {
        name: 'scripts',
        type: 'folder',
        children: [
          { name: 'stage1-asset-migration.sh', type: 'file' },
          { name: 'stage2-asset-migration.sh', type: 'file' },
          { name: 'stage3-asset-migration.sh', type: 'file' },
          { name: 'stage4-asset-migration.sh', type: 'file' },
          { name: 'stage5-asset-migration.sh', type: 'file' },
          { name: 'stage6-asset-migration.sh', type: 'file' },
          { name: 'stage7-asset-migration.sh', type: 'file' },
          { name: 'framework-setup.sh', type: 'file' },
          { name: 'project-initialization.sh', type: 'file' },
          { name: 'validation-scripts.sh', type: 'file' },
          { name: 'deployment-scripts.sh', type: 'file' },
          { name: 'testing-scripts.sh', type: 'file' },
          { name: 'cleanup-scripts.sh', type: 'file' },
          { name: 'backup-scripts.sh', type: 'file' },
          { name: 'monitoring-scripts.sh', type: 'file' },
          { name: 'security-scripts.sh', type: 'file' },
          { name: 'performance-scripts.sh', type: 'file' },
          { name: 'documentation-scripts.sh', type: 'file' },
          { name: 'integration-scripts.sh', type: 'file' },
          { name: 'maintenance-scripts.sh', type: 'file' },
          { name: 'utility-scripts.sh', type: 'file' },
          { name: 'automation-scripts.sh', type: 'file' },
          { name: 'quality-scripts.sh', type: 'file' },
          { name: 'compliance-scripts.sh', type: 'file' },
          { name: 'reporting-scripts.sh', type: 'file' },
          { name: 'notification-scripts.sh', type: 'file' },
          { name: 'sync-scripts.sh', type: 'file' },
          { name: 'migration-scripts.py', type: 'file' },
          { name: 'validation-scripts.py', type: 'file' },
          { name: 'analysis-scripts.py', type: 'file' }
        ]
      },
        {
          name: 'Stage1_Mermaid_Generation',
          type: 'folder',
          children: [
            { name: 'mermaid_generation_prompt.md', type: 'file' },
            { name: 'README.md', type: 'file' },
            { name: 'user_guide.md', type: 'file' },
            { name: 'troubleshooting.md', type: 'file' },
            { name: 'validation_checklist.md', type: 'file' },
            {
              name: 'mermaid_templates',
              type: 'folder',
              children: [
                { name: 'templates.md', type: 'file' }
              ]
            },
            {
              name: 'example_outputs',
              type: 'folder',
              children: [
                { name: 'examples.md', type: 'file' }
              ]
            }
          ]
        },
      {
        name: 'Stage2_FSD_Creation',
        type: 'folder',
        children: [
          { name: 'fsd_creation_prompt.md', type: 'file' },
          { name: 'fsd_template.md', type: 'file' },
          { name: 'README.md', type: 'file' },
          { name: 'user_guide.md', type: 'file' },
          {
            name: 'example_outputs',
            type: 'folder',
            children: [
              { name: 'sample_fsd.md', type: 'file' }
            ]
          }
        ]
      },
      {
        name: 'Stage3_TSD_Creation',
        type: 'folder',
        children: [
          { name: 'tsd_creation_prompt.md', type: 'file' },
          { name: 'README.md', type: 'file' },
          { name: 'user_guide.md', type: 'file' }
        ]
      },
        {
          name: 'Stage4_UI_UX_Designs_Analysis',
          type: 'folder',
          children: [
            { name: 'ui_ux_designs_prompt.md', type: 'file' },
            { name: 'README.md', type: 'file' },
            { name: 'user_guide.md', type: 'file' },
            {
              name: 'UXD',
              type: 'folder',
              children: [
                { name: 'README.md', type: 'file' },
                { name: 'figma_links.md', type: 'file' },
                {
                  name: 'design_system',
                  type: 'folder',
                  children: [
                    { name: 'color_palette.json', type: 'file' },
                    { name: 'typography.json', type: 'file' },
                    { name: 'spacing.json', type: 'file' },
                    { name: 'components.json', type: 'file' }
                  ]
                },
                {
                  name: 'screens',
                  type: 'folder',
                  children: [
                    { name: 'README.md', type: 'file' }
                  ]
                },
                {
                  name: 'assets',
                  type: 'folder',
                  children: [
                    {
                      name: 'icons',
                      type: 'folder',
                      children: [
                        { name: 'README.md', type: 'file' }
                      ]
                    },
                    {
                      name: 'images',
                      type: 'folder',
                      children: [
                        { name: 'README.md', type: 'file' }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              name: 'templates',
              type: 'folder',
              children: [
                { name: 'design_system_template.json', type: 'file' },
                { name: 'figma_links_template.md', type: 'file' },
                { name: 'navigation_list_template.md', type: 'file' }
              ]
            },
            { name: 'example_outputs', type: 'folder' }
          ]
        },
      {
        name: 'Stage5_RTSD_Creation',
        type: 'folder',
        children: [
          { name: 'rtsd_creation_prompt.md', type: 'file' },
          { name: 'README.md', type: 'file' },
          { name: 'user_guide.md', type: 'file' }
        ]
      },
      {
        name: 'Stage6_1_FSD_Analysis_Validation',
        type: 'folder',
        children: [
          { name: 'fsd_analysis_prompt.md', type: 'file' },
          { name: 'README.md', type: 'file' },
          { name: 'user_guide.md', type: 'file' }
        ]
      },
      {
        name: 'Stage6_2_Implementation_Planning',
        type: 'folder',
        children: [
          { name: 'implementation_planning_prompt.md', type: 'file' },
          { name: 'README.md', type: 'file' },
          { name: 'user_guide.md', type: 'file' }
        ]
      },
      {
        name: 'Stage6_3_Project_Setup_Architecture',
        type: 'folder',
        children: [
          { name: 'project_setup_prompt.md', type: 'file' },
          { name: 'README.md', type: 'file' },
          { name: 'user_guide.md', type: 'file' }
        ]
      },
      {
        name: 'Stage6_4_Database_Model_Design',
        type: 'folder',
        children: [
          { name: 'database_model_prompt.md', type: 'file' },
          { name: 'README.md', type: 'file' },
          { name: 'user_guide.md', type: 'file' }
        ]
      },
      {
        name: 'Stage6_5_ORM_Mapper_MongoDB_Classes',
        type: 'folder',
        children: [
          { name: 'orm_mapper_prompt.md', type: 'file' },
          { name: 'README.md', type: 'file' },
          { name: 'user_guide.md', type: 'file' }
        ]
      },
      {
        name: 'Stage6_6_Business_Service_Interfaces',
        type: 'folder',
        children: [
          { name: 'service_interfaces_prompt.md', type: 'file' },
          { name: 'README.md', type: 'file' },
          { name: 'user_guide.md', type: 'file' }
        ]
      },
      {
        name: 'Stage6_7_Interface_Validation_Coverage',
        type: 'folder',
        children: [
          { name: 'validation_coverage_prompt.md', type: 'file' },
          { name: 'README.md', type: 'file' },
          { name: 'user_guide.md', type: 'file' }
        ]
      },
      {
        name: 'Stage6_8_Business_Service_Implementations',
        type: 'folder',
        children: [
          { name: 'service_implementations_prompt.md', type: 'file' },
          { name: 'README.md', type: 'file' },
          { name: 'user_guide.md', type: 'file' }
        ]
      },
      {
        name: 'Stage6_9_Unit_Testing_Cases',
        type: 'folder',
        children: [
          { name: 'unit_testing_prompt.md', type: 'file' },
          { name: 'README.md', type: 'file' },
          { name: 'user_guide.md', type: 'file' }
        ]
      },
      {
        name: 'Stage6_10_REST_API_Development',
        type: 'folder',
        children: [
          { name: 'rest_api_prompt.md', type: 'file' },
          { name: 'README.md', type: 'file' },
          { name: 'user_guide.md', type: 'file' }
        ]
      },
      {
        name: 'Stage6_11_Frontend_Screen_Development',
        type: 'folder',
        children: [
          { name: 'frontend_screens_prompt.md', type: 'file' },
          { name: 'README.md', type: 'file' },
          { name: 'user_guide.md', type: 'file' }
        ]
      },
      {
        name: 'Stage6_12_Frontend_Unit_Test_Cases',
        type: 'folder',
        children: [
          { name: 'frontend_unit_tests_prompt.md', type: 'file' },
          { name: 'README.md', type: 'file' },
          { name: 'user_guide.md', type: 'file' }
        ]
      },
      {
        name: 'Stage6_13_CICD_Deployment_Azure_App_Service',
        type: 'folder',
        children: [
          { name: 'cicd_deployment_prompt.md', type: 'file' },
          { name: 'README.md', type: 'file' },
          { name: 'user_guide.md', type: 'file' }
        ]
      },
        {
          name: 'Stage7_Temporary_Backend_Local_Test',
          type: 'folder',
          children: [
            { name: '6_STAGE_FRAMEWORK_OVERVIEW.md', type: 'file' },
            { name: 'temporary_backend_prompt.md', type: 'file' },
            { name: 'README.md', type: 'file' },
            { name: 'user_guide.md', type: 'file' }
          ]
        },
      {
        name: 'templates',
        type: 'folder',
        children: [
          { name: 'project_template.md', type: 'file' }
        ]
      },
      { name: 'README.md', type: 'file' },
      { name: 'USAGE_GUIDE.md', type: 'file' }
    ]
  }
];

const FileTreeItem = ({ item, level = 0 }: { item: FileItem; level?: number }) => {
  const [isExpanded, setIsExpanded] = useState(level < 2); // Auto-expand first 2 levels
  
  return (
    <div className="select-none">
      <div 
        className="flex items-center py-1 px-2 hover:bg-accent/50 rounded cursor-pointer"
        style={{ paddingLeft: `${level * 16 + 8}px` }}
        onClick={() => item.type === 'folder' && setIsExpanded(!isExpanded)}
      >
        {item.type === 'folder' ? (
          <Folder className="h-4 w-4 mr-2 text-blue-500 flex-shrink-0" />
        ) : (
          <File className="h-4 w-4 mr-2 text-gray-500 flex-shrink-0" />
        )}
        <span className="text-sm text-foreground truncate">{item.name}</span>
      </div>
      
      {item.type === 'folder' && isExpanded && item.children && (
        <div>
          {item.children.map((child, index) => (
            <FileTreeItem key={index} item={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export default function FrameworkDownload({ isOpen, onClose }: FrameworkDownloadProps) {
  // const [password, setPassword] = useState('');
  // const [showPassword, setShowPassword] = useState(false);
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  // const [error, setError] = useState('');

  // const correctPassword = 'eftdm@24';

  // const handlePasswordSubmit = () => {
  //   if (password === correctPassword) {
  //     setIsAuthenticated(true);
  //     setError('');
  //   } else {
  //     setError('Incorrect password. Please try again.');
  //     setPassword('');
  //   }
  // };

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      // Create a zip file with the framework structure
      // For now, we'll simulate the download
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Create a download link
      const link = document.createElement('a');
      link.href = '#'; // In a real implementation, this would be the zip file URL
      link.download = 'EFTDM_FRAMEWORK.zip';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Close the modal after successful download
      setTimeout(() => {
        onClose();
        setIsAuthenticated(false);
        setPassword('');
        setIsDownloading(false);
      }, 1000);
    } catch (error) {
      setError('Download failed. Please try again.');
      setIsDownloading(false);
    }
  };

  const handleClose = () => {
    onClose();
    setIsAuthenticated(false);
    setPassword('');
    setError('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={(e) => e.target === e.currentTarget && handleClose()}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-background border border-border rounded-xl shadow-2xl w-full max-w-4xl max-h-[85vh] overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center space-x-3">
                <ArrowLeft 
                  className="h-5 w-5 text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
                  onClick={handleClose}
                />
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Download EFTDM Framework</h2>
                  <p className="text-sm text-muted-foreground">
                    Complete framework with all stages, scripts, and documentation
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleClose}
                className="h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto flex-1">
              {/* Password Protection - Commented Out */}
              {/* {!isAuthenticated ? (
                <div className="space-y-6">
                  <div className="text-center space-y-4">
                    <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <Lock className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        Password Protected Download
                      </h3>
                      <p className="text-muted-foreground">
                        Enter the password to access the complete EFTDM Framework download
                      </p>
                    </div>
                  </div>

                  <div className="max-w-md mx-auto space-y-4">
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handlePasswordSubmit()}
                        placeholder="Enter password"
                        className="w-full px-4 py-3 pr-12 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>

                    {error && (
                      <div className="flex items-center space-x-2 text-red-500 bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                        <AlertCircle className="h-4 w-4" />
                        <span className="text-sm">{error}</span>
                      </div>
                    )}

                    <Button
                      onClick={handlePasswordSubmit}
                      disabled={!password.trim()}
                      className="w-full"
                      size="lg"
                    >
                      <Lock className="mr-2 h-4 w-4" />
                      Verify Password
                    </Button>
                  </div>
                </div>
              ) : ( */}
                /* Framework Structure & Download */
                <div className="space-y-6">
                  <div className="text-center space-y-4">
                    <div className="mx-auto w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        Framework Structure
                      </h3>
                      <p className="text-muted-foreground">
                        Complete EFTDM Framework with all stages, scripts, and documentation files
                      </p>
                    </div>
                  </div>

                  {/* File Tree */}
                  <div className="bg-card border border-border rounded-lg p-4 max-h-80 overflow-y-auto">
                    <div className="space-y-1">
                      {frameworkStructure.map((item, index) => (
                        <FileTreeItem key={index} item={item} />
                      ))}
                    </div>
                  </div>

                  {/* Download Button */}
                  <div className="text-center pt-4">
                    <Button
                      onClick={handleDownload}
                      disabled={isDownloading}
                      size="lg"
                      className="px-12 py-6 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      {isDownloading ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                          Preparing Download...
                        </>
                      ) : (
                        <>
                          <Download className="mr-3 h-6 w-6" />
                          Download Complete Framework
                        </>
                      )}
                    </Button>
                    <p className="text-xs text-muted-foreground mt-2">
                      Downloads as EFTDM_FRAMEWORK.zip (~25MB)
                    </p>
                  </div>
                </div>
              {/* )} */}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
