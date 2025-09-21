'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Menu, X, Sun, Moon, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useIsMounted } from '@/hooks/use-is-mounted'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const isMounted = useIsMounted()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Framework Flow', href: '#framework-flow' },
    { name: 'Capabilities', href: '#capabilities' },
    { name: 'User Journey', href: '#user-journey' },
    { name: 'Scenarios', href: '#scenarios' },
    { name: 'Documentation', href: '#documentation' },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full glass-morphism border-b border-white/20">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600">
            <Zap className="h-6 w-6 text-white" />
          </div>
          <span className="text-2xl font-bold gradient-text">FTDM Framework</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-lg font-medium text-gray-300 hover:text-white transition-colors duration-300"
            >
              {item.name}
            </Link>
          ))}
          {isMounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle theme"
              className="h-12 w-12 glass-morphism hover:bg-white/10"
              suppressHydrationWarning
            >
              {theme === 'dark' ? (
                <Sun className="h-6 w-6" />
              ) : (
                <Moon className="h-6 w-6" />
              )}
            </Button>
          )}
        </div>
        
        <div className="md:hidden flex items-center space-x-4">
          {isMounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle theme"
              className="h-12 w-12 glass-morphism"
              suppressHydrationWarning
            >
              {theme === 'dark' ? (
                <Sun className="h-6 w-6" />
              ) : (
                <Moon className="h-6 w-6" />
              )}
            </Button>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
            className="h-12 w-12 glass-morphism"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden glass-morphism border-t border-white/20">
          <div className="flex flex-col space-y-6 px-4 py-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-lg font-medium text-gray-300 hover:text-white transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}