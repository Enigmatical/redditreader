import { render, screen } from '@testing-library/react';
import App from 'components/App';

test('renders text', () => {
  render(<App />);
  const textElement = screen.getByText(/reddit reader/i);
  expect(textElement).toBeInTheDocument();
});
