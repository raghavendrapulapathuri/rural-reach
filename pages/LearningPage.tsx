import React from 'react';
import { MOCK_LEARNING } from '../constants';
import { LearningMaterial } from '../types';
import { useAppContext } from '../context/AppContext';

const LearningPage: React.FC = () => {
    const { translate } = useAppContext();

    const renderMaterial = (material: LearningMaterial) => {
        return (
            <div key={material.id} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:shadow-2xl transition-shadow duration-300 flex flex-col border border-gray-700">
                <div className="relative">
                    {material.type === 'video' ? (
                         <div className="aspect-w-16 aspect-h-9">
                            <iframe 
                                src={material.mediaURL} 
                                title={material.title}
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                                className="w-full h-full object-cover"
                            ></iframe>
                        </div>
                    ) : (
                        <img src={material.mediaURL} alt={material.title} className="w-full h-64 object-cover"/>
                    )}
                     <span className="absolute top-2 right-2 bg-primary-600 text-white text-xs font-bold px-2 py-1 rounded-full uppercase">{material.type}</span>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                    <h2 className="text-2xl font-bold text-gray-100">{material.title}</h2>
                    <p className="text-gray-400 mt-2 flex-grow">{material.description}</p>
                    <div className="mt-4">
                        {material.tags.map(tag => (
                            <span key={tag} className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">#{tag}</span>
                        ))}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="space-y-12">
            <header className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-12 rounded-lg shadow-md text-center">
                <h1 className="text-4xl font-extrabold">{translate('learning')}</h1>
                <p className="mt-2 text-lg text-primary-200">Access tutorials, articles, and guides to master modern farming.</p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {MOCK_LEARNING.map(renderMaterial)}
            </div>
        </div>
    );
};

export default LearningPage;