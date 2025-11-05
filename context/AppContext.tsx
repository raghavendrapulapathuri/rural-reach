
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, Language, Translations } from '../types';
import { TRANSLATIONS } from '../constants';

interface AppContextType {
  user: User | null;
  loading: boolean;
  login: (email: string) => void;
  logout: () => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  translate: (key: string) => string;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const MOCK_USERS = {
  'admin@ruralreach.com': { id: '1', name: 'Admin', email: 'admin@ruralreach.com', role: 'admin' as const },
  'user@ruralreach.com': { id: '2', name: 'Demo User', email: 'user@ruralreach.com', role: 'user' as const },
};

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState<Language>(Language.EN);

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('rural-reach-user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
        console.error("Failed to parse user from localStorage", error);
        localStorage.removeItem('rural-reach-user');
    } finally {
        setLoading(false);
    }
  }, []);

  const login = (email: string) => {
    const foundUser = MOCK_USERS[email as keyof typeof MOCK_USERS];
    if (foundUser) {
      localStorage.setItem('rural-reach-user', JSON.stringify(foundUser));
      setUser(foundUser);
    } else {
        throw new Error("User not found");
    }
  };

  const logout = () => {
    localStorage.removeItem('rural-reach-user');
    setUser(null);
  };

  const translate = (key: string): string => {
    return TRANSLATIONS[language][key] || key;
  };

  return (
    <AppContext.Provider value={{ user, loading, login, logout, language, setLanguage, translate }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
