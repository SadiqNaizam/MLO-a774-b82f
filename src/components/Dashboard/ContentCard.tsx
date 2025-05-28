import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import {
  MoreHorizontal,
  MapPin,
  Users,
  Bookmark // For Save action
} from 'lucide-react';

export interface PostAuthor {
  name: string;
  avatarUrl: string;
}

export interface PostLocation {
  name: string;
  type: string; // e.g., City, Country
}

export interface PostData {
  id: string;
  author: PostAuthor;
  timestamp: string;
  locationContext?: string; // e.g., "is in Raleigh, North Carolina"
  textContent: string;
  imageUrl?: string;
  mapImageUrl?: string; // For map like content
  locationInfo?: PostLocation;
  taggedUsers?: string[]; // Names of other users mentioned
  sharedWithCount?: number;
}

interface ContentCardProps {
  post: PostData;
  className?: string;
}

const ContentCard: React.FC<ContentCardProps> = ({ post, className }) => {
  return (
    <Card className={cn('w-full bg-surface shadow-sm', className)}>
      <CardHeader className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src={post.author.avatarUrl} alt={post.author.name} />
              <AvatarFallback>{post.author.name.substring(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-semibold text-primaryText">
                {post.author.name} 
                {post.locationContext && <span className="font-normal text-muted-foreground"> {post.locationContext}</span>}
              </p>
              <p className="text-xs text-muted-foreground">
                {post.timestamp}
                {post.taggedUsers && post.taggedUsers.length > 0 && (
                  <span className='ml-1'>· <Users className="inline h-3 w-3 mr-0.5" /></span>
                )}
              </p>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:bg-accent">
            <MoreHorizontal className="h-5 w-5" />
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="px-4 pb-3 space-y-3">
        {post.textContent && <p className="text-sm text-primaryText whitespace-pre-line">{post.textContent}</p>}
        
        {post.imageUrl && (
          <div className="aspect-video bg-muted rounded-md overflow-hidden">
            <img src={post.imageUrl} alt="Post content" className="w-full h-full object-cover" />
          </div>
        )}

        {post.mapImageUrl && (
          <div className="aspect-[16/10] bg-muted rounded-md overflow-hidden">
            <img src={post.mapImageUrl} alt="Map location" className="w-full h-full object-cover" />
          </div>
        )}

        {post.locationInfo && (
          <div className="flex items-start space-x-3 border-t border-border pt-3 mt-3">
            <MapPin className="h-8 w-8 text-muted-foreground mt-1 flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold text-primaryText">{post.locationInfo.name}</p>
              <p className="text-xs text-muted-foreground">{post.locationInfo.type}</p>
              {post.sharedWithCount && post.sharedWithCount > 0 && (
                 <p className="text-xs text-muted-foreground">
                   Bryan Durand and {post.sharedWithCount} others have been here
                 </p>
              )}
            </div>
            <Button variant="outline" size="sm" className="ml-auto self-start">
              <Bookmark className="h-4 w-4 mr-2" />
              Save
            </Button>
          </div>
        )}
      </CardContent>

      {/* Placeholder for Like/Comment/Share actions if needed in the future */}
      {/* <CardFooter className="p-4 border-t border-border">
        <div className="flex items-center space-x-2">
          <Button variant="ghost" className="text-muted-foreground"><ThumbsUp className="h-4 w-4 mr-1"/> Like</Button>
          <Button variant="ghost" className="text-muted-foreground"><MessageSquare className="h-4 w-4 mr-1"/> Comment</Button>
          <Button variant="ghost" className="text-muted-foreground"><Share2 className="h-4 w-4 mr-1"/> Share</Button>
        </div>
      </CardFooter> */}
    </Card>
  );
};

export default ContentCard;
