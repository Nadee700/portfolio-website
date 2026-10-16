import React from 'react'
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

            <ul className="mt-8 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <li key={skill} className="glass-card px-4 py-2 text-sm font-medium text-ink">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
