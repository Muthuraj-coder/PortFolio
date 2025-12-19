import React, { useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import ScrollAnimation from './animation/ScrollAnimation';
import './Contact.css'

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

const githubSVG = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.49 2.87 8.3 6.84 9.64.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" fill="currentColor"/>
  </svg>
);

const linkedinSVG = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z" fill="currentColor"/>
  </svg>
);

const instagramSVG = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5Zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Zm5.13 1.12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill="currentColor"/>
  </svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! I will get back to you soon.')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setIsSubmitting(false)
    }, 1000)
  }

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'muthurajd.23cse.kongu.edu',
      link: 'mailto:muthuraj@gmail.com'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+91 8870522539',
      link: 'tel:+918870522539'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Erode, Tamil Nadu, India',
      link: '#'
    }
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      icon: githubSVG,
      url: 'https://github.com/Muthuraj-coder'
    },
    {
      name: 'LinkedIn',
      icon: linkedinSVG,
      url: 'https://www.linkedin.com/in/muthu-raj-d-399550325'
    },
    {
      name: 'Instagram',
      icon: instagramSVG,
      url: 'https://instagram.com/yourusername'
    }
  ]

  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  // Parallax effects for different layers
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 100])
  const infoY = useTransform(scrollYProgress, [0, 1], [0, -30])
  const messageY = useTransform(scrollYProgress, [0, 1], [0, 40])

  return (
    <section 
      id="contact" 
      className="contact"
      ref={sectionRef}
    >
      {/* Animated Background Elements with Parallax */}
      <motion.div 
        className="contact-bg"
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

      <div className="contact-container">
        <ScrollAnimation>
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Get In <span className="gradient-text">Touch</span></h2>
            <p>Let's connect and work together on exciting projects</p>
          </motion.div>
        </ScrollAnimation>

        <div className="contact-content">
          <ScrollAnimation>
            <motion.div 
              className="contact-info"
              style={{ y: infoY }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3>Let's Connect</h3>
              <p>
                I'm always interested in hearing about new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>

              <div className="contact-details">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-item">
                    <div className="contact-icon">{info.icon}</div>
                    <div className="contact-text">
                      <h4>{info.title}</h4>
                      <a href={info.link} target="_blank" rel="noopener noreferrer">
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="social-links">
                <h4>Follow Me</h4>
                <div className="social-icons">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </ScrollAnimation>

          <ScrollAnimation>
            <motion.div 
              className="contact-message"
              style={{ y: messageY }}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3>Ready to Collaborate?</h3>
              <p>
                I'm passionate about creating innovative solutions and always excited to work on new projects. 
                Whether it's web development, AI integration, or hardware projects, I'm ready to bring your ideas to life!
              </p>
              <div className="contact-cta">
                <p>Let's build something amazing together! 🚀</p>
              </div>
            </motion.div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}

export default Contact 