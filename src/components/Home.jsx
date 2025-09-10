
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDarkMode } from '../contexts/DarkModeContext.jsx'
import '../App.css'
import profileImage from '../assets/images/profile.png'
import gamespechubImage from '../assets/images/gamespechub.png'
import justletitoutImage from '../assets/images/justletitout.png'
import kwikbudgetImage from '../assets/images/kwikbudget.png'
import stratobetImage from '../assets/images/stratobet.png'

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [expandedService, setExpandedService] = useState(null)
  const [servicesInView, setServicesInView] = useState(false)
  const { isDarkMode, toggleDarkMode } = useDarkMode()
  const [currentProject, setCurrentProject] = useState(0)
  const [showComingSoon, setShowComingSoon] = useState(false)

  // Show coming soon notification
  const handleComingSoon = (e) => {
    e.preventDefault()
    setShowComingSoon(true)
    setTimeout(() => setShowComingSoon(false), 3000)
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
      
      // Check if services section is in view
      const servicesSection = document.getElementById('services-section')
      if (servicesSection) {
        const rect = servicesSection.getBoundingClientRect()
        const isInView = rect.top < window.innerHeight && rect.bottom > 0
        setServicesInView(isInView)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleService = (index) => {
    setExpandedService(expandedService === index ? null : index)
  }

  // Projects data
  const projects = [
    {
      id: 1,
      title: "GAMESPECHUB",
      description: "A comprehensive gaming platform connecting gamers with the latest specs, reviews, and community features. Built with modern web technologies.",
      category: "Web Development",
      categoryColor: "blue",
      image: gamespechubImage
    },
    {
      id: 2,
      title: "JUSTLETITOUT",
      description: "A mental health platform providing safe spaces for expression and community support. Empowering users to share and heal together.",
      category: "Mental Health",
      categoryColor: "purple",
      image: justletitoutImage
    },
    {
      id: 3,
      title: "KWIKBUDGET",
      description: "A smart budgeting application helping users manage finances with intelligent insights and tracking. Make informed financial decisions.",
      category: "Finance",
      categoryColor: "green",
      image: kwikbudgetImage
    },
    {
      id: 4,
      title: "STRATOBET",
      description: "A strategic gaming platform with advanced analytics and competitive features for esports enthusiasts. Elevate your gaming strategy.",
      category: "Gaming",
      categoryColor: "red",
      image: stratobetImage
    }
  ]

  // Navigation functions
  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  // Touch/swipe handlers
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  const minSwipeDistance = 50

  const onTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    
    if (isLeftSwipe) {
      nextProject()
    } else if (isRightSwipe) {
      prevProject()
    }
  }

  const getCategoryColorClass = (color) => {
    const colorMap = {
      blue: 'bg-blue-600',
      purple: 'bg-purple-600',
      green: 'bg-green-600',
      red: 'bg-red-600'
    }
    return colorMap[color] || 'bg-blue-600'
  }

  return (
    <div className={`min-h-screen w-full transition-colors duration-300 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-gray-900'}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 w-full backdrop-blur-sm z-50 transition-all duration-300 ${isDarkMode ? 'bg-black/95' : 'bg-white/95'}`}>
        <div className={`transition-all duration-300 ${isScrolled ? 'py-2' : 'py-3 sm:py-4'}`}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="flex justify-center items-center w-full">
              {/* Centered Navigation Container */}
              <div className={`flex items-center space-x-3 sm:space-x-6 px-3 sm:px-6 py-2 rounded-full border-2 transition-all duration-300 hover:shadow-md ${isDarkMode ? 'bg-gray-900/80 border-lime-400/30 hover:border-lime-400/50 hover:bg-gray-900' : 'bg-white/50 border-gray-300 hover:border-gray-800 hover:bg-white'}`}>
                {isScrolled ? (
                  <>
                    <div className={`font-medium text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2 rounded-full transition-colors flex items-center space-x-1 sm:space-x-2 ${isDarkMode ? 'text-lime-400 bg-gray-800 hover:bg-gray-700' : 'text-gray-600 bg-gray-100 hover:bg-gray-200'}`}>
                      <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-lime-400 rounded-full animate-pulse"></div>
                      <span className="hidden sm:inline">Available for work</span>
                      <span className="sm:hidden">Available</span>
                    </div>
                    {/* Dark Mode Toggle */}
                    <button
                      onClick={toggleDarkMode}
                      className={`w-8 sm:w-10 h-4 sm:h-5 rounded-full relative cursor-pointer transition-all duration-300 ${isDarkMode ? 'bg-lime-400' : 'bg-gray-300'}`}
                    >
                      <div className={`w-3 h-3 bg-white rounded-full absolute top-1 transition-all duration-300 shadow-sm ${isDarkMode ? 'translate-x-6' : 'translate-x-1'}`}></div>
                    </button>
                  </>
                ) : (
                  <>
                    {/* Profile Image */}
                    <div className="flex items-center">
                      <div className={`w-10 h-10 rounded-full overflow-hidden border-2 transition-all duration-300 hover:shadow-md ${isDarkMode ? 'border-lime-400/50 hover:border-lime-400' : 'border-gray-300 hover:border-gray-800'}`}>
                        <img 
                          src={profileImage}
                          alt="Profile" 
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    </div>
                    
                    {/* Navigation Links */}
                    <div className="flex items-center space-x-6">
                      <Link to="/" className={`transition-colors font-medium ${isDarkMode ? 'text-gray-300 hover:text-lime-400' : 'text-gray-600 hover:text-gray-900'}`}>Home</Link>
                      <Link to="/about" className={`transition-colors font-medium ${isDarkMode ? 'text-gray-300 hover:text-lime-400' : 'text-gray-600 hover:text-gray-900'}`}>About</Link>
                      <Link to="/projects" className={`transition-colors font-medium ${isDarkMode ? 'text-gray-300 hover:text-lime-400' : 'text-gray-600 hover:text-gray-900'}`}>Projects</Link>
                      <button onClick={handleComingSoon} className={`transition-colors font-medium ${isDarkMode ? 'text-gray-300 hover:text-lime-400' : 'text-gray-600 hover:text-gray-900'}`}>Blogs</button>
                    </div>
                    
                    {/* Available for work with green dot */}
                    <div className={`px-4 py-2 rounded-full font-medium flex items-center space-x-2 ${isDarkMode ? 'text-lime-400 bg-gray-800/50' : 'text-gray-600 bg-gray-100/50'}`}>
                      <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse"></div>
                      <span>Available for work</span>
                    </div>

                    {/* Dark Mode Toggle */}
                    <button
                      onClick={toggleDarkMode}
                      className={`w-10 h-5 rounded-full relative cursor-pointer transition-all duration-300 ${isDarkMode ? 'bg-lime-400' : 'bg-gray-300'}`}
                    >
                      <div className={`w-3 h-3 bg-white rounded-full absolute top-1 transition-all duration-300 shadow-sm ${isDarkMode ? 'translate-x-6' : 'translate-x-1'}`}></div>
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Coming Soon Notification */}
      {showComingSoon && (
        <div className={`fixed top-24 right-6 z-50 px-6 py-3 rounded-lg shadow-lg transform transition-all duration-500 ease-in-out ${isDarkMode ? 'bg-lime-400 text-black' : 'bg-blue-600 text-white'}`}>
          <div className="flex items-center space-x-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span className="font-medium">Blogs Coming Soon!</span>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-12 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          {/* Main Layout: Three columns fitting the page */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-16 items-center h-full">
            
            {/* Left Content - Name and FULL STACK */}
            <div className="flex flex-col justify-center space-y-3 sm:space-y-4 text-center lg:text-left">
              {/* Name above FULL STACK */}
              <div>
                <h2 className={`text-sm sm:text-base lg:text-lg font-normal tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-3 sm:mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  ELVIS OSEI
                </h2>
                <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-black leading-[0.85] tracking-tight ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  FULL STACK
                </h1>
              </div>
            </div>

            {/* Center Content - Profile Image with Dark Mode Toggle */}
            <div className="relative flex justify-center items-center order-first lg:order-none">
              <div className="relative">
                {/* Main Profile Image Container */}
                <div className="w-64 h-72 sm:w-72 sm:h-80 md:w-80 md:h-96 lg:w-80 lg:h-96 xl:w-[350px] xl:h-[420px] rounded-2xl sm:rounded-3xl overflow-hidden bg-gray-200 hover:scale-105 transition-transform duration-500 cursor-pointer group shadow-2xl">
                  <img 
                    src={profileImage}
                    alt="Profile" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Overlay on hover */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isDarkMode ? 'bg-lime-600/5' : 'bg-blue-600/5'}`}></div>
                </div>

                {/* Dark Mode Toggle Switch */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                  <button
                    onClick={toggleDarkMode}
                    className={`w-16 h-8 rounded-full relative cursor-pointer transition-all duration-500 shadow-lg ${isDarkMode ? 'bg-lime-500' : 'bg-gray-300'}`}
                  >
                    <div className={`w-6 h-6 bg-white rounded-full absolute top-1 transition-all duration-500 shadow-sm flex items-center justify-center ${isDarkMode ? 'translate-x-8' : 'translate-x-1'}`}>
                      {isDarkMode ? (
                        <svg className={`w-3 h-3 ${isDarkMode ? 'text-lime-600' : 'text-blue-600'}`} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
                        </svg>
                      ) : (
                        <svg className="w-3 h-3 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd"/>
                        </svg>
                      )}
                    </div>
                  </button>
                </div>

                {/* Wave Icon at bottom corner */}
                <div className="absolute -bottom-4 -right-4">
                  <div className="relative group">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl border-3 hover:rotate-12 ${isDarkMode ? 'bg-gradient-to-br from-lime-500 to-green-600 border-gray-800' : 'bg-gradient-to-br from-blue-600 to-purple-600 border-white'}`}>
                      <span className="text-white text-2xl group-hover:hidden transition-all duration-200 animate-bounce">
                        👋
                      </span>
                      <span className="text-white text-sm font-bold hidden group-hover:block transition-all duration-200 animate-pulse">
                        Hello!
                      </span>
                    </div>
                    {/* Ripple effect on hover */}
                    <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 group-hover:scale-150 transition-all duration-500 ${isDarkMode ? 'bg-lime-400' : 'bg-blue-400'}`}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - DEVELOPER and Description */}
            <div className="flex flex-col justify-center space-y-4 sm:space-y-6 text-center lg:text-left">
              {/* DEVELOPER title */}
              <div>
                <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-black leading-[0.85] tracking-tight ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  DEVELOPER
                </h1>
              </div>

              {/* Description below DEVELOPER */}
              <div className="max-w-sm mx-auto lg:mx-0">
                <p className={`leading-relaxed text-sm sm:text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  I'm a Ghana-based full-stack developer and aspiring robotics engineer passionate about 
                  crafting meaningful digital experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services-section" className={`py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-12 relative overflow-hidden transition-colors duration-500 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        {/* Background decorative elements */}
        <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-16 sm:w-32 h-16 sm:h-32 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-12 sm:w-24 h-12 sm:h-24 bg-purple-100 rounded-full opacity-20 animate-bounce"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
            {/* Left Content - Services */}
            <div className="space-y-6 sm:space-y-8">
              {/* Section Title */}
              <div className="space-y-3 sm:space-y-4 text-center lg:text-left">
                <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black leading-tight ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  WHAT I CAN DO FOR YOU
                </h2>
                <p className={`text-base sm:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  As a full-stack developer, I am a problem solver, crafting digital solutions that connect deeply and spark innovation.
                </p>
              </div>

              {/* Services List */}
              <div className="space-y-1 sm:space-y-2">
                {/* Service 1 - Web Development */}
                <div className={`border-b transition-colors ${isDarkMode ? 'border-gray-700 hover:border-gray-600' : 'border-gray-200 hover:border-gray-400'}`}>
                  <button
                    onClick={() => toggleService(1)}
                    className={`w-full flex justify-between items-center py-4 sm:py-6 text-left transition-colors ${isDarkMode ? 'hover:text-lime-400' : 'hover:text-blue-600'}`}
                  >
                    <span className={`text-lg sm:text-xl lg:text-2xl font-bold flex items-center gap-3 sm:gap-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      <span className={`text-lg ${isDarkMode ? 'text-lime-400' : 'text-blue-600'}`}>1.</span>
                      WEB DEVELOPMENT
                    </span>
                    <div className={`transition-transform duration-300 ${expandedService === 1 ? 'rotate-180' : ''}`}>
                      <svg className={`w-6 h-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                      </svg>
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedService === 1 ? 'max-h-48 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
                    <div className={`space-y-3 pl-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      <p className="flex items-start gap-3">
                        <span className={`mt-1 ${isDarkMode ? 'text-lime-400' : 'text-blue-600'}`}>✓</span>
                        Build modern, responsive websites with clean design and smooth functionality.
                      </p>
                      <p className="flex items-start gap-3">
                        <span className={`mt-1 ${isDarkMode ? 'text-lime-400' : 'text-blue-600'}`}>✓</span>
                        Create custom web apps tailored to your needs using HTML, CSS, JavaScript, and Firebase.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Service 2 - App Development */}
                <div className={`border-b transition-colors ${isDarkMode ? 'border-gray-700 hover:border-gray-600' : 'border-gray-200 hover:border-gray-400'}`}>
                  <button
                    onClick={() => toggleService(2)}
                    className="w-full flex justify-between items-center py-6 text-left hover:text-blue-600 transition-colors"
                  >
                    <span className={`text-xl lg:text-2xl font-bold flex items-center gap-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      <span className="text-blue-600 text-lg">2.</span>
                      APP DEVELOPMENT
                    </span>
                    <div className={`transition-transform duration-300 ${expandedService === 2 ? 'rotate-180' : ''}`}>
                      <svg className={`w-6 h-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                      </svg>
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedService === 2 ? 'max-h-48 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
                    <div className={`space-y-3 pl-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      <p className="flex items-start gap-3">
                        <span className="text-blue-600 mt-1">✓</span>
                        Develop cross-platform mobile apps using Flutter.
                      </p>
                      <p className="flex items-start gap-3">
                        <span className="text-blue-600 mt-1">✓</span>
                        Turn existing websites into lightweight, mobile-friendly apps.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Service 3 - Freelance Services */}
                <div className={`border-b transition-colors ${isDarkMode ? 'border-gray-700 hover:border-gray-600' : 'border-gray-200 hover:border-gray-400'}`}>
                  <button
                    onClick={() => toggleService(3)}
                    className="w-full flex justify-between items-center py-6 text-left hover:text-blue-600 transition-colors"
                  >
                    <span className={`text-xl lg:text-2xl font-bold flex items-center gap-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      <span className="text-blue-600 text-lg">3.</span>
                      FREELANCE SERVICES
                    </span>
                    <div className={`transition-transform duration-300 ${expandedService === 3 ? 'rotate-180' : ''}`}>
                      <svg className={`w-6 h-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                      </svg>
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedService === 3 ? 'max-h-48 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
                    <div className={`space-y-3 pl-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      <p className="flex items-start gap-3">
                        <span className="text-blue-600 mt-1">✓</span>
                        Fix bugs, improve UI/UX, and optimize website performance.
                      </p>
                      <p className="flex items-start gap-3">
                        <span className="text-blue-600 mt-1">✓</span>
                        Add new features or redesign outdated websites.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Service 4 - Tech & Robotics */}
                <div className={`border-b transition-colors ${isDarkMode ? 'border-gray-700 hover:border-gray-600' : 'border-gray-200 hover:border-gray-400'}`}>
                  <button
                    onClick={() => toggleService(4)}
                    className="w-full flex justify-between items-center py-6 text-left hover:text-blue-600 transition-colors"
                  >
                    <span className={`text-xl lg:text-2xl font-bold flex items-center gap-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      <span className="text-blue-600 text-lg">4.</span>
                      TECH & ROBOTICS PROJECTS
                    </span>
                    <div className={`transition-transform duration-300 ${expandedService === 4 ? 'rotate-180' : ''}`}>
                      <svg className={`w-6 h-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                      </svg>
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedService === 4 ? 'max-h-48 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
                    <div className={`space-y-3 pl-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      <p className="flex items-start gap-3">
                        <span className="text-blue-600 mt-1">✓</span>
                        Prototype robotics solutions (Arduino, LEGO robotics).
                      </p>
                      <p className="flex items-start gap-3">
                        <span className="text-blue-600 mt-1">✓</span>
                        Explore smart integrations between hardware and software.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Service 5 - Portfolio & Branding */}
                <div className={`border-b transition-colors ${isDarkMode ? 'border-gray-700 hover:border-gray-600' : 'border-gray-200 hover:border-gray-400'}`}>
                  <button
                    onClick={() => toggleService(5)}
                    className="w-full flex justify-between items-center py-6 text-left hover:text-blue-600 transition-colors"
                  >
                    <span className={`text-xl lg:text-2xl font-bold flex items-center gap-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      <span className="text-blue-600 text-lg">5.</span>
                      PORTFOLIO & BRANDING HELP
                    </span>
                    <div className={`transition-transform duration-300 ${expandedService === 5 ? 'rotate-180' : ''}`}>
                      <svg className={`w-6 h-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                      </svg>
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedService === 5 ? 'max-h-48 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
                    <div className={`space-y-3 pl-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      <p className="flex items-start gap-3">
                        <span className="text-blue-600 mt-1">✓</span>
                        Design and launch personal or business portfolio sites.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Animated Workspace Image */}
            <div className="relative flex justify-center lg:justify-end">
              <div className={`relative group transition-all duration-1000 ${servicesInView ? 'transform translate-y-0 opacity-100' : 'transform translate-y-20 opacity-30'}`}>
                {/* Workspace Image Container with Enhanced Animation */}
                <div className="w-96 h-80 lg:w-[500px] lg:h-[400px] rounded-3xl overflow-hidden bg-gray-200 hover:scale-105 transition-all duration-700 cursor-pointer shadow-2xl transform hover:rotate-3 hover:skew-y-1 perspective-1000 group-hover:shadow-3xl">
                  <img 
                    src="https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=500&h=400&fit=crop" 
                    alt="Modern Workspace Setup" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Enhanced overlay with animated gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                  
                  {/* Floating Tech Icons with Staggered Animation */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-0 translate-y-8 group-hover:rotate-12">
                    <div className="bg-white/95 rounded-full p-4 shadow-xl backdrop-blur-sm border border-white/20">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                      </svg>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200 transform group-hover:translate-y-0 translate-y-8 group-hover:-rotate-12">
                    <div className="bg-white/95 rounded-full p-4 shadow-xl backdrop-blur-sm border border-white/20">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                      </svg>
                    </div>
                  </div>

                  <div className="absolute top-1/2 left-4 opacity-0 group-hover:opacity-100 transition-all duration-600 delay-100 transform group-hover:translate-x-0 -translate-x-8">
                    <div className="bg-white/95 rounded-full p-3 shadow-xl backdrop-blur-sm border border-white/20">
                      <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Enhanced Toggle Switch */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                  <div className="w-20 h-10 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full relative cursor-pointer hover:from-blue-400 hover:to-purple-400 transition-all duration-500 shadow-lg">
                    <div className="w-8 h-8 bg-white rounded-full absolute top-1 left-1 transition-all duration-500 shadow-md hover:translate-x-10 hover:shadow-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className={`py-20 px-6 lg:px-12 min-h-screen flex items-center transition-colors duration-500 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Content */}
            <div className="space-y-8">
              {/* About Me Title */}
              <div>
                <h2 className={`text-5xl lg:text-6xl font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  ABOUT ME
                </h2>
              </div>

              {/* About Text */}
              <div className="space-y-6">
                <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  I'm Elvis, a passionate full-stack web developer and Computer Engineering student 
                  with a love for building creative digital solutions.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-8 py-8">
                <div>
                  <div className={`text-4xl lg:text-5xl font-black ${isDarkMode ? 'text-green-400' : 'text-blue-600'}`}>
                    2+
                  </div>
                  <p className={`text-sm font-medium mt-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Years of Experience
                  </p>
                </div>
                <div>
                  <div className={`text-4xl lg:text-5xl font-black ${isDarkMode ? 'text-green-400' : 'text-blue-600'}`}>
                    20+
                  </div>
                  <p className={`text-sm font-medium mt-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Completed Projects
                  </p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className={`text-sm font-medium mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Call Today :
                  </p>
                  <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    +233 (054) 670-1205
                  </p>
                </div>
                <div>
                  <p className={`text-sm font-medium mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Email :
                  </p>
                  <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    xelpap@gmail.com
                  </p>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex space-x-4 py-4">
                <a href="https://x.com/o6papi?s=21" target="_blank" rel="noopener noreferrer" className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${isDarkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/elvis-osei-364b74335?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${isDarkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://github.com/vbel111" target="_blank" rel="noopener noreferrer" className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${isDarkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/o6elvis?igsh=MXFuc2J3c21sbWtqaQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${isDarkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>

              {/* My Story Button */}
              <div className="pt-4">
                <Link 
                  to="/about"
                  className={`inline-block px-8 py-4 rounded-full border-2 font-semibold text-lg transition-all duration-300 hover:scale-105 ${isDarkMode ? 'border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-black' : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'}`}
                >
                  MY STORY
                </Link>
              </div>


            </div>

            {/* Right Content - Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-96 lg:w-96 lg:h-[500px] xl:w-[420px] xl:h-[550px] rounded-3xl overflow-hidden bg-gray-200 shadow-2xl hover:shadow-3xl transition-all duration-500 group cursor-pointer hover:scale-105">
                  <img 
                    src={profileImage}
                    alt="Elvis Osei" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t opacity-40 ${isDarkMode ? 'from-green-900/40 via-transparent to-transparent' : 'from-blue-900/20 via-transparent to-transparent'}`}></div>
                  
                  {/* Floating elements for tech interests */}
                  <div className="absolute top-6 right-6 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                    </svg>
                  </div>

                  <div className="absolute bottom-6 left-6 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                </div>

                {/* Dark Mode Toggle at bottom */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                  <button
                    onClick={toggleDarkMode}
                    className={`w-16 h-8 rounded-full relative cursor-pointer transition-all duration-500 shadow-lg ${isDarkMode ? 'bg-green-500' : 'bg-gray-300'}`}
                  >
                    <div className={`w-6 h-6 bg-white rounded-full absolute top-1 transition-all duration-500 shadow-sm flex items-center justify-center ${isDarkMode ? 'translate-x-8' : 'translate-x-1'}`}>
                      {isDarkMode ? (
                        <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
                        </svg>
                      ) : (
                        <svg className="w-3 h-3 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd"/>
                        </svg>
                      )}
                    </div>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className={`py-20 px-6 lg:px-12 transition-colors duration-500 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <h2 className={`text-5xl lg:text-6xl font-black tracking-tight mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              FEATURED PROJECTS
            </h2>
            <p className={`text-lg max-w-2xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              These selected projects reflect my passion for blending strategy with creativity — solving real problems through thoughtful design and impactful storytelling.
            </p>
          </div>

          {/* Project Carousel */}
          <div className="relative">
            {/* Main Project Display */}
            <div 
              className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden cursor-grab active:cursor-grabbing"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              {/* Current Project Background */}
              <div className="absolute inset-0 group">
                <img 
                  src={projects[currentProject].image}
                  alt={`${projects[currentProject].title} Project`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/50"></div>
                
                {/* Project Content - Bottom Left */}
                <div className="absolute bottom-0 left-0 p-6 lg:p-8 max-w-xl">
                  <div className="mb-3">
                    <span className={`px-3 py-1 text-white text-xs font-medium rounded-full ${getCategoryColorClass(projects[currentProject].categoryColor)}`}>
                      {projects[currentProject].category}
                    </span>
                  </div>
                  <h3 className="text-2xl lg:text-4xl font-black text-white mb-3 tracking-tight">
                    {projects[currentProject].title}
                  </h3>
                  <p className="text-gray-200 text-sm lg:text-base leading-relaxed mb-4 line-clamp-3">
                    {projects[currentProject].description}
                  </p>
                  <button className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors group">
                    <span className="text-sm font-medium">View Project</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button 
                onClick={prevProject}
                className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full backdrop-blur-sm border transition-all duration-300 hover:scale-110 ${isDarkMode ? 'bg-white/10 border-white/20 text-white hover:bg-white/20' : 'bg-black/10 border-black/20 text-white hover:bg-black/20'}`}
              >
                <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
                </svg>
              </button>
              
              <button 
                onClick={nextProject}
                className={`absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full backdrop-blur-sm border transition-all duration-300 hover:scale-110 ${isDarkMode ? 'bg-white/10 border-white/20 text-white hover:bg-white/20' : 'bg-black/10 border-black/20 text-white hover:bg-black/20'}`}
              >
                <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
              </button>

              {/* Project Counter */}
              <div className="absolute top-4 right-4">
                <div className={`px-3 py-1 rounded-full backdrop-blur-sm text-xs font-medium ${isDarkMode ? 'bg-white/10 text-white' : 'bg-black/10 text-white'}`}>
                  {currentProject + 1} / {projects.length}
                </div>
              </div>
            </div>

            {/* Project Indicators/Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentProject 
                      ? (isDarkMode ? 'bg-lime-500 scale-125' : 'bg-blue-600 scale-125')
                      : (isDarkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-300 hover:bg-gray-400')
                  }`}
                />
              ))}
            </div>

            {/* Swipe Instruction */}
            <div className="flex justify-center mt-4 lg:hidden">
              <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Swipe left or right to navigate projects
              </p>
            </div>
          </div>

          {/* Browse All Projects Button */}
          <div className="flex justify-center mt-12">
            <a 
              href="/projects"
              className={`px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105 transform ${isDarkMode ? 'bg-lime-500 text-black hover:bg-lime-600 shadow-lg hover:shadow-xl' : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl'}`}
            >
              BROWSE ALL PROJECTS
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className={`py-20 px-6 lg:px-12 transition-colors duration-500 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Content - Profile Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-80 h-96 lg:w-96 lg:h-[500px] rounded-3xl overflow-hidden bg-gray-200 shadow-2xl">
                  <img 
                    src={profileImage}
                    alt="Elvis Osei" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating "Hi" badge */}
                <div className={`absolute bottom-8 -left-8 w-20 h-20 rounded-full flex items-center justify-center shadow-xl ${isDarkMode ? 'bg-lime-500' : 'bg-blue-600'}`}>
                  <span className={`text-2xl font-bold ${isDarkMode ? 'text-black' : 'text-white'}`}>Hi</span>
                </div>
              </div>
            </div>

            {/* Right Content - Contact Form */}
            <div className="space-y-8">
              {/* Contact Title */}
              <div>
                <h2 className={`text-4xl lg:text-5xl font-black tracking-tight mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  LET'S WORK TOGETHER
                </h2>
                <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Let's build something impactful together—whether it's your brand, your website, or your next big idea.
                </p>
              </div>

              {/* Contact Form */}
              <form className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Smith"
                      className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                        isDarkMode 
                          ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500' 
                          : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                      } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="johnsmith@gmail.com"
                      className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                        isDarkMode 
                          ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500' 
                          : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                      } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                    />
                  </div>
                </div>

                {/* Service Needed */}
                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                    Service Needed ?
                  </label>
                  <select
                    className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                      isDarkMode 
                        ? 'bg-gray-800 border-gray-700 text-white focus:border-blue-500' 
                        : 'bg-gray-50 border-gray-200 text-gray-900 focus:border-blue-500'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                  >
                    <option value="">Select...</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-development">Mobile Development</option>
                    <option value="ui-ux-design">UI/UX Design</option>
                    <option value="robotics">Robotics & IoT</option>
                    <option value="portfolio-branding">Portfolio & Branding</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                    What Can I Help You...
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Hello, I'd like to enquire about..."
                    className={`w-full px-4 py-3 rounded-lg border transition-colors resize-none ${
                      isDarkMode 
                        ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500' 
                        : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className={`w-full md:w-auto px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 transform ${
                      isDarkMode 
                        ? 'bg-lime-500 text-black hover:bg-lime-600 shadow-lg hover:shadow-xl' 
                        : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl'
                    }`}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 px-6 lg:px-12 transition-colors duration-500 ${isDarkMode ? 'bg-gray-900' : 'bg-blue-600'}`}>
        <div className="max-w-7xl mx-auto">
          {/* Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            
            {/* Email */}
            <div className="text-center md:text-left">
              <p className="text-white/80 text-sm mb-2">Email :</p>
              <a href="mailto:xelpap@gmail.com" className="text-white text-lg font-medium hover:text-blue-200 transition-colors">
                xelpap@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="text-center">
              <p className="text-white/80 text-sm mb-2">Call Today :</p>
              <a href="tel:+233546701205" className="text-white text-lg font-medium hover:text-blue-200 transition-colors">
                +233 (054) 670-1205
              </a>
            </div>

            {/* Social */}
            <div className="text-center md:text-right">
              <p className="text-white/80 text-sm mb-4">Social :</p>
              <div className="flex justify-center md:justify-end space-x-4">
                {/* Twitter/X */}
                <a href="https://x.com/o6papi?s=21" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                
                {/* Instagram */}
                <a href="https://www.instagram.com/o6elvis?igsh=MXFuc2J3c21sbWtqaQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/elvis-osei-364b74335?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                
                {/* GitHub */}
                <a href="https://github.com/vbel111" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/60 text-sm mb-4 md:mb-0">
              © Copyright 2025. All Rights Reserved by <a href="#" className="text-white hover:text-blue-200 transition-colors">Elvis Osei</a>
            </div>
            <div className="text-white/60 text-sm">
              Created by <span className="text-white">Elvis Osei</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}



export default Home
