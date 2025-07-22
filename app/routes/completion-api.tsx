import React from "react";

export default function CompletionAPI() {
  return (
    <main className="prose mx-auto p-8">
      <h1>Completion API</h1>
      <p>
        The Completion API provides advanced text generation capabilities. Use it for content creation, summarization, and more.
      </p>
      <nav>
        <ul>
          <li><a href="#overview">Overview</a></li>
          <li><a href="#endpoint">Endpoint</a></li>
          <li><a href="#request">Request</a></li>
          <li><a href="#response">Response</a></li>
          <li><a href="#example">Example</a></li>
        </ul>
      </nav>
      <section id="overview">
        <h2>Overview</h2>
        <p>
          The Completion API generates text based on a prompt you provide. It's ideal for chatbots, content tools, and productivity apps.
        </p>
      </section>
      <section id="endpoint">
        <h2>Endpoint</h2>
        <pre>
          <code>{`POST https://api.ketivee.com/v1/completion`}</code>
        </pre>
      </section>
      <section id="request">
        <h2>Request</h2>
        <pre>
          <code>{`{
  "prompt": "Write a poem about AI.",
  "max_tokens": 64
}`}</code>
        </pre>
      </section>
      <section id="response">
        <h2>Response</h2>
        <pre>
          <code>{`{
  "data": {
    "completion": "AI, the spark of modern mind..."
  }
}`}</code>
        </pre>
      </section>
      <section id="example">
        <h2>Example</h2>
        <pre>
          <code>{`fetch('https://api.ketivee.com/v1/completion', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    prompt: 'Write a poem about AI.',
    max_tokens: 64
  })
})
  .then(res => res.json())
  .then(console.log);`}</code>
        </pre>
      </section>
    </main>
  );
}
