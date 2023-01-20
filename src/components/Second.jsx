import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Second = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = name;
  }, [name]);

  return (
    <div>
      <h2>Вторая задача:</h2>
      <input value={name} onChange={(event) => setName(event.target.value)} />
    </div>
  );
};

export default Second;
