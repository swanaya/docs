import React from "react";

export default function Modeling() {
  return (
    <main className="prose mx-auto p-8">
      <h1>3D Modeling</h1>
      <p>
        Learn how to create, import, and manage 3D models with Ketivee's tools.
      </p>
      <nav>
        <ul>
          <li><a href="#overview">Overview</a></li>
          <li><a href="#supported-formats">Supported Formats</a></li>
          <li><a href="#workflow">Workflow</a></li>
          <li><a href="#sample-code">Sample Code</a></li>
        </ul>
      </nav>
      <section id="overview">
        <h2>Overview</h2>
        <p>
          Ketivee supports industry-standard 3D formats for modeling, animation, and rendering.
        </p>
      </section>
      <section id="supported-formats">
        <h2>Supported Formats</h2>
        <ul>
          <li>FBX</li>
          <li>OBJ</li>
          <li>GLTF/GLB</li>
        </ul>
      </section>
      <section id="workflow">
        <h2>Workflow</h2>
        <ol>
          <li>Design your model in Blender, Maya, or 3ds Max</li>
          <li>Export as FBX or GLTF</li>
          <li>Import into Ketivee using the dashboard or API</li>
        </ol>
      </section>
      <section id="sample-code">
        <h2>Sample Code</h2>
        <pre>
          <code>{`const response = await client.models.upload({
  file: 'model.glb',
  type: 'gltf'
});`}</code>
        </pre>
      </section>
    </main>
  );
}
