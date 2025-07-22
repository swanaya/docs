import React from "react";

export default function ApiTutorial() {
  return (
    <main className="prose mx-auto p-8">
      <h1>API Tutorials & Generator</h1>
      <p>This page provides guidance on building, exposing, and consuming APIs in Ketivee projects. You can also generate a sample API template server-side, and connect your project to it.</p>

      <section>
        <h2>What is an API?</h2>
        <p>An API (Application Programming Interface) allows your app to communicate with other apps or services. You can create your own API endpoints for your project, or use third-party APIs.</p>
      </section>

      <section>
        <h2>Server-side API Template</h2>
        <p>Click below to generate a sample API endpoint (REST/JSON) you can use in your project. The template will include a model, route, and handler.</p>
        {/* Placeholder for API generator UI */}
        <button className="btn btn-primary mt-2">Generate Example API</button>
      </section>

      <section>
        <h2>Consuming APIs</h2>
        <ul>
          <li>Use <code>fetch()</code> or <code>axios</code> in your React components to call your API endpoints.</li>
          <li>Handle authentication, errors, and data formatting as needed.</li>
        </ul>
      </section>

      <section>
        <h2>Sample API Call</h2>
        <pre>
          <code>{`fetch('/api/example')\n  .then(res => res.json())\n  .then(data => console.log(data));`}</code>
        </pre>
      </section>
    </main>
  );
}
