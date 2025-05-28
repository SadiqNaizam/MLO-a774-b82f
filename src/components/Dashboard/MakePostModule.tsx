import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import {
  Edit3, // For Make Post tab
  Image as ImageIcon, // For Photo/Video Album tab & action
  Video,
  ListFilter, // For List action (List is a keyword)
  Users, // For Tag Friends action
  MoreHorizontal
} from 'lucide-react';

interface MakePostModuleProps {
  className?: string;
  user: {
    name: string;
    avatarUrl: string;
  };
}

const MakePostModule: React.FC<MakePostModuleProps> = ({ className, user }) => {
  const [activeTab, setActiveTab] = React.useState<'makePost' | 'photoVideo' | 'liveVideo'>('makePost');

  const tabs = [
    { id: 'makePost' as const, label: 'Make Post', icon: Edit3 },
    { id: 'photoVideo' as const, label: 'Photo/Video Album', icon: ImageIcon },
    { id: 'liveVideo' as const, label: 'Live Video', icon: Video },
  ];

  const postActions = [
    { label: 'List', icon: ListFilter, color: 'text-orange-500' },
    { label: 'Photo/Video', icon: ImageIcon, color: 'text-green-500' },
    { label: 'Tag Friends', icon: Users, color: 'text-blue-500' },
  ];

  return (
    <Card className={cn('w-full bg-surface shadow-sm', className)}>
      <div className="flex border-b border-border">
        {tabs.map((tab) => (
          <Button
            key={tab.id}
            variant="ghost"
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              'flex-1 rounded-none py-3 font-semibold text-sm',
              activeTab === tab.id
                ? 'text-primary border-b-2 border-primary'
                : 'text-muted-foreground hover:bg-accent'
            )}
          >
            <tab.icon className={cn('h-5 w-5 mr-2', activeTab === tab.id ? 'text-primary' : 'text-muted-foreground')} />
            {tab.label}
          </Button>
        ))}
      </div>
      <CardContent className="p-4">
        <div className="flex items-start space-x-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={user.avatarUrl} alt={user.name} />
            <AvatarFallback>{user.name.substring(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <Textarea
            placeholder={`What's on your mind, ${user.name.split(' ')[0]}?`}
            className="flex-1 min-h-[60px] border-none focus-visible:ring-0 focus-visible:ring-offset-0 resize-none text-base bg-transparent p-0"
          />
        </div>
        <div className="mt-3 pt-3 border-t border-border flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {postActions.map((action) => (
              <Button key={action.label} variant="ghost" className={cn('text-sm text-muted-foreground hover:bg-accent px-2 py-1.5', action.color)}>
                <action.icon className={cn('h-5 w-5 mr-1.5', action.color)} />
                {action.label}
              </Button>
            ))}
          </div>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:bg-accent">
            <MoreHorizontal className="h-5 w-5" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default MakePostModule;
