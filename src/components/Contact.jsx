import React from 'react'
import { motion } from 'framer-motion'
import contactImage from '../assets/images/yelka-contact.png'

const Contact = () => {
  return (
    <section
      id="contact"
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
              Get In Touch
            </span>
          </div>

          <h2 className="text-3xl font-medium text-ink sm:text-4xl lg:text-5xl">
            Contact <span className="text-accent">Me</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-soft">
            Have a project in mind or want to discuss an opportunity?
            Feel free to email me.
          </p>
        </motion.div>

        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-2 flex flex-col justify-center md:order-1"
          >
            <h3 className="text-2xl font-medium text-ink">
              Let's work together
            </h3>

            <p className="mt-4 leading-7 text-soft">
              I'm always happy to connect with people, discuss ideas,
              and explore opportunities to create meaningful
              digital experiences.
            </p>

            <div className="mt-8 space-y-5">
              <div>
                <p className="text-sm text-faint">
                  Email
                </p>
                <a
                  href="mailto:yelka.nk95@gmail.com"
                  className="mt-1 inline-block font-medium text-accent hover:underline"
                >
                  yelka.nk95@gmail.com
                </a>
              </div>

              <div>
                <p className="text-sm text-faint">
                  Location
                </p>
                <p className="mt-1 font-medium text-ink">
                  Sri Lanka
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-1 flex justify-center md:order-2"
          >
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-8 rounded-full bg-linear-to-r from-red-600 to-red-800 opacity-30 blur-2xl filter" />
              <img
                src={contactImage}
                alt="Yelka ready to connect"
                className="relative z-10 mx-auto h-80 w-auto object-contain sm:h-[28rem]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
