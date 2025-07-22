import React from 'react';
import { Link } from '@remix-run/react';
import { ArrowLeftIcon, ShieldCheckIcon, LockClosedIcon, KeyIcon, ExclamationTriangleIcon, CheckCircleIcon, InformationCircleIcon, EyeIcon, EyeSlashIcon, DeviceTabletIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

export default function SecurityBestPractices() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
                <ArrowLeftIcon className="w-5 h-5" />
                <span>Back to Docs</span>
              </Link>
              <div className="h-6 w-px bg-gray-300"></div>
              <h1 className="text-2xl font-bold text-gray-900">Security Best Practices</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <nav className="space-y-2">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Navigation</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#password-security" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 py-2">
                      <KeyIcon className="w-4 h-4" />
                      <span>Password Security</span>
                    </a>
                  </li>
                  <li>
                    <a href="#two-factor" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 py-2">
                      <ShieldCheckIcon className="w-4 h-4" />
                      <span>Two-Factor Auth</span>
                    </a>
                  </li>
                  <li>
                    <a href="#device-security" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 py-2">
                      <DeviceTabletIcon className="w-4 h-4" />
                      <span>Device Security</span>
                    </a>
                  </li>
                  <li>
                    <a href="#phishing" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 py-2">
                      <ExclamationTriangleIcon className="w-4 h-4" />
                      <span>Phishing Protection</span>
                    </a>
                  </li>
                  <li>
                    <a href="#privacy" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 py-2">
                      <EyeIcon className="w-4 h-4" />
                      <span>Privacy Protection</span>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Introduction */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <ShieldCheckIcon className="w-6 h-6 text-red-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Security Best Practices</h2>
              </div>
              
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 mb-4">
                  Protecting your Ketivee account is crucial for maintaining access to all your services and personal data. 
                  Follow these security best practices to keep your account safe and secure.
                </p>
                
                <div className="bg-blue-50 rounded-lg p-4 mt-4">
                  <h3 className="font-semibold text-blue-900 mb-2">Why Security Matters</h3>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Protect your personal information</li>
                    <li>• Prevent unauthorized access to your services</li>
                    <li>• Maintain control over your digital identity</li>
                    <li>• Avoid potential financial losses</li>
                    <li>• Protect your privacy and reputation</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Password Security */}
            <section id="password-security" className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <KeyIcon className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Password Security</h2>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Strong Password Guidelines</h3>
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-medium text-green-900 mb-2">Requirements:</h4>
                    <ul className="text-sm text-green-800 space-y-1">
                      <li>• Minimum 12 characters (recommended 16+)</li>
                      <li>• Mix of uppercase and lowercase letters</li>
                      <li>• Include numbers and special characters</li>
                      <li>• Avoid common words or patterns</li>
                      <li>• Don't use personal information</li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Password Management</h3>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-medium text-blue-900 mb-2">Best Practices:</h4>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• Use a password manager (Bitwarden, 1Password, etc.)</li>
                      <li>• Create unique passwords for each service</li>
                      <li>• Change passwords regularly (every 3-6 months)</li>
                      <li>• Never share passwords via email or text</li>
                      <li>• Enable password breach monitoring</li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-4 border-red-500 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-2">What to Avoid</h3>
                  <div className="bg-red-50 rounded-lg p-4">
                    <h4 className="font-medium text-red-900 mb-2">Common Mistakes:</h4>
                    <ul className="text-sm text-red-800 space-y-1">
                      <li>• Using the same password everywhere</li>
                      <li>• Writing passwords on paper or digital notes</li>
                      <li>• Using easily guessable information</li>
                      <li>• Sharing passwords with others</li>
                      <li>• Using default passwords</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Two-Factor Authentication */}
            <section id="two-factor" className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <ShieldCheckIcon className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Two-Factor Authentication</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-purple-50 rounded-lg p-4">
                  <h3 className="font-semibold text-purple-900 mb-2">Why Enable 2FA?</h3>
                  <p className="text-purple-800 mb-3">
                    Two-factor authentication adds an extra layer of security by requiring a second form of verification 
                    in addition to your password.
                  </p>
                  <ul className="text-sm text-purple-800 space-y-1">
                    <li>• Prevents unauthorized access even if password is compromised</li>
                    <li>• Protects against phishing attacks</li>
                    <li>• Provides real-time security alerts</li>
                    <li>• Required for accessing sensitive features</li>
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-50 rounded-lg p-4">
                    <h3 className="font-semibold text-green-900 mb-2">Authenticator Apps</h3>
                    <p className="text-green-800 text-sm mb-2">Recommended options:</p>
                    <ul className="text-sm text-green-800 space-y-1">
                      <li>• Google Authenticator</li>
                      <li>• Authy</li>
                      <li>• Microsoft Authenticator</li>
                      <li>• 1Password</li>
                      <li>• Bitwarden</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-900 mb-2">Backup Codes</h3>
                    <p className="text-blue-800 text-sm mb-2">Always save your backup codes:</p>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• Store in a secure location</li>
                      <li>• Don't share with anyone</li>
                      <li>• Use if you lose your device</li>
                      <li>• Regenerate if compromised</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Device Security */}
            <section id="device-security" className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <DeviceTabletIcon className="w-6 h-6 text-indigo-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Device Security</h2>
              </div>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-indigo-50 rounded-lg p-4">
                    <h3 className="font-semibold text-indigo-900 mb-2">Device Protection</h3>
                    <ul className="text-sm text-indigo-800 space-y-1">
                      <li>• Use device lock screens</li>
                      <li>• Enable biometric authentication</li>
                      <li>• Keep devices updated</li>
                      <li>• Use antivirus software</li>
                      <li>• Enable device encryption</li>
                    </ul>
                  </div>
                  
                  <div className="bg-yellow-50 rounded-lg p-4">
                    <h3 className="font-semibold text-yellow-900 mb-2">Public Wi-Fi Safety</h3>
                    <ul className="text-sm text-yellow-800 space-y-1">
                      <li>• Avoid accessing accounts on public Wi-Fi</li>
                      <li>• Use VPN when necessary</li>
                      <li>• Don't enter passwords on public computers</li>
                      <li>• Log out completely after use</li>
                      <li>• Clear browser data</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Session Management</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">Regular Maintenance:</h4>
                      <ul className="text-gray-700 space-y-1">
                        <li>• Review active sessions monthly</li>
                        <li>• Log out from unused devices</li>
                        <li>• Monitor login locations</li>
                        <li>• Report suspicious activity</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">Lost Device Actions:</h4>
                      <ul className="text-gray-700 space-y-1">
                        <li>• Immediately log out from all devices</li>
                        <li>• Change your password</li>
                        <li>• Contact support if needed</li>
                        <li>• Enable additional security measures</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Phishing Protection */}
            <section id="phishing" className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <ExclamationTriangleIcon className="w-6 h-6 text-red-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Phishing Protection</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-red-50 rounded-lg p-4">
                  <h3 className="font-semibold text-red-900 mb-2">Recognizing Phishing Attempts</h3>
                  <ul className="text-sm text-red-800 space-y-1">
                    <li>• Urgent or threatening language</li>
                    <li>• Requests for personal information</li>
                    <li>• Suspicious email addresses</li>
                    <li>• Poor grammar or spelling</li>
                    <li>• Unusual links or attachments</li>
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-50 rounded-lg p-4">
                    <h3 className="font-semibold text-green-900 mb-2">Safe Practices</h3>
                    <ul className="text-sm text-green-800 space-y-1">
                      <li>• Verify sender email addresses</li>
                      <li>• Check for HTTPS in URLs</li>
                      <li>• Don't click suspicious links</li>
                      <li>• Contact support directly</li>
                      <li>• Report phishing attempts</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-900 mb-2">Official Communication</h3>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• Always from @ketivee.com domains</li>
                      <li>• Professional formatting</li>
                      <li>• No urgent payment requests</li>
                      <li>• Clear sender identification</li>
                      <li>• Consistent branding</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Privacy Protection */}
            <section id="privacy" className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <EyeIcon className="w-6 h-6 text-gray-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Privacy Protection</h2>
              </div>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Data Protection</h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Review privacy settings regularly</li>
                      <li>• Limit data sharing</li>
                      <li>• Use strong privacy controls</li>
                      <li>• Monitor account activity</li>
                      <li>• Report data breaches</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Account Monitoring</h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Check login history</li>
                      <li>• Review connected apps</li>
                      <li>• Monitor email notifications</li>
                      <li>• Update contact information</li>
                      <li>• Enable security alerts</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-900 mb-2">Privacy Settings</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-medium text-blue-800 mb-1">Recommended Settings:</h4>
                      <ul className="text-blue-700 space-y-1">
                        <li>• Enable login notifications</li>
                        <li>• Use privacy-focused browsers</li>
                        <li>• Clear browsing data regularly</li>
                        <li>• Use incognito mode when needed</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-800 mb-1">Data Control:</h4>
                      <ul className="text-blue-700 space-y-1">
                        <li>• Download your data regularly</li>
                        <li>• Review app permissions</li>
                        <li>• Delete unused accounts</li>
                        <li>• Opt out of data sharing</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Emergency Actions */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <ExclamationTriangleIcon className="w-6 h-6 text-red-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Emergency Actions</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-red-50 rounded-lg p-4">
                  <h3 className="font-semibold text-red-900 mb-2">If Your Account is Compromised</h3>
                  <ol className="text-sm text-red-800 space-y-1">
                    <li>1. Immediately change your password</li>
                    <li>2. Enable two-factor authentication</li>
                    <li>3. Log out from all devices</li>
                    <li>4. Review recent activity</li>
                    <li>5. Contact support immediately</li>
                    <li>6. Monitor for suspicious activity</li>
                    <li>7. Update security questions</li>
                  </ol>
                </div>
                
                <div className="bg-yellow-50 rounded-lg p-4">
                  <h3 className="font-semibold text-yellow-900 mb-2">Contact Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-medium text-yellow-800 mb-1">Emergency Contacts:</h4>
                      <ul className="text-yellow-700 space-y-1">
                        <li>• Security: security@ketivee.com</li>
                        <li>• Support: support@ketivee.com</li>
                        <li>• Recovery: recovery@ketivee.com</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-yellow-800 mb-1">Response Time:</h4>
                      <ul className="text-yellow-700 space-y-1">
                        <li>• Security issues: 1-2 hours</li>
                        <li>• Account recovery: 4-6 hours</li>
                        <li>• General support: 24 hours</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
} 