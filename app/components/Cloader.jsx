// "use client";
// import { usePathname } from 'next/navigation';
// import Header from './Header';
// import { useEffect, useState } from 'react';
// import Preloader from './Preloader';
// import Preloader2 from './Preloader2';

// export default function Cloader() {
//   const pathname = usePathname();
//   const [isReady, setIsReady] = useState(false); 

//   const [showHeader, setShowHeader] = useState(true);
//   // const [showHeader2, setShowHeader2] = useState(false);

//   useEffect(() => {
//     if (pathname) {
//       // Delay rendering until pathname is available
//       setIsReady(true);
//       setShowHeader(pathname !== "/" );
//     }
//   }, [pathname]);

//   // Delay the render until the pathname is available
//   if (!isReady) return null;

//   return (
//     <div suppressHydrationWarning={true}>
//     {showHeader ? <Preloader/> : <Preloader2/>}
//   </div>
//   );
// }

"use client";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Preloader from './Preloader';
import Preloader2 from './Preloader2';

export default function Cloader() {
  const pathname = usePathname();
  const [isReady, setIsReady] = useState(false); 
  const [isLoading, setIsLoading] = useState(true);

  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    if (pathname) {
      setIsReady(true);
      setShowHeader(pathname !== "/" );
      
      setIsLoading(true);

      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000); 

      return () => clearTimeout(timer);
    }
  }, [pathname]);

  if (!isReady || !isLoading) return null;

  return (
    <div suppressHydrationWarning={true}>
      {showHeader ? <Preloader/> : <Preloader2/>}
    </div>
  );
}