import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'

const officeProjects = [
  {
    title: 'Addovation Hackathon 2026',
    date: '2026',
    role: 'Hackathon Team Project',
    summary: 'Team C project created for the Addovation Hackathon 2026.',
    technologies: ['JavaScript'],
    githubUrl: 'https://github.com/Nadee700/Addovation-Hackathon-2026',
  },
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

const academicAndPersonalProjects = [
  {
    title: 'Smart Agriculture MSc Research',
    role: 'Academic Research Project',
    summary:
      'MSc research repository for a smart agriculture project, organized with separate frontend and backend components.',
    technologies: ['TypeScript', 'Python'],
    githubUrl: 'https://github.com/Nadee700/msc_research_smart_agri',
  },
  {
    title: 'MintyFunds',
    role: 'Personal iOS Project',
    summary: 'Swift-based iOS project with dedicated views and calculation modules.',
    technologies: ['Swift', 'iOS'],
    githubUrl: 'https://github.com/Nadee700/MintyFunds',
  },
  {
    title: 'FitPulse Tracker Web App',
    role: 'Personal Web Application',
    summary:
      'Fitness tracking web application with workout routine and meal-related features.',
    technologies: ['ASP.NET MVC', 'C#'],
    githubUrl: 'https://github.com/Nadee700/FitPulseTrackerWebApp',
  },
]

const projectGroups = [
  { title: 'Academic & Personal Projects', projects: academicAndPersonalProjects },
  { title: 'Office Work', projects: officeProjects },
]

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-14"
    >
      <div className="mx-auto max-w-5xl">
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
            Academic and personal projects alongside products I’ve contributed to at work.
          </p>
        </motion.div>

        <div className="grid gap-y-6 md:grid-cols-2 md:items-start md:gap-x-6">
          {projectGroups.map((group, groupIndex) => (
            <section
              key={group.title}
              aria-label={group.title}
              className={
                groupIndex === 1
                  ? 'border-t border-white/60 pt-6 md:border-l md:border-t-0 md:pl-6 md:pt-0'
                  : ''
              }
            >
              <h3 className="mb-4 text-xl font-medium text-ink sm:text-2xl">
                {group.title}
              </h3>
              <div className="grid gap-3">
                {group.projects.map((project, index) => (
                  <motion.article
                    key={project.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="glass-card p-3 sm:p-4"
                  >
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h4 className="text-base font-medium text-ink sm:text-lg">
                          {project.title}
                        </h4>
                        <p className="mt-1 text-xs text-accent sm:text-sm">{project.role}</p>
                      </div>
                      {project.date && (
                        <p className="text-xs font-medium text-faint">{project.date}</p>
                      )}
                    </div>

                    <p className="mt-2 text-sm leading-5 text-soft">
                      {project.summary}
                    </p>

                    {project.highlights?.length > 0 && (
                      <ul className="mt-2 space-y-0.5">
                        {project.highlights.map((highlight) => (
                          <li key={highlight} className="flex gap-2 text-xs leading-4 text-soft">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-red-500" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
                      {project.technologies?.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.map((technology) => (
                            <span
                              key={technology}
                              className="liquid-glass rounded-full px-2.5 py-0.5 text-xs font-medium text-accent"
                            >
                              {technology}
                            </span>
                          ))}
                        </div>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-black px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-[#242424] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8C3B4A] dark:bg-[#30363d] dark:hover:bg-[#484f58] dark:focus-visible:outline-slate-300"
                        >
                          <FaGithub aria-hidden="true" />
                          View on GitHub
                        </a>
                      )}
                    </div>
                  </motion.article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
