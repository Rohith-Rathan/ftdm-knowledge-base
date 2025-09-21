'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Download, 
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FrameworkDownloadProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FrameworkDownload({ isOpen, onClose }: FrameworkDownloadProps) {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      // Simulate download process
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Open GitHub ZIP download
      window.open('https://github.com/Rohith-Rathan/ftdm-framework-download/archive/main.zip', '_blank');
    } catch (error) {
      console.error('Download failed:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-background border border-border rounded-xl shadow-2xl w-full max-w-4xl max-h-[85vh] overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div>
                <h2 className="text-xl font-semibold text-foreground">EFTDM Framework</h2>
                <p className="text-sm text-muted-foreground">Access the complete framework</p>
              </div>
              <Button variant="ghost" size="icon" onClick={onClose} aria-label="Close download modal">
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto flex-1">
              {/* Framework Content */}
              <div className="space-y-6">
                <div className="text-center space-y-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      EFTDM Framework Repository
                    </h3>
                    <p className="text-muted-foreground">
                      Access the complete EFTDM Framework with all stages, scripts, and documentation
                    </p>
                  </div>
                </div>

                {/* GitHub Actions */}
                <div className="space-y-4">
                  <Button
                    onClick={() => window.open('https://github.com/Rohith-Rathan/ftdm-framework-download', '_blank')}
                    size="lg"
                    className="w-full px-8 py-6 text-lg bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white"
                  >
                    <svg className="mr-3 h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View on GitHub
                  </Button>
                  
                  <Button
                    onClick={handleDownload}
                    disabled={isDownloading}
                    variant="outline"
                    size="lg"
                    className="w-full px-8 py-6 text-lg border-2 border-border hover:bg-accent"
                  >
                    {isDownloading ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-current mr-3"></div>
                        Preparing Download...
                      </>
                    ) : (
                      <>
                        <Download className="mr-3 h-6 w-6" />
                        Download ZIP
                      </>
                    )}
                  </Button>
                </div>

                {/* Clone Command */}
                <div className="bg-card border border-border rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Clone Repository</h4>
                  <div className="bg-muted p-3 rounded-lg">
                    <code className="text-sm text-foreground break-all">
                      git clone https://github.com/Rohith-Rathan/ftdm-framework-download.git
                    </code>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Use this command to clone the repository and get updates with <code>git pull</code>
                  </p>
                </div>

                {/* Repository Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="bg-card border border-border rounded-lg p-4">
                    <div className="text-2xl font-bold text-foreground">7</div>
                    <div className="text-sm text-muted-foreground">Main Stages</div>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4">
                    <div className="text-2xl font-bold text-foreground">13</div>
                    <div className="text-sm text-muted-foreground">Implementation Sub-Stages</div>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4">
                    <div className="text-2xl font-bold text-foreground">161</div>
                    <div className="text-sm text-muted-foreground">Essential Files</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}