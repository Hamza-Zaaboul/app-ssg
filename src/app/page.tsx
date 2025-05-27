import { Metadata } from 'next'
import { ClientNavbar } from '../components/ClientNavbar'
import { HeroSection } from '../components/HeroSection'
import { ImageGallery } from '../components/ImageGallery'   

export const metadata: Metadata = {
  title: 'Page Ultra-Performante | Next.js 15',
  description: 'Page SSG optimisée pour des performances maximales avec Next.js 15 et React 19',
  keywords: 'performance, next.js, react, ssg',
  openGraph: {
    title: 'Page Ultra-Performante',
    description: 'Page SSG optimisée pour des performances maximales',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  }
}

// Génération statique - aucun chargement côté client
export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar client - seul élément dynamique */}
      <ClientNavbar />
      
      {/* Contenu statique */}
      <main className="pt-16"> {/* Padding pour la navbar fixe */}
        <HeroSection />
        <ImageGallery />
      </main>
    </div>
  )
}