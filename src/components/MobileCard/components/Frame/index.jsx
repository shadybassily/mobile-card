import React from "react";
import "./styles.css";
export default function Frame({ children }) {
  return (
    <div className="iphoneFront">
      <div className="inner-frame"></div>
      <div className="outer-frame"></div>
      <div className="keys">
        <div className="silent"></div>
        <div className="volume-top"></div>
        <div className="volume-bottom"></div>
        <div className="lock"></div>
      </div>
      {children}
    </div>
  );
}
