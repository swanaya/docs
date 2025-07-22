import React from "react";

export default function Rendering() {
  return (
    <main className="prose mx-auto p-8">
      <h1>Rendering</h1>
      <p>
        Render your 3D models and scenes using Ketivee's rendering pipeline.
      </p>
      <nav>
        <ul>
          <li><a href="#overview">Overview</a></li>
          <li><a href="#supported-engines">Supported Engines</a></li>
          <li><a href="#workflow">Workflow</a></li>
          <li><a href="#sample-code">Sample Code</a></li>
        </ul>
      </nav>
      <section id="overview">
        <h2>Overview</h2>
        <p>
          Ketivee supports real-time and offline rendering for a variety of use cases.
        </p>
      </section>
      <section id="supported-engines">
        <h2>Supported Engines</h2>
        <ul>
          <li>Three.js (WebGL)</li>
          <li>Unity</li>
          <li>Unreal Engine</li>
        </ul>
      </section>
      <section id="workflow">
        <h2>Workflow</h2>
        <ol>
          <li>Import your 3D assets into Ketivee</li>
          <li>Select a rendering engine or export for further processing</li>
          <li>Adjust lighting and materials as needed</li>
        </ol>
      </section>
      <section id="sample-code">
        <h2>Sample Code</h2>
        <pre>
          <code>{`const response = await client.render.start({
  sceneId: 'scene-123',
  engine: 'threejs'
});`}</code>
        </pre>
      </section>
    </main>
  );
}
