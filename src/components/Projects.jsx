import React, { useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollAnimation from './animation/ScrollAnimation';
import './Projects.css'
import nutriFlowImg from '../assets/Nutriflow.png'
import osImg from '../assets/osproject.png'
import trackImg from '../assets/tracktendaceproject.jpg'
import firebotImg from '../assets/FireBot.jpeg'
import mentorImg from '../assets/virtualmentor.jpg'
import payrollImg from '../assets/payroll.jpg'
import curatorImg from '../assets/newscurator.jpg'

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

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'NutriFlow - Personalized Diet Planner',
      description: 'An AI-powered diet planning and nutrition tracking web app that generates personalized meal plans based on user health goals and dietary preferences. It features secure authentication, health metrics dashboard, meal plan generation with regional cuisine support, and detailed nutrition analytics.',
      image: nutriFlowImg,
      emoji: '🥗',
      category: 'fullstack',
      technologies: ['React', 'TailwindCSS', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Edamam API'],
      liveUrl: 'https://nutriflowin.netlify.app/',
      githubUrl: 'https://github.com/Muthuraj-coder/DietPlanner'
    },
    {
      id: 2,
      title: 'Virtual Mentor',
      description: 'An AI-powered chatbot offering personalized learning paths and career guidance. Includes study material recommendations and real-time query response.',
      image: mentorImg,
      emoji: '🧠',
      category: 'fullstack',
      technologies: ['React', 'Node.js', 'OpenAI API'],
      liveUrl: 'https://e-buddy.onrender.com',
      githubUrl: 'https://github.com/ramnath20102005/E-Buddy.git'
    },
    {
      id: 3,
      title: 'AI News Aggregator',
      description: 'A smart news platform that summarizes, filters, and evaluates content credibility. Features include real-time feedback loops, bias detection, and user-personalized feeds.',
      image: curatorImg,
      emoji: '🗞️',
      category: 'fullstack',
      technologies: ['React', 'Tailwind CSS', 'Node.js', 'NewsAPI'],
      liveUrl: 'https://news-curator-deployed-1.onrender.com/',
      githubUrl: 'https://github.com/Muthuraj-coder/BYTS.git'
    },
    {
      id: 4,
      title: 'OS Simulation Web App',
      description: 'A browser-based simulator for core operating system concepts. Implements CPU Scheduling, Page Replacement, and Banker\'s Algorithm with real-time visualizations and user input options.',
      image: osImg,
      emoji: '⚙️',
      category: 'frontend',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
      liveUrl: 'https://os-mini.onrender.com/',
      githubUrl: 'https://github.com/Muthuraj-coder/OS_MINI.git'
    },
    {
      id: 5,
      title: 'Tracktendance App',
      description: 'A full-stack attendance tracker built with React, Node.js, and MongoDB. Supports Admin and Student roles, with dynamic dashboards, charts, and stats for tracking performance.',
      image: trackImg,
      emoji: '🎓',
      category: 'fullstack',
      technologies: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
      liveUrl: 'https://wt-project-pnl3.onrender.com',
      githubUrl: 'https://github.com/Muthuraj-coder/WT_Project.git'
    },
    {
      id: 6,
      title: 'Firefighting Robot',
      description: 'An integrated hardware-software robot designed for safety missions. Built with PoP structure and aluminum shell, equipped with fire sensors and layered protection for firefighting tasks.',
      image: firebotImg,
      emoji: '🤖',
      category: 'hardware',
      technologies: ['Arduino', 'Embedded C', 'Sensors', 'Metal Chassis'],
      liveUrl: '#',
    },
   
    {
      id: 7,
      title: 'Payroll & Student Management',
      description: 'Python desktop apps for managing payroll and student data. Built with Tkinter UI and Flask backend, featuring secure login and data processing.',
      image: payrollImg,
      emoji: '💼',
      category: 'backend',
      technologies: ['Python', 'Tkinter', 'Flask', 'SQLite'],
      githubUrl: 'https://github.com/Muthuraj-coder/Payroll_Python.git'
    },
  ]

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'hardware', label: 'Hardware' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  // Parallax effects for different layers
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 100])
  const filtersY = useTransform(scrollYProgress, [0, 1], [0, -20])
  const gridY = useTransform(scrollYProgress, [0, 1], [0, -30])

  return (
    <section 
      id="projects" 
      className="projects"
      ref={sectionRef}
    >
      {/* Animated Background Elements with Parallax */}
      <motion.div 
        className="projects-bg"
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

      <div className="projects-container">
        <ScrollAnimation>
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>My <span className="gradient-text">Projects</span></h2>
            <p>Here are some of the projects I've worked on</p>
          </motion.div>
        </ScrollAnimation>

        <ScrollAnimation>
          <motion.div 
            className="project-filters"
            style={{ y: filtersY }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {filters.map(filter => (
              <button
                key={filter.id}
                className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </motion.div>
        </ScrollAnimation>

        <motion.div 
          className="projects-grid"
          style={{ y: gridY }}
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.15 } }
          }}
        >
          {filteredProjects.map(project => (
            <motion.div key={project.id} className="project-card" variants={cardVariants}>
              <div className="project-image">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="project-img" />
                ) : (
                  <div className="project-icon">{project.emoji}</div>
                )}
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.githubUrl && (
                    <a href={project.githubUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  )}
                  {project.category === 'hardware' && project.liveUrl && (
                    <a href={project.liveUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                      Demo Video
                    </a>
                  )}
                  {project.category !== 'hardware' && project.category !== 'backend' && project.liveUrl && (
                    <a href={project.liveUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 