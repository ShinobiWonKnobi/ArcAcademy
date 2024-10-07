import React from 'react'

const newsItems = [
  {
    title: "ARC ACADEMY Launches New Biotechnology Program",
    date: "May 15, 2024",
    summary: "In response to growing industry demand, ARC ACADEMY introduces a comprehensive biotechnology program focusing on genetic engineering and bioinformatics.",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    title: "Student Research Symposium Showcases Groundbreaking Projects",
    date: "April 2, 2024",
    summary: "ARC ACADEMY's annual Student Research Symposium highlighted innovative projects in areas ranging from cancer research to environmental microbiology.",
    image: "https://images.unsplash.com/photo-1557425955-df376b5903c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    title: "ARC ACADEMY Partners with Leading Biotech Firm for Internship Program",
    date: "March 10, 2024",
    summary: "A new partnership with GeneTech Solutions will provide ARC ACADEMY students with valuable internship opportunities in the biotech industry.",
    image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    title: "Dr. Amanda Collins Receives Prestigious Teaching Award",
    date: "February 5, 2024",
    summary: "ARC ACADEMY's founder, Dr. Amanda Collins, has been recognized with the National Biology Educators Association's Excellence in Teaching Award.",
    image: "https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  }
]

const News: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-green-800 mb-8">News and Events</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {newsItems.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold text-green-700 mb-2">{item.title}</h2>
            <p className="text-sm text-gray-500 mb-2">{item.date}</p>
            <p className="text-gray-600">{item.summary}</p>
          </div>
        ))}
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Stay Updated</h2>
        <p className="text-gray-600 mb-4">
          Want to stay informed about the latest news, events, and opportunities at ARC ACADEMY? 
          Sign up for our newsletter to receive regular updates directly in your inbox.
        </p>
        <form className="flex">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-grow px-4 py-2 rounded-l-lg border-t border-b border-l text-gray-800 border-gray-200 bg-white"
          />
          <button 
            className="px-4 py-2 rounded-r-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition duration-300"
          >
            Subscribe
          </button>
        </form>
      </section>
    </div>
  )
}

export default News