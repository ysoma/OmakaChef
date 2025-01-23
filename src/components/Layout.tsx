import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className }) => {
  return (
    <div className={`flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 ${className}`}>
      {children}
    </div>
  );
};

export default Layout;
