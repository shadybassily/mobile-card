import { icons, images } from "@/assets/AssetsHelper";
import { useDragScroll } from "@/utils/hooks/useDragScroll";
import "./MobileCard.css";

export default function MobileCard({ name = "shady" }) {
  const { contentRef, handleMouseDown, handleMouseUp, handleMouseLeave, handleMouseMove } = useDragScroll();

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
      <div className="screen">
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
                  <a
                    href="https://www.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit our website"
                  >
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

        <div className="bottom-bar">
          <div className="input-contaier">
            <img src={icons.Plus} />
            <div className="input">
              <img src={icons.Sticker} />
            </div>
            <img src={icons.Camera} />
            <img src={icons.Mic} />
          </div>
        </div>
        <div className="home-button"></div>
      </div>
    </div>
  );
}
