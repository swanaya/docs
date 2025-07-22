import React from "react";

export default function QuickStart() {
  return (
    <main className="prose mx-auto p-8">
      <h1>Quick Start</h1>
      <p>
        Get started with Ketivee AI in minutes. This guide will help you set up your environment, authenticate, and run your first API call.
      </p>
      <nav>
        <ul>
          <li><a href="#prerequisites">Prerequisites</a></li>
          <li><a href="#installation">Installation</a></li>
          <li><a href="#authentication">Authentication</a></li>
          <li><a href="#first-api-call">Your First API Call</a></li>
        </ul>
      </nav>
      <section id="prerequisites">
        <h2>Prerequisites</h2>
        <ul>
          <li>Node.js v18 or later</li>
          <li>npm or yarn</li>
          <li>A Ketivee AI account</li>
        </ul>
      </section>
      <section id="installation">
        <h2>Installation</h2>
        <pre>
          <code>{`npm install ketivee-ai-sdk`}</code>
        </pre>
      </section>
      <section id="authentication">
        <h2>Authentication</h2>
        <p>
          Sign up at <a href="https://auth.ketivee.com">auth.ketivee.com</a> and obtain your API key from your dashboard.
        </p>
        <pre>
          <code>{`const ketivee = require('ketivee-ai-sdk');
const client = ketivee({ apiKey: 'YOUR_API_KEY' });`}</code>
        </pre>
      </section>
      <section id="first-api-call">
        <h2>Your First API Call</h2>
        <pre>
          <code>{`const response = await client.chat.send({
  message: "Hello, Ketivee!"
});
console.log(response.data);`}</code>
        </pre>
      </section>
      <section>
        <h2>Next Steps</h2>
        <ul>
          <li>Read the <a href="/api-docs">API Reference</a></li>
          <li>Explore <a href="/ai-models">AI Models</a></li>
        </ul>
      </section>
    </main>
  );
}
