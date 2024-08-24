'use client'

import { useState } from 'react'

export default function BookingForm() {
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
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <label htmlFor="guests" className="block text-sm font-medium text-gray-700">Number of Guests</label>
        <input
          type="number"
          id="guests"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="lounge" className="block text-sm font-medium text-gray-700">Choose a Lounge</label>
        <select
          id="lounge"
          name="lounge"
          value={formData.lounge}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          required
        >
          <option value="">Select Lounge</option>
          <option value="seaside">Seaside Lounge</option>
          <option value="deck">Deck Lounge</option>
          <option value="sunrise">Sunrise Lounge</option>
          <option value="rooftop">Rooftop Lounge</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="checkIn" className="block text-sm font-medium text-gray-700">Check In</label>
        <input
          type="date"
          id="checkIn"
          name="checkIn"
          value={formData.checkIn}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          required
        />
      </div>

      <div className="mb-6">
        <label htmlFor="checkOut" className="block text-sm font-medium text-gray-700">Check Out</label>
        <input
          type="date"
          id="checkOut"
          name="checkOut"
          value={formData.checkOut}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300"
      >
        BOOKING NOW!
      </button>

      <p className="mt-4 text-center text-sm text-gray-600">
        We have more Best lounges, <a href="#" className="text-blue-600 hover:underline">View all Lounges</a>
      </p>
    </form>
  )
}