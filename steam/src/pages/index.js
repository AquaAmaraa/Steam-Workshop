export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="fixed top-10 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-60 blur-xl"></div>
      <div className="fixed top-1/4 right-20 w-32 h-32 bg-pink-400 rounded-full opacity-40 blur-2xl"></div>
      <div className="fixed bottom-20 left-1/4 w-40 h-40 bg-cyan-300 rounded-full opacity-50 blur-2xl"></div>
      <div className="fixed top-1/2 right-1/3 w-24 h-24 bg-purple-400 rounded-full opacity-40 blur-xl"></div>
      
      {/* Floating Decorative Shapes */}
      <div className="fixed top-20 right-1/4">
        <div className="w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
      </div>
      <div className="fixed bottom-40 left-20">
        <div className="w-6 h-6 bg-pink-500 rotate-45 animate-pulse"></div>
      </div>
      <div className="fixed top-1/3 left-10">
        <div className="w-10 h-10 bg-cyan-400 rounded-lg rotate-12 animate-bounce" style={{animationDelay: '0.5s'}}></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 bg-white/90 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform">
                <span className="text-white font-bold text-xl">⚡</span>
              </div>
              <span className="text-gray-800 font-bold text-xl">Steam Workshop</span>
            </div>
            <div className="hidden md:flex gap-6">
              <a href="#courses" className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-semibold">Courses</a>
              <a href="#media" className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-semibold">Media</a>
              <a href="#community" className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-semibold">Community</a>
              <a href="#support" className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-semibold">Support</a>
              <a href="#impact" className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-semibold">Impact</a>
            </div>
            <div className="flex items-center gap-3">
              <button className="text-gray-600 hover:text-blue-600 p-2 rounded-lg hover:bg-white/80 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
                Community
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Trending Section */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-gray-800">Trending Coding Quests</h2>
              <button className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-md hover:shadow-lg hover:bg-blue-600 transition-all">
                Discover
              </button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              
              {/* Quest Card 1 */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all cursor-pointer border-4 border-transparent hover:border-blue-400">
                <div className="bg-gradient-to-br from-orange-400 to-orange-500 h-32 flex items-center justify-center relative">
                  <div className="absolute top-2 left-2 bg-blue-500 text-white px-2 py-0.5 rounded-full text-xs font-bold">
                    🎯 Quest
                  </div>
                  <div className="text-6xl">📦</div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-sm text-gray-800 mb-1">Python Fundamentals</h3>
                  <p className="text-xs text-gray-500 mb-2">Learn basics · 5 hours</p>
                  <div className="flex items-center gap-1 text-xs">
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-gray-300">⭐</span>
                  </div>
                  <div className="mt-2 flex items-center gap-1 text-xs text-orange-600 font-semibold">
                    <span>🔥</span>
                    <span>6.4k</span>
                  </div>
                </div>
              </div>

              {/* Quest Card 2 */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all cursor-pointer">
                <div className="bg-gradient-to-br from-amber-400 to-orange-400 h-32 flex items-center justify-center relative">
                  <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-0.5 rounded-full text-xs font-bold">
                    ✨ Fun
                  </div>
                  <div className="text-6xl">🎨</div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-sm text-gray-800 mb-1">Fun Fundamentals</h3>
                  <p className="text-xs text-gray-500 mb-2">Creative coding · 3 hours</p>
                  <div className="flex items-center gap-1 text-xs">
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-yellow-500">⭐</span>
                  </div>
                  <div className="mt-2 flex items-center gap-1 text-xs text-orange-600 font-semibold">
                    <span>🔥</span>
                    <span>8.4k (309)</span>
                  </div>
                </div>
              </div>

              {/* Quest Card 3 */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all cursor-pointer">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 h-32 flex items-center justify-center relative">
                  <div className="absolute top-2 left-2 bg-blue-500 text-white px-2 py-0.5 rounded-full text-xs font-bold">
                    🎯 Start
                  </div>
                  <div className="text-6xl">🔍</div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-sm text-gray-800 mb-1">Start Career Leap</h3>
                  <p className="text-xs text-gray-500 mb-2">Pro skills · 10 hours</p>
                  <div className="flex items-center gap-1 text-xs">
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-gray-300">⭐</span>
                    <span className="text-gray-300">⭐</span>
                  </div>
                  <div className="mt-2 flex items-center gap-1 text-xs text-orange-600 font-semibold">
                    <span>🔥</span>
                    <span>5.4k (127)</span>
                  </div>
                </div>
              </div>

              {/* Quest Card 4 */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all cursor-pointer">
                <div className="bg-gradient-to-br from-gray-700 to-gray-800 h-32 flex items-center justify-center relative">
                  <div className="absolute top-2 left-2 bg-purple-500 text-white px-2 py-0.5 rounded-full text-xs font-bold">
                    💻 Code
                  </div>
                  <div className="text-3xl text-green-400 font-mono">{"</>"}</div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-sm text-gray-800 mb-1">React Discovery Kit</h3>
                  <p className="text-xs text-gray-500 mb-2">Advanced · 8 hours</p>
                  <div className="flex items-center gap-1 text-xs">
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-gray-300">⭐</span>
                  </div>
                  <div className="mt-2 flex items-center gap-1 text-xs text-orange-600 font-semibold">
                    <span>🔥</span>
                    <span>7.8k (548)</span>
                  </div>
                </div>
              </div>

              {/* Quest Card 5 */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all cursor-pointer">
                <div className="bg-gradient-to-br from-yellow-300 to-yellow-400 h-32 flex items-center justify-center relative">
                  <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-0.5 rounded-full text-xs font-bold">
                    🎮 Game
                  </div>
                  <div className="text-6xl">🎯</div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-sm text-gray-800 mb-1">Unit Quest</h3>
                  <p className="text-xs text-gray-500 mb-2">Game dev · 6 hours</p>
                  <div className="flex items-center gap-1 text-xs">
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-yellow-500">⭐</span>
                  </div>
                  <div className="mt-2 flex items-center gap-1 text-xs text-orange-600 font-semibold">
                    <span>🔥</span>
                    <span>9.4k (168)</span>
                  </div>
                </div>
              </div>

              {/* Quest Card 6 */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all cursor-pointer">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 h-32 flex items-center justify-center relative">
                  <div className="absolute top-2 left-2 bg-orange-500 text-white px-2 py-0.5 rounded-full text-xs font-bold">
                    🔥 Hot
                  </div>
                  <div className="text-3xl text-yellow-400 font-mono">{"{ }"}</div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-sm text-gray-800 mb-1">Python</h3>
                  <p className="text-xs text-gray-500 mb-2">Backend · 7 hours</p>
                  <div className="flex items-center gap-1 text-xs">
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-gray-300">⭐</span>
                  </div>
                  <div className="mt-2 flex items-center gap-1 text-xs text-orange-600 font-semibold">
                    <span>🔥</span>
                    <span>6.4k (5)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* New Project Portals */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-gray-800">New Project Portals</h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              
              {/* Portal 1 - Python */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all cursor-pointer">
                <div className="bg-gradient-to-br from-yellow-400 to-amber-500 h-32 flex items-center justify-center">
                  <div className="text-6xl">🐍</div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">P</div>
                    <h3 className="font-bold text-sm text-gray-800">Python Plus Sampler</h3>
                  </div>
                  <p className="text-xs text-gray-500 mb-2">60 students enrolled</p>
                  <div className="flex items-center gap-1 text-xs">
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-yellow-500">⭐</span>
                  </div>
                </div>
              </div>

              {/* Portal 2 - 3D */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all cursor-pointer">
                <div className="bg-gradient-to-br from-green-400 to-emerald-500 h-32 flex items-center justify-center">
                  <div className="text-6xl">📦</div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">3D</div>
                    <h3 className="font-bold text-sm text-gray-800">Stories Alive!</h3>
                  </div>
                  <p className="text-xs text-gray-500 mb-2">142 students enrolled</p>
                  <div className="flex items-center gap-1 text-xs">
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-gray-300">⭐</span>
                  </div>
                </div>
              </div>

              {/* Portal 3 - Electronics */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all cursor-pointer">
                <div className="bg-gradient-to-br from-blue-400 to-blue-600 h-32 flex items-center justify-center">
                  <div className="text-6xl">🔌</div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold">⚡</div>
                    <h3 className="font-bold text-sm text-gray-800">Build & Tinker Kit</h3>
                  </div>
                  <p className="text-xs text-gray-500 mb-2">Get familiar with circuits</p>
                  <div className="flex items-center gap-1 text-xs">
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-yellow-500">⭐</span>
                  </div>
                </div>
              </div>

              {/* Portal 4 - Web */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all cursor-pointer">
                <div className="bg-gradient-to-br from-cyan-400 to-blue-500 h-32 flex items-center justify-center">
                  <div className="text-6xl">🌐</div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center text-white text-xs font-bold">W</div>
                    <h3 className="font-bold text-sm text-gray-800">Full JavaScript</h3>
                  </div>
                  <p className="text-xs text-gray-500 mb-2">Master web development</p>
                  <div className="flex items-center gap-1 text-xs">
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-gray-300">⭐</span>
                  </div>
                </div>
              </div>

              {/* Portal 5 - Robotics */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all cursor-pointer">
                <div className="bg-gradient-to-br from-red-400 to-pink-500 h-32 flex items-center justify-center">
                  <div className="text-6xl">🤖</div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">R</div>
                    <h3 className="font-bold text-sm text-gray-800">Open Quest!</h3>
                  </div>
                  <p className="text-xs text-gray-500 mb-2">Build smart robots</p>
                  <div className="flex items-center gap-1 text-xs">
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-yellow-500">⭐</span>
                  </div>
                </div>
              </div>

              {/* Portal 6 - AI */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all cursor-pointer">
                <div className="bg-gradient-to-br from-purple-400 to-purple-600 h-32 flex items-center justify-center">
                  <div className="text-6xl">🧠</div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">AI</div>
                    <h3 className="font-bold text-sm text-gray-800">Hardware Fusion</h3>
                  </div>
                  <p className="text-xs text-gray-500 mb-2">Explore AI & ML</p>
                  <div className="flex items-center gap-1 text-xs">
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-gray-300">⭐</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Popular Games */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-gray-800">Popular Games</h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              
              {/* Game 1 */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all cursor-pointer">
                <div className="bg-gradient-to-br from-indigo-400 to-purple-500 h-40 flex items-center justify-center">
                  <div className="text-7xl">🎮</div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 mb-1">Code Combat</h3>
                  <p className="text-xs text-gray-500">Battle while coding</p>
                </div>
              </div>

              {/* Game 2 */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all cursor-pointer">
                <div className="bg-gradient-to-br from-pink-400 to-red-500 h-40 flex items-center justify-center">
                  <div className="text-7xl">🏆</div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 mb-1">Circuit Champions</h3>
                  <p className="text-xs text-gray-500">Build fastest circuits</p>
                </div>
              </div>

              {/* Game 3 */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all cursor-pointer">
                <div className="bg-gradient-to-br from-green-400 to-teal-500 h-40 flex items-center justify-center">
                  <div className="text-7xl">🎯</div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 mb-1">Logic Legends</h3>
                  <p className="text-xs text-gray-500">Solve puzzles together</p>
                </div>
              </div>

              {/* Game 4 */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all cursor-pointer">
                <div className="bg-gradient-to-br from-yellow-400 to-orange-500 h-40 flex items-center justify-center">
                  <div className="text-7xl">⚡</div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 mb-1">Speed Coder</h3>
                  <p className="text-xs text-gray-500">Race against time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
              Join Our Learning Community
            </h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center transform hover:scale-110 transition-transform">
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  10,000+
                </div>
                <div className="text-gray-600 font-semibold">Active Students</div>
              </div>
              <div className="text-center transform hover:scale-110 transition-transform">
                <div className="text-5xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent mb-2">
                  500+
                </div>
                <div className="text-gray-600 font-semibold">Lesson Modules</div>
              </div>
              <div className="text-center transform hover:scale-110 transition-transform">
                <div className="text-5xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-2">
                  2,000+
                </div>
                <div className="text-gray-600 font-semibold">Projects Completed</div>
              </div>
              <div className="text-center transform hover:scale-110 transition-transform">
                <div className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent mb-2">
                  50+
                </div>
                <div className="text-gray-600 font-semibold">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-white/70 backdrop-blur-md border-t-4 border-purple-300 py-12 px-4 sm:px-6 lg:px-8 mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">⚡</span>
                </div>
                <span className="text-gray-800 font-bold text-xl">Steam Workshop</span>
              </div>
              <p className="text-gray-600 text-sm">Making STEM fun and accessible for everyone!</p>
            </div>
            
            <div>
              <h4 className="text-gray-800 font-bold mb-4">Learning</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li><a href="#" className="hover:text-purple-600 transition-colors">Lesson Library</a></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">Getting Started</a></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">For Educators</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-gray-800 font-bold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li><a href="#" className="hover:text-purple-600 transition-colors">Circuit Kits</a></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">Components</a></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">Gift Cards</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-gray-800 font-bold mb-4">Community</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li><a href="#" className="hover:text-purple-600 transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">Forums</a></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">Events</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-300 pt-8 text-center text-gray-500 text-sm">
            © 2025 Steam Workshop. Made with 💜 for young innovators
          </div>
        </div>
      </footer>
    </div>
  );
}