import React from "react";

export default function ChatAPI() {
  return (
    <main className="prose mx-auto p-8">
      <h1>Chat API</h1>
      <p>
        The Chat API lets you interact with Ketivee's conversational AI models. Use it to send and receive messages in real time.
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
          The Chat API provides a RESTful interface to Ketivee's conversational models. Authenticate using your API key.
        </p>
      </section>
      <section id="endpoint">
        <h2>Endpoint</h2>
        <pre>
          <code>{`POST https://api.ketivee.com/v1/chat`}</code>
        </pre>
      </section>
      <section id="request">
        <h2>Request</h2>
        <pre>
          <code>{`{
  "message": "Hello, Ketivee!",
  "session_id": "your-session-id"
}`}</code>
        </pre>
      </section>
      <section id="response">
        <h2>Response</h2>
        <pre>
          <code>{`{
  "data": {
    "reply": "Hello! How can I help you today?",
    "session_id": "your-session-id"
  }
}`}</code>
        </pre>
      </section>
      <section id="example">
        <h2>Example</h2>
        <pre>
          <code>{`fetch('https://api.ketivee.com/v1/chat', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    message: 'Hello, Ketivee!',
    session_id: 'test-session-1'
  })
})
  .then(res => res.json())
  .then(console.log);`}</code>
        </pre>
      </section>
    </main>
  );
}
