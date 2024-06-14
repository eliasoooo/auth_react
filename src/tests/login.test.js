import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../components/Login';

beforeEach(() => {
  jest.spyOn(console, 'log').mockImplementation(() => {});
});

afterEach(() => {
  console.log.mockRestore();
});

test('renders login form', () => {
  render(<Login />);
  expect(screen.getByLabelText(/Username/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Login/i })).toBeInTheDocument();
});

test('handles login', () => {
  render(<Login />);
  fireEvent.change(screen.getByLabelText(/Username/i), { target: { value: 'user' } });
  fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: 'pass' } });
  fireEvent.click(screen.getByRole('button', { name: /Login/i }));
  expect(console.log).toHaveBeenCalledWith('Logged in:', { username: 'user', password: 'pass' });
});
