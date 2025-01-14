import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  color?: "primary" | "secondary" | "neutral";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  color = "primary",
  onClick,
    disabled = false,
  className="",
}) => {
  // Tailwind CSS base styles
  const baseStyles = "rounded-lg focus:outline-none focus:ring-0";

  // Color variants
  const colorStyles = {
    primary:
      "bg-success-500 hover:bg-success-600 text-white flex items-center gap-2 shadow-inner text-sm font-medium px-6 py-2",
    secondary:
      "bg-surface-light hover:bg-primary-100 text-black flex items-center gap-2 shadow-inner text-sm font-medium px-6 py-2",
    neutral:
      "bg-secondary-800 hover:bg-secondary-900 text-white font-bold py-2 px-4 rounded-xl ",
  };



  return (
    <button
      className={`${baseStyles} ${colorStyles[color]}
      } ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`} 
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
