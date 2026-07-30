import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import ReadingPage from '../../pages/ReadingPage';

function renderReadingPage() {
  return render(<MemoryRouter><ReadingPage /></MemoryRouter>);
}

test('draws 3 distinct cards when the draw button is clicked', async () => {
  const user = userEvent.setup();
  renderReadingPage();

  await user.click(screen.getByText(/Draw 3 Cards/i));

  const images = document.querySelectorAll('.readingCardImage');
  expect(images).toHaveLength(3);

  const uris = Array.from(images).map(img => img.getAttribute('src'));
  expect(new Set(uris).size).toBe(3);

  const texts = document.querySelectorAll('.reading-card-text');
  expect(texts).toHaveLength(3);
  texts.forEach(text => expect(text.textContent.length).toBeGreaterThan(0));
});
