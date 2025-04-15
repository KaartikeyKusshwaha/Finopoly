import React from 'react';
import { Play } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">How to Play</h1>
        
        <div className="space-y-12">
          {/* Step 1 */}
          <div className="flex items-start gap-6 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all group">
            <div className="flex-shrink-0 w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center text-xl font-semibold transition-colors group-hover:bg-[#f82c44]">
              1
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Getting Started</h2>
              <p className="text-gray-600">
                Begin your journey by familiarizing yourself with the game controls. Use the arrow keys
                on your keyboard to navigate through the game world. The up arrow jumps, left and right
                arrows move your character, and the down arrow performs special actions.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start gap-6 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all group">
            <div className="flex-shrink-0 w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center text-xl font-semibold transition-colors group-hover:bg-[#f82c44]">
              2
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Collecting Points</h2>
              <p className="text-gray-600">
                Throughout each level, you'll find various collectible items. Gather coins to increase
                your score, power-ups to enhance your abilities, and special items to unlock new
                features. The more you collect, the higher your final score will be!
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start gap-6 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all group">
            <div className="flex-shrink-0 w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center text-xl font-semibold transition-colors group-hover:bg-[#f82c44]">
              3
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Completing Levels</h2>
              <p className="text-gray-600">
                Each level has specific objectives you need to complete. Reach the finish line while
                avoiding obstacles and enemies. The faster you complete a level and the more points
                you collect, the higher your star rating will be. Try to get three stars on every
                level!
              </p>
            </div>
          </div>
        </div>

        {/* Start Button */}
        <div className="mt-12 text-center">
          <button
            className="inline-flex items-center gap-2 bg-blue-800 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-900 transition-colors shadow-lg hover:shadow-xl"
            onClick={() => alert('Game starting...')}
          >
            <Play size={24} />
            Start the Game
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;