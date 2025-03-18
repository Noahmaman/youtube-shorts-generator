import React from 'react';
import Header from '../components/Header';

export default function Features() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Features</h1>
          <p className="text-lg text-gray-300">
            Our AI-powered video platform helps you create, edit, and distribute short-form video across all platforms.
          </p>
        </div>
        
        <div className="space-y-24">
          {/* Feature 1 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block gradient-badge px-3 py-1 rounded-full text-sm mb-4">
                AI Clipping
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Create 10x more content from your long-form videos
              </h2>
              <p className="text-gray-300 mb-6">
                Our AI automatically identifies the most engaging parts of your videos and creates perfect shorts optimized for social media.
              </p>
              <ul className="space-y-3">
                {['Content segmentation', 'Automatic clip selection', 'Engagement optimization'].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="h-5 w-5 text-green-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card aspect-video overflow-hidden">
              <img 
                src="https://picsum.photos/seed/feature1/800/450" 
                alt="AI Clipping" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Feature 2 */}
          <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
            <div className="md:order-2">
              <div className="inline-block gradient-badge px-3 py-1 rounded-full text-sm mb-4">
                Multi-Platform Publishing
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Publish to all social platforms with one click
              </h2>
              <p className="text-gray-300 mb-6">
                Connect your accounts and publish your shorts across multiple platforms simultaneously, saving you time and effort.
              </p>
              <ul className="space-y-3">
                {['YouTube, TikTok, Instagram, Twitter', 'Scheduled publishing', 'Platform-specific optimization'].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="h-5 w-5 text-green-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card aspect-video overflow-hidden md:order-1">
              <img 
                src="https://picsum.photos/seed/feature2/800/450" 
                alt="Multi-Platform Publishing" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Feature 3 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block gradient-badge px-3 py-1 rounded-full text-sm mb-4">
                Analytics
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Track performance across all platforms
              </h2>
              <p className="text-gray-300 mb-6">
                Get comprehensive analytics for your content across all platforms in one unified dashboard.
              </p>
              <ul className="space-y-3">
                {['Performance metrics', 'Audience insights', 'Content recommendations'].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="h-5 w-5 text-green-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card aspect-video overflow-hidden">
              <img 
                src="https://picsum.photos/seed/feature3/800/450" 
                alt="Analytics" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 