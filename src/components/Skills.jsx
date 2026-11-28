import React from 'react'
import { FaBehance, FaMedium } from 'react-icons/fa'
import skillsImage from '../assets/images/yelka-skills.png'

const skills = [
  'ReactJS',
  'JavaScript',
  'HTML5',
  'CSS',
  'Redux',
  'Node.js',
  'Bootstrap',
  'Styled Components',
  'Fluent UI',
  'Agentic AI',
  'GenAI',
  'LLM',
  'RAG',
  'LangChain',
]

const Skills = () => {
  return (
    <section id="skills" className="relative overflow-hidden py-12 sm:py-14">
      <div className="container mx-auto px-4 sm:px-8 lg:px-14">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-12">
          <div className="flex w-full justify-center lg:w-2/5" data-aos="fade-right">
            <div className="relative group">
              <div className="absolute inset-8 rounded-full bg-linear-to-r from-red-600 to-red-800 opacity-30 blur-2xl filter transition-opacity duration-500 group-hover:opacity-50" />
              <img
                src={skillsImage}
                alt="Yelka surrounded by technology icons"
                className="relative z-10 h-80 w-auto max-w-full object-contain sm:h-96"
              />
            </div>
          </div>

          <div className="w-full lg:w-3/5" data-aos="fade-left">
            <div className="liquid-glass mb-5 inline-flex items-center gap-2 rounded-full px-4 py-1.5">
              <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
              <span className="text-sm font-medium text-soft">
                Expertise
              </span>
            </div>
            <h2 className="text-3xl font-medium text-ink sm:text-4xl lg:text-5xl">
              My <span className="text-accent">Skills</span>
            </h2>
            <p className="mt-4 max-w-xl text-soft">
              I use these tools to build clear, reliable interfaces for enterprise add-ins and web applications.
            </p>
            <p className="mt-3 max-w-xl text-soft">
              I like learning what a project needs next, and I adopt new libraries and workflows quickly when they make the product better.
            </p>

            <ul className="mt-8 flex max-w-xl flex-wrap gap-3">
              {skills.map((skill) => (
                <li key={skill} className="glass-card px-4 py-2 text-sm font-medium text-ink">
                  {skill}
                </li>
              ))}
            </ul>

            <a
              href="https://www.behance.net/yelkakariyaw1/projects"
              target="_blank"
              rel="noopener noreferrer"
              className="liquid-glass mt-8 flex max-w-xl flex-col gap-4 rounded-2xl p-5 sm:flex-row sm:items-center sm:justify-between"
            >
          <div className="flex items-center gap-4">
            <span
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1769ff] text-2xl text-white"
              aria-hidden="true"
            >
              <FaBehance />
            </span>
            <div>
              <p className="text-lg font-medium text-ink">Behance projects</p>
              <p className="mt-1 text-sm text-soft">
                Interface and design work published on Behance.
              </p>
            </div>
          </div>
              <span className="text-sm font-medium text-accent">View projects</span>
            </a>

            <a
              href="https://medium.com/@yelka.nk7"
              target="_blank"
              rel="noopener noreferrer"
              className="liquid-glass mt-4 flex max-w-xl flex-col gap-4 rounded-2xl p-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-center gap-4">
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-black text-2xl text-white"
                  aria-hidden="true"
                >
                  <FaMedium />
                </span>
                <div>
                  <p className="text-lg font-medium text-ink">Medium</p>
                  <p className="mt-1 text-sm text-soft">
                    Writing published on Medium.
                  </p>
                </div>
              </div>
              <span className="text-sm font-medium text-accent">Read articles</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
