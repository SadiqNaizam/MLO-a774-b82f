import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  PlusCircle,
  Archive,
  Settings
} from 'lucide-react';

interface StorySectionProps {
  className?: string;
}

const StorySection: React.FC<StorySectionProps> = ({ className }) => {
  return (
    <div className={cn('bg-surface p-4 rounded-lg shadow-sm', className)}>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-md font-semibold text-primaryText">Stories</h3>
        <div className="space-x-2">
          <Button variant="link" size="sm" className="text-xs text-muted-foreground hover:text-primary p-0 h-auto">
            <Archive className="h-3.5 w-3.5 mr-1" /> Archive
          </Button>
          <Button variant="link" size="sm" className="text-xs text-muted-foreground hover:text-primary p-0 h-auto">
            <Settings className="h-3.5 w-3.5 mr-1" /> Settings
          </Button>
        </div>
      </div>

      <div className="flex items-center space-x-3 p-3 border border-dashed border-border rounded-md hover:bg-accent transition-colors cursor-pointer">
        <Button variant="outline" size="icon" className="h-12 w-12 rounded-full bg-primary/10 text-primary border-primary hover:bg-primary/20">
          <PlusCircle className="h-6 w-6" />
        </Button>
        <div>
          <p className="text-sm font-semibold text-primaryText">Add to Your Story</p>
          <p className="text-xs text-muted-foreground">Share a photo, video or write something</p>
        </div>
      </div>
      
      {/* Placeholder for actual stories */}
      {/* <div className="mt-4 grid grid-cols-2 gap-2">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="aspect-[3/4] bg-muted rounded-md relative overflow-hidden group">
            <img src={`https://via.placeholder.com/100x150?text=Story${i+1}`} alt={`Story ${i+1}`} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
              <p className="text-xs text-white font-medium">User Name</p>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default StorySection;
