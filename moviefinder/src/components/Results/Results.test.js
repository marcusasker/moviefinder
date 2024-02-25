import { render, screen } from '@testing-library/react';
import { Results } from './Results';
import { TEST_MOVIE } from '../constants';

test('renders a movie card components', () => {
  const movies = [TEST_MOVIE];

  render(<Results movies={movies} />);
  const movieCard = screen.getByTestId('movie-card')
  expect(movieCard).toBeInTheDocument();
});