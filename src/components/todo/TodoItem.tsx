import React from 'react';
import { TodoItem as TodoItemStyle, TodoText, CheckButton, IconButton } from '../../styles/TodoStyles';
import CheckIcon from '../../icon/Check.svg';
import CloseIcon from '../../icon/Close.svg';

interface TodoItemProps {
  text: string;
  completed: boolean;
  onToggle: () => void;
  onDelete: () => void;
}

export const TodoItemComponent = ({ text, completed, onToggle, onDelete }: TodoItemProps) => (
  <TodoItemStyle>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <CheckButton completed={completed} onClick={onToggle}>
        {completed && <CheckIcon />}
      </CheckButton>
      <TodoText completed={completed}>{text}</TodoText>
    </div>
    <IconButton className="delete-button" onClick={onDelete}>
      <CloseIcon />
    </IconButton>
  </TodoItemStyle>
);