import { Link } from "@remix-run/react";
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function AAdiPage() {
  return (
    <div className="p-6">
      <div className="section-card">
        <div className="flex items-center gap-4 mb-6">
          <Link to="/" className="flex items-center gap-2 text-accent hover:text-secondary-accent transition-colors">
            <ArrowLeftIcon className="w-5 h-5" />
            Back to Overview
          </Link>
        </div>
        
        <h1 className="text-4xl font-bold text-accent mb-6">AAdi AI</h1>
        
        <img src="/assets/AAdi AI.svg" alt="AAdi AI" className="ai-image" />
        
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <h2 className="text-2xl font-bold text-accent mt-8 mb-4">Overview</h2>
          <p>
            AAdi AI is a revolutionary image and video generation model that leverages the power of 
            RipkaAI and Yug AI to create stunning 3D visual content. Unlike traditional 2D image 
            generation models, AAdi AI specializes in creating three-dimensional characters and 
            environments with unprecedented accuracy and detail.
          </p>
          
          <h2 className="text-2xl font-bold text-accent mt-8 mb-4">Key Features</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-accent text-xl">•</span>
              <span><strong>3D Character Generation</strong>: Creates lifelike 3D characters with accurate facial features and body proportions</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent text-xl">•</span>
              <span><strong>Advanced Texture Mapping</strong>: Integrates with Yug AI for realistic textures and materials</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent text-xl">•</span>
              <span><strong>Video Generation</strong>: Produces smooth, high-quality video content from text descriptions</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent text-xl">•</span>
              <span><strong>Style Consistency</strong>: Maintains consistent visual style across multiple generations</span>
            </li>
          </ul>
          
          <h2 className="text-2xl font-bold text-accent mt-8 mb-4">Technical Architecture</h2>
          <p>
            AAdi AI operates as a collaborative system that combines multiple AI models:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-accent text-xl">•</span>
              <span><strong>RipkaAI Integration</strong>: Uses natural language processing to understand complex prompts and requirements</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent text-xl">•</span>
              <span><strong>Yug AI Collaboration</strong>: Leverages 3D modeling capabilities for structural accuracy</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent text-xl">•</span>
              <span><strong>Custom Training Data</strong>: Trained on specialized 3D datasets for enhanced realism</span>
            </li>
          </ul>
          
          <h2 className="text-2xl font-bold text-accent mt-8 mb-4">Applications</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="ai-model-card">
              <h3 className="text-xl font-semibold text-accent mb-3">Gaming Industry</h3>
              <p>Generate character models, environments, and assets for video games with unprecedented speed and quality.</p>
            </div>
            <div className="ai-model-card">
              <h3 className="text-xl font-semibold text-accent mb-3">Film & Animation</h3>
              <p>Create movie characters, scenes, and special effects that rival traditional CGI production.</p>
            </div>
            <div className="ai-model-card">
              <h3 className="text-xl font-semibold text-accent mb-3">Virtual Reality</h3>
              <p>Develop immersive VR environments and avatars for training, entertainment, and social platforms.</p>
            </div>
            <div className="ai-model-card">
              <h3 className="text-xl font-semibold text-accent mb-3">Architecture & Design</h3>
              <p>Visualize architectural concepts and interior designs with photorealistic 3D renderings.</p>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-accent mt-8 mb-4">Advantages Over Traditional AI</h2>
          <p>
            AAdi AI addresses the fundamental limitations of traditional 2D image generation models:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-accent text-xl">•</span>
              <span><strong>No More Blurry Faces</strong>: 3D understanding eliminates the common issue of distorted facial features</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent text-xl">•</span>
              <span><strong>Consistent Perspectives</strong>: Maintains proper spatial relationships and proportions</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent text-xl">•</span>
              <span><strong>Scalable Output</strong>: Generates content at various resolutions without quality loss</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent text-xl">•</span>
              <span><strong>Multi-View Consistency</strong>: Creates consistent images from different angles</span>
            </li>
          </ul>
          
          <div className="mt-8 p-6 bg-accent/10 rounded-lg border border-accent/20">
            <h3 className="text-xl font-semibold text-accent mb-3">Future Development</h3>
            <p>
              AAdi AI is continuously evolving with ongoing research in real-time rendering, 
              interactive 3D environments, and advanced animation capabilities. The model is 
              designed to be open-source, allowing the community to contribute to its development 
              and improvement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 