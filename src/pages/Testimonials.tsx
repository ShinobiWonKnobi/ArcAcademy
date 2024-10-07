import React from 'react'

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Ph.D. Student, Stanford University",
    quote: "The advanced genetics course at ARC ACADEMY provided me with a solid foundation for my doctoral research. The hands-on lab experience was invaluable.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Michael Chen",
    role: "Research Scientist, BioTech Innovations",
    quote: "I credit my success in the biotech industry to the cutting-edge curriculum and mentorship I received at ARC ACADEMY. It truly prepared me for real-world challenges.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Emily Rodriguez",
    role: "Environmental Biologist",
    quote: "The microbiology course opened my eyes to the fascinating world of microorganisms. It inspired me to pursue a career in environmental biology.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "David Nkosi",
    role: "Biotechnology Entrepreneur",
    quote: "ARC ACADEMY's biotechnology program gave me the skills and confidence to launch my own biotech startup. The faculty's support was instrumental in my journey.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  }
]

const Testimonials: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-green-800 mb-8">Student Testimonials</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col">
            <div className="flex items-center mb-4">
              <img 
                src={testimonial.image} 
                alt={testimonial.name} 
                className="w-16 h-16 rounded-full mr-4 object-cover"
              />
              <div>
                <h2 className="text-xl font-semibold text-green-700">{testimonial.name}</h2>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
            <blockquote className="text-gray-600 italic flex-grow">"{testimonial.quote}"</blockquote>
          </div>
        ))}
      </div>

      <section className="mt-12 text-center">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Join Our Success Stories</h2>
        <p className="text-gray-600 mb-6">
          Are you ready to embark on your journey in biological sciences? 
          Discover how ARC ACADEMY can help you achieve your goals and make a lasting impact in the field.
        </p>
        <a href="/courses" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300 inline-block">
          Explore Our Courses
        </a>
      </section>
    </div>
  )
}

export default Testimonials