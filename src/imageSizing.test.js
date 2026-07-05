import { getModalImageStyle, MOBILE_BREAKPOINT, MOBILE_IMAGE_MAX_HEIGHT_RATIO } from './imageSizing';

describe('getModalImageStyle', () => {
  test('applies no size constraint on desktop-width viewports', () => {
    expect(getModalImageStyle(1200, 800)).toEqual({});
    expect(getModalImageStyle(MOBILE_BREAKPOINT + 1, 800)).toEqual({});
  });

  test('caps the image height on phone-width viewports', () => {
    const style = getModalImageStyle(375, 667);

    expect(style.maxHeight).toBe(`${Math.round(667 * MOBILE_IMAGE_MAX_HEIGHT_RATIO)}px`);
    expect(style.maxWidth).toBe('100%');
    expect(style.objectFit).toBe('contain');
  });

  test('caps the image height on tablet-width viewports', () => {
    const style = getModalImageStyle(768, 1024);

    expect(style.maxHeight).toBe(`${Math.round(1024 * MOBILE_IMAGE_MAX_HEIGHT_RATIO)}px`);
  });

  test('treats the breakpoint boundary itself as mobile, matching the CSS media query', () => {
    const style = getModalImageStyle(MOBILE_BREAKPOINT, 900);
    expect(style.maxHeight).toBe(`${Math.round(900 * MOBILE_IMAGE_MAX_HEIGHT_RATIO)}px`);
  });

  test('leaves the majority of viewport height available for text below the image', () => {
    const style = getModalImageStyle(375, 667);
    const maxHeightPx = parseInt(style.maxHeight, 10);

    expect(maxHeightPx).toBeLessThan(667 / 2);
  });
});
