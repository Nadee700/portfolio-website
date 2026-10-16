import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Portfolio Website',
    description:
      'A responsive personal portfolio showcasing my skills, projects, and professional achievements.',
    image: '/images/projects/portfolio.png',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    demo: '',
    github: ''
  },
  {
    title: 'Task Management App',
    description:
      'A task management application designed to organize tasks and track progress efficiently.',
    image: '/images/projects/task-manager.png',
    technologies: ['React', 'JavaScript', 'CSS'],
    demo: '',
    github: ''
  },
  {
    title: 'E-Commerce Website',
    description:
      'A modern shopping interface featuring product cards, filtering, and a responsive layout.',
    image: '/images/projects/ecommerce.png',
    technologies: ['React', 'REST API', 'CSS'],
    demo: '',
    github: ''
  }
]

const Projects = () => {
  return (
    <section
      id="projects"
      className=""
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-indigo-600">
            What I've Built
          </p>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            My Projects
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
            Explore some of my projects, the technologies I use,
            and the solutions I enjoy creating.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-gray-700 dark:bg-gray-950"
            >
              <div className="h-52 overflow-hidden bg-gray-100 dark:bg-gray-800">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-5 text-sm font-semibold">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-indigo-600 hover:text-indigo-800"
                    >
                      Live Demo ↗
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-700 hover:text-indigo-600 dark:text-gray-300"
                    >
                      GitHub ↗
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
