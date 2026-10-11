import {FaExternalLinkAlt, FaGithub} from 'react-icons/fa'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'

const Projects = ({darkMode}) => {
    const projects=[
        {
            id:1,
            title:'Front-end web design',
            desc:'A fully responsive business landing page with a lead-capture form, feature highlights, testimonials and a call-to-action section, built with HTML, CSS and Bootstrap.',
            image:project1,
            tags:['HTML','CSS'],
            code:'https://github.com/Chandru38/web-development',
            demo:'https://web-development-nine-beta.vercel.app/'
        },
        {
            id:2,
            title:'Plant leaf disease detection from image',
            desc:'PlantDoc is a web app that detects plant leaf diseases from an uploaded image using a CNN model and suggests remedies in real time.',
            image:project2,
            tags:['React','Python','Vercel','Hugging Face'],
            code:'https://github.com/Chandru38/PlantDoc_website_2026',
            demo:'https://plant-doc-website-2026.vercel.app/'
        },
        {
            id:3,
            title:'Air Gesture Writing',
            desc:'A touchless writing system that tracks 21 hand landmarks through a webcam using OpenCV and MediaPipe, with multi-color drawing, brush control and an eraser tool.',
            image:project3,
            tags:['Python','Javascript','Vercel'],
            code:'https://github.com/Chandru38/Air-Gesture-Writing',
            demo:'https://air-gesture-writing-app.vercel.app/'
        }        
    ];
  return (
    <section id='projects'
    style={{
        backgroundColor: darkMode ? '#111827': '#f9fafb'
    }} className='relative py-24'>
        <div className='container mx-auto px-4'>
            <div className='text-center mb-20' data-aos='fade-up'>
                <h1 className='sm:text-4xl text-3xl font-bold title-font mb-4'
                style={{
                    color: darkMode ? 'white' : '#1f2937'
                }}> My <span style={{
                    background: 'linear-gradient(to right, #f97316, #f59e0b)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent'
                }}> Projects </span></h1>
                <p className='text-lg max-w-2xl mx-auto leading-relaxed'
                style={{
                    color: darkMode ? '#d1d5db' : '#6b7280'
                }}>
                    A showcase of my recent work
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12'>
                {projects.map((project, index)=>(
                    <div key={project.id}
                    style={{
                        background: darkMode
                        ? 'linear-gradient(to right, #1f2937, #111827)'
                        : 'linear-gradient(to right, #ffffff, #f9fafb)',
                        borderColor: darkMode ? '#374151' : '#e5e7eb'
                    }}className='group h-full flex flex-col rounded-xl border duration-300 hover:border-orange-500/50 transition-all'
                    data-aos='fade-up'
                    data-aos-delay={index*100}>
                        <div className='aspect-video overflow-hidden rounded-t-xl'>
                            <img src={project.image} alt={project.title}
                            className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'/>
                        </div>
                        <div className='p-4 flex flex-col flex-1'>
                            <h3 className='text-lg font-bold mb-2'
                            style={{
                                color: darkMode ? 'white' : '#1f2937'
                            }}>
                                {project.title}
                            </h3>
                            <p className='text-sm mb-3'
                            style={{
                                color:darkMode ? '#d1d5db' : '#6b7280'
                            }}>
                                {project.desc}
                            </p>
                            <div className='flex flex-wrap gap-1.5 mb-4'>
                                {project.tags.map((tag,idx)=>(
                                    <span key={idx}
                                    style={{
                                        backgroundColor: darkMode ? '#374151' : '#f3f4f6',
                                        color: darkMode ? '#d1d5db' : '#4b5563'
                                    }} className='px-2 py-1 text-xs rounded-full'>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className='flex gap-2 mt-auto'>
                                <a href={project.code} target='_blank' rel='noopener noreferrer'
                                style={{
                                    backgroundColor:darkMode ? '#374151' : '#f3f4f6',
                                    color: darkMode ? 'white' : '#374151'
                                }} className='flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm rounded-lg hover:opacity-90 transition-colors'
                                data-aos='zoom-in'
                                data-aos-delay='300'>
                                    <FaGithub className='text-sm'/>
                                    <span>Code</span>
                                </a>
                                {/* Demo */}
                                <a href={project.demo} target='_blank' rel='noopener noreferrer'
                                style={{
                                    background:'linear-gradient(to right, #f97316, #f59e0b)',
                                }} className='flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-white text-sm rounded-lg hover:shadow-lg hover:shadow-orange-500/25 transition-all'
                                data-aos='zoom-in'
                                data-aos-delay='400'>
                                    <FaExternalLinkAlt className='text-sm'/>
                                    <span>Demo</span>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='text-center mt-10'>
                <a href='https://github.com/Chandru38?tab=repositories' target='_blank' rel='noopener noreferrer'
                style={{
                    background:'linear-gradient(to right, #f97316, #f59e0b)',
                }} className='inline-flex items-center font-semibold gap-2 px-7 py-4 text-white text-sm rounded-full hover:shadow-lg hover:shadow-orange-500/25 transition-all'
                data-aos='zoom-in'
                data-aos-delay='400'>
                    <FaGithub />
                    <span>View All Projects</span>
                    <FaExternalLinkAlt className='text-sm'/>
                </a>
            </div>
        </div>
    </section>    
  );
};
export default Projects
