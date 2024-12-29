import React from 'react';
import VideoPlayer from './videocomponent';

interface CardProps {
  category: string;
  title: string;
  image1: string;
  image1Description: string;
  image2: string;
  image2Description: string;
  image1Url?: string;  // For ventures category, image1 can have a URL
  image2Url?: string;  // For ventures category, image2 can have a URL
}

const Card: React.FC<CardProps> = ({ category, title, image1, image1Description, image2, image2Description, image1Url, image2Url }) => {
  console.log(category);
  // Handle different layouts based on category
  switch (category) {
    case 'ventures':
      return (
        <div className="border border-gray-300 rounded-lg p-6 max-w-xl mx-auto bg-white">
        <h2 className="text-2xl font-semibold text-center mb-6">Entrepreneurial Ventures:</h2>
        <div className="flex justify-between gap-6 ">
          <div className="text-center w-1/2">
            <img 
              src={'/wisepallogo.png'} 
              alt="Wisepal logo" 
              className="w-32 h-32 object-contain mx-auto rounded-lg" 
              width={128} 
              height={128} 
            />
            <p className="mt-3 text-sm text-gray-600">{'Wisepal'}</p>
            <a 
              href={'https://wisepal.me/'} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-500 mt-2 block"
            >
              Wisepal.me
            </a>
            <p className="mt-3 text-sm text-gray-600 text-justify">
              WisePal is an AI-powered proctoring and remote assessment platform I co-founded during the COVID-19 pandemic. Initially conceptualized as a quizbot, it evolved into a robust tool used by 73+ institutions to conduct over 300,000 fair and secure exams.
            </p>
          </div>
          <div className="text-center w-1/2">
            <img 
              src={'/scholalogo.png'} 
              alt="Schola logo" 
              className="w-32 h-32 object-contain mx-auto rounded-lg" 
              width={128} 
              height={128} 
            />
            <p className="mt-3 text-sm text-gray-600">{'Schola'}</p>
            <a 
              href={'https://www.scholaisfun.com/'} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-500 mt-2 block"
            >
              scholaisfun.com
            </a>
            <p className="mt-3 text-sm text-gray-600 text-justify">
              Schola is a mentorship platform I co-founded to bridge the gap between aspiring students and their dream universities. Born from my personal challenges in navigating the college application process, Schola connects students with mentors who provide personalized guidance on applications, essays, and interviews. It has 150+ mentors from T50s.
            </p>
          </div>
        </div>
      </div>
      )      
      
    case 'performances':
      return (
        <div className="border border-gray-300 rounded-lg p-6 max-w-xl mx-auto bg-white">
          <h2 className="text-2xl font-semibold text-center mb-6">Stand up</h2>
          <p className="text-sm text-gray-600 text-justify mb-4">Fun and joy</p>
          <VideoPlayer src={'/aadvik-standup.mp4'} />
        </div>
      )

      case 'innovations':
    return (
      <div className="border border-gray-300 rounded-lg p-6 max-w-xl mx-auto bg-white">
        <h2 className="text-2xl font-semibold text-center mb-6">Research Papers: </h2>
        <p className="text-sm text-gray-600 mb-4">
          Here are some of the innovations I have worked on. They represent a fusion of creativity and technology to address real-world problems.
        </p>
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Paper Title</h3>
          <p className="text-sm text-gray-600 mb-4">
          Presented at the ARSSS International Conference, Won Best Research Award
          </p>
          <div className="border border-gray-300 rounded-lg p-4 bg-gray-50">
            <h4 className="text-lg font-medium mb-2">Project PDF:</h4>
            <a 
              href={'https://www.digitalxplore.org/up_proc/pdf/2601-17227860746-13.pdf'} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-500 block mb-2"
            >
              Download PDF
            </a>
            <iframe
              src='https://www.digitalxplore.org/up_proc/pdf/2601-17227860746-13.pdf'
              width="100%"
              height="400px"
              title="PDF Preview"
              className="border rounded-lg"
            />
          </div>
        </div>
      </div>
    );


    case 'collaborations':
      return (
        <div className="border border-gray-300 rounded-lg p-6 max-w-xl mx-auto bg-white">
          <h2 className="text-2xl font-semibold text-center mb-6">Leadership and Social Work</h2>
          <div className="flex justify-between gap-6">
            <div className="w-1/2">
              <h3 className="text-xl font-semibold mb-2">Headboy at school</h3>
              <p className="text-sm text-gray-600 text-justify">I was elected as Headboy to lead the Student Senate and represent the student body. In this role, I organized major school events, bridged communication between students and faculty, and championed initiatives for a more inclusive and engaging school environment. This opportunity enhanced my leadership, teamwork, and decision-making skills, allowing me to drive meaningful change within the school community.
              </p>
            </div>
            <div className="w-1/2">
              <h3 className="text-xl font-semibold mb-2">
Social Work @ Gurukul: 
</h3>
              <p className="text-sm text-gray-600 text-justify">At Gurukul, I volunteered to educate underprivileged children, focusing on foundational skills in math and general knowledge. I incorporated storytelling and humor to make learning engaging, fostering curiosity and confidence among students.
</p>
            </div>
          </div>
        </div>
      );
      default:
      // For all other categories, render a default card
      return (
        <div className="border border-gray-300 rounded-lg p-6 max-w-xl mx-auto bg-white">
          <h2 className="text-2xl font-semibold text-center mb-6">{title}</h2>
          <div className="flex justify-between gap-6">
            <div className="text-center w-1/2">
              <img src={image1} alt="Image 1" className="w-full h-auto rounded-lg" />
              <p className="mt-3 text-sm text-gray-600">{image1Description}</p>
            </div>
            <div className="text-center w-1/2">
              <img src={image2} alt="Image 2" className="w-full h-auto rounded-lg" />
              <p className="mt-3 text-sm text-gray-600">{image2Description}</p>
            </div>
          </div>
        </div>
      );
  }
};

export default Card;
