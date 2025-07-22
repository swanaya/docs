import { Link } from '@remix-run/react';
import {
  MagnifyingGlassIcon,
  BellIcon,
  UserCircleIcon,
  UsersIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon
} from '@heroicons/react/24/outline';

interface NavbarProps {
  user?: { name?: string; email?: string; avatar?: string } | null;
  onLogin: () => void;
  onSearchToggle: () => void;
  onSettingsToggle: () => void;
}

export default function Navbar({ user, onLogin, onSearchToggle, onSettingsToggle }: NavbarProps) {
  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-4 py-3">
      <div className="flex items-center justify-between">
        {/* Left side - Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">K</span>
          </div>
          <span className="text-lg font-semibold text-gray-900 dark:text-white hidden sm:block">
            Ketivee Docs
          </span>
        </div>

        {/* Center - Search icon only */}
        <div className="flex-1 flex justify-center">
          <button
            onClick={onSearchToggle}
            className="p-2 rounded-md text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Open search"
          >
            <MagnifyingGlassIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Right side - Actions */}
        <div className="flex items-center space-x-2">
          {/* Community icon */}
          <Link to="/community" className="p-2 rounded-md text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" title="Community">
            <UsersIcon className="w-6 h-6" />
          </Link>

          {/* Notifications */}
          <button className="p-2 rounded-md text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            <BellIcon className="w-5 h-5" />
          </button>

          {/* Settings */}
          <button
            onClick={onSettingsToggle}
            className="p-2 rounded-md text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <Cog6ToothIcon className="w-5 h-5" />
          </button>

          {/* User/login */}
          {user ? (
            <div className="flex items-center gap-2">
              <img src={user.avatar || '/assets/icons/KDEV.svg'} alt="User" className="w-8 h-8 rounded-full bg-white border border-purple-400" />
              <span className="hidden md:inline text-sm text-gray-900 dark:text-white font-medium">{user.name || user.email}</span>
            </div>
          ) : (
            <button
              onClick={onLogin}
              className="p-2 rounded-md text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              title="Login"
            >
              <ArrowRightOnRectangleIcon className="w-6 h-6" />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
} 