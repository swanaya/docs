import React from "react";

export default function Mixing() {
  return (
    <main className="prose mx-auto p-8">
      <h1>Mixing</h1>
      <p>
        Mix your tracks with Ketivee's AI-powered mixing tools and guidance.
      </p>
      <nav>
        <ul>
          <li><a href="#overview">Overview</a></li>
          <li><a href="#workflow">Workflow</a></li>
          <li><a href="#tools">Tools</a></li>
          <li><a href="#sample-code">Sample Code</a></li>
        </ul>
      </nav>
      <section id="overview">
        <h2>Overview</h2>
        <p>
          Ketivee provides automated mixing suggestions and real-time feedback.
        </p>
      </section>
      <section id="workflow">
        <h2>Workflow</h2>
        <ol>
          <li>Upload your stems or tracks</li>
          <li>Analyze mix balance with AI</li>
          <li>Apply recommended EQ, compression, and effects</li>
        </ol>
      </section>
      <section id="tools">
        <h2>Tools</h2>
        <ul>
          <li>AI Mixer (API)</li>
          <li>Mix Analysis Dashboard</li>
        </ul>
      </section>
      <section id="sample-code">
        <h2>Sample Code</h2>
        <pre>
          <code>{`const response = await client.music.mix({
  tracks: ['vocals.wav', 'drums.wav'],
});`}</code>
        </pre>
      </section>
    </main>
  );
}
