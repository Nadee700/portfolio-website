import React from 'react'
import degreeImage from '../assets/images/yelka-degree.png'
import westminsterLogo from '../assets/images/university_of_westminster_logo.jpeg'
import sliitLogo from '../assets/images/sliit-logo.png'

const academics = [
  {
    institution: 'University of Westminster',
    program: 'Masters, Advanced Software Engineering',
    period: 'May 2023 – Oct 2025',
    grade: 'Merit',
    logo: westminsterLogo,
  },
  {
    institution: 'SLIIT',
    program: 'BSc (Hons) Information Technology specializing in Software Engineering',
    period: '2017 – 2020',
    grade: '',
    logo: sliitLogo,
  },
]

const Academics = () => {
  return (
    <section id="academics" className="relative overflow-hidden py-12 sm:py-14">
      <div className="container mx-auto px-4 sm:px-8 lg:px-14">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-12">
          <div className="order-1 flex w-full justify-center lg:order-2 lg:w-2/5" data-aos="fade-left">
            <div className="relative group">
              <div className="absolute inset-0 rounded-full bg-linear-to-r from-red-600 to-red-800 opacity-30 blur-2xl filter transition-opacity duration-500 group-hover:opacity-50" />
              <img
                src={degreeImage}
                alt="Yelka in graduation attire"
                className="relative z-10 h-80 w-auto object-contain sm:h-96"
              />
            </div>
          </div>

          <div className="order-2 w-full lg:order-1 lg:w-3/5" data-aos="fade-right">
            <div className="liquid-glass mb-5 inline-flex items-center gap-2 rounded-full px-4 py-1.5">
              <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
              <span className="text-sm font-medium text-soft">
                Education
              </span>
            </div>
            <h2 className="text-3xl font-medium text-ink sm:text-4xl lg:text-5xl">
              My <span className="text-accent">Academics</span>
            </h2>
            <p className="mt-4 max-w-xl text-soft">
              Qualifications from my postgraduate and undergraduate studies.
            </p>

            <div className="mt-8 grid gap-4">
              {academics.map((item) => (
<<<<<<< HEAD
                <article key={item.institution} className="glass-card flex min-h-[7.5rem] items-center gap-3 px-4 py-3">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white p-1.5">
=======
                <article key={item.institution} className="glass-card flex min-h-[10.5rem] items-center gap-4 px-5 py-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white p-1.5">
>>>>>>> 1522584e78d6dade0650ab9f10d4a77190fb14b0
                    <img
                      src={item.logo}
                      alt={`${item.institution} logo`}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-medium text-ink">
                      {item.institution}
                    </h3>
                    <p className="mt-1 text-sm text-soft">
                      {item.program}
                    </p>
                    <p className="mt-2 text-sm text-accent">
                      {item.period}
                    </p>
                  </div>
                  {item.grade && (
                    <p className="shrink-0 text-right text-sm font-medium text-accent">
                      <span className="block text-xs font-normal text-faint">Grade</span>
                      {item.grade}
                    </p>
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Academics
