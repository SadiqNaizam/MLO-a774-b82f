import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Newspaper,
  MessageCircle,
  PlaySquare,
  Store,
  Gamepad2,
  CalendarDays,
  Flag,
  Users,
  UserPlus as UserPlusIcon, // Renamed to avoid conflict with Users icon
  HeartHandshake,
  ChevronDown,
  Settings,
  ShieldAlert // Placeholder for a generic 'Ad' icon
} from 'lucide-react';

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  href?: string;
  isActive?: boolean;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon: Icon, label, href = '#', isActive, onClick }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        'flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium',
        isActive
          ? 'bg-sidebar-foreground/10 text-sidebar-foreground'
          : 'text-sidebar-foreground/80 hover:bg-sidebar-foreground/5 hover:text-sidebar-foreground',
        'transition-colors duration-150'
      )}
    >
      <Icon className="h-5 w-5" />
      <span>{label}</span>
    </a>
  );
};

interface SidebarNavProps {
  className?: string;
}

const SidebarNav: React.FC<SidebarNavProps> = ({ className }) => {
  const user = {
    name: 'Olenna Mason',
    avatarUrl: 'https://via.placeholder.com/40?text=OM',
  };

  const newsFeedItems = [
    { icon: Newspaper, label: 'News Feed', isActive: true },
    { icon: MessageCircle, label: 'Messenger' },
    { icon: PlaySquare, label: 'Watch' },
    { icon: Store, label: 'Marketplace' },
  ];

  const shortcuts = [{ icon: Gamepad2, label: 'FarmVille 2' }];

  const exploreItems = [
    { icon: CalendarDays, label: 'Events' },
    { icon: Flag, label: 'Pages' },
    { icon: Users, label: 'Groups' },
    { icon: UserPlusIcon, label: 'Friend Lists' },
    { icon: HeartHandshake, label: 'Fundraisers' },
  ];

  const createItems = [
    { icon: ShieldAlert, label: 'Ad' }, // Using ShieldAlert as placeholder for 'Ad'
    { icon: Flag, label: 'Page' },
    { icon: Users, label: 'Group' },
    { icon: CalendarDays, label: 'Event' },
    { icon: HeartHandshake, label: 'Fundraiser' },
  ];

  const [showMoreExplore, setShowMoreExplore] = React.useState(false);

  return (
    <aside className={cn('w-64 bg-sidebar text-sidebar-foreground flex flex-col h-screen p-4 space-y-4 fixed top-16 left-0', className)}>
      <div className="flex items-center space-x-3 px-3 py-2">
        <Avatar className="h-8 w-8">
          <AvatarImage src={user.avatarUrl} alt={user.name} />
          <AvatarFallback>{user.name.substring(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        <span className="font-semibold text-sm text-sidebar-foreground">{user.name}</span>
      </div>

      <nav className="flex-grow space-y-1 overflow-y-auto pr-2 -mr-2 scrollbar-thin scrollbar-thumb-sidebar-foreground/30 scrollbar-track-transparent">
        {newsFeedItems.map((item) => (
          <NavItem key={item.label} {...item} />
        ))}
        
        <Separator className="my-4 bg-sidebar-foreground/20" />
        
        <h3 className="px-3 text-xs font-semibold text-sidebar-foreground/60 uppercase tracking-wider">Shortcuts</h3>
        {shortcuts.map((item) => (
          <NavItem key={item.label} {...item} />
        ))}

        <Separator className="my-4 bg-sidebar-foreground/20" />

        <h3 className="px-3 text-xs font-semibold text-sidebar-foreground/60 uppercase tracking-wider">Explore</h3>
        {exploreItems.slice(0, showMoreExplore ? exploreItems.length : 5).map((item) => (
          <NavItem key={item.label} {...item} />
        ))}
        {!showMoreExplore && exploreItems.length > 5 && (
          <Button 
            variant="ghost" 
            className="w-full justify-start text-sidebar-foreground/80 hover:bg-sidebar-foreground/5 hover:text-sidebar-foreground px-3 py-2" 
            onClick={() => setShowMoreExplore(true)}
          >
            <ChevronDown className="h-5 w-5 mr-3" />
            See More...
          </Button>
        )}
        {showMoreExplore && (
           <Button 
            variant="ghost" 
            className="w-full justify-start text-sidebar-foreground/80 hover:bg-sidebar-foreground/5 hover:text-sidebar-foreground px-3 py-2" 
            onClick={() => setShowMoreExplore(false)}
          >
            {/* Using ChevronUp icon, assuming it exists or can be imported */} 
            {/* <ChevronUp className="h-5 w-5 mr-3" />  // If ChevronUp is available */} 
            <ChevronDown className="h-5 w-5 mr-3 transform rotate-180" /> {/* Fallback: Rotate ChevronDown */} 
            See Less...
          </Button>
        )}

        <Separator className="my-4 bg-sidebar-foreground/20" />

        <h3 className="px-3 text-xs font-semibold text-sidebar-foreground/60 uppercase tracking-wider">Create</h3>
        {createItems.map((item) => (
          <NavItem key={item.label} {...item} />
        ))}
      </nav>
    </aside>
  );
};

export default SidebarNav;
