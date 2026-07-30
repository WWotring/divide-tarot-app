import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

test('renders the app header', () => {
  render(<MemoryRouter><App /></MemoryRouter>);
  const headerElement = screen.getByText(/Tarot From The Divide/i);
  expect(headerElement).toBeInTheDocument();
});
