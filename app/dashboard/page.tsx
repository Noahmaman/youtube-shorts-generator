'use client'

import React, { useState } from 'react'
import Header from '../components/Header'

export default function Dashboard() {
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [generatedShorts, setGeneratedShorts] = useState([])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setGeneratedShorts([
        {
          id: '1',
          title: 'How to create viral shorts',
          status: 'Ready',
          createdAt: 'Today, 2:30 PM',
          thumbnail: 'https://picsum.photos/seed/short1/400/225'
        },
        {
          id: '2',
          title: 'Top 5 tips for content creators',
          status: 'Processing',
          createdAt: 'Today, 1:15 PM',
          thumbnail: 'https://picsum.photos/seed/short2/400/225'
        }
      ]);
      setLoading(false);
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">My Dashboard</h1>
          <button className="button-primary">New Video</button>
        </div>
        
        <div className="upload-area mb-8">
          <h3 className="text-xl font-medium mb-4">Generate Shorts</h3>
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            <div className="mb-4">
              <label htmlFor="url" className="block text-sm font-medium text-gray-400 mb-1">
                YouTube URL
              </label>
              <input
                type="url"
                id="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="input-gradient"
                placeholder="https://www.youtube.com/watch?v=..."
                required
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={loading}
                className="button-primary"
              >
                {loading ? 'Processing...' : 'Generate Shorts'}
              </button>
            </div>
          </form>
        </div>
        
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-4">Your Shorts</h2>
          {generatedShorts.length === 0 ? (
            <div className="text-center py-12 bg-gray-800/20 rounded-md">
              <p className="text-gray-400">No shorts generated yet. Enter a YouTube URL above to get started.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {generatedShorts.map((short: any) => (
                <div key={short.id} className="card overflow-hidden">
                  <div className="relative aspect-video">
                    <img 
                      src={short.thumbnail} 
                      alt={short.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 right-2">
                      <span className="tag bg-black/60">{short.status}</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium mb-2">{short.title}</h3>
                    <p className="text-sm text-gray-400">{short.createdAt}</p>
                    <div className="mt-4 flex space-x-2">
                      <button className="button-primary text-xs py-1 px-3">Download</button>
                      <button className="button-secondary text-xs py-1 px-3">Edit</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  )
} 