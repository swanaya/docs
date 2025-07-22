import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { 
  BeakerIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  ComputerDesktopIcon,
  CommandLineIcon,
  ArrowLeftIcon,
  PlayIcon,
  ClockIcon,
  UserIcon
} from "@heroicons/react/24/outline";

export const meta: MetaFunction = () => {
  return [
    { title: "Node.js Installation Guide - Ketivee AI Documentation" },
    { name: "description", content: "Learn how to install Node.js and npm for JavaScript development" },
  ];
};

export default function NodeJSInstallPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
        <Link to="/" className="hover:text-gray-700 dark:hover:text-gray-300">Home</Link>
        <span>/</span>
        <Link to="/help" className="hover:text-gray-700 dark:hover:text-gray-300">Help & Tutorials</Link>
        <span>/</span>
        <span className="text-gray-900 dark:text-white">Node.js Installation</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
            <BeakerIcon className="w-8 h-8 text-green-600 dark:text-green-400" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Node.js Installation Guide</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">Install Node.js and npm for JavaScript development</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center space-x-1">
            <ClockIcon className="w-4 h-4" />
            <span>10-15 minutes</span>
          </div>
          <div className="flex items-center space-x-1">
            <UserIcon className="w-4 h-4" />
            <span>Beginner</span>
          </div>
          <div className="flex items-center space-x-1">
            <ComputerDesktopIcon className="w-4 h-4" />
            <span>Cross-platform</span>
          </div>
        </div>
      </div>

      {/* Prerequisites */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Prerequisites</h2>
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <CheckCircleIcon className="w-6 h-6 text-green-600 dark:text-green-400 mt-0.5" />
            <div>
              <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">Before you begin:</h3>
              <ul className="space-y-2 text-green-800 dark:text-green-200">
                <li>• Administrator access to your system</li>
                <li>• Internet connection for downloading Node.js</li>
                <li>• At least 1GB of available disk space</li>
                <li>• Windows 10+, macOS 10.15+, or Linux</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Methods */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Installation Methods</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Recommended Method</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Download the official installer from nodejs.org for the easiest setup.</p>
            <div className="bg-green-100 dark:bg-green-900/20 rounded-lg p-3">
              <p className="text-green-800 dark:text-green-200 text-sm">✅ Easiest to install</p>
              <p className="text-green-800 dark:text-green-200 text-sm">✅ Includes npm</p>
              <p className="text-green-800 dark:text-green-200 text-sm">✅ Official support</p>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Package Managers</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Use your system's package manager for easier updates.</p>
            <div className="bg-blue-100 dark:bg-blue-900/20 rounded-lg p-3">
              <p className="text-blue-800 dark:text-blue-200 text-sm">🔄 Easy updates</p>
              <p className="text-blue-800 dark:text-blue-200 text-sm">📦 System integration</p>
              <p className="text-blue-800 dark:text-blue-200 text-sm">⚡ Faster installation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Steps */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Installation Steps</h2>
        
        {/* Windows Installation */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <ComputerDesktopIcon className="w-6 h-6 mr-2" />
            Windows Installation
          </h3>
          
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Step 1: Download Node.js</h4>
              <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>Visit the official Node.js website: <a href="https://nodejs.org" className="text-blue-600 dark:text-blue-400 hover:underline">nodejs.org</a></li>
                <li>Download the LTS (Long Term Support) version</li>
                <li>Choose the Windows Installer (.msi) for your system architecture (x64 recommended)</li>
              </ol>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Step 2: Install Node.js</h4>
              <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>Run the downloaded .msi installer as Administrator</li>
                <li>Follow the installation wizard</li>
                <li>Accept the default installation path</li>
                <li>Ensure "Add to PATH" is checked</li>
                <li>Complete the installation</li>
              </ol>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Step 3: Verify Installation</h4>
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-3">
                <code className="text-sm text-gray-800 dark:text-gray-200">
                  node --version<br/>
                  npm --version
                </code>
              </div>
              <p className="text-gray-600 dark:text-gray-300">You should see version numbers for both Node.js and npm.</p>
            </div>
          </div>
        </div>

        {/* macOS Installation */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <ComputerDesktopIcon className="w-6 h-6 mr-2" />
            macOS Installation
          </h3>
          
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Method 1: Official Installer</h4>
              <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>Visit <a href="https://nodejs.org" className="text-blue-600 dark:text-blue-400 hover:underline">nodejs.org</a></li>
                <li>Download the macOS Installer (.pkg)</li>
                <li>Run the installer and follow the wizard</li>
                <li>Verify installation with terminal commands</li>
              </ol>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Method 2: Using Homebrew (Recommended)</h4>
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-3">
                <code className="text-sm text-gray-800 dark:text-gray-200">
                  # Install Homebrew first (if not installed)<br/>
                  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"<br/><br/>
                  # Install Node.js<br/>
                  brew install node
                </code>
              </div>
            </div>
          </div>
        </div>

        {/* Linux Installation */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <CommandLineIcon className="w-6 h-6 mr-2" />
            Linux Installation (Ubuntu/Debian)
          </h3>
          
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Method 1: Using NodeSource Repository</h4>
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-3">
                <code className="text-sm text-gray-800 dark:text-gray-200">
                  # Update package list<br/>
                  sudo apt update<br/><br/>
                  # Install curl<br/>
                  sudo apt install -y curl<br/><br/>
                  # Add NodeSource repository<br/>
                  curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -<br/><br/>
                  # Install Node.js<br/>
                  sudo apt install -y nodejs
                </code>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Method 2: Using Snap</h4>
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-3">
                <code className="text-sm text-gray-800 dark:text-gray-200">
                  sudo snap install node --classic
                </code>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Method 3: Using Node Version Manager (nvm)</h4>
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-3">
                <code className="text-sm text-gray-800 dark:text-gray-200">
                  # Install nvm<br/>
                  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash<br/><br/>
                  # Restart terminal or run<br/>
                  source ~/.bashrc<br/><br/>
                  # Install latest LTS version<br/>
                  nvm install --lts<br/><br/>
                  # Use the installed version<br/>
                  nvm use --lts
                </code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verification */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Verification</h2>
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <CheckCircleIcon className="w-6 h-6 text-green-600 dark:text-green-400 mt-0.5" />
            <div>
              <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">Test Your Installation</h3>
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-3">
                <code className="text-sm text-gray-800 dark:text-gray-200">
                  node --version<br/>
                  npm --version<br/><br/>
                  # Test Node.js with a simple script<br/>
                  node -e "console.log('Hello from Node.js!')"
                </code>
              </div>
              <p className="text-green-800 dark:text-green-200">If you see version numbers and "Hello from Node.js!", your installation is successful!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Common Issues & Solutions</h2>
        
        <div className="space-y-4">
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
            <div className="flex items-start space-x-3">
              <ExclamationTriangleIcon className="w-6 h-6 text-yellow-600 dark:text-yellow-400 mt-0.5" />
              <div>
                <h3 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">'node' is not recognized (Windows)</h3>
                <p className="text-yellow-800 dark:text-yellow-200 mb-2">If you get this error after installation:</p>
                <ul className="list-disc list-inside text-yellow-800 dark:text-yellow-200 space-y-1">
                  <li>Restart your command prompt or PowerShell</li>
                  <li>Check if Node.js was added to PATH during installation</li>
                  <li>Manually add Node.js to your system PATH if needed</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
            <div className="flex items-start space-x-3">
              <ExclamationTriangleIcon className="w-6 h-6 text-yellow-600 dark:text-yellow-400 mt-0.5" />
              <div>
                <h3 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">Permission Errors (Linux/macOS)</h3>
                <p className="text-yellow-800 dark:text-yellow-200 mb-2">If you get permission errors when installing global packages:</p>
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                  <code className="text-sm text-gray-800 dark:text-gray-200">
                    # Configure npm to use a different directory<br/>
                    mkdir ~/.npm-global<br/>
                    npm config set prefix '~/.npm-global'<br/><br/>
                    # Add to PATH in your shell profile<br/>
                    export PATH=~/.npm-global/bin:$PATH
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Next Steps</h2>
        <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <PlayIcon className="w-6 h-6 text-purple-600 dark:text-purple-400 mt-0.5" />
            <div>
              <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">What to do next:</h3>
              <ul className="space-y-2 text-purple-800 dark:text-purple-200">
                <li>• Create your first Node.js application</li>
                <li>• Learn about npm and package management</li>
                <li>• Explore popular Node.js frameworks (Express, Next.js)</li>
                <li>• Set up a development environment with VS Code</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-8 border-t border-gray-200 dark:border-gray-700">
        <Link 
          to="/help"
          className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          <span>Back to Help & Tutorials</span>
        </Link>
        
        <div className="flex space-x-4">
          <Link 
            to="/help/git-setup"
            className="inline-flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            <span>Next: Git Setup</span>
            <PlayIcon className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
} 