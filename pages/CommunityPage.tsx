import React, { useState } from 'react';
import { MOCK_COMMUNITY_POSTS } from '../constants';
import { CommunityPost } from '../types';
import { useAppContext } from '../context/AppContext';
import { SendIcon } from '../components/icons';

const CommunityPage: React.FC = () => {
  const { translate } = useAppContext();
  const [posts, setPosts] = useState<CommunityPost[]>(MOCK_COMMUNITY_POSTS);
  const [newPost, setNewPost] = useState('');
  const [comments, setComments] = useState<{ [key: string]: string }>({});

  const handleAddPost = () => {
    if (!newPost.trim()) return;
    
    const newPostObj: CommunityPost = {
      id: String(Date.now()),
      author: 'You',
      avatar: 'https://i.pravatar.cc/48?u=currentUser',
      content: newPost,
      timestamp: 'Just now',
      comments: []
    };

    setPosts([newPostObj, ...posts]);
    setNewPost('');
  };

  const handleAddComment = (postId: string, comment: string) => {
    if (!comment.trim()) return;

    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          comments: [...post.comments, {
            id: String(Date.now()),
            author: 'You',
            avatar: 'https://i.pravatar.cc/48?u=currentUser',
            content: comment,
            timestamp: 'Just now'
          }]
        };
      }
      return post;
    }));
    setComments({ ...comments, [postId]: '' });
  };

  const renderPost = (post: CommunityPost) => (
    <div key={post.id} className="bg-gray-800 rounded-lg shadow-md p-6 border border-gray-700">
      <div className="flex items-start space-x-4">
        <img src={post.avatar} alt={post.author} className="w-12 h-12 rounded-full" />
        <div className="flex-1">
          <div className="flex items-baseline justify-between">
            <p className="font-bold text-gray-200">{post.author}</p>
            <p className="text-sm text-gray-500">{post.timestamp}</p>
          </div>
          <p className="mt-2 text-gray-300">{post.content}</p>
        </div>
      </div>
      <div className="mt-4 pl-16 space-y-4">
        {post.comments.map(comment => (
          <div key={comment.id} className="flex items-start space-x-4">
            <img src={comment.avatar} alt={comment.author} className="w-10 h-10 rounded-full" />
            <div className="flex-1 bg-gray-700 rounded-lg p-3">
              <div className="flex items-baseline justify-between">
                <p className="font-semibold text-gray-200">{comment.author}</p>
                <p className="text-xs text-gray-500">{comment.timestamp}</p>
              </div>
              <p className="mt-1 text-gray-300 text-sm">{comment.content}</p>
            </div>
          </div>
        ))}
        <div className="flex items-center space-x-2 pt-2">
            <img src="https://i.pravatar.cc/48?u=currentUser" alt="You" className="w-10 h-10 rounded-full" />
            <input 
                type="text" 
                placeholder="Write a comment..." 
                value={comments[post.id] || ''}
                onChange={(e) => setComments({ ...comments, [post.id]: e.target.value })}
                className="flex-1 px-4 py-2 border border-gray-600 bg-gray-700 text-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
            />
            <button 
                onClick={() => handleAddComment(post.id, comments[post.id] || '')}
                className="bg-primary-600 text-white rounded-full p-2 hover:bg-primary-700 transition-colors"
            >
                <SendIcon className="w-5 h-5" />
            </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      <header className="bg-gray-800 py-8 rounded-lg shadow-md text-center border border-gray-700">
        <h1 className="text-4xl font-extrabold text-gray-100">{translate('community')} Forum</h1>
        <p className="mt-2 text-lg text-gray-400">Connect with fellow farmers, ask questions, and share your experiences.</p>
      </header>
      
      <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700">
        <h2 className="text-2xl font-bold mb-4 text-gray-100">Start a New Discussion</h2>
        <textarea 
            placeholder="What's on your mind?"
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            className="w-full h-24 p-4 border border-gray-600 bg-gray-700 text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
        <button 
            onClick={handleAddPost}
            className="mt-4 bg-primary-600 text-white font-bold py-2 px-6 rounded-md hover:bg-primary-700 transition-colors"
        >
            Post
        </button>
      </div>

      <div className="space-y-6">
        {posts.map(renderPost)}
      </div>
    </div>
  );
};

export default CommunityPage;