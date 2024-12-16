import React from "react";
import "./styles.css";

const Modifier = ({ handleNameChange, handleTextChange, name, text }) => {
  return (
    <div className="modifier-container">
      <form className="modifier-form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Enter your name:
          </label>
          <input type="text" id="name" name="name" className="form-input" onChange={handleNameChange} value={name} />
        </div>
        <div className="form-group">
          <label htmlFor="messageInput" className="form-label">
            Enter a BIG message to expierence drag on scroll :
          </label>
          <textarea
            id="messageInput"
            name="messageInput"
            rows="4"
            className="form-textarea"
            onChange={handleTextChange}
            value={text}
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default Modifier;
