import React, { useState } from 'react';
import { MOCK_TOOLS } from '../constants';
import { Tool } from '../types';
import { useAppContext } from '../context/AppContext';

const ToolsPage: React.FC = () => {
    const { translate } = useAppContext();
    const [selectedTool, setSelectedTool] = useState<Tool | null>(null);

    return (
        <div className="space-y-12">
            <header className="bg-primary-900 text-primary-200 py-12 rounded-lg shadow-md text-center">
                <h1 className="text-4xl font-extrabold">{translate('tools')}</h1>
                <p className="mt-2 text-lg">Discover modern tools and techniques to enhance your productivity.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {MOCK_TOOLS.map((tool: Tool) => (
                    <div key={tool.id} className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
                        <img src={tool.imageURL} alt={tool.name} className="w-full h-56 object-cover"/>
                        <div className="p-6 flex flex-col flex-grow">
                            <h2 className="text-xl font-bold text-gray-100">{tool.name}</h2>
                            <p className="text-gray-400 mt-2 flex-grow">{tool.description}</p>
                            <div className="mt-4">
                                {tool.videoLink && (
                                    <button 
                                        onClick={() => setSelectedTool(tool)}
                                        className="w-full bg-primary-600 text-white font-bold py-2 px-4 rounded-md hover:bg-primary-700 transition-colors"
                                    >
                                        {translate('watchVideo')}
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {selectedTool && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={() => setSelectedTool(null)}>
                    <div className="bg-gray-800 rounded-lg shadow-2xl p-4 w-11/12 max-w-3xl border border-gray-700" onClick={(e) => e.stopPropagation()}>
                        <div className="aspect-w-16 aspect-h-9">
                            <iframe 
                                src={selectedTool.videoLink} 
                                title={selectedTool.name}
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                                className="w-full h-full"
                            ></iframe>
                        </div>
                        <h3 className="text-2xl font-bold mt-4 text-gray-100">{selectedTool.name}</h3>
                        <p className="text-gray-400 mt-2">{selectedTool.description}</p>
                        <button 
                            onClick={() => setSelectedTool(null)}
                            className="mt-4 bg-gray-600 text-gray-100 font-bold py-2 px-4 rounded-md hover:bg-gray-500"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ToolsPage;