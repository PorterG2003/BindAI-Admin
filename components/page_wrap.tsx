import React from 'react';

interface PageWrapProps {
  children: React.ReactNode;
}

export default function PageWrap({ children }: PageWrapProps) {
  return (
    <main className="flex w-full min-h-screen flex-col items-center bg-gray-100 dark:bg-gray-800 p-6">
      <div className="w-full max-w-4xl">
        {children}
      </div>
    </main>
  );
}
