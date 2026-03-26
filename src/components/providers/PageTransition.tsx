'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [animating, setAnimating] = useState(false);
  const prevPath = useRef(pathname);
  const hasMounted = useRef(false);

  useEffect(() => {
    // Skip animation on very first mount (full page load / refresh)
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }

    // Only animate on client-side route changes
    if (prevPath.current !== pathname) {
      prevPath.current = pathname;
      setAnimating(true);
      const id = setTimeout(() => setAnimating(false), 450);
      return () => clearTimeout(id);
    }
  }, [pathname]);

  return (
    <div
      className={animating ? 'page-enter' : ''}
      style={{ willChange: animating ? 'opacity, transform' : 'auto' }}
    >
      {children}
    </div>
  );
}
