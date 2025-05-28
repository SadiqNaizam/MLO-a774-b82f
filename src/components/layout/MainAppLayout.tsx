import React from 'react';
import HeaderComponent from './Header'; // Aliased to avoid conflict with HTML <header> tag
import SidebarComponent from './Sidebar'; // Aliased for clarity
import { cn } from '@/lib/utils';

interface MainAppLayoutProps {
  children: React.ReactNode;
  rightSidebarContent?: React.ReactNode;
  className?: string;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({
  children,
  rightSidebarContent,
  className,
}) => {
  // This layout assumes HeaderComponent and SidebarComponent manage their own fixed positioning
  // based on their respective context components (TopHeader and SidebarNav).
  // HeaderComponent (TopHeader) is fixed: h-16 (4rem)
  // SidebarComponent (SidebarNav) is fixed: w-64 (16rem), beneath the header.
  // RightSidebar (if provided) is fixed: w-72 (18rem), beneath the header.

  return (
    <div className={cn('min-h-screen bg-background text-foreground', className)}>
      <HeaderComponent />
      <SidebarComponent />

      {/* Main content wrapper that accounts for fixed sidebars and header */}
      <div
        className={cn(
          'pt-16', // For fixed Header (h-16 -> 4rem)
          'pl-64', // For fixed Left Sidebar (w-64 -> 16rem)
          {
            // For fixed Right Sidebar (w-72 -> 18rem), if it exists
            'pr-72': !!rightSidebarContent,
          }
        )}
      >
        {/* Scrollable main content area */}
        <main
          className="h-[calc(100vh-4rem)] overflow-y-auto"
          // Height is viewport height minus header height
          // Layout Requirements.mainContent: "flex flex-col gap-6 mt-16 px-6 overflow-y-auto"
          // - mt-16 is handled by pt-16 on the parent div.
          // - overflow-y-auto is applied here.
          // - "flex flex-col gap-6 px-6" applies to the inner div.
        >
          <div className="p-6 flex flex-col gap-6">
            {/* p-6 provides padding (px-6 from reqs, py-6 for consistency) */} 
            {/* flex flex-col gap-6 structures the children (from reqs) */} 
            {children}
          </div>
        </main>
      </div>

      {rightSidebarContent && (
        <aside
          // Layout Requirements.rightSidebar: "flex flex-col gap-4 bg-surface p-4 w-72 fixed h-screen"
          // Adjusted for header: fixed, top-16, and height calc.
          className="w-72 bg-surface p-4 fixed top-16 right-0 flex flex-col gap-4 overflow-y-auto"
          style={{ height: 'calc(100vh - 4rem)' }} // Height is viewport height minus header height
        >
          {rightSidebarContent}
        </aside>
      )}
    </div>
  );
};

export default MainAppLayout;
