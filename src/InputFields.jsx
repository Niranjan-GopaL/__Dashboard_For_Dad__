import React, { useRef, useEffect } from "react";

const InputFields = () => {
  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current[0].focus(); // Set initial focus on the first input field
  }, []);

  const handleKeyDown = (event, currentIndex) => {
    if (event.ctrlKey && (event.key === "j" || event.key === "k")) {
      event.preventDefault(); // Prevent default browser behavior

      if (event.key === "j" && currentIndex < inputRefs.current.length - 1) {
        inputRefs.current[currentIndex + 1].focus(); // Move focus to the next input field
      } else if (event.key === "k" && currentIndex > 0) {
        inputRefs.current[currentIndex - 1].focus(); // Move focus to the previous input field
      }
    }
  };

  return (
    <div className="flex-container">
      {Array.from({ length: 16 }, (_, index) => (
        <input
          key={index}
          ref={el => (inputRefs.current[index] = el)} // Store input field reference in inputRefs
          type="text"
          className="input-field"
          onKeyDown={event => handleKeyDown(event, index)} // Pass current index to handleKeyDown
        />
      ))}
    </div>
  );
};

export default InputFields;
