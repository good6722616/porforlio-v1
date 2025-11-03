import { TokyoContext } from "@/src/Context";
import useClickOutside from "@/src/useClickOutside";
import { useContext, useEffect } from "react";
const ModalContainer = ({ children, nullValue }) => {
  const { modalToggle } = useContext(TokyoContext);
  let domNode = useClickOutside(() => {
    modalToggle(false);
    nullValue(null);
  });

  // Clean up any duplicate Magnific Popup overlays when this modal opens
  useEffect(() => {
    const cleanup = () => {
      // Remove any stray Magnific Popup backgrounds that might interfere
      const strayBgs = document.querySelectorAll(
        ".mfp-bg.mfp-ready:not(.video-popup-bg):not(.audio-popup-bg)"
      );
      strayBgs.forEach((bg) => {
        if (!bg.closest(".tokyo_tm_modalbox")) {
          bg.style.display = "none";
        }
      });
    };

    cleanup();
    // Run cleanup after a short delay to ensure DOM is ready
    const timeout = setTimeout(cleanup, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="tokyo_tm_modalbox opened">
      <div className="box_inner" ref={domNode}>
        <div className="close">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              modalToggle(false);
              nullValue(null);
            }}
          >
            <i className="icon-cancel" />
          </a>
        </div>
        <div className="description_wrap">{children}</div>
      </div>
    </div>
  );
};
export default ModalContainer;
