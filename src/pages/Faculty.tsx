import React from 'react'

const facultyMembers = [
  {
    name: "Dr. Amanda R. Collins",
    title: "Founder and Professor of Molecular Biology",
    bio: "Dr. Collins has over 20 years of experience in molecular biology research and education. She founded ARC ACADEMY to bridge the gap between traditional academic learning and the rapidly evolving field of biological sciences.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Dr. James Nguyen",
    title: "Professor of Genetics",
    bio: "Dr. Nguyen is a renowned geneticist with numerous publications in top scientific journals. His research focuses on epigenetics and its role in human diseases.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Dr. Sophia Patel",
    title: "Associate Professor of Microbiology",
    bio: "Dr. Patel specializes in microbial ecology and the human microbiome. Her innovative teaching methods have earned her multiple awards for excellence in education.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Dr. Marcus Johnson",
    title: "Assistant Professor of Biotechnology",
    bio: "Dr. Johnson brings industry experience to the classroom, having worked in biotech startups before joining academia. He leads ARC ACADEMY's biotechnology and bioinformatics programs.",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  }
]

const Faculty: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-green-800 mb-8">Our Faculty</h1>
      
      <p className="text-gray-600 mb-8">
        At ARC ACADEMY, our faculty members are not just educators but also active researchers and industry experts. 
        They bring a wealth of knowledge and real-world experience to the classroom, ensuring that our students 
        receive the most up-to-date and relevant education in the field of biology.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {facultyMembers.map((faculty, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row">
            <img 
              src={faculty.image} 
              alt={faculty.name} 
              className="w-32 h-32 rounded-full object-cover mb-4 md:mb-0 md:mr-6"
            />
            <div>
              <h2 className="text-xl font-semibold text-green-700">{faculty.name}</h2>
              <p className="text-sm text-gray-500 mb-2">{faculty.title}</p>
              <p className="text-gray-600">{faculty.bio}</p>
            </div>
          </div>
        ))}
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Join Our Team</h2>
        <p className="text-gray-600 mb-4">
          ARC ACADEMY is always looking for passionate and qualified educators to join our faculty. 
          If you're interested in shaping the next generation of biologists, we'd love to hear from you.
        </p>
        <a href="/contact" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300 inline-block">
          Contact Us About Opportunities
        </a>
      </section>
    </div>
  )
}

export default Faculty