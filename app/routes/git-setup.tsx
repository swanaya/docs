import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { 
  DocumentTextIcon,
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
    { title: "Git Configuration & Setup - Ketivee AI Documentation" },
    { name: "description", content: "Learn how to install Git and configure it for version control" },
  ];
};

export default function GitSetupPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
        <Link to="/" className="hover:text-gray-700 dark:hover:text-gray-300">Home</Link>
        <span>/</span>
        <Link to="/help" className="hover:text-gray-700 dark:hover:text-gray-300">Help & Tutorials</Link>
        <span>/</span>
        <span className="text-gray-900 dark:text-white">Git Setup</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
            <DocumentTextIcon className="w-8 h-8 text-purple-600 dark:text-purple-400" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Git Configuration & Setup</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">Install Git and configure it for version control</p>
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
        <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <CheckCircleIcon className="w-6 h-6 text-purple-600 dark:text-purple-400 mt-0.5" />
            <div>
              <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Before you begin:</h3>
              <ul className="space-y-2 text-purple-800 dark:text-purple-200">
                <li>• Administrator access to your system</li>
                <li>• Internet connection for downloading Git</li>
                <li>• GitHub account (optional but recommended)</li>
                <li>• Basic command line knowledge</li>
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
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Step 1: Download Git</h4>
              <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>Visit the official Git website: <a href="https://git-scm.com" className="text-blue-600 dark:text-blue-400 hover:underline">git-scm.com</a></li>
                <li>Click "Download for Windows"</li>
                <li>Choose the appropriate version (64-bit recommended)</li>
              </ol>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Step 2: Install Git</h4>
              <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>Run the downloaded installer as Administrator</li>
                <li>Accept the license agreement</li>
                <li>Choose installation location (default is fine)</li>
                <li>Select components (recommended settings)</li>
                <li>Choose default editor (Notepad++ or VS Code recommended)</li>
                <li>Choose PATH environment (Git from the command line and also from 3rd-party software)</li>
                <li>Choose HTTPS transport backend (OpenSSL library)</li>
                <li>Choose line ending conversions (Checkout Windows-style, commit Unix-style line endings)</li>
                <li>Choose terminal emulator (Use Windows' default console window)</li>
                <li>Choose default behavior of git pull (Default)</li>
                <li>Choose credential helper (Git Credential Manager)</li>
                <li>Enable file system caching (Yes)</li>
                <li>Complete the installation</li>
              </ol>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Step 3: Verify Installation</h4>
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-3">
                <code className="text-sm text-gray-800 dark:text-gray-200">
                  git --version
                </code>
              </div>
              <p className="text-gray-600 dark:text-gray-300">You should see output like: <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm">git version 2.40.x</code></p>
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
                  # Install Git<br/>
                  brew install git
                </code>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Method 2: Official Installer</h4>
              <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>Visit <a href="https://git-scm.com" className="text-blue-600 dark:text-blue-400 hover:underline">git-scm.com</a></li>
                <li>Download the macOS installer</li>
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
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Install Git</h4>
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-3">
                <code className="text-sm text-gray-800 dark:text-gray-200">
                  # Update package list<br/>
                  sudo apt update<br/><br/>
                  # Install Git<br/>
                  sudo apt install git
                </code>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Verify Installation</h4>
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-3">
                <code className="text-sm text-gray-800 dark:text-gray-200">
                  git --version
                </code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Configuration */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Initial Configuration</h2>
        
        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Set Your Identity</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Configure your name and email for Git commits:</p>
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-3">
              <code className="text-sm text-gray-800 dark:text-gray-200">
                git config --global user.name "Your Name"<br/>
                git config --global user.email "your.email@example.com"
              </code>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Set Default Branch Name</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Configure the default branch name for new repositories:</p>
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-3">
              <code className="text-sm text-gray-800 dark:text-gray-200">
                git config --global init.defaultBranch main
              </code>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Configure Line Endings</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Set up proper line ending handling:</p>
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-3">
              <code className="text-sm text-gray-800 dark:text-gray-200">
                # For Windows<br/>
                git config --global core.autocrlf true<br/><br/>
                # For macOS/Linux<br/>
                git config --global core.autocrlf input
              </code>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Verify Configuration</h3>
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-3">
              <code className="text-sm text-gray-800 dark:text-gray-200">
                git config --list
              </code>
            </div>
            <p className="text-gray-600 dark:text-gray-300">This will show all your Git configuration settings.</p>
          </div>
        </div>
      </section>

      {/* SSH Key Setup */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">SSH Key Setup (Optional)</h2>
        
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <CheckCircleIcon className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-0.5" />
            <div>
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Set up SSH for GitHub</h3>
              <p className="text-blue-800 dark:text-blue-200 mb-4">SSH keys allow you to connect to GitHub without entering your password each time.</p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Generate SSH Key</h4>
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                    <code className="text-sm text-gray-800 dark:text-gray-200">
                      ssh-keygen -t ed25519 -C "your.email@example.com"
                    </code>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Add SSH Key to SSH Agent</h4>
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                    <code className="text-sm text-gray-800 dark:text-gray-200">
                      # Start SSH agent<br/>
                      eval "$(ssh-agent -s)"<br/><br/>
                      # Add SSH key<br/>
                      ssh-add ~/.ssh/id_ed25519
                    </code>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Copy Public Key</h4>
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                    <code className="text-sm text-gray-800 dark:text-gray-200">
                      # Display public key<br/>
                      cat ~/.ssh/id_ed25519.pub
                    </code>
                  </div>
                  <p className="text-blue-800 dark:text-blue-200 text-sm mt-2">Copy the output and add it to your GitHub account settings.</p>
                </div>
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
              <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">Test Your Setup</h3>
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-3">
                <code className="text-sm text-gray-800 dark:text-gray-200">
                  # Check Git version<br/>
                  git --version<br/><br/>
                  # Check configuration<br/>
                  git config --list<br/><br/>
                  # Test SSH connection (if configured)<br/>
                  ssh -T git@github.com
                </code>
              </div>
              <p className="text-green-800 dark:text-green-200">If you see version information and configuration settings, your setup is successful!</p>
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
                <h3 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">'git' is not recognized (Windows)</h3>
                <p className="text-yellow-800 dark:text-yellow-200 mb-2">If you get this error after installation:</p>
                <ul className="list-disc list-inside text-yellow-800 dark:text-yellow-200 space-y-1">
                  <li>Restart your command prompt or PowerShell</li>
                  <li>Check if Git was added to PATH during installation</li>
                  <li>Manually add Git to your system PATH if needed</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
            <div className="flex items-start space-x-3">
              <ExclamationTriangleIcon className="w-6 h-6 text-yellow-600 dark:text-yellow-400 mt-0.5" />
              <div>
                <h3 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">Authentication Issues with GitHub</h3>
                <p className="text-yellow-800 dark:text-yellow-200 mb-2">If you have trouble pushing to GitHub:</p>
                <ul className="list-disc list-inside text-yellow-800 dark:text-yellow-200 space-y-1">
                  <li>Set up SSH keys as described above</li>
                  <li>Use GitHub CLI for easier authentication</li>
                  <li>Configure Git credential manager</li>
                </ul>
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
                <li>• Create your first Git repository</li>
                <li>• Learn basic Git commands (add, commit, push, pull)</li>
                <li>• Set up a GitHub account and create repositories</li>
                <li>• Learn about branching and merging</li>
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
            to="/help/python-environment"
            className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            <span>Next: Python Environment</span>
            <PlayIcon className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
} 