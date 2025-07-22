import React from "react";

export default function Installation() {
  return (
    <main className="prose mx-auto p-8">
      <h1>Installation</h1>
      <p>
        Follow these steps to install Ketivee AI and its SDK on your system.
      </p>
      <section id="prerequisites">
        <h2>Prerequisites</h2>
        <ul>
          <li>Node.js v18 or later</li>
          <li>npm or yarn</li>
        </ul>
      </section>
      <section id="install-sdk">
        <h2>Install the SDK</h2>
        <pre>
          <code>{`npm install ketivee-ai-sdk`}</code>
        </pre>
        <p>
          Or, using yarn:
        </p>
        <pre>
          <code>{`yarn add ketivee-ai-sdk`}</code>
        </pre>
      </section>
      <section id="verify-install">
        <h2>Verify Installation</h2>
        <pre>
          <code>{`npx ketivee-ai-sdk --version`}</code>
        </pre>
        <p>
          You should see the version number printed in your terminal.
        </p>
      </section>
      <section id="troubleshooting">
        <h2>Troubleshooting</h2>
        <ul>
          <li>Ensure Node.js is installed and available in your PATH.</li>
          <li>If you see permission errors, try running the install command with <code>sudo</code> (Linux/Mac) or as Administrator (Windows).</li>
        </ul>
      </section>
    </main>
  );
}
