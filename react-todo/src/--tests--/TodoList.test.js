import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

// Initial Render Test
test('renders the TodoList component with initial todos', () => {
  render(<TodoList />);
  
  // Verify initial todos are rendered
  expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
  expect(screen.getByText(/Build a Todo App/i)).toBeInTheDocument();
  expect(screen.getByText(/Explore React Query/i)).toBeInTheDocument();
});

// Test Adding Todos
test('allows the user to add a new todo', () => {
  render(<TodoList />);
  
  // Simulate user typing a new todo
  fireEvent.change(screen.getByPlaceholderText(/add a new todo/i), {
    target: { value: 'Write tests' },
  });

  // Simulate form submission (clicking 'Add Todo' button)
  fireEvent.click(screen.getByText(/add todo/i));

  // Verify the new todo is added
  expect(screen.getByText(/write tests/i)).toBeInTheDocument();
});

// Test Toggling Todos
test('allows the user to toggle a todo as completed or not completed', () => {
  render(<TodoList />);
  
  const todoText = screen.getByText(/Learn React/i);

  // Verify initial state (not completed)
  expect(todoText).not.toHaveStyle('text-decoration: line-through');

  // Simulate clicking the todo to mark it as completed
  fireEvent.click(todoText);

  // Verify the todo is now completed
  expect(todoText).toHaveStyle('text-decoration: line-through');

  // Simulate clicking again to unmark as completed
  fireEvent.click(todoText);

  // Verify the todo is back to not completed
  expect(todoText).not.toHaveStyle('text-decoration: line-through');
});

// Test Deleting Todos
test('allows the user to delete a todo', () => {
  render(<TodoList />);
  
  const todoText = screen.getByText(/Build a Todo App/i);
  const deleteButton = todoText.nextSibling; // Assuming delete button is next to the text

  // Simulate clicking the delete button
  fireEvent.click(deleteButton);

  // Verify the todo is deleted
  expect(todoText).not.toBeInTheDocument();
});

