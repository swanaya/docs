import { useState, useEffect, useContext } from 'react';
import { Link } from '@remix-run/react';
import { RouteContext } from '../utils/routeContext';
import { 
  ChevronDownIcon,
  ChevronRightIcon,
  DocumentTextIcon,
  CodeBracketIcon,
  CpuChipIcon,
  CubeIcon,
  MusicalNoteIcon,
  HeartIcon,
  ComputerDesktopIcon,
  QuestionMarkCircleIcon
} from '@heroicons/react/24/outline';

interface MenuItem {
  id: string;
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  children?: MenuItem[];
}

interface SideMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function SideMenu({ isOpen, onToggle }: SideMenuProps) {
  const { pathname, hash } = useContext(RouteContext);
  const [expandedSections, setExpandedSections] = useState<string[]>(['getting-started', 'api-reference']);
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Check if we're on desktop/tablet and set expanded by default
  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth >= 768) { // md breakpoint
        setIsCollapsed(false);
      }
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const menuItems: MenuItem[] = [
    {
      id: 'home',
      label: 'Home',
      href: '/',
      icon: DocumentTextIcon
    },
    {
      id: 'dashboard',
      label: 'Dashboard',
      href: '/dashboard',
      icon: CpuChipIcon
    },
    {
      id: 'api-reference',
      label: 'API Reference',
      href: '/api-docs',
      icon: CodeBracketIcon,
      children: [
        { id: 'chat-api', label: 'Chat API', href: '/chat-api', icon: CodeBracketIcon },
        { id: 'completion-api', label: 'Completion API', href: '/completion-api', icon: CodeBracketIcon },
        { id: 'embedding-api', label: 'Embedding API', href: '/embedding-api', icon: CodeBracketIcon }
      ]
    },
    {
      id: 'ai-models',
      label: 'AI Models',
      href: '/ai-models.ripka-ai',
      icon: CpuChipIcon,
      children: [
        { id: 'aadi-ai', label: 'AAdi AI', href: '/aadi-ai', icon: CpuChipIcon },
        { id: 'yug-ai', label: 'Yug AI', href: '/yug-ai', icon: CpuChipIcon },
        { id: 'ripka-ai', label: 'Ripka AI', href: '/ripka-ai', icon: CpuChipIcon }
      ]
    },
    {
      id: '3d-production',
      label: '3D Production',
      href: '/3d-production.modeling',
      icon: CubeIcon,
      children: [
        { id: 'modeling', label: '3D Modeling', href: '/3d-production.modeling', icon: CubeIcon },
        { id: 'animation', label: 'Animation', href: '/3d-production.animation', icon: CubeIcon },
        { id: 'rendering', label: 'Rendering', href: '/3d-production.rendering', icon: CubeIcon }
      ]
    },
    {
      id: 'music-production',
      label: 'Music Production',
      href: '/music-production.composition',
      icon: MusicalNoteIcon,
      children: [
        { id: 'composition', label: 'Composition', href: '/music-production.composition', icon: MusicalNoteIcon },
        { id: 'mixing', label: 'Mixing', href: '/music-production.mixing', icon: MusicalNoteIcon },
        { id: 'mastering', label: 'Mastering', href: '/mastering', icon: MusicalNoteIcon }
      ]
    },
    {
      id: 'medical',
      label: 'Medical',
      href: '/diagnosis',
      icon: HeartIcon,
      children: [
        { id: 'diagnosis', label: 'Diagnosis', href: '/diagnosis', icon: HeartIcon },
        { id: 'treatment', label: 'Treatment', href: '/treatment', icon: HeartIcon },
        { id: 'research', label: 'Research', href: '/research', icon: HeartIcon }
      ]
    },
    {
      id: 'game-development',
      label: 'Game Development',
      href: '/game-design',
      icon: ComputerDesktopIcon,
      children: [
        { id: 'game-design', label: 'Game Design', href: '/game-design', icon: ComputerDesktopIcon },
        { id: 'programming', label: 'Programming', href: '/programming', icon: ComputerDesktopIcon },
        { id: 'testing', label: 'Testing', href: '/testing', icon: ComputerDesktopIcon }
      ]
    },
    {
      id: 'help-tutorials',
      label: 'Help & Tutorials',
      href: '/help',
      icon: QuestionMarkCircleIcon,
      children: [
        { id: 'ubuntu-usb-install', label: 'Ubuntu USB Install', href: '/help/ubuntu-usb-install', icon: ComputerDesktopIcon },
        { id: 'docker-setup', label: 'Docker Setup', href: '/help/docker-setup', icon: CodeBracketIcon },
        { id: 'nodejs-install', label: 'Node.js Install', href: '/help/nodejs-install', icon: CodeBracketIcon }
      ]
    }
  ];

  const isActive = (href: string) => {
    if (href.startsWith('/')) {
      // Route-based: compare only pathname
      return pathname === href;
    } else if (href.startsWith('#')) {
      // Hash-based: compare only hash
      return hash === href;
    }
    return false;
  };

  return (
    <div className={`bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 transition-all duration-300 ${
      isCollapsed ? 'w-16' : 'w-64'
    } ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
      <div className="flex flex-col h-full">
        {/* Header with collapse/expand button */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          {!isCollapsed ? (
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">K</span>
              </div>
              <span className="font-semibold text-gray-900 dark:text-white">KDEV</span>
            </div>
          ) : (
            <div className="flex items-center justify-center w-8 h-8">
              <div className="w-6 h-6 bg-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">K</span>
              </div>
            </div>
          )}
          <button
            onClick={toggleCollapse}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isCollapsed ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-600 dark:text-gray-300">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-600 dark:text-gray-300">
                <path d="M17 7L7 17M7 7H17M7 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 overflow-y-auto p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const isExpanded = expandedSections.includes(item.id);
              const hasActiveChild = item.children?.some(child => isActive(child.href));
              const isItemActive = isActive(item.href) || hasActiveChild;

              return (
                <li key={item.id}>
                  <div className="space-y-1">
                    {/* Parent item */}
                    <div className="flex items-center">
                      <Link
                        to={item.href}
                        className={`flex items-center flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                          isItemActive
                            ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                        }`}
                      >
                        <item.icon className="w-5 h-5 mr-3 flex-shrink-0" />
                        {!isCollapsed && <span>{item.label}</span>}
                      </Link>
                      
                      {!isCollapsed && item.children && (
                        <button
                          onClick={() => toggleSection(item.id)}
                          className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                          {isExpanded ? (
                            <ChevronDownIcon className="w-4 h-4" />
                          ) : (
                            <ChevronRightIcon className="w-4 h-4" />
                          )}
                        </button>
                      )}
                    </div>

                    {/* Children */}
                    {!isCollapsed && item.children && isExpanded && (
                      <ul className="ml-6 space-y-1">
                        {item.children.map((child) => (
                          <li key={child.id}>
                            <Link
                              to={child.href}
                              className={`flex items-center px-3 py-2 rounded-lg text-sm transition-colors ${
                                isActive(child.href)
                                  ? 'bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400'
                                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                              }`}
                            >
                              <child.icon className="w-4 h-4 mr-3 flex-shrink-0" />
                              <span>{child.label}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        {!isCollapsed && (
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-500 dark:text-gray-400">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.09 9C9.3251 8.33167 9.78918 7.76811 10.4 7.40921C11.0108 7.0503 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.30197 14.92 10C14.92 12 11.92 13 11.92 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 17H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Need help?</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 