import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaCertificate, FaCalendarAlt, FaBuilding } from 'react-icons/fa'
import { HiExternalLink } from 'react-icons/hi'
import './Certifications.css'

const certifications = [
  {
    title: 'Internship Training',
    organization: 'Alo Infotech',
    duration: '1 Week',
    description: 'Hands-on training in software development practices and industry workflows.',
    skills: ['Web Development', 'Professional Skills', 'Team Collaboration'],
  },
]

const Certifications = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="certifications" className="certifications" ref={ref}>
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">My Achievements</p>
          <h2 className="section-title">Certifications</h2>
        </motion.div>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <motion.div 
              key={index}
              className="certification-card glass-card"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="cert-badge">
                <FaCertificate />
              </div>
              
              <div className="cert-content">
                <h3 className="cert-title">{cert.title}</h3>
                
                <div className="cert-meta">
                  <span className="cert-org">
                    <FaBuilding /> {cert.organization}
                  </span>
                  <span className="cert-duration">
                    <FaCalendarAlt /> {cert.duration}
                  </span>
                </div>
                
                <p className="cert-description">{cert.description}</p>
                
                <div className="cert-skills">
                  {cert.skills.map((skill, i) => (
                    <span key={i} className="cert-skill-tag">{skill}</span>
                  ))}
                </div>
                
                <motion.button 
                  className="cert-view-btn"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Certificate <HiExternalLink />
                </motion.button>
              </div>
              
              <div className="cert-decoration">
                <div className="decoration-circle"></div>
                <div className="decoration-circle small"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications