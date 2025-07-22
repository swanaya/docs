import { useState, useEffect } from "react";
import { Link } from "@remix-run/react";
import type { LoaderFunction } from '@remix-run/node';
import { redirect } from '@remix-run/node';
import { 
  ArrowLeftIcon, 
  ArrowUpTrayIcon, 
  PencilIcon, 
  TrashIcon, 
  PlusIcon, 
  DocumentTextIcon, 
  PhotoIcon, 
  VideoCameraIcon,
  Cog6ToothIcon
} from '@heroicons/react/24/outline';

// Loader function to check authentication for dashboard access
export const loader: LoaderFunction = async ({ request }) => {
  const cookie = request.headers.get('cookie') || '';
  const isLoggedIn = cookie.includes('auth_token=');
  
  if (!isLoggedIn) {
    const url = new URL(request.url);
    return redirect(`https://auth.ketivee.com/login?redirect=${encodeURIComponent(url.href)}`);
  }
  
  return null;
};

interface DocItem {
  id: string;
  title: string;
  type: 'text' | 'image' | 'video';
  lastModified: string;
  size: string;
}

export default function Dashboard() {
  const [docs, setDocs] = useState<DocItem[]>([
    {
      id: '1',
      title: 'RipkaAI Overview',
      type: 'text',
      lastModified: '2024-01-15',
      size: '2.3 KB'
    },
    {
      id: '2',
      title: 'AAdi AI Architecture',
      type: 'text',
      lastModified: '2024-01-14',
      size: '1.8 KB'
    },
    {
      id: '3',
      title: 'Yug AI Demo',
      type: 'video',
      lastModified: '2024-01-13',
      size: '15.2 MB'
    },
    {
      id: '4',
      title: 'Project Diagram',
      type: 'image',
      lastModified: '2024-01-12',
      size: '2.1 MB'
    }
  ]);

  const deleteDoc = (id: string) => {
    setDocs(docs.filter(doc => doc.id !== id));
    // Show toast notification
    const event = new CustomEvent('show-toast', {
      detail: { message: 'Document deleted successfully', type: 'success' }
    });
    window.dispatchEvent(event);
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'text':
        return <DocumentTextIcon className="w-5 h-5" />;
      case 'image':
        return <PhotoIcon className="w-5 h-5" />;
      case 'video':
        return <VideoCameraIcon className="w-5 h-5" />;
      default:
        return <DocumentTextIcon className="w-5 h-5" />;
    }
  };

  return (
    <div className="p-6">
      <div className="section-card">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2 text-accent hover:text-secondary-accent transition-colors">
              <ArrowLeftIcon className="w-5 h-5" />
              Back to Overview
            </Link>
          </div>
          <h1 className="text-3xl font-bold text-accent">Documentation Dashboard</h1>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="ai-model-card">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-accent/10 rounded-lg">
                <DocumentTextIcon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Total Docs</p>
                <p className="text-2xl font-bold">{docs.length}</p>
              </div>
            </div>
          </div>
          
          <div className="ai-model-card">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-green-500/10 rounded-lg">
                <PhotoIcon className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Images</p>
                <p className="text-2xl font-bold">{docs.filter(d => d.type === 'image').length}</p>
              </div>
            </div>
          </div>
          
          <div className="ai-model-card">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-500/10 rounded-lg">
                <VideoCameraIcon className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Videos</p>
                <p className="text-2xl font-bold">{docs.filter(d => d.type === 'video').length}</p>
              </div>
            </div>
          </div>
          
          <div className="ai-model-card">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-purple-500/10 rounded-lg">
                <Cog6ToothIcon className="w-6 h-6 text-purple-500" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Text Files</p>
                <p className="text-2xl font-bold">{docs.filter(d => d.type === 'text').length}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-4 mb-6">
          <button className="learn-more-btn flex items-center gap-2">
            <ArrowUpTrayIcon className="w-5 h-5" />
            Upload Document
          </button>
          <button className="learn-more-btn flex items-center gap-2 bg-green-600 hover:bg-green-700">
            <PlusIcon className="w-5 h-5" />
            Create New
          </button>
        </div>

        {/* Documents List */}
        <div className="space-y-4">
          {docs.map((doc) => (
            <div key={doc.id} className="ai-model-card">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    {getTypeIcon(doc.type)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{doc.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Last modified: {doc.lastModified} • Size: {doc.size}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                    <PencilIcon className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => deleteDoc(doc.id)}
                    className="p-2 hover:bg-red-100 dark:hover:bg-red-900/20 rounded-lg transition-colors text-red-500"
                  >
                    <TrashIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 