import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import App from '../App';

describe('App component', () => {
  test('renders without crashing', async () => {
    const { getByTestId } = render(<App />);
    const appContainer = getByTestId('app-container');
    await waitFor(() => expect(appContainer).toBeTruthy());
  });
});