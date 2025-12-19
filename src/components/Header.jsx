import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const { scrollY } = useScroll()
  const headerOpacity = useTransform(scrollY, [0, 100], [0.85, 0.95])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = ['hero', 'about', 'skills', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i])
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setActiveSection(sectionId)
    setIsMobileMenuOpen(false)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border-bottom: 1px solid rgba(148, 163, 184, 0.1);
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        }

        .header.scrolled {
          background: rgba(15, 23, 42, 0.95);
          box-shadow: 0 4px 32px rgba(0, 0, 0, 0.3);
          border-bottom: 1px solid rgba(148, 163, 184, 0.15);
        }

        .header-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 48px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 80px;
        }

        .logo {
          cursor: pointer;
        }

        .logo h2 {
          font-size: 1.75rem;
          font-weight: 700;
          margin: 0;
          letter-spacing: -0.025em;
          transition: all 0.3s ease;
          color: #ffffff;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .logo-initial {
          display: inline-flex;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, #42E695 0%, #3BB2B8 100%);
          color: #0f172a;
          font-weight: 800;
          font-size: 1.5rem;
          align-items: center;
          justify-content: center;
          margin-right: 8px;
          box-shadow: 0 4px 20px rgba(66, 230, 149, 0.3);
        }

        .logo-text {
          background: linear-gradient(135deg, #42E695 0%, #3BB2B8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 700;
        }

        .nav-list {
          display: flex;
          list-style: none;
          gap: 8px;
          margin: 0;
          padding: 0;
          align-items: center;
        }

        .nav-list button {
          background: none;
          border: none;
          font-size: 0.95rem;
          font-weight: 500;
          color: #cbd5e1;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          padding: 12px 20px;
          border-radius: 12px;
          position: relative;
          font-family: inherit;
          letter-spacing: 0.025em;
          text-transform: capitalize;
          overflow: hidden;
        }

        .nav-list button::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(66, 230, 149, 0.08), rgba(59, 178, 184, 0.08));
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: 12px;
        }

        .nav-list button:hover {
          color: #42E695;
          transform: translateY(-2px);
        }

        .nav-list button:hover::before {
          opacity: 1;
        }

        .nav-list button.active {
          color: #42E695;
          background: rgba(66, 230, 149, 0.1);
          font-weight: 600;
          box-shadow: 0 4px 20px rgba(66, 230, 149, 0.15);
        }

        .nav-indicator {
          position: absolute;
          bottom: 8px;
          left: 50%;
          transform: translateX(-50%);
          width: 6px;
          height: 6px;
          background: linear-gradient(135deg, #42E695, #3BB2B8);
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .nav-list button.active .nav-indicator {
          opacity: 1;
        }

        .nav-list button:active {
          transform: translateY(0);
        }

        .mobile-menu-btn {
          display: none;
          flex-direction: column;
          background: rgba(66, 230, 149, 0.1);
          border: 1px solid rgba(66, 230, 149, 0.2);
          cursor: pointer;
          padding: 12px;
          gap: 4px;
          border-radius: 12px;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .mobile-menu-btn:hover {
          background: rgba(66, 230, 149, 0.15);
          border-color: rgba(66, 230, 149, 0.3);
        }

        .mobile-menu-btn span {
          width: 20px;
          height: 2px;
          background: #42E695;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 1px;
        }

        .mobile-menu-btn.active {
          background: rgba(66, 230, 149, 0.2);
          border-color: rgba(66, 230, 149, 0.4);
        }

        .mobile-overlay {
          position: fixed;
          top: 80px;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(15, 23, 42, 0.8);
          backdrop-filter: blur(10px);
          z-index: 999;
        }

        @media (max-width: 768px) {
          .header-container {
            padding: 0 24px;
            height: 72px;
          }

          .logo h2 {
            font-size: 1.5rem;
          }

          .logo-initial {
            width: 36px;
            height: 36px;
            font-size: 1.25rem;
          }

          .nav {
            position: fixed;
            top: 72px;
            left: 0;
            right: 0;
            background: rgba(15, 23, 42, 0.98);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
            border-bottom: 1px solid rgba(148, 163, 184, 0.1);
            z-index: 1001;
          }

          .nav.mobile-open {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
          }

          .nav-list {
            flex-direction: column;
            gap: 0;
            padding: 24px;
          }

          .nav-list button {
            padding: 20px 24px;
            border-bottom: 1px solid rgba(148, 163, 184, 0.1);
            width: 100%;
            text-align: left;
            border-radius: 0;
            font-size: 1.1rem;
            justify-content: space-between;
            display: flex;
            align-items: center;
          }

          .nav-list button::before {
            border-radius: 0;
          }

          .nav-list button:hover {
            background: rgba(66, 230, 149, 0.1);
            transform: none;
          }

          .nav-list button:last-child {
            border-bottom: none;
          }

          .nav-indicator {
            position: static;
            transform: none;
            margin-left: auto;
          }

          .mobile-menu-btn {
            display: flex;
          }
        }

        @media (max-width: 480px) {
          .header-container {
            padding: 0 20px;
          }

          .logo h2 {
            font-size: 1.25rem;
          }

          .logo-initial {
            width: 32px;
            height: 32px;
            font-size: 1rem;
          }

          .nav-list {
            padding: 20px;
          }

          .nav-list button {
            padding: 16px 20px;
            font-size: 1rem;
          }

          .mobile-menu-btn {
            padding: 10px;
          }

          .mobile-menu-btn span {
            width: 18px;
          }
        }

        /* Logo glow animation */
        @keyframes logoGlow {
          0%, 100% {
            box-shadow: 0 4px 20px rgba(66, 230, 149, 0.3);
          }
          50% {
            box-shadow: 0 4px 30px rgba(66, 230, 149, 0.5);
          }
        }

        .logo-initial {
          animation: logoGlow 3s ease-in-out infinite;
        }

        /* Mobile menu animation */
        @media (max-width: 768px) {
          .nav.mobile-open {
            animation: slideDown 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }
        }

        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
      
      <motion.header 
        className={`header ${isScrolled ? 'scrolled' : ''}`}
        style={{ 
          backgroundColor: isScrolled ? 'rgba(15, 23, 42, 0.95)' : 'rgba(15, 23, 42, 0.85)'
        }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="header-container">
          <motion.div 
            className="logo"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <h2>
              <span className="logo-initial">M</span>
              <span className="logo-text">uthuraj</span>
            </h2>
          </motion.div>
          
          <nav className={`nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <ul className="nav-list">
              {['hero', 'about', 'skills', 'projects', 'contact'].map((section, index) => (
                <motion.li
                  key={section}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <motion.button 
                    onClick={() => scrollToSection(section)}
                    className={activeSection === section ? 'active' : ''}
                    aria-label={`Navigate to ${section} section`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    {section === 'hero' ? 'Home' : section.charAt(0).toUpperCase() + section.slice(1)}
                    <motion.span 
                      className="nav-indicator"
                      layoutId="nav-indicator"
                    />
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          </nav>

          <motion.button 
            className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.span
              animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </div>
        
        {/* Mobile menu overlay */}
        <motion.div
          className="mobile-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ pointerEvents: isMobileMenuOpen ? 'auto' : 'none' }}
          onClick={() => setIsMobileMenuOpen(false)}
        />
      </motion.header>
    </>
  )
}

export default Header