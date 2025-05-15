import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout: React.FC = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';
  const isDashboardOrChat = location.pathname === '/dashboard' || location.pathname === '/chat';

  return (
    <div className="flex flex-col min-h-screen bg-neutral-50">
      {!isAuthPage && <Navbar />}
      <main className="flex-grow">
        <Outlet />
      </main>
      {!isAuthPage && !isDashboardOrChat && <Footer />}
    </div>
  );
};

export default Layout;