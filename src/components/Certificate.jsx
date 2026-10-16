import React from 'react'
import { motion } from 'framer-motion'
import certificateImage from '../assets/images/certificate.png';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
}

const certificates = [
  {
    title: 'Advanced Software Engineering',
    issuer: 'University of Westminster',
    year: '2024',
    image: '/images/certificates/certificate-1.png',
    link: ''
  },
  {
    title: 'React Development',
    issuer: 'Certificate Provider',
    year: '2024',
    image: '/images/certificates/certificate-2.png',
    link: ''
  },
  {
    title: 'Cloud Computing',
    issuer: 'Certificate Provider',
    year: '2025',
    image: '/images/certificates/certificate-3.png',
    link: ''
  }
]

const Certificates = () => {
  return (
    // <section
    //   id="certificates"
    //   className=""
    // >
    //   <div className="mx-auto max-w-6xl">
    //     <motion.div
    //       initial={{ opacity: 0, y: 20 }}
    //       whileInView={{ opacity: 1, y: 0 }}
    //       viewport={{ once: true }}
    //       transition={{ duration: 0.5 }}
    //       className="mb-12 text-center"
    //     >
    //       <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-indigo-600">
    //         My Achievements
    //       </p>

    //       <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
    //         Certificates
    //       </h2>

    //       <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
    //         My certifications and learning achievements that reflect
    //         my commitment to continuous growth.
    //       </p>
    //     </motion.div>

    //     <motion.div
    //       variants={containerVariants}
    //       initial="hidden"
    //       whileInView="visible"
    //       viewport={{ once: true, amount: 0.15 }}
    //       className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
    //     >
    //       {certificates.map((certificate, index) => (
    //         <motion.article
    //           key={certificate.title}
    //           variants={itemVariants}
    //           className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900"
    //         >
    //           <div className="flex h-52 items-center justify-center bg-gray-100 p-4 dark:bg-gray-800">
    //             <img
    //               src={certificate.image}
    //               alt={`${certificate.title} certificate`}
    //               className="max-h-full max-w-full object-contain"
    //               onError={(event) => {
    //                 event.currentTarget.style.display = 'none'
    //               }}
    //             />

    //             <span className="text-sm text-gray-500">
    //               {/* Add your certificate image to the images folder */}
    //             </span>
    //           </div>

    //           <div className="p-6">
    //             <p className="mb-2 text-sm font-medium text-indigo-600">
    //               {certificate.issuer}
    //             </p>

    //             <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
    //               {certificate.title}
    //             </h3>

    //             <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
    //               {certificate.year}
    //             </p>

    //             {certificate.link && (
    //               <a
    //                 href={certificate.link}
    //                 target="_blank"
    //                 rel="noreferrer"
    //                 className="mt-5 inline-block text-sm font-semibold text-indigo-600 hover:text-indigo-800"
    //               >
    //                 View Certificate →
    //               </a>
    //             )}
    //           </div>
    //         </motion.article>
    //       ))}
    //     </motion.div>
    //   </div>
    // </section>

          <section id='certificates'
        className='min-h-screen flex items-center relative overflow-hidden
        py-20'>
            <div className='container mx-auto px-4 sm:px-8 lg:px-14'>
                <div className='flex flex-col lg:flex-row items-center
                gap-12 lg:gap-16'>
                    <div
                    className='lg:w-2/5 w-full flex justify-center'
                    data-aos='fade-right'>
                        <div className='relative group'>
                            <div className='absolute inset-0
                            bg-linear-to-r from-red-600 to-red-800 rounded-full
                            filter blur-2xl opacity-30 group-hover:opacity-50
                            transition-opacity duration-500' />
                            <div className='relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96'>
                                <img
                                  src={certificateImage}
                                  alt="Certificates"
                                  className='w-full h-full object-contain relative z-10'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-3/5 w-full' data-aos='fade-left'>
                        <p className='mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-red-600 dark:text-red-300'>
                            My Achievements
                        </p>
                        <h2 className='text-3xl font-bold text-gray-900 dark:text-white md:text-4xl'>
                            Certificates
                        </h2>
                        <div className='mt-8 grid gap-4'>
                            {certificates.map((certificate) => (
                                <article
                                    key={certificate.title}
                                    className='rounded-2xl border border-white/10 bg-white/10 px-5 py-4 backdrop-blur-sm'
                                >
                                    <p className='text-sm text-red-600 dark:text-red-300'>{certificate.issuer}</p>
                                    <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>{certificate.title}</h3>
                                    <p className='text-sm text-gray-600 dark:text-gray-300'>{certificate.year}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>

  )
}

export default Certificates
