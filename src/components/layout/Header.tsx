import React from 'react';
import TopHeader from '../Dashboard/TopHeader';
import { cn } from '@/lib/utils';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  // TopHeader is responsible for its own fixed positioning, height, and styling
  // as per the provided context component (src/components/Dashboard/TopHeader.tsx).
  // This Header component acts as a simple wrapper or an organizational export for layout structure.
  // The className prop is passed to TopHeader for potential overrides or additional styling.
  return <TopHeader className={cn(className)} />;
};

export default Header;
