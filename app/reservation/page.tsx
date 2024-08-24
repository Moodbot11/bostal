import Image from 'next/image'
import Link from 'next/link'
import ReservationTable from './ReservationTable'

export default function ReservationPage() {
  return (
    <main className="min-h-screen">
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image
          src="http://kfkit.rometheme.pro/besort/wp-content/uploads/sites/40/2022/11/beach-party-dj-set-K9SHFY4.jpg"
          alt="Beach party"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
        <div className="relative z-20 text-white text-center">
          <h1 className="text-5xl font-bold mb-4">Reservation</h1>
          <p>
            <Link href="/" className="hover:underline">Home</Link> / Reserve
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-4 text-blue-600">Our Tables</h2>
          <h3 className="text-4xl font-bold text-center mb-6">Located Close to The Sea & Beautiful Scenery</h3>
          <p className="text-center mb-12 max-w-2xl mx-auto">
            Reserve now dolor sit amet consectetur adipiscing elit cras in auctor elit a scelerisqu
          </p>
          <ReservationTable />
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-8">Our Location</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Come on! Holiday in Besort</h3>
              <p className="mb-6">
                Besort is ipsum dolor sit amet, consectetur adipiscing elit. Cras in auctor elit, a scelerisque purus. Proin suscipit scelerisque. Nulla vel sapien viverra.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">►</span>
                  Global Beach Club Map
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">☎</span>
                  Phone Number : 123-234-1234
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">📍</span>
                  Besort Address : Pekanbaru, Riau, Indonesia
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">🕒</span>
                  Mon - Sun : 08.00 AM - 00.00 PM
                </li>
              </ul>
              <button className="mt-8 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300">
                CONTACT US
              </button>
            </div>
            <div>
              <Image
                src="http://kfkit.rometheme.pro/besort/wp-content/uploads/sites/40/2022/11/2.jpg"
                alt="Besort location"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}