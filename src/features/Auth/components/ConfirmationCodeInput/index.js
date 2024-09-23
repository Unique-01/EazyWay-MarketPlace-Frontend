import React, { useState, useRef } from "react";

const ConfirmationCodeInput = ({ length = 6, onChange, disabled }) => {
    const [values, setValues] = useState(Array(length).fill(""));
    const inputRefs = useRef([]);

    const handleChange = (e, index) => {
        const newValue = e.target.value;
        if (!/^[0-9]$/.test(newValue) && newValue !== "") return; // Allow only digits

        const newValues = [...values];
        newValues[index] = newValue;
        setValues(newValues);
        onChange(newValues.join(""));

        // Move to the next input if the current input is filled
        if (newValue && index < length - 1) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !values[index] && index > 0) {
            // Move to the previous input when backspace is pressed
            inputRefs.current[index - 1].focus();
        }
    };

    return (
        <div className="d-flex justify-content-between">
            {values.map((value, index) => (
                <input
                    key={index}
                    type="text"
                    maxLength="1"
                    className="form-control mx-1 text-center"
                    style={{ width: "40px" }}
                    value={value}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    ref={(el) => (inputRefs.current[index] = el)}
                    disabled={disabled}
                />
            ))}
        </div>
    );
};

export default ConfirmationCodeInput;
