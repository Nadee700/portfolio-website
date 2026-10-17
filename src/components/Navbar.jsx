import React, { useState } from 'react'
import { FaCertificate, FaCode, FaEnvelope, FaGraduationCap, FaHome, FaProjectDiagram, FaUser } from 'react-icons/fa';
import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react';

const Navbar = ({ darkMode, toggleDarkMode }) => {
 
    const [activeTab, setActiveTab] = useState('Home');

    const navItems = [
        { name: 'Home', link: '#home', icon: FaHome},
        { name: 'About', link: '#about', icon: FaUser},
        { name: 'Skills', link: '#skills', icon: FaCode},
        { name: 'Academics', link: '#academics', icon: FaGraduationCap},
        { name: 'Certificates', link: '#certificates', icon: FaCertificate},
        { name: 'Projects', link: '#projects', icon: FaProjectDiagram},
        { name: 'Contact', link: '#contact', icon: FaEnvelope},
    ]
  return (
  <div className='fixed z-50 bottom-0 left-0 right-0 flex justify-center'>
    <motion.nav
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className='relative w-[96%] max-w-5xl mb-4 mx-auto'
    >
        <div className='liquid-glass relative rounded-[1.75rem] px-2 py-2'>
            <div className='absolute -top-5 right-3'>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={toggleDarkMode}
                    aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                    className='liquid-glass rounded-full p-2 transition-colors'>
                        { darkMode ? (
                             <Sun className='w-4 lg:w-5 h-5 lg:h-5 text-white'/>
                        ):(
                            <Moon className='w-4 lg:w-5 h-5 lg:h-5 text-ink'/>
                        )}
                        
                </motion.button>
            </div>
                <div className='flex items-center justify-around gap-1 '>
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = activeTab === item.name;
                        return (
                            <motion.a
                                key={item.name}
                                href={item.link}
                                onClick={() => setActiveTab(item.name)}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className='flex flex-col items-center justify-center gap-0.5 py-1.5 px-2 relative group flex-1'
                            >
                                    {isActive && (
                                        <motion.div
                                            layoutId='activeTab'
                                            className='liquid-glass absolute inset-0 rounded-2xl'
                                            transition={{ duration: 0.3 }}
                                        />
                                    )}
                                    <Icon className={`relative z-10 w-5 h-5 transition-all duration-300 ${
                                        isActive 
                                        ? 'text-ink dark:text-white' 
                                        : 'text-soft group-hover:text-ink dark:text-white/70 dark:group-hover:text-white'
                                    }`} />
                                <span className={`relative z-10 text-[9px] sm:text-[10px] font-medium transition-all duration-300 text-center leading-tight
                                    ${isActive
                                       ? 'text-ink dark:text-white'
                                        : 'text-faint group-hover:text-ink dark:text-white/60 dark:group-hover:text-white' 
                                    }`}>
                                    {item.name}
                                </span>
                            </motion.a>
                        );
                    })}
                </div>
            </div>
    </motion.nav>
  </div>
  )
}

export default Navbar
