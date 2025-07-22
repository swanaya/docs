import React from 'react';
import { Link } from '@remix-run/react';
import { ArrowLeftIcon, ShieldCheckIcon, UserIcon, BellIcon, CogIcon, DeviceTabletIcon, KeyIcon, LockClosedIcon, ExclamationTriangleIcon, CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/24/outline';

export default function AccountManagement() {
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
              <h1 className="text-2xl font-bold text-gray-900">Account Management</h1>
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
                    <a href="#overview" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 py-2">
                      <UserIcon className="w-4 h-4" />
                      <span>Overview</span>
                    </a>
                  </li>
                  <li>
                    <a href="#security" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 py-2">
                      <ShieldCheckIcon className="w-4 h-4" />
                      <span>Security</span>
                    </a>
                  </li>
                  <li>
                    <a href="#notifications" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 py-2">
                      <BellIcon className="w-4 h-4" />
                      <span>Notifications</span>
                    </a>
                  </li>
                  <li>
                    <a href="#devices" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 py-2">
                      <DeviceTabletIcon className="w-4 h-4" />
                      <span>Device Management</span>
                    </a>
                  </li>
                  <li>
                    <a href="#troubleshooting" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 py-2">
                      <CogIcon className="w-4 h-4" />
                      <span>Troubleshooting</span>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Overview Section */}
            <section id="overview" className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <UserIcon className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Account Overview</h2>
              </div>
              
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 mb-4">
                  The Ketivee Account Center provides comprehensive account management capabilities for all Ketivee services. 
                  This centralized platform allows you to manage your profile, security settings, notifications, and connected devices.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Key Features</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Unified account management</li>
                      <li>• Two-factor authentication</li>
                      <li>• Device session management</li>
                      <li>• Notification preferences</li>
                      <li>• Security monitoring</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Access Points</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <a href="https://account.ketivee.com" className="text-blue-600 hover:underline">account.ketivee.com</a></li>
                      <li>• From any Ketivee service</li>
                      <li>• Mobile responsive design</li>
                      <li>• 24/7 availability</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Security Section */}
            <section id="security" className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <ShieldCheckIcon className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Security Features</h2>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Two-Factor Authentication (2FA)</h3>
                  <p className="text-gray-600 mb-3">
                    Enhance your account security with two-factor authentication using authenticator apps like Google Authenticator or Authy.
                  </p>
                  <div className="bg-blue-50 rounded-lg p-3">
                    <h4 className="font-medium text-blue-900 mb-2">Setup Process:</h4>
                    <ol className="text-sm text-blue-800 space-y-1">
                      <li>1. Go to Security settings in your account</li>
                      <li>2. Click "Enable Two-Factor Authentication"</li>
                      <li>3. Scan the QR code with your authenticator app</li>
                      <li>4. Enter the 6-digit code to verify</li>
                      <li>5. Save your backup codes securely</li>
                    </ol>
                  </div>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Password Management</h3>
                  <p className="text-gray-600 mb-3">
                    Regularly update your password and ensure it meets security requirements.
                  </p>
                  <div className="bg-green-50 rounded-lg p-3">
                    <h4 className="font-medium text-green-900 mb-2">Password Requirements:</h4>
                    <ul className="text-sm text-green-800 space-y-1">
                      <li>• Minimum 8 characters</li>
                      <li>• At least one uppercase letter</li>
                      <li>• At least one lowercase letter</li>
                      <li>• At least one number</li>
                      <li>• At least one special character</li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Session Management</h3>
                  <p className="text-gray-600 mb-3">
                    Monitor and manage active sessions across all your devices.
                  </p>
                  <div className="bg-purple-50 rounded-lg p-3">
                    <h4 className="font-medium text-purple-900 mb-2">Features:</h4>
                    <ul className="text-sm text-purple-800 space-y-1">
                      <li>• View all active sessions</li>
                      <li>• Log out from specific devices</li>
                      <li>• Monitor login locations</li>
                      <li>• Set session timeouts</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Notifications Section */}
            <section id="notifications" className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <BellIcon className="w-6 h-6 text-yellow-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Notification Settings</h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-600">
                  Customize your notification preferences to stay informed about important account activities and security events.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Email Notifications</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Login alerts</li>
                      <li>• Security updates</li>
                      <li>• Account changes</li>
                      <li>• Service announcements</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Push Notifications</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Real-time alerts</li>
                      <li>• Device login notifications</li>
                      <li>• Security warnings</li>
                      <li>• Service updates</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Device Management Section */}
            <section id="devices" className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <DeviceTabletIcon className="w-6 h-6 text-indigo-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Device Management</h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-600">
                  Monitor and manage all devices that have access to your Ketivee account.
                </p>
                
                <div className="bg-blue-50 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-900 mb-2">Device Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-medium text-blue-800 mb-1">Tracked Information:</h4>
                      <ul className="text-blue-700 space-y-1">
                        <li>• Device type and model</li>
                        <li>• Operating system</li>
                        <li>• Browser information</li>
                        <li>• IP address</li>
                        <li>• Location (city/country)</li>
                        <li>• Last activity</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-800 mb-1">Management Actions:</h4>
                      <ul className="text-blue-700 space-y-1">
                        <li>• View device details</li>
                        <li>• Log out from device</li>
                        <li>• Mark as trusted</li>
                        <li>• Block suspicious devices</li>
                        <li>• Set device limits</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Troubleshooting Section */}
            <section id="troubleshooting" className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <CogIcon className="w-6 h-6 text-red-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Troubleshooting</h2>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-red-500 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Common Issues</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-red-50 rounded-lg p-4">
                      <h4 className="font-medium text-red-900 mb-2">Can't Access Account</h4>
                      <ul className="text-sm text-red-800 space-y-1">
                        <li>• Check your internet connection</li>
                        <li>• Clear browser cache and cookies</li>
                        <li>• Try a different browser</li>
                        <li>• Use password reset if needed</li>
                      </ul>
                    </div>
                    
                    <div className="bg-yellow-50 rounded-lg p-4">
                      <h4 className="font-medium text-yellow-900 mb-2">2FA Issues</h4>
                      <ul className="text-sm text-yellow-800 space-y-1">
                        <li>• Ensure your device time is correct</li>
                        <li>• Use backup codes if available</li>
                        <li>• Re-scan QR code if needed</li>
                        <li>• Contact support for recovery</li>
                      </ul>
                    </div>
                    
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-medium text-blue-900 mb-2">Device Management</h4>
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>• Log out from all devices</li>
                        <li>• Check for suspicious activity</li>
                        <li>• Update device information</li>
                        <li>• Review login history</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Getting Help</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">Support Channels:</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• <a href="https://support.ketivee.com" className="text-blue-600 hover:underline">Support Center</a></li>
                        <li>• Email: support@ketivee.com</li>
                        <li>• Live chat (available 24/7)</li>
                        <li>• Community forums</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">Emergency Contacts:</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Security issues: security@ketivee.com</li>
                        <li>• Account recovery: recovery@ketivee.com</li>
                        <li>• Technical support: tech@ketivee.com</li>
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