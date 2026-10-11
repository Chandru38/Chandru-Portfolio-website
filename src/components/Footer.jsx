import { FaGithub, FaLinkedin, FaTwitter, FaHeart, FaInstagram } from "react-icons/fa"


const Footer = ({ darkMode }) => {
    const currentYear=new Date().getFullYear()
  return (
    <footer style={{
        background:darkMode ? '#11827' : '#f9fafb',
        borderColor: darkMode ? '#374151' : '#d1d5db'
    }} className="border-t">
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold mb-2"
                    // text-orange-500 dark:text-white
                    style={{
                        background:'linear-gradient(to right, #f97316, #f59e0b)',
                        WebkitBackgroundClip:'text',
                        backgroundClip:'text',
                        color:'transparent'
                    }}>
                        Portfolio
                    </h3>
                    <p className="text-sm"
                    style={{
                        color: darkMode ? '#9ca3af' : '#6b7280'
                    }}>
                        Python Developer & Web Designer
                    </p>
                </div>
                <div className="flex gap-4">
                    <a href='https://github.com/Chandru38?tab=repositories' target='_blank' rel='noopener noreferrer' 
                    className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-all hover:bg-linear-to-r hover:from-orange-500 hover:to-amber-500 hover:text-white bg-[#374151] dark:bg-[#f3f4f6] text-white dark:text-[#374151]">
                        <FaGithub/>
                    </a>

                    <a href='https://linkedin.com/in/chandru-s16' target="_blank"
                    className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-all hover:bg-linear-to-r hover:from-orange-500 hover:to-amber-500 hover:text-white bg-[#374151] dark:bg-[#f3f4f6] text-white dark:text-[#374151]">
                        <FaLinkedin/>
                    </a>

                    <a href='https://www.instagram.com/s_chandru_38/' target="_blank"
                    className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-all hover:bg-linear-to-r hover:from-orange-500 hover:to-amber-500 hover:text-white bg-[#374151] dark:bg-[#f3f4f6] text-white dark:text-[#374151]">
                        <FaInstagram/>
                    </a>
                </div>
                <div className="text-center md:text-right">
                    <p className="text-sm flex items-center justify-center md:justify-end gap-1 text-[#6b7280] dark:text-[#9ca3af]">
                        ©{currentYear} Made with
                        <FaHeart className='text-red-500'/>
                        by <span className="text-[#f97316]">Chandru</span>
                    </p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
