import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { MOBILE_IMAGE_MAX_HEIGHT_RATIO } from './imageSizing';

function setViewport(width, height) {
  window.innerWidth = width;
  window.innerHeight = height;
}

// The card's alt text is used both by the grid thumbnail and the modal
// image, so the modal's copy has to be picked out by its unique class.
function getModalImage() {
  return document.querySelector('.cardImage');
}

describe('tarot card modal image sizing', () => {
  const originalInnerWidth = window.innerWidth;
  const originalInnerHeight = window.innerHeight;

  afterEach(() => {
    setViewport(originalInnerWidth, originalInnerHeight);
  });

  test('shrinks the modal image on a phone-sized viewport so text stays visible', async () => {
    setViewport(375, 667);
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByText(/The Fool/));

    const modalImage = getModalImage();
    expect(modalImage).toHaveStyle({ maxHeight: `${Math.round(667 * MOBILE_IMAGE_MAX_HEIGHT_RATIO)}px` });
    expect(screen.getByText(/Innocence\. Beginnings\./)).toBeInTheDocument();
  });

  test('shrinks the modal image on a tablet-sized viewport so text stays visible', async () => {
    setViewport(768, 1024);
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByText(/The Fool/));

    const modalImage = getModalImage();
    expect(modalImage).toHaveStyle({ maxHeight: `${Math.round(1024 * MOBILE_IMAGE_MAX_HEIGHT_RATIO)}px` });
  });

  test('leaves the modal image unconstrained on a desktop-sized viewport', async () => {
    setViewport(1440, 900);
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByText(/The Fool/));

    const modalImage = getModalImage();
    expect(modalImage.style.maxHeight).toBe('');
  });
});
