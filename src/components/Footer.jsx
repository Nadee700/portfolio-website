import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Nadee700'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/yelkank7/'
    }
  ]

  const navigationLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Academics', href: '#academics' },
    { label: 'Certificates', href: '#certificates' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ]

  return (
    <footer className="border-t border-red-500/15 px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <a
            href="#home"
            className="font-display text-2xl font-medium text-ink"
          >
            Yelka<span className="text-accent">.</span>
          </a>

          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap justify-center gap-x-6 gap-y-3"
          >
            {navigationLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-soft transition hover:text-accent"
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
                className="liquid-glass rounded-full px-4 py-2 text-sm font-medium text-soft transition hover:text-accent"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-red-500/15 pt-6 text-center">
          <p className="text-sm text-faint">
            © {currentYear} Yelka. All rights reserved.
          </p>

          <a
            href="#home"
            className="mt-3 inline-block text-sm font-medium text-accent transition hover:opacity-80"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer