import Image from "next/image";

// Définition des formats pour chaque image
const imageFormats = [
  "jpg",
  "jpg",
  "jpg",
  "jpg",
  "jpg",
  "jpg",
  "jpg",
  "jpg",
  "jpg",
  "jpg",
  "jpg",
  "jpg",
  "jpg",
  "jpg",
  "jpeg",
  "jpeg",
  "jpeg",
  "jpg",
  "jpg",
  "jpeg",
  "jpg",
  "jpg",
  "png",
  "jpg",
];

// Données statiques des images
const galleryImages = Array.from({ length: 24 }, (_, i) => ({
  id: i + 1,
  src: `/gallery/image-${i + 1}.${imageFormats[i]}`,
  alt: `Image de galerie ${i + 1}`,
  width: 800,
  height: 600,
}));

export async function ImageGallery() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête de la galerie */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Galerie d&apos;Images
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une collection d&apos;images optimisées pour des performances
            exceptionnelles. Chargement progressif et formats modernes pour une
            expérience fluide.
          </p>
        </div>

        {/* Grille d'images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative aspect-square overflow-hidden rounded-xl bg-gray-100 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                priority={index < 8} // Les 8 premières images en priorité
                quality={90}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />

              {/* Overlay au hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button className="px-4 py-2 bg-white text-gray-900 font-semibold rounded-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  Voir plus
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <button className="px-8 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors">
            Charger plus d&apos;images
          </button>
        </div>
      </div>
    </section>
  );
}
