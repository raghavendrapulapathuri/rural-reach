
import React from 'react';
import { Link } from 'react-router-dom';
import { LeafIcon, FacebookIcon, TwitterIcon, InstagramIcon } from './icons';
import { useAppContext } from '../context/AppContext';

const Footer: React.FC = () => {
  const { translate } = useAppContext();
  
  const quickLinks = [
    { to: '/', text: translate('home') },
    { to: '/schemes', text: translate('schemes') },
    { to: '/tools', text: translate('tools') },
    { to: '/learning', text: translate('learning') },
    { to: '/community', text: translate('community') },
  ];

  return (
    <footer className="bg-primary-900 text-white">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 text-2xl font-bold">
              <LeafIcon className="h-8 w-8 text-primary-400" />
              <span>{translate('ruralReach')}</span>
            </Link>
            <p className="text-gray-300 text-sm">Empowering rural India with knowledge and technology.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold tracking-wider uppercase text-primary-400">{translate('quickLinks')}</h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="text-base text-gray-300 hover:text-white transition-colors">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold tracking-wider uppercase text-primary-400">{translate('contactInfo')}</h3>
            <div className="mt-4 space-y-2 text-gray-300">
              <p>123 Kisan Nagar, Gram Vikas</p>
              <p>New Delhi, India</p>
              <p>Email: contact@ruralreach.com</p>
              <p>Phone: +91 12345 67890</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold tracking-wider uppercase text-primary-400">{translate('followUs')}</h3>
            <div className="mt-4 flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-white">
                <FacebookIcon className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <TwitterIcon className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <InstagramIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-primary-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Rural Reach. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
