import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { 
  CpuChipIcon, 
  SparklesIcon, 
  BeakerIcon,
  CogIcon 
} from "@heroicons/react/24/outline";

export const meta: MetaFunction = () => {
  return [
    { title: "Ripka AI - Ketivee AI Documentation" },
    { name: "description", content: "Learn about Ripka AI model capabilities and applications in Ketivee AI" },
  ];
};

export default function RipkaAIPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
          <Link to="/" className="hover:text-gray-700 dark:hover:text-gray-300">Home</Link>
          <span>/</span>
          <Link to="/#ai-models" className="hover:text-gray-700 dark:hover:text-gray-300">AI Models</Link>
          <span>/</span>
          <span className="text-gray-900 dark:text-white">Ripka AI</span>
        </nav>
        
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
            <CpuChipIcon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Ripka AI</h1>
        </div>
        
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Advanced AI model specialized in creative content generation, problem-solving, and interactive experiences.
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
              Ripka AI is our most advanced creative intelligence model, designed to handle complex 
              multi-modal tasks including text generation, image creation, code development, and 
              interactive problem-solving. Built on cutting-edge transformer architecture with 
              specialized training for creative and technical applications.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="flex items-center space-x-3">
                <SparklesIcon className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-medium">Multi-modal Generation</span>
              </div>
              <div className="flex items-center space-x-3">
                <BeakerIcon className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium">Creative Problem Solving</span>
              </div>
              <div className="flex items-center space-x-3">
                <CogIcon className="w-5 h-5 text-purple-500" />
                <span className="text-sm font-medium">Interactive Learning</span>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Core Capabilities
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Creative Writing
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Generate compelling stories, articles, scripts, and creative content with 
                advanced narrative understanding and style adaptation capabilities.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• Novel and short story generation</li>
                <li>• Script and screenplay writing</li>
                <li>• Poetry and lyrical content</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Code Generation
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Write, debug, and optimize code in multiple programming languages with 
                understanding of best practices and modern development patterns.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• Multi-language support</li>
                <li>• Code review and optimization</li>
                <li>• Documentation generation</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Visual Content
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Create high-quality images, illustrations, and visual designs with 
                detailed control over style, composition, and artistic direction.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• Photorealistic image generation</li>
                <li>• Artistic style transfer</li>
                <li>• Design and illustration</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Problem Solving
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Analyze complex problems, develop solutions, and provide step-by-step 
                explanations for mathematical, logical, and analytical challenges.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• Mathematical problem solving</li>
                <li>• Logical reasoning</li>
                <li>• Strategic planning</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Technical Specifications
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Architecture
                </h3>
                <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                  <li>• Transformer-based architecture</li>
                  <li>• 175B+ parameters</li>
                  <li>• Multi-modal training</li>
                  <li>• Attention mechanisms</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Training Data
                </h3>
                <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                  <li>• Diverse text corpus</li>
                  <li>• Code repositories</li>
                  <li>• Visual datasets</li>
                  <li>• Creative content</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Use Cases
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Content Creation
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Generate marketing copy, blog posts, social media content, and creative 
                writing with consistent brand voice and engaging storytelling.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• Marketing and advertising</li>
                <li>• Content marketing</li>
                <li>• Creative writing</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Software Development
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Assist in coding projects, debugging, code review, and documentation 
                with understanding of modern development practices and frameworks.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• Application development</li>
                <li>• Code review and testing</li>
                <li>• Technical documentation</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Education & Learning
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Provide personalized tutoring, explain complex concepts, and create 
                educational content across various subjects and skill levels.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• Personalized tutoring</li>
                <li>• Concept explanation</li>
                <li>• Educational content</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Creative Design
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Generate visual designs, illustrations, and creative concepts for 
                branding, marketing, and artistic projects.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• Brand identity design</li>
                <li>• Marketing visuals</li>
                <li>• Artistic illustration</li>
              </ul>
            </div>
          </div>
        </section>

        {/* API Integration */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            API Integration
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Integrate Ripka AI into your applications with our comprehensive API that 
              provides access to all model capabilities with flexible configuration options.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  REST API
                </h3>
                <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                  <li>• HTTP/HTTPS endpoints</li>
                  <li>• JSON request/response</li>
                  <li>• Authentication via API keys</li>
                  <li>• Rate limiting and quotas</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  SDK Libraries
                </h3>
                <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                  <li>• Python SDK</li>
                  <li>• JavaScript/Node.js</li>
                  <li>• React components</li>
                  <li>• Mobile SDKs</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Related Models
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link 
              to="/aadi"
              className="group bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <CpuChipIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  AAdi AI
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Explore our conversational AI model specialized in natural language understanding and dialogue.
              </p>
            </Link>

            <Link 
              to="/yug"
              className="group bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-600 transition-colors"
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                  <SparklesIcon className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400">
                  Yug AI
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Discover our specialized model for data analysis, visualization, and business intelligence.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
} 