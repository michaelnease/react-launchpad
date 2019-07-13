import React from 'React';
import { render } from '@testing-library/react';
import Hello from './Hello';

describe('App', () => {
  it('Renders without error', () => {
    render(<Hello />);
  });
});
