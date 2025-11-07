import React from 'react';
import { MOCK_LEARNING } from '../constants';
import { LearningMaterial } from '../types';
import { useAppContext } from '../context/AppContext';

const LearningPage: React.FC = () => {
    const { translate } = useAppContext();

    const renderMaterial = (material: LearningMaterial) => {
        return (
            <div key={material.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col border border-gray-200">
                <div className="relative h-48 md:h-64">
                    {material.type === 'video' ? (
                         <div className="w-full h-full">
                            <iframe 
                                src={material.mediaURL} 
                                title={material.title}
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                                className="w-full h-full object-fit-cover"
                            ></iframe>
                        </div>
                    ) : (
                        <img src={material.mediaURL} alt={material.title} className="w-full h-full object-cover"/>
                    )}
                     <span className="absolute top-2 right-2 bg-primary-600 text-white text-xs font-bold px-2 py-1 rounded-full uppercase">{material.type}</span>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                    <h2 className="text-xl font-bold text-gray-800">{material.title}</h2>
                    <p className="text-gray-600 mt-2 flex-grow line-clamp-3">{material.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {material.tags.map(tag => (
                            <span key={tag} className="inline-block bg-primary-50 text-primary-700 rounded-full px-3 py-1 text-sm font-semibold">#{tag}</span>
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

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 auto-rows-fr">
                {MOCK_LEARNING.map(renderMaterial)}
            </div>
        </div>
    );
};

export default LearningPage;