import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

function DropDown({ title, content, isOpen, onToggle, isFirst }) {
  return (
    <div className={`${!isFirst ? "border-t border-gray-700" : ""} w-full`}>
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center py-4 text-left text-white text-lg sm:text-xl font-medium focus:outline-none"
      >
        {title}
        {isOpen ? (
          <ChevronUp className="w-7 h-7 text-white transition-transform duration-300" />
        ) : (
          <ChevronDown className="w-7 h-7 text-white transition-transform duration-300" />
        )}
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pb-4 text-gray-300 text-base sm:text-lg">{content}</div>
      </div>
    </div>
  );
}

export default DropDown;
