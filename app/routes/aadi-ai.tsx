import React from "react";

export default function AAdiAI() {
  return (
    <main className="prose mx-auto p-8">
      <h1>AAdi AI Model</h1>
      <p>
        AAdi AI is Ketivee's advanced conversational model, designed for high-accuracy dialogue and contextual understanding.
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
          AAdi AI powers chatbots, virtual assistants, and enterprise knowledge agents. It supports multi-turn conversations and contextual memory.
        </p>
      </section>
      <section id="features">
        <h2>Key Features</h2>
        <ul>
          <li>Natural language understanding</li>
          <li>Contextual memory</li>
          <li>Fast response time</li>
          <li>Customizable for different domains</li>
        </ul>
      </section>
      <section id="usage">
        <h2>Usage</h2>
        <p>
          To use AAdi AI, specify <code>model: 'aadi'</code> in your API request:
        </p>
        <pre>
          <code>{`const response = await client.chat.send({
  message: "What's the weather today?",
  model: 'aadi'
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
    message: 'Tell me a joke!',
    model: 'aadi'
  })
})
  .then(res => res.json())
  .then(console.log);`}</code>
        </pre>
      </section>
    </main>
  );
}
