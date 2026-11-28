import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { ArrowRight } from 'lucide-react';
import about from '../assets/images/yelka-projects.png';

const About = () => {

    const socialLinks = [
        {
            icon: FaGithub,
            label: 'GitHub',
            href: 'https://github.com/Nadee700',
            color: 'hover:text-blue-500 hover:border-blue-500/40',
        },
        {
            icon: FaLinkedin,
            label: 'LinkedIn',
            href: 'https://www.linkedin.com/in/yelkank7/',
            color: 'hover:text-[#0A66C2] hover:border-[#0A66C2]/40',
        },
    ] 

  return (
    <section id='about' className='relative overflow-hidden px-4 py-12 sm:px-6 sm:py-14'>

        <div className='relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center
        gap-8 lg:grid-cols-2 lg:gap-12'>

        <div className='order-2 lg:order-1 flex flex-col items-center lg:items-start
        text-center lg:text-left'
        data-aos='fade-right'>
        
        <div className='liquid-glass mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5'>
            <span className='w-2 h-2 rounded-full bg-red-500 animate-pulse'></span>
            <span className='text-xs sm:text-sm font-medium tracking-wider uppercase
            text-soft'>About Me</span>
        </div>
            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-medium mb-6 text-ink leading-tight'>
            Turning Ideas Into 
            <span className='text-accent block'>Digital Reality</span>
            </h2>
            <p className='mb-4 max-w-xl text-base leading-relaxed text-soft lg:text-lg'>
                I’m driven by curiosity, creativity, and a passion for turning ideas into impactful digital experiences. My journey in software engineering has been shaped by continuous learning, hands-on experience, and a desire to explore what technology can achieve.
            </p>
            <p className='mb-6 max-w-xl text-base leading-relaxed text-soft lg:text-lg'>
                Through my academic journey, from my BSc to my MSc in Advanced Software Engineering, I have developed a strong interest in emerging technologies, particularly Generative AI and Agentic AI, exploring their potential to transform the way we build and interact with software. I’m always eager to embrace new challenges, expand my knowledge, and explore innovative ways to bridge the gap between technology and real-world needs.
            </p>
            <div className='flex gap-4 mb-8'>
                {socialLinks.map((social, index) => {
                    const IconComponent = social.icon
                    return (
                        <a 
                        key={index} 
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        data-aos='zoom-in'
                        data-aos-delay={index * 100}
                        className={`liquid-glass flex h-12 w-12 items-center justify-center rounded-full
                        text-xl text-soft transition-all duration-300
                        hover:scale-110 ${social.color}`}>
                        <IconComponent/>
                        </a>
                    )
                })}
            </div>
               <a href="#contact" data-aos='fade-up' data-aos-delay='300' className='w-full sm:w-auto'>
                    <button className='liquid-button w-full sm:w-auto'>
                        Let's Talk
                        <ArrowRight size={18} />
                    </button>
                </a>  
                </div> 
                <div className='relative order-1 lg:order-2 flex justify-center'
                data-aos='fade-left'>
                    <div className='relative w-full max-w-sm sm:max-w-md'>
                        <div className='absolute inset-8 bg-linear-to-r from-red-600 to-red-800
                        rounded-full filter blur-2xl opacity-30'/>

                        <img src={about}
                        alt="Yelka presenting a project on a laptop"
                        className='relative z-10 h-80 w-auto object-contain sm:h-[28rem]'/>
                        </div>
                    </div>
                </div>   
    </section>
  )
}

export default About