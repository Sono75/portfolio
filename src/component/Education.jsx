import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGraduationCap, FaUniversity, FaCalendarAlt } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'
import './Education.css'

const educationData = [
  {
    degree: 'Bachelor of Engineering (B.E)',
    course: 'Computer Science and Engineering',
    institution: 'Arunachala College of Engineering for Women',
    university: 'Anna University, Chennai',
    year: '3rd Year (Currently Pursuing)',
    location: 'Tamil Nadu, India',
    icon: <FaGraduationCap />,
  },
]

const Education = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="education" className="education" ref={ref}>
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">My Journey</p>
          <h2 className="section-title">Education</h2>
        </motion.div>

        <div className="education-timeline">
          {educationData.map((edu, index) => (
            <motion.div 
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="timeline-marker">
                <div className="marker-icon">{edu.icon}</div>
              </div>
              
              <motion.div 
                className="timeline-content glass-card"
                whileHover={{ scale: 1.02 }}
              >
                <div className="edu-header">
                  <h3 className="edu-degree">{edu.degree}</h3>
                  <span className="edu-year">
                    <FaCalendarAlt /> {edu.year}
                  </span>
                </div>
                
                <p className="edu-course">{edu.course}</p>
                
                <div className="edu-details">
                  <p className="edu-institution">
                    <FaUniversity /> {edu.institution}
                  </p>
                  <p className="edu-university">{edu.university}</p>
                  <p className="edu-location">
                    <MdLocationOn /> {edu.location}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
          
          <div className="timeline-line"></div>
        </div>
      </div>
    </section>
  )
}

export default Education