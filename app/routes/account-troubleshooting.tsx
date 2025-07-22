import React from 'react';
import { Link } from '@remix-run/react';
import { ArrowLeftIcon, ExclamationTriangleIcon, CheckCircleIcon, InformationCircleIcon, XCircleIcon, QuestionMarkCircleIcon, ClockIcon, WrenchScrewdriverIcon, ShieldCheckIcon, UserIcon, LockClosedIcon } from '@heroicons/react/24/outline';

export default function AccountTroubleshooting() {
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
              <h1 className="text-2xl font-bold text-gray-900">Account Troubleshooting</h1>
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
                    <a href="#login-issues" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 py-2">
                      <UserIcon className="w-4 h-4" />
                      <span>Login Issues</span>
                    </a>
                  </li>
                  <li>
                    <a href="#password-problems" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 py-2">
                      <LockClosedIcon className="w-4 h-4" />
                      <span>Password Problems</span>
                    </a>
                  </li>
                  <li>
                    <a href="#2fa-issues" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 py-2">
                      <ShieldCheckIcon className="w-4 h-4" />
                      <span>2FA Issues</span>
                    </a>
                  </li>
                  <li>
                    <a href="#device-problems" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 py-2">
                      <WrenchScrewdriverIcon className="w-4 h-4" />
                      <span>Device Problems</span>
                    </a>
                  </li>
                  <li>
                    <a href="#account-recovery" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 py-2">
                      <QuestionMarkCircleIcon className="w-4 h-4" />
                      <span>Account Recovery</span>
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
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <QuestionMarkCircleIcon className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Account Troubleshooting Guide</h2>
              </div>
              
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 mb-4">
                  Having trouble with your Ketivee account? This comprehensive troubleshooting guide covers the most common issues 
                  and provides step-by-step solutions to get you back up and running quickly.
                </p>
                
                <div className="bg-yellow-50 rounded-lg p-4 mt-4">
                  <h3 className="font-semibold text-yellow-900 mb-2">Before You Start</h3>
                  <ul className="text-sm text-yellow-800 space-y-1">
                    <li>• Check your internet connection</li>
                    <li>• Clear browser cache and cookies</li>
                    <li>• Try a different browser</li>
                    <li>• Disable browser extensions temporarily</li>
                    <li>• Check if the service is operational</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Login Issues */}
            <section id="login-issues" className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <UserIcon className="w-6 h-6 text-red-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Login Issues</h2>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-red-500 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Can't Log In</h3>
                  <div className="bg-red-50 rounded-lg p-4">
                    <h4 className="font-medium text-red-900 mb-2">Step-by-Step Solution:</h4>
                    <ol className="text-sm text-red-800 space-y-1">
                      <li>1. Verify your email address is correct</li>
                      <li>2. Check if Caps Lock is enabled</li>
                      <li>3. Try typing your password in a text editor first</li>
                      <li>4. Use the "Forgot Password" feature</li>
                      <li>5. Check if your account is locked</li>
                      <li>6. Contact support if issues persist</li>
                    </ol>
                  </div>
                </div>

                <div className="border-l-4 border-yellow-500 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Account Locked</h3>
                  <div className="bg-yellow-50 rounded-lg p-4">
                    <h4 className="font-medium text-yellow-900 mb-2">Common Causes:</h4>
                    <ul className="text-sm text-yellow-800 space-y-1">
                      <li>• Too many failed login attempts</li>
                      <li>• Suspicious activity detected</li>
                      <li>• Password expired</li>
                      <li>• Account security review required</li>
                    </ul>
                    <h4 className="font-medium text-yellow-900 mb-2 mt-3">Resolution:</h4>
                    <ul className="text-sm text-yellow-800 space-y-1">
                      <li>• Wait 15-30 minutes before trying again</li>
                      <li>• Use password reset if available</li>
                      <li>• Contact support for manual unlock</li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Session Expired</h3>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-medium text-blue-900 mb-2">What to do:</h4>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• Simply log in again with your credentials</li>
                      <li>• Your data and settings are preserved</li>
                      <li>• No action needed for security</li>
                      <li>• Sessions expire after 24 hours of inactivity</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Password Problems */}
            <section id="password-problems" className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <LockClosedIcon className="w-6 h-6 text-orange-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Password Problems</h2>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Forgot Password</h3>
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-medium text-green-900 mb-2">Reset Process:</h4>
                    <ol className="text-sm text-green-800 space-y-1">
                      <li>1. Click "Forgot Password" on login page</li>
                      <li>2. Enter your email address</li>
                      <li>3. Check your email for reset link</li>
                      <li>4. Click the link (valid for 1 hour)</li>
                      <li>5. Create a new strong password</li>
                      <li>6. Log in with new password</li>
                    </ol>
                  </div>
                </div>

                <div className="border-l-4 border-red-500 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Password Reset Not Working</h3>
                  <div className="bg-red-50 rounded-lg p-4">
                    <h4 className="font-medium text-red-900 mb-2">Troubleshooting:</h4>
                    <ul className="text-sm text-red-800 space-y-1">
                      <li>• Check spam/junk folder</li>
                      <li>• Verify email address is correct</li>
                      <li>• Wait 5-10 minutes for email</li>
                      <li>• Try requesting reset again</li>
                      <li>• Contact support if no email received</li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Password Requirements</h3>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-medium text-blue-900 mb-2">Must Include:</h4>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• At least 8 characters</li>
                      <li>• One uppercase letter</li>
                      <li>• One lowercase letter</li>
                      <li>• One number</li>
                      <li>• One special character</li>
                      <li>• Cannot be a common password</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* 2FA Issues */}
            <section id="2fa-issues" className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <ShieldCheckIcon className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Two-Factor Authentication Issues</h2>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Wrong 2FA Code</h3>
                  <div className="bg-yellow-50 rounded-lg p-4">
                    <h4 className="font-medium text-yellow-900 mb-2">Common Causes:</h4>
                    <ul className="text-sm text-yellow-800 space-y-1">
                      <li>• Device time is incorrect</li>
                      <li>• Code expired (30-second window)</li>
                      <li>• Wrong authenticator app</li>
                      <li>• App not synced properly</li>
                    </ul>
                    <h4 className="font-medium text-yellow-900 mb-2 mt-3">Solutions:</h4>
                    <ul className="text-sm text-yellow-800 space-y-1">
                      <li>• Sync your device time with internet</li>
                      <li>• Wait for a new code (30 seconds)</li>
                      <li>• Use backup codes if available</li>
                      <li>• Re-scan QR code if needed</li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-4 border-red-500 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Lost 2FA Device</h3>
                  <div className="bg-red-50 rounded-lg p-4">
                    <h4 className="font-medium text-red-900 mb-2">Recovery Options:</h4>
                    <ul className="text-sm text-red-800 space-y-1">
                      <li>• Use backup codes (if saved)</li>
                      <li>• Contact support for manual recovery</li>
                      <li>• Provide identity verification</li>
                      <li>• May take 24-48 hours</li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Setting Up 2FA</h3>
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-medium text-green-900 mb-2">Step-by-Step:</h4>
                    <ol className="text-sm text-green-800 space-y-1">
                      <li>1. Go to Security settings</li>
                      <li>2. Click "Enable Two-Factor Authentication"</li>
                      <li>3. Download an authenticator app</li>
                      <li>4. Scan the QR code</li>
                      <li>5. Enter the 6-digit code</li>
                      <li>6. Save backup codes securely</li>
                    </ol>
                  </div>
                </div>
              </div>
            </section>

            {/* Device Problems */}
            <section id="device-problems" className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <WrenchScrewdriverIcon className="w-6 h-6 text-indigo-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Device Management Issues</h2>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Can't Log Out Device</h3>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-medium text-blue-900 mb-2">Solutions:</h4>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• Try logging out from all devices</li>
                      <li>• Change your password (logs out all devices)</li>
                      <li>• Wait a few minutes and try again</li>
                      <li>• Contact support if persistent</li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-4 border-yellow-500 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Suspicious Device Activity</h3>
                  <div className="bg-yellow-50 rounded-lg p-4">
                    <h4 className="font-medium text-yellow-900 mb-2">What to do:</h4>
                    <ul className="text-sm text-yellow-800 space-y-1">
                      <li>• Immediately change your password</li>
                      <li>• Log out from all devices</li>
                      <li>• Review recent login activity</li>
                      <li>• Enable 2FA if not already enabled</li>
                      <li>• Contact support if you didn't make the login</li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Device Not Showing</h3>
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-medium text-green-900 mb-2">Possible Reasons:</h4>
                    <ul className="text-sm text-green-800 space-y-1">
                      <li>• Device logged out automatically</li>
                      <li>• Session expired</li>
                      <li>• Device was cleared from list</li>
                      <li>• Using incognito/private browsing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Account Recovery */}
            <section id="account-recovery" className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <QuestionMarkCircleIcon className="w-6 h-6 text-red-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Account Recovery</h2>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-red-500 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Completely Locked Out</h3>
                  <div className="bg-red-50 rounded-lg p-4">
                    <h4 className="font-medium text-red-900 mb-2">Recovery Process:</h4>
                    <ol className="text-sm text-red-800 space-y-1">
                      <li>1. Contact support immediately</li>
                      <li>2. Provide proof of identity</li>
                      <li>3. Answer security questions</li>
                      <li>4. Provide account details</li>
                      <li>5. Wait for manual review</li>
                      <li>6. Follow recovery instructions</li>
                    </ol>
                  </div>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Identity Verification</h3>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-medium text-blue-900 mb-2">Required Information:</h4>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• Email address associated with account</li>
                      <li>• Full name on account</li>
                      <li>• Recent login locations</li>
                      <li>• Account creation date (if known)</li>
                      <li>• Government-issued ID (if requested)</li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Prevention Tips</h3>
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-medium text-green-900 mb-2">Keep Your Account Safe:</h4>
                    <ul className="text-sm text-green-800 space-y-1">
                      <li>• Enable two-factor authentication</li>
                      <li>• Use a strong, unique password</li>
                      <li>• Keep recovery email updated</li>
                      <li>• Save backup codes securely</li>
                      <li>• Monitor account activity regularly</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <InformationCircleIcon className="w-6 h-6 text-gray-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Getting Help</h2>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-900 mb-2">Support Channels</h3>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• <a href="https://support.ketivee.com" className="text-blue-600 hover:underline">Support Center</a></li>
                      <li>• Email: support@ketivee.com</li>
                      <li>• Live Chat: Available 24/7</li>
                      <li>• Phone: +1-800-KETIVEE</li>
                      <li>• Community Forums</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-4">
                    <h3 className="font-semibold text-green-900 mb-2">Response Times</h3>
                    <ul className="text-sm text-green-800 space-y-1">
                      <li>• Live Chat: Immediate</li>
                      <li>• Email: 2-4 hours</li>
                      <li>• Phone: 5-10 minutes</li>
                      <li>• Emergency: 1-2 hours</li>
                      <li>• Account Recovery: 24-48 hours</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-yellow-50 rounded-lg p-4">
                  <h3 className="font-semibold text-yellow-900 mb-2">Before Contacting Support</h3>
                  <ul className="text-sm text-yellow-800 space-y-1">
                    <li>• Try the troubleshooting steps above</li>
                    <li>• Have your account information ready</li>
                    <li>• Note any error messages</li>
                    <li>• Describe what you were doing when the issue occurred</li>
                    <li>• Include browser and device information</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
} 