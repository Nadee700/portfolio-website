import React from 'react'

const currentYear = new Date().getFullYear()

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/YOUR_USERNAME'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/YOUR_USERNAME'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/YOUR_USERNAME'
    }
  ]

  const navigationLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Certificates', href: '#certificates' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ]

  return (
    <footer className="border-t ">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <a
            href="#home"
            className="text-2xl font-bold text-gray-900 dark:text-white"
          >
            Portfolio<span className="text-indigo-600">.</span>
          </a>

          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap justify-center gap-x-6 gap-y-3"
          >
            {navigationLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-gray-600 transition hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-indigo-600 hover:text-indigo-600 dark:border-gray-700 dark:text-gray-300 dark:hover:text-indigo-400"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-6 text-center dark:border-gray-800">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {currentYear} Your Name. All rights reserved.
          </p>

          <a
            href="#home"
            className="mt-3 inline-block text-sm font-medium text-indigo-600 transition hover:text-indigo-800"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer