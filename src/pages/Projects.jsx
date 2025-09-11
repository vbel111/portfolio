import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDarkMode } from '../contexts/DarkModeContext.jsx'
import Navbar from '../components/Navbar.jsx'
import profileImage from '../assets/images/profile.png'
import gamespechubImage from '../assets/images/gamespechub.png'
import justletitoutImage from '../assets/images/justletitout.png'
import kwikbudgetImage from '../assets/images/kwikbudget.png'
import stratobetImage from '../assets/images/stratobet.png'

function Projects() {
  const { isDarkMode, toggleDarkMode } = useDarkMode()
  const [filter, setFilter] = useState('All')
  const [hoveredProject, setHoveredProject] = useState(null)
  const [showComingSoon, setShowComingSoon] = useState(false)

  // Show coming soon notification
  const handleComingSoon = (e) => {
    e.preventDefault()
    setShowComingSoon(true)
    setTimeout(() => setShowComingSoon(false), 3000)
  }

  // Projects data with more detailed information
  const projects = [
    {
      id: 1,
      title: "GAMESPECHUB",
      description: "A comprehensive gaming platform connecting gamers with the latest specs, reviews, and community features. Built with modern web technologies for optimal performance.",
      longDescription: "GameSpecsHub is a full-stack web application designed for the gaming community. It features real-time game specifications, user reviews, community forums, and personalized recommendations. The platform uses React for the frontend, Firebase for backend services, and implements advanced search and filtering capabilities.",
      category: "Web Development",
      categoryColor: "blue",
      technologies: ["React", "Firebase", "JavaScript", "CSS3", "HTML5"],
      image: gamespechubImage,
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      completed: true
    },
    {
      id: 2,
      title: "JUSTLETITOUT",
      description: "A mental health platform providing safe spaces for expression and community support. Empowering users to share and heal together.",
      longDescription: "Just Let It Out is a mental health focused web application that provides anonymous support forums, mood tracking, and professional resources. The platform emphasizes user privacy and creates a safe environment for mental health discussions.",
      category: "Web Development",
      categoryColor: "purple",
      technologies: ["React", "Node.js", "Firebase", "CSS3"],
      image: justletitoutImage,
      liveUrl: "htts://justletitout.com",
      githubUrl: "#",
      featured: true,
      completed: true
    },
    {
      id: 3,
      title: "KWIKBUDGET",
      description: "A smart budgeting application helping users manage finances with intelligent insights and tracking. Make informed financial decisions.",
      longDescription: "KwikBudget is a personal finance management app that helps users track expenses, set budgets, and achieve financial goals. Features include expense categorization, budget alerts, and detailed financial analytics.",
      category: "Mobile App",
      categoryColor: "green",
      technologies: ["Flutter", "Dart", "Firebase", "Charts"],
      image: kwikbudgetImage,
      liveUrl: "https://kwik-budget.web.app/",
      githubUrl: "#",
      featured: true,
      completed: false
    },
    {
      id: 4,
      title: "STRATOBET",
      description: "A strategic gaming platform with advanced analytics and competitive features for esports enthusiasts. Elevate your gaming strategy.",
      longDescription: "StratoBet is a comprehensive esports analytics platform that provides detailed game statistics, player performance metrics, and strategic insights for competitive gaming.",
      category: "Web Development",
      categoryColor: "red",
      technologies: ["React", "Firebase", "Chart.js", "CSS3"],
      image: stratobetImage,
      liveUrl: "https://stratobet.vercel.app/",
      githubUrl: "#",
      featured: false,
      completed: false
    },
    {
      id: 5,
      title: "DYK.ME",
      description: "A knowledge sharing platform where users can discover interesting facts and share their own knowledge with the community.",
      longDescription: "DYK.me (Did You Know) is an interactive platform for sharing interesting facts and trivia. Users can submit facts, vote on content, and explore various categories of knowledge.",
      category: "Web Development",
      categoryColor: "orange",
      technologies: ["React", "Firebase", "JavaScript"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      completed: true
    },
    {
      id: 6,
      title: "ARDUINO ROBOTICS PROJECT",
      description: "An autonomous robot built with Arduino that can navigate obstacles and perform various tasks using sensors and actuators.",
      longDescription: "This robotics project combines hardware and software to create an autonomous navigation system. The robot uses ultrasonic sensors for obstacle detection and servo motors for movement control.",
      category: "Robotics",
      categoryColor: "cyan",
      technologies: ["Arduino", "C++", "Sensors", "Motors"],
      image: "https://images.unsplash.com/photo-1581091226825-c6a89e7e4801?w=800&h=600&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      completed: false
    }
  ]

  const categories = ['All', 'Web Development', 'Mobile App', 'Robotics']

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter)

  const getCategoryColorClass = (color) => {
    const colorMap = {
      blue: 'bg-blue-600',
      purple: 'bg-purple-600',
      green: 'bg-green-600',
      red: 'bg-red-600',
      orange: 'bg-orange-600',
      cyan: 'bg-cyan-600'
    }
    return colorMap[color] || 'bg-blue-600'
  }

  return (
    <div className={`min-h-screen w-full transition-colors duration-500 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      
      <Navbar onBlogsClick={handleComingSoon} profileImage={profileImage} />

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
      <main className="pt-16 sm:pt-20">
        
        {/* Hero Section */}
        <section className={`py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-12 transition-colors duration-500 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-4 sm:mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                MY PROJECTS
              </h1>
              <p className={`text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                A collection of my work spanning web development, mobile applications, and robotics projects. Each project represents a unique challenge and learning experience in my journey as a developer.
              </p>
            </div>

            {/* Project Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 mb-12 sm:mb-16">
              <div className="text-center">
                <div className={`text-3xl sm:text-4xl lg:text-5xl font-black mb-1 sm:mb-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  {projects.length}
                </div>
                <p className={`text-xs sm:text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Total Projects
                </p>
              </div>
              <div className="text-center">
                <div className={`text-3xl sm:text-4xl lg:text-5xl font-black mb-1 sm:mb-2 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>
                  {projects.filter(p => p.completed).length}
                </div>
                <p className={`text-xs sm:text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Completed
                </p>
              </div>
              <div className="text-center">
                <div className={`text-3xl sm:text-4xl lg:text-5xl font-black mb-1 sm:mb-2 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`}>
                  {projects.filter(p => p.category === 'Web Development').length}
                </div>
                <p className={`text-xs sm:text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Web Apps
                </p>
              </div>
              <div className="text-center">
                <div className={`text-3xl sm:text-4xl lg:text-5xl font-black mb-1 sm:mb-2 ${isDarkMode ? 'text-orange-400' : 'text-orange-600'}`}>
                  {projects.filter(p => p.featured).length}
                </div>
                <p className={`text-xs sm:text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Featured
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className={`py-8 sm:py-12 px-4 sm:px-6 lg:px-12 transition-colors duration-500 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-sm sm:text-base transition-all duration-300 hover:scale-105 ${
                    filter === category
                      ? isDarkMode 
                        ? 'bg-lime-500 text-black shadow-lg'
                        : 'bg-blue-600 text-white shadow-lg'
                      : isDarkMode
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className={`group relative rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 cursor-pointer ${
                    isDarkMode ? 'bg-gray-800' : 'bg-white'
                  } shadow-xl hover:shadow-2xl`}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Project Links */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex space-x-4">
                        <a
                          href={project.liveUrl}
                          className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                            isDarkMode 
                              ? 'bg-lime-500/90 text-black hover:bg-lime-500' 
                              : 'bg-white/90 text-gray-900 hover:bg-white'
                          }`}
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                          </svg>
                        </a>
                        <a
                          href={project.githubUrl}
                          className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                            isDarkMode 
                              ? 'bg-lime-500/90 text-black hover:bg-lime-500' 
                              : 'bg-white/90 text-gray-900 hover:bg-white'
                          }`}
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </a>
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 text-white text-xs font-medium rounded-full ${getCategoryColorClass(project.categoryColor)}`}>
                        {project.category}
                      </span>
                    </div>

                    {/* Status Badge */}
                    {project.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-yellow-500 text-white text-xs font-medium rounded-full">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {project.title}
                    </h3>
                    <p className={`text-sm leading-relaxed mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {hoveredProject === project.id ? project.longDescription : project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className={`px-2 py-1 text-xs rounded-md ${
                            isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Status */}
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-medium ${
                        project.completed 
                          ? 'text-green-600' 
                          : 'text-orange-600'
                      }`}>
                        {project.completed ? '✓ Completed' : '🚧 In Progress'}
                      </span>
                      <button className={`transition-colors ${isDarkMode ? 'text-lime-400 hover:text-lime-300' : 'text-blue-600 hover:text-blue-700'}`}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={`py-20 px-6 lg:px-12 transition-colors duration-500 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`text-4xl lg:text-5xl font-black tracking-tight mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              LIKE WHAT YOU SEE?
            </h2>
            <p className={`text-lg mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Let's collaborate on your next project. I'm always excited to work on new challenges and bring innovative ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/about"
                className={`px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 text-center ${isDarkMode ? 'bg-lime-500 text-black hover:bg-lime-600' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
              >
                Get In Touch
              </Link>
              <a 
                href="#"
                className={`px-8 py-4 rounded-full border-2 font-semibold text-lg transition-all duration-300 hover:scale-105 text-center ${isDarkMode ? 'border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-black' : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'}`}
              >
                View Resume
              </a>
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
              <a href="mailto:xelpap@gmail.com" className={`text-lg font-medium transition-colors ${isDarkMode ? 'text-white hover:text-lime-400' : 'text-white hover:text-blue-200'}`}>
                xelpap@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="text-center">
              <p className="text-white/80 text-sm mb-2">Call Today :</p>
              <a href="tel:+233546701205" className={`text-lg font-medium transition-colors ${isDarkMode ? 'text-white hover:text-lime-400' : 'text-white hover:text-blue-200'}`}>
                +233 (054) 670-1205
              </a>
            </div>

            {/* Social */}
            <div className="text-center md:text-right">
              <p className="text-white/80 text-sm mb-4">Social :</p>
              <div className="flex justify-center md:justify-end space-x-4">
                {/* Social Icons */}
                <a href="https://x.com/o6papi?s=21" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="https://github.com/o6elvisosei" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.30 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/o6elvis?igsh=MXFuc2J3c21sbWtqaQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.40s-.644-1.44-1.439-1.40z"/>
                  </svg>
                </a>
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
              © Copyright 2025. All Rights Reserved by <a href="#" className={`transition-colors ${isDarkMode ? 'text-white hover:text-lime-400' : 'text-white hover:text-blue-200'}`}>Elvis Osei</a>
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

export default Projects
