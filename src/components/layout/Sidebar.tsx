import React from 'react';
import SidebarNav from '../Dashboard/SidebarNav';
import { cn } from '@/lib/utils';

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  // SidebarNav is responsible for its own fixed positioning, width, and styling
  // as per the provided context component (src/components/Dashboard/SidebarNav.tsx).
  // This Sidebar component acts as a simple wrapper or an organizational export for layout structure.
  // The className prop is passed to SidebarNav allowing for potential overrides or additional styling
  // from the parent layout component, though SidebarNav's fixed positioning makes this less common.
  return <SidebarNav className={cn(className)} />;
};

export default Sidebar;
