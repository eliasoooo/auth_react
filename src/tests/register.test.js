import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Register from '../components/Register';

beforeEach(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
});

afterEach(() => {
  console.error.mockRestore();
});

test('renders register form', () => {
  render(<Register />);
  expect(screen.getByLabelText(/Username/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Confirm/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Register/i })).toBeInTheDocument();
});

test('shows error when passwords do not match', () => {
  render(<Register />);
  fireEvent.change(screen.getByLabelText(/Username/i), { target: { value: 'user' } });
  fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: 'pass1' } });
  fireEvent.change(screen.getByLabelText(/Confirm/i), { target: { value: 'pass2' } });
  fireEvent.click(screen.getByRole('button', { name: /Register/i }));
  expect(console.error).toHaveBeenCalledWith('Passwords do not match');
});
