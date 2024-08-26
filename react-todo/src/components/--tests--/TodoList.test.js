import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../TodoList';

test('renders TodoList component', () => {
    render(<TodoList />);
    expect(screen.getByText('Toggle')).toBeInTheDocument();
    expect(screen.getByText('Delete')).toBeInTheDocument();
    expect(screen.getByText('Add')).toBeInTheDocument();
});

test('toggle todolist', () => {
    render(<TodoList />);
    
    fireEvent.click(screen.getByText('Delete'));
    
    expect(screen.getByText('Toggle')).toBeInTheDocument();
});
test('delete todolist', () => {
    render(<TodoList />);
    fireEvent.click(screen.getByText('Delete')); 
    fireEvent.click(screen.getByText('Add'));
    expect(screen.getByText(Toggle)).toBeInTheDocument();
});