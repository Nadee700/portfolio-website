import React, { useEffect, useState } from 'react';
import { FaInstagram, FaTiktok, FaGithub, FaYoutube } from 'react-icons/fa';
import hero from '../assets/images/yelka-hi.png'
import cv from '../assets/cv/YelkaKariyawasam_CV.pdf'
import { DownloadIcon, Eye, Mail } from 'lucide-react';

let viewsPromise;

function loadViewCount() {
    if (!viewsPromise) {
        let alreadyCounted = false;
        try {
            alreadyCounted = sessionStorage.getItem('yelka-view-counted') === '1';
            if (!alreadyCounted) sessionStorage.setItem('yelka-view-counted', '1');
        } catch {
            alreadyCounted = false;
        }

        viewsPromise = fetch('/api/track', { method: alreadyCounted ? 'GET' : 'POST' })
            .then((response) => (response.ok ? response.json() : Promise.reject()))
            .then((data) => (Number.isFinite(data.count) ? data.count : null))
            .catch(() => {
                viewsPromise = null;
                return null;
            });
    }

    return viewsPromise;
}

const Hero = () => {
    const [views, setViews] = useState(null);

    useEffect(() => {
        let active = true;
        loadViewCount().then((value) => {
            if (active && value !== null) setViews(value);
        });
        return () => {
            active = false;
        };
    }, []);

    const socialIcons = [
        { icon: 'FaInstagram', alt: 'Instagram', link: '#' },
        { icon: 'FaTiktok', alt: 'TikTok', link: '#tiktok' },
        { icon: 'FaGithub', alt: 'GitHub', link: '#github' },
        { icon: 'FaYoutube', alt: 'YouTube', link: '#youtube' },
    ]   

  return (
    <section id='home' className='relative overflow-hidden'>
      <div className='container relative z-10 mx-auto px-4 py-8 sm:px-8 lg:px-14 lg:py-10'>
        <div className='flex flex-col items-center gap-8 lg:flex-row lg:gap-12'>
          <div
            className='lg:w-2/5 w-full flex justify-center'
            data-aos='fade-right'
          >
            <div className='relative group'>
              <div className='absolute inset-8 bg-linear-to-r from-red-600 to-red-800 rounded-full filter blur-2xl opacity-30
              group-hover:opacity-50 transition-opacity duration-500'/>
              <img
                src={hero}
                alt='Yelka waving hello'
                className='relative z-10 h-80 w-auto object-contain sm:h-96 lg:h-[28rem] transition-transform duration-500 group-hover:scale-105'
              />
            </div>
            </div>

            <div className='lg:w-3/5 w-full flex flex-col items-center lg:items-start text-center lg:text-left'
            data-aos='fade-left'>
                <div className='mb-5 flex flex-wrap items-center justify-center gap-3 lg:justify-start'>
                    <div className='liquid-glass inline-flex items-center gap-2 rounded-full px-4 py-1.5'>
                        <span className='w-2 h-2 rounded-full bg-green-500 animate-pulse'/>
                        <span className='text-sm font-medium text-soft'>
                            Available for Work
                        </span>
                    </div>
                    {views !== null && (
                        <div className='liquid-glass inline-flex items-center gap-2 rounded-full px-4 py-1.5' aria-label={`${views.toLocaleString()} ${views === 1 ? 'view' : 'views'}`}>
                            <Eye className='h-4 w-4 text-accent' aria-hidden='true' />
                            <span className='text-sm font-medium text-soft'>
                                {views.toLocaleString()} {views === 1 ? 'view' : 'views'}
                            </span>
                        </div>
                    )}
                </div>
                <h1 className='text-4xl sm:text-5xl lg:text-6xl font-medium mb-3 text-ink'>
                    Hi, I'm <span className='text-accent'>Yelka</span>
                </h1>
                <h2 className='mb-4 max-w-xl font-mono text-xl font-medium leading-snug text-accent sm:text-2xl lg:max-w-2xl'>
                    <span className='text-faint'>&lt; </span>Software Engineer
                    <span className='text-faint'> &gt;</span>
                    <span className='mt-2 block text-base font-medium text-soft sm:text-lg'>
                        Frontend-heavy fullstack, AI agent development, and UI/UX
                    </span>
                </h2>
                <p className='mb-4 max-w-xl leading-relaxed text-soft lg:max-w-2xl'>
                    Software Engineer with 5+ years of experience specializing in frontend development, enterprise applications, and UI/UX, with strong domain expertise in developing business-critical enterprise add-ins and web applications.
                </p>
                <p className='mb-6 max-w-xl leading-relaxed text-soft lg:max-w-2xl'>
                    Experienced in building responsive, scalable, and user-friendly solutions using ReactJS, React Hooks, Redux, Fluent UI, Bootstrap, and Styled Components. Proven ability to develop reusable UI components, implement complex application features, and deliver consistent experiences across devices. Strong focus on clean, maintainable architecture, responsive design, application usability, and reliable software solutions in fast-paced enterprise environments.
                </p>
                <div className='flex gap-8 mb-7'>
                    {[
                        { number: '5+', label: 'Years of Experience' },
                        { number: '5+', label: 'Projects Worked on' },
                        // { number: '2+', label: 'Happy Clients' },
                    ].map((stat, index) => (
                        <div key={index} className='text-center'>
                            <div className='text-2xl font-medium text-ink'>{stat.number}</div>
                            <div className='text-xs text-faint'>{stat.label}</div>
                        </div>
                    ))}
                </div>
                <div className='flex flex-col sm:flex-row gap-4 w-full sm:w-auto'>
                    <a
                        href={cv}
                        download="Yelka_Kariyawasam_CV.pdf"
                        className='w-full sm:w-auto'>
                        <button className='liquid-button w-full sm:w-auto'>
                            <DownloadIcon size={18} />
                            Download CV
                        </button>
                    </a>
                    <a
                        href="#contact"
                        className='w-full sm:w-auto'>
                        <button className='liquid-button w-full sm:w-auto'>
                            <Mail size={18} />
                            Hire Me
                        </button>
                    </a>
                </div>    
            </div>
          </div>
        </div>
    </section>
  );
}

export default Hero