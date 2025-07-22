import { Link } from "@remix-run/react";
import { 
  CodeBracketIcon,
  ServerIcon,
  CircleStackIcon,
  KeyIcon,
  ShieldCheckIcon,
  CommandLineIcon,
  DocumentTextIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  GlobeAltIcon,
  LockClosedIcon,
  UserIcon,
  EnvelopeIcon,
  CogIcon
} from '@heroicons/react/24/outline';

export default function KetMailMobileIntegration() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <CodeBracketIcon className="w-12 h-12" />
              <h1 className="text-5xl font-bold">KetMail Mobile Integration Guide</h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Technical documentation for integrating with the KetMail mobile app system. Learn how to connect your applications with Auth2.0 and KetMail backend APIs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#api-overview" 
                className="bg-white text-indigo-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
              >
                API Overview
                <ArrowRightIcon className="w-5 h-5" />
              </a>
              <a 
                href="#authentication" 
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-900 transition-colors"
              >
                Authentication
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* API Overview Section */}
      <section id="api-overview" className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">API Overview</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Complete API reference for KetMail mobile integration</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Auth2.0 API */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <KeyIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold">Auth2.0 API</h3>
              </div>
              
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <div className="font-mono text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    Base URL: http://localhost:3000
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <div className="font-mono text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded">
                      POST /api/auth/login
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">User authentication with device tracking</p>
                  </div>
                  
                  <div>
                    <div className="font-mono text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded">
                      POST /api/auth/register
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">User registration with email verification</p>
                  </div>
                  
                  <div>
                    <div className="font-mono text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded">
                      POST /api/auth/verify-2fa
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Two-factor authentication verification</p>
                  </div>
                  
                  <div>
                    <div className="font-mono text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded">
                      GET /api/auth/me
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Get current user profile</p>
                  </div>
                  
                  <div>
                    <div className="font-mono text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded">
                      POST /api/auth/refresh
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Refresh authentication token</p>
                  </div>
                </div>
              </div>
            </div>

            {/* KetMail API */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                  <CircleStackIcon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold">KetMail API</h3>
              </div>
              
              <div className="space-y-4">
                <div className="border-l-4 border-purple-500 pl-4">
                  <div className="font-mono text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    Base URL: http://localhost:5000
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <div className="font-mono text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded">
                      POST /api/email-accounts
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Create new email account</p>
                  </div>
                  
                  <div>
                    <div className="font-mono text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded">
                      GET /api/email-accounts
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">List user's email accounts</p>
                  </div>
                  
                  <div>
                    <div className="font-mono text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded">
                      PUT /api/email-accounts/:id
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Update email account settings</p>
                  </div>
                  
                  <div>
                    <div className="font-mono text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded">
                      DELETE /api/email-accounts/:id
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Delete email account</p>
                  </div>
                  
                  <div>
                    <div className="font-mono text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded">
                      GET /api/domains
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Get available domains</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Authentication Section */}
      <section id="authentication" className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Authentication Flow</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Complete authentication implementation guide</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Login Implementation */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <UserIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold">Login Implementation</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm mb-2">Request Format</h4>
                  <div className="bg-gray-100 dark:bg-gray-600 rounded p-3 font-mono text-sm">
                    <div>Content-Type: multipart/form-data</div>
                    <div>email: user@example.com</div>
                    <div>password: userpassword</div>
                    <div>deviceData: {"{device info}"}</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-sm mb-2">Response Format</h4>
                  <div className="bg-gray-100 dark:bg-gray-600 rounded p-3 font-mono text-sm">
                    <div>{"{"}</div>
                    <div>  "success": true,</div>
                    <div>  "user": {"{user object}"},</div>
                    <div>  "token": "jwt_token",</div>
                    <div>  "requires2FA": false</div>
                    <div>{"}"}</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-sm mb-2">Error Handling</h4>
                  <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>• 401: Invalid credentials</li>
                    <li>• 423: Account locked/suspended</li>
                    <li>• 401: Email verification required</li>
                    <li>• 423: 2FA required</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Registration Implementation */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                  <UserIcon className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold">Registration Implementation</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm mb-2">Request Format</h4>
                  <div className="bg-gray-100 dark:bg-gray-600 rounded p-3 font-mono text-sm">
                    <div>Content-Type: multipart/form-data</div>
                    <div>firstName: John</div>
                    <div>lastName: Doe</div>
                    <div>email: john@example.com</div>
                    <div>password: securepassword</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-sm mb-2">Response Format</h4>
                  <div className="bg-gray-100 dark:bg-gray-600 rounded p-3 font-mono text-sm">
                    <div>{"{"}</div>
                    <div>  "success": true,</div>
                    <div>  "requiresEmailVerification": true,</div>
                    <div>  "user": {"{user object}"},</div>
                    <div>  "message": "Check email for verification"</div>
                    <div>{"}"}</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-sm mb-2">Email Verification</h4>
                  <div className="bg-gray-100 dark:bg-gray-600 rounded p-3 font-mono text-sm">
                    <div>POST /api/auth/register</div>
                    <div>verifyEmail: "verification_token"</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Email Account Management Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Email Account Management</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Complete guide for managing email accounts via API</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Create Email Account */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                  <EnvelopeIcon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold">Create Email Account</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm mb-2">Request</h4>
                  <div className="bg-gray-100 dark:bg-gray-700 rounded p-3 font-mono text-sm">
                    <div>POST /api/email-accounts</div>
                    <div>Authorization: Bearer {token}</div>
                    <div>{"{"}</div>
                    <div>  "username": "john.doe",</div>
                    <div>  "password": "emailpassword",</div>
                    <div>  "domain": "ketmail.in"</div>
                    <div>{"}"}</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-sm mb-2">Response</h4>
                  <div className="bg-gray-100 dark:bg-gray-700 rounded p-3 font-mono text-sm">
                    <div>{"{"}</div>
                    <div>  "success": true,</div>
                    <div>  "emailAccount": {"{account object}"},</div>
                    <div>  "message": "Account created successfully"</div>
                    <div>{"}"}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Manage Email Accounts */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <CogIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold">Manage Email Accounts</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm mb-2">List Accounts</h4>
                  <div className="bg-gray-100 dark:bg-gray-700 rounded p-3 font-mono text-sm">
                    <div>GET /api/email-accounts</div>
                    <div>Authorization: Bearer {token}</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-sm mb-2">Update Account</h4>
                  <div className="bg-gray-100 dark:bg-gray-700 rounded p-3 font-mono text-sm">
                    <div>PUT /api/email-accounts/:id</div>
                    <div>{"{"}</div>
                    <div>  "settings": {"{settings object}"}</div>
                    <div>{"}"}</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-sm mb-2">Delete Account</h4>
                  <div className="bg-gray-100 dark:bg-gray-700 rounded p-3 font-mono text-sm">
                    <div>DELETE /api/email-accounts/:id</div>
                    <div>Authorization: Bearer {token}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Best Practices Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Security Best Practices</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Essential security guidelines for integration</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center">
                  <ShieldCheckIcon className="w-5 h-5 text-red-600 dark:text-red-400" />
                </div>
                <h3 className="text-xl font-semibold">Token Management</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-green-500" />
                  Store tokens securely
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-green-500" />
                  Implement token refresh
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-green-500" />
                  Handle token expiration
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-green-500" />
                  Clear tokens on logout
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center">
                  <LockClosedIcon className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                </div>
                <h3 className="text-xl font-semibold">Data Protection</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-green-500" />
                  Use HTTPS only
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-green-500" />
                  Encrypt sensitive data
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-green-500" />
                  Validate all inputs
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-green-500" />
                  Implement rate limiting
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                  <GlobeAltIcon className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold">Error Handling</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-green-500" />
                  Handle network errors
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-green-500" />
                  Implement retry logic
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-green-500" />
                  Log security events
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-green-500" />
                  Monitor API usage
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Code Examples Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Code Examples</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Ready-to-use code examples for integration</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* JavaScript/TypeScript */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center">
                  <CodeBracketIcon className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                </div>
                <h3 className="text-xl font-semibold">JavaScript/TypeScript</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm mb-2">Authentication Service</h4>
                  <div className="bg-gray-100 dark:bg-gray-700 rounded p-3 font-mono text-sm overflow-x-auto">
                    <div>class AuthService {"{"}</div>
                    <div>  static async login(email, password) {"{"}</div>
                    <div>    const formData = new FormData();</div>
                    <div>    formData.append('email', email);</div>
                    <div>    formData.append('password', password);</div>
                    <div>    </div>
                    <div>    const response = await fetch('/api/auth/login', {"{"}</div>
                    <div>      method: 'POST',</div>
                    <div>      body: formData</div>
                    <div>    {"}"});</div>
                    <div>    </div>
                    <div>    return response.json();</div>
                    <div>  {"}"}</div>
                    <div>{"}"}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* React Native */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <DevicePhoneMobileIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold">React Native</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm mb-2">Email Service</h4>
                  <div className="bg-gray-100 dark:bg-gray-700 rounded p-3 font-mono text-sm overflow-x-auto">
                    <div>class EmailService {"{"}</div>
                    <div>  static async createAccount(username, password) {"{"}</div>
                    <div>    const response = await fetch('/api/email-accounts', {"{"}</div>
                    <div>      method: 'POST',</div>
                    <div>      headers: {"{"}</div>
                    <div>        'Authorization': `Bearer ${token}`,</div>
                    <div>        'Content-Type': 'application/json'</div>
                    <div>      {"}"},</div>
                    <div>      body: JSON.stringify({"{"}</div>
                    <div>        username,</div>
                    <div>        password,</div>
                    <div>        domain: 'ketmail.in'</div>
                    <div>      {"}"})</div>
                    <div>    {"}"});</div>
                    <div>    </div>
                    <div>    return response.json();</div>
                    <div>  {"}"}</div>
                    <div>{"}"}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Integrate?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Start integrating with the KetMail mobile app system today. Get access to enterprise-grade email services with comprehensive security.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/ketmail-mobile" 
              className="bg-white text-indigo-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
            >
              View Mobile App Docs
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
            <Link 
              to="/api-docs" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-900 transition-colors"
            >
              API Documentation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 