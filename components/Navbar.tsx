import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { LeafIcon, MenuIcon, XIcon } from './icons';

const Navbar: React.FC = () => {
  const { user, logout, language, setLanguage, translate } = useAppContext();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', text: translate('home') },
    { to: '/schemes', text: translate('schemes') },
    { to: '/tools', text: translate('tools') },
    { to: '/learning', text: translate('learning') },
    { to: '/community', text: translate('community') },
  ];

  const activeLinkStyle = {
    color: '#4ade80',
    fontWeight: '600',
  };

  return (
    <nav className="bg-gray-800 shadow-lg sticky top-0 z-50 border-b border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-gray-100">
              <LeafIcon className="h-8 w-8 text-primary-400" />
              <span>{translate('ruralReach')}</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className="text-gray-300 hover:text-primary-400 px-3 py-2 rounded-md text-md font-medium transition-colors"
                  style={({ isActive }) => (isActive ? activeLinkStyle : {})}
                >
                  {link.text}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
             <div className="relative">
                <select 
                    value={language} 
                    onChange={(e) => setLanguage(e.target.value as 'en' | 'hi')}
                    className="appearance-none bg-gray-700 border border-gray-600 rounded-md py-2 pl-3 pr-8 text-sm leading-5 text-gray-200 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition"
                >
                    <option value="en">English</option>
                    <option value="hi">हिन्दी</option>
                </select>
             </div>
            {user ? (
              <>
                {user.role === 'admin' && (
                   <Link to="/admin" className="text-gray-300 hover:text-primary-400 px-3 py-2 rounded-md text-sm font-medium">{translate('adminDashboard')}</Link>
                )}
                <button onClick={logout} className="bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-700 transition-colors">{translate('logout')}</button>
              </>
            ) : (
              <Link to="/auth" className="bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-700 transition-colors">{translate('login')}</Link>
            )}
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              {isMobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
               <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-primary-400 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                  style={({ isActive }) => (isActive ? activeLinkStyle : {})}
                >
                  {link.text}
                </NavLink>
            ))}
            <div className="border-t border-gray-700 pt-4 pb-3">
                {user ? (
                    <>
                    {user.role === 'admin' && (
                        <Link to="/admin" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-primary-400">{translate('adminDashboard')}</Link>
                    )}
                    <button onClick={() => { logout(); setIsMobileMenuOpen(false); }} className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-primary-400">{translate('logout')}</button>
                    </>
                ) : (
                    <Link to="/auth" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-primary-400">{translate('login')}</Link>
                )}
            </div>
             <div className="px-3 py-2">
                <select 
                    value={language} 
                    onChange={(e) => setLanguage(e.target.value as 'en' | 'hi')}
                    className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 pl-3 pr-8 text-sm leading-5 text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                    <option value="en">English</option>
                    <option value="hi">हिन्दी</option>
                </select>
             </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;