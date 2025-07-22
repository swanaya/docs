import { MetaFunction, Outlet, Link } from "@remix-run/react";



import { 
  QuestionMarkCircleIcon, 
  ComputerDesktopIcon, 
  CogIcon,
  SparklesIcon,
  BeakerIcon,
  WrenchScrewdriverIcon,
  DocumentTextIcon,
  PlayIcon
} from "@heroicons/react/24/outline";

export const meta: MetaFunction = () => {
  return [
    { title: "Help & Tutorials - Ketivee AI Documentation" },
    { name: "description", content: "Find tutorials and installation guides for various applications and tools" },
  ];
};

// Tutorial data structure
interface Tutorial {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  estimatedTime: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  href: string;
  tags: string[];
}

const tutorials: Tutorial[] = [
  {
    id: 'ubuntu-usb-install',
    title: 'Install Ubuntu via USB',
    description: 'Create a bootable USB drive and install Ubuntu on your hardware',
    category: 'Operating Systems',
    difficulty: 'Intermediate',
    estimatedTime: '30-45 minutes',
    icon: ComputerDesktopIcon,
    color: 'orange',
    href: '/help/ubuntu-usb-install',
    tags: ['Ubuntu', 'USB', 'Installation', 'Linux']
  },
  {
    id: 'docker-setup',
    title: 'Docker Installation & Setup',
    description: 'Install Docker and configure it for containerized applications',
    category: 'Development Tools',
    difficulty: 'Beginner',
    estimatedTime: '15-20 minutes',
    icon: CogIcon,
    color: 'blue',
    href: '/help/docker-setup',
    tags: ['Docker', 'Containers', 'DevOps']
  },
  {
    id: 'nodejs-install',
    title: 'Node.js Installation Guide',
    description: 'Install Node.js and npm for JavaScript development',
    category: 'Development Tools',
    difficulty: 'Beginner',
    estimatedTime: '10-15 minutes',
    icon: BeakerIcon,
    color: 'green',
    href: '/help/nodejs-install',
    tags: ['Node.js', 'JavaScript', 'npm']
  },
  {
    id: 'git-setup',
    title: 'Git Configuration & Setup',
    description: 'Install Git and configure it for version control',
    category: 'Development Tools',
    difficulty: 'Beginner',
    estimatedTime: '10-15 minutes',
    icon: DocumentTextIcon,
    color: 'purple',
    href: '/help/git-setup',
    tags: ['Git', 'Version Control', 'GitHub']
  },
  {
    id: 'python-environment',
    title: 'Python Environment Setup',
    description: 'Install Python and set up virtual environments',
    category: 'Development Tools',
    difficulty: 'Beginner',
    estimatedTime: '20-25 minutes',
    icon: SparklesIcon,
    color: 'yellow',
    href: '/help/python-environment',
    tags: ['Python', 'Virtual Environment', 'pip']
  },
  {
    id: 'vscode-setup',
    title: 'VS Code Installation & Extensions',
    description: 'Install Visual Studio Code and essential extensions',
    category: 'Development Tools',
    difficulty: 'Beginner',
    estimatedTime: '15-20 minutes',
    icon: WrenchScrewdriverIcon,
    color: 'indigo',
    href: '/help/vscode-setup',
    tags: ['VS Code', 'Editor', 'Extensions']
  }
];

const categories = ['All', 'Operating Systems', 'Development Tools', 'Applications', 'Troubleshooting'];

export default function HelpPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
          <Link to="/" className="hover:text-gray-700 dark:hover:text-gray-300">Home</Link>
          <span>/</span>
          <span className="text-gray-900 dark:text-white">Help & Tutorials</span>
        </nav>
        
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
            <QuestionMarkCircleIcon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Help & Tutorials</h1>
        </div>
        
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Find step-by-step tutorials and installation guides for various applications and tools.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Search tutorials..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <QuestionMarkCircleIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
          <div className="flex gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 text-sm font-medium rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Tutorial */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Featured Tutorial
        </h2>
        <div className="bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg p-6 text-white">
          <div className="flex items-center space-x-3 mb-3">
            <ComputerDesktopIcon className="w-8 h-8" />
            <h3 className="text-xl font-semibold">Install Ubuntu via USB</h3>
          </div>
          <p className="text-purple-100 mb-4">
            Learn how to create a bootable USB drive and install Ubuntu on your hardware. 
            This comprehensive guide covers everything from downloading the ISO to completing the installation.
          </p>
          <div className="flex items-center space-x-4 text-sm text-purple-100">
            <span>⏱️ 30-45 minutes</span>
            <span>📊 Intermediate</span>
            <span>🏷️ Ubuntu, USB, Installation</span>
          </div>
          <Link 
            to="/help/ubuntu-usb-install"
            className="inline-flex items-center space-x-2 mt-4 px-4 py-2 bg-white text-purple-600 rounded-lg font-medium hover:bg-purple-50 transition-colors"
          >
            <PlayIcon className="w-4 h-4" />
            <span>Start Tutorial</span>
          </Link>
        </div>
      </section>

      {/* Tutorial Grid */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          All Tutorials
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutorials.map((tutorial) => (
            <div
              key={tutorial.id}
              className="group block bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-200 hover:shadow-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <div className="p-6 w-full h-full">
                <div className="flex items-center space-x-3 mb-3">
                  <div className={`p-2 rounded-lg ${
                    tutorial.color === 'orange' ? 'bg-orange-100 dark:bg-orange-900' :
                    tutorial.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900' :
                    tutorial.color === 'green' ? 'bg-green-100 dark:bg-green-900' :
                    tutorial.color === 'purple' ? 'bg-purple-100 dark:bg-purple-900' :
                    tutorial.color === 'yellow' ? 'bg-yellow-100 dark:bg-yellow-900' :
                    tutorial.color === 'indigo' ? 'bg-indigo-100 dark:bg-indigo-900' :
                    'bg-gray-100 dark:bg-gray-900'
                  }`}>
                    <tutorial.icon className={`w-5 h-5 ${
                      tutorial.color === 'orange' ? 'text-orange-600 dark:text-orange-400' :
                      tutorial.color === 'blue' ? 'text-blue-600 dark:text-blue-400' :
                      tutorial.color === 'green' ? 'text-green-600 dark:text-green-400' :
                      tutorial.color === 'purple' ? 'text-purple-600 dark:text-purple-400' :
                      tutorial.color === 'yellow' ? 'text-yellow-600 dark:text-yellow-400' :
                      tutorial.color === 'indigo' ? 'text-indigo-600 dark:text-indigo-400' :
                      'text-gray-600 dark:text-gray-400'
                    }`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400">
                      {tutorial.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {tutorial.category}
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  {tutorial.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      tutorial.difficulty === 'Beginner' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                      tutorial.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                      'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                    }`}>
                      {tutorial.difficulty}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      ⏱️ {tutorial.estimatedTime}
                    </span>
                  </div>
                  <div className="text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300">
                    <PlayIcon className="w-4 h-4" />
                  </div>
                </div>
                
                <div className="mt-3">
                  <button 
                    className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      console.log('Button clicked for:', tutorial.href);
                      window.location.href = tutorial.href;
                    }}
                  >
                    View Tutorial
                  </button>
                </div>
                
                <div className="mt-3 flex flex-wrap gap-1">
                  {tutorial.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                  {tutorial.tags.length > 3 && (
                    <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded">
                      +{tutorial.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Help Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Quick Help
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <DocumentTextIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Documentation</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              Browse our comprehensive documentation for detailed information about all features and capabilities.
            </p>
            <Link 
              to="/api-docs"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium"
            >
              View Documentation →
            </Link>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                <QuestionMarkCircleIcon className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">FAQ</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              Find answers to frequently asked questions and common troubleshooting issues.
            </p>
            <Link 
              to="/faq"
              className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 text-sm font-medium"
            >
              Browse FAQ →
            </Link>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                <WrenchScrewdriverIcon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Support</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              Get help from our support team or join the community for assistance.
            </p>
            <Link 
              to="/community"
              className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 text-sm font-medium"
            >
              Get Support →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 