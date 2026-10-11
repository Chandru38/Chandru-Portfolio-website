import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import mail from '../assets/mail.png'
import Python_Developer_Resume from '../assets/Python_Developer_Resume.pdf'
import hero from '../assets/hero.png'
import hi from '../assets/hi.png'
import {DownloadIcon, Mail} from 'lucide-react'

const Hero = ({darkMode}) => {
    const socialIcons = [
        // {icon:instagram, alt: 'Instagram', link:'https://www.instagram.com/s_chandru_38/'},
        {icon:github, alt: 'GitHub', link:'https://github.com/Chandru38?tab=repositories'},
        {icon:linkedin, alt: 'LinkedIn', link:'https://linkedin.com/in/chandru-s16'},
        {icon:mail, alt: 'Mail', link:'#contact'}
    ];

    const darkTheme = {
        textPrimary: 'text-white',
        textSecondary: 'text-gray-300',
        buttonSecondary: `text-white border-2 border-orange-500 hover:bg-orange-600`, 
        decorativeCircle: 'bg-orange-500 opacity-10',
    };
    
    const lightTheme = {
        textPrimary: 'text-gray-900',
        textSecondary: 'text-gray-700',
        buttonSecondary: `text-gray-800 border-2 border-orange-500 hover:bg-orange-500 hover:text-white`, 
        decorativeCircle: 'bg-orange-400 opacity-20',
    };

    const theme = darkMode ? darkTheme : lightTheme;

    
    
  return (
    <div className='relative overflow-hidden min-h-screen flex flex-col'>
      <section
      id='home'
      // data-aos='fade-up'
      // data-aos-delay='250'
      className='body-font z-10'>
        <div className='container mx-auto flex px-4 sm:px-8 lg:px-14 py-12 lg:py-14 flex-col lg:flex-row items-center justify-between lg:mt-14 mt-14'>
          <div className='lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-left mb-12 lg:mb-0'>
            <div className='flex justify-center lg:justify-start gap-4 sm:gap-6 mb-6 sm:mb-7 w-full'>
              {socialIcons.map((social, index)=>(
                <a
                key={index}
                href={social.link}
                target={social.alt === 'Mail' ? '_self' : '_blank'}
                rel='noopener noreferrer'
                aria-label={social.alt}
                // data-aos-delay={`${400+ index * 100}`}
                data-aos='fade-up'
                data-aos-delay='250'
                className='transform hover:scale-110 transition-transform duration-300'>
                  <img 
                  src={social.icon} 
                  alt={social.alt}
                  className={`w-8 h-8 sm:w-10 sm:h-10 object-contain ${darkMode ? '' : 'filter brightness-75'}`}/>

                </a>
              ))}
            </div>
            <h1 className={`title-font text-3xl sm:text-4xl lg:text-5xl mb-4 font-bold ${theme.textPrimary}`}
            data-aos='fade-up'
            data-aos-delay='500'>
              Hi, I'm Chandru
            </h1>
            <p className={`mb-6 sm:mb-8 leading-relaxed max-w-md sm:max-w-lg ${theme.textSecondary}`}
            data-aos= 'fade-up'
            data-aos-delay= '600'>
              <h2 className='text-orange-400 font-semibold text-base sm:text-lg mb-3'
              data-aos='fade-up'
              data-aos-delay='550'
              style={{
                    background: 'linear-gradient(to right, #f97316, #f59e0b)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent'
                }}>Python Developer | AI & Data Science graduate</h2>
              <p className={`mb-6 sm:mb-8 leading-relaxed max-w-md sm:max-w-lg ${theme.textSecondary}`}
              data-aos='fade-up'
              data-aos-delay='600'>
                I build Python applications and responsive web interfaces, from backend logic to React frontends.
              </p>
              
            </p>
            {/* Buttons */}
            <div className='w-full pt-4 sm:pt-6'>
              <div className='flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4'
            data-aos= 'fade-up'
            data-aos-delay='700'>
              <a href={Python_Developer_Resume}download className=''>
                <button className='w-full sm:w-auto inline-flex items-center justify-center text-white bg-linear-to-r from-orange-500 to-amber-500 border-0 py-3 px-6 sm:px-8 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)]
                rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform'>
                  {/* <img src={DownloadIcon} alt='Download' className='w-4 h-4 sm:h-5 sm:w-5 mr-2'/> */}
                  <DownloadIcon className='w-4 h-4 sm:h-5 sm:w-5 mr-2'/>
                  Download Resume
                </button>
              </a>
              <a href='#contact' className='w-full sm:w-auto'>
                <button className={`w-full sm:w-auto inline-flex items-center ${theme.buttonSecondary} justify-center border-0 py-3 px-6 sm:px-8 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)]
                rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform`}>
                  <Mail className='w-4 h-4 sm:w-5 sm:h-5 mr-2 '/>
                  Contact Me
                </button>   
              </a>
              </div>
            </div>
          </div>
          {/*Image*/}
          <div className='lg:w-1/2 w-full max-w-md lg:max-w-lg mt-4 lg:mt-0 flex justify-center'
          data-aos='fade-left'
          data-aos-delay='400'>
            <div className='relative w-full sm:w-3/4 lg:w-full'>
              <div className='relative overflow-hidden'>
                <img src={hero} alt='Hero Image' width={800} height={800}
                className='w-full h-auto sm:w-full sm:h-full object-cover transform hover:scale-105 transition-transform duration-500'/>
              </div>
              <img src={hi} alt='Hi icon'
              className='absolute top-[1%] right-[12%]  w-[21%] h-auto  object-contain animate-bounce opacity-90 z-10 '/>
            </div>
          </div>
        </div>
        <div className={`absolute -top-20 -left-20 w-40 h-40 sm:w-64 sm:h-64 ${theme.decorativeCircle} rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000 pointer-events-none`}>

        </div>
      </section>
    </div>
  )
}

export default Hero
