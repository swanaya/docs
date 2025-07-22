import React from "react";

export default function Authentication() {
  return (
    <main className="prose mx-auto p-8">
      <h1>Authentication</h1>
      <p>
        Secure your application by authenticating with your Ketivee AI API key. This page details how to obtain and use your key safely.
      </p>
      <section id="get-api-key">
        <h2>Get Your API Key</h2>
        <ol>
          <li>Sign in at <a href="https://auth.ketivee.com">auth.ketivee.com</a></li>
          <li>Navigate to your dashboard and select <b>API Keys</b></li>
          <li>Click <b>Generate New Key</b> and copy the key to your clipboard</li>
        </ol>
      </section>
      <section id="use-api-key">
        <h2>Using Your API Key</h2>
        <pre>
          <code>{`const ketivee = require('ketivee-ai-sdk');
const client = ketivee({ apiKey: 'YOUR_API_KEY' });`}</code>
        </pre>
        <p>
          Or set your API key as an environment variable:
        </p>
        <pre>
          <code>{`export KETIVEE_API_KEY=your-key-here`}</code>
        </pre>
      </section>
      <section id="security">
        <h2>Security Best Practices</h2>
        <ul>
          <li>Never share your API key publicly or commit it to version control.</li>
          <li>Rotate your keys regularly.</li>
          <li>Use environment variables to manage secrets securely.</li>
        </ul>
      </section>
    </main>
  );
}
