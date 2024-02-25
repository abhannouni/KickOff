import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react-native';
import Matchs from '../screens/Matchs';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import axios from 'axios';

const matchs = axios.get('https://api.sofascore.com/api/v1/sport/football/scheduled-events/2024-02-25')

// Mocking the useDispatch hook
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

const mockStore = configureStore([]);

describe('Matchs component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      loading: false,
        matches: matchs,
        error: null,
    });
    // Mock useSelector implementation
    useSelector.mockImplementation(callback => callback(store.getState()));
  });

  test('renders without crashing', async () => {
    const { getByText, getByTestId } = render(
      <Provider store={store}>
        <Matchs />
      </Provider>
    );

    // Ensure that the component renders without crashing
    await waitFor(() => expect(getByTestId('matchs-container')).toBeTruthy());
  });

  test('displays loading text when loading is true', async () => {
    store = mockStore({
      loading: true,
      matches: [],
        error: null,
    });

    const { getByText } = render(
      <Provider store={store}>
        <Matchs />
      </Provider>
    );

    // Ensure that the loading text is displayed
    await waitFor(() => expect(getByText('Loading...')).toBeTruthy());
  });

    // test('displays error text when there is an error', async () => {
    //     store = mockStore({
    //         loading: false,
    //         matches: [],
    //         error: 'An error occurred',
    //     });
    
    //     const { getByText } = render(
    //     <Provider store={store}>
    //         <Matchs />
    //     </Provider>
    //     );
    
    //     // Ensure that the error text is displayed
    //     await waitFor(() => expect(getByText('An error occurred')).toBeTruthy());
    // });

    test('displays no matches found text when there are no matches', async () => {
        store = mockStore({
            loading: false,
            matches: [],
            error: null,
        });
    
        const { getByText } = render(
        <Provider store={store}>
            <Matchs />
        </Provider>
        );
    
        // Ensure that the no matches found text is displayed
        await waitFor(() => expect(getByText('No matches found')).toBeTruthy());
    });
  
});
