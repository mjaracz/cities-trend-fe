import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import { DefaultToolkit } from './DefaultToolkit';

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <DefaultToolkit />
    </Provider>
  );

  expect(getByText(/learn/i)).toBeInTheDocument();
});
