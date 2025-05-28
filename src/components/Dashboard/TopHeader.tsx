import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Search,
  Home,
  Users,
  MessageCircle,
  Bell,
  HelpCircle,
  AppWindow, // Placeholder for Facebook logo
  ChevronDown
} from 'lucide-react';

interface TopHeaderProps {
  className?: string;
}

const TopHeader: React.FC<TopHeaderProps> = ({ className }) => {
  const user = {
    name: 'Olenna',
    avatarUrl: 'https://via.placeholder.com/32?text=OM',
  };

  return (
    <header className={cn('flex items-center justify-between bg-accentBlue text-primary-foreground px-4 sm:px-6 h-16 fixed top-0 left-0 right-0 z-50 shadow-md', className)}>
      {/* Left Section: Logo and Search */} 
      <div className="flex items-center space-x-2 sm:space-x-4">
        <AppWindow className="h-8 w-8 text-primary-foreground" /> 
        <div className="relative">
          <Search className="absolute left-2.5 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input 
            type="search" 
            placeholder="Search" 
            className="bg-primary-foreground/20 text-primary-foreground placeholder-primary-foreground/70 border-0 focus-visible:ring-primary-foreground focus-visible:ring-offset-accentBlue pl-8 pr-2 py-1.5 h-9 w-40 sm:w-56 rounded-full text-sm"
          />
        </div>
      </div>

      {/* Center Section: User Profile and Nav Links */} 
      <nav className="flex items-center space-x-1 sm:space-x-2">
        <Button variant="ghost" className="hover:bg-primary-foreground/10 text-primary-foreground px-2 sm:px-3 py-1.5 rounded-md flex items-center space-x-1.5 text-sm">
          <Avatar className="h-6 w-6 sm:h-7 sm:w-7">
            <AvatarImage src={user.avatarUrl} alt={user.name} />
            <AvatarFallback className="text-xs bg-primary-foreground/20 text-accentBlue">{user.name.substring(0,1)}</AvatarFallback>
          </Avatar>
          <span className="hidden sm:inline">{user.name}</span>
        </Button>
        <Button variant="ghost" className="hover:bg-primary-foreground/10 text-primary-foreground px-2 sm:px-3 py-1.5 rounded-md text-sm">Home</Button>
        <Button variant="ghost" className="hover:bg-primary-foreground/10 text-primary-foreground px-2 sm:px-3 py-1.5 rounded-md text-sm">Find Friends</Button>
      </nav>

      {/* Right Section: Action Icons */} 
      <div className="flex items-center space-x-1 sm:space-x-2">
        <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10 text-primary-foreground rounded-full relative">
          <Users className="h-5 w-5" />
          <Badge variant="destructive" className="absolute -top-1 -right-1 h-4 w-4 min-w-0 p-0 flex items-center justify-center text-xs">8</Badge>
        </Button>
        <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10 text-primary-foreground rounded-full relative">
          <MessageCircle className="h-5 w-5" />
           {/* No count for messages in image, but can be added similarly */}
        </Button>
        <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10 text-primary-foreground rounded-full relative">
          <Bell className="h-5 w-5" />
          <Badge variant="destructive" className="absolute -top-1 -right-1 h-4 w-4 min-w-0 p-0 flex items-center justify-center text-xs">36</Badge>
        </Button>
        <Separator orientation="vertical" className="h-6 bg-primary-foreground/30 mx-1 sm:mx-2" />
        <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10 text-primary-foreground rounded-full">
          <HelpCircle className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10 text-primary-foreground rounded-full">
          <ChevronDown className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
};

export default TopHeader;
