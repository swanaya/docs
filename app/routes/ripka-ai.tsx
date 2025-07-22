import React from "react";

export default function RipkaAI() {
  return (
    <main className="prose mx-auto p-8">
      <h1>Ripka AI Model</h1>
      <p>
        Ripka AI is designed for enterprise-grade reasoning and multi-step workflows.
      </p>
      <nav>
        <ul>
          <li><a href="#overview">Overview</a></li>
          <li><a href="#features">Key Features</a></li>
          <li><a href="#usage">Usage</a></li>
          <li><a href="#sample-code">Sample Code</a></li>
        </ul>
      </nav>
      <section id="overview">
        <h2>Overview</h2>
        <p>
          Ripka AI is ideal for complex question answering, workflow automation, and enterprise integrations.
        </p>
      </section>
      <section id="features">
        <h2>Key Features</h2>
        <ul>
          <li>Multi-step reasoning</li>
          <li>Enterprise security</li>
          <li>Integrates with business systems</li>
        </ul>
      </section>
      <section id="usage">
        <h2>Usage</h2>
        <pre>
          <code>{`const response = await client.chat.send({
  message: "Generate a project report.",
  model: 'ripka'
});`}</code>
        </pre>
      </section>
      <section id="sample-code">
        <h2>Sample Code</h2>
        <pre>
          <code>{`fetch('https://api.ketivee.com/v1/chat', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    message: 'Generate a project report.',
    model: 'ripka'
  })
})
  .then(res => res.json())
  .then(console.log);`}</code>
        </pre>
      </section>
    </main>
  );
}
