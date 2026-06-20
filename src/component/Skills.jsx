import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  FaHtml5, FaCss3Alt, FaReact, FaJava,
  FaUsers, FaComments, FaLightbulb, FaSyncAlt 
} from 'react-icons/fa'
import './Skills.css'

const technicalSkills = [
  { name: 'HTML5', icon: <FaHtml5 />, level: 85, color: '#E34F26' },
  { name: 'CSS3', icon: <FaCss3Alt />, level: 80, color: '#1572B6' },
  { name: 'React.js', icon: <FaReact />, level: 75, color: '#61DAFB' },
  { name: 'Java', icon: <FaJava />, level: 70, color: '#007396' },
]

const softSkills = [
  { name: 'Teamwork', icon: <FaUsers />, description: 'Collaborative mindset for group projects' },
  { name: 'Communication', icon: <FaComments />, description: 'Clear and effective information sharing' },
  { name: 'Problem Solving', icon: <FaLightbulb />, description: 'Analytical approach to challenges' },
  { name: 'Adaptability', icon: <FaSyncAlt />, description: 'Quick to learn new technologies' },
]

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">What I Know</p>
          <h2 className="section-title">My Skills</h2>
        </motion.div>

        <div className="skills-container">
          <motion.div 
            className="skills-category"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h3 className="category-title">Technical Skills</h3>
            <div className="skills-grid">
              {technicalSkills.map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  className="skill-card glass-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ y: -10 }}
                >
                  <div 
                    className="skill-icon" 
                    style={{ color: skill.color }}
                  >
                    {skill.icon}
                  </div>
                  <h4 className="skill-name">{skill.name}</h4>
                  <div className="skill-progress">
                    <div className="progress-bar">
                      <motion.div 
                        className="progress-fill"
                        style={{ background: skill.color }}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.5 + 0.1 * index }}
                      />
                    </div>
                    <span className="progress-value">{skill.level}%</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="skills-category"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h3 className="category-title">Soft Skills</h3>
            <div className="skills-grid soft-skills-grid">
              {softSkills.map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  className="soft-skill-card glass-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ y: -10, boxShadow: 'var(--shadow-lg)' }}
                >
                  <div className="soft-skill-icon">{skill.icon}</div>
                  <h4 className="soft-skill-name">{skill.name}</h4>
                  <p className="soft-skill-desc">{skill.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skills