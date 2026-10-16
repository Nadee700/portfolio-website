import React, { useEffect, useState } from 'react'
import { FaLinkedin } from 'react-icons/fa'
import certificateImage from '../assets/images/yelka-certificate.png'
import essentialTraining from '../assets/images/react-essentical-traning.png'
import buildingInterface from '../assets/images/building-interface.png'
import aspnetReact from '../assets/images/aspnet-react.png'

const certificates = [
  {
    title: 'React.js Essential Training',
    issuer: 'LinkedIn',
    issued: 'Issued Aug 2021',
    skills: ['JavaScript', 'React Hooks', '+1 skill'],
    image: essentialTraining,
  },
  {
    title: 'React.js: Building an Interface',
    issuer: 'LinkedIn',
    issued: 'Issued Aug 2021',
    skills: ['JavaScript', 'React Hooks', '+1 skill'],
    image: buildingInterface,
  },
  {
    title: 'Building React and ASP.NET Core Applications',
    issuer: 'LinkedIn',
    issued: 'Issued Jul 2021',
    skills: ['React Hooks', 'HTML'],
    image: aspnetReact,
  },
]

const Certificates = () => {
  const [openCertificate, setOpenCertificate] = useState(null)

  useEffect(() => {
    if (!openCertificate) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpenCertificate(null)
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [openCertificate])

  return (
    <section id="certificates" className="relative overflow-hidden py-12 sm:py-14">
      <div className="container mx-auto px-4 sm:px-8 lg:px-14">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:gap-12">
          <div className="flex w-full justify-center lg:w-2/5" data-aos="fade-right">
            <div className="relative group">
              <div className="absolute inset-0 rounded-full bg-linear-to-r from-red-600 to-red-800 opacity-30 blur-2xl filter transition-opacity duration-500 group-hover:opacity-50" />
              <img
                src={certificateImage}
                alt="Yelka holding a certificate"
                className="relative z-10 h-80 w-auto object-contain sm:h-96"
              />
            </div>
          </div>

          <div className="w-full lg:w-3/5" data-aos="fade-left">
            <div className="liquid-glass mb-5 inline-flex items-center gap-2 rounded-full px-4 py-1.5">
              <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
              <span className="text-sm font-medium text-soft">
                My Achievements
              </span>
            </div>
            <h2 className="text-3xl font-medium text-ink sm:text-4xl lg:text-5xl">
              My <span className="text-accent">Certificates</span>
            </h2>
            <p className="mt-4 max-w-xl text-soft">
              LinkedIn Learning courses in React, interface building, and ASP.NET Core.
            </p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {certificates.map((certificate) => (
            <article key={certificate.title} className="glass-card h-full">
              <div className="flex h-full gap-4 px-5 py-4">
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#0A66C2] text-xl text-white"
                  aria-hidden="true"
                >
                  <FaLinkedin />
                </span>
                <div>
                  <h3 className="text-lg font-medium text-ink">{certificate.title}</h3>
                  <p className="mt-1 text-sm text-soft">{certificate.issuer}</p>
                  <p className="mt-1 text-sm text-faint">{certificate.issued}</p>
                  <button
                    type="button"
                    onClick={() => setOpenCertificate(certificate)}
                    className="liquid-glass mt-3 rounded-full px-3 py-1 text-sm font-medium text-ink"
                  >
                    Show credential
                  </button>
                  <p className="mt-3 text-sm text-soft">
                    <span className="text-faint">Skills: </span>
                    {certificate.skills.join(', ')}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {openCertificate && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={openCertificate.title}
          onClick={() => setOpenCertificate(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-3xl overflow-auto rounded-2xl bg-white p-3"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-3 flex items-center justify-between gap-4 px-2">
              <p className="font-medium text-gray-900">{openCertificate.title}</p>
              <button
                type="button"
                onClick={() => setOpenCertificate(null)}
                className="liquid-glass rounded-full px-3 py-1 text-sm font-medium text-gray-900"
              >
                Close
              </button>
            </div>
            <img
              src={openCertificate.image}
              alt={`${openCertificate.title} certificate`}
              className="w-full object-contain"
            />
          </div>
        </div>
      )}
    </section>
  )
}

export default Certificates
