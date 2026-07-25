// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// react-modal calls Modal.setAppElement("#root") on every render; it throws
// if no element matches, so tests need a #root node present in the document.
beforeEach(() => {
  const root = document.createElement('div');
  root.id = 'root';
  document.body.appendChild(root);
});

afterEach(() => {
  document.getElementById('root')?.remove();
});
