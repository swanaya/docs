import { Link } from "@remix-run/react";
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function YugPage() {
  return (
    <div className="p-6">
      <div className="section-card">
        <div className="flex items-center gap-4 mb-6">
          <Link to="/" className="flex items-center gap-2 text-accent hover:text-secondary-accent transition-colors">
            <ArrowLeftIcon className="w-5 h-5" />
            Back to Overview
          </Link>
        </div>
        
        <h1 className="text-4xl font-bold text-accent mb-6">Yug AI</h1>
        
        <img src="/assets/Yugbtn.svg" alt="Yug AI" className="ai-image" />
        
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <h2 className="text-2xl font-bold text-accent mt-8 mb-4">Overview</h2>
          <p>
            Yug AI is a cutting-edge 3D generation and environment design model that specializes in 
            creating three-dimensional objects, characters, and environments. Working in perfect 
            harmony with AAdi AI, Yug AI provides the structural foundation while AAdi AI adds 
            realistic textures and colors, resulting in stunning 3D content.
          </p>
          
          <h2 className="text-2xl font-bold text-accent mt-8 mb-4">Key Features</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-accent text-xl">•</span>
              <span><strong>3D Mesh Generation</strong>: Creates complex 3D meshes with accurate topology and structure</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent text-xl">•</span>
              <span><strong>Blender Integration</strong>: Seamless integration with Blender for professional 3D workflows</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent text-xl">•</span>
              <span><strong>Real-time Texture Mapping</strong>: Provides real-time texture mapping capabilities for enhanced realism</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent text-xl">•</span>
              <span><strong>Environment Design</strong>: Generates complete 3D environments and landscapes</span>
            </li>
          </ul>
          
          <h2 className="text-2xl font-bold text-accent mt-8 mb-4">Technical Architecture</h2>
          <p>
            Yug AI operates as a specialized 3D modeling system with advanced capabilities:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-accent text-xl">•</span>
              <span><strong>Advanced Mesh Generation</strong>: Uses sophisticated algorithms to create high-quality 3D meshes</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent text-xl">•</span>
              <span><strong>Blender Plugin Support</strong>: Direct integration with Blender's Python API for seamless workflows</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent text-xl">•</span>
              <span><strong>Parth AI Integration</strong>: Works with Parth AI for local processing and enhanced user experience</span>
            </li>
          </ul>
          
          <h2 className="text-2xl font-bold text-accent mt-8 mb-4">Applications</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="ai-model-card">
              <h3 className="text-xl font-semibold text-accent mb-3">Game Development</h3>
              <p>Create 3D assets, characters, and environments for video games with professional quality and speed.</p>
            </div>
            <div className="ai-model-card">
              <h3 className="text-xl font-semibold text-accent mb-3">3D Animation</h3>
              <p>Generate 3D models for animation projects, reducing production time and costs significantly.</p>
            </div>
            <div className="ai-model-card">
              <h3 className="text-xl font-semibold text-accent mb-3">Product Design</h3>
              <p>Create 3D prototypes and visualizations for product design and manufacturing processes.</p>
            </div>
            <div className="ai-model-card">
              <h3 className="text-xl font-semibold text-accent mb-3">Architecture</h3>
              <p>Generate 3D architectural models and structural designs for construction and planning.</p>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-accent mt-8 mb-4">Workflow Integration</h2>
          <p>
            Yug AI is designed to work seamlessly with other AI models in the Ketivee AI ecosystem:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-accent text-xl">•</span>
              <span><strong>AAdi AI Collaboration</strong>: Provides 3D structure while AAdi AI adds textures and colors</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent text-xl">•</span>
              <span><strong>RipkaAI Integration</strong>: Uses natural language processing to understand complex 3D requirements</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent text-xl">•</span>
              <span><strong>Parth AI Support</strong>: Local processing capabilities for enhanced privacy and performance</span>
            </li>
          </ul>
          
          <h2 className="text-2xl font-bold text-accent mt-8 mb-4">Blender Integration</h2>
          <p>
            One of Yug AI's most powerful features is its seamless integration with Blender:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-accent text-xl">•</span>
              <span><strong>Direct Import</strong>: Generated 3D models can be directly imported into Blender</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent text-xl">•</span>
              <span><strong>Real-time Updates</strong>: Changes in Yug AI are reflected in real-time within Blender</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent text-xl">•</span>
              <span><strong>Plugin Support</strong>: Custom Blender plugins for enhanced workflow integration</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent text-xl">•</span>
              <span><strong>Texture Mapping</strong>: Advanced texture mapping capabilities for realistic materials</span>
            </li>
          </ul>
          
          <div className="mt-8 p-6 bg-accent/10 rounded-lg border border-accent/20">
            <h3 className="text-xl font-semibold text-accent mb-3">Future Development</h3>
            <p>
              Yug AI is continuously evolving with ongoing research in advanced 3D modeling techniques, 
              real-time rendering capabilities, and expanded software integrations. The model is designed 
              to be open-source, allowing the 3D modeling community to contribute to its development 
              and improvement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 