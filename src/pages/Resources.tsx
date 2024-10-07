import React from 'react'
import { Book, Link, ExternalLink, FileText, Video, Download } from 'lucide-react'

const resources = [
  {
    title: "Introduction to Molecular Biology",
    type: "Study Guide",
    description: "A comprehensive guide covering the basics of molecular biology, including DNA structure, replication, and gene expression.",
    link: "#",
    icon: Book
  },
  {
    title: "Genetics and Inheritance Patterns",
    type: "Interactive Module",
    description: "An interactive learning module exploring various inheritance patterns and genetic disorders.",
    link: "#",
    icon: Link
  },
  {
    title: "Microbiology Techniques",
    type: "Video Series",
    description: "A collection of instructional videos demonstrating essential microbiology laboratory techniques.",
    link: "#",
    icon: Video
  },
  {
    title: "Biotechnology Applications",
    type: "Research Paper",
    description: "A comprehensive review of current biotechnology applications in medicine, agriculture, and environmental science.",
    link: "#",
    icon: FileText
  }
]

const journals = [
  { name: "Nature", url: "https://www.nature.com/" },
  { name: "Science", url: "https://www.science.org/" },
  { name: "Cell", url: "https://www.cell.com/" },
  { name: "PLOS Biology", url: "https://journals.plos.org/plosbiology/" }
]

const additionalResources = [
  { name: "Biology Online Dictionary", url: "https://www.biology-online.org/dictionary/" },
  { name: "Khan Academy Biology", url: "https://www.khanacademy.org/science/biology" },
  { name: "National Center for Biotechnology Information", url: "https://www.ncbi.nlm.nih.gov/" },
  { name: "BioRxiv Preprint Server", url: "https://www.biorxiv.org/" }
]

const Resources: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-green-800 mb-8">Learning Resources</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Study Materials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resources.map((resource, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-start">
              <resource.icon className="text-green-600 mr-4 flex-shrink-0" size={24} />
              <div>
                <h3 className="text-lg font-semibold text-green-700 mb-2">{resource.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{resource.type}</p>
                <p className="text-gray-600 mb-2">{resource.description}</p>
                <a href={resource.link} className="text-green-600 hover:text-green-700 transition duration-300">Access Resource</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Scientific Journals</h2>
        <p className="text-gray-600 mb-4">
          Stay up-to-date with the latest research by exploring these leading scientific journals:
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {journals.map((journal, index) => (
            <li key={index}>
              <a 
                href={journal.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-green-600 hover:text-green-700 transition duration-300"
              >
                <ExternalLink size={18} className="mr-2" />
                {journal.name}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Additional Online Resources</h2>
        <p className="text-gray-600 mb-4">
          Enhance your learning with these valuable online resources:
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {additionalResources.map((resource, index) => (
            <li key={index}>
              <a 
                href={resource.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-green-600 hover:text-green-700 transition duration-300"
              >
                <ExternalLink size={18} className="mr-2" />
                {resource.name}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-green-700 mb-4">ARC ACADEMY Student Portal</h2>
        <p className="text-gray-600 mb-4">
          Access course materials, submit assignments, and track your progress through our student portal.
        </p>
        <a 
          href="#" 
          className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300"
        >
          <Link size={18} className="mr-2" />
          Log in to Student Portal
        </a>
      </section>
    </div>
  )
}

export default Resources