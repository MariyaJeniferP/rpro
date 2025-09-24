import React, { useState } from "react";

function ColorChanger() {
  const [color, setColor] = useState("white");

  return (
    <div style={{ backgroundColor: color, alignContent: "center", textAlign: "center", fontSize:"30px" }}>
      <h2>Background: {color}</h2>

      <div>
        <button style={{ marginRight: "10px", width: "80px", height: "40px",backgroundColor:"purple", color:"white", fontSize:"20px" }}
          onClick={() => setColor("purple")}>
          <h5>Purple</h5>
        </button>
        <button style={{ marginRight: "10px", width: "80px", height: "40px", backgroundColor:"lightblue", color:"black", fontSize:"20px", width:"cover" }}
          onClick={() => setColor("lightblue")}>
          <h5>Light Blue</h5>
        </button>
        <button style={{ marginRight: "10px", width: "80px", height: "40px", backgroundColor:"yellow", color:"black", fontSize:"20px" }}
          onClick={() => setColor("yellow")}>
          <h5>Yellow</h5>
        </button>
        <button style={{ marginRight: "10px", width: "80px", height: "40px", backgroundColor:"white", color:"black", fontSize:"20px" }}
          onClick={() => setColor("white")}>
          <h5>Reset</h5>
        </button>
      </div>
    </div>
  );
}

export default ColorChanger;