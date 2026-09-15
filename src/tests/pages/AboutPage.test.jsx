import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AboutPage from '../../pages/AboutPage';

function renderAboutPage() {
  return render(<MemoryRouter><AboutPage /></MemoryRouter>);
}

test('renders the about page header', async () => {
    renderAboutPage()
    const headerElement = screen.getByText(/About the project/i);
    expect(headerElement).toBeInTheDocument();

  
});

test('renders the about page text', async () => {
    renderAboutPage()
    const textElement = screen.getByText(/This deck has been a labor/i);
    expect(textElement).toBeInTheDocument();

  
});
