import BookingForm from './BookingForm'

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-gray-100">
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">Booking Now & Enjoy it!</h1>
          <BookingForm />
        </div>
      </section>
    </main>
  )
}