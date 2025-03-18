'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()
  
  return (
    <header className="header sticky top-0 z-50">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold mr-8">
            OpusClip
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="/features" 
              className={`text-sm ${pathname === '/features' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
            >
              Features
            </Link>
            <Link 
              href="/solutions" 
              className={`text-sm ${pathname === '/solutions' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
            >
              Solutions
            </Link>
            <Link 
              href="/resources" 
              className={`text-sm ${pathname === '/resources' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
            >
              Resources
            </Link>
            <Link 
              href="/pricing" 
              className={`text-sm ${pathname === '/pricing' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
            >
              Pricing
            </Link>
            <Link 
              href="/search" 
              className="flex items-center text-sm bg-gray-800 px-3 py-1 rounded-md text-white"
            >
              <span className="text-xs font-semibold text-yellow-400 mr-1">NEW</span>
              OpusSearch
            </Link>
          </nav>
        </div>
        
        <div className="flex items-center space-x-4">
          <Link 
            href="/dashboard" 
            className="text-sm font-medium"
          >
            My dashboard
          </Link>
        </div>
      </div>
    </header>
  )
} 