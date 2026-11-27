import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Addovation Change',
    date: 'April 2026',
    role: 'Fullstack Development',
    summary:
      'Built frontend features and product improvements, connecting the ReactJS interface with the .NET services behind it.',
    highlights: [
      'Developed new screens and refinements in ReactJS.',
      'Worked across the stack with .NET to support those features.',
    ],
    technologies: ['ReactJS', '.NET'],
  },
  {
    title: 'OAS365 Outlook Add-in',
    date: 'June 2023',
    role: 'Frontend Development & UI/UX',
    summary:
      'An Outlook add-in for everyday work inside the mailbox. I built the interface so it feels native to Outlook and stays comfortable on any screen.',
    highlights: [
      'Developed the add-in with ReactJS, Redux, and Fluent UI.',
      'Designed the screens around how people actually use the tool.',
      'Made the layout responsive across devices.',
    ],
    technologies: ['ReactJS', 'Redux', 'Fluent UI'],
  },
  {
    title: 'DocGen Service',
    date: 'August 2022',
    role: 'Frontend Development & UI/UX',
    summary:
      'A document-generation frontend. I helped shape the interface, the feature work, and the notes that explain how the product fits together.',
    highlights: [
      'Built features with ReactJS and React Hooks.',
      'Used Bootstrap to improve the layout and overall experience.',
      'Took part in the UI/UX design as well as the development.',
      'Wrote project documentation in Markdown.',
    ],
    technologies: ['ReactJS', 'React Hooks', 'Bootstrap', 'Markdown'],
  },
  {
    title: 'CRMsync',
    date: 'March 2022',
    role: 'Frontend Development & UI/UX',
    summary:
      'An add-in that keeps CRM tasks close to the tools people already work in. I built features and helped the interface feel consistent and easy to follow.',
    highlights: [
      'Developed the add-in with ReactJS, React Hooks, Fluent UI, and styled components.',
      'Used Fluent UI to strengthen the design and user experience.',
      'Contributed to add-in features and the overall UI/UX.',
    ],
    technologies: ['ReactJS', 'React Hooks', 'Fluent UI', 'Styled Components'],
  },
  {
    title: 'AddoExplorer',
    date: 'August 2021',
    role: 'Frontend Development',
    summary:
      'Frontend work on AddoExplorer, an IFS-based document management system. I focused on the parts people use to browse, move through, and manage documents.',
    highlights: [
      'Developed features with ReactJS and React Hooks.',
      'Styled the interface with Fluent UI and styled components.',
      'Added pagination, plus a responsive sidebar and hamburger menu for mobile.',
      'Contributed to the UI/UX design of the product.',
    ],
    technologies: ['ReactJS', 'React Hooks', 'Fluent UI', 'Styled Components'],
  },
]

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-14"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <div className="liquid-glass mb-5 inline-flex items-center gap-2 rounded-full px-4 py-1.5">
            <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
            <span className="text-sm font-medium text-soft">
              What I've Built
            </span>
          </div>

          <h2 className="text-3xl font-medium text-ink sm:text-4xl lg:text-5xl">
            My <span className="text-accent">Projects</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-soft">
            Product work across Outlook add-ins, document tools, and fullstack features.
          </p>
        </motion.div>

        <div className="grid gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="glass-card p-6 md:p-8"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-medium text-ink md:text-2xl">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-accent">{project.role}</p>
                </div>
                <p className="text-sm font-medium text-faint">{project.date}</p>
              </div>

              <p className="mt-4 max-w-3xl text-sm leading-6 text-soft md:text-base">
                {project.summary}
              </p>

              <ul className="mt-4 space-y-2">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2 text-sm leading-6 text-soft">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="liquid-glass rounded-full px-3 py-1 text-xs font-medium text-accent"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
