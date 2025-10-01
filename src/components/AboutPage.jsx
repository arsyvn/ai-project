import { motion } from 'framer-motion'
import { MapPin, Calendar, Instagram, Send, Mail, ExternalLink, Award, Users, BookOpen } from 'lucide-react'
import profileImage from '../assets/1000066953.png'

const AboutPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const interests = [
    { icon: <BookOpen className="w-5 h-5" />, name: "Artificial Intelligence", color: "bg-blue-100 text-blue-700" },
    { icon: <Users className="w-5 h-5" />, name: "Psychology", color: "bg-emerald-100 text-emerald-700" },
    { icon: <BookOpen className="w-5 h-5" />, name: "Literature", color: "bg-purple-100 text-purple-700" },
    { icon: <Users className="w-5 h-5" />, name: "Social Interaction", color: "bg-orange-100 text-orange-700" },
    { icon: <ExternalLink className="w-5 h-5" />, name: "Cinema", color: "bg-pink-100 text-pink-700" }
  ]

  const timeline = [
    { year: "2008", event: "Born in Berd, Tavush, Armenia", icon: <Calendar className="w-4 h-4" /> },
    { year: "2010-2025", event: "Lived in Dzoraghbyur, Kotayq", icon: <MapPin className="w-4 h-4" /> },
    { year: "2024", event: "Joined Enterprise Incubator Foundation", icon: <Award className="w-4 h-4" /> },
    { year: "2025", event: "Moved to Yerevan for education", icon: <BookOpen className="w-4 h-4" /> }
  ]

  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-light tracking-tight text-gray-900 mb-6">
            About
            <span className="block bg-gradient-to-r from-emerald-500 to-blue-600 bg-clip-text text-transparent">
              Arsen
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A young AI enthusiast exploring the intersection of technology, psychology, and human connection.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          
          {/* Profile Section */}
          <motion.div 
            className="lg:col-span-1"
            variants={itemVariants}
          >
            <div className="bg-white rounded-3xl shadow-xl p-8 text-center sticky top-32">
              <motion.div
                className="relative inline-block mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={profileImage}
                  alt="Arsen"
                  className="profile-image w-48 h-48 mx-auto shadow-2xl"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-emerald-500/20" />
              </motion.div>
              
              <h2 className="text-2xl font-medium text-gray-900 mb-2">Arsen</h2>
              <p className="text-gray-600 mb-6">AI Researcher & Student</p>
              
              {/* Key Info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-center space-x-2 text-gray-600">
                  <Calendar className="w-4 h-4 text-blue-500" />
                  <span className="text-sm">July 19, 2008</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-gray-600">
                  <MapPin className="w-4 h-4 text-emerald-500" />
                  <span className="text-sm">Yerevan, Armenia</span>
                </div>
              </div>

              {/* Contact Links */}
              <div className="space-y-3">
                <motion.a
                  href="https://instagram.com/ars.yvn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-3 rounded-xl hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Instagram className="w-4 h-4" />
                  <span className="text-sm font-medium">@ars.yvn</span>
                </motion.a>
                
                <motion.a
                  href="https://t.me/ars_yvn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-3 rounded-xl hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-4 h-4" />
                  <span className="text-sm font-medium">@ars_yvn</span>
                </motion.a>
                
                <motion.a
                  href="mailto:ai.rsen@proton.me"
                  className="flex items-center justify-center space-x-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-3 rounded-xl hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm font-medium">ai.rsen@proton.me</span>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            className="lg:col-span-2 space-y-8"
            variants={itemVariants}
          >
            
            {/* Bio */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-medium text-gray-900 mb-6">My Story</h3>
              <div className="prose prose-lg text-gray-700 leading-relaxed space-y-4">
                <p>
                  Hello, I'm Arsen. I'm 17 years old and deeply interested in artificial intelligence, 
                  psychology, books, social interaction, and movies. My journey began in the small town 
                  of Berd, Tavush, Armenia, where I was born in 2008.
                </p>
                <p>
                  I spent most of my formative years in Dzoraghbyur, Kotayq, from 2010 until 2025. 
                  This period shaped my curiosity about technology and human behavior, leading me to 
                  explore the fascinating intersection between artificial intelligence and psychology.
                </p>
                <p>
                  In 2025, I made the significant decision to move to Yerevan to continue my education 
                  and personal growth. This transition represents not just a change of location, but 
                  a commitment to pursuing my passion for understanding and developing AI technologies.
                </p>
                <p>
                  I enjoy activities that help me learn and improve my skills. This drive for continuous 
                  learning led me to join the Enterprise Incubator Foundation (EIF) in November 2024. 
                  Since then, I have been actively volunteering at the Wave Youth Club, where I contribute 
                  to community projects and youth programs.
                </p>
              </div>
            </div>

            {/* Interests */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-medium text-gray-900 mb-6">Interests & Passions</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {interests.map((interest, index) => (
                  <motion.div
                    key={index}
                    className={`${interest.color} rounded-xl p-4 text-center`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex justify-center mb-2">
                      {interest.icon}
                    </div>
                    <span className="text-sm font-medium">{interest.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-medium text-gray-900 mb-6">Journey Timeline</h3>
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full flex items-center justify-center text-white">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-blue-600 mb-1">{item.year}</div>
                      <div className="text-gray-700">{item.event}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Project Attribution */}
            <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-xl font-medium text-gray-900 mb-4">Project Attribution</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                This work was completed as part of an AI research project for the 
                <span className="font-semibold text-blue-600"> AI4All Youth Chapter</span>, 
                a collaborative initiative between the 
                <span className="font-semibold text-emerald-600"> Enterprise Incubator Foundation (EIF)</span> 
                and <span className="font-semibold text-blue-600">AmeriaBank</span>.
              </p>
              <p className="text-sm text-gray-600">
                This project explores the creative potential of AI collaboration in storytelling, 
                visual generation, and web development, demonstrating how young researchers can 
                leverage AI tools for innovative projects.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default AboutPage
