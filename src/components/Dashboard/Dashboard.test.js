/* eslint-disable no-undef */
import { render } from '@testing-library/react';
import React from 'react';
import Dashboard from './Index';

describe('App tests', () => {
  it('should contains the heading 1', () => {
    render(<Dashboard />);
    const heading = screen.getByText(/Hello world!/i);
    expect(heading).toBeInTheDocument();
  });
});
