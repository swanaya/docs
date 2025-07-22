import React from "react";

export default function YugAI() {
  return (
    <main className="prose mx-auto p-8">
      <h1>Yug AI Model</h1>
      <p>
        Yug AI is optimized for fast, lightweight inference and real-time applications.
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
          Yug AI is ideal for mobile, edge, and embedded deployments. It delivers high performance with minimal resource consumption.
        </p>
      </section>
      <section id="features">
        <h2>Key Features</h2>
        <ul>
          <li>Low latency responses</li>
          <li>Small memory footprint</li>
          <li>Supports streaming output</li>
        </ul>
      </section>
      <section id="usage">
        <h2>Usage</h2>
        <pre>
          <code>{`const response = await client.chat.send({
  message: "Summarize this text.",
  model: 'yug'
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
    message: 'Summarize this text.',
    model: 'yug'
  })
})
  .then(res => res.json())
  .then(console.log);`}</code>
        </pre>
      </section>
    </main>
  );
}
