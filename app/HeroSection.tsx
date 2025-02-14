'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Play } from 'lucide-react'
import Link from 'next/link'

const slides = [
  'http://kfkit.rometheme.pro/besort/wp-content/uploads/sites/40/2022/11/beach-party-dj-set-K9SHFY4.jpg',
  'http://kfkit.rometheme.pro/besort/wp-content/uploads/sites/40/2022/11/happy-girls-having-fun-cheering-with-cocktails-at-5V9ZUL7.jpg',
  'http://kfkit.rometheme.pro/besort/wp-content/uploads/sites/40/2022/11/happy-girls-having-fun-drinking-cocktails-at-bar-o-9ZJAQLJ.jpg'
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const openVideoModal = () => {
    setIsVideoModalOpen(true)
  }

  const closeVideoModal = () => {
    setIsVideoModalOpen(false)
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div 
          key={slide} 
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ 
            opacity: index === currentSlide ? 1 : 0,
            zIndex: index === currentSlide ? 1 : 0
          }}
        >
          <Image
            src={slide}
            alt={`Beach resort slide ${index + 1}`}
            fill
            style={{ 
              objectFit: 'cover',
              transform: index === currentSlide ? 'scale(1.1)' : 'scale(1)',
              transition: 'transform 10s ease-in-out'
            }}
            priority
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />
      <div className="absolute inset-0 flex items-center z-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-xl md:text-2xl text-white mb-4 font-light animate-fade-in-up">Beach Club & Resort</h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-bold mb-6 animate-fade-in-up animation-delay-300">
              Get to The Beach and Have Fun!
            </h1>
            <p className="text-white text-lg mb-8 animate-fade-in-up animation-delay-600">
              Experience the ultimate beach getaway at our luxurious resort. Relax, unwind, and create unforgettable memories.
            </p>
            <div className="flex space-x-4 animate-fade-in-up animation-delay-900">
              <Link href="/booking" passHref>
                <span className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300 cursor-pointer">
                  BOOK NOW
                </span>
              </Link>
              <button 
                className="border border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-blue-600 transition duration-300 flex items-center"
                onClick={openVideoModal}
              >
                Play Video <Play className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {isVideoModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg">
            <iframe 
              width="560" 
              height="315" 
              src="https://myidecide.net/XVI8RE" 
              title="Resort Video" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
            <button 
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
              onClick={closeVideoModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  )
}