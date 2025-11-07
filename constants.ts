import { Scheme, Tool, LearningMaterial, CommunityPost, Translations, ChatMessage } from './types';

// Demo credentials for authentication
export const DEMO_CREDENTIALS = {
  users: [
    {
      email: 'farmer@demo.com',
      password: 'farmer123',
      role: 'farmer',
      name: 'Demo Farmer'
    },
    {
      email: 'admin@demo.com',
      password: 'admin123',
      role: 'admin',
      name: 'Demo Admin'
    }
  ]
};

// Predefined chatbot Q&A pairs
export const CHATBOT_QA: ChatMessage[] = [
  {
    question: "What government schemes are available for farmers?",
    answer: "There are several key schemes available:\n1. PM Kisan Samman Nidhi - Financial support of ₹6,000 per year\n2. Kisan Credit Card - Easy credit access\n3. PMFBY - Crop insurance scheme\n4. Soil Health Card - Free soil testing and recommendations\nYou can find more details in our Schemes section."
  },
  {
    question: "How can I apply for PM Kisan?",
    answer: "To apply for PM Kisan:\n1. Visit pmkisan.gov.in\n2. Click on 'New Farmer Registration'\n3. Fill in your Aadhaar, bank details, and land records\n4. Submit the form\n5. Track your application using the registration number\nYou can also visit your nearest Common Service Centre (CSC) for assistance."
  },
  {
    question: "What is the eligibility for Kisan Credit Card?",
    answer: "You are eligible for a Kisan Credit Card if you are:\n1. A farmer (individual/joint)\n2. Owner cultivator\n3. Tenant farmer or sharecropper\n4. Member of SHGs or Joint Liability Groups\nVisit your nearest bank with land records and ID proof to apply."
  },
  {
    question: "How to check soil health?",
    answer: "To check your soil health:\n1. Get a Soil Health Card from local agriculture office\n2. Collect soil sample as per guidelines\n3. Submit to testing lab\n4. Receive detailed analysis and recommendations\nThis service is free under the Soil Health Card Scheme."
  },
  {
    question: "What modern farming tools are recommended?",
    answer: "Some recommended modern farming tools include:\n1. Drip irrigation systems for water efficiency\n2. Solar pumps for sustainable energy\n3. Soil testing kits for nutrient management\n4. Modern seeders and harvesters\nCheck our Tools section for detailed information and suppliers."
  },
  {
    question: "How to protect crops from pests?",
    answer: "To protect crops from pests:\n1. Regular monitoring of fields\n2. Use of appropriate bio-pesticides\n3. Maintain field hygiene\n4. Follow integrated pest management\n5. Consult our Learning section for detailed guides\nYou can also connect with experts through our Community forum."
  },
  {
    question: "What are the benefits of organic farming?",
    answer: "Benefits of organic farming include:\n1. Higher profit margins\n2. Better soil health\n3. Environmental sustainability\n4. Chemical-free produce\n5. Lower input costs long-term\nExplore our Learning section for organic farming guides."
  },
  {
    question: "How to get weather updates for farming?",
    answer: "For weather updates:\n1. Use weather apps like Mausam\n2. Subscribe to SMS alerts from IMD\n3. Check local agriculture department advisories\n4. Join our community for real-time updates\nThis helps in planning farming activities better."
  },
  {
    question: "What are the current MSP rates?",
    answer: "Minimum Support Prices (MSP) are updated seasonally. For current rates:\n1. Visit the official portal: enam.gov.in\n2. Check local APMC markets\n3. Use the PM Kisan app\nWe also update MSP information in our Schemes section regularly."
  },
  {
    question: "How to join farmer communities?",
    answer: "To connect with farmer communities:\n1. Join our Community forum\n2. Participate in local Farmer Producer Organizations\n3. Attend Krishi Vigyan Kendra meetings\n4. Connect with agricultural universities\nShare experiences and learn from others!"
  }
];

export const MOCK_SCHEMES: Scheme[] = [
  {
    id: '1',
    name: 'PM Kisan Samman Nidhi',
    description: 'A central sector scheme with 100% funding from Government of India. Under the scheme an income support of 6,000/- per year in three equal installments will be provided to small and marginal farmer families.',
    category: 'Financial Support',
    department: 'Ministry of Agriculture & Farmers Welfare',
    eligibility: 'All small and marginal farmers.',
    howToApply: 'Register through the official PM-KISAN portal or at the nearest Common Service Centre (CSC).',
    officialLink: 'https://pmkisan.gov.in/',
    image: 'https://jaagrukbharat.com/_next/image?url=https%3A%2F%2Fjbsa01.blob.core.windows.net%2Fjb-public%2Farticle%252Fimages%252Fce104f58-1769-4bf8-93f3-a45e6d9e4d82_1sM5xVF0m4ZoXoX-lWGDD0mU4Iof27gzE.webp&w=640&q=85'
  },
  {
    id: '2',
    name: 'Kisan Credit Card (KCC)',
    description: 'The Kisan Credit Card (KCC) scheme aims at providing adequate and timely credit support from the banking system under a single window with flexible and simplified procedure to the farmers for their cultivation and other needs.',
    category: 'Credit & Insurance',
    department: 'Department of Financial Services',
    eligibility: 'Farmers - individual/joint borrowers who are owner cultivators; tenant farmers, oral lessees & share croppers; SHGs or Joint Liability Groups of farmers.',
    howToApply: 'Contact your nearest bank branch with land records and other required documents.',
    officialLink: 'https://www.sbi.co.in/web/agri-rural/agriculture-banking/crop-finance/kisan-credit-card',
    image: 'https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2023/01/kisan-credit-card-big-1604458302-1674206643.jpg'
  },
  {
    id: '3',
    name: 'Pradhan Mantri Fasal Bima Yojana (PMFBY)',
    description: 'PMFBY is the government sponsored crop insurance scheme that integrates multiple stakeholders on a single platform to provide insurance cover and financial support to the farmers in the event of failure of any of the notified crop as a result of natural calamities, pests & diseases.',
    category: 'Credit & Insurance',
    department: 'Ministry of Agriculture & Farmers Welfare',
    eligibility: 'All farmers including sharecroppers and tenant farmers growing notified crops in the notified areas are eligible for coverage.',
    howToApply: 'Enroll through the PMFBY portal, nearest bank, or insurance company.',
    officialLink: 'https://pmfby.gov.in/',
    image: 'https://images.pexels.com/photos/2382904/pexels-photo-2382904.jpeg'
  },
  {
    id: '4',
    name: 'Soil Health Card Scheme',
    description: 'A scheme to provide every farmer with a soil health card, which will contain details about the soil\'s nutrient status and recommendations on the dosage of fertilizers and other soil amendments to be used for different crops.',
    category: 'Soil & Water Conservation',
    department: 'Ministry of Agriculture & Farmers Welfare',
    eligibility: 'All farmers are eligible to get a Soil Health Card.',
    howToApply: 'Contact the local agriculture office or department.',
    officialLink: 'https://soilhealth.dac.gov.in/',
    image: 'https://images.pexels.com/photos/2255799/pexels-photo-2255799.jpeg'
  },
  {
    id: '5',
    name: 'Pradhan Mantri Krishi Sinchayee Yojana (PMKSY)',
    description: 'Launched with the motto of \'Har Khet Ko Paani\', this scheme aims to expand cultivated area with assured irrigation, reduce wastage of water and improve water use efficiency.',
    category: 'Irrigation',
    department: 'Ministry of Jal Shakti',
    eligibility: 'Farmers who have agricultural land are eligible. Self Help Groups, Trusts, Cooperative Societies are also eligible.',
    howToApply: 'Contact the district agriculture offices or apply through the state\'s agriculture portal.',
    officialLink: 'https://pmksy.gov.in/',
    image: 'https://images.pexels.com/photos/2382897/pexels-photo-2382897.jpeg'
  },
  {
    id: '6',
    name: 'National Agriculture Market (eNAM)',
    description: 'An online trading platform for agricultural commodities in India. The market facilitates farmers, traders and buyers with online trading in commodities.',
    category: 'Market Linkage',
    department: 'Ministry of Agriculture & Farmers Welfare',
    eligibility: 'Licensed traders and farmers registered with their local APMC.',
    howToApply: 'Register on the eNAM mobile app or web portal through your local Agricultural Produce Market Committee (APMC).',
    officialLink: 'https://www.enam.gov.in/web/',
    image: 'https://images.pexels.com/photos/2255804/pexels-photo-2255804.jpeg'
  },
  {
    id: '7',
    name: 'Rashtriya Krishi Vikas Yojana (RKVY-RAFTAAR)',
    description: 'A scheme to provide states with the autonomy and flexibility to plan and execute programs for agricultural development. It supports agri-startups and promotes innovation.',
    category: 'Agri-Business',
    department: 'Ministry of Agriculture & Farmers Welfare',
    eligibility: 'Varies by state-specific projects. Includes farmers, entrepreneurs, and public/private institutions.',
    howToApply: 'Proposals are submitted to the State Level Sanctioning Committee (SLSC) through the state agriculture department.',
    officialLink: 'https://rkvy.nic.in/',
    image: 'https://www.legalraasta.com/blog/wp-content/uploads/2021/10/Rashtriya-Krishi-Vikas-Yojana.png'
  }
];

export const MOCK_TOOLS: Tool[] = [
  {
    id: '1',
    name: 'Drip Irrigation System',
    description: 'An efficient watering system that delivers water directly to the plant roots, minimizing evaporation and water waste. Increases crop yield and saves water.',
    category: 'Irrigation',
    imageURL: 'https://images.pexels.com/photos/2255800/pexels-photo-2255800.jpeg',
    videoLink: 'https://www.youtube.com/embed/S_n-sO_s-2w'
  },
  {
    id: '2',
    name: 'Solar Water Pump',
    description: 'A pump running on electricity generated by photovoltaic panels. It provides a reliable and cost-effective solution for irrigation in areas with frequent power cuts.',
    category: 'Energy',
    imageURL: 'https://images.pexels.com/photos/2260847/pexels-photo-2260847.jpeg',
    videoLink: 'https://www.youtube.com/embed/S_n-sO_s-2w'
  },
  {
    id: '3',
    name: 'Polyhouse Farming',
    description: 'A method of growing crops in a controlled environment. Polyhouses protect plants from adverse weather conditions, pests, and diseases, allowing for year-round cultivation and higher yields.',
    category: 'Cultivation Technique',
    imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFEeXIVNEJJabjHw1y6ejJfxfLh1iUC7MlZA&s',
    videoLink: 'https://www.youtube.com/embed/S_n-sO_s-2w'
  },
   {
    id: '4',
    name: 'Crop Harvesting Machine',
    description: 'Mechanized harvesters that drastically reduce the time and labor required for harvesting crops like wheat, rice, and corn, improving efficiency and reducing post-harvest losses.',
    category: 'Machinery',
    imageURL: 'https://images.pexels.com/photos/2382973/pexels-photo-2382973.jpeg',
  },
  {
    id: '5',
    name: 'Precision Farming Technology',
    description: 'Utilizes GPS, sensors, and drones to monitor crop health, soil conditions, and apply resources like water and fertilizers precisely where needed, optimizing yield and reducing waste.',
    category: 'Technology',
    imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwWRCddtCiiHLjwCXPQPnYAHrYcXz5JEkpwg&s',
    videoLink: 'https://www.youtube.com/embed/S_n-sO_s-2w'
  },
  {
    id: '6',
    name: 'Vertical Farming Setup',
    description: 'A method of growing crops in vertically stacked layers, often indoors. It allows for year-round production, conserves space, and uses significantly less water than traditional farming.',
    category: 'Cultivation Technique',
    imageURL: 'https://images.pexels.com/photos/2382894/pexels-photo-2382894.jpeg',
  },
  {
    id: '7',
    name: 'Agricultural Drones',
    description: 'Unmanned aerial vehicles equipped with cameras and sprayers for crop monitoring, health assessment, and precise application of pesticides and fertilizers.',
    category: 'Machinery',
    imageURL: 'https://images.pexels.com/photos/2382892/pexels-photo-2382892.jpeg',
    videoLink: 'https://www.youtube.com/embed/S_n-sO_s-2w'
  }
];

export const MOCK_LEARNING: LearningMaterial[] = [
  {
    id: '1',
    title: 'Introduction to Organic Farming',
    description: 'Learn the basic principles of organic farming, including soil management, natural pest control, and composting techniques. This video is great for beginners.',
    type: 'video',
    mediaURL: 'https://cdn.tractorkarvan.com/tr:f-webp/images/Blogs/what-is-organic-farming/organic_farming_infographic.jpg',
    tags: ['organic', 'sustainable', 'beginner']
  },
  {
    id: '2',
    title: '5 Steps to Effective Crop Rotation',
    description: 'Discover how crop rotation can improve soil health, reduce pest problems, and increase your overall yield. This article breaks it down into five simple steps.',
    type: 'article',
    mediaURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQstMEHiC1GzWAt8Moq2IYxgUPRdKFi-X0fkg&s',
    tags: ['soil-health', 'pests', 'planning']
  },
  {
    id: '3',
    title: 'Understanding Soil pH',
    description: 'A visual guide to understanding what soil pH is, why it matters for your crops, and how to test and adjust it for optimal plant growth.',
    type: 'infographic',
    mediaURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuto86tn9-vzqUvabW1li1IcKB5jEdQdYm6g&s',
    tags: ['soil', 'testing', 'nutrients']
  },
  {
    id: '4',
    title: 'Hydroponics at Home',
    description: 'A video tutorial on setting up a small-scale hydroponics system for growing vegetables at home with minimal space and soil.',
    type: 'video',
    mediaURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUGXvPWcHmplvCUQhPf8YkYRNpbDiQpcqAJw&s',
    tags: ['hydroponics', 'soilless', 'urban-farming']
  },
  {
    id: '5',
    title: 'Effective Water Management in Dry Seasons',
    description: 'An in-depth article exploring techniques like rainwater harvesting, mulching, and efficient irrigation scheduling to conserve water and protect crops during periods of drought.',
    type: 'article',
    mediaURL: 'https://picsum.photos/seed/learn5/400/300',
    tags: ['water-conservation', 'drought', 'irrigation']
  },
  {
    id: '6',
    title: 'Guide to Post-Harvest Management',
    description: 'Learn best practices for handling, storing, and processing crops after harvest to minimize losses and maximize market value. This video covers drying, storage solutions, and more.',
    type: 'video',
    mediaURL: 'https://images.squarespace-cdn.com/content/v1/65764d4e6c1b3b026d0afd05/1702863853743-NVVABZZ40XI2MMCZXA9W/tim-mossholder-xDwEa2kaeJA-unsplash.jpg',
    tags: ['post-harvest', 'storage', 'value-addition']
  },
  {
    id: '7',
    title: 'Common Pests and Diseases Identification',
    description: 'A handy infographic to help you quickly identify common pests and diseases affecting major crops in India. Includes visual cues and initial control recommendations.',
    type: 'infographic',
    mediaURL: 'https://picsum.photos/seed/learn7/400/300',
    tags: ['pest-control', 'crop-disease', 'identification']
  }
];

export const MOCK_COMMUNITY_POSTS: CommunityPost[] = [
  {
    id: '1',
    author: 'Ramesh Kumar',
    avatar: 'https://i.pravatar.cc/48?u=ramesh',
    timestamp: '2 hours ago',
    content: 'I am facing a pest problem with my tomato crop. The leaves are turning yellow and have small holes. Any advice on organic pest control methods?',
    comments: [
      { id: 'c1', author: 'Sunita Devi', avatar: 'https://i.pravatar.cc/48?u=sunita', timestamp: '1 hour ago', content: 'You can try a neem oil spray. It works well for most common pests on tomato plants. Mix 5ml of neem oil with 1 liter of water and a few drops of liquid soap.' },
      { id: 'c2', author: 'Amit Singh', avatar: 'https://i.pravatar.cc/48?u=amit', timestamp: '30 mins ago', content: 'I agree with Sunita. Also, consider planting marigold flowers around your tomato plants next season. They act as a natural pest repellent.' }
    ]
  },
  {
    id: '2',
    author: 'Priya Sharma',
    avatar: 'https://i.pravatar.cc/48?u=priya',
    timestamp: '1 day ago',
    content: 'Has anyone tried using the new solar water pump under the PM-KUSUM scheme? I am thinking of applying and wanted to know about the experience and benefits.',
    comments: [
      { id: 'c3', author: 'Vikram Patel', avatar: 'https://i.pravatar.cc/48?u=vikram', timestamp: '22 hours ago', content: 'Yes, I installed one six months ago. The electricity savings are significant, and I no longer have to worry about power cuts for irrigation. The application process was a bit long, but it was worth it.' }
    ]
  },
  {
    id: '3',
    author: 'Sanjay Verma',
    avatar: 'https://i.pravatar.cc/48?u=sanjay',
    timestamp: '2 days ago',
    content: 'What is the current market price for wheat in the Punjab region? The eNAM portal is showing some variation. Any local farmers have insights?',
    comments: [
      { id: 'c4', author: 'Gurpreet Singh', avatar: 'https://i.pravatar.cc/48?u=gurpreet', timestamp: '1 day ago', content: 'In my local mandi in Ludhiana, the price is around ₹2150 per quintal for good quality wheat. eNAM prices can sometimes have a slight delay.' },
    ]
  },
  {
    id: '4',
    author: 'Anjali Desai',
    avatar: 'https://i.pravatar.cc/48?u=anjali',
    timestamp: '3 days ago',
    content: 'I\'m looking to improve the nitrogen content in my soil for the next season without using too many chemical fertilizers. What are some good cover crops to plant?',
    comments: [
      { id: 'c5', author: 'Ramesh Kumar', avatar: 'https://i.pravatar.cc/48?u=ramesh', timestamp: '3 days ago', content: 'Dhaincha (Sesbania) is excellent for nitrogen fixation. You can also try cowpea or sunn hemp. They grow fast and add a lot of organic matter to the soil.' },
      { id: 'c6', author: 'Sunita Devi', avatar: 'https://i.pravatar.cc/48?u=sunita', timestamp: '2 days ago', content: 'I used lentils as a cover crop last year and it worked very well for my soil. Plus, I got a small secondary harvest from it!' }
    ]
  }
];

export const TRANSLATIONS: Translations = {
  en: {
    home: 'Home',
    schemes: 'Schemes',
    tools: 'Tools & Techniques',
    learning: 'Learning Hub',
    community: 'Community',
    ruralReach: 'RuralReach',
    adminDashboard: 'Admin Dashboard',
    logout: 'Logout',
    login: 'Login / Sign Up',
    quickLinks: 'Quick Links',
    contactInfo: 'Contact Info',
    followUs: 'Follow Us',
    readMore: 'Read More',
    search: 'Search for schemes...',
    allCategories: 'All Categories',
    applyNow: 'Apply Now / Visit Site',
    watchVideo: 'Watch Video',
  },
  hi: {
    home: 'होम',
    schemes: 'योजनाएं',
    tools: 'उपकरण और तकनीकें',
    learning: 'शिक्षण केंद्र',
    community: 'समुदाय',
    ruralReach: 'रूरलरीच',
    adminDashboard: 'एडमिन डैशबोर्ड',
    logout: 'लॉग आउट',
    login: 'लॉगिन / साइन अप',
    quickLinks: 'त्वरित लिंक्स',
    contactInfo: 'संपर्क जानकारी',
    followUs: 'हमें फॉलो करें',
    readMore: 'और पढ़ें',
    search: 'योजनाएं खोजें...',
    allCategories: 'सभी श्रेणियाँ',
    applyNow: 'आवेदन करें / साइट पर जाएँ',
    watchVideo: 'वीडियो देखें',
  },
};