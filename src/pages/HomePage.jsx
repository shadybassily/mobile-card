import { MobileCard } from "@/components/MobileCard";
import Modifier from "@/components/Modifier";
import React, { useState } from "react";

export default function HomePage() {
  const [name, setName] = useState("shady");
  const [text, setText] = useState("how are you doing?");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };
  return (
    <div className="grid-container">
      <div className="grid-item">
        <MobileCard name={name} text={text} />
      </div>
      <div className="grid-item">
        <Modifier handleNameChange={handleNameChange} name={name} handleTextChange={handleTextChange} text={text} />
      </div>
    </div>
  );
}
