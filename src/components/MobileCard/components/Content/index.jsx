import { icons, images } from "@/assets/AssetsHelper";
import { useDragScroll } from "@/utils/hooks/useDragScroll";
import React from "react";
import "./styles.css";

export default function Content({ name = "shady" }) {
  const { contentRef, handleMouseDown, handleMouseUp, handleMouseLeave, handleMouseMove } = useDragScroll();

  return (
    <div
      ref={contentRef}
      className="content"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <div className="date">
        <p>today</p>
      </div>
      <div className="message left">
        <div className="message-content">
          <img src={images.DummyImage} />
          <p>
            Hello {name}, <br />
            how are you doing?
          </p>
          <p className="dimmed">Thank you for your time.</p>
          <p className="time">10:30</p>
          <div className="actions">
            <>
              <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our website">
                <div>
                  <img src={icons.Link} alt="Link icon" />
                  <p>Visit our website</p>
                </div>
              </a>
            </>
            <>
              <a href={`tel:0201155534662`}>
                <div>
                  <img src={icons.Phone} alt="Phone icon" />
                  <p>Call us</p>
                </div>
              </a>
            </>
            <>
              <div onClick={() => alert("Actione fired")} tabIndex="0" role="button" aria-label="Confirm action">
                <img src={icons.Share} alt="Share icon" />
                <p>Done</p>
              </div>
            </>
          </div>
        </div>
      </div>
    </div>
  );
}
