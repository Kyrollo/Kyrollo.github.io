'use client';

import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  titles?: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
  cursorClassName?: string;
}

export function TypewriterText({
  titles = [
    'ML & AI Engineer',
    'AI Systems Architect',
    'LLM & RAG Specialist',
    'Production AI Builder',
  ],
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 2200,
  className = '',
  cursorClassName = '',
}: TypewriterTextProps) {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];

    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          if (displayText.length < currentTitle.length) {
            setDisplayText(currentTitle.substring(0, displayText.length + 1));
          } else {
            // Finished typing, pause before deleting
            setTimeout(() => setIsDeleting(true), pauseDuration);
          }
        } else {
          // Deleting
          if (displayText.length > 0) {
            setDisplayText(currentTitle.substring(0, displayText.length - 1));
          } else {
            // Finished deleting, move to next title
            setIsDeleting(false);
            setTitleIndex((prev) => (prev + 1) % titles.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex, titles, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span>{displayText}</span>
      <span
        className={`inline-block w-[3px] h-[1em] ml-1.5 bg-gradient-to-b from-cyan-400 to-violet-500 rounded-sm animate-pulse align-middle ${cursorClassName}`}
        aria-hidden="true"
        style={{ animationDuration: '0.8s' }}
      />
    </span>
  );
}
