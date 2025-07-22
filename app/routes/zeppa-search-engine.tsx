import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { 
  MagnifyingGlassIcon, 
  CpuChipIcon, 

  CodeBracketIcon,
  GlobeAltIcon,
  ChartBarIcon,
  CogIcon,
  UserGroupIcon,
  DocumentTextIcon,
  BeakerIcon,
  SparklesIcon,
  ServerIcon,
  ShieldCheckIcon,
  RocketLaunchIcon
} from "@heroicons/react/24/outline";

export const meta: MetaFunction = () => {
  return [
    { title: "Zeppa Search Engine - Ketivee AI Documentation" },
    { name: "description", content: "Learn about Zeppa Search Engine architecture, data handling, and how to contribute to development" },
  ];
};

export default function ZeppaSearchEnginePage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
          <Link to="/" className="hover:text-gray-700 dark:hover:text-gray-300">Home</Link>
          <span>/</span>
          <span className="text-gray-900 dark:text-white">Zeppa Search Engine</span>
        </nav>
        
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
            <MagnifyingGlassIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Zeppa Search Engine</h1>
        </div>
        
        <p className="text-lg text-gray-600 dark:text-gray-300">
          A high-performance, open-source search engine with C++ integration, real-time crawling, and AI-powered relevance scoring.
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
              Zeppa Search Engine is a modern, scalable search solution that combines the power of C++ for performance-critical operations 
              with Node.js for rapid development and deployment. Built with real-time crawling, semantic analysis, and machine learning 
              capabilities, it provides fast, relevant search results across web content, documents, and structured data.
            </p>
            
            <div className="grid md:grid-cols-4 gap-4 mt-6">
              <div className="flex items-center space-x-3">
                <CpuChipIcon className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-medium">C++ Performance</span>
              </div>
              <div className="flex items-center space-x-3">
                {/* <ServerStackIcon className="w-5 h-5 text-green-500" /> */}
                <span className="text-sm font-medium">Real-time Indexing</span>
              </div>
              <div className="flex items-center space-x-3">
                <SparklesIcon className="w-5 h-5 text-purple-500" />
                <span className="text-sm font-medium">AI Relevance</span>
              </div>
              <div className="flex items-center space-x-3">
                <GlobeAltIcon className="w-5 h-5 text-orange-500" />
                <span className="text-sm font-medium">Web Crawling</span>
              </div>
            </div>
          </div>
        </section>

        {/* Architecture Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            System Architecture
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                C++ Core Engine
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                High-performance components written in C++ handle computationally intensive tasks including 
                text processing, indexing, and search algorithms.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• Multi-threaded crawling engine</li>
                <li>• Advanced HTML parsing</li>
                <li>• Semantic analysis algorithms</li>
                <li>• Real-time relevance scoring</li>
                <li>• Connection pooling and HTTP/2 support</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Node.js API Gateway
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                RESTful API layer built with Express.js provides easy integration, authentication, 
                rate limiting, and analytics capabilities.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• RESTful API endpoints</li>
                <li>• JWT authentication</li>
                <li>• Rate limiting and security</li>
                <li>• Real-time analytics</li>
                <li>• Admin dashboard</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Data Processing Pipeline
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Intelligent data processing with query understanding, personalization, and 
                real-time index updates for optimal search quality.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• Query analysis and optimization</li>
                <li>• User personalization</li>
                <li>• Real-time index updates</li>
                <li>• Educational content detection</li>
                <li>• Performance metrics tracking</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Advanced Features
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Cutting-edge features including image search, voice search, health monitoring, 
                and configuration management for enterprise deployment.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• Image and voice search</li>
                <li>• System health monitoring</li>
                <li>• Configuration management</li>
                <li>• Analytics and reporting</li>
                <li>• Docker containerization</li>
              </ul>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            How Zeppa Search Engine Works
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Web Crawling & Discovery</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Multi-threaded crawlers discover and fetch web pages, respecting robots.txt and implementing 
                    intelligent rate limiting. The system uses advanced HTML parsing to extract meaningful content 
                    while filtering out navigation, ads, and other non-essential elements.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                  <span className="text-green-600 dark:text-green-400 font-semibold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Content Processing & Analysis</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Raw content undergoes semantic analysis, keyword extraction, and relevance scoring. 
                    The system identifies educational content, detects language, and applies machine learning 
                    algorithms to understand context and meaning.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 dark:text-purple-400 font-semibold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Indexing & Storage</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Processed content is indexed using optimized data structures for fast retrieval. 
                    The system maintains multiple indexes for different content types and implements 
                    real-time updates to keep search results current.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 dark:text-orange-400 font-semibold text-sm">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Query Processing & Results</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    User queries are analyzed for intent, expanded with synonyms, and matched against 
                    indexed content. Results are ranked using multiple factors including relevance, 
                    freshness, and user personalization preferences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Data Handling Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Data Handling & Privacy
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Data Collection
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The search engine collects and processes web content through ethical crawling practices, 
                respecting website policies and implementing responsible data handling.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• Respects robots.txt directives</li>
                <li>• Implements rate limiting</li>
                <li>• Stores only essential content</li>
                <li>• Maintains data freshness</li>
                <li>• Provides opt-out mechanisms</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Privacy & Security
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                User privacy is protected through anonymized search queries, encrypted data storage, 
                and transparent data handling practices.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• Anonymized user data</li>
                <li>• Encrypted data storage</li>
                <li>• GDPR compliance ready</li>
                <li>• Secure API endpoints</li>
                <li>• Regular security audits</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Data Processing
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Advanced algorithms process and analyze content to extract meaningful information 
                while maintaining data quality and relevance.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• Natural language processing</li>
                <li>• Content deduplication</li>
                <li>• Quality scoring</li>
                <li>• Real-time updates</li>
                <li>• Performance optimization</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Storage & Performance
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Optimized storage systems ensure fast query response times while maintaining 
                data integrity and scalability.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• In-memory caching</li>
                <li>• Compressed storage</li>
                <li>• Distributed indexing</li>
                <li>• Backup and recovery</li>
                <li>• Horizontal scaling</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technology Stack Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Technology Stack
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Backend Technologies
              </h3>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• C++17/20 for core engine</li>
                <li>• Node.js & Express.js for API</li>
                <li>• MongoDB for data storage</li>
                <li>• Redis for caching</li>
                <li>• Elasticsearch for indexing</li>
                <li>• Docker for containerization</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Libraries & Frameworks
              </h3>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• nlohmann/json for JSON handling</li>
                <li>• cURL for HTTP requests</li>
                <li>• Boost libraries</li>
                <li>• OpenSSL for encryption</li>
                <li>• Cheerio for HTML parsing</li>
                <li>• Fuse.js for fuzzy search</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Development Tools
              </h3>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• CMake for C++ builds</li>
                <li>• npm/yarn for Node.js</li>
                <li>• Git for version control</li>
                <li>• ESLint for code quality</li>
                <li>• Jest for testing</li>
                <li>• GitHub Actions for CI/CD</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contributing Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Contributing to Development
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Zeppa Search Engine is an open-source project that welcomes contributions from developers, 
              researchers, and enthusiasts worldwide. Whether you're interested in improving performance, 
              adding new features, or fixing bugs, there are many ways to contribute.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Getting Started
                </h3>
                <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                  <li>• Fork the repository on GitHub</li>
                  <li>• Set up your development environment</li>
                  <li>• Read the contribution guidelines</li>
                  <li>• Join our community discussions</li>
                  <li>• Start with beginner-friendly issues</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Areas for Contribution
                </h3>
                <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                  <li>• C++ core engine optimization</li>
                  <li>• API endpoint development</li>
                  <li>• Frontend interface improvements</li>
                  <li>• Documentation and tutorials</li>
                  <li>• Testing and quality assurance</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Development Setup</h4>
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                <code className="text-sm text-gray-800 dark:text-gray-200">
                  # Clone the repository<br/>
                  git clone https://github.com/ketivee/zeppa-search-engine.git<br/>
                  cd zeppa-search-engine<br/><br/>
                  # Install dependencies<br/>
                  npm install<br/><br/>
                  # Build C++ components<br/>
                  npm run build-cpp<br/><br/>
                  # Start development server<br/>
                  npm run dev
                </code>
              </div>
            </div>
          </div>
        </section>

        {/* Performance & Scalability */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Performance & Scalability
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Performance Metrics
              </h3>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• Sub-100ms query response times</li>
                <li>• 10,000+ concurrent users supported</li>
                <li>• 99.9% uptime SLA</li>
                <li>• Real-time index updates</li>
                <li>• Efficient memory usage</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Scalability Features
              </h3>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• Horizontal scaling support</li>
                <li>• Load balancing capabilities</li>
                <li>• Distributed crawling</li>
                <li>• Auto-scaling configurations</li>
                <li>• Cloud deployment ready</li>
              </ul>
            </div>
          </div>
        </section>

        {/* API Documentation */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            API Integration
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Integrate Zeppa Search Engine into your applications with our comprehensive REST API 
              that provides access to all search capabilities.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Search Endpoints
                </h3>
                <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                  <li>• POST /api/search - Basic search</li>
                  <li>• POST /api/search/advanced - Advanced search</li>
                  <li>• GET /api/search/suggestions - Auto-complete</li>
                  <li>• POST /api/search/image - Image search</li>
                  <li>• POST /api/search/voice - Voice search</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Management Endpoints
                </h3>
                <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                  <li>• GET /api/admin/status - System status</li>
                  <li>• POST /api/admin/crawl - Start crawling</li>
                  <li>• GET /api/admin/analytics - Usage analytics</li>
                  <li>• POST /api/admin/config - Update configuration</li>
                  <li>• GET /api/admin/health - Health monitoring</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Quick Start Example</h4>
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                <code className="text-sm text-gray-800 dark:text-gray-200">
{`
// Search for content
const response = await fetch('https://api.zeppa.com/search', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    query: 'artificial intelligence',
    limit: 10,
    filters: { type: 'educational' }
  })
});
const results = await response.json();
`}
                </code>
              </div>
            </div>
          </div>
        </section>

        {/* Community & Support */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Community & Support
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Get Involved
              </h3>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• <a href="https://github.com/ketivee/zeppa-search-engine" className="text-blue-600 hover:underline">GitHub Repository</a></li>
                <li>• <a href="https://discord.gg/ketivee" className="text-blue-600 hover:underline">Discord Community</a></li>
                <li>• <a href="https://forum.ketivee.com" className="text-blue-600 hover:underline">Community Forum</a></li>
                <li>• <a href="https://docs.ketivee.com" className="text-blue-600 hover:underline">Documentation</a></li>
                <li>• <a href="mailto:dev@ketivee.com" className="text-blue-600 hover:underline">Developer Email</a></li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Support Channels
              </h3>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• GitHub Issues for bug reports</li>
                <li>• GitHub Discussions for questions</li>
                <li>• Stack Overflow with #zeppa-search tag</li>
                <li>• Email support for enterprise users</li>
                <li>• Live chat during business hours</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Development Roadmap
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Short Term (Q1 2024)
                </h3>
                <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                  <li>• Enhanced C++ performance</li>
                  <li>• Improved API documentation</li>
                  <li>• Better error handling</li>
                  <li>• Additional search filters</li>
                  <li>• Mobile app SDK</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Medium Term (Q2-Q3 2024)
                </h3>
                <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                  <li>• Machine learning integration</li>
                  <li>• Multi-language support</li>
                  <li>• Advanced analytics dashboard</li>
                  <li>• Cloud deployment options</li>
                  <li>• Enterprise features</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Long Term (Q4 2024+)
                </h3>
                <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                  <li>• AI-powered content generation</li>
                  <li>• Blockchain integration</li>
                  <li>• Global CDN deployment</li>
                  <li>• Advanced personalization</li>
                  <li>• Research partnerships</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-blue-100 mb-6">
              Join the Zeppa Search Engine community and help us build the future of search technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://github.com/ketivee/zeppa-search-engine"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <CodeBracketIcon className="w-5 h-5" />
                <span>View on GitHub</span>
              </a>
              <a 
                href="https://docs.ketivee.com/api-docs"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 transition-colors"
              >
                <DocumentTextIcon className="w-5 h-5" />
                <span>API Documentation</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 