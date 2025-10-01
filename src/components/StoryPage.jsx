import { motion } from 'framer-motion'
import image1 from '../assets/1000068770.jpg'
import image2 from '../assets/1000068771.jpg'
import image3 from '../assets/1000068772.jpg'
import image4 from '../assets/1000068773.jpg'
import image5 from '../assets/1000068774.jpg'
import { Link } from 'react-router-dom'

const StoryPage = () => {
  const storyParagraphs = [
    "Once upon a time, in a quiet village tucked between the mountains of Armenia, a boy dreamed of building machines that could think. At five, he dismantled his toy robots to see how they moved. At ten, he rebuilt them with scraps of wire and circuit boards scavenged from old radios. By fifteen, his bedroom glowed blue from LED lights and humming servomotors, like a laboratory hidden in plain sight.",
    
    "While other students memorized formulas, he wrote algorithms. He downloaded secret datasets from obscure online archives and trained small neural networks on a secondhand laptop that overheated under the strain. Videos of robotics tournaments played on his screen while code compiled in the background. His parents watched in quiet awe as their son turned their home into a workshop of blinking lights and restless ideas.",
    
    "After high school, he applied to Yerevan State University's computer science program, choosing artificial intelligence as his field. When the acceptance email arrived, it felt like the first stage of a launch sequence. University life moved fast: algorithms, neural nets, deep learning, TensorFlow, PyTorch. Professors guided him, but he pushed beyond the coursework. His dorm room became a command center, lined with monitors and prototype machines running on self-written code.",
    
    "His ambitions expanded. He didn't want to build robots that only obeyed. He wanted to design systems that could heal, teach, and repair the planet. Machines for hospitals in remote areas. Learning assistants for children without access to schools. Autonomous drones to clean oceans. He mapped these visions on digital boards like blueprints for a future no one else could see.",
    
    "One night, while scanning a forum for ML engineers, a post caught his eye. A hackathon in San Francisco. The winners would receive a full scholarship to Stanford's CS department and an internship with a leading tech lab rumored to be working on sentient robotics. The event was by invitation only, its challenges undisclosed. The boy stared at the glowing screen, the cursor blinking like a pulse. This was no small competition. It felt like the doorway to another world.",
    
    "He clicked \"Apply.\""
  ]

  const images = [image1, image2, image3, image4, image5]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
        className="relative py-20 px-6 text-center gradient-bg-subtle"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            className="text-5xl md:text-6xl font-light tracking-tight text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            The Journey of an
            <span className="block bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
              AI Dreamer
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A cinematic story of passion, innovation, and the pursuit of artificial intelligence, 
            crafted through the power of AI storytelling and visual generation.
          </motion.p>
        </div>
      </motion.section>

      {/* Story Content */}
      <motion.section 
        className="py-20 px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Text Column */}
            <motion.div className="space-y-8" variants={itemVariants}>
              <div className="sticky top-32">
                <h2 className="section-title">The Story</h2>
                <div className="space-y-6">
                  {storyParagraphs.map((paragraph, index) => (
                    <motion.p 
                      key={index}
                      className="story-text"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Images Column */}
            <motion.div className="space-y-8" variants={itemVariants}>
              <h2 className="section-title">Visual Journey</h2>
              <div className="space-y-8">
                {images.map((image, index) => (
                  <motion.div
                    key={index}
                    className="relative group"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="overflow-hidden rounded-2xl shadow-xl">
                      <img
                        src={image}
                        alt={`Story scene ${index + 1}`}
                        className="story-image w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section 
        className="py-16 px-6 gradient-bg-primary text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-light mb-6">Explore the Creative Process</h3>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Discover how this story came to life through AI collaboration, 
            from initial prompts to final visuals.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/ai-project/process"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-medium hover:bg-gray-50 transition-colors duration-300 shadow-lg"
            >
              View Behind the Scenes
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}

export default StoryPage
