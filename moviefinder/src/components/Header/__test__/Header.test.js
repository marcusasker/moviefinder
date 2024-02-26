import { render, screen } from '@testing-library/react';
import { Header } from '../Header';

describe('Header', () => {
  test('renders Header component', () => {
    render(<Header />);
    const navbarElement = screen.getByText('Movie');
    expect(navbarElement).toBeInTheDocument();
  });
});