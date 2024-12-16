import { icons } from "@/assets/AssetsHelper";
import React from "react";
import "./styles.css";

export default function BottomBar() {
  return (
    <div className="bottom-bar">
      <div className="input-contaier">
        <img src={icons.Plus} />
        <div className="input">
          <img src={icons.Sticker} />
        </div>
        <img src={icons.Camera} />
        <img src={icons.Mic} />
      </div>
      <div className="home-button"></div>
    </div>
  );
}
