import { Link } from "@remix-run/react";
import { 
  DocumentTextIcon,
  CodeBracketIcon,
  ServerIcon,
  KeyIcon,
  EnvelopeIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  ClockIcon,
  GlobeAltIcon,
  LockClosedIcon
} from '@heroicons/react/24/outline';

export default function KetMailMobileQuickRef() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <DocumentTextIcon className="w-12 h-12" />
              <h1 className="text-4xl font-bold">KetMail Mobile Quick Reference</h1>
            </div>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Essential information and quick commands for KetMail mobile app development and integration.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Commands Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Quick Commands</h2>
            <p className="text-gray-600 dark:text-gray-400">Essential commands to get started quickly</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Start Servers */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <ServerIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <h3 className="font-semibold">Start Servers</h3>
              </div>
              <div className="space-y-2">
                <div className="bg-gray-100 dark:bg-gray-700 rounded p-2 font-mono text-sm">
                  cd Auth2.0 && npm start
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 rounded p-2 font-mono text-sm">
                  cd ketmail && npm start
                </div>
              </div>
            </div>

            {/* Setup Mobile App */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <CodeBracketIcon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                <h3 className="font-semibold">Setup Mobile App</h3>
              </div>
              <div className="space-y-2">
                <div className="bg-gray-100 dark:bg-gray-700 rounded p-2 font-mono text-sm">
                  cd ketmail/mobile-app
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 rounded p-2 font-mono text-sm">
                  npm install
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 rounded p-2 font-mono text-sm">
                  npm start
                </div>
              </div>
            </div>

            {/* Environment Setup */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <GlobeAltIcon className="w-6 h-6 text-green-600 dark:text-green-400" />
                <h3 className="font-semibold">Environment Variables</h3>
              </div>
              <div className="space-y-2">
                <div className="bg-gray-100 dark:bg-gray-700 rounded p-2 font-mono text-sm">
                  EXPO_PUBLIC_AUTH_API_URL=http://localhost:3000
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 rounded p-2 font-mono text-sm">
                  EXPO_PUBLIC_KETMAIL_API_URL=http://localhost:5000
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* API Endpoints Quick Reference */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">API Endpoints</h2>
            <p className="text-gray-600 dark:text-gray-400">Essential API endpoints for integration</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Auth2.0 Endpoints */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <KeyIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <h3 className="font-semibold">Auth2.0 Endpoints</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-sm">POST /api/auth/login</span>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">Auth</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-mono text-sm">POST /api/auth/register</span>
                  <span className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded">Register</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-mono text-sm">POST /api/auth/verify-2fa</span>
                  <span className="text-xs bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded">2FA</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-mono text-sm">GET /api/auth/me</span>
                  <span className="text-xs bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded">Profile</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-mono text-sm">POST /api/auth/refresh</span>
                  <span className="text-xs bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-2 py-1 rounded">Token</span>
                </div>
              </div>
            </div>

            {/* KetMail Endpoints */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <EnvelopeIcon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                <h3 className="font-semibold">KetMail Endpoints</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-sm">POST /api/email-accounts</span>
                  <span className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded">Create</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-mono text-sm">GET /api/email-accounts</span>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">List</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-mono text-sm">PUT /api/email-accounts/:id</span>
                  <span className="text-xs bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded">Update</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-mono text-sm">DELETE /api/email-accounts/:id</span>
                  <span className="text-xs bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded">Delete</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-mono text-sm">GET /api/domains</span>
                  <span className="text-xs bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded">Domains</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Status Codes */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Status Codes</h2>
            <p className="text-gray-600 dark:text-gray-400">Common HTTP status codes and their meanings</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircleIcon className="w-6 h-6 text-green-600 dark:text-green-400" />
                <h3 className="font-semibold">Success (2xx)</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>200</span>
                  <span className="text-gray-600 dark:text-gray-400">OK</span>
                </div>
                <div className="flex justify-between">
                  <span>201</span>
                  <span className="text-gray-600 dark:text-gray-400">Created</span>
                </div>
                <div className="flex justify-between">
                  <span>204</span>
                  <span className="text-gray-600 dark:text-gray-400">No Content</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <ExclamationTriangleIcon className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                <h3 className="font-semibold">Client Error (4xx)</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>400</span>
                  <span className="text-gray-600 dark:text-gray-400">Bad Request</span>
                </div>
                <div className="flex justify-between">
                  <span>401</span>
                  <span className="text-gray-600 dark:text-gray-400">Unauthorized</span>
                </div>
                <div className="flex justify-between">
                  <span>404</span>
                  <span className="text-gray-600 dark:text-gray-400">Not Found</span>
                </div>
                <div className="flex justify-between">
                  <span>409</span>
                  <span className="text-gray-600 dark:text-gray-400">Conflict</span>
                </div>
                <div className="flex justify-between">
                  <span>423</span>
                  <span className="text-gray-600 dark:text-gray-400">Locked</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <ExclamationTriangleIcon className="w-6 h-6 text-red-600 dark:text-red-400" />
                <h3 className="font-semibold">Server Error (5xx)</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>500</span>
                  <span className="text-gray-600 dark:text-gray-400">Internal Error</span>
                </div>
                <div className="flex justify-between">
                  <span>502</span>
                  <span className="text-gray-600 dark:text-gray-400">Bad Gateway</span>
                </div>
                <div className="flex justify-between">
                  <span>503</span>
                  <span className="text-gray-600 dark:text-gray-400">Service Unavailable</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <InformationCircleIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <h3 className="font-semibold">Special Codes</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>2FA</span>
                  <span className="text-gray-600 dark:text-gray-400">Two-Factor Required</span>
                </div>
                <div className="flex justify-between">
                  <span>EMAIL_VERIFY</span>
                  <span className="text-gray-600 dark:text-gray-400">Email Verification</span>
                </div>
                <div className="flex justify-between">
                  <span>SUSPICIOUS</span>
                  <span className="text-gray-600 dark:text-gray-400">Suspicious Activity</span>
                </div>
                <div className="flex justify-between">
                  <span>SUSPENDED</span>
                  <span className="text-gray-600 dark:text-gray-400">Account Suspended</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Configuration Reference */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Configuration Reference</h2>
            <p className="text-gray-600 dark:text-gray-400">Essential configuration settings</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <LockClosedIcon className="w-6 h-6 text-green-600 dark:text-green-400" />
                <h3 className="font-semibold">Security Settings</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Session Timeout</span>
                  <span className="text-gray-600 dark:text-gray-400">24 hours</span>
                </div>
                <div className="flex justify-between">
                  <span>Password Min Length</span>
                  <span className="text-gray-600 dark:text-gray-400">8 characters</span>
                </div>
                <div className="flex justify-between">
                  <span>Max Login Attempts</span>
                  <span className="text-gray-600 dark:text-gray-400">8 attempts</span>
                </div>
                <div className="flex justify-between">
                  <span>2FA Timeout</span>
                  <span className="text-gray-600 dark:text-gray-400">30 seconds</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <EnvelopeIcon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                <h3 className="font-semibold">Email Settings</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Default Domain</span>
                  <span className="text-gray-600 dark:text-gray-400">ketmail.in</span>
                </div>
                <div className="flex justify-between">
                  <span>Storage Limit</span>
                  <span className="text-gray-600 dark:text-gray-400">10GB</span>
                </div>
                <div className="flex justify-between">
                  <span>Max Attachment</span>
                  <span className="text-gray-600 dark:text-gray-400">25MB</span>
                </div>
                <div className="flex justify-between">
                  <span>Username Min Length</span>
                  <span className="text-gray-600 dark:text-gray-400">3 characters</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <ClockIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <h3 className="font-semibold">Timeouts</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>API Timeout</span>
                  <span className="text-gray-600 dark:text-gray-400">10 seconds</span>
                </div>
                <div className="flex justify-between">
                  <span>Email Verification</span>
                  <span className="text-gray-600 dark:text-gray-400">24 hours</span>
                </div>
                <div className="flex justify-between">
                  <span>Token Refresh</span>
                  <span className="text-gray-600 dark:text-gray-400">1 hour</span>
                </div>
                <div className="flex justify-between">
                  <span>Rate Limit</span>
                  <span className="text-gray-600 dark:text-gray-400">100 req/min</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Quick Links</h2>
            <p className="text-gray-600 dark:text-gray-400">Navigate to detailed documentation</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/ketmail-mobile" className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <DocumentTextIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <h3 className="font-semibold">Mobile App Docs</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Complete mobile app documentation with setup guides and features.</p>
            </Link>

            <Link to="/ketmail-mobile-integration" className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <CodeBracketIcon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                <h3 className="font-semibold">Integration Guide</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Technical integration guide with API examples and authentication flows.</p>
            </Link>

            <Link to="/api-docs" className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <ServerIcon className="w-6 h-6 text-green-600 dark:text-green-400" />
                <h3 className="font-semibold">API Documentation</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Complete API reference with endpoints, parameters, and response formats.</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 