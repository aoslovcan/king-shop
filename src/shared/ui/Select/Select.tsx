import React, { useState, useRef, useEffect } from "react";
import {cn, Option} from "shared/utils";
import {SelectIcon} from "shared/assets/icons";
import {dropdownContainer, selectContainer} from "./Select.styles"; // Assuming Option is correctly imported from utils

interface SelectProps {
    handleOnChange?: (item: Option) => void;
    options: Array<Option>;
    className?: string;
}

export const Select = ({ handleOnChange, options, className }: SelectProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<Option | null>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Toggle dropdown
    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    // Handle option selection
    const handleOptionClick = (option: Option) => {
        setSelectedOption(option);
        if(handleOnChange){
            handleOnChange(option);
        }
        setIsOpen(false); // Close dropdown after selecting
    };

    // Close dropdown if clicked outside
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
        <div className={cn("relative inline-block w-full", className)} ref={dropdownRef}>
            {/* Displayed selected value */}
            <div
                onClick={toggleDropdown}
                className={selectContainer}
            >
                {selectedOption ? selectedOption.label : "Select an option"}
                <span className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
         <SelectIcon/>
        </span>
            </div>

            {/* Dropdown menu */}
            {isOpen && (
                <div className={dropdownContainer}>
                    <ul className="max-h-60 overflow-auto rounded-md py-1 text-gray-700">
                        {options.map((option) => (
                            <li
                                key={option.value}
                                onClick={() => handleOptionClick(option)}
                                className="px-4 py-2 cursor-pointer hover:bg-background-secondary hover:text-white"
                            >
                                {option.label}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};
