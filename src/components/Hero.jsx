import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import heroProfilePic from '../assets/Muthu_hero.jpg'
import resumePDF from '../assets/Muthu_resume_updated.pdf'

const floatingVariants = {
    animate: {
        y: [-10, 10, -10],
        x: [-5, 5, -5],
        rotate: [-2, 2, -2],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};

const Hero = () => {
    const [currentText, setCurrentText] = useState(0)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [displayedText, setDisplayedText] = useState('')
    const fullText = "Hi, I'm Muthuraj"

    // Parallax-style scroll effects for background and hero image only
    const { scrollY } = useScroll()
    const bgY = useTransform(scrollY, [0, 800], [0, 60])
    const imageY = useTransform(scrollY, [0, 600], [0, -40])
    
    const texts = [
        "Full Stack Developer"
    ]

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }
        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentText((prev) => (prev + 1) % texts.length)
        }, 2500)
        return () => clearInterval(interval)
    }, [texts.length])

    // Typewriter effect for heading
    useEffect(() => {
        let currentIndex = 0
        const typeInterval = setInterval(() => {
            if (currentIndex < fullText.length) {
                setDisplayedText(fullText.slice(0, currentIndex + 1))
                currentIndex++
            } else {
                clearInterval(typeInterval)
            }
        }, 80) // Adjust speed here (lower = faster)

        return () => clearInterval(typeInterval)
    }, [])
    
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section 
            id="hero" 
            className="hero"
        >
            {/* Animated Background Elements */}
            <motion.div 
                className="hero-bg"
                style={{ y: bgY }}
            >
                <motion.div 
                    className="floating-shape shape-1"
                    variants={floatingVariants}
                    animate="animate"
                />
                <motion.div 
                    className="floating-shape shape-2"
                    variants={floatingVariants}
                    animate="animate"
                    transition={{ delay: 1 }}
                />
                <motion.div 
                    className="floating-shape shape-3"
                    variants={floatingVariants}
                    animate="animate"
                    transition={{ delay: 2 }}
                />
            </motion.div>

            {/* Mouse follower effect */}
            <motion.div
                className="mouse-follower"
                animate={{
                    x: mousePosition.x - 20,
                    y: mousePosition.y - 20,
                }}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 28
                }}
            />

            <div className="hero-main-content">
                <div 
                    className="hero-title-section"
                >
                    <h1>
                        {displayedText ? (
                            <>
                                {displayedText.length > fullText.indexOf("Muthuraj") ? (
                                    <>
                                        {fullText.substring(0, fullText.indexOf("Muthuraj"))}
                                        <span className="name-highlight">
                                            {displayedText.substring(fullText.indexOf("Muthuraj"))}
                                        </span>
                                    </>
                                ) : (
                                    displayedText
                                )}
                            </>
                        ) : (
                            <span style={{ visibility: 'hidden' }}>{fullText}</span>
                        )}
                    </h1>
                    <p 
                        className="connect-text"
                    >
                        Let's Connect 🚀
                    </p>
                </div>
                
                <motion.div 
                    className="hero-building-image"
                    style={{ y: imageY }}
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                    <div className="hero-image-wrapper">
                        <motion.img
                            src={heroProfilePic}
                            alt="Profile"
                            className="hero-image"
                            draggable="false"
                        />
                    </div>
                </motion.div>
                
                <div
                    className="info-box"
                >
                    <h2>
                        I'm a <span className="highlight">{texts[currentText]}</span>
                    </h2>
                    <p>
                        Passionate about creating beautiful, functional, and user-friendly web applications. 
                        I transform complex problems into elegant solutions through clean, efficient code.
                    </p>
                    <div className="hero-buttons">
                        <button 
                            className="btn-primary" 
                            onClick={() => scrollToSection('contact')}
                        >
                            <span>Let's Connect</span>
                            <div 
                                className="btn-shine"
                            />
                        </button>
                        <a 
                            href={resumePDF}
                            download="Muthuraj_Resume.pdf"
                            className="btn-secondary"
                        >
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>
            
            {/* Scroll indicator */}
            <motion.div 
                className="scroll-indicator"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.6 }}
            >
                <motion.div
                    className="scroll-line"
                    animate={{ height: [0, 30, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                <span>Scroll to explore</span>
            </motion.div>
        </section>
    )
}

export default Hero

// Modern Professional CSS with Light/Clean Color Scheme
const styles = `
.hero {
  min-height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 30%, #f1f5f9 100%);
  color: #1e293b;
  display: flex;
  align-items: center;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(16, 185, 129, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 40% 70%, rgba(139, 92, 246, 0.03) 0%, transparent 50%);
  pointer-events: none;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.floating-shape {
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.08), rgba(16, 185, 129, 0.08));
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.shape-1 {
  width: 300px;
  height: 300px;
  top: 10%;
  left: 5%;
}

.shape-2 {
  width: 200px;
  height: 200px;
  top: 60%;
  right: 10%;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.08), rgba(236, 72, 153, 0.08));
}

.shape-3 {
  width: 150px;
  height: 150px;
  top: 80%;
  left: 60%;
  background: linear-gradient(135deg, rgba(245, 101, 101, 0.08), rgba(251, 191, 36, 0.08));
}

.mouse-follower {
  position: fixed;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
  pointer-events: none;
  z-index: 1000;
  mix-blend-mode: multiply;
}

.hero-main-content {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 120px 48px 48px;
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "title image"
    "info image";
  gap: 32px;
  align-items: center;
}

.hero-title-section {
  grid-area: title;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero-title-section h1 {
  font-size: 5rem;
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.02em;
  margin-bottom: 16px;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  color: #0f172a;
}

.name-highlight {
  background: linear-gradient(135deg, #3b82f6 0%, #10b981 50%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  display: inline-block;
}

.name-highlight::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(135deg, #3b82f6, #10b981);
  border-radius: 2px;
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
}

.connect-text {
  font-size: 1.5rem;
  font-weight: 500;
  color: #64748b;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  margin: 8px 0 0;
}

.hero-building-image {
  grid-area: image;
  width: 100%;
  max-width: 600px;
  align-self: center;
  display: flex;
  justify-content: center;
}

.hero-image-wrapper {
  width: 320px;
  height: 320px;
  border-radius: 50%;
  padding: 8px;
  background: radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.25), transparent 60%),
              radial-gradient(circle at 70% 80%, rgba(16, 185, 129, 0.25), transparent 60%);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.22);
  border: 1px solid rgba(226, 232, 240, 0.7);
  overflow: hidden;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  filter: drop-shadow(0 12px 30px rgba(15, 23, 42, 0.4));
}

.info-box {
  grid-area: info;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  padding: 40px;
  border-radius: 24px;
  border: 1px solid rgba(226, 232, 240, 0.5);
  max-width: 500px;
  justify-self: start;
  margin-right: auto;
  margin-left: 0;
  color: #1e293b;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  position: relative;
  overflow: hidden;
}

.info-box::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.03), rgba(16, 185, 129, 0.03));
  pointer-events: none;
}

.info-box h2 {
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: #0f172a;
  position: relative;
  z-index: 1;
}

.info-box .highlight {
  background: linear-gradient(135deg, #3b82f6 0%, #10b981 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
  position: relative;
  animation: textGlow 3s ease-in-out infinite;
}

@keyframes textGlow {
  0%, 100% {
    filter: drop-shadow(0 0 5px rgba(59, 130, 246, 0.3));
  }
  50% {
    filter: drop-shadow(0 0 20px rgba(59, 130, 246, 0.5));
  }
}

.info-box p {
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 32px;
  color: #475569;
  max-width: 450px;
  position: relative;
  z-index: 1;
}

.hero-buttons {
  display: flex;
  gap: 20px;
  position: relative;
  z-index: 1;
  margin-top: 8px;
}

.hero-buttons button,
.hero-buttons a {
  font-family: inherit;
  font-size: 1rem;
  font-weight: 600;
  padding: 16px 32px;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  border: none;
  outline: none;
  text-decoration: none;
  display: inline-block;
}

.btn-primary {
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  color: white;
  box-shadow: 0 10px 30px rgba(59, 130, 246, 0.3);
  position: relative;
  transform: translateZ(0);
}

.btn-primary::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #1d4ed8, #3b82f6);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.btn-primary:hover::before {
  opacity: 1;
}

.btn-primary span {
  position: relative;
  z-index: 1;
}

.btn-shine {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transform: translateX(-100%);
  pointer-events: none;
}

.btn-secondary {
  background: rgba(15, 23, 42, 0.05);
  color: #0f172a;
  border: 1px solid rgba(15, 23, 42, 0.1);
  backdrop-filter: blur(10px);
}

.btn-secondary:hover {
  background: rgba(15, 23, 42, 0.1);
  border-color: rgba(15, 23, 42, 0.2);
}

.scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  color: #64748b;
  font-size: 0.9rem;
  font-weight: 500;
}

.scroll-line {
  width: 2px;
  height: 30px;
  background: linear-gradient(to bottom, #3b82f6, transparent);
  border-radius: 1px;
}

@media (max-width: 992px) {
  .hero-main-content {
    grid-template-columns: 1fr;
    grid-template-areas:
      "title"
      "info"
      "image";
    align-items: center;
    text-align: center;
    padding: 80px 24px 24px;
    gap: 40px;
  }
  
  .hero-title-section h1 {
    font-size: 4rem;
  }
  
  .info-box {
    justify-self: center;
    max-width: 100%;
  }
  
  .hero-buttons {
    justify-content: center;
    flex-wrap: wrap;
  }
}

@media (max-width: 576px) {
  .hero-title-section h1 {
    font-size: 3rem;
  }
  
  .connect-text {
    font-size: 1.25rem;
  }
  
  .info-box {
    padding: 24px;
  }
  
  .info-box h2 {
    font-size: 1.5rem;
  }
  
  .hero-buttons {
    flex-direction: column;
    gap: 16px;
  }
  
  .hero-buttons button,
  .hero-buttons a {
    width: 100%;
  }
}
`

// Inject styles into the document
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}