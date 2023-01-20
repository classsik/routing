import React from "react";
import { useState } from "react";

const Third = () => {
  const [value, setValue] = useState(localStorage.getItem("input") || "");

  const saveInput = (event) => {
    setValue(event.target.value);
    localStorage.setItem("input", event.target.value);
  };

  return (
    <div>
      <h2>Третья задача:</h2>
      <input type="text" value={value} onChange={(event) => saveInput(event)} />
    </div>
  );
};

export default Third;
