import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { 
  SparklesIcon,
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
    { title: "Python Environment Setup - Ketivee AI Documentation" },
    { name: "description", content: "Learn how to install Python and set up virtual environments" },
  ];
};

export default function PythonEnvironmentPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
        <Link to="/" className="hover:text-gray-700 dark:hover:text-gray-300">Home</Link>
        <span>/</span>
        <Link to="/help" className="hover:text-gray-700 dark:hover:text-gray-300">Help & Tutorials</Link>
        <span>/</span>
        <span className="text-gray-900 dark:text-white">Python Environment</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-3 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
            <SparklesIcon className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Python Environment Setup</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">Install Python and set up virtual environments</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center space-x-1">
            <ClockIcon className="w-4 h-4" />
            <span>20-25 minutes</span>
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
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <CheckCircleIcon className="w-6 h-6 text-yellow-600 dark:text-yellow-400 mt-0.5" />
            <div>
              <h3 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">Before you begin:</h3>
              <ul className="space-y-2 text-yellow-800 dark:text-yellow-200">
                <li>• Administrator access to your system</li>
                <li>• Internet connection for downloading Python</li>
                <li>• At least 2GB of available disk space</li>
                <li>• Windows 10+, macOS 10.15+, or Linux</li>
              </ul>
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
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Step 1: Download Python</h4>
              <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>Visit the official Python website: <a href="https://python.org" className="text-blue-600 dark:text-blue-400 hover:underline">python.org</a></li>
                <li>Click "Downloads" and choose the latest Python version (3.11+ recommended)</li>
                <li>Download the Windows installer (.exe)</li>
              </ol>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Step 2: Install Python</h4>
              <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>Run the downloaded installer as Administrator</li>
                <li>Check "Add Python to PATH" (important!)</li>
                <li>Choose "Install Now" for standard installation</li>
                <li>Wait for installation to complete</li>
              </ol>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Step 3: Verify Installation</h4>
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-3">
                <code className="text-sm text-gray-800 dark:text-gray-200">
                  python --version<br/>
                  pip --version
                </code>
              </div>
              <p className="text-gray-600 dark:text-gray-300">You should see version numbers for both Python and pip.</p>
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
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Method 1: Using Homebrew (Recommended)</h4>
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-3">
                <code className="text-sm text-gray-800 dark:text-gray-200">
                  # Install Homebrew first (if not installed)<br/>
                  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"<br/><br/>
                  # Install Python<br/>
                  brew install python
                </code>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Method 2: Official Installer</h4>
              <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>Visit <a href="https://python.org" className="text-blue-600 dark:text-blue-400 hover:underline">python.org</a></li>
                <li>Download the macOS installer (.pkg)</li>
                <li>Run the installer and follow the wizard</li>
                <li>Verify installation with terminal commands</li>
              </ol>
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
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Install Python</h4>
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-3">
                <code className="text-sm text-gray-800 dark:text-gray-200">
                  # Update package list<br/>
                  sudo apt update<br/><br/>
                  # Install Python 3 and pip<br/>
                  sudo apt install python3 python3-pip
                </code>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Verify Installation</h4>
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-3">
                <code className="text-sm text-gray-800 dark:text-gray-200">
                  python3 --version<br/>
                  pip3 --version
                </code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Environments */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Setting Up Virtual Environments</h2>
        
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-6">
          <div className="flex items-start space-x-3">
            <CheckCircleIcon className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-0.5" />
            <div>
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Why Virtual Environments?</h3>
              <p className="text-blue-800 dark:text-blue-200">Virtual environments allow you to create isolated Python environments for different projects, preventing package conflicts.</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Create a Virtual Environment</h3>
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-3">
              <code className="text-sm text-gray-800 dark:text-gray-200">
                # Create a new virtual environment<br/>
                python -m venv myproject<br/><br/>
                # Activate the virtual environment<br/>
                # On Windows:<br/>
                myproject\\Scripts\\activate<br/><br/>
                # On macOS/Linux:<br/>
                source myproject/bin/activate
              </code>
            </div>
            <p className="text-gray-600 dark:text-gray-300">You'll know it's activated when you see <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm">(myproject)</code> at the beginning of your command prompt.</p>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Install Packages in Virtual Environment</h3>
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-3">
              <code className="text-sm text-gray-800 dark:text-gray-200">
                # Install packages<br/>
                pip install requests flask pandas<br/><br/>
                # List installed packages<br/>
                                  pip list<br/><br/>
                  # Create requirements.txt<br/>
                  pip freeze &gt; requirements.txt
              </code>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Deactivate Virtual Environment</h3>
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-3">
              <code className="text-sm text-gray-800 dark:text-gray-200">
                deactivate
              </code>
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
              <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">Test Your Setup</h3>
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-3">
                <code className="text-sm text-gray-800 dark:text-gray-200">
                  # Check Python version<br/>
                  python --version<br/><br/>
                  # Test Python with a simple script<br/>
                  python -c "print('Hello from Python!')"<br/><br/>
                  # Test pip<br/>
                  pip --version
                </code>
              </div>
              <p className="text-green-800 dark:text-green-200">If you see version numbers and "Hello from Python!", your installation is successful!</p>
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
                <h3 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">'python' is not recognized (Windows)</h3>
                <p className="text-yellow-800 dark:text-yellow-200 mb-2">If you get this error after installation:</p>
                <ul className="list-disc list-inside text-yellow-800 dark:text-yellow-200 space-y-1">
                  <li>Make sure you checked "Add Python to PATH" during installation</li>
                  <li>Restart your command prompt or PowerShell</li>
                  <li>Try using <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm">py</code> instead of <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm">python</code></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
            <div className="flex items-start space-x-3">
              <ExclamationTriangleIcon className="w-6 h-6 text-yellow-600 dark:text-yellow-400 mt-0.5" />
              <div>
                <h3 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">Permission Errors (Linux/macOS)</h3>
                <p className="text-yellow-800 dark:text-yellow-200 mb-2">If you get permission errors when installing packages:</p>
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                  <code className="text-sm text-gray-800 dark:text-gray-200">
                    # Use virtual environments instead of global installation<br/>
                    python -m venv myproject<br/>
                    source myproject/bin/activate<br/>
                    pip install package_name
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
                <li>• Create your first Python script</li>
                <li>• Learn about pip and package management</li>
                <li>• Explore popular Python frameworks (Django, Flask)</li>
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
            to="/help/vscode-setup"
            className="inline-flex items-center space-x-2 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors"
          >
            <span>Next: VS Code Setup</span>
            <PlayIcon className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
} 