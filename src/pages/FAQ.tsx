import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "What programs does ARC ACADEMY offer?",
    answer: "ARC ACADEMY offers a range of programs in biological sciences, including molecular biology, genetics, microbiology, and biotechnology. Our courses cater to both undergraduate and graduate-level students."
  },
  {
    question: "How long are the courses at ARC ACADEMY?",
    answer: "Course durations vary depending on the program. Most of our courses run for 10-16 weeks, with both full-time and part-time options available to suit different schedules."
  },
  {
    question: "Are there any prerequisites for enrolling in ARC ACADEMY courses?",
    answer: "Prerequisites depend on the specific course. While some introductory courses have no prerequisites, advanced courses may require a background in biology or related sciences. Please check individual course descriptions for details."
  },
  {
    question: "Does ARC ACADEMY offer online courses?",
    answer: "Yes, we offer a selection of online and hybrid courses to accommodate distance learners and provide flexible learning options."
  },
  {
    question: "What career opportunities are available after completing a program at ARC ACADEMY?",
    answer: "Graduates from ARC ACADEMY have pursued careers in research institutions, biotechnology companies, pharmaceutical industries, environmental agencies, and academia. Many also continue to higher education in specialized fields of biology."
  },
  {
    question: "Are there scholarship opportunities available?",
    answer: "Yes, ARC ACADEMY offers merit-based scholarships and financial aid options for eligible students. Please contact our admissions office for more information on available scholarships and how to apply."
  }
]

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-green-800 mb-8">Frequently Asked Questions</h1>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <button
              className="flex justify-between items-center w-full p-4 text-left"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-semibold text-green-700">{faq.question}</span>
              {openIndex === index ? <ChevronUp /> : <ChevronDown />}
            </button>
            {openIndex === index && (
              <div className="p-4 bg-gray-50">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQ