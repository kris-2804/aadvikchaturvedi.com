import React from 'react';
import { ShieldCheck, Users } from 'lucide-react';

const LeadershipHighlight = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto px-4">
      {/* Leadership Container */}
      <div className="relative aspect-video rounded-lg  shadow-xl bg-blue-50 flex items-center justify-center">
        <div className="p-8 text-center space-y-4">
          <ShieldCheck className="w-12 h-12 text-blue-500 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-gray-800">Leading with Purpose: As a Head Boy</h3>
          <p className="text-gray-600 mx-auto mt-2 text-base max-w-md">
            I was elected as Headboy to lead the Student Senate and represent the student body. In this role, I organized major school events, bridged communication between students and faculty, and championed initiatives for a more inclusive and engaging school environment. This opportunity enhanced my leadership, teamwork, and decision-making skills, allowing me to drive meaningful change within the school community.
          </p>
        </div>
      </div>

     
    </div>
  );
};

export default LeadershipHighlight;
