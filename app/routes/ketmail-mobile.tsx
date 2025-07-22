import { Link } from "@remix-run/react";
import { 
  DevicePhoneMobileIcon,
  ShieldCheckIcon,
  EnvelopeIcon,
  UserIcon,
  CogIcon,
  CodeBracketIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  CommandLineIcon,
  GlobeAltIcon,
  LockClosedIcon,
  KeyIcon,
  ServerIcon,
  CircleStackIcon
} from '@heroicons/react/24/outline';

export default function KetMailMobile() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <DevicePhoneMobileIcon className="w-12 h-12" />
              <h1 className="text-5xl font-bold">KetMail Mobile App</h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Complete documentation for the KetMail mobile application. Learn how to integrate with Auth2.0 authentication system and KetMail backend for professional email services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#quick-start" 
                className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
              >
                Get Started
                <ArrowRightIcon className="w-5 h-5" />
              </a>
              <a 
                href="#api-integration" 
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
              >
                API Integration
              </a>
              <Link 
                to="/ketmail-mobile-integration" 
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
              >
                Integration Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section id="quick-start" className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Quick Start</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Get the KetMail mobile app up and running in minutes</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <ServerIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">1. Start Servers</h3>
              <div className="space-y-2 text-sm">
                <div className="bg-gray-100 dark:bg-gray-700 rounded p-3 font-mono">
                  cd Auth2.0 && npm start
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 rounded p-3 font-mono">
                  cd ketmail && npm start
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                <DevicePhoneMobileIcon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">2. Setup Mobile App</h3>
              <div className="space-y-2 text-sm">
                <div className="bg-gray-100 dark:bg-gray-700 rounded p-3 font-mono">
                  cd ketmail/mobile-app
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 rounded p-3 font-mono">
                  npm install
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                <CommandLineIcon className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">3. Run App</h3>
              <div className="space-y-2 text-sm">
                <div className="bg-gray-100 dark:bg-gray-700 rounded p-3 font-mono">
                  npm start
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-xs">
                  Press 'a' for Android, 'i' for iOS
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Features</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Comprehensive email management with enterprise-grade security</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Authentication */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <ShieldCheckIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold">Auth2.0 Integration</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-green-500" />
                  User registration & login
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-green-500" />
                  Email verification
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-green-500" />
                  Two-factor authentication
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-green-500" />
                  Device tracking
                </li>
              </ul>
            </div>

            {/* Email Management */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                  <EnvelopeIcon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold">Email Management</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-green-500" />
                  Create @ketmail.in accounts
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-green-500" />
                  Multiple domain support
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-green-500" />
                  Account settings
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-green-500" />
                  Storage management
                </li>
              </ul>
            </div>

            {/* Security */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                  <LockClosedIcon className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold">Security Features</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-green-500" />
                  Biometric authentication
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-green-500" />
                  Encrypted storage
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-green-500" />
                  Suspicious activity detection
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-green-500" />
                  Session management
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* API Integration Section */}
      <section id="api-integration" className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">API Integration</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Complete integration with Auth2.0 and KetMail backend</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Auth2.0 API */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <KeyIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold">Auth2.0 API Endpoints</h3>
              </div>
              
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <div className="font-mono text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    POST /api/auth/login
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">User authentication with device tracking</p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <div className="font-mono text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    POST /api/auth/register
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">User registration with email verification</p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <div className="font-mono text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    POST /api/auth/verify-2fa
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Two-factor authentication verification</p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <div className="font-mono text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    GET /api/auth/me
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Get current user profile</p>
                </div>
              </div>
            </div>

            {/* KetMail API */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                  <CircleStackIcon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold">KetMail API Endpoints</h3>
              </div>
              
              <div className="space-y-4">
                <div className="border-l-4 border-purple-500 pl-4">
                  <div className="font-mono text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    POST /api/email-accounts
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Create new email account</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <div className="font-mono text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    GET /api/email-accounts
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">List user's email accounts</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <div className="font-mono text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    PUT /api/email-accounts/:id
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Update email account settings</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <div className="font-mono text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    GET /api/domains
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Get available domains</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Authentication Flow Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Authentication Flow</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Complete user authentication and email account creation process</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Registration Flow */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <UserIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold">Registration</h3>
              </div>
              <ol className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
                  <span>User enters personal information</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
                  <span>App sends registration to Auth2.0</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
                  <span>Verification email sent</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">4</span>
                  <span>User verifies email</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">5</span>
                  <span>Account activated</span>
                </li>
              </ol>
            </div>

            {/* Login Flow */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                  <KeyIcon className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold">Login</h3>
              </div>
              <ol className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
                  <span>User enters credentials</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
                  <span>App validates with Auth2.0</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
                  <span>2FA required if enabled</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">4</span>
                  <span>Token stored securely</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">5</span>
                  <span>User redirected to app</span>
                </li>
              </ol>
            </div>

            {/* Email Creation */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                  <EnvelopeIcon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold">Email Creation</h3>
              </div>
              <ol className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
                  <span>User selects username</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
                  <span>Check availability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
                  <span>Create via KetMail API</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold">4</span>
                  <span>Account associated</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold">5</span>
                  <span>Ready to use</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Configuration Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Configuration</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Setup and configuration options for the mobile app</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Environment Variables */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <CogIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold">Environment Variables</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="font-mono text-sm bg-gray-100 dark:bg-gray-700 p-3 rounded">
                    EXPO_PUBLIC_AUTH_API_URL=http://localhost:3000
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Auth2.0 server URL</p>
                </div>
                
                <div>
                  <div className="font-mono text-sm bg-gray-100 dark:bg-gray-700 p-3 rounded">
                    EXPO_PUBLIC_KETMAIL_API_URL=http://localhost:5000
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">KetMail server URL</p>
                </div>
              </div>
            </div>

            {/* App Configuration */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                  <DevicePhoneMobileIcon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold">App Configuration</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm mb-2">Default Domain</h4>
                  <div className="font-mono text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    ketmail.in
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-sm mb-2">Storage Limit</h4>
                  <div className="font-mono text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    10GB per account
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-sm mb-2">Session Timeout</h4>
                  <div className="font-mono text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    24 hours
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Troubleshooting Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Troubleshooting</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Common issues and solutions</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <ExclamationTriangleIcon className="w-6 h-6 text-red-500" />
                  <h3 className="font-semibold text-red-800 dark:text-red-200">API Connection Errors</h3>
                </div>
                <ul className="space-y-2 text-sm text-red-700 dark:text-red-300">
                  <li>• Check server URLs in configuration</li>
                  <li>• Verify servers are running</li>
                  <li>• Check network connectivity</li>
                  <li>• Ensure ports are accessible</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <InformationCircleIcon className="w-6 h-6 text-yellow-500" />
                  <h3 className="font-semibold text-yellow-800 dark:text-yellow-200">Authentication Issues</h3>
                </div>
                <ul className="space-y-2 text-sm text-yellow-700 dark:text-yellow-300">
                  <li>• Clear app storage</li>
                  <li>• Check token expiration</li>
                  <li>• Verify Auth2.0 server status</li>
                  <li>• Check email verification status</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <InformationCircleIcon className="w-6 h-6 text-blue-500" />
                  <h3 className="font-semibold text-blue-800 dark:text-blue-200">Email Creation Failures</h3>
                </div>
                <ul className="space-y-2 text-sm text-blue-700 dark:text-blue-300">
                  <li>• Check KetMail server status</li>
                  <li>• Verify domain availability</li>
                  <li>• Check username availability</li>
                  <li>• Ensure user is authenticated</li>
                </ul>
              </div>
              
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircleIcon className="w-6 h-6 text-green-500" />
                  <h3 className="font-semibold text-green-800 dark:text-green-200">Build Errors</h3>
                </div>
                <ul className="space-y-2 text-sm text-green-700 dark:text-green-300">
                  <li>• Clear npm cache</li>
                  <li>• Delete node_modules and reinstall</li>
                  <li>• Update Expo SDK if needed</li>
                  <li>• Check dependency conflicts</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Set up your KetMail mobile app today and experience professional email management with enterprise-grade security.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/dashboard" 
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
            >
              View Dashboard
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
            <Link 
              to="/api-docs" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
            >
              API Documentation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 