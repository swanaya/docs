import React from "react";

export default function EmbeddingAPI() {
  return (
    <main className="prose mx-auto p-8">
      <h1>Embedding API</h1>
      <p>
        The Embedding API generates vector representations of text for search, clustering, and semantic analysis.
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
          Use the Embedding API to convert text into high-dimensional vectors for similarity search and machine learning tasks.
        </p>
      </section>
      <section id="endpoint">
        <h2>Endpoint</h2>
        <pre>
          <code>{`POST https://api.ketivee.com/v1/embedding`}</code>
        </pre>
      </section>
      <section id="request">
        <h2>Request</h2>
        <pre>
          <code>{`{
  "input": "Find me similar documents.",
  "model": "embedding-v1"
}`}</code>
        </pre>
      </section>
      <section id="response">
        <h2>Response</h2>
        <pre>
          <code>{`{
  "data": {
    "embedding": [0.12, 0.98, ...]
  }
}`}</code>
        </pre>
      </section>
      <section id="example">
        <h2>Example</h2>
        <pre>
          <code>{`fetch('https://api.ketivee.com/v1/embedding', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    input: 'Find me similar documents.',
    model: 'embedding-v1'
  })
})
  .then(res => res.json())
  .then(console.log);`}</code>
        </pre>
      </section>
    </main>
  );
}
