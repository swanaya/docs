import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";

// Example data model
const exampleData = {
  id: 1,
  message: "Hello from your API!",
  timestamp: new Date().toISOString(),
};

export const loader: LoaderFunction = async () => {
  return json(exampleData);
};

export default function ExampleApi() {
  return (
    <main className="prose mx-auto p-8">
      <h1>Example API Endpoint</h1>
      <p>This endpoint returns a JSON response. Try accessing <code>/api/example</code> in your browser or with fetch/axios.</p>
      <pre>
        <code>{JSON.stringify(exampleData, null, 2)}</code>
      </pre>
    </main>
  );
}
