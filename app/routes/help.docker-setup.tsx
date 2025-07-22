import { LoaderFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import React from "react";

// Map of help articles (imported lazily for now)
const helpArticles: Record<string, { title: string; content: React.ReactNode }> = {
  "docker-setup": {
    title: "Docker Setup",
    content: (
      <>
        <h1>Docker Setup</h1>
        <p>Guidance on setting up Docker for Ketivee projects.</p>
        <section>
          <h2>Install Docker</h2>
          <ul>
            <li>
              <strong>Windows/Mac:</strong> Download and install Docker Desktop from {" "}
              <a href="https://www.docker.com/products/docker-desktop/" target="_blank" rel="noopener noreferrer">docker.com</a>.
            </li>
            <li>
              <strong>Linux:</strong> Run <code>sudo apt install docker.io</code> (Ubuntu/Debian) or follow your distro's instructions.
            </li>
          </ul>
          <h2>Verify Installation</h2>
          <pre>
            <code>docker --version</code>
          </pre>
          <p>You should see the Docker version output.</p>
          <h2>Running a Test Container</h2>
          <pre>
            <code>docker run hello-world</code>
          </pre>
          <p>This command downloads and runs a simple test image to confirm Docker is working.</p>
          <h2>Project Configuration Example</h2>
          <pre>
            <code>{`# Example Dockerfile for Ketivee Project\nFROM node:18-alpine\nWORKDIR /app\nCOPY package.json .\nRUN npm install\nCOPY . .\nCMD [\"npm\", \"run\", \"dev\"]`}</code>
          </pre>
          <p>Save as <code>Dockerfile</code> in your project root. Then run:</p>
          <pre>
            <code>docker build -t ketivee-app .\ndocker run -p 3000:3000 ketivee-app</code>
          </pre>
          <p>Your Ketivee app will be available at <code>localhost:3000</code> (adjust as needed).</p>
        </section>
      </>
    )
  },
  // Add more articles here as needed
};

export const loader: LoaderFunction = async ({ params }) => {
  const { page } = params;
  if (!page || !helpArticles[page]) {
    throw new Response("Not Found", { status: 404 });
  }
  return json({ page });
};

export default function HelpDynamicPage() {
  const { page } = useLoaderData<typeof loader>();
  const article = helpArticles[page];
  if (!article) return <main className="prose mx-auto p-8"><h1>404 Not Found</h1></main>;
  return <main className="prose mx-auto p-8">{article.content}</main>;
}
