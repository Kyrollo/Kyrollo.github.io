'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Home, Sparkles } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#070A12] text-[#E8ECF3] flex items-center justify-center p-6 relative overflow-hidden font-['Inter']">
      {/* Background Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none rounded-full bg-[#5EEAD4]/10 blur-[100px]"
        aria-hidden="true" 
      />

      <div className="max-w-md w-full text-center relative z-10 p-8 sm:p-10 rounded-3xl bg-[#0E121B] border border-slate-800 shadow-2xl">
        <div className="inline-flex p-3 rounded-2xl bg-[#151B27] border border-slate-800 text-[#5EEAD4] mb-4">
          <Sparkles size={28} />
        </div>

        <h1 className="text-7xl font-extrabold font-['Space_Grotesk'] text-white tracking-tight mb-2">
          404
        </h1>

        <h2 className="text-xl font-bold text-slate-200 mb-3 font-['Space_Grotesk']">
          Page Not Found
        </h2>

        <p className="text-sm text-slate-400 leading-relaxed mb-8">
          The project case study or page you requested does not exist or has been relocated in the portfolio architecture.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-[#5EEAD4] hover:bg-[#2DD4BF] text-[#070A12] text-sm font-semibold transition-all duration-200 shadow-lg shadow-[#5EEAD4]/20 hover:scale-[1.02]"
        >
          <Home size={16} />
          <span>Return to Homepage</span>
        </Link>
      </div>
    </div>
  );
}
