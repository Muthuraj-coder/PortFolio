import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import ScrollAnimation from './animation/ScrollAnimation';
import './About.css'
import profilePic from '../assets/Muthu.jpeg'
import leetcodeLogo from '../assets/icons8-leetcode-24.png'
import codechefLogo from '../assets/icons8-codechef-50.png'
import codeforcesLogo from '../assets/icons8-codeforces-24.png'
import hackerrankLogo from '../assets/icons8-hackerrank-32.png'

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

const About = () => {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  // Parallax effects for different layers
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 100])
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -60])
  const textY = useTransform(scrollYProgress, [0, 1], [0, -30])
  const statsY = useTransform(scrollYProgress, [0, 1], [0, -20])

  return (
    <section 
      id="about" 
      className="about"
      ref={sectionRef}
    >
      {/* Animated Background Elements with Parallax */}
      <motion.div 
        className="about-bg"
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

      <div className="about-container">
        <ScrollAnimation>
          <motion.div 
            className="section-header"
            style={{ y: textY }}
          >
            <h2>About <span className="gradient-text">Me</span></h2>
            <p>Get to know  about my journey, achievements, and what drives me</p>
          </motion.div>
        </ScrollAnimation>
        
        <ScrollAnimation>
          <motion.div 
            className="about-content"
            style={{ y: textY }}
          >
            <div className="about-text">
              <motion.h3 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Who I Am
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                I'm a passionate Computer Science student at Kongu Engineering College, with a strong interest in full-stack development, artificial intelligence, and practical software engineering. I love building real-world applications that solve meaningful problems — from student attendance systems to AI-powered assistants.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                As a student, I've taken on multiple project roles, from creating intelligent mentors using the Gemini API to developing desktop and web apps for student and payroll management. I believe in clean code, thoughtful design, and staying up to date with evolving technologies.
              </motion.p>
              
              <motion.div 
                className="about-stats"
                style={{ y: statsY }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <motion.div 
                  className="stat"
                  whileHover={{ scale: 1.05, y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <h4>2</h4>
                  <p>Hackathon Won</p>
                  <div className="stat-glow" />
                </motion.div>
                <motion.div 
                  className="stat"
                  whileHover={{ scale: 1.05, y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <h4>6</h4>
                  <p>Projects Completed</p>
                  <div className="stat-glow" />
                </motion.div>
                <motion.div 
                  className="stat"
                  whileHover={{ scale: 1.05, y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <h4>8</h4>
                  <p>WorkShop Attended</p>
                  <div className="stat-glow" />
                </motion.div>
              </motion.div>
            </div>
            
            <motion.div 
              className="about-image"
              style={{ y: imageY }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="profile-image-wrapper">
                <motion.img 
                  src={profilePic} 
                  alt="Muthuraj" 
                  className="profile-image"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                />
                <div className="profile-glow" />
              </div>
              
              {/* Tags below profile photo */}
              <motion.div 
                className="profile-tags"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <motion.span 
                  className="tag"
                  whileHover={{ scale: 1.1, y: -3 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  💡 Problem Solver
                </motion.span>
                <motion.span 
                  className="tag"
                  whileHover={{ scale: 1.1, y: -3 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  🚀 Fast Learner
                </motion.span>
                <motion.span 
                  className="tag"
                  whileHover={{ scale: 1.1, y: -3 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  🤝 Collaborative Thinker
                </motion.span>
              </motion.div>
            </motion.div>
          </motion.div>
        </ScrollAnimation>
        
        {/* Coding Platforms Statistics */}
        <div className="coding-platforms">
            <h3 className="platforms-title">Coding Platforms Overview</h3>
            <div className="platforms-grid">
              {/* LeetCode Card */}
              <div className="platform-card leetcode-card">
                <div className="platform-logo">
                  <img src={leetcodeLogo} alt="LeetCode" />
                </div>
                <h4>LeetCode</h4>
                <a 
                  href="https://leetcode.com/u/MuthurajCoder/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="platform-name"
                >
                  Muthuraj
                </a>
                <div className="platform-stats">
                  <div className="stat-item">
                    <span className="stat-label">Problems Solved</span>
                    <span className="stat-value">228</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Easy</span>
                    <span className="stat-value">152 / 917</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Medium</span>
                    <span className="stat-value">69 / 1969</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Hard</span>
                    <span className="stat-value">6 / 892</span>
                  </div>
                </div>
              </div>

              {/* CodeChef Card */}
              <div className="platform-card codechef-card">
                <div className="platform-logo">
                  <img src={codechefLogo} alt="CodeChef" />
                </div>
                <h4>CodeChef</h4>
                <a 
                  href="https://www.codechef.com/users/muthuraj_8875" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="platform-name"
                >
                  Muthuraj
                </a>
                <div className="platform-stats">
                  <div className="stat-item">
                    <span className="stat-label">Problems Solved</span>
                    <span className="stat-value">13</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Highest Rating</span>
                    <span className="stat-value">848 ★</span>
                  </div>
                </div>
              </div>

              {/* Codeforces Card */}
              <div className="platform-card codeforces-card">
                <div className="platform-logo">
                  <img src={codeforcesLogo} alt="Codeforces" />
                </div>
                <h4>Codeforces</h4>
                <a 
                  href="https://codeforces.com/profile/MUTHURAJ_D" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="platform-name"
                >
                  Muthuraj
                </a>
                <div className="platform-stats">
                  <div className="stat-item">
                    <span className="stat-label">Problems Solved</span>
                    <span className="stat-value">27</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Rating</span>
                    <span className="stat-value">Unrated</span>
                  </div>
                </div>
              </div>

              {/* HackerRank Card */}
              <div className="platform-card hackerrank-card">
                <div className="platform-logo">
                  <img src={hackerrankLogo} alt="HackerRank" />
                </div>
                <h4>HackerRank</h4>
                <a 
                  href="https://www.hackerrank.com/profile/muthurajd_23cse" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="platform-name"
                >
                  Muthuraj
                </a>
                <div className="platform-stats">
                  <div className="stat-item">
                    <span className="stat-label">Badges</span>
                    <span className="stat-value">Problem Solving, C Language</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Skills Verified</span>
                    <span className="stat-value">Problem Solving, C</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  )
}

export default About
