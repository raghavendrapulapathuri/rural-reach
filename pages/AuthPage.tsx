import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { LogInIcon, UserPlusIcon, LeafIcon } from '../components/icons';
import { DEMO_CREDENTIALS } from '../constants';

const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [showDemo, setShowDemo] = useState(true);
  const { login } = useAppContext();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (isLogin) {
      try {
        const user = DEMO_CREDENTIALS.users.find(
          user => user.email === email && user.password === password
        );

        if (user) {
          await login(email);
          // Always redirect to home page after successful login
          navigate('/', { replace: true });
        } else {
          setError('Invalid credentials. Please use the demo accounts shown above.');
        }
      } catch (err) {
        setError('Login failed. Please try again.');
      }
    } else {
      // Mock registration
      alert(`Registration successful for ${name} with email ${email}! Please login.`);
      setIsLogin(true);
      setEmail('');
      setPassword('');
      setName('');
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
          {showDemo && isLogin && (
            <div className="mt-4 p-4 bg-gray-700 rounded-lg">
              <p className="text-sm text-gray-200 font-medium mb-2">Demo Credentials:</p>
              <div className="space-y-2">
                <div>
                  <p className="text-xs text-gray-300">Farmer Account:</p>
                  <p className="text-sm text-primary-400">Email: farmer@demo.com</p>
                  <p className="text-sm text-primary-400">Password: farmer123</p>
                </div>
                <div>
                  <p className="text-xs text-gray-300">Admin Account:</p>
                  <p className="text-sm text-primary-400">Email: admin@demo.com</p>
                  <p className="text-sm text-primary-400">Password: admin123</p>
                </div>
              </div>
              <button 
                onClick={() => setShowDemo(false)}
                className="mt-2 text-xs text-gray-400 hover:text-gray-300"
              >
                Hide demo info
              </button>
            </div>
          )}
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
              placeholder="Email address (e.g., farmer@demo.com)"
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
              placeholder="Password (e.g., farmer123)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transform transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                {isLogin ? <LogInIcon className="h-5 w-5 text-primary-300" /> : <UserPlusIcon className="h-5 w-5 text-primary-300" />}
              </span>
              {isLogin ? 'Sign in to Rural Reach' : 'Create account'}
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