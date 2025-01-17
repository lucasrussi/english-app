import { useState, useEffect, useRef } from "react";

interface DropDownHeaderProps {
  menuTitle: string;
  elements: {
    name: string;
    action: () => void;
  }[];
}

export default function DropDownHeader(props: DropDownHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Fecha o dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Menu Title */}
      <button
        className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        {props.menuTitle}
        <svg
          className={`w-5 h-5 ml-2 transform transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white border border-gray-200 rounded-md shadow-lg transition ease-in-out duration-200 transform scale-95"
        >
          {props.elements.map((el, index) => (
            <div
              key={`dropDownHeaderElement-${index}`}
              onClick={() => {
                el.action();
                setIsOpen(false); // Fecha o menu ao clicar no item
              }}
              className="px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100"
            >
              {el.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
