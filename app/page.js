import HomePage from '@/components/Pages/HomePage'

export const metadata = {
  title: "Waiheke Prime Taxis Island - Affordable Local Taxi & Tour Services",
  description: "Offering reliable, friendly taxi rides and personalized island tours. Discover Waiheke's stunning landscapes and attractions with our knowledgeable local drivers.",
  metadataBase: new URL(process.env.url),
  alternates: {
    canonical: process.env.url,
  },
  openGraph: {
    title: "Waiheke Prime Taxis Island - Affordable Local Taxi & Tour Services",
    description: "Offering reliable, friendly taxi rides and personalized island tours. Discover Waiheke's stunning landscapes and attractions with our knowledgeable local drivers.",
    url: process.env.url,
    siteName: 'webduel',

    images: [
      {
        url: "/services/taxi.jpg",
        width: 800,
        height: 600,
      },
      {
        url: "/services/taxi.jpg",
        width: 1800,
        height: 1600,
      },
    ],
    type: 'website',
  },

}
export default async function Home() {


  return (
    <>
      <main >
        <HomePage />
      </main>
    </>

  )
}
