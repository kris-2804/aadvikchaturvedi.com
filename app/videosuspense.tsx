import React from 'react';
import { Film } from 'lucide-react';

const VideoSuspense = () => {
  return (
    <div className="w-full h-full min-h-[300px] bg-gray-100 rounded-lg flex flex-col items-center justify-center space-y-4">
      {/* Animated icon container */}
      <div className="animate-pulse">
        <Film className="w-12 h-12 text-gray-400" />
      </div>
      
      {/* Loading bar animation */}
      <div className="w-48 h-1 bg-gray-200 rounded-full overflow-hidden">
        <div className="w-full h-full bg-blue-500 animate-[loading_1.5s_ease-in-out_infinite]" />
      </div>
      
      <p className="text-gray-500 animate-pulse">Loading video...</p>

      <style jsx>{`
        @keyframes loading {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default VideoSuspense;