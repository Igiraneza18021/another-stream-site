// src/components/ui/layout/LayoutClientWrapper.tsx
'use client';

import { usePathname } from 'next/navigation';
import Footer from './Footer';

export default function LayoutClientWrapper() {
  const pathname = usePathname();
  const isSearchPage = pathname === '/search';
  
  return (
    <>
      {!isSearchPage && <Footer />}
    </>
  );
}