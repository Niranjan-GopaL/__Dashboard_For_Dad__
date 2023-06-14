import React, { useRef, useEffect } from "react";
import './InputFields.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


const FIELD_NAME = [
"CUSTOMER ID",
"TARIFF STRUCTURE",
"DATE",
"BILL DATE",
"SANCTIONED LOAD",
"INITIAL READING",
"FINAL READING",
"MAX DEMAND",
"POWER FACTOR",
"METER CONSTANT",
"ENERGY",
"FIXED CHARGE",
"ENERGY CHARGE",
"FAC CHARGE",
"TAX",
"PENALTY",
"REBATE",
"ARREAR",
"TOTAL BILL",
"DUE DATE",
"ASD",
]

const InputFields = () => {
  const inputRefs = useRef([]);

  // useEffect(() => {
  //   // Set initial focus on the first input field
  //   inputRefs.current[0].focus(); 
  // }, []);

  // const handleKeyDown = (event, currentIndex) => {
  //   if (event.ctrlKey && (event.key === "k" || event.key === "j")) {
  //     // Prevent default browser behavior
  //     event.preventDefault(); 

  //     const arr_len = inputRefs.current.length;

  //     // Enabled CIRCULAR traversal
  //     if (event.key === "k" ) {

  //       currentIndex = (currentIndex + 1 + arr_len) % arr_len;
  //       inputRefs.current[currentIndex].focus(); 

  //     } else if (event.key === "j") {

  //       currentIndex = (currentIndex - 1 + arr_len) % arr_len;
  //       inputRefs.current[currentIndex].focus(); 

  //     }
  //   }
  // };


  return (
    <Box className="input-container">
      {Array.from({ length: 16 }, (_, index) => (
        <TextField
          // key={index}
          // // Store input field reference in inputRefs
          // ref={el => (inputRefs.current[index] = el)} 
          // type="text"
          // className="input-field"
          // // Pass current index to handleKeyDown
          // onKeyDown={event => handleKeyDown(event, index)} 

          id="standard-basic" 
          label= {FIELD_NAME[index]}
          variant="standard"

        />
      ))}
    </Box>
  );
};

export default InputFields;
