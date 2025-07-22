// Utility to generate a new API endpoint template for Remix
// This is a simple server-side function to return a code template

interface GenerateApiTemplateParams {
  name: string;
  modelFields: Record<string, unknown>;
}

export function generateApiTemplate({ name, modelFields }: GenerateApiTemplateParams): string {
  const model = `// Example data model\nconst ${name}Data = {\n  id: 1,\n  ...${JSON.stringify(modelFields)}\n};`;

  const handler = `import type { LoaderFunction } from '@remix-run/node';\nimport { json } from '@remix-run/node';\n\n${model}\n\nexport const loader: LoaderFunction = async () => {\n  return json(${name}Data);\n};\n\nexport default function ${name.charAt(0).toUpperCase() + name.slice(1)}Api() {\n  return (\n    <main className=\"prose mx-auto p-8\">\n      <h1>${name.charAt(0).toUpperCase() + name.slice(1)} API Endpoint</h1>\n      <pre>\n        <code>{JSON.stringify(${name}Data, null, 2)}</code>\n      </pre>\n    </main>\n  );\n}\n`;

  return handler;
}
