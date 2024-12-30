
// InfiniteCarousel.tsx
'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselImage {
  src: string;
  alt: string;
}

interface InfiniteCarouselProps {
  images: CarouselImage[];
}

const InfiniteCarousel: React.FC<InfiniteCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const extendedImages = [...images, ...images, ...images];
  const offset = images.length;
  
  const slideToIndex = useCallback((index) => {
    setIsTransitioning(true);
    setCurrentIndex(index);
  }, []);

  useEffect(() => {
    
    if (!isTransitioning) return;

    const timer = setTimeout(() => {
      setIsTransitioning(false);
      
      if (currentIndex >= images.length * 2) {
        setCurrentIndex(currentIndex - images.length);
      }
      else if (currentIndex < offset) {
        setCurrentIndex(currentIndex + images.length);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [currentIndex, isTransitioning, images.length, offset]);

  const next = () => {
    if (isTransitioning) return;
    slideToIndex(currentIndex + 1);
  };

  const prev = () => {
    if (isTransitioning) return;
    slideToIndex(currentIndex - 1);
  };

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(next, 5000); // Change slide every 5 seconds
    return () => clearInterval(timer);
  }, [currentIndex]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="relative w-full overflow-hidden group">
      <button 
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 
                   shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300
                   hover:bg-white"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button 
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 
                   shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300
                   hover:bg-white"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          width: `${extendedImages.length * 100}%`
        }}
      >
        {extendedImages.map((image, index) => (
          <div 
            key={`${image.src}-${index}`}
            className="relative w-full flex-shrink-0"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => slideToIndex(index + offset)}
            className={`w-2 h-2 rounded-full transition-all duration-300 
                       ${(currentIndex - offset) % images.length === index 
                         ? 'bg-white w-4' 
                         : 'bg-white/50'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default InfiniteCarousel;