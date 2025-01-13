export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export type TabType = 'all' | 'todo' | 'done';

export const TODO_CONSTANTS = {
  MAX_TODO_LENGTH: 20,
  MAX_ACTIVE_TODOS: 10,
} as const;