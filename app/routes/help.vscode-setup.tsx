import type { MetaFunction, LoaderFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { 
  WrenchScrewdriverIcon,
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
    { title: "VS Code Installation & Extensions - Ketivee AI Documentation" },
    { name: "description", content: "Learn how to install Visual Studio Code and essential extensions" },
  ];
};

export const loader: LoaderFunction = async () => {
  return null;
};

export default function VSCodeSetupPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
        <Link to="/" className="hover:text-gray-700 dark:hover:text-gray-300">Home</Link>
        <span>/</span>
        <Link to="/help" className="hover:text-gray-700 dark:hover:text-gray-300">Help & Tutorials</Link>
        <span>/</span>
        <span className="text-gray-900 dark:text-white">VS Code Setup</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
            <WrenchScrewdriverIcon className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">VS Code Installation & Extensions</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">Install Visual Studio Code and essential extensions</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center space-x-1">
            <ClockIcon className="w-4 h-4" />
            <span>15-20 minutes</span>
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
        <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <CheckCircleIcon className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mt-0.5" />
            <div>
              <h3 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">Before you begin:</h3>
              <ul className="space-y-2 text-indigo-800 dark:text-indigo-200">
                <li>• Administrator access to your system</li>
                <li>• Internet connection for downloading VS Code</li>
                <li>• At least 1GB of available disk space</li>
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
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Step 1: Download VS Code</h4>
              <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>Visit the official VS Code website: <a href="https://code.visualstudio.com" className="text-blue-600 dark:text-blue-400 hover:underline">code.visualstudio.com</a></li>
                <li>Click "Download for Windows"</li>
                <li>Choose the appropriate version (User Installer recommended)</li>
              </ol>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Step 2: Install VS Code</h4>
              <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>Run the downloaded installer as Administrator</li>
                <li>Accept the license agreement</li>
                <li>Choose installation location (default is fine)</li>
                <li>Select additional tasks (recommended: "Add to PATH", "Register Code as an editor")</li>
                <li>Complete the installation</li>
              </ol>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Step 3: Verify Installation</h4>
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-3">
                <code className="text-sm text-gray-800 dark:text-gray-200">
                  code --version
                </code>
              </div>
              <p className="text-gray-600 dark:text-gray-300">You should see the VS Code version number.</p>
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
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Method 1: Direct Download</h4>
              <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>Visit <a href="https://code.visualstudio.com" className="text-blue-600 dark:text-blue-400 hover:underline">code.visualstudio.com</a></li>
                <li>Click "Download for Mac"</li>
                <li>Open the downloaded .zip file</li>
                <li>Drag VS Code to your Applications folder</li>
                <li>Open VS Code from Applications</li>
              </ol>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Method 2: Using Homebrew</h4>
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-3">
                <code className="text-sm text-gray-800 dark:text-gray-200">
                  # Install Homebrew first (if not installed)<br/>
                  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"<br/><br/>
                  # Install VS Code<br/>
                  brew install --cask visual-studio-code
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
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Method 1: Using Snap</h4>
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-3">
                <code className="text-sm text-gray-800 dark:text-gray-200">
                  sudo snap install code --classic
                </code>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Method 2: Using Package Manager</h4>
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-3">
                <code className="text-sm text-gray-800 dark:text-gray-200">
                  # Add Microsoft GPG key<br/>
                                      wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor &gt; packages.microsoft.gpg<br/><br/>
                  # Add VS Code repository<br/>
                  sudo install -o root -g root -m 644 packages.microsoft.gpg /etc/apt/trusted.gpg.d/<br/>
                                      sudo sh -c 'echo "deb [arch=amd64,arm64,armhf signed-by=/etc/apt/trusted.gpg.d/packages.microsoft.gpg] https://packages.microsoft.com/repos/code stable main" &gt; /etc/apt/sources.list.d/vscode.list'<br/><br/>
                  # Install VS Code<br/>
                  sudo apt update<br/>
                  sudo apt install code
                </code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Essential Extensions */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Essential Extensions</h2>
        
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-6">
          <div className="flex items-start space-x-3">
            <CheckCircleIcon className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-0.5" />
            <div>
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Why Extensions?</h3>
              <p className="text-blue-800 dark:text-blue-200">Extensions enhance VS Code's functionality with language support, themes, debugging tools, and more.</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Language Support</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• <strong>Python</strong> - Microsoft Python extension</li>
              <li>• <strong>JavaScript/TypeScript</strong> - Built-in support</li>
              <li>• <strong>HTML/CSS</strong> - Built-in support</li>
              <li>• <strong>Java</strong> - Extension Pack for Java</li>
              <li>• <strong>C/C++</strong> - C/C++ extension</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Productivity Tools</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• <strong>GitLens</strong> - Enhanced Git capabilities</li>
              <li>• <strong>Auto Rename Tag</strong> - HTML tag renaming</li>
              <li>• <strong>Bracket Pair Colorizer</strong> - Color-coded brackets</li>
              <li>• <strong>Prettier</strong> - Code formatter</li>
              <li>• <strong>ESLint</strong> - JavaScript linting</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Themes & Icons</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• <strong>Material Icon Theme</strong> - File icons</li>
              <li>• <strong>One Dark Pro</strong> - Dark theme</li>
              <li>• <strong>Dracula Official</strong> - Dark theme</li>
              <li>• <strong>GitHub Theme</strong> - Light/dark themes</li>
              <li>• <strong>Night Owl</strong> - Dark theme</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Development Tools</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• <strong>Live Server</strong> - Local development server</li>
              <li>• <strong>Thunder Client</strong> - API testing</li>
              <li>• <strong>REST Client</strong> - HTTP requests</li>
              <li>• <strong>Docker</strong> - Docker integration</li>
              <li>• <strong>Remote Development</strong> - Remote coding</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Installing Extensions */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">How to Install Extensions</h2>
        
        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Method 1: Using the Extensions Panel</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <li>Open VS Code</li>
              <li>Click the Extensions icon in the sidebar (or press Ctrl+Shift+X)</li>
              <li>Search for the extension you want</li>
              <li>Click "Install"</li>
              <li>Restart VS Code if prompted</li>
            </ol>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Method 2: Using Command Palette</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <li>Press Ctrl+Shift+P (Cmd+Shift+P on Mac)</li>
              <li>Type "Extensions: Install Extensions"</li>
              <li>Search for the extension</li>
              <li>Click "Install"</li>
            </ol>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Method 3: Using Terminal</h3>
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-3">
              <code className="text-sm text-gray-800 dark:text-gray-200">
                # Install extension by ID<br/>
                code --install-extension ms-python.python<br/><br/>
                # Install multiple extensions<br/>
                code --install-extension ms-python.python --install-extension ms-vscode.vscode-typescript-next
              </code>
            </div>
          </div>
        </div>
      </section>

      {/* Configuration */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Basic Configuration</h2>
        
        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Settings</h3>
                          <p className="text-gray-600 dark:text-gray-300 mb-4">Access settings via File &gt; Preferences &gt; Settings or Ctrl+,</p>
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <code className="text-sm text-gray-800 dark:text-gray-200">
                // Recommended settings<br/>
                "editor.fontSize": 14,<br/>
                "editor.tabSize": 2,<br/>
                "editor.insertSpaces": true,<br/>
                "editor.wordWrap": "on",<br/>
                "editor.minimap.enabled": false,<br/>
                "workbench.colorTheme": "One Dark Pro"
              </code>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Keyboard Shortcuts</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">General</h4>
                <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                  <li>Ctrl+P - Quick Open</li>
                  <li>Ctrl+Shift+P - Command Palette</li>
                  <li>Ctrl+, - Settings</li>
                  <li>Ctrl+Shift+X - Extensions</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Editing</h4>
                <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                  <li>Ctrl+S - Save</li>
                  <li>Ctrl+Z - Undo</li>
                  <li>Ctrl+F - Find</li>
                  <li>Ctrl+H - Replace</li>
                </ul>
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
                  # Check VS Code version<br/>
                  code --version<br/><br/>
                  # Open VS Code from terminal<br/>
                  code .<br/><br/>
                  # Check installed extensions<br/>
                  code --list-extensions
                </code>
              </div>
              <p className="text-green-800 dark:text-green-200">If you can open VS Code and see the version number, your installation is successful!</p>
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
                <h3 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">'code' command not found</h3>
                <p className="text-yellow-800 dark:text-yellow-200 mb-2">If you can't use the 'code' command from terminal:</p>
                <ul className="list-disc list-inside text-yellow-800 dark:text-yellow-200 space-y-1">
                  <li>Open VS Code</li>
                  <li>Press Ctrl+Shift+P (Cmd+Shift+P on Mac)</li>
                  <li>Type "Shell Command: Install 'code' command in PATH"</li>
                  <li>Select the command and run it</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
            <div className="flex items-start space-x-3">
              <ExclamationTriangleIcon className="w-6 h-6 text-yellow-600 dark:text-yellow-400 mt-0.5" />
              <div>
                <h3 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">Extensions not loading</h3>
                <p className="text-yellow-800 dark:text-yellow-200 mb-2">If extensions aren't working properly:</p>
                <ul className="list-disc list-inside text-yellow-800 dark:text-yellow-200 space-y-1">
                  <li>Restart VS Code</li>
                  <li>Check if the extension is enabled</li>
                  <li>Try disabling and re-enabling the extension</li>
                  <li>Check the Extensions panel for error messages</li>
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
                <li>• Explore VS Code's integrated terminal</li>
                <li>• Learn about debugging with VS Code</li>
                <li>• Set up Git integration</li>
                <li>• Customize your workspace settings</li>
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
            to="/help/ubuntu-usb-install"
            className="inline-flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <span>Next: Ubuntu USB Install</span>
            <PlayIcon className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
} 