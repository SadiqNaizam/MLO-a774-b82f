import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import MakePostModule from '../components/Dashboard/MakePostModule';
import ContentCard, { type PostData } from '../components/Dashboard/ContentCard';
import StorySection from '../components/Dashboard/StorySection';
import SuggestedGroups from '../components/Dashboard/SuggestedGroups';

// User data for components that require current user information
const currentUser = {
  name: 'Olenna Mason',
  avatarUrl: 'https://via.placeholder.com/40?text=OM',
};

// Dummy data for content feed
const postsData: PostData[] = [
  {
    id: 'post1',
    author: { name: 'Julia Fillory', avatarUrl: 'https://via.placeholder.com/40?text=JF' },
    timestamp: '2 hrs',
    locationContext: 'is in Raleigh, North Carolina.',
    textContent: 'Checking out some new stores downtown!\nFound some amazing local crafts and a fantastic coffee shop. Highly recommend exploring the area if you get a chance. #Raleigh #LocalFinds #Downtown',
    mapImageUrl: 'https://source.unsplash.com/random/800x450/?map,city,Raleigh,streets',
    locationInfo: {
      name: 'Raleigh, North Carolina',
      type: 'City · United States',
    },
    taggedUsers: ['Bryan Durand', 'Olivia Chen'],
    sharedWithCount: 2,
  },
  {
    id: 'post2',
    author: { name: 'Alex Rodriguez', avatarUrl: 'https://via.placeholder.com/40?text=AR' },
    timestamp: '5 hrs ago',
    textContent: 'Just finished a great workout session at the new gym. Feeling energized! 💪 #Fitness #HealthyLifestyle #GymMotivation',
    imageUrl: 'https://source.unsplash.com/random/800x600/?gym,fitness,workout',
    taggedUsers: ['Maria Garcia'],
  },
  {
    id: 'post3',
    author: { name: 'Samantha Green', avatarUrl: 'https://via.placeholder.com/40?text=SG' },
    timestamp: '8 hrs ago',
    locationContext: 'is reading a book.',
    textContent: '“The only way to do great work is to love what you do.” - Steve Jobs\n\nStarting the week with some inspiration. What quotes motivate you? #MotivationMonday #Inspiration',
  },
  {
    id: 'post4',
    author: { name: 'Mike Chen', avatarUrl: 'https://via.placeholder.com/40?text=MC' },
    timestamp: 'Yesterday at 5:30 PM',
    textContent: 'Amazing concert last night! The band was incredible and the crowd was electric. Definitely a night to remember. 🎸🎶 #LiveMusic #ConcertNight #RockOn',
    imageUrl: 'https://source.unsplash.com/random/800x500/?concert,music,liveband',
    taggedUsers: ['Laura Wilson', 'David Kim', 'Emily Davis'],
  },
  {
    id: 'post5',
    author: { name: 'Olenna Mason', avatarUrl: 'https://via.placeholder.com/40?text=OM' }, // Current user posting
    timestamp: 'Just now',
    textContent: 'Excited to share I am working on a new project! More details coming soon... #NewBeginnings #ProjectUpdate',
  }
];

const DashboardPage: React.FC = () => {
  return (
    <MainAppLayout
      rightSidebarContent={
        <>
          <StorySection />
          <SuggestedGroups />
        </>
      }
    >
      {/* Main content area rendered as children of MainAppLayout */}
      <MakePostModule user={currentUser} />
      {postsData.map((post) => (
        <ContentCard key={post.id} post={post} />
      ))}
    </MainAppLayout>
  );
};

export default DashboardPage;
