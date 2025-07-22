import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { 
  PlayIcon, 
  CogIcon, 
  FilmIcon,
  SparklesIcon 
} from "@heroicons/react/24/outline";

export const meta: MetaFunction = () => {
  return [
    { title: "3D Animation - Ketivee AI Documentation" },
    { name: "description", content: "Learn about 3D animation techniques and workflows in Ketivee AI" },
  ];
};

export default function AnimationPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
          <Link to="/" className="hover:text-gray-700 dark:hover:text-gray-300">Home</Link>
          <span>/</span>
          <Link to="/#3d-production" className="hover:text-gray-700 dark:hover:text-gray-300">3D Production</Link>
          <span>/</span>
          <span className="text-gray-900 dark:text-white">Animation</span>
        </nav>
        
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
            <PlayIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">3D Animation</h1>
        </div>
        
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Bring your 3D models to life with advanced animation tools and AI-powered motion generation.
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
              Our animation system provides comprehensive tools for creating compelling motion, 
              from simple keyframe animation to complex character rigging and motion capture. 
              AI-powered features help streamline your workflow and achieve professional results.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="flex items-center space-x-3">
                <SparklesIcon className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-medium">AI Motion Generation</span>
              </div>
              <div className="flex items-center space-x-3">
                <FilmIcon className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium">Real-time Preview</span>
              </div>
              <div className="flex items-center space-x-3">
                <CogIcon className="w-5 h-5 text-purple-500" />
                <span className="text-sm font-medium">Advanced Rigging</span>
              </div>
            </div>
          </div>
        </section>

        {/* Animation Types Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Animation Types
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Keyframe Animation
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Traditional keyframe-based animation with advanced interpolation and easing curves. 
                Perfect for precise control over timing and motion.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• Bezier curve interpolation</li>
                <li>• Custom easing functions</li>
                <li>• Graph editor with visual curves</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Procedural Animation
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                AI-driven procedural animation that generates natural motion based on physics 
                simulations and behavioral algorithms.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• Physics-based cloth simulation</li>
                <li>• Crowd behavior algorithms</li>
                <li>• Environmental interaction</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Motion Capture
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Import and process motion capture data with automatic retargeting and 
                cleanup tools for realistic character animation.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• BVH and FBX import</li>
                <li>• Automatic retargeting</li>
                <li>• Noise reduction and smoothing</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Character Rigging
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Advanced character rigging with IK/FK systems, muscle simulation, and 
                facial animation controls for expressive characters.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• IK/FK switching</li>
                <li>• Muscle and fat simulation</li>
                <li>• Facial blend shapes</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Workflow Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Animation Workflow
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Planning & Storyboarding</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Plan your animation sequence with storyboards, timing charts, and reference videos. 
                    Determine key poses and timing for your animation.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                  <span className="text-green-600 dark:text-green-400 font-semibold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Rigging Setup</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Set up character rigs with proper bone hierarchy, constraints, and control systems. 
                    Test the rig with basic poses to ensure proper deformation.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 dark:text-purple-400 font-semibold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Blocking</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Create key poses at major timing points. Focus on overall motion and timing 
                    before adding detail. Use stepped interpolation for clear pose-to-pose animation.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 dark:text-orange-400 font-semibold text-sm">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Splining & Polish</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Convert stepped keys to smooth interpolation and add secondary motion, 
                    overlap, and fine details. Polish timing and add subtle movements.
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
                AI Motion Synthesis
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Generate natural motion using AI algorithms that understand human movement patterns 
                and can create realistic animations from simple inputs.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• Natural walking cycles</li>
                <li>• Gesture and expression generation</li>
                <li>• Context-aware motion</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Performance Capture
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Real-time performance capture using webcam or depth sensors for live animation 
                and virtual production workflows.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• Webcam-based tracking</li>
                <li>• Depth sensor support</li>
                <li>• Real-time streaming</li>
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
              to="/3d-production.rendering"
              className="group bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 transition-colors"
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                  <SparklesIcon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400">
                  Rendering
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Learn how to render your animated sequences with advanced lighting and material systems.
              </p>
            </Link>

            <Link 
              to="/3d-production.modeling"
              className="group bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <CogIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  Modeling
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Create the 3D models that will serve as the foundation for your animations.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
} 