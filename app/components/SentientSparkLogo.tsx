'use client';

import React from 'react';

interface SentientSparkLogoProps {
  className?: string;
  size?: number;
}

export function SentientSparkLogo({ className = 'w-full h-full', size = 64 }: SentientSparkLogoProps) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 64 64" 
      width={size} 
      height={size} 
      fill="none"
      className={className}
      aria-label="Kerollos Mansour - Sentient Spark AI Monogram"
    >
      <defs>
        <linearGradient id="sentient-spark-grad" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="64" y2="64">
          <stop offset="0%" stopColor="#5EEAD4" />
          <stop offset="45%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#818CF8" />
        </linearGradient>
        <filter id="sentient-glow" x="-25%" y="-25%" width="150%" height="150%">
          <feGaussianBlur stdDeviation="2.2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Outer Obsidian Shield with Cyan-Violet Neon Gradient Stroke */}
      <rect 
        x="3" 
        y="3" 
        width="58" 
        height="58" 
        rx="15" 
        fill="#070A12" 
        stroke="url(#sentient-spark-grad)" 
        strokeWidth="2.2" 
      />

      {/* ==================== THE 'K' ==================== */}
      {/* K Vertical Spine */}
      <line 
        x1="16" 
        y1="16" 
        x2="16" 
        y2="48" 
        stroke="url(#sentient-spark-grad)" 
        strokeWidth="4.8" 
        strokeLinecap="round" 
      />

      {/* K Upper Arm -> Reaching to M Summit */}
      <line 
        x1="16" 
        y1="32" 
        x2="27" 
        y2="18" 
        stroke="url(#sentient-spark-grad)" 
        strokeWidth="4.2" 
        strokeLinecap="round" 
      />

      {/* K Lower Leg */}
      <line 
        x1="16" 
        y1="32" 
        x2="27" 
        y2="48" 
        stroke="url(#sentient-spark-grad)" 
        strokeWidth="4.2" 
        strokeLinecap="round" 
      />

      {/* ==================== THE 'M' ==================== */}
      {/* M Central V-Slants */}
      <path 
        d="M27 18 L38 32 L48 18" 
        stroke="url(#sentient-spark-grad)" 
        strokeWidth="4.2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />

      {/* M Right Vertical Pillar */}
      <line 
        x1="48" 
        y1="18" 
        x2="48" 
        y2="48" 
        stroke="url(#sentient-spark-grad)" 
        strokeWidth="4.8" 
        strokeLinecap="round" 
      />

      {/* ==================== AI ELEMENTS ==================== */}
      {/* 4-Point AI Sentience Singularity Spark */}
      <path 
        d="M48 8 Q48 13 43 13 Q48 13 48 18 Q48 13 53 13 Q48 13 48 8 Z" 
        fill="#5EEAD4" 
        filter="url(#sentient-glow)" 
      />

      {/* Left Synaptic Junction Node */}
      <circle cx="27" cy="18" r="2.8" fill="#5EEAD4" />
    </svg>
  );
}
