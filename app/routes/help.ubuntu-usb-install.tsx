import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { 
  ComputerDesktopIcon, 
  ArrowLeftIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  PlayIcon,
  ArrowDownTrayIcon,
  WrenchScrewdriverIcon,
  CogIcon
} from "@heroicons/react/24/outline";

export const meta: MetaFunction = () => {
  return [
    { title: "Install Ubuntu via USB - Help & Tutorials" },
    { name: "description", content: "Step-by-step guide to create a bootable USB drive and install Ubuntu on your hardware" },
  ];
};

export default function UbuntuUSBInstallPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
          <Link to="/" className="hover:text-gray-700 dark:hover:text-gray-300">Home</Link>
          <span>/</span>
          <Link to="/help" className="hover:text-gray-700 dark:hover:text-gray-300">Help & Tutorials</Link>
          <span>/</span>
          <span className="text-gray-900 dark:text-white">Install Ubuntu via USB</span>
        </nav>
        
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 bg-orange-100 dark:bg-orange-900 rounded-lg">
            <ComputerDesktopIcon className="w-6 h-6 text-orange-600 dark:text-orange-400" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Install Ubuntu via USB</h1>
        </div>
        
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Learn how to create a bootable USB drive and install Ubuntu on your hardware with this comprehensive guide.
        </p>
      </div>

      {/* Tutorial Info */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 mb-8">
        <div className="grid md:grid-cols-4 gap-4">
          <div className="flex items-center space-x-2">
            <ClockIcon className="w-5 h-5 text-gray-400" />
            <span className="text-sm text-gray-600 dark:text-gray-300">⏱️ 30-45 minutes</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircleIcon className="w-5 h-5 text-gray-400" />
            <span className="text-sm text-gray-600 dark:text-gray-300">📊 Intermediate</span>
          </div>
          <div className="flex items-center space-x-2">
            <InformationCircleIcon className="w-5 h-5 text-gray-400" />
            <span className="text-sm text-gray-600 dark:text-gray-300">🏷️ Ubuntu, USB, Installation</span>
          </div>
          <div className="flex items-center space-x-2">
            <ExclamationTriangleIcon className="w-5 h-5 text-gray-400" />
            <span className="text-sm text-gray-600 dark:text-gray-300">⚠️ Backup your data</span>
          </div>
        </div>
      </div>

      {/* Prerequisites */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Prerequisites
        </h2>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <InformationCircleIcon className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-0.5" />
            <div>
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
                What You'll Need
              </h3>
              <ul className="text-blue-800 dark:text-blue-200 space-y-2">
                <li>• A USB flash drive (8GB or larger recommended)</li>
                <li>• A computer with internet connection</li>
                <li>• Ubuntu ISO file (download from ubuntu.com)</li>
                <li>• USB creation tool (Rufus, Etcher, or similar)</li>
                <li>• Backup of important data (recommended)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Guide */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Step-by-Step Guide
        </h2>
        
        {/* Step 1 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
          <div className="p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Download Ubuntu ISO</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Visit the official Ubuntu website and download the latest LTS (Long Term Support) version.
                </p>
                <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-2">
                  <li>• Go to ubuntu.com/download/desktop</li>
                  <li>• Choose Ubuntu Desktop LTS</li>
                  <li>• Download the ISO file (2-3 GB)</li>
                  <li>• Verify the download checksum</li>
                </ul>
              </div>
                             <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                 <div className="text-center">
                   <ArrowDownTrayIcon className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                   <p className="text-sm text-gray-500 dark:text-gray-400">
                     Ubuntu Desktop 22.04 LTS<br />
                     ~3.5 GB ISO file
                   </p>
                 </div>
               </div>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
          <div className="p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                <span className="text-green-600 dark:text-green-400 font-semibold text-sm">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Prepare USB Drive</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Format your USB drive and create a bootable installation media.
                </p>
                <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-2">
                  <li>• Insert USB drive (8GB+ recommended)</li>
                  <li>• Backup any important data on the drive</li>
                  <li>• Format to FAT32 filesystem</li>
                  <li>• Download USB creation tool</li>
                </ul>
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                <div className="text-center">
                  <WrenchScrewdriverIcon className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Recommended Tools:<br />
                    • Rufus (Windows)<br />
                    • Etcher (Cross-platform)<br />
                    • Startup Disk Creator (Ubuntu)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
          <div className="p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                <span className="text-purple-600 dark:text-purple-400 font-semibold text-sm">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Create Bootable USB</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Use your chosen tool to create the bootable USB drive.
                </p>
                <div className="space-y-4">
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                    <div className="flex items-start space-x-2">
                      <ExclamationTriangleIcon className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-yellow-800 dark:text-yellow-200">Important</h4>
                        <p className="text-sm text-yellow-700 dark:text-yellow-300">
                          This process will erase all data on the USB drive. Make sure to backup any important files.
                        </p>
                      </div>
                    </div>
                  </div>
                  <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-2">
                    <li>• Select the Ubuntu ISO file</li>
                    <li>• Choose your USB drive as destination</li>
                    <li>• Start the creation process</li>
                    <li>• Wait for completion (10-20 minutes)</li>
                  </ul>
                </div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                <div className="text-center">
                  <CogIcon className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Process takes 10-20 minutes<br />
                    depending on USB speed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 4 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
          <div className="p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex-shrink-0 w-8 h-8 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center">
                <span className="text-orange-600 dark:text-orange-400 font-semibold text-sm">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Boot from USB</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Configure your computer to boot from the USB drive.
                </p>
                <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-2">
                  <li>• Insert the bootable USB drive</li>
                  <li>• Restart your computer</li>
                  <li>• Enter BIOS/UEFI (F2, F12, Del, or Esc)</li>
                  <li>• Change boot order to USB first</li>
                  <li>• Save and exit BIOS</li>
                </ul>
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                <div className="text-center">
                  <PlayIcon className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Common BIOS Keys:<br />
                    • F2, F12, Del, Esc<br />
                    • Varies by motherboard
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 5 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
          <div className="p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex-shrink-0 w-8 h-8 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center">
                <span className="text-red-600 dark:text-red-400 font-semibold text-sm">5</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Install Ubuntu</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Follow the Ubuntu installation wizard to complete the setup.
                </p>
                <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-2">
                  <li>• Choose language and keyboard layout</li>
                  <li>• Select installation type (dual boot or replace)</li>
                  <li>• Create user account and password</li>
                  <li>• Wait for installation to complete</li>
                  <li>• Restart when prompted</li>
                </ul>
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                <div className="text-center">
                  <ComputerDesktopIcon className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Installation takes<br />
                    15-30 minutes<br />
                    depending on hardware
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Troubleshooting
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Common Issues
            </h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">USB not recognized</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Try a different USB port or use a different USB drive. Ensure the drive is properly formatted.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">Installation fails</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Check disk space, verify ISO download, and ensure hardware compatibility.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">Boot issues</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Disable Secure Boot in BIOS, or enable Legacy Boot mode if needed.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Tips & Best Practices
            </h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">Backup first</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Always backup important data before installing a new operating system.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">Use LTS version</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Long Term Support versions are more stable and receive updates for 5 years.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">Test USB first</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Try the "Try Ubuntu" option before installing to test hardware compatibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          After Installation
        </h2>
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <CheckCircleIcon className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-2" />
              <h4 className="font-semibold text-green-800 dark:text-green-200">Update System</h4>
              <p className="text-sm text-green-700 dark:text-green-300">
                Run system updates to get the latest security patches and software updates.
              </p>
            </div>
            <div className="text-center">
              <CogIcon className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-2" />
              <h4 className="font-semibold text-green-800 dark:text-green-200">Install Software</h4>
              <p className="text-sm text-green-700 dark:text-green-300">
                Use Ubuntu Software Center to install your favorite applications and tools.
              </p>
            </div>
            <div className="text-center">
              <ComputerDesktopIcon className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-2" />
              <h4 className="font-semibold text-green-800 dark:text-green-200">Customize</h4>
              <p className="text-sm text-green-700 dark:text-green-300">
                Personalize your desktop with themes, extensions, and custom settings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="flex justify-between items-center">
        <Link 
          to="/help"
          className="inline-flex items-center space-x-2 px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          <span>Back to Help & Tutorials</span>
        </Link>
        
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
            Rate this tutorial
          </button>
          <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            Report issue
          </button>
        </div>
      </section>
    </div>
  );
}

// Helper component for clock icon
function ClockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
} 