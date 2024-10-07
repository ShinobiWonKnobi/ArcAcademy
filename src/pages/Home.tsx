import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Monitor, Users, BookOpen, Target } from 'lucide-react'

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <section className="h-screen flex items-center justify-center bg-cover bg-center parallax" style={{backgroundImage: "url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"}}>
        <div className="text-center animate-fadeIn">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-pastel-pink">Welcome to Arc Academy</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-pale-dogwood">
            Empowering minds through application-based holistic learning
          </p>
          <Link to="/courses" className="btn btn-primary">
            Explore Our Courses <ArrowRight className="inline ml-2" />
          </Link>
        </div>
      </section>

      <section className="py-16 bg-sage bg-opacity-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gunmetal">Our Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card flex flex-col items-center text-center">
              <Monitor size={48} className="text-blue-ryb mb-4" />
              <h3 className="text-xl font-semibold mb-2">Smart Class</h3>
              <p className="card-content">Equipped with the best audio-visual and experiential content to accelerate learning.</p>
            </div>
            <div className="card flex flex-col items-center text-center">
              <Users size={48} className="text-blue-ryb mb-4" />
              <h3 className="text-xl font-semibold mb-2">Experience</h3>
              <p className="card-content">Teachers with academic and research experience in premier Indian Institutions.</p>
            </div>
            <div className="card flex flex-col items-center text-center">
              <BookOpen size={48} className="text-blue-ryb mb-4" />
              <h3 className="text-xl font-semibold mb-2">Personalized Learning</h3>
              <p className="card-content">Imparting learning at student's pace, recognizing that every student is unique.</p>
            </div>
            <div className="card flex flex-col items-center text-center">
              <Target size={48} className="text-blue-ryb mb-4" />
              <h3 className="text-xl font-semibold mb-2">Focus</h3>
              <p className="card-content">Practice tests, personal attention, and facilitate learning for each student.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cover bg-center parallax" style={{backgroundImage: "url('https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"}}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-pale-dogwood">Student Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <p className="card-content mb-4">"I found the course enjoyable. The slide shows were very helpful and made the concepts easier to understand."</p>
              <p className="font-semibold">Ulwiana</p>
              <p className="text-sm">Vancouver, IB Curriculum</p>
            </div>
            <div className="card">
              <p className="card-content mb-4">"Classes were very interesting, and flexible class timings made it suitable."</p>
              <p className="font-semibold">Janhavi</p>
              <p className="text-sm">Dubai, NEET</p>
            </div>
            <div className="card">
              <p className="card-content mb-4">"Her classes are personal and engaging, and the content is relevant and creative."</p>
              <p className="font-semibold">Shraddha</p>
              <p className="text-sm">Mumbai, AS & A Level</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-pastel-pink bg-opacity-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-gunmetal">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 text-gunmetal">Join Arc Academy and experience our application-based holistic learning approach.</p>
          <Link to="/contact" className="btn btn-primary">
            Contact Us Today <ArrowRight className="inline ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home