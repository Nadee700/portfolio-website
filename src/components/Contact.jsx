import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <section
      id="contact"
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
            Get In Touch
          </p>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            Contact Me
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
            Have a project in mind or want to discuss an opportunity?
            Feel free to send me a message.
          </p>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Let's work together
            </h3>

            <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
              I'm always happy to connect with people, discuss ideas,
              and explore opportunities to create meaningful
              digital experiences.
            </p>

            <div className="mt-8 space-y-5">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Email
                </p>
                <a
                  href="mailto:YOUR_EMAIL@example.com"
                  className="mt-1 inline-block font-medium text-indigo-600 hover:underline"
                >
                  YOUR_EMAIL@example.com
                </a>
              </div>

              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Location
                </p>
                <p className="mt-1 font-medium text-gray-900 dark:text-white">
                  Sri Lanka
                </p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            action="https://formsubmit.co/YOUR_EMAIL@example.com"
            method="POST"
            className="space-y-5 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900 md:p-8"
          >
            <input
              type="hidden"
              name="_subject"
              value="New Portfolio Contact Message"
            />

            <input
              type="hidden"
              name="_captcha"
              value="true"
            />

            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Your Name
              </label>

              <input
                id="name"
                type="text"
                name="name"
                required
                minLength={2}
                autoComplete="name"
                placeholder="Enter your name"
                className="w-full rounded-lg border border-gray-300 bg-transparent px-4 py-3 text-gray-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-gray-700 dark:text-white"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Your Email
              </label>

              <input
                id="email"
                type="email"
                name="email"
                required
                autoComplete="email"
                placeholder="Enter your email"
                className="w-full rounded-lg border border-gray-300 bg-transparent px-4 py-3 text-gray-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-gray-700 dark:text-white"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Subject
              </label>

              <input
                id="subject"
                type="text"
                name="subject"
                required
                placeholder="Enter the subject"
                className="w-full rounded-lg border border-gray-300 bg-transparent px-4 py-3 text-gray-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-gray-700 dark:text-white"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                required
                minLength={10}
                rows={5}
                placeholder="Write your message..."
                className="w-full resize-y rounded-lg border border-gray-300 bg-transparent px-4 py-3 text-gray-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-gray-700 dark:text-white"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Send Message →
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact