import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGraduationCap, FaCode, FaCertificate } from 'react-icons/fa'
import './About.css'

const stats = [
  { icon: <FaGraduationCap />, value: '3rd Year', label: 'Student' },
  { icon: <FaCode />, value: '4+', label: 'Skills' },
  { icon: <FaCertificate />, value: '1', label: 'Certification' },
]

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">Get To Know</p>
          <h2 className="section-title">About Me</h2>
        </motion.div>

        <div className="about-content">
          <motion.div 
            className="about-image-container"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="about-image">
              <img 
                src="[images.unsplash.com](https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=600&fit=crop)" 
                alt="About Ashwini"
              />
              <div className="about-image-overlay"></div>
            </div>
            <div className="experience-badge glass-card">
              <span className="exp-number">3</span>
              <span className="exp-text">Years of Learning</span>
            </div>
          </motion.div>

          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="about-stats">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="stat-card glass-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="stat-icon">{stat.icon}</div>
                  <h3 className="stat-value">{stat.value}</h3>
                  <p className="stat-label">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="about-description">
              <p>
                I am a dedicated <strong>Computer Science Engineering student</strong> currently 
                in my 3rd year at Arunachala College of Engineering for Women, affiliated 
                with Anna University, Chennai.
              </p>
              <p>
                My academic journey has fueled my passion for <strong>web development</strong> and 
                <strong> software engineering</strong>. I am proficient in technologies like 
                HTML, CSS, React.js, and Java, and I am constantly expanding my skill set.
              </p>
              <p>
                Beyond technical skills, I believe in the power of <strong>teamwork</strong>, 
                effective <strong>communication</strong>, and <strong>adaptability</strong> to 
                solve complex problems and create meaningful solutions.
              </p>
            </div>

            <a href="#contact" className="btn btn-primary">
              Let's Connect
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About