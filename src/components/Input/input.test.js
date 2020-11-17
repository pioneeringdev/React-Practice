import * as React from 'react'
import { render, fireEvent, screen } from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
  it('should call updateSearch on search button click', () => {
    const updateSearch = jest.fn();
    const search = "test";
    render(<Input search={search} updateSearch={updateSearch} />);
    fireEvent.click(screen.getByText(/search/i));
    expect(updateSearch).toHaveBeenCalledWith(search);
  });
})