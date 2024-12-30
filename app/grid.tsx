import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Component imports
import Category from "./categorycomponent";
import ContentPage from "./contentpage";
import BackButton from "./backbutton";

const Home = () => {
  const [activePage, setActivePage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  //useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   const categories = document.querySelectorAll('.category');
  //   categories.forEach((category: any, index: number) => {
  //     gsap.fromTo(
  //       category,
  //       {
  //         opacity: 0,
  //         x: -100, // Start from left edge
  //       },
  //       {
  //         opacity: 1,
  //         x: 0, // Animate to natural position
  //         duration: 0.8,
  //         delay: index * 0.2, // Slightly increased delay for better sequential effect
  //         ease: "power2.out", // Added easing for smoother animation
  //         scrollTrigger: {
  //           trigger: category,
  //           start: "top 80%",
  //           toggleActions: "play none none reverse",
  //         },
  //       }
  //     );
  //   });
  // }, []);

  const openCategoryModal = (category: string) => {
    setActivePage(category);
    setIsModalOpen(true);
  };

  const closeCategoryModal = () => {
    setIsModalOpen(false);
    setActivePage(null);
  };

  return (
    <div
      className="min-h-48 p-4 md:p-8"
          >
      {/* Linear Card Layout */}
      <div className="w-full mx-auto">
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-around items-center">
          <Category 
            emoji="🚀" 
            title="Ventures" 
            onClick={() => openCategoryModal("ventures")}
            className="w-full md:w-auto" 
          />
          <Category 
            emoji="🤝" 
            title="Leadership" 
            onClick={() => openCategoryModal("leadership")}
            className="w-full md:w-auto" 
          />
          <Category 
            emoji="💡" 
            title="Research" 
            onClick={() => openCategoryModal("innovations")}
            className="w-full md:w-auto" 
          />
          <Category 
            emoji="🎨" 
            title="Projects" 
            onClick={() => openCategoryModal("projects")}
            className="w-full md:w-auto" 
          />
           <Category 
            emoji="🎭" 
            title="Performances" 
            onClick={() => openCategoryModal("performances")}
            className="w-full md:w-auto" 
          />
         
        </div>
      </div>

      {/* Modal for Category Content */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="absolute inset-0" onClick={closeCategoryModal}></div>
          <div className="bg-white p-6 rounded-lg shadow-lg relative z-10 max-w-3xl w-full mx-4">
            <BackButton onClick={closeCategoryModal} />
            <ContentPage category={activePage!} onClose={closeCategoryModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;