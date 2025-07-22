import React from "react";

export default function Composition() {
  return (
    <main className="prose mx-auto p-8">
      <h1>Composition</h1>
      <p>
        Compose music using Ketivee's AI-powered composition tools.
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
          Ketivee helps you generate melodies, harmonies, and arrangements with AI.
        </p>
      </section>
      <section id="workflow">
        <h2>Workflow</h2>
        <ol>
          <li>Choose a style or genre</li>
          <li>Input a seed melody or chord progression</li>
          <li>Generate composition using the AI API</li>
        </ol>
      </section>
      <section id="tools">
        <h2>Tools</h2>
        <ul>
          <li>AI Composer (API)</li>
          <li>Web-based DAW</li>
        </ul>
      </section>
      <section id="sample-code">
        <h2>Sample Code</h2>
        <pre>
          <code>{`const response = await client.music.compose({
  style: 'jazz',
  seed: 'Cmaj7 Fmaj7 G7',
});`}</code>
        </pre>
      </section>
    </main>
  );
}
