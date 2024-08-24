'use client'

import { useState } from 'react'
import { Calendar, Rocket, Mail } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function FormAndWhyChooseUs() {
  const [formData, setFormData] = useState({
    guests: '',
    lounge: '',
    checkIn: '',
    checkOut: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Here you would typically send the data to your server
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <Card className="col-span-1">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Calendar className="h-8 w-8 text-primary mr-4" />
                <h3 className="text-xl font-semibold">Best Beach Club</h3>
              </div>
              <p className="text-gray-600">Experience the ultimate beach getaway with our world-class facilities and services.</p>
            </CardContent>
          </Card>
          <Card className="col-span-1">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Rocket className="h-8 w-8 text-primary mr-4" />
                <h3 className="text-xl font-semibold">Best Resort</h3>
              </div>
              <p className="text-gray-600">Luxurious accommodations and amenities for an unforgettable vacation experience.</p>
            </CardContent>
          </Card>
          <Card className="col-span-1">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Mail className="h-8 w-8 text-primary mr-4" />
                <h3 className="text-xl font-semibold">Best Services</h3>
              </div>
              <p className="text-gray-600">Exceptional customer service to ensure your stay exceeds all expectations.</p>
            </CardContent>
          </Card>
          <Card className="col-span-1 md:col-span-1 md:-mt-24 bg-primary text-white">
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-4">Book Your Stay</h3>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <Input 
                    type="number" 
                    name="guests" 
                    value={formData.guests} 
                    onChange={handleChange} 
                    placeholder="Number of Guests" 
                    className="bg-white text-black" 
                  />
                  <select
                    name="lounge"
                    value={formData.lounge}
                    onChange={handleChange}
                    className="w-full p-2 rounded-md bg-white text-black"
                  >
                    <option value="">Select Lounge</option>
                    <option value="seaside">Seaside Lounge</option>
                    <option value="deck">Deck Lounge</option>
                    <option value="sunrise">Sunrise Lounge</option>
                    <option value="rooftop">Rooftop Lounge</option>
                  </select>
                  <Input 
                    type="date" 
                    name="checkIn" 
                    value={formData.checkIn} 
                    onChange={handleChange} 
                    className="bg-white text-black" 
                  />
                  <Input 
                    type="date" 
                    name="checkOut" 
                    value={formData.checkOut} 
                    onChange={handleChange} 
                    className="bg-white text-black" 
                  />
                  <Button type="submit" className="w-full bg-white text-primary hover:bg-gray-100">Book Now</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}