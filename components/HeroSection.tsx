import Image from 'next/image'
import { ChevronRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative h-screen">
      <Image
        src="/placeholder.svg?height=1080&width=1920"
        alt="Beach resort"
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-xl md:text-2xl text-white mb-4 font-light">Beach Club & Resort</h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-bold mb-6">Get to The Beach and Have Fun!</h1>
            <p className="text-white text-lg mb-8">Experience the ultimate beach getaway at our luxurious resort. Relax, unwind, and create unforgettable memories.</p>
            <div className="flex space-x-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300">
                BOOK NOW
              </button>
              <button className="border border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-blue-600 transition duration-300 flex items-center">
                Play Video <ChevronRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}