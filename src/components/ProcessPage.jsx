import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown, ChevronUp, Cpu, Palette, Code, Sparkles, Globe, Bot } from 'lucide-react'
import image1 from '../assets/1000068770.jpg'
import image2 from '../assets/1000068771.jpg'
import image3 from '../assets/1000068772.jpg'
import image4 from '../assets/1000068773.jpg'
import image5 from '../assets/1000068774.jpg'

const ProcessPage = () => {
  const [expandedCard, setExpandedCard] = useState(null)

  const processSteps = [
    {
      id: 1,
      title: "Initial Story Generation",
      model: "Llama 3.2 (Local Ollama)",
      icon: <Sparkles className="w-6 h-6" />,
      prompt: "Once upon a time, in a quiet village in Armenia, lived a boy with great dreams. As a small child, he loved robot toys. Years passed, and when he turned fifteen, his heart longed to master the magic of machines and become an ML engineer.\n\nPlease continue this story.",
      result: "As he entered high school, the boy's fascination with robots only grew stronger. He spent hours poring over online tutorials, watching videos of robotics competitions, and even building his own simple robots using Arduino kits. His parents, though not engineers themselves, encouraged his passion, recognizing the excitement it brought him.\n\nAfter graduating from high school, the boy applied to Yerevan State University's computer science program with a focus on artificial intelligence and machine learning. To his delight, he was accepted, and soon found himself immersed in a world of algorithms, neural networks, and deep learning.\n\nUnder the guidance of his professors, who were all seasoned engineers themselves, the boy delved deeper into the mysteries of ML. He spent countless hours working on projects, from image classification to natural language processing. His room became a sanctuary of wires, circuits, and screens as he honed his skills in Python, TensorFlow, and PyTorch.\n\nAs his knowledge grew, so did his ambition. The boy began to envision a future where robots like him could help solve some of the world's most pressing problems: healthcare, education, environmental conservation – anything that required precision, speed, and efficiency. He dreamed of working on projects that would leave an impact not just in Armenia, but globally.\n\nOne day, while browsing online forums for ML enthusiasts, the boy stumbled upon a post about a prestigious hackathon taking place in San Francisco. The grand prize was a full scholarship to Stanford University's renowned CS department, as well as a coveted internship with a top tech firm. Intrigued by the opportunity, the boy decided to take a leap of faith and apply for the hackathon...",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "Style Enhancement",
      model: "GPT-5",
      icon: <Palette className="w-6 h-6" />,
      prompt: "I want the story to be sci-fi and cinematic.",
      result: "Once upon a time, in a quiet village tucked between the mountains of Armenia, a boy dreamed of building machines that could think. At five, he dismantled his toy robots to see how they moved. At ten, he rebuilt them with scraps of wire and circuit boards scavenged from old radios. By fifteen, his bedroom glowed blue from LED lights and humming servomotors, like a laboratory hidden in plain sight.\n\nWhile other students memorized formulas, he wrote algorithms. He downloaded secret datasets from obscure online archives and trained small neural networks on a secondhand laptop that overheated under the strain. Videos of robotics tournaments played on his screen while code compiled in the background. His parents watched in quiet awe as their son turned their home into a workshop of blinking lights and restless ideas.\n\nAfter high school, he applied to Yerevan State University's computer science program, choosing artificial intelligence as his field. When the acceptance email arrived, it felt like the first stage of a launch sequence. University life moved fast: algorithms, neural nets, deep learning, TensorFlow, PyTorch. Professors guided him, but he pushed beyond the coursework. His dorm room became a command center, lined with monitors and prototype machines running on self-written code.\n\nHis ambitions expanded. He didn't want to build robots that only obeyed. He wanted to design systems that could heal, teach, and repair the planet. Machines for hospitals in remote areas. Learning assistants for children without access to schools. Autonomous drones to clean oceans. He mapped these visions on digital boards like blueprints for a future no one else could see.\n\nOne night, while scanning a forum for ML engineers, a post caught his eye. A hackathon in San Francisco. The winners would receive a full scholarship to Stanford's CS department and an internship with a leading tech lab rumored to be working on sentient robotics. The event was by invitation only, its challenges undisclosed. The boy stared at the glowing screen, the cursor blinking like a pulse. This was no small competition. It felt like the doorway to another world.\n\nHe clicked \"Apply.\"",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      title: "Content Refinement",
      model: "Claude Sonnet 3.5",
      icon: <Code className="w-6 h-6" />,
      prompt: "Remove the parts of the story that do not make sense, and replace them with educational and interesting parts. Fix the grammar, keep the style of the story (sci-fi, cinematic), but in a simpler english.",
      result: "Once upon a time, in a quiet village tucked between the mountains of Armenia, a boy dreamed of building machines that could think. At five, he dismantled his toy robots to see how they moved. At ten, he rebuilt them with scraps of wire and circuit boards scavenged from old radios. By fifteen, his bedroom glowed blue from LED lights and humming servomotors, like a laboratory hidden in plain sight.\n\nWhile other students memorized formulas, he wrote algorithms. He downloaded secret datasets from obscure online archives and trained small neural networks on a secondhand laptop that overheated under the strain. Videos of robotics tournaments played on his screen while code compiled in the background. His parents watched in quiet awe as their son turned their home into a workshop of blinking lights and restless ideas.\n\nAfter high school, he applied to Yerevan State University's computer science program, choosing artificial intelligence as his field. When the acceptance email arrived, it felt like the first stage of a launch sequence. University life moved fast: algorithms, neural nets, deep learning, TensorFlow, PyTorch. Professors guided him, but he pushed beyond the coursework. His dorm room became a command center, lined with monitors and prototype machines running on self-written code.\n\nHis ambitions expanded. He didn't want to build robots that only obeyed. He wanted to design systems that could heal, teach, and repair the planet. Machines for hospitals in remote areas. Learning assistants for children without access to schools. Autonomous drones to clean oceans. He mapped these visions on digital boards like blueprints for a future no one else could see.\n\nOne night, while scanning a forum for ML engineers, a post caught his eye. A hackathon in San Francisco. The winners would receive a full scholarship to Stanford's CS department and an internship with a leading tech lab rumored to be working on sentient robotics. The event was by invitation only, its challenges undisclosed. The boy stared at the glowing screen, the cursor blinking like a pulse. This was no small competition. It felt like the doorway to another world.\n\nHe clicked \"Apply.\"",
      color: "from-emerald-500 to-teal-500"
    },
    {
      id: 4,
      title: "Visual Prompt Creation",
      model: "GPT-5",
      icon: <Cpu className="w-6 h-6" />,
      prompt: "Based on this story, generate 5 prompts for AI visuals",
      result: "1. Childhood Workshop Scene\nA small Armenian village house interior at night. A 10-year-old boy sits on the floor surrounded by wires, old circuit boards, and dismantled toy robots. Warm lamp light contrasts with the cool glow of blue LEDs from his homemade creations.\n\n2. Teenage Laboratory Bedroom\nA dimly lit teenage bedroom glowing with blue LEDs and humming servomotors. Shelves stacked with old radios, laptops, and robotic prototypes. The boy sits at a desk writing code on a battered secondhand laptop as robotics tournament videos play on another screen.\n\n3. University Command Center\nA cramped dorm room at Yerevan State University transformed into a high-tech hub. Multiple monitors show neural network diagrams and code. Small prototype robots are scattered around. The student focuses intensely on his screen, reflecting ambition and determination.\n\n4. Blueprints of a Better Future\nA digital board covered with holographic-style blueprints of machines: medical robots for remote hospitals, AI learning assistants for children, and autonomous ocean-cleaning drones. The student stands in front of it, pointing at one design, envisioning his future.\n\n5. The Hackathon Decision Moment\nLate at night in a dark dorm room. Only the glow of a laptop screen illuminates the boy's face. On the screen is a hackathon invitation promising a scholarship and internship. The cursor blinks on \"Apply\" like a heartbeat as his finger hovers over the trackpad.",
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      title: "Visual Generation",
      model: "Google Gemini 2.5 Pro (Nano Banana)",
      icon: <Palette className="w-6 h-6" />,
      prompt: "Generated images based on the 5 visual prompts created in step 4.",
      result: "Five high-quality AI-generated images were created, each corresponding to a key moment in the story. The images capture the cinematic and sci-fi aesthetic requested, showing the protagonist's journey from childhood curiosity to university ambition.",
      images: [image1, image2, image3, image4, image5],
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: 6,
      title: "Website Development",
      model: "Manus AI",
      icon: <Globe className="w-6 h-6" />,
      prompt: "i want you to make a website for my project, which is gonna be in English.\n\nThe main purpose of the project is to understand and use AI better, for our needs.\n\nUsing different AI tools, I generated an AI story, modified it, and also got visuals.\n\nMy website will be consisting of 3 parts.\n\n1 is the main page, where all of the final results will be displayed\n\n2 is the second page, where all the under hidden work was done (Prompt - result - modelname)\n\n3 is about me\n\nThe website has to be in minimalist, 2 fonts usage maximum. It has to be super professional, in a portfolio project style. Focus on both the quality and speed.\n\nNow we are going to work on the first page.\n\nThis is the story (The final result) alongside the pictures. Start building the 1st page, and I will add the rest of the stuff.\n\n[Story and images provided]\n\nFor the 2nd part of the website.\n\nThere are 5 prompts, make sure to exclude the prompt, model and result, all in a different style, and in the 5th prompt include the visuals I gave to you.\n\nFor the 3rd part, which is about me, include this story.\n\n[Personal story provided]\n\nIn a different style, highlight my birthday July 19, 2008, location Yerevan/Armenia, and contacts instagram: @ars.yvn, telegram: @ars_yvn, email: ai.rsen@proton.me\n\ninclude the photo too.\n\nAll visuals must be cropped, in a beautiful shape, that looks clean and modern.\n\nalso, in 3rd part, at the bottom, say, that this work was done as an AI research for AI4Youth Youth Chapter (EIF x AmeriaBank)\n\nalso be creative and improvise other stuff. act as a website analyzer and see what I have missed and what can you add to make it better and beautiful, in the context of text too.\n\nin 2nd part, also add a 6. This website was made by Manus AI, with a whole other prompts list, which will be provided separately, in case if it's needed.\n\nWhen I say parts, I mean the navigation buttons. When the website is opened, the default 1st part must load, but to see the other parts, the visitor has to click buttons for Prompts list and About me sections\n\nThe website can be in aesthetic green, and blue\n\npart 2 of the website must state all of the prompts that I used, and gave to you\n\nand don't name the website \"AI story portfolio\", name it AI4All Youth Chapter project",
      result: "A modern, responsive portfolio website featuring minimalist design, aesthetic green and blue color scheme, smooth animations, and professional typography. The site showcases the AI story project across three main sections: the story itself, the creative process documentation, and information about the creator. Built with React, Tailwind CSS, and modern web technologies.",
      color: "from-cyan-500 to-blue-500"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

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
            Behind the
            <span className="block bg-gradient-to-r from-emerald-500 to-blue-600 bg-clip-text text-transparent">
              Creative Process
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore the step-by-step journey of how this AI story came to life, 
            from initial prompts to final visuals, showcasing the collaborative power of different AI models.
          </p>
        </motion.div>

        {/* Process Steps */}
        <motion.div 
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              variants={cardVariants}
              className="process-card"
            >
              <div 
                className="flex items-center justify-between cursor-pointer"
                onClick={() => setExpandedCard(expandedCard === step.id ? null : step.id)}
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${step.color} text-white shadow-lg`}>
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900">{step.title}</h3>
                    <p className="text-sm text-gray-500 flex items-center mt-1">
                      <Bot className="w-4 h-4 mr-1" />
                      {step.model}
                    </p>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: expandedCard === step.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </motion.div>
              </div>

              <motion.div
                initial={false}
                animate={{
                  height: expandedCard === step.id ? "auto" : 0,
                  opacity: expandedCard === step.id ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="pt-6 space-y-6">
                  
                  {/* Prompt */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                      Prompt
                    </h4>
                    <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-blue-500">
                      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                        {step.prompt}
                      </p>
                    </div>
                  </div>

                  {/* Result */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                      Result
                    </h4>
                    <div className="bg-emerald-50 rounded-lg p-4 border-l-4 border-emerald-500">
                      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                        {step.result}
                      </p>
                    </div>
                  </div>

                  {/* Images for step 5 */}
                  {step.images && (
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                        Generated Visuals
                      </h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {step.images.map((image, imgIndex) => (
                          <motion.div
                            key={imgIndex}
                            className="relative group"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="overflow-hidden rounded-lg shadow-md">
                              <img
                                src={image}
                                alt={`Generated visual ${imgIndex + 1}`}
                                className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                              />
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Note */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-lg font-medium text-gray-900 mb-3">
              AI Collaboration Showcase
            </h3>
            <p className="text-gray-600 leading-relaxed">
              This project demonstrates the power of combining multiple AI models and tools 
              to create compelling narratives and visuals. Each step in the process contributed 
              unique strengths, from creative storytelling to technical refinement and visual generation.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ProcessPage
