import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Plus
} from 'lucide-react';

interface Group {
  id: string;
  name: string;
  tagline?: string;
  memberCount: number;
  imageUrl: string;
}

const suggestedGroupsData: Group[] = [
  {
    id: '1',
    name: 'Mad Men (MADdicts)',
    memberCount: 6195,
    imageUrl: 'https://via.placeholder.com/300x100?text=Mad+Men+Banner',
  },
  {
    id: '2',
    name: 'Dexter Morgan',
    memberCount: 6984,
    imageUrl: 'https://via.placeholder.com/300x100?text=Dexter+Banner',
  },
  {
    id: '3',
    name: 'Tech Innovators Hub',
    memberCount: 12034,
    imageUrl: 'https://via.placeholder.com/300x100?text=Tech+Hub',
  },
];

interface SuggestedGroupsProps {
  className?: string;
}

const SuggestedGroups: React.FC<SuggestedGroupsProps> = ({ className }) => {
  return (
    <div className={cn('bg-surface p-4 rounded-lg shadow-sm', className)}>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-md font-semibold text-primaryText">Suggested Groups</h3>
        <Button variant="link" size="sm" className="text-xs text-primary hover:text-primary/80 p-0 h-auto">
          See All
        </Button>
      </div>

      <div className="space-y-3">
        {suggestedGroupsData.map((group) => (
          <div key={group.id} className="overflow-hidden rounded-md border border-border">
            <div className="h-20 w-full bg-muted relative">
              <img src={group.imageUrl} alt={`${group.name} banner`} className="w-full h-full object-cover" />
              {/* This is where the overlapping avatars would go, complex to replicate exactly */}
              {/* Simple placeholder for avatars */}
              <div className="absolute bottom-1 left-2 flex -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <Avatar key={i} className="h-5 w-5 border-2 border-surface rounded-full">
                    <AvatarImage src={`https://via.placeholder.com/20?text=U${i+1}`} />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                ))}
              </div>
               <Button variant="ghost" size="icon" className="absolute top-1 right-1 h-6 w-6 bg-black/30 text-white hover:bg-black/50">
                <span className="text-xs">✕</span> {/* Close icon from image */} 
              </Button>
            </div>
            <div className="p-3">
              <h4 className="text-sm font-semibold text-primaryText truncate">{group.name}</h4>
              {group.tagline && <p className="text-xs text-muted-foreground truncate">{group.tagline}</p>}
              <p className="text-xs text-muted-foreground">{group.memberCount.toLocaleString()} members</p>
              <Button variant="outline" size="sm" className="w-full mt-2 text-sm">
                <Plus className="h-4 w-4 mr-2" />
                Join
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuggestedGroups;
