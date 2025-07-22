import type { MetaFunction, LoaderFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { useState, useEffect } from "react";
import { redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import SideMenu from "./components/SideMenu";
import { RouteContext } from "./utils/routeContext";
import { useLocation } from "@remix-run/react";
import Navbar from "./components/Navbar";
import SearchModal from "./components/SearchModal";
import SettingsPanel from "./components/SettingsPanel";
import Toast from "./components/Toast";
import { ThemeProvider } from "./contexts/ThemeContext";
import "./tailwind.css";

const AUTH_URL = 'https://auth.ketivee.com/login?redirect_uri=https://docs.ketivee.com/community';
const USERINFO_URL = 'https://auth.ketivee.com/api/userinfo';

export const meta: MetaFunction = () => {
  return [
    { title: "Ketivee AI Documentation" },
    { name: "description", content: "Complete documentation for Ketivee AI platform" },
  ];
};

export const loader: LoaderFunction = async ({ request }) => {
  // Allow public access to documentation
  // Authentication will be handled at the route level for community features
  return null;
};

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' | 'info' } | null>(null);
  const [user, setUser] = useState<any>(null);

  // Optional: Check for user info if token exists (for UI display purposes)
  useEffect(() => {
    const token = localStorage.getItem('ketivee_token');
    if (!token) {
      setUser(null);
      return;
    }
    fetch(USERINFO_URL, {
      headers: { Authorization: `Bearer ${token}` },
      credentials: 'include',
    })
      .then(async (res) => {
        if (!res.ok) throw new Error('Invalid token');
        const data = await res.json();
        setUser(data);
      })
      .catch(() => {
        setUser(null);
        localStorage.removeItem('ketivee_token');
      });
  }, []);

  const showToast = (message: string, type: 'success' | 'error' | 'info') => {
    setToast({ message, type });
  };

  const closeToast = () => {
    setToast(null);
  };

  const handleLogin = () => {
    window.location.href = AUTH_URL;
  };

  // SSR-safe: get location from useLocation (client) or default (SSR)
  let location = { pathname: '', hash: '' };
  try {
    location = useLocation();
  } catch {}

  return (
    <html lang="en" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-full bg-gray-50 dark:bg-gray-900">
        <ThemeProvider>
          <div className="flex h-full">
            {/* Sidebar */}
            <RouteContext.Provider value={{ pathname: location.pathname, hash: location.hash }}>
              <SideMenu 
                isOpen={sidebarOpen} 
                onToggle={() => setSidebarOpen(!sidebarOpen)} 
              />
            </RouteContext.Provider>
            
            {/* Main Content */}
            <div className="flex-1 flex flex-col min-w-0">
              {/* Navbar */}
              <Navbar 
                user={user}
                onLogin={handleLogin}
                onSearchToggle={() => setSearchOpen(true)}
                onSettingsToggle={() => setSettingsOpen(true)}
              />
              
              {/* Page Content */}
              <main className="flex-1 overflow-auto">
                <Outlet />
              </main>
            </div>
          </div>

          {/* Modals */}
          <SearchModal 
            isOpen={searchOpen} 
            onClose={() => setSearchOpen(false)} 
          />
          
          <SettingsPanel 
            isOpen={settingsOpen} 
            onClose={() => setSettingsOpen(false)}
            onShowToast={showToast}
          />

          {/* Toast */}
          {toast && (
            <Toast 
              message={toast.message} 
              type={toast.type} 
              onClose={closeToast} 
            />
          )}

          <ScrollRestoration />
          <Scripts />
        </ThemeProvider>
      </body>
    </html>
  );
}
