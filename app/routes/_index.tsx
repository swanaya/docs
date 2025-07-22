import { Link } from "@remix-run/react";
import { 
  RocketLaunchIcon, 
  CodeBracketIcon, 
  BookOpenIcon, 
  CpuChipIcon,
  ArrowRightIcon,
  StarIcon,
  UsersIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  UserIcon,
  BuildingOfficeIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';

export default function Index() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
            <img src="/assets/docslogo.svg" alt="Ketivee Docs" className="w-30 h-16" />
              <h1 className="text-5xl font-bold">Ketivee AI Documentation</h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Complete documentation for Ketivee AI ecosystem. Learn how to integrate RipkaAI, AAdi AI, Yug AI, and other models into your applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/dashboard" 
                className="bg-white text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
              >
                Get Started
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link 
                to="/api" 
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors"
              >
                View API Reference
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Quick Start</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Get up and running with Ketivee AI in minutes</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                <RocketLaunchIcon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">1. Install SDK</h3>
              <div className="bg-gray-100 dark:bg-gray-700 rounded p-3 font-mono text-sm">
                npm install @ketivee/ai-sdk
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <CodeBracketIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">2. Initialize Client</h3>
              <div className="bg-gray-100 dark:bg-gray-700 rounded p-3 font-mono text-sm">
                const client = new KetiveeAI(API_KEY);
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                <BookOpenIcon className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">3. Make Your First Call</h3>
              <div className="bg-gray-100 dark:bg-gray-700 rounded p-3 font-mono text-sm">
                const response = await client.chat.complete({ /* params */ });
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Models Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">AI Models</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Explore our comprehensive suite of AI models</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* RipkaAI */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                  <CpuChipIcon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold">RipkaAI</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Advanced natural language processing for conversational AI, code generation, and complex reasoning.
              </p>
              <Link 
                to="/aadi" 
                className="text-purple-600 dark:text-purple-400 hover:underline flex items-center gap-1"
              >
                Learn more <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>

            {/* AAdi AI */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <img src="/assets/AAdi AI.svg" alt="AAdi AI" className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold">AAdi AI</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                3D image and video generation with advanced texture mapping and realistic visual output.
              </p>
              <Link 
                to="/aadi" 
                className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
              >
                Learn more <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>

            {/* Yug AI */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                  <img src="/assets/Yugbtn.svg" alt="Yug AI" className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold">Yug AI</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                3D modeling and environment design with Blender integration and real-time texture mapping.
              </p>
              <Link 
                to="/yug" 
                className="text-green-600 dark:text-green-400 hover:underline flex items-center gap-1"
              >
                Learn more <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>

            {/* KetMail Mobile */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center">
                  <DevicePhoneMobileIcon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold">KetMail Mobile</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Professional email service mobile app with Auth2.0 integration and enterprise-grade security.
              </p>
              <Link 
                to="/ketmail-mobile" 
                className="text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
              >
                Learn more <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Zeppa Search Engine Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900 dark:to-indigo-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Zeppa Search Engine</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">High-performance, open-source search engine with C++ integration</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg border border-gray-200 dark:border-gray-700 mb-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Advanced Search Technology</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Zeppa Search Engine combines the power of C++ for performance-critical operations with Node.js for rapid development. 
                  Features real-time crawling, semantic analysis, AI-powered relevance scoring, and enterprise-grade scalability.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">C++ Core Engine</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Real-time Indexing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">AI Relevance</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Web Crawling</span>
                  </div>
                </div>
                <Link 
                  to="/zeppa-search-engine" 
                  className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowRightIcon className="w-5 h-5" />
                </Link>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MagnifyingGlassIcon className="w-16 h-16 text-white" />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Open Source • High Performance • Scalable</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KetMail Documentation Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">KetMail Documentation</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Complete guides for KetMail email service</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link 
              to="/ketmail-user-guide" 
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow group border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                  <UserIcon className="w-5 h-5 text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-semibold">User Guide</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Complete guide for KetMail email users including terms, conditions, and troubleshooting.
              </p>
              <div className="flex items-center text-green-600 dark:text-green-400 font-semibold">
                Learn More
                <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link 
              to="/ketmail-b2b" 
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow group border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                  <BuildingOfficeIcon className="w-5 h-5 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-semibold">B2B Solutions</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Enterprise-grade email infrastructure for businesses with API integration and management tools.
              </p>
              <div className="flex items-center text-purple-600 dark:text-purple-400 font-semibold">
                Learn More
                <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link 
              to="/ketmail-mobile" 
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow group border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <DevicePhoneMobileIcon className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-semibold">Mobile App</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Complete guide for the KetMail mobile application, including setup, features, and troubleshooting.
              </p>
              <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold">
                Learn More
                <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Account Management Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900 dark:to-indigo-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Account Management</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Comprehensive guides for managing your Ketivee account</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <UsersIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold">Account Management</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Learn how to manage your profile, security settings, notifications, and connected devices.
              </p>
              <Link 
                to="/account-management" 
                className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
              >
                Learn more <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                  <StarIcon className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold">Security Best Practices</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Essential security guidelines to protect your account and personal information.
              </p>
              <Link 
                to="/security-best-practices" 
                className="text-green-600 dark:text-green-400 hover:underline flex items-center gap-1"
              >
                Learn more <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
                  <GlobeAltIcon className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold">Troubleshooting</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Step-by-step solutions for common account issues and recovery procedures.
              </p>
              <Link 
                to="/account-troubleshooting" 
                className="text-orange-600 dark:text-orange-400 hover:underline flex items-center gap-1"
              >
                Learn more <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Why Choose Ketivee AI?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Built for developers, by developers</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <StarIcon className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Open Source</h3>
              <p className="text-gray-600 dark:text-gray-400">Free to use and modify without restrictions</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <UsersIcon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Community Driven</h3>
              <p className="text-gray-600 dark:text-gray-400">Active community contributing to development</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <GlobeAltIcon className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Multi-Industry</h3>
              <p className="text-gray-600 dark:text-gray-400">Solutions for gaming, healthcare, education, and more</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <CpuChipIcon className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Advanced AI</h3>
              <p className="text-gray-600 dark:text-gray-400">State-of-the-art AI models and algorithms</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-purple-200 mb-8">
            Join thousands of developers building with Ketivee AI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/dashboard" 
              className="bg-white text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Building
            </Link>
            <Link 
              to="/api" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors"
            >
              View Documentation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
