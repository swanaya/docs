import React from "react";

export default function Animation() {
  return (
    <main className="prose mx-auto p-8">
      <h1>Animation</h1>
      <p>
        Animate your 3D models and scenes using Ketivee's animation tools.
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
          Ketivee supports keyframe and skeletal animation for 3D assets.
        </p>
      </section>
      <section id="supported-formats">
        <h2>Supported Formats</h2>
        <ul>
          <li>FBX (with animation)</li>
          <li>GLTF/GLB (with animation)</li>
        </ul>
      </section>
      <section id="workflow">
        <h2>Workflow</h2>
        <ol>
          <li>Create animations in Blender or Maya</li>
          <li>Export with animation data</li>
          <li>Import into Ketivee and preview in the dashboard</li>
        </ol>
      </section>
      <section id="sample-code">
        <h2>Sample Code</h2>
        <pre>
          <code>{`const response = await client.animations.upload({
  file: 'walk.fbx',
  type: 'fbx'
});`}</code>
        </pre>
      </section>
    </main>
  );
}
