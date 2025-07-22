import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { 
  MusicalNoteIcon, 
  CogIcon, 
  SparklesIcon,
  BeakerIcon 
} from "@heroicons/react/24/outline";

export const meta: MetaFunction = () => {
  return [
    { title: "Music Mixing - Ketivee AI Documentation" },
    { name: "description", content: "Learn about music mixing techniques and AI-powered audio processing in Ketivee AI" },
  ];
};

export default function MixingPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
          <Link to="/" className="hover:text-gray-700 dark:hover:text-gray-300">Home</Link>
          <span>/</span>
          <Link to="/#music-production" className="hover:text-gray-700 dark:hover:text-gray-300">Music Production</Link>
          <span>/</span>
          <span className="text-gray-900 dark:text-white">Mixing</span>
        </nav>
        
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
            <MusicalNoteIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Music Mixing</h1>
        </div>
        
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Create professional-quality mixes with AI-powered tools and advanced audio processing techniques.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid gap-8">
        {/* Overview Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Overview
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Our mixing platform combines traditional audio engineering techniques with AI-powered 
              automation to help you achieve professional-quality mixes. From level balancing to 
              spatial processing, our tools provide the precision and efficiency you need.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="flex items-center space-x-3">
                <SparklesIcon className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-medium">AI Auto-Mixing</span>
              </div>
              <div className="flex items-center space-x-3">
                <CogIcon className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium">Real-time Processing</span>
              </div>
              <div className="flex items-center space-x-3">
                <BeakerIcon className="w-5 h-5 text-purple-500" />
                <span className="text-sm font-medium">Advanced Effects</span>
              </div>
            </div>
          </div>
        </section>

        {/* Mixing Tools Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Mixing Tools
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Level Balancing
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                AI-powered automatic level balancing that analyzes your mix and suggests 
                optimal volume relationships between tracks.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• Automatic gain staging</li>
                <li>• Dynamic range optimization</li>
                <li>• Frequency-aware balancing</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                EQ & Filtering
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Advanced equalization tools with AI-suggested frequency adjustments and 
                intelligent filter design for clean, musical results.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• AI frequency analysis</li>
                <li>• Musical EQ curves</li>
                <li>• Dynamic filtering</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Compression & Dynamics
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Intelligent compression algorithms that adapt to your audio content, 
                providing natural dynamics control and punch.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• Adaptive compression</li>
                <li>• Multi-band processing</li>
                <li>• Transient shaping</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Spatial Processing
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Create immersive stereo and surround sound mixes with advanced panning, 
                reverb, and spatial enhancement tools.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• Intelligent panning</li>
                <li>• 3D spatial audio</li>
                <li>• Room simulation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Workflow Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Mixing Workflow
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Track Organization</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Organize your tracks by instrument groups, set up buses and sends, 
                    and establish your mixing template for efficient workflow.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                  <span className="text-green-600 dark:text-green-400 font-semibold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Level Balancing</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Set initial levels for all tracks, focusing on the most important elements 
                    first. Use AI assistance to identify optimal gain relationships.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 dark:text-purple-400 font-semibold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">EQ & Processing</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Apply equalization to carve out space for each element, add compression 
                    for dynamics control, and use effects for character and depth.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 dark:text-orange-400 font-semibold text-sm">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Spatial Enhancement</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Add depth and width with reverb, delay, and spatial processing. 
                    Create a cohesive stereo image and immersive listening experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Features */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Advanced Features
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                AI Mix Assistant
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Intelligent mixing assistant that analyzes your tracks and suggests 
                optimal settings for levels, EQ, compression, and effects.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• Genre-specific suggestions</li>
                <li>• Real-time analysis</li>
                <li>• Learning from references</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Reference Track Matching
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Analyze reference tracks and automatically adjust your mix to match 
                the tonal balance, dynamics, and spatial characteristics.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• Spectral matching</li>
                <li>• Dynamic range matching</li>
                <li>• Stereo width analysis</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Next Steps
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link 
              to="/music-production.composition"
              className="group bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 transition-colors"
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                  <MusicalNoteIcon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400">
                  Composition
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Learn how to compose the music that will be mixed with these professional tools.
              </p>
            </Link>

            <Link 
              to="/music-production.mastering"
              className="group bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-600 transition-colors"
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                  <SparklesIcon className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400">
                  Mastering
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Discover the final steps to prepare your mixed music for distribution.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
} 