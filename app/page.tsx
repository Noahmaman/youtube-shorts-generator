import React from 'react';
import Link from 'next/link';
import Header from './components/Header';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-16">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto">
              <p className="text-center mb-4 text-green-400 font-medium">#1 AI VIDEO CLIPPING TOOL</p>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                1 long video, 10 viral clips. Create 10x faster.
              </h1>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                OpusClip turns long videos into shorts, and publishes them to all social platforms in one click.
              </p>
              
              <div className="flex justify-center space-x-4 mb-12">
                <Link href="/dashboard" className="button-primary">
                  Get free clips
                </Link>
                <Link href="/upload" className="button-secondary">
                  Upload files
                </Link>
              </div>
              
              <div className="mt-12 flex justify-center">
                <div className="upload-area max-w-2xl w-full">
                  <div className="flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                    </svg>
                    <span>Drop a video link</span>
                  </div>
                  <input 
                    type="text" 
                    placeholder="https://www.youtube.com/watch?v=..."
                    className="input-gradient mb-4"
                  />
                  <div className="flex justify-center">
                    <button className="button-primary">Get free clips</button>
                    <span className="mx-4 self-center text-gray-400">or</span>
                    <button className="button-secondary">Upload files</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto mb-16">
              <h2 className="text-2xl font-bold mb-4">Faster Processing</h2>
              <p className="text-lg text-gray-300">
                Everything you need to create viral shorts
              </p>
              <p className="mt-4 text-gray-400">
                Our platform provides all the tools you need to transform your videos into engaging shorts that capture attention.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="card p-6">
                <h3 className="text-lg font-semibold mb-3">AI-Powered Editing</h3>
                <p className="text-gray-400">
                  Our AI automatically identifies the most engaging moments from your videos and creates perfect shorts.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-lg font-semibold mb-3">Custom Templates</h3>
                <p className="text-gray-400">
                  Choose from a variety of templates to match your content style and brand identity.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-lg font-semibold mb-3">Analytics Dashboard</h3>
                <p className="text-gray-400">
                  Track your shorts performance and get insights to optimize your content strategy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 