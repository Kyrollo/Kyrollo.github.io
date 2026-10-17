'use client';

import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: { src: string; title: string; description: string }[];
  currentIndex: number;
  onNavigate: (index: number) => void;
}

export default function Lightbox({
  isOpen,
  onClose,
  images,
  currentIndex,
  onNavigate,
}: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate((currentIndex - 1 + images.length) % images.length);
      if (e.key === 'ArrowRight') onNavigate((currentIndex + 1) % images.length);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, images.length, onClose, onNavigate]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <div className="lightbox-backdrop" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close-btn" onClick={onClose} aria-label="Close Lightbox">
          <X size={24} />
        </button>

        {images.length > 1 && (
          <>
            <button
              className="lightbox-nav-btn prev"
              onClick={() => onNavigate((currentIndex - 1 + images.length) % images.length)}
              aria-label="Previous Image"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              className="lightbox-nav-btn next"
              onClick={() => onNavigate((currentIndex + 1) % images.length)}
              aria-label="Next Image"
            >
              <ChevronRight size={28} />
            </button>
          </>
        )}

        <div className="lightbox-image-wrapper">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={currentImage.src}
            alt={currentImage.title}
            className="lightbox-img"
          />
        </div>

        <div className="lightbox-caption">
          <div className="lightbox-caption-header">
            <h4>{currentImage.title}</h4>
            <span className="lightbox-counter">
              {currentIndex + 1} / {images.length}
            </span>
          </div>
          {currentImage.description && (
            <p className="lightbox-desc">{currentImage.description}</p>
          )}
        </div>
      </div>
    </div>
  );
}
