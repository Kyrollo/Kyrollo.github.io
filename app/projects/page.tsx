'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ProjectsIndexPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/#projects');
  }, [router]);

  return (
    <div className="min-h-screen bg-[#070A12] flex items-center justify-center text-slate-400 font-mono text-xs">
      Redirecting to projects showcase...
    </div>
  );
}
