// Matches the "@media screen and (max-width: 800px)" breakpoint in Modal.css.
export const MOBILE_BREAKPOINT = 800;

// Cap the modal image at 40% of the viewport height on small screens so the
// card details below it stay visible without scrolling.
export const MOBILE_IMAGE_MAX_HEIGHT_RATIO = 0.4;

export function getModalImageStyle(viewportWidth, viewportHeight) {
  if (viewportWidth > MOBILE_BREAKPOINT) {
    return {};
  }

  return {
    maxHeight: Math.round(viewportHeight * MOBILE_IMAGE_MAX_HEIGHT_RATIO) + "px",
    maxWidth: "100%",
    width: "auto",
    height: "auto",
    objectFit: "contain",
  };
}
