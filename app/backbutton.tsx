// components/BackButton.tsx
import React from "react";

interface BackButtonProps {
  onClick: () => void;
}

const BackButton: React.FC<BackButtonProps> = ({ onClick }) => {
  return (
    <button className="back-button" onClick={onClick}>
      ← Back
    </button>
  );
};

export default BackButton;
