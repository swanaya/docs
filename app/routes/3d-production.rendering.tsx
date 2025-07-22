import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { 
  SparklesIcon, 
  SunIcon, 
  CameraIcon,
  BeakerIcon 
} from "@heroicons/react/24/outline";

export const meta: MetaFunction = () => {
  return [
    { title: "3D Rendering - Ketivee AI Documentation" },
    { name: "description", content: "Learn about 3D rendering techniques and workflows in Ketivee AI" },
  ];
};

export default function RenderingPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
          <Link to="/" className="hover:text-gray-700 dark:hover:text-gray-300">Home</Link>
          <span>/</span>
          <Link to="/#3d-production" className="hover:text-gray-700 dark:hover:text-gray-300">3D Production</Link>
          <span>/</span>
          <span className="text-gray-900 dark:text-white">Rendering</span>
        </nav>
        
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
            <SparklesIcon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">3D Rendering</h1>
        </div>
        
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Create stunning final images and animations with advanced rendering engines and AI-powered optimization.
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
              Our rendering system combines multiple rendering engines with AI-powered optimization 
              to deliver photorealistic results efficiently. From real-time previews to final 
              production renders, we provide the tools you need for any project.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="flex items-center space-x-3">
                <SunIcon className="w-5 h-5 text-yellow-500" />
                <span className="text-sm font-medium">Global Illumination</span>
              </div>
              <div className="flex items-center space-x-3">
                <CameraIcon className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-medium">Real-time Preview</span>
              </div>
              <div className="flex items-center space-x-3">
                <BeakerIcon className="w-5 h-5 text-purple-500" />
                <span className="text-sm font-medium">AI Denoising</span>
              </div>
            </div>
          </div>
        </section>

        {/* Rendering Engines Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Rendering Engines
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Path Tracing
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Physically accurate rendering engine that simulates real-world light behavior 
                for photorealistic results with global illumination and caustics.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• Global illumination</li>
                <li>• Caustics and reflections</li>
                <li>• Subsurface scattering</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Real-time Engine
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Optimized for interactive applications with real-time ray tracing and 
                AI-accelerated lighting calculations for immediate feedback.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• Real-time ray tracing</li>
                <li>• Dynamic lighting</li>
                <li>• Interactive materials</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Hybrid Renderer
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Combines rasterization and ray tracing for optimal performance and quality, 
                perfect for architectural visualization and product design.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• Hybrid rendering</li>
                <li>• Fast previews</li>
                <li>• Production quality</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                AI-Enhanced
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Machine learning algorithms that optimize rendering settings, denoise images, 
                and predict lighting for faster, cleaner results.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• AI denoising</li>
                <li>• Smart sampling</li>
                <li>• Auto-optimization</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Lighting Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Lighting Systems
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Natural Lighting
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Simulate natural light sources including sun, sky, and environmental lighting 
                  with accurate color temperature and atmospheric effects.
                </p>
                <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                  <li>• HDRI environment maps</li>
                  <li>• Sun and sky simulation</li>
                  <li>• Atmospheric scattering</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Artificial Lighting
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Create studio lighting setups with area lights, spotlights, and IES profiles 
                  for professional product and architectural photography.
                </p>
                <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                  <li>• Area lights and softboxes</li>
                  <li>• IES light profiles</li>
                  <li>• Color temperature control</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Materials Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Material System
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                PBR Materials
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Physically Based Rendering materials with accurate surface properties including 
                roughness, metallic, and subsurface scattering.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• Albedo, roughness, metallic</li>
                <li>• Normal and displacement maps</li>
                <li>• Subsurface scattering</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Procedural Materials
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Generate complex materials procedurally using noise patterns, mathematical functions, 
                and AI-generated textures for infinite variety.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• Noise-based generation</li>
                <li>• Mathematical patterns</li>
                <li>• AI texture synthesis</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Workflow Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Rendering Workflow
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Scene Setup</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Configure cameras, lighting, and materials. Set up the basic scene composition 
                    and determine the final output requirements.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                  <span className="text-green-600 dark:text-green-400 font-semibold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Lighting Setup</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Establish key, fill, and rim lighting. Use HDRI environments for natural lighting 
                    or create studio setups for controlled lighting.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 dark:text-purple-400 font-semibold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Material Refinement</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Fine-tune material properties, adjust textures, and ensure proper PBR workflow. 
                    Test materials under different lighting conditions.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 dark:text-orange-400 font-semibold text-sm">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Final Render</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Configure render settings, set up passes for compositing, and execute the final render. 
                    Use AI denoising for cleaner results.
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
              to="/3d-production.modeling"
              className="group bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <BeakerIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  Modeling
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Create the 3D models that will be rendered with these advanced lighting and material systems.
              </p>
            </Link>

            <Link 
              to="/3d-production.animation"
              className="group bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-600 transition-colors"
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                  <CameraIcon className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400">
                  Animation
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Learn how to render animated sequences with consistent lighting and material quality.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
} 