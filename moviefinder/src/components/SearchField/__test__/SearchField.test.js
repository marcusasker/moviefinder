import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { SearchField } from '../SearchField';
import { fetchMovies } from '../actionCreators';

const setMovies = jest.fn();
jest.mock('axios', () => ({
  get: jest.fn(),
}));

jest.mock('../actionCreators', () => ({
  fetchMovies: jest.fn(),
  fetchAutoComplete: jest.fn(),
}));

describe('SearchField', () => {
  test('renders SearchField component', () => {
    render(<SearchField setMovies={setMovies} />);
    const searchInputElement = screen.getByTestId('search-field');
    expect(searchInputElement).toBeInTheDocument();
  
    const searchButtonElement = screen.getByText(/Search/i);
    expect(searchButtonElement).toBeInTheDocument();
  });
  
  test('enter a search query and see suggestions', async () => {
    render(<SearchField setMovies={setMovies} />);
    const searchInputElement = screen.getByTestId('search-field');
    fireEvent.change(searchInputElement, { target: { value: 'test' } });
  
    await waitFor(() => {
      expect(fetchMovies).not.toHaveBeenCalled();
    });
  });
  
  test('enter a search query and click the search button', async () => {
    render(<SearchField setMovies={setMovies} />);
    
    const searchInputElement = screen.getByTestId('search-field');
    fireEvent.change(searchInputElement, { target: { value: 'test' } });
    fireEvent.click(screen.getByText(/Search/i));
  
    await waitFor(() => {
      expect(fetchMovies).toHaveBeenCalledWith('test');
    });
  });
  
  test('enter a search query and press enter', async () => {
    render(<SearchField setMovies={setMovies} />);
    
    const searchInputElement = screen.getByTestId('search-field');
    fireEvent.change(searchInputElement, { target: { value: 'test' } });
    fireEvent.keyDown(searchInputElement, { key: 'Enter', code: 'Enter' });
  
    await waitFor(() => {
      expect(fetchMovies).toHaveBeenCalledWith('test');
    });
  });
});