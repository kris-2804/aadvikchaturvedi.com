import React from 'react';
import { Award, FileText } from 'lucide-react';

const ResearchHighlight = () => {
  return (
    <div className="relative w-full max-w-5xl mx-auto px-4 py-8">
      {/* Research Paper Container */}
      <div className="relative rounded-lg shadow-xl bg-blue-50 flex items-center justify-center">
        <div className="p-8 text-center space-y-4 w-full">
          <FileText className="w-12 h-12 text-blue-500 mb-4 mx-auto" />
          <h3 className="text-2xl font-semibold text-gray-800">Research Paper: Innovation in [Topic Name]</h3>
          <p className="text-gray-600 mx-auto mt-2 text-base max-w-3xl">
            This research paper, titled "[Full Paper Title]," was presented at the ARSSS International Conference. It focuses on groundbreaking advancements in [specific topic], with contributions that aim to [impact of research]. The paper was well-received and awarded the Best Research Award for its innovative approach and valuable insights.
          </p>
          <a 
            href="https://www.digitalxplore.org/up_proc/pdf/2601-17227860746-13.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline text-base mt-4"
          >
            Read the full paper
          </a>
        </div>
      </div>

     
    </div>
  );
};

export default ResearchHighlight;
