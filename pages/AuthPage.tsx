import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { LogInIcon, UserPlusIcon, LeafIcon } from '../components/icons';

const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const { login } = useAppContext();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (isLogin) {
      try {
        if (email === 'admin@ruralreach.com' && password === 'Admin@123') {
          login(email);
          navigate('/admin', { replace: true });
        } else if (email === 'user@ruralreach.com' && password === 'User@123') {
          login(email);
          navigate(from, { replace: true });
        } else {
          setError('Invalid credentials. Please try again.');
        }
      } catch (err) {
        setError('Invalid credentials. Please try again.');
      }
    } else {
      // Mock registration
      alert(`Registration successful for ${name} with email ${email}! Please login.`);
      setIsLogin(true);
      setError('');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-full py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 p-10 bg-gray-800 rounded-xl shadow-lg border border-gray-700">
        <div>
          <LeafIcon className="mx-auto h-12 w-auto text-primary-400" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-100">
            {isLogin ? 'Sign in to your account' : 'Create a new account'}
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {!isLogin && (
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-600 bg-gray-700 placeholder-gray-400 text-gray-100 rounded-t-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          )}
          <div>
            <label htmlFor="email-address" className="sr-only">Email address</label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-600 bg-gray-700 placeholder-gray-400 text-gray-100 ${isLogin ? 'rounded-t-md' : ''} focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm`}
              placeholder="Email address (e.g., admin@ruralreach.com)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-600 bg-gray-700 placeholder-gray-400 text-gray-100 rounded-b-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
              placeholder="Password (e.g., Admin@123)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                {isLogin ? <LogInIcon className="h-5 w-5 text-primary-300" /> : <UserPlusIcon className="h-5 w-5 text-primary-300" />}
              </span>
              {isLogin ? 'Sign in' : 'Create account'}
            </button>
          </div>
        </form>
        <div className="text-sm text-center">
          <button onClick={() => setIsLogin(!isLogin)} className="font-medium text-primary-400 hover:text-primary-300">
            {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Sign In"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;