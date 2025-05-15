import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Plus, MessageSquare, Settings, User, LogOut, ChevronDown, 
  Search, Star, Trash2, FileText, Share2 
} from 'lucide-react';
import Button from '../components/ui/Button';

interface ChatItem {
  id: string;
  title: string;
  preview: string;
  date: string;
  starred?: boolean;
}

const DashboardPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Dashboard - NexusAI';
  }, []);

  const [chatList, setChatList] = useState<ChatItem[]>([
    {
      id: '1',
      title: 'AI Trends 2025',
      preview: 'What technologies will shape AI in 2025?',
      date: '2 hours ago',
      starred: true,
    },
    {
      id: '2',
      title: 'Marketing Strategy Analysis',
      preview: 'Can you help me analyze our Q3 marketing strategy?',
      date: 'Yesterday',
    },
    {
      id: '3',
      title: 'Creative Writing Assistance',
      preview: 'I need help writing a compelling introduction for my novel about...',
      date: '3 days ago',
    },
    {
      id: '4',
      title: 'Code Review: React Components',
      preview: 'Can you review this React component and suggest performance improvements?',
      date: '1 week ago',
      starred: true,
    },
    {
      id: '5',
      title: 'Business Proposal Draft',
      preview: 'Help me draft a business proposal for a new SaaS product targeting...',
      date: '2 weeks ago',
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleStarToggle = (id: string) => {
    setChatList(prev => 
      prev.map(chat => 
        chat.id === id ? { ...chat, starred: !chat.starred } : chat
      )
    );
  };

  const handleDelete = (id: string) => {
    setChatList(prev => prev.filter(chat => chat.id !== id));
  };

  const filteredChats = chatList.filter(chat => {
    const matchesSearch = chat.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         chat.preview.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (selectedCategory === 'all') return matchesSearch;
    if (selectedCategory === 'starred') return matchesSearch && chat.starred;
    
    return matchesSearch;
  });

  return (
    <div className="min-h-screen pt-16 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-64 flex-shrink-0"
          >
            <div className="bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden">
              <div className="p-4">
                <Link to="/chat" className="w-full">
                  <Button 
                    leftIcon={<Plus size={16} />}
                    fullWidth
                  >
                    New Chat
                  </Button>
                </Link>
              </div>
              
              <div className="border-t border-neutral-200">
                <nav className="flex flex-col p-2">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`flex items-center px-3 py-2 text-sm rounded-lg ${
                      selectedCategory === 'all' 
                        ? 'bg-primary-50 text-primary-700 font-medium' 
                        : 'text-neutral-700 hover:bg-neutral-100'
                    }`}
                  >
                    <MessageSquare size={18} className="mr-2" />
                    <span>All chats</span>
                  </button>
                  <button
                    onClick={() => setSelectedCategory('starred')}
                    className={`flex items-center px-3 py-2 text-sm rounded-lg ${
                      selectedCategory === 'starred' 
                        ? 'bg-primary-50 text-primary-700 font-medium' 
                        : 'text-neutral-700 hover:bg-neutral-100'
                    }`}
                  >
                    <Star size={18} className="mr-2" />
                    <span>Starred</span>
                  </button>
                  <button
                    onClick={() => setSelectedCategory('documents')}
                    className={`flex items-center px-3 py-2 text-sm rounded-lg ${
                      selectedCategory === 'documents' 
                        ? 'bg-primary-50 text-primary-700 font-medium' 
                        : 'text-neutral-700 hover:bg-neutral-100'
                    }`}
                  >
                    <FileText size={18} className="mr-2" />
                    <span>Documents</span>
                  </button>
                </nav>
              </div>
              
              <div className="border-t border-neutral-200 p-4">
                <div className="flex items-center mb-2">
                  <div className="flex-shrink-0">
                    <div className="h-9 w-9 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-medium">
                      JD
                    </div>
                  </div>
                  <div className="ml-3 flex-1">
                    <p className="text-sm font-medium text-neutral-900">John Doe</p>
                    <p className="text-xs text-neutral-500">Pro Plan</p>
                  </div>
                  <button className="p-1 rounded-full hover:bg-neutral-100">
                    <ChevronDown size={16} className="text-neutral-600" />
                  </button>
                </div>
                
                <div className="mt-3 space-y-1">
                  <button className="flex items-center w-full px-3 py-2 text-sm rounded-lg text-neutral-700 hover:bg-neutral-100">
                    <Settings size={16} className="mr-2" />
                    <span>Settings</span>
                  </button>
                  <button className="flex items-center w-full px-3 py-2 text-sm rounded-lg text-neutral-700 hover:bg-neutral-100">
                    <User size={16} className="mr-2" />
                    <span>Account</span>
                  </button>
                  <button className="flex items-center w-full px-3 py-2 text-sm rounded-lg text-neutral-700 hover:bg-neutral-100">
                    <LogOut size={16} className="mr-2" />
                    <span>Log out</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1"
          >
            <div className="bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden">
              <div className="p-4 border-b border-neutral-200">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search size={18} className="text-neutral-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search chats..."
                    value={searchQuery}
                    onChange={handleSearch}
                    className="w-full py-2 pl-10 pr-4 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-300"
                  />
                </div>
              </div>
              
              <div className="divide-y divide-neutral-200">
                {filteredChats.length > 0 ? (
                  filteredChats.map((chat) => (
                    <div key={chat.id} className="p-4 hover:bg-neutral-50 transition-colors">
                      <div className="flex items-center justify-between">
                        <Link to={`/chat?id=${chat.id}`} className="flex-1 min-w-0">
                          <div className="flex items-center">
                            <MessageSquare size={18} className="text-neutral-400 mr-3 flex-shrink-0" />
                            <div className="flex-1 min-w-0">
                              <h3 className="text-sm font-medium text-neutral-900 truncate">{chat.title}</h3>
                              <p className="text-xs text-neutral-500 truncate mt-1">{chat.preview}</p>
                            </div>
                          </div>
                        </Link>
                        <div className="ml-4 flex flex-shrink-0 items-center space-x-2">
                          <span className="text-xs text-neutral-500">{chat.date}</span>
                          <button 
                            onClick={() => handleStarToggle(chat.id)}
                            className={`p-1 rounded-full ${
                              chat.starred 
                                ? 'text-yellow-500 hover:bg-yellow-50' 
                                : 'text-neutral-400 hover:bg-neutral-100'
                            }`}
                          >
                            <Star size={16} className={chat.starred ? 'fill-yellow-500' : ''} />
                          </button>
                          <button className="p-1 rounded-full text-neutral-400 hover:bg-neutral-100">
                            <Share2 size={16} />
                          </button>
                          <button 
                            onClick={() => handleDelete(chat.id)}
                            className="p-1 rounded-full text-neutral-400 hover:bg-neutral-100 hover:text-error-500"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-8 text-center">
                    <p className="text-neutral-500">No chats found</p>
                    <Link to="/chat" className="text-primary-600 font-medium hover:text-primary-700 mt-2 inline-block">
                      Start a new chat
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* Usage Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-4">
                <h3 className="text-sm font-medium text-neutral-600 mb-2">Messages Today</h3>
                <p className="text-2xl font-bold">42</p>
                <div className="mt-2 h-2 bg-neutral-100 rounded-full overflow-hidden">
                  <div className="h-full bg-primary-500 rounded-full" style={{ width: '42%' }}></div>
                </div>
                <p className="text-xs text-neutral-500 mt-2">42% of daily limit</p>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-4">
                <h3 className="text-sm font-medium text-neutral-600 mb-2">Active Chats</h3>
                <p className="text-2xl font-bold">{chatList.length}</p>
                <div className="mt-2 h-2 bg-neutral-100 rounded-full overflow-hidden">
                  <div className="h-full bg-secondary-500 rounded-full" style={{ width: '15%' }}></div>
                </div>
                <p className="text-xs text-neutral-500 mt-2">From 5 unique topics</p>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-4">
                <h3 className="text-sm font-medium text-neutral-600 mb-2">Pro Plan</h3>
                <p className="text-2xl font-bold">12 days</p>
                <div className="mt-2 h-2 bg-neutral-100 rounded-full overflow-hidden">
                  <div className="h-full bg-accent-400 rounded-full" style={{ width: '60%' }}></div>
                </div>
                <p className="text-xs text-neutral-500 mt-2">12 days left in trial</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;