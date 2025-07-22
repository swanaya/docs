import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { 
  MusicalNoteIcon, 
  MicrophoneIcon, 
  SparklesIcon,
  BeakerIcon 
} from "@heroicons/react/24/outline";

export const meta: MetaFunction = () => {
  return [
    { title: "Music Composition - Ketivee AI Documentation" },
    { name: "description", content: "Learn about music composition tools and AI-powered songwriting in Ketivee AI" },
  ];
};

export default function CompositionPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
          <Link to="/" className="hover:text-gray-700 dark:hover:text-gray-300">Home</Link>
          <span>/</span>
          <Link to="/#music-production" className="hover:text-gray-700 dark:hover:text-gray-300">Music Production</Link>
          <span>/</span>
          <span className="text-gray-900 dark:text-white">Composition</span>
        </nav>
        
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
            <MusicalNoteIcon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Music Composition</h1>
        </div>
        
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Create compelling musical compositions with AI-assisted tools and advanced music theory algorithms.
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
              Our composition tools combine traditional music theory with cutting-edge AI to help 
              you create melodies, harmonies, and arrangements that resonate with listeners. 
              Whether you're a beginner or an experienced composer, our platform provides the 
              tools you need to bring your musical ideas to life.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="flex items-center space-x-3">
                <SparklesIcon className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-medium">AI Melody Generation</span>
              </div>
              <div className="flex items-center space-x-3">
                <MicrophoneIcon className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium">Real-time Collaboration</span>
              </div>
              <div className="flex items-center space-x-3">
                <BeakerIcon className="w-5 h-5 text-purple-500" />
                <span className="text-sm font-medium">Advanced Theory</span>
              </div>
            </div>
          </div>
        </section>

        {/* Composition Tools Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Composition Tools
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Melody Generator
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                AI-powered melody creation that understands musical theory and can generate 
                catchy, memorable melodies based on your input parameters and style preferences.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• Scale-aware generation</li>
                <li>• Genre-specific patterns</li>
                <li>• Emotional context matching</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Harmony Assistant
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Intelligent chord progression suggestions and harmonization tools that help 
                you create rich, complex harmonies that complement your melodies.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• Chord progression analysis</li>
                <li>• Voice leading optimization</li>
                <li>• Jazz and classical harmony</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Arrangement Tools
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Structure your compositions with intelligent arrangement suggestions, 
                dynamic section transitions, and automated orchestration features.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• Song structure templates</li>
                <li>• Instrumentation suggestions</li>
                <li>• Dynamic contrast tools</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Rhythm Generator
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Create compelling rhythms and grooves with AI-powered drum pattern generation 
                and rhythmic analysis tools for any genre or style.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• Genre-specific patterns</li>
                <li>• Syncopation analysis</li>
                <li>• Groove quantization</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Music Theory Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Music Theory Integration
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Scale Analysis
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Automatic scale detection and analysis tools that help you understand 
                  the theoretical foundation of your compositions and suggest improvements.
                </p>
                <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                  <li>• Modal analysis</li>
                  <li>• Key signature detection</li>
                  <li>• Scale degree identification</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Chord Theory
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Advanced chord analysis including extended harmonies, voicing suggestions, 
                  and functional harmony analysis for sophisticated compositions.
                </p>
                <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                  <li>• Extended chord voicings</li>
                  <li>• Functional harmony</li>
                  <li>• Voice leading rules</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Workflow Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Composition Workflow
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Concept & Inspiration</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Start with a musical idea, emotion, or concept. Use AI tools to explore 
                    different musical directions and find the right starting point for your composition.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                  <span className="text-green-600 dark:text-green-400 font-semibold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Melody Development</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Create your main melody using AI assistance or traditional composition methods. 
                    Focus on memorable hooks and strong melodic contours.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 dark:text-purple-400 font-semibold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Harmony & Chords</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Add harmonic support to your melody with chord progressions and harmonies. 
                    Use AI suggestions to explore different harmonic possibilities.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 dark:text-orange-400 font-semibold text-sm">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Arrangement & Structure</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Organize your musical ideas into a complete song structure with verses, 
                    choruses, bridges, and other sections. Add instrumentation and dynamics.
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
                Style Transfer
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Transform your compositions to match different musical styles and genres 
                using AI-powered style analysis and adaptation algorithms.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• Genre-specific adaptations</li>
                <li>• Historical period matching</li>
                <li>• Cultural style integration</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Collaborative Composition
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Work with other musicians in real-time, sharing ideas and building compositions 
                together with AI-assisted conflict resolution and harmonization.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• Real-time collaboration</li>
                <li>• Version control</li>
                <li>• Conflict resolution</li>
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
              to="/music-production.mixing"
              className="group bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <BeakerIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  Mixing
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Learn how to mix your compositions with professional audio processing and balance techniques.
              </p>
            </Link>

            <Link 
              to="/music-production.mastering"
              className="group bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 transition-colors"
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                  <SparklesIcon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400">
                  Mastering
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Discover the final steps to prepare your music for distribution with mastering techniques.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
} 