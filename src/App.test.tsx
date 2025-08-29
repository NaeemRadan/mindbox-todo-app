// src/App.test.tsx

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders the todo app header and input', () => {
  render(<App />);
  
  const headingElement = screen.getByText(/todos/i);
  expect(headingElement).toBeInTheDocument();

  const inputElement = screen.getByPlaceholderText(/what needs to be done?/i);
  expect(inputElement).toBeInTheDocument();
});

test('allows users to add a new todo', () => {
  render(<App />);

  const inputElement = screen.getByPlaceholderText(/what needs to be done?/i);

  userEvent.type(inputElement, 'Test new todo{enter}');

  const todoElement = screen.getByText(/test new todo/i);
  expect(todoElement).toBeInTheDocument();
});

test('allows users to complete a todo', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/what needs to be done?/i);

  userEvent.type(inputElement, 'Complete this task{enter}');
  
  const todoElement = screen.getByText(/complete this task/i);
  
  const checkbox = screen.getByRole('checkbox');
  userEvent.click(checkbox);

  expect(todoElement.closest('li')).toHaveClass('completed');
});
