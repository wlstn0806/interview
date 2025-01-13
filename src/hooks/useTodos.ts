import { useState, useCallback } from 'react';
import { Todo, TabType, TODO_CONSTANTS } from '../types/todo';

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: '출근하고 비타민 먹기', completed: false },
    { id: 2, text: 'Daily Scrum 작성하기', completed: false },
    { id: 3, text: '주간회의 참여하기', completed: false },
  ]);
  const [activeTab, setActiveTab] = useState<TabType>('all');

  const activeTodosCount = todos.filter(todo => !todo.completed).length;

  const addTodo = useCallback((text: string) => {
    if (text.length > TODO_CONSTANTS.MAX_TODO_LENGTH) {
      throw new Error('할 일은 20글자를 넘길 수 없습니다.');
    }

    if (activeTodosCount >= TODO_CONSTANTS.MAX_ACTIVE_TODOS) {
      throw new Error('처리되지 않은 할 일이 이미 10개 있습니다.');
    }

    setTodos(prev => [...prev, {
      id: Date.now(),
      text,
      completed: false,
    }]);
  }, [activeTodosCount]);

  const deleteTodo = useCallback((id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }, []);

  const toggleTodo = useCallback((id: number) => {
    setTodos(prev => prev.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  }, []);

  const filteredTodos = todos.filter(todo => {
    if (activeTab === 'todo') return !todo.completed;
    if (activeTab === 'done') return todo.completed;
    return true;
  });

  return {
    todos: filteredTodos,
    activeTab,
    setActiveTab,
    addTodo,
    deleteTodo,
    toggleTodo,
    activeTodosCount,
  };
};