import React, { useRef, useEffect } from "react";
import './InputFields.css'
import { Box } from "@mui/material";

const InputFields = () => {
  const inputRefs = useRef([]);

  useEffect(() => {
    // Set initial focus on the first input field
    inputRefs.current[0].focus(); 
  }, []);

  const handleKeyDown = (event, currentIndex) => {
    if (event.ctrlKey && (event.key === "k" || event.key === "j")) {
      // Prevent default browser behavior
      event.preventDefault(); 

      const arr_len = inputRefs.current.length;

      // Enabled CIRCULAR traversal
      if (event.key === "k" ) {

        currentIndex = (currentIndex + 1 + arr_len) % arr_len;
        inputRefs.current[currentIndex].focus(); 

      } else if (event.key === "j") {

        currentIndex = (currentIndex - 1 + arr_len) % arr_len;
        inputRefs.current[currentIndex].focus(); 

      }
    }
  };


  return (
    <Box className="input-container">
      {Array.from({ length: 16 }, (_, index) => (
        <input
          key={index}
          // Store input field reference in inputRefs
          ref={el => (inputRefs.current[index] = el)} 
          type="text"
          className="input-field"
          // Pass current index to handleKeyDown
          onKeyDown={event => handleKeyDown(event, index)} 
        />
      ))}
    </Box>
  );
};

export default InputFields;
