import React, { useEffect, useState } from 'react'
import { FaLinkedin } from 'react-icons/fa'
import certificateImage from '../assets/images/yelka-certificate.png'
import essentialTraining from '../assets/images/react-essentical-traning.png'
import buildingInterface from '../assets/images/building-interface.png'
import aspnetReact from '../assets/images/aspnet-react.png'
import oracleAgenticAi from '../assets/images/oracle-agentic-ai-certificate.png'
import oracleBadge from '../assets/images/oracle-agentic-ai-badge.jpg'

const certificates = [
  {
    title: 'Agentic AI Certified Foundations Associate',
    issuer: 'Oracle University',
    issued: 'Issued Nov 27, 2026',
    validUntil: 'Valid until Nov 27, 2028',
    skills: ['Agentic AI'],
    image: oracleAgenticAi,
  },
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
              An Oracle Agentic AI credential and LinkedIn Learning courses in React,
              interface building, and ASP.NET Core.
            </p>
            <div className="mt-6 grid gap-3 lg:grid-cols-2">
              {certificates.map((certificate) => (
                <article
                  key={certificate.title}
                  className="glass-card flex h-full flex-col gap-3 p-3"
                >
                  <div className="flex items-start gap-3">
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-lg text-white ${
                        certificate.issuer === 'LinkedIn'
                          ? 'bg-[#0A66C2]'
                          : 'bg-[#C74634]'
                      }`}
                      aria-hidden="true"
                    >
                      {certificate.issuer === 'LinkedIn' ? (
                        <FaLinkedin />
                      ) : (
                        <img
                          src={oracleBadge}
                          alt=""
                          className="h-full w-full rounded-lg object-cover object-center"
                        />
                      )}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base font-medium leading-snug text-ink">{certificate.title}</h3>
                      <p className="mt-1 text-xs text-soft">{certificate.issuer}</p>
                      <p className="mt-1 text-xs text-accent">
                        {certificate.issued}
                        {certificate.validUntil && ` · ${certificate.validUntil}`}
                      </p>
                    </div>
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {certificate.skills.map((skill) => (
                      <li
                        key={skill}
                        className="liquid-glass rounded-full px-2.5 py-1 text-xs font-medium text-ink"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={() => setOpenCertificate(certificate)}
                    className="mt-auto w-full rounded-lg bg-[#7D3443] px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#682A38] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7D3443] dark:bg-sky-800 dark:hover:bg-sky-700 dark:focus-visible:outline-sky-300"
                  >
                    Show credential
                  </button>
                </article>
              ))}
            </div>
          </div>
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
            className="max-h-[90vh] w-full max-w-3xl overflow-auto rounded-2xl bg-white p-3 dark:bg-slate-800"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-3 flex items-center justify-between gap-4 px-2">
              <p className="font-medium text-gray-900 dark:text-slate-100">{openCertificate.title}</p>
              <button
                type="button"
                onClick={() => setOpenCertificate(null)}
                className="liquid-glass rounded-full px-3 py-1 text-sm font-medium text-gray-900 dark:text-slate-100"
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
