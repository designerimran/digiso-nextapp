"use client";
import { usePathname } from 'next/navigation';
import Header from './Header';
import { useEffect, useState } from 'react';

export default function CHeader() {
  const pathname = usePathname();
  const [isReady, setIsReady] = useState(false);
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    if (pathname) {
      setIsReady(true);
      setShowHeader(pathname !== "/" );
    }
  }, [pathname]);
  if (!isReady) return null;

  return (
    <div suppressHydrationWarning={true}>
    {showHeader && <Header />}
  </div>
  );
}
