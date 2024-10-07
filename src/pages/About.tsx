import React from 'react'

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-purple-800 mb-8">About ARC ACADEMY</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-700 mb-4">Our Mission</h2>
        <p className="text-gray-600 mb-4">
          At ARC ACADEMY, our mission is to provide high-quality education and personalized mentorship to students, 
          helping them achieve their academic goals and excel in competitive exams. We believe in nurturing each 
          student's potential through innovative teaching methods and a supportive learning environment.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-700 mb-4">Founder's Vision</h2>
        <div className="flex flex-col md:flex-row items-center">
          <img 
            src="https://i.imgur.com/YourImageURL.jpg" 
            alt="Archana Narania" 
            className="rounded-full w-48 h-48 object-cover mb-4 md:mr-8"
          />
          <div>
            <h3 className="text-xl font-semibold mb-2">Archana Narania</h3>
            <p className="text-gray-600 mb-4">
              With over 15 years of experience in education, Archana Narania founded ARC ACADEMY 
              with a vision to transform the learning experience for students. Her innovative 
              teaching methods and dedication to student success have helped countless individuals 
              achieve their academic dreams.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-purple-700 mb-4">Our Approach</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Personalized attention and mentorship</li>
          <li>Small batch sizes for effective learning</li>
          <li>Comprehensive study materials and resources</li>
          <li>Regular assessments and performance tracking</li>
          <li>Focus on conceptual understanding and problem-solving skills</li>
          <li>Preparation for various competitive exams</li>
        </ul>
      </section>
    </div>
  )
}

export default About