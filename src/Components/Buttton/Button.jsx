import React from "react";

const Button = React.memo(({ 
  children, 
  onClick, 
  type = "button", 
  variant = "primary", 
  isLoading = false, 
  disabled = false 
}) => {
  
  const baseStyles = "px-4 py-2 rounded-md font-semibold focus:outline-none transition-all duration-300";
  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
    success: "bg-green-500 text-white hover:bg-green-600"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`${baseStyles} ${variants[variant]} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      aria-disabled={disabled || isLoading}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
});

export default Button;
