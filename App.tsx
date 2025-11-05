
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import SchemesPage from './pages/SchemesPage';
import ToolsPage from './pages/ToolsPage';
import LearningPage from './pages/LearningPage';
import CommunityPage from './pages/CommunityPage';
import AuthPage from './pages/AuthPage';
import AdminDashboard from './pages/AdminDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import Chatbot from './components/Chatbot';

const App: React.FC = () => {
  return (
    <AppProvider>
      <HashRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/schemes" element={<SchemesPage />} />
            <Route path="/tools" element={<ToolsPage />} />
            <Route path="/learning" element={<LearningPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route 
              path="/admin" 
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              } 
            />
          </Routes>
          <Chatbot />
        </Layout>
      </HashRouter>
    </AppProvider>
  );
};

export default App;
