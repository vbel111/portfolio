import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDarkMode } from '../contexts/DarkModeContext.jsx'
import profileImage from '../assets/images/profile.png'

function About() {
  const { isDarkMode, toggleDarkMode } = useDarkMode()
  const [showComingSoon, setShowComingSoon] = useState(false)

  // Show coming soon notification
  const handleComingSoon = (e) => {
    e.preventDefault()
    setShowComingSoon(true)
    setTimeout(() => setShowComingSoon(false), 3000)
  }

  return (
    <div className={`min-h-screen w-full transition-colors duration-500 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 w-full backdrop-blur-sm z-50 transition-all duration-300 ${isDarkMode ? 'bg-black/95' : 'bg-white/95'}`}>
        <div className="py-4">
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <div className="flex justify-center items-center w-full">
              {/* Centered Navigation Container */}
              <div className={`flex items-center space-x-6 px-6 py-2 rounded-full border-2 transition-all duration-300 hover:shadow-md ${isDarkMode ? 'bg-gray-900/80 border-lime-400/30 hover:border-lime-400/50 hover:bg-gray-900' : 'bg-white/50 border-gray-300 hover:border-gray-800 hover:bg-white'}`}>
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
                  <Link to="/about" className={`transition-colors font-medium ${isDarkMode ? 'text-lime-400' : 'text-gray-900'}`}>About</Link>
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

      {/* Main Content */}
      <main className="pt-20">
        
        {/* Hero Section */}
        <section className={`py-20 px-6 lg:px-12 min-h-screen flex items-center transition-colors duration-500 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              
              {/* Left Content */}
              <div className="space-y-8">
                <div>
                  <h1 className={`text-5xl lg:text-7xl font-black tracking-tight mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    ABOUT ME
                  </h1>
                  <h2 className={`text-2xl lg:text-3xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    ELVIS OSEI
                  </h2>
                </div>

                <div className="space-y-6">
                  <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    I'm Elvis, a passionate full-stack web developer, freelancer, and Computer Engineering student with a love for building creative digital solutions. I specialize in crafting modern, responsive websites and applications using HTML, CSS, JavaScript, React, Firebase, and Flutter.
                  </p>
                  
                  <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Beyond coding, I'm exploring robotics and embedded systems (Arduino, LEGO robotics), combining my engineering background with software to create innovative projects.
                  </p>

                  <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    As a freelancer, I help individuals, startups, and businesses transform their ideas into professional, scalable, and user-friendly products — from personal portfolios to full web platforms.
                  </p>

                  <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    I'm driven by curiosity, problem-solving, and the excitement of learning. My goal is to keep growing as a developer, contribute to impactful projects, and bridge the gap between technology and real-world needs.
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex space-x-4 py-6">
                  <a href="https://x.com/o6papi?s=21" target="_blank" rel="noopener noreferrer" className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${isDarkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/o6elvis?igsh=MXFuc2J3c21sbWtqaQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${isDarkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/elvis-osei-0797a1314/" target="_blank" rel="noopener noreferrer" className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${isDarkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7.799 5.698c.589 0 1.12.051 1.606.155.485.104.901.272 1.247.505.345.233.615.542.807.928.193.386.289.863.289 1.428 0 .594-.133 1.093-.399 1.497-.266.404-.614.701-1.044.892v.041c.631.204 1.096.566 1.391 1.087.297.521.444 1.133.444 1.838 0 .612-.118 1.155-.353 1.628-.235.473-.569.864-.999 1.174-.431.31-.956.544-1.575.703-.619.158-1.307.237-2.065.237H0V5.698h7.799zm-.68 4.9c.391 0 .717-.058.976-.175.259-.116.472-.277.64-.484.167-.207.29-.453.367-.738.077-.285.116-.595.116-.93 0-.721-.21-1.274-.63-1.66-.419-.386-.98-.578-1.684-.578H2.936v4.565h4.183zm.335 5.706c.455 0 .857-.067 1.207-.202.351-.135.641-.325.871-.571.23-.246.401-.543.512-.891.112-.348.167-.737.167-1.167 0-.793-.237-1.395-.711-1.807-.474-.412-1.114-.618-1.92-.618H2.936v5.256h4.518zM16.282 7.01h5.7v1.404h-5.7V7.01zm2.85 13.613c.746 0 1.392-.176 1.938-.527.546-.351.889-.851 1.03-1.498h2.188c-.352 1.273-.937 2.226-1.757 2.859-.819.633-1.825.949-3.019.949-1.062 0-1.975-.202-2.738-.607-.763-.405-1.382-.956-1.857-1.653-.475-.697-.712-1.495-.712-2.394 0-.899.24-1.697.72-2.394.48-.697 1.121-1.248 1.924-1.653.803-.405 1.689-.607 2.658-.607 1.062 0 1.975.202 2.738.607.763.405 1.335.961 1.717 1.668.382.707.573 1.495.573 2.364 0 .157-.008.315-.024.474-.016.158-.04.305-.073.439h-6.482c.088.797.345 1.394.771 1.791.426.397.946.595 1.561.595zm2.426-4.89c-.088-.718-.306-1.266-.654-1.644-.348-.378-.784-.567-1.307-.567-.455 0-.845.125-1.17.374-.325.249-.559.555-.702.918-.143.363-.201.717-.174 1.062-.027-.041-.055-.082-.086-.124-.031-.042-.066-.079-.105-.112h4.198z"/>
                    </svg>
                  </a>
                  <a href="https://github.com/o6elvisosei" target="_blank" rel="noopener noreferrer" className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${isDarkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Right Content - Profile Image */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="w-80 h-96 lg:w-96 lg:h-[500px] xl:w-[420px] xl:h-[550px] rounded-3xl overflow-hidden bg-gray-200 shadow-2xl">
                    <img 
                      src={profileImage}
                      alt="Elvis Osei" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* My Tech Stack Section */}
        <section className={`py-20 px-6 lg:px-12 transition-colors duration-500 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              
              {/* Left Content */}
              <div className="space-y-8">
                <div>
                  <h2 className={`text-5xl lg:text-6xl font-black tracking-tight mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    MY TECH STACK
                  </h2>
                  <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    I build with purpose using modern technologies. React for dynamic web applications. Firebase for backend solutions. Flutter for cross-platform mobile apps. Each tool helps me deliver scalable, user-focused solutions.
                  </p>
                </div>

                {/* Tech Stack Items */}
                <div className="space-y-6">
                  {/* React */}
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.5a9.5 9.5 0 100 19 9.5 9.5 0 000-19zm0 17a7.5 7.5 0 110-15 7.5 7.5 0 010 15z"/>
                        <path d="M12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm0 7a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        React & JavaScript
                      </h3>
                      <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        My primary tools for building interactive, responsive web applications with modern component-based architecture.
                      </p>
                    </div>
                  </div>

                  {/* Firebase */}
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3.89 15.672L6.255.461A.542.542 0 017.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 00-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 001.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 00-.96 0L3.53 17.984z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Firebase
                      </h3>
                      <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        My go-to backend solution for authentication, real-time databases, and cloud functions - enabling rapid development.
                      </p>
                    </div>
                  </div>

                  {/* Flutter */}
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-blue-400 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.37zm.159 11.871L11.91 14.43l-4.457-4.457 2.563-2.563 4.457 4.457zm5.843 1.13L15.46 18.86l-4.457-4.457 4.856-4.856L20.316 13z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Flutter
                      </h3>
                      <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        For cross-platform mobile development, creating beautiful native apps for both iOS and Android from a single codebase.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Content - Tech Stack Image */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden bg-gray-200 shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1547658719-da2b51169166?w=500&h=500&fit=crop&crop=center"
                      alt="Tech Workspace" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Journey Section */}
        <section className={`py-20 px-6 lg:px-12 transition-colors duration-500 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              
              {/* Left Content */}
              <div className="space-y-8">
                <div>
                  <h2 className={`text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    DISCOVER MY JOURNEY IN DEVELOPMENT
                  </h2>
                  <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    From curious student to full-stack developer, my path has been shaped by a passion for solving real problems through code and technology—blending engineering principles with creative digital solutions.
                  </p>
                </div>

                {/* Experience Timeline */}
                <div className="space-y-8">
                  
                  {/* Education */}
                  <div className="border-l-4 border-blue-600 pl-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        🎓 EDUCATION
                      </h3>
                      <span className="text-blue-600 font-medium text-sm">
                        BSc. Computer Engineering
                      </span>
                    </div>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>
                      First Year, First Semester
                    </p>
                    <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Building a solid foundation in both hardware and software engineering principles, preparing for advanced studies in computer systems and development.
                    </p>
                  </div>

                  {/* Freelancing */}
                  <div className="border-l-4 border-green-500 pl-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        🚀 FREELANCING
                      </h3>
                      <span className="text-green-500 font-medium text-sm">
                        Web Developer
                      </span>
                    </div>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>
                      2022 - Present
                    </p>
                    <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Started freelancing as a web developer, offering services like custom websites, bug fixes, and app prototypes. Helped individuals and startups design and deploy modern, responsive platforms.
                    </p>
                  </div>

                  {/* Personal Projects */}
                  <div className="border-l-4 border-purple-500 pl-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        💡 PERSONAL PROJECTS
                      </h3>
                      <span className="text-purple-500 font-medium text-sm">
                        Innovation
                      </span>
                    </div>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>
                      Ongoing
                    </p>
                    <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Built several platforms including GameSpecsHub, Just Let It Out, dyk.me, and KwikBudget. Exploring robotics projects with Arduino and LEGO, blending hardware and software problem-solving.
                    </p>
                  </div>

                  {/* Future Goals */}
                  <div className="border-l-4 border-orange-500 pl-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        🌱 FUTURE GOALS
                      </h3>
                      <span className="text-orange-500 font-medium text-sm">
                        Vision
                      </span>
                    </div>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>
                      Aspiring
                    </p>
                    <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Grow as a full-stack developer and app builder. Expand into robotics and AI-driven solutions. Contribute to impactful projects that solve real-world problems.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Content - Journey Image */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden bg-gray-200 shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=500&fit=crop&crop=center"
                      alt="Developer Journey" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Floating Code Icon */}
                  <div className="absolute bottom-8 -right-8 w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center shadow-xl">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Let's Work Together Section */}
        <section className={`py-20 px-6 lg:px-12 transition-colors duration-500 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
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
                    Ready to bring your ideas to life? Let's build something amazing together—whether it's your next website, mobile app, or digital platform.
                  </p>
                </div>

                {/* Contact Form */}
                <form className="space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-lime-400' : 'text-blue-600'}`}>
                        Name
                      </label>
                      <input
                        type="text"
                        placeholder="John Smith"
                        className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                          isDarkMode 
                            ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-lime-500' 
                            : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                        } focus:outline-none focus:ring-2 focus:ring-lime-500/20`}
                      />
                    </div>
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-lime-400' : 'text-blue-600'}`}>
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="johnsmith@gmail.com"
                        className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                          isDarkMode 
                            ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-lime-500' 
                            : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                        } focus:outline-none focus:ring-2 focus:ring-lime-500/20`}
                      />
                    </div>
                  </div>

                  {/* Service Needed */}
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-lime-400' : 'text-blue-600'}`}>
                      Service Needed ?
                    </label>
                    <select
                      className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                        isDarkMode 
                          ? 'bg-gray-800 border-gray-700 text-white focus:border-lime-500' 
                          : 'bg-gray-50 border-gray-200 text-gray-900 focus:border-blue-500'
                      } focus:outline-none focus:ring-2 focus:ring-lime-500/20`}
                    >
                      <option value="">Select...</option>
                      <option value="web-development">Web Development</option>
                      <option value="mobile-development">Mobile Development</option>
                      <option value="custom-website">Custom Website</option>
                      <option value="bug-fixes">Bug Fixes & Improvements</option>
                      <option value="app-prototype">App Prototype</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-lime-400' : 'text-blue-600'}`}>
                      Tell me about your project...
                    </label>
                    <textarea
                      rows="4"
                      placeholder="Hello Elvis, I'd like to work with you on..."
                      className={`w-full px-4 py-3 rounded-lg border transition-colors resize-none ${
                        isDarkMode 
                          ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-lime-500' 
                          : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                      } focus:outline-none focus:ring-2 focus:ring-lime-500/20`}
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
      </main>

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
                
                {/* GitHub */}
                <a href="https://github.com/o6elvisosei" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/elvis-osei-0797a1314/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
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
              Created with ❤️ by <span className="text-white">Elvis Osei</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default About
