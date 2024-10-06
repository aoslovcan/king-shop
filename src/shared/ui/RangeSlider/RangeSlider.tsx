import React, { useState } from 'react';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import "./style.css"

interface CustomRangeSliderProps {
    min: number
    max: number
    handleValue: (data : {min: number, max: number}) => void
}

export const CustomRangeSlider = ({min, max, handleValue} : CustomRangeSliderProps) => {
    // Define state variables for the min and max values
    const [minValue, setMinValue] = useState(min);
    const [maxValue, setMaxValue] = useState(max);
    // Handle changes to the min and max values
    const handleChange = (newValue: [number, number]) => {
        setMinValue(newValue[0]); // Update min value
        setMaxValue(newValue[1]); // Update max value
        handleValue(newValue)
    };

    return (
        <div>
            <div className="range-slider-container">
                {/* Render the RangeSlider component */}
                <RangeSlider
                    min={min}
                    max={max}
                    onInput={handleChange}
                />
            </div>

            {/* Display the current min and max values */}
            <div className="flex flex-row justify-between font-primary mt-2 text-color-primaryText">
                <span>{minValue}</span>
                <span>{maxValue}</span>
            </div>
        </div>
    );
};
