import React, { useState } from 'react';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

export const CustomRangeSlider = () => {
    // Define state variables for the min and max values
    const [minValue, setMinValue] = useState(50);
    const [maxValue, setMaxValue] = useState(1000);

    // Handle changes to the min and max values
    const handleChange = (newValue: [number, number]) => {
        setMinValue(newValue[0]); // Update min value
        setMaxValue(newValue[1]); // Update max value
    };

    return (
        <div>
            <div className="range-slider-container">
                {/* Render the RangeSlider component */}
                <RangeSlider
                    min={50}
                    max={1000}
                    onInput={handleChange}
                />
            </div>

            {/* Display the current min and max values */}
            <div className="range-values">
                <span>Min: ${minValue}</span>
                <span>Max: ${maxValue}</span>
            </div>
        </div>
    );
};
