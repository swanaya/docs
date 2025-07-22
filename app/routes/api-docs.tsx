import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const AnimatedBlobs = () => (
  <div className="pointer-events-none select-none absolute inset-0 z-0">
    <div className="absolute -top-20 -left-20 w-[350px] h-[350px] bg-blue-400/30 rounded-full blur-3xl animate-pulse-slow" />
    <div className="absolute top-[60%] -left-24 w-[300px] h-[300px] bg-purple-400/30 rounded-full blur-3xl animate-pulse-slow2" />
    <div className="absolute -bottom-24 -right-20 w-[350px] h-[350px] bg-pink-400/30 rounded-full blur-3xl animate-pulse-slow" />
    <div className="absolute bottom-[20%] right-[10%] w-[200px] h-[200px] bg-cyan-400/20 rounded-full blur-2xl animate-pulse-slow2" />
  </div>
);

const codeBlock = (code: string, border: string = 'blue'): JSX.Element => (
  <pre className={`rounded-2xl bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-gray-100 text-sm p-5 overflow-x-auto mb-5 border border-${border}-400/30 dark:border-${border}-400/40 shadow-lg`}>
    <code>{code}</code>
  </pre>
);

export default function ApiDocs() {
  // Remove all animation and sectionRefs for stability
  // const mainRef = useRef(null);
  // const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

  // useEffect(() => {
  //   gsap.from(mainRef.current, { y: 60, opacity: 0, duration: 1, ease: 'power3.out' });
  //   gsap.from(sectionRefs.map(r => r.current), {
  //     y: 40, opacity: 0, duration: 0.7, stagger: 0.15, ease: 'power2.out', delay: 0.3
  //   });
  // }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-purple-200 to-blue-100 dark:from-gray-900 dark:via-blue-900 dark:to-gray-900 transition-colors duration-500 relative overflow-x-hidden">
      <AnimatedBlobs />
      <div className="min-h-screen flex flex-col items-center justify-center py-12 px-2 relative z-10">
        {/* Header with Theme Toggle */}
        <div className="w-full max-w-3xl mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 dark:text-blue-200 tracking-tight drop-shadow-lg">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">🔐 Ketivee Universal SSO Integration</span>
          </h1>
        </div>
        {/* Glass Container */}
        <div className="w-full max-w-3xl bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-8 md:p-14 border border-white/40 dark:border-gray-800 z-10">
          {/* Integration Overview */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-200 mb-3 flex items-center gap-2">📋 Integration Overview</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-3 text-lg">This example demonstrates how to integrate Ketivee Universal SSO into any website or application. The system provides:</p>
            <ul className="list-disc pl-7 text-gray-600 dark:text-gray-400 space-y-1 text-base">
              <li><b>Auto-detection:</b> Automatically detects if a user has an existing Ketivee account</li>
              <li><b>One-click sign-in:</b> Instant authentication for previously connected apps</li>
              <li><b>Universal access:</b> Works across all Ketivee subdomains and partner sites</li>
              <li><b>Mobile support:</b> Seamless authentication on mobile devices</li>
            </ul>
          </section>
          {/* Quick Integration */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-200 mb-3 flex items-center gap-2">🚀 Quick Integration (Auto-initialization)</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-3 text-base">Add this script tag to your HTML for automatic initialization:</p>
            {codeBlock(`<script 
    src="https://api.ketivee.com/sdk/universal/ketivee-sso.js"
    data-ketivee-app-id="YOUR_APP_ID"
    data-ketivee-api-url="https://api.ketivee.com"
    data-ketivee-redirect-url="https://your-app.com/dashboard"></script>`, 'blue')}
            <div className="flex justify-center mb-2">
              <button className="px-7 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-xl transition-colors text-lg">Sign in with Ketivee (Auto)</button>
            </div>
          </section>
          {/* Manual Integration */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-200 mb-3 flex items-center gap-2">⚙️ Manual Integration (Programmatic)</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-3 text-base">For more control, initialize the SDK programmatically:</p>
            {codeBlock(`// Initialize Ketivee SSO
const ketiveeSSO = new KetiveeSSO({
    appId: 'YOUR_APP_ID',
    apiUrl: 'https://api.ketivee.com',
    redirectUrl: 'https://your-app.com/dashboard',
    onLogin: (data) => {
        console.log('User logged in:', data.user);
        showUserInfo(data.user);
    },
    onLogout: () => {
        console.log('User logged out');
        hideUserInfo();
    },
    onError: (error) => {
        console.error('SSO Error:', error);
        showStatus('Error: ' + error.message, 'error');
    }
});

// Create sign-in button
const signInBtn = ketiveeSSO.createSignInButton({
    text: 'Sign in with Ketivee',
    className: 'custom-signin-btn',
    style: 'background: #667eea; color: white; padding: 12px 24px; border: none; border-radius: 8px; cursor: pointer;'
});`, 'purple')}
            <div className="flex justify-center mb-2">
              <button className="px-7 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold shadow-xl transition-colors text-lg">Sign in with Ketivee (Manual)</button>
            </div>
          </section>
          {/* Mobile App Integration */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-200 mb-3 flex items-center gap-2">📱 Mobile App Integration</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-3 text-base">For mobile applications, use the API endpoints directly:</p>
            {codeBlock(`// Check if user exists
const userStatus = await fetch('https://api.ketivee.com/api/sso/check', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        email: 'user@example.com',
        appId: 'YOUR_APP_ID',
        redirectUrl: 'your-app://callback'
    })
});

// Authenticate user
const authResult = await fetch('https://api.ketivee.com/api/sso/authenticate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        ssoToken: userStatus.ssoToken,
        password: 'user_password', // if required
        twoFactorCode: '123456' // if 2FA enabled
    })
});`, 'cyan')}
          </section>
          {/* Universal Authentication Flow */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-200 mb-3 flex items-center gap-2">🔗 Universal Authentication Flow</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-3 text-base">The system automatically handles different authentication scenarios:</p>
            <ol className="list-decimal pl-7 text-gray-600 dark:text-gray-400 space-y-1 text-base">
              <li><b>New User:</b> Redirects to registration with pre-filled email</li>
              <li><b>Existing User (First Time):</b> Prompts for password and 2FA if enabled</li>
              <li><b>Connected App:</b> One-click instant authentication</li>
              <li><b>Mobile App:</b> Deep link integration for seamless flow</li>
            </ol>
          </section>
        </div>
      </div>

    </div>
  );
} 