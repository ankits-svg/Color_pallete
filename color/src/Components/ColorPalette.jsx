import React, { useState } from "react";

//VIBGYOR (Violet–Indigo–Blue–Green–Yellow–Orange–Red)
const initial = [
  "violet",
  "indigo",
  "blue",
  "green",
  "yellow",
  "orange",
  "red",
];
const ColorPalette = () => {
  const [color, setColor] = useState(null);
//   console.log("select:", color);

  const handleColor = (el) => {
    // console.log("color:",el)
    if (el === color) {
      setColor(null);
    } else {
      setColor(el);
    }
  };
  return (
    <div >
      {initial.length > 0 &&
        initial.map((el) => {
          return (
            <div key={el} onClick={() => handleColor(el)}
            style={{
                
                display:"grid",
                gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))"
            }}
            >
              <p
                style={{
                    display:"grid",
                    gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",
                    border: el === color ? `1px solid ${color}` : "none",
                    background: el === color ? `${color}` : "none",
                    color: el === color ? 'white' : "black",
                    width:'40%',
                    margin:"auto",
                    cursor:'pointer',
                    borderRadius:"40%"
                }}
              >
                {el}
              </p>
            </div>
          );
        })}
    </div>
  );
};

export default ColorPalette;
