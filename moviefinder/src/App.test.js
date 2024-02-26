import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import { fetchAutoComplete } from "./components/SearchField/actionCreators";
import axios from "axios";
import { TEST_MOVIE, TEST_SUGGESTIONS } from "./components/constants";

jest.mock('axios');

jest.mock('./components/SearchField/actionCreators', () => ({
  ...jest.requireActual('./components/SearchField/actionCreators'),
  fetchAutoComplete: jest.fn(),
}));

describe('App', () => {
  test('renders App component', () => {
    render(<App />);
    const navbarElement = screen.getByText('Movie');
    expect(navbarElement).toBeInTheDocument();
  });

  it('fetches suggestions when user prompts query', async () => {
    fetchAutoComplete.mockImplementation(() => Promise.resolve(TEST_SUGGESTIONS));
  
    const { rerender } = render(<App />);
    const searchInputElement = screen.getByTestId('search-field');
    fireEvent.change(searchInputElement, { target: { value: 'test' } });
    rerender(<App />);
    
    await waitFor(async () => {
      const suggestionsArray = await screen.findAllByTestId('suggestion');
      expect(suggestionsArray).toHaveLength(5);
    });
  });

  it('fetches data from api', async () => {
    axios.get.mockImplementation(() => Promise.resolve({
      data: [TEST_MOVIE]
    }));
    
    const { rerender } = render(<App />)
    const searchInputElement = screen.getByTestId('search-field');
    const searchButton = screen.getByRole('button', /Search/i);
    fireEvent.change(searchInputElement, { target: { value: 'test' } });
    fireEvent.click(searchButton);
    rerender(<App />);
    
    await waitFor(() => {
      expect(screen.getByTestId('movie-card')).toBeInTheDocument();
    });
  });
});