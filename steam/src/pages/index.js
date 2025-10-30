export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">SW</span>
              </div>
              <span className="text-slate-900 font-bold text-xl">Steam Workshop</span>
            </div>
            <div className="hidden md:flex gap-8">
              <a href="#features" className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium">Features</a>
              <a href="#learn" className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium">Learn</a>
              <a href="#kits" className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium">Kits</a>
              <a href="#community" className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium">Community</a>
            </div>
            <button className="bg-slate-900 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-1.5 bg-slate-100 rounded-full">
            <span className="text-slate-700 text-sm font-medium">Educational Platform for Young Scientists</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Learn Science & Electronics
            <span className="block text-slate-600 mt-2">Through Hands-On Experience</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            A community-driven platform combining interactive lessons, project libraries, and circuit kits. Designed for kids to explore STEM through practical learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-slate-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors">
              Browse Lessons
            </button>
            <button className="bg-white text-slate-900 px-8 py-3 rounded-lg font-medium border border-slate-300 hover:border-slate-400 transition-colors">
              View Kits
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Steam Workshop
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              A comprehensive learning ecosystem built for the next generation of innovators
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Feature 1 */}
            <div className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-shadow border border-slate-100">
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Curated Lesson Library</h3>
              <p className="text-slate-600 leading-relaxed">
                Access hundreds of vetted lessons created by educators. Community voting ensures quality content rises to the top.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-shadow border border-slate-100">
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Collaborative Learning</h3>
              <p className="text-slate-600 leading-relaxed">
                Discussion forums and project sharing encourage peer learning and knowledge exchange within a safe environment.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-shadow border border-slate-100">
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🔌</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Physical Circuit Kits</h3>
              <p className="text-slate-600 leading-relaxed">
                Carefully designed kits with quality components. From basic circuits to advanced robotics projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learn Section */}
      <section id="learn" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-1.5 bg-white border border-slate-200 rounded-full">
                <span className="text-slate-700 text-sm font-medium">Structured Learning Path</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Progress at Your Own Pace
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Our curriculum is organized by difficulty and topic. Track your progress, earn achievements, and build a portfolio of completed projects.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-slate-900 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-slate-700">Video tutorials with written guides</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-slate-900 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-slate-700">Expert-moderated Q&A discussions</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-slate-900 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-slate-700">Achievement system and progress tracking</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200">
                <div className="space-y-4">
                  <div className="bg-slate-50 rounded-lg p-5 border border-slate-100">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-slate-900 rounded"></div>
                      <div>
                        <div className="text-slate-900 font-medium text-sm">Introduction to LEDs</div>
                        <div className="text-slate-500 text-xs">1.2k upvotes · Beginner</div>
                      </div>
                    </div>
                    <p className="text-slate-600 text-sm">Understanding light-emitting diodes and basic circuit construction.</p>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-5 border border-slate-100">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-slate-700 rounded"></div>
                      <div>
                        <div className="text-slate-900 font-medium text-sm">Battery & Power Basics</div>
                        <div className="text-slate-500 text-xs">890 upvotes · Beginner</div>
                      </div>
                    </div>
                    <p className="text-slate-600 text-sm">Learn voltage, current, and how batteries power electronic circuits.</p>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-5 border border-slate-100">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-slate-500 rounded"></div>
                      <div>
                        <div className="text-slate-900 font-medium text-sm">Sound & Buzzers</div>
                        <div className="text-slate-500 text-xs">654 upvotes · Intermediate</div>
                      </div>
                    </div>
                    <p className="text-slate-600 text-sm">Create sound with circuits and explore frequency concepts.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kits Section */}
      <section id="kits" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Circuit Kits
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Quality components and comprehensive guides for hands-on learning
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Kit 1 */}
            <div className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-lg transition-all">
              <div className="bg-slate-100 h-48 flex items-center justify-center border-b border-slate-200">
                <span className="text-7xl">🔋</span>
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-green-50 border border-green-200 rounded-full text-green-700 text-xs font-medium mb-3">
                  Beginner Level
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Starter Kit</h3>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">LEDs, batteries, resistors, and breadboard. Includes 10 beginner projects with step-by-step guides.</p>
                <div className="text-2xl font-bold text-slate-900 mb-4">$29.99</div>
                <button className="w-full bg-slate-900 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors">
                  View Details
                </button>
              </div>
            </div>

            {/* Kit 2 */}
            <div className="bg-white rounded-xl overflow-hidden border-2 border-slate-900 hover:shadow-lg transition-all relative">
              <div className="absolute top-4 right-4 bg-slate-900 text-white px-3 py-1 rounded-full text-xs font-medium">
                Most Popular
              </div>
              <div className="bg-slate-100 h-48 flex items-center justify-center border-b border-slate-200">
                <span className="text-7xl">⚡</span>
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-xs font-medium mb-3">
                  Intermediate Level
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Advanced Kit</h3>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">Sensors, motors, LCD display. Build 25+ interactive projects including weather stations and alarms.</p>
                <div className="text-2xl font-bold text-slate-900 mb-4">$59.99</div>
                <button className="w-full bg-slate-900 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors">
                  View Details
                </button>
              </div>
            </div>

            {/* Kit 3 */}
            <div className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-lg transition-all">
              <div className="bg-slate-100 h-48 flex items-center justify-center border-b border-slate-200">
                <span className="text-7xl">🤖</span>
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-purple-50 border border-purple-200 rounded-full text-purple-700 text-xs font-medium mb-3">
                  Expert Level
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Robotics Kit</h3>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">Arduino-compatible board, servos, and sensors. Build programmable robots with 40+ advanced projects.</p>
                <div className="text-2xl font-bold text-slate-900 mb-4">$99.99</div>
                <button className="w-full bg-slate-900 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Join Our Learning Community
          </h2>
          <p className="text-slate-600 text-lg mb-12 max-w-2xl mx-auto">
            Connect with thousands of students, educators, and makers worldwide
          </p>
          
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <div className="text-3xl font-bold text-slate-900 mb-1">10,000+</div>
              <div className="text-slate-600 text-sm">Active Students</div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <div className="text-3xl font-bold text-slate-900 mb-1">500+</div>
              <div className="text-slate-600 text-sm">Lesson Modules</div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <div className="text-3xl font-bold text-slate-900 mb-1">2,000+</div>
              <div className="text-slate-600 text-sm">Projects Completed</div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <div className="text-3xl font-bold text-slate-900 mb-1">50+</div>
              <div className="text-slate-600 text-sm">Countries</div>
            </div>
          </div>

          <button className="bg-slate-900 text-white px-10 py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors">
            Create Free Account
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">SW</span>
                </div>
                <span className="text-slate-900 font-bold text-xl">Steam Workshop</span>
              </div>
              <p className="text-slate-600 text-sm">Educational platform for young scientists and engineers.</p>
            </div>
            
            <div>
              <h4 className="text-slate-900 font-semibold mb-4 text-sm">Learning</h4>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li><a href="#" className="hover:text-slate-900 transition-colors">Lesson Library</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">Getting Started</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">For Educators</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-slate-900 font-semibold mb-4 text-sm">Products</h4>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li><a href="#" className="hover:text-slate-900 transition-colors">Circuit Kits</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">Components</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">Gift Cards</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-slate-900 font-semibold mb-4 text-sm">Company</h4>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li><a href="#" className="hover:text-slate-900 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-200 pt-8 text-center text-slate-500 text-sm">
            © 2025 Steam Workshop. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}