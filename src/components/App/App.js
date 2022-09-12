import React, { useState } from "react";
import List from "../Util/List";
import image from "./images/img.jpg";

const bodyContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundImage: `url(${image})`,
  padding: "10px",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const todoListContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  backgroundColor: "lightgreen",
  borderRadius: "10px",
  width: "600px",
  boxShadow: "0 0 10px 0 rgba(255,255,255,.5)",
};

function App() {
  return (
    <div style={bodyContainer}>
      <div style={todoListContainer}>
        <h1>ToDoist</h1>

        {/* LIST */}
        <List />
      </div>
    </div>
  );
}

export default App;
