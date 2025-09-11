import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDarkMode } from '../contexts/DarkModeContext.jsx'

function Navbar({ onBlogsClick, profileImage }) {
  const { isDarkMode, toggleDarkMode } = useDarkMode()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleBlogs = (e) => {
    if (onBlogsClick) onBlogsClick(e)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 w-full backdrop-blur-sm z-50 transition-all duration-300 ${isDarkMode ? 'bg-black/95' : 'bg-white/95'}`}>
      <div className={`transition-all duration-300 ${isScrolled ? 'py-2' : 'py-3 sm:py-4'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex justify-center items-center w-full">
            <div className={`relative flex items-center space-x-3 sm:space-x-6 px-3 sm:px-6 py-2 rounded-full border-2 transition-all duration-300 hover:shadow-md ${isDarkMode ? 'bg-gray-900/80 border-lime-400/30 hover:border-lime-400/50 hover:bg-gray-900' : 'bg-white/50 border-gray-300 hover:border-gray-800 hover:bg-white'}`}>
              <div className={`relative flex items-center w-full md:w-auto ${isMenuOpen ? 'justify-end' : 'justify-center'} md:justify-start space-x-3 sm:space-x-6`}>
                {/* Desktop/Tablet */}
                {isScrolled ? (
                  <div className="hidden md:flex items-center space-x-3 sm:space-x-6">
                    <div className={`font-medium text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2 rounded-full transition-colors flex items-center space-x-1 sm:space-x-2 ${isDarkMode ? 'text-lime-400 bg-gray-800 hover:bg-gray-700' : 'text-gray-600 bg-gray-100 hover:bg-gray-200'}`}>
                      <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-lime-400 rounded-full animate-pulse"></div>
                      <span className="hidden sm:inline">Available for work</span>
                      <span className="sm:hidden">Available</span>
                    </div>
                    <button
                      onClick={toggleDarkMode}
                      className={`w-8 sm:w-10 h-4 sm:h-5 rounded-full relative cursor-pointer transition-all duration-300 ${isDarkMode ? 'bg-lime-400' : 'bg-gray-300'}`}
                    >
                      <div className={`w-3 h-3 bg-white rounded-full absolute top-1 transition-all duration-300 shadow-sm ${isDarkMode ? 'translate-x-6' : 'translate-x-1'}`}></div>
                    </button>
                  </div>
                ) : (
                  <div className="hidden md:flex items-center space-x-6">
                    <div className="flex items-center">
                      <div className={`${'w-10 h-10 rounded-full overflow-hidden border-2 transition-all duration-300 hover:shadow-md'} ${isDarkMode ? 'border-lime-400/50 hover:border-lime-400' : 'border-gray-300 hover:border-gray-800'}`}>
                        {profileImage && (
                          <img src={profileImage} alt="Profile" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
                        )}
                      </div>
                    </div>
                    <Link to="/" className={`transition-colors font-medium ${isDarkMode ? 'text-gray-300 hover:text-lime-400' : 'text-gray-600 hover:text-gray-900'}`}>Home</Link>
                    <Link to="/about" className={`transition-colors font-medium ${isDarkMode ? 'text-gray-300 hover:text-lime-400' : 'text-gray-600 hover:text-gray-900'}`}>About</Link>
                    <Link to="/projects" className={`transition-colors font-medium ${isDarkMode ? 'text-gray-300 hover:text-lime-400' : 'text-gray-600 hover:text-gray-900'}`}>Projects</Link>
                    <button onClick={handleBlogs} className={`transition-colors font-medium ${isDarkMode ? 'text-gray-300 hover:text-lime-400' : 'text-gray-600 hover:text-gray-900'}`}>Blogs</button>
                    <div className={`px-4 py-2 rounded-full font-medium flex items-center space-x-2 ${isDarkMode ? 'text-lime-400 bg-gray-800/50' : 'text-gray-600 bg-gray-100/50'}`}>
                      <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse"></div>
                      <span>Available for work</span>
                    </div>
                    <button
                      onClick={toggleDarkMode}
                      className={`w-10 h-5 rounded-full relative cursor-pointer transition-all duration-300 ${isDarkMode ? 'bg-lime-400' : 'bg-gray-300'}`}
                    >
                      <div className={`w-3 h-3 bg-white rounded-full absolute top-1 transition-all duration-300 shadow-sm ${isDarkMode ? 'translate-x-6' : 'translate-x-1'}`}></div>
                    </button>
                  </div>
                )}

                {/* Mobile inline group */}
                <div className={`flex md:hidden items-center w-full ${isMenuOpen ? 'justify-end' : 'justify-center'}`}>
                  <div className={`transition-all duration-300 overflow-hidden rounded-full border ${isDarkMode ? 'border-gray-700 bg-gray-900/95' : 'border-gray-300 bg-white/95'} ${isMenuOpen ? 'w-[280px] px-4 py-2 mr-2' : 'w-0 px-0 py-0 mr-0'}`}>
                    <div className="flex items-center space-x-4">
                      <Link to="/" onClick={() => setIsMenuOpen(false)} className={`text-sm font-medium ${isDarkMode ? 'text-gray-200 hover:text-lime-400' : 'text-gray-700 hover:text-gray-900'}`}>Home</Link>
                      <Link to="/about" onClick={() => setIsMenuOpen(false)} className={`text-sm font-medium ${isDarkMode ? 'text-gray-200 hover:text-lime-400' : 'text-gray-700 hover:text-gray-900'}`}>About</Link>
                      <Link to="/projects" onClick={() => setIsMenuOpen(false)} className={`text-sm font-medium ${isDarkMode ? 'text-gray-200 hover:text-lime-400' : 'text-gray-700 hover:text-gray-900'}`}>Projects</Link>
                      <button onClick={(e) => { handleBlogs(e); setIsMenuOpen(false) }} className={`text-sm font-medium ${isDarkMode ? 'text-gray-200 hover:text-lime-400' : 'text-gray-700 hover:text-gray-900'}`}>Blogs</button>
                    </div>
                  </div>
                  <button
                    aria-label="Toggle menu"
                    className={`inline-flex items-center justify-center w-10 h-10 rounded-full border ${isDarkMode ? 'border-gray-700 text-gray-200 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-100'}`}
                    onClick={() => setIsMenuOpen((v) => !v)}
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                  <button
                    aria-label="Toggle dark mode"
                    onClick={toggleDarkMode}
                    className={`ml-2 inline-flex items-center justify-center w-12 h-6 rounded-full relative transition-colors duration-300 ${isDarkMode ? 'bg-lime-400' : 'bg-gray-300'}`}
                  >
                    <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-300 ${isDarkMode ? 'translate-x-6' : 'translate-x-0'}`}></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar


