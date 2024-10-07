import React from 'react'

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Students in laboratory",
    caption: "Our state-of-the-art laboratory facilities"
  },
  {
    src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Lecture hall",
    caption: "Modern lecture halls for interactive learning"
  },
  {
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Students studying",
    caption: "Collaborative study spaces"
  },
  {
    src: "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Research presentation",
    caption: "Student research symposium"
  },
  {
    src: "https://images.unsplash.com/photo-1581093458791-9d15482aec9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Microscope session",
    caption: "Hands-on learning with advanced equipment"
  },
  {
    src: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "DNA research",
    caption: "Cutting-edge genetic research facilities"
  }
]

const Gallery: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-green-800 mb-8">Photo Gallery</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((image, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-64 object-cover"
            />
            <p className="p-4 text-gray-600 text-center">{image.caption}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery