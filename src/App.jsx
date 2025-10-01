import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import StoryPage from './components/StoryPage'
import ProcessPage from './components/ProcessPage'
import AboutPage from './components/AboutPage'
import './App.css'

function Navigation() {
  const location = useLocation()
  
  const navItems = [
    { path: '/', label: 'Story', id: 'story' },
    { path: '/process', label: 'Process', id: 'process' },
    { path: '/about', label: 'About', id: 'about' }
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-light tracking-wide text-gray-900 hover:text-blue-600 transition-colors duration-300">
            AI4All Youth Chapter
          </Link>
          <div className="flex space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className={`relative text-sm font-medium tracking-wide transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

function AnimatedRoutes() {
  const location = useLocation()
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <StoryPage />
          </motion.div>
        } />
        <Route path="/process" element={
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <ProcessPage />
          </motion.div>
        } />
        <Route path="/about" element={
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <AboutPage />
          </motion.div>
        } />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <Router basename="/ai-project/">
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
        <Navigation />
        <main className="pt-24">
          <AnimatedRoutes />
        </main>
      </div>
    </Router>
  )
}

export default App
