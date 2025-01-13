"use client";
import React, { useState } from "react";
import { useTodos } from "../../hooks/useTodos";
import { TODO_CONSTANTS } from "../../types/todo";
import CheckIcon from "../../icon/Check.svg";
import CloseIcon from "../../icon/Close.svg";
import {
  PageContainer,
  Container,
  Title,
  Input,
  TabContainer,
  Tab,
  TodoList,
  TodoItem,
  TodoCount,
  TodoText,
  CheckButton,
  IconButton,
} from "../../styles/TodoStyles";

const TodoUserListPage = () => {
  const {
    todos,
    activeTab,
    setActiveTab,
    addTodo,
    deleteTodo,
    toggleTodo,
  } = useTodos();

  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (inputValue.trim()) {
        addTodo(inputValue.trim());
        setInputValue('');
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  return (
    <PageContainer>
      <Container>
        <Title>To Do List</Title>
        <form onSubmit={handleSubmit}>
          <Input
            placeholder="할 일을 입력해 주세요"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            maxLength={TODO_CONSTANTS.MAX_TODO_LENGTH}
          />
        </form>

        <TabContainer>
          <Tab isActive={activeTab === 'all'} onClick={() => setActiveTab('all')}>All</Tab>
          <Tab isActive={activeTab === 'todo'} onClick={() => setActiveTab('todo')}>To Do</Tab>
          <Tab isActive={activeTab === 'done'} onClick={() => setActiveTab('done')}>Done</Tab>
        </TabContainer>

        <TodoCount>총 {todos.length}개</TodoCount>

        <TodoList>
          {todos.map(todo => (
            <TodoItem key={todo.id}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <CheckButton
                  completed={todo.completed}
                  onClick={() => toggleTodo(todo.id)}
                >
                  {todo.completed && <CheckIcon />}
                </CheckButton>
                <TodoText completed={todo.completed}>{todo.text}</TodoText>
              </div>
              <IconButton className="delete-button" onClick={() => deleteTodo(todo.id)}>
                <CloseIcon />
              </IconButton>
            </TodoItem>
          ))}
        </TodoList>
      </Container>
    </PageContainer>
  );
};

export default TodoUserListPage;