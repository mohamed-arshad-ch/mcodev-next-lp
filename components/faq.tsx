"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"

export function FAQ() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null)

  const questions = [
    {
      question: "What technologies do you use for web development?",
      answer:
        "We specialize in modern web technologies including Next.js, React, TailwindCSS, and Node.js. Our tech stack ensures high-performance, scalable, and maintainable web applications.",
    },
    {
      question: "How long does it typically take to complete a website project?",
      answer:
        "Project timelines vary based on complexity. A basic website typically takes 2-3 weeks, while complex web applications may take 6-8 weeks. We'll provide a detailed timeline during our initial consultation.",
    },
    {
      question: "Do you provide website maintenance services?",
      answer:
        "Yes, we offer comprehensive website maintenance packages that include regular updates, security patches, performance optimization, and technical support to keep your website running smoothly.",
    },
    {
      question: "What type of businesses do you work with?",
      answer:
        "We work with businesses of all sizes, from startups to enterprises, across various industries. Our solutions are tailored to meet specific business requirements and goals.",
    },
    {
      question: "Do you provide SEO services with website development?",
      answer:
        "Yes, all our websites are built with SEO best practices in mind. We also offer dedicated SEO services to improve your website's visibility and ranking on search engines.",
    },
    {
      question: "What support do you offer after the website goes live?",
      answer:
        "We provide 24/7 technical support, regular maintenance, performance monitoring, and continued optimization services after launch to ensure your website performs optimally.",
    },
  ]

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 space-y-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800">Frequently Asked Questions</h2>
          <div className="mx-auto h-1 w-24 bg-primary"></div>
          <p className="mx-auto max-w-2xl text-gray-600">
            Common questions about our web development services and processes
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {questions.map((item, index) => (
            <div
              key={index}
              className="group animate-fade-up cursor-pointer rounded-lg border border-primary/20 bg-white p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
            >
              <div className="flex items-center justify-between">
                <h3 className="pr-4 font-medium text-gray-800 group-hover:text-gray-900">{item.question}</h3>
                <ChevronRight
                  className={`h-5 w-5 text-primary transition-transform duration-300 ${
                    openQuestion === index ? "rotate-90" : ""
                  }`}
                />
              </div>
              {openQuestion === index && (
                <div className="overflow-hidden">
                  <p className="mt-4 animate-fade-down text-gray-600">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

