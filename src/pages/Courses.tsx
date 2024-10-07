import React from 'react'
import { Clock, DollarSign, ExternalLink } from 'lucide-react'

const services = [
  {
    name: "Cambridge IGCSE",
    duration: "1 hr",
    price: "₹1,250",
    bookingLink: "https://www.arcacademy.in/booking-calendar/personalised-learning"
  },
  {
    name: "Cambridge AS & A Levels",
    duration: "1 hr",
    price: "₹1,250",
    bookingLink: "https://www.arcacademy.in/booking-calendar/personalised-learning-3"
  },
  {
    name: "MYP & DP",
    duration: "1 hr",
    price: "₹1,250",
    bookingLink: "https://www.arcacademy.in/booking-calendar/personalised-learning-1"
  },
  {
    name: "Edexcel",
    duration: "1 hr",
    price: "₹1,250",
    bookingLink: "https://www.arcacademy.in/booking-calendar/personalised-learning-4"
  },
  {
    name: "NEET Biology",
    duration: "1 hr",
    price: "₹1,000",
    bookingLink: "https://www.arcacademy.in/booking-calendar/personalised-learning-2"
  },
  {
    name: "CBSE / ICSE Curriculum",
    duration: "1 hr",
    price: "₹1,000",
    bookingLink: "https://www.arcacademy.in/booking-calendar/personalised-learning-5"
  }
]

const Courses: React.FC = () => {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-primary-50 to-primary-100">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-primary-800 mb-8 text-center">Our Services</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="card flex flex-col">
              <h2 className="card-title">{service.name}</h2>
              <div className="flex items-center mb-2">
                <Clock className="text-primary-600 mr-2" size={18} />
                <span className="card-content">{service.duration}</span>
              </div>
              <div className="flex items-center mb-4">
                <DollarSign className="text-primary-600 mr-2" size={18} />
                <span className="card-content">{service.price}</span>
              </div>
              <a 
                href={service.bookingLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-auto btn btn-primary flex items-center justify-center"
              >
                Book Now <ExternalLink className="ml-2" size={18} />
              </a>
            </div>
          ))}
        </div>

        <div className="card">
          <h2 className="card-title">Contact Information</h2>
          <p className="card-content mb-2"><strong>Address:</strong> Shah Heritage, Seawoods, Opp Seawoods DMart, Navi Mumbai 400 706</p>
          <p className="card-content mb-2"><strong>Telephone:</strong> 93729 73526</p>
          <p className="card-content"><strong>Email:</strong> [email protected]</p>
        </div>
      </div>
    </div>
  )
}

export default Courses