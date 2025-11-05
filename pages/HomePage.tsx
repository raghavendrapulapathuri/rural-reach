import React from 'react';
import { Link } from 'react-router-dom';
import { MOCK_SCHEMES, MOCK_TOOLS, MOCK_LEARNING } from '../constants';
import { useAppContext } from '../context/AppContext';

const HomePage: React.FC = () => {
    const { translate } = useAppContext();

    const renderSchemeCard = (scheme: typeof MOCK_SCHEMES[0]) => (
        <div key={scheme.id} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 border border-gray-700">
            <img src={scheme.image} alt={scheme.name} className="w-full h-48 object-cover"/>
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-100 mb-2">{scheme.name}</h3>
                <p className="text-gray-400 text-sm line-clamp-3">{scheme.description}</p>
                <Link to="/schemes" className="inline-block mt-4 text-primary-400 hover:text-primary-300 font-semibold">{translate('readMore')} &rarr;</Link>
            </div>
        </div>
    );

    const renderToolCard = (tool: typeof MOCK_TOOLS[0]) => (
         <div key={tool.id} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 border border-gray-700">
            <img src={tool.imageURL} alt={tool.name} className="w-full h-48 object-cover"/>
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-100 mb-2">{tool.name}</h3>
                <p className="text-gray-400 text-sm line-clamp-3">{tool.description}</p>
                 <Link to="/tools" className="inline-block mt-4 text-primary-400 hover:text-primary-300 font-semibold">{translate('readMore')} &rarr;</Link>
            </div>
        </div>
    );

    const renderLearningCard = (material: typeof MOCK_LEARNING[0]) => (
        <div key={material.id} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 border border-gray-700">
            <img src={material.mediaURL} alt={material.title} className="w-full h-48 object-cover"/>
            <div className="p-6">
                 <span className="text-xs font-semibold uppercase text-primary-400">{material.type}</span>
                <h3 className="text-xl font-bold text-gray-100 mt-1 mb-2">{material.title}</h3>
                <p className="text-gray-400 text-sm line-clamp-3">{material.description}</p>
                <Link to="/learning" className="inline-block mt-4 text-primary-400 hover:text-primary-300 font-semibold">{translate('readMore')} &rarr;</Link>
            </div>
        </div>
    );

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative rounded-lg shadow-xl overflow-hidden text-white -mt-8 -mx-4 sm:-mx-6 lg:-mx-8">
         <div className="absolute inset-0">
             <img src="https://images.unsplash.com/photo-1706365694177-604956687bfa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cnVyYWwlMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000" alt="Indian Rural landscape" className="w-full h-full object-cover"/>
             <div className="absolute"></div>
         </div>
        <div className="relative container mx-auto text-center py-24 px-4 sm:py-32">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            {translate('ruralReach')}: <span className="text-primary-300">Empowering India's Farmers</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-primary-100">
            Your one-stop platform for government schemes, modern farming tools, and expert knowledge.
          </p>
          <div className="mt-10">
            <Link to="/schemes" className="bg-white text-primary-700 font-bold py-3 px-8 rounded-full text-lg hover:bg-primary-50 transition-transform transform hover:scale-105">
              Explore Schemes
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Schemes */}
      <section>
        <h2 className="text-3xl font-bold text-center text-gray-100 mb-8">{translate('schemes')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_SCHEMES.slice(0, 3).map(renderSchemeCard)}
        </div>
      </section>

      {/* Featured Tools */}
      <section>
        <h2 className="text-3xl font-bold text-center text-gray-100 mb-8">{translate('tools')}</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MOCK_TOOLS.slice(0, 3).map(renderToolCard)}
        </div>
      </section>

      {/* Featured Learning */}
      <section>
        <h2 className="text-3xl font-bold text-center text-gray-100 mb-8">{translate('learning')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MOCK_LEARNING.slice(0, 3).map(renderLearningCard)}
        </div>
      </section>
    </div>
  );
};

export default HomePage;