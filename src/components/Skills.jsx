import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import ScrollAnimation from './animation/ScrollAnimation';
import './Skills.css'

const floatingVariants = {
  animate: {
    y: [-15, 15, -15],
    x: [-10, 10, -10],
    rotate: [-3, 3, -3],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const Skills = () => {
  const frontendSkills = [
    'HTML5',
    'CSS', 
    'JavaScript',
    'React.js',
    'JSX'
  ]

  const backendSkills = [
    'Node.js',
    'Express.js',
    'RESTful APIs',
    'MongoDB',
    'SQL'
  ]

  const otherSkills = [
    'Git & GitHub',
    'Problem Solving',
    'API Integration',
    'VS Code',
    'Responsive Design',
  ]

  const SkillItem = ({ skill }) => (
    <motion.div 
      className="skill-item"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05, x: 4 }}
    >
      <span className="skill-name">{skill}</span>
    </motion.div>
  )

  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  // Parallax effects for different layers
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 100])
  const categoriesY = useTransform(scrollYProgress, [0, 1], [0, -30])
  const techY = useTransform(scrollYProgress, [0, 1], [0, 40])

  return (
    <section 
      id="skills" 
      className="skills"
      ref={sectionRef}
    >
      {/* Animated Background Elements with Parallax */}
      <motion.div 
        className="skills-bg"
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
          transition={{ delay: 1.5 }}
        />
        <motion.div 
          className="floating-shape shape-3"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 3 }}
        />
        <motion.div 
          className="floating-shape shape-4"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        />
      </motion.div>

      <div className="skills-container">
        <ScrollAnimation>
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Skills & <span className="gradient-text">Technologies</span></h2>
            <p>My technical expertise and tools I work with</p>
          </motion.div>
        </ScrollAnimation>

        <ScrollAnimation>
          <motion.div 
            className="skills-content"
            style={{ y: categoriesY }}
          >
            <motion.div 
              className="skills-category"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -8 }}
            >
              <h3>Frontend Development</h3>
              <div className="skills-list">
                {frontendSkills.map((skill, index) => (
                  <SkillItem key={index} skill={skill} />
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="skills-category"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -8 }}
            >
              <h3>Backend Development</h3>
              <div className="skills-list">
                {backendSkills.map((skill, index) => (
                  <SkillItem key={index} skill={skill} />
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="skills-category"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -8 }}
            >
              <h3>Tools & Other Skills</h3>
              <div className="skills-list">
                {otherSkills.map((skill, index) => (
                  <SkillItem key={index} skill={skill} />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </ScrollAnimation>

        <ScrollAnimation>
          <motion.div 
            className="technologies-grid"
            style={{ y: techY }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3>Technologies I Work With</h3>
            <div className="tech-icons">
              <div className="tech-icon"><span>⚛️ React.js</span></div>
              <div className="tech-icon"><span>🟨 JavaScript</span></div>
              <div className="tech-icon"><span>🎨 Tailwind CSS</span></div>
              <div className="tech-icon"><span>🐍 Python</span></div>
              <div className="tech-icon"><span>🟢 Node.js</span></div>
              <div className="tech-icon"><span>⚡ Express.js</span></div>
              <div className="tech-icon"><span>🍃 MongoDB</span></div>
              <div className="tech-icon"><span>🗄️ SQL</span></div>
              <div className="tech-icon"><span>🚀 Vite</span></div>
              <div className="tech-icon"><span>🔧 Flask</span></div>
              <div className="tech-icon"><span>🤖 Gemini API</span></div>
              <div className="tech-icon"><span>📰 News API</span></div>
              <div className="tech-icon"><span>🔐 Authentication</span></div>
              <div className="tech-icon"><span>📱 Responsive Design</span></div>
              <div className="tech-icon"><span>🧠 LeetCode (120+)</span></div>
            </div>
          </motion.div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

export default Skills 