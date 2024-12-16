import { icons } from "@/assets/AssetsHelper";
import React from "react";
import "./styles.css";

export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="status-bar">
        <div className="time">
          <p>10:38</p>
        </div>
        <div className="island">
          <div className="camera"></div>
        </div>
        <div className="system-bar">
          <img src={icons.Signal} alt="Signal icon" />
          <img src={icons.Wifi} alt="Wifi icon" />
          <img src={icons.Battery} alt="Battery icon" />
        </div>
      </div>
      <div className="chat-meta-data">
        <img src={icons.Logo} alt="Logo icon" />
        <p>Communicate</p>
      </div>
    </div>
  );
}
