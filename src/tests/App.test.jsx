import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import App from '../App';

test('renders the app header', () => {
  render(<MemoryRouter><App /></MemoryRouter>);
  const headerElement = screen.getByText(/Tarot From The Divide/i);
  expect(headerElement).toBeInTheDocument();
});

describe('something truthy and falsy', () => {
  it('true to be true', () => {
    expect(true).toBe(true);
  });

  it('false to be false', () => {
    expect(false).toBe(false);
  });
});