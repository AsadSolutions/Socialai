import React from "react";

function Button({ label, onClick, disabled, outline, small, icon: Icon }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
  relative
  disabled:opacity-70
  disabled:cursor-not-allowed
  rounded-lg
  hover:opacity-80
  transition
  w-full
  
 ${outline ? "bg-white" : "bg-gradient-to-r from-secondary to-primary"}
 ${outline ? "border-blue" : "border-lightblue"}
 ${outline ? "text-blue" : "text-white"}
 ${small ? "py-1" : "py-3"}
 ${small ? "text-sm" : "text-md"}
 ${small ? "font-light" : "font-semibold"}
 
 ${outline ? (small ? "border-[1px]" : "border-2") : "border-[0px]"}


  `}
    >
      {Icon && <Icon size={24} className="absolute left-4 top-3" />}
      {label}
    </button>
  );
}

export default Button;
