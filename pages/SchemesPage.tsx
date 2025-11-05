import React, { useState, useMemo } from 'react';
import { MOCK_SCHEMES } from '../constants';
import { Scheme } from '../types';
import { useAppContext } from '../context/AppContext';

const SchemesPage: React.FC = () => {
  const { translate } = useAppContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDept, setSelectedDept] = useState('All');

  const categories = useMemo(() => ['All', ...Array.from(new Set(MOCK_SCHEMES.map(s => s.category)))], []);
  const departments = useMemo(() => ['All', ...Array.from(new Set(MOCK_SCHEMES.map(s => s.department)))], []);

  const filteredSchemes = useMemo(() => {
    return MOCK_SCHEMES.filter(scheme => {
      const matchesSearch = scheme.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            scheme.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || scheme.category === selectedCategory;
      const matchesDept = selectedDept === 'All' || scheme.department === selectedDept;
      return matchesSearch && matchesCategory && matchesDept;
    });
  }, [searchTerm, selectedCategory, selectedDept]);

  return (
    <div className="min-h-screen">
      <header className="bg-primary-700 text-white py-12 rounded-lg shadow-md">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-extrabold">{translate('schemes')}</h1>
          <p className="mt-2 text-lg text-primary-200">Explore government initiatives to support your agricultural journey.</p>
        </div>
      </header>
      
      <div className="container mx-auto py-8">
        {/* Filters */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-8 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          <input
            type="text"
            placeholder={translate('search')}
            className="w-full px-4 py-2 border border-gray-600 bg-gray-700 text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <select
            className="w-full px-4 py-2 border border-gray-600 bg-gray-700 text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value)}
          >
            {categories.map(cat => <option key={cat} value={cat}>{cat === 'All' ? translate('allCategories') : cat}</option>)}
          </select>
          <select
            className="w-full px-4 py-2 border border-gray-600 bg-gray-700 text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            value={selectedDept}
            onChange={e => setSelectedDept(e.target.value)}
          >
            {departments.map(dept => <option key={dept} value={dept}>{dept === 'All' ? 'All Departments' : dept}</option>)}
          </select>
        </div>

        {/* Schemes List */}
        <div className="grid grid-cols-1 gap-8">
          {filteredSchemes.length > 0 ? filteredSchemes.map((scheme: Scheme) => (
            <div key={scheme.id} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row transition-shadow hover:shadow-xl border border-gray-700">
              <img src={scheme.image} alt={scheme.name} className="w-full md:w-1/3 h-64 md:h-auto object-cover"/>
              <div className="p-6 flex flex-col flex-1">
                <span className="text-sm font-semibold text-primary-400">{scheme.category}</span>
                <h2 className="text-2xl font-bold text-gray-100 mt-1">{scheme.name}</h2>
                <p className="text-gray-400 mt-2 flex-grow">{scheme.description}</p>
                <div className="mt-4 border-t border-gray-700 pt-4">
                  <p><strong className="font-semibold text-gray-300">Eligibility:</strong> {scheme.eligibility}</p>
                  <p className="mt-1"><strong className="font-semibold text-gray-300">How to Apply:</strong> {scheme.howToApply}</p>
                </div>
                <div className="mt-6">
                  <a href={scheme.officialLink} target="_blank" rel="noopener noreferrer" className="inline-block bg-primary-600 text-white font-bold py-2 px-6 rounded-md hover:bg-primary-700 transition-colors">
                    {translate('applyNow')}
                  </a>
                </div>
              </div>
            </div>
          )) : (
            <div className="text-center py-16 bg-gray-800 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-gray-200">No Schemes Found</h3>
                <p className="text-gray-400 mt-2">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SchemesPage;