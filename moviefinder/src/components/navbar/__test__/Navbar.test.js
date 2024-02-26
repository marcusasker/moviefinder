import { render, screen } from '@testing-library/react';
import { Navbar } from '../Navbar';

describe('Navbar', () => {
  test('renders Navbar component', () => {
    render(<Navbar />);
    const navbarElement = screen.getByText('Movie');
    expect(navbarElement).toBeInTheDocument();
  });
});