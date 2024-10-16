"use client";

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { checkUserAuthentication } from '@/utils/auth';

interface AuthGuardProps {
  children: React.ReactNode;
  excludeRoutes?: string[]; // List of routes to exclude from auth check
}

export function AuthGuard({ children, excludeRoutes = [] }: AuthGuardProps) {
  const router = useRouter();
  const pathname = usePathname(); // Get the current route
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const verifyUser = async () => {
      // Check if the current route is excluded
      if (excludeRoutes.includes(pathname)) {
        setLoading(false);
        setIsAuthenticated(true);
        return;
      }

      const authenticated = await checkUserAuthentication();
      if (!authenticated) {
        router.push('/auth');
      } else {
        setIsAuthenticated(true);
      }
      setLoading(false);
    };

    verifyUser();
  }, [router, pathname, excludeRoutes]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <>{isAuthenticated && children}</>;
}