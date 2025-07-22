import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { 
  CubeIcon, 
  ComputerDesktopIcon, 
  BeakerIcon,
  SparklesIcon 
} from "@heroicons/react/24/outline";

export const meta: MetaFunction = () => {
  return [
    { title: "3D Modeling - Ketivee AI Documentation" },
    { name: "description", content: "Learn about 3D modeling capabilities and workflows in Ketivee AI" },
  ];
};

export default function ModelingPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
          <Link to="/" className="hover:text-gray-700 dark:hover:text-gray-300">Home</Link>
          <span>/</span>
          <Link to="/#3d-production" className="hover:text-gray-700 dark:hover:text-gray-300">3D Production</Link>
          <span>/</span>
          <span className="text-gray-900 dark:text-white">3D Modeling</span>
        </nav>
        
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
            <CubeIcon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">3D Modeling</h1>
        </div>
        
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Create stunning 3D models with AI-powered tools and advanced modeling techniques.
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
              Our 3D modeling platform combines traditional modeling techniques with cutting-edge AI to 
              streamline your creative workflow. Whether you're creating characters, environments, or 
              architectural visualizations, our tools provide the precision and efficiency you need.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="flex items-center space-x-3">
                <SparklesIcon className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-medium">AI-Assisted Modeling</span>
              </div>
              <div className="flex items-center space-x-3">
                <ComputerDesktopIcon className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium">Real-time Preview</span>
              </div>
              <div className="flex items-center space-x-3">
                <BeakerIcon className="w-5 h-5 text-purple-500" />
                <span className="text-sm font-medium">Advanced Materials</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Procedural Modeling
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Generate complex geometries using mathematical algorithms and AI-driven patterns. 
                Create organic shapes, architectural elements, and intricate details automatically.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• Parametric modeling workflows</li>
                <li>• AI-generated topology optimization</li>
                <li>• Automatic UV unwrapping</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Sculpting Tools
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Intuitive digital sculpting with pressure-sensitive brushes and AI-enhanced 
                detail preservation. Perfect for character modeling and organic shapes.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• Multi-resolution sculpting</li>
                <li>• Dynamic tessellation</li>
                <li>• Symmetry and mirroring</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Hard Surface Modeling
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Precision modeling tools for mechanical parts, vehicles, and architectural elements. 
                Advanced boolean operations and edge flow optimization.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• Boolean operations</li>
                <li>• Edge loop modeling</li>
                <li>• Subdivision surface support</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Retopology
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                AI-powered retopology tools that automatically generate clean, animation-ready 
                topology from high-resolution meshes or sculpted models.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• Automatic edge flow detection</li>
                <li>• Quad-dominant topology</li>
                <li>• Animation-friendly edge loops</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Workflow Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Modeling Workflow
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Concept & Planning</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Start with sketches, reference images, or AI-generated concepts. Plan your topology 
                    and determine the level of detail needed for your project.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                  <span className="text-green-600 dark:text-green-400 font-semibold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Blocking</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Create basic geometric shapes to establish proportions and overall form. 
                    Use primitive objects and simple operations to build the foundation.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 dark:text-purple-400 font-semibold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Detail Work</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Add fine details, textures, and surface variations. Use sculpting tools for organic 
                    details or hard surface modeling for mechanical elements.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 dark:text-orange-400 font-semibold text-sm">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Optimization</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Retopologize if needed, optimize polygon count, and prepare the model for 
                    texturing, rigging, or rendering. Ensure clean topology for animation.
                  </p>
                </div>
              </div>
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
              to="/3d-production.animation"
              className="group bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <CubeIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  Animation
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Learn how to bring your 3D models to life with keyframe animation, rigging, and motion capture.
              </p>
            </Link>

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
                Discover advanced rendering techniques, lighting setups, and material creation for stunning final images.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
} 