// components/Category.tsx
import React from "react";

interface CategoryProps {
  emoji: string;
  title: string;
  onClick: () => void;
}

const Category: React.FC<CategoryProps> = ({ emoji, title, onClick }) => {
  return (
    <div className="w-28 h-28  md:w-44 md:h-40 category p-4 rounded-lg shadow-lg bg-white hover:scale-110 hover:shadow-2xl transform transition duration-300 ">
      <div className="flex flex-col items-center justify-center space-y-2 cursor-pointer" onClick={onClick}>
        <div className="text-3xl md:text-8xl">{emoji}</div>
        <div className="text-sm md:text-2xl font-semibold text-center">{title}</div>
      </div>
    </div>
  );
};

export default Category;
