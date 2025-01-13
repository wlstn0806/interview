import { render, screen, fireEvent } from '@testing-library/react';
import TodoUserListPage from './TodoUserListPage';

describe('TodoUserListPage', () => {
  it('renders todo list page', () => {
    render(<TodoUserListPage />);
    expect(screen.getByText('To Do List')).toBeInTheDocument();
  });

  it('adds new todo when input is submitted', () => {
    render(<TodoUserListPage />);
    const input = screen.getByPlaceholderText('할 일을 입력해 주세요');
    const newTodoText = '새로운 할 일';

    fireEvent.change(input, { target: { value: newTodoText } });
    fireEvent.submit(input);

    expect(screen.getByText(newTodoText)).toBeInTheDocument();
  });

  it('shows error when todo text is too long', () => {
    const mockAlert = jest.spyOn(window, 'alert').mockImplementation(() => {});
    render(<TodoUserListPage />);
    const input = screen.getByPlaceholderText('할 일을 입력해 주세요');
    const longText = 'a'.repeat(21);

    fireEvent.change(input, { target: { value: longText } });
    fireEvent.submit(input);

    expect(mockAlert).toHaveBeenCalledWith('할 일은 20글자를 넘길 수 없습니다.');
  });

  it('filters todos correctly', () => {
    render(<TodoUserListPage />);
    const todoTab = screen.getByText('To Do');
    fireEvent.click(todoTab);

    // 완료되지 않은 할 일만 보여야 함
    expect(screen.getByText('출근하고 비타민 먹기')).toBeInTheDocument();
  });
});
