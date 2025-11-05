import React, { useState } from 'react';
import { MOCK_SCHEMES, MOCK_TOOLS, MOCK_LEARNING } from '../constants';
import { Scheme, Tool, LearningMaterial } from '../types';

type Tab = 'schemes' | 'tools' | 'learning' | 'users';

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('schemes');
  
  // In a real app, this would come from a context or API call
  const [schemes, setSchemes] = useState<Scheme[]>(MOCK_SCHEMES);
  const [tools, setTools] = useState<Tool[]>(MOCK_TOOLS);
  const [learningMaterials, setLearningMaterials] = useState<LearningMaterial[]>(MOCK_LEARNING);
  
  const renderContent = () => {
    switch (activeTab) {
      case 'schemes':
        return <ManageContent title="Schemes" data={schemes} />;
      case 'tools':
        return <ManageContent title="Tools & Techniques" data={tools} />;
      case 'learning':
        return <ManageContent title="Learning Materials" data={learningMaterials} />;
      case 'users':
        return <ManageUsers />;
      default:
        return null;
    }
  };
  
  const TabButton: React.FC<{tab: Tab, label: string}> = ({ tab, label }) => (
    <button
        onClick={() => setActiveTab(tab)}
        className={`px-4 py-2 text-sm font-medium rounded-md transition-colors w-full text-left ${
          activeTab === tab 
          ? 'bg-primary-600 text-white' 
          : 'text-gray-300 hover:bg-gray-700'
        }`}
    >
        {label}
    </button>
  );

  return (
    <div className="flex flex-col md:flex-row min-h-[calc(100vh-10rem)] bg-gray-900 rounded-lg shadow-lg">
      <aside className="w-full md:w-64 bg-gray-800 p-4 border-b md:border-r border-gray-700">
        <h2 className="text-xl font-bold mb-4 text-gray-100">Admin Menu</h2>
        <nav className="flex flex-row md:flex-col space-x-2 md:space-x-0 md:space-y-2">
            <TabButton tab="schemes" label="Manage Schemes" />
            <TabButton tab="tools" label="Manage Tools" />
            <TabButton tab="learning" label="Manage Learning" />
            <TabButton tab="users" label="Manage Users" />
        </nav>
      </aside>
      <main className="flex-1 p-6">
        {renderContent()}
      </main>
    </div>
  );
};

interface ManageContentProps {
    title: string;
    data: any[];
}

const ManageContent: React.FC<ManageContentProps> = ({ title, data }) => {
    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-100">{title}</h1>
                <button className="bg-primary-600 text-white font-bold py-2 px-4 rounded-md hover:bg-primary-700 transition-colors">
                    Add New
                </button>
            </div>
            <div className="bg-gray-800 rounded-lg shadow-md overflow-x-auto border border-gray-700">
                <table className="min-w-full divide-y divide-gray-700">
                    <thead className="bg-gray-700">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Name/Title</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Category/Type</th>
                            <th scope="col" className="relative px-6 py-3"><span className="sr-only">Actions</span></th>
                        </tr>
                    </thead>
                    <tbody className="bg-gray-800 divide-y divide-gray-700">
                        {data.map(item => (
                            <tr key={item.id}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm font-medium text-gray-100">{item.name || item.title}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-900 text-green-200">
                                        {item.category || item.type}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <button className="text-indigo-400 hover:text-indigo-300 mr-4">Edit</button>
                                    <button className="text-red-500 hover:text-red-400">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const ManageUsers: React.FC = () => {
    const mockUsers = [
        { id: '1', name: 'Admin', email: 'admin@ruralreach.com', role: 'admin' },
        { id: '2', name: 'Demo User', email: 'user@ruralreach.com', role: 'user' },
    ];
    return (
         <div>
            <h1 className="text-3xl font-bold text-gray-100 mb-6">Manage Users</h1>
            <div className="bg-gray-800 rounded-lg shadow-md overflow-x-auto border border-gray-700">
                <table className="min-w-full divide-y divide-gray-700">
                    <thead className="bg-gray-700">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Email</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Role</th>
                            <th className="relative px-6 py-3"><span className="sr-only">Actions</span></th>
                        </tr>
                    </thead>
                    <tbody className="bg-gray-800 divide-y divide-gray-700">
                        {mockUsers.map(user => (
                            <tr key={user.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">{user.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{user.email}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${user.role === 'admin' ? 'bg-red-900 text-red-200' : 'bg-blue-900 text-blue-200'}`}>
                                        {user.role}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <button className="text-red-500 hover:text-red-400">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AdminDashboard;