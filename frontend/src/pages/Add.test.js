import * as React from 'react';

import { render, screen, configure, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Add from './Add';
import userEvent from '@testing-library/user-event';

describe('Add component', () => {
  test('renders Name as a text', () => {
    render(
      <BrowserRouter>
        (<Add />)
      </BrowserRouter>
    );

    const nameElement = screen.getByText('Name');
    expect(nameElement).toBeInTheDocument();
  });
  test('stay on the same page if a button was clicked', () => {
    render(
      <BrowserRouter>
        <Add />
      </BrowserRouter>
    );

    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);

    const outputElement = screen.getByText('Add new user');
    expect(outputElement).toBeInTheDocument();
  });
});
