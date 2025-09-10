import { useState, useEffect } from 'react'
import './App.css'
import profileImage from './assets/images/profile.png'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 transition-all duration-300">
        <div className={`transition-all duration-300 ${isScrolled ? 'py-3' : 'py-6'}`}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex justify-between items-center w-full">
              {/* Profile Image - Left */}
              <div className="flex items-center">
                <div className={`rounded-full overflow-hidden transition-all duration-300 ${isScrolled ? 'w-10 h-10' : 'w-12 h-12'}`}>
                  <img 
                    src={profileImage}
                    alt="Profile" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
              
              {/* Center Content - Navigation and Contact */}
              <div className="flex items-center justify-center space-x-8">
                {isScrolled ? (
                  <div className="text-gray-600 font-medium text-sm bg-gray-100 px-4 py-2 rounded-full">
                    Available for work
                  </div>
                ) : (
                  <>
                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center space-x-8">
                      <a href="#home" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                        Home
                      </a>
                      <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                        About
                      </a>
                      <a href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                        Projects
                      </a>
                      <a href="#blogs" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                        Blogs
                      </a>
                    </div>
                    
                    {/* Contact Button in Center */}
                    <button className="bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-all transform hover:scale-105 font-medium">
                      Contact
                    </button>
                  </>
                )}
              </div>

              {/* Right Side - Empty for balance */}
              <div className="w-12 h-12"></div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-6 lg:px-12 min-h-screen flex items-center">
        <div className="max-w-none mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 lg:pl-12">
              {/* Name */}
              <div className="space-y-2">
                <h2 className="text-gray-500 text-lg font-normal tracking-widest uppercase">
                  DUNCAN ROBERT
                </h2>
              </div>

              {/* Main Title */}
              <div className="space-y-2">
                <h1 className="text-7xl lg:text-8xl xl:text-9xl font-black text-gray-900 leading-none tracking-tight">
                  DIGITAL
                </h1>
                <h1 className="text-7xl lg:text-8xl xl:text-9xl font-black text-gray-900 leading-none tracking-tight">
                  DESIGNER
                </h1>
              </div>

              {/* Description */}
              <div className="space-y-6 max-w-md pt-4">
                <p className="text-gray-600 leading-relaxed text-base">
                  I'm a US-based digital designer and No-Code Framer developer
                </p>
              </div>

              {/* CTA with Wave Icon */}
              <div className="flex items-center space-x-6 pt-8">
                <div className="relative group">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer">
                    <span className="text-white text-2xl group-hover:hidden transition-all duration-300">
                      👋
                    </span>
                    <span className="text-white text-lg font-medium hidden group-hover:block transition-all duration-300">
                      Hi
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Profile Image */}
            <div className="relative lg:justify-self-center">
              <div className="relative">
                {/* Main Profile Image Container */}
                <div className="w-80 h-80 lg:w-96 lg:h-96 xl:w-[420px] xl:h-[500px] rounded-2xl lg:rounded-3xl overflow-hidden bg-gray-200 hover:scale-105 transition-transform duration-500 cursor-pointer group">
                  <img 
                    src={profileImage}
                    alt="Profile" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Toggle Switch */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                  <div className="w-16 h-8 bg-gray-300 rounded-full relative cursor-pointer hover:bg-gray-400 transition-colors">
                    <div className="w-6 h-6 bg-white rounded-full absolute top-1 left-1 transition-transform duration-300 shadow-sm"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
