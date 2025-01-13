"use client";
import React, { useState } from "react";
import styled from "@emotion/styled";
import { useTodos } from "../../hooks/useTodos";
import { TabType, TODO_CONSTANTS } from "../../types/todo";
import CheckIcon from "../../icon/Check.svg";
import CloseIcon from "../../icon/Close.svg";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
`;

const Title = styled.h1`
  text-align: center;
  font-size: 32px;
  margin-bottom: 30px;
  font-weight: 600;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px 20px;
  border-radius: 8px;
  border: none;
  background-color: #f1f1f1;
  margin-bottom: 30px;
  font-size: 16px;

  &::placeholder {
    color: #999;
  }
`;

const TabContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  justify-content: center;
`;

const Tab = styled.button<{ isActive: boolean }>`
  padding: 8px 24px;
  border: none;
  background: ${props => props.isActive ? '#EDF2FF' : 'transparent'};
  border-radius: 20px;
  cursor: pointer;
  color: ${props => props.isActive ? '#3B82F6' : '#666'};
  font-weight: ${props => props.isActive ? '600' : 'normal'};
  font-size: 14px;
  transition: all 0.2s ease;

  &:hover {
    background: ${props => props.isActive ? '#EDF2FF' : '#f8f8f8'};
  }
`;

const TodoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const TodoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 8px;
  border-radius: 8px;

  &:hover {
    background-color: #fafafa;
  }
`;

const TodoCount = styled.div`
  margin-bottom: 16px;
  font-size: 14px;
  color: #666;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  color: #999;
  margin-left: 8px;

  &:hover {
    color: #666;
  }

  svg {
    width: 16px;
    height: 16px;
    path {
      fill: currentColor;
    }
  }
`;

const TodoText = styled.span<{ completed?: boolean }>`
  color: ${props => props.completed ? '#999' : '#333'};
  font-size: 15px;
  margin-top: 2px;
`;

const CheckButton = styled(IconButton)<{ completed?: boolean }>`
  width: 20px;
  height: 20px;
  min-width: 20px;
  padding: 0;
  margin-right: 12px;
  border: 2px solid ${props => props.completed ? '#4D7FE8' : '#DDD'};
  border-radius: 50%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.completed ? '#4D7FE8' : 'white'};
  transition: all 0.2s ease;

  &:hover {
    border-color: #4D7FE8;
  }

  svg {
    width: 12px;
    height: 12px;
    path {
      fill: white;
    }
  }
`;

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
            <IconButton onClick={() => deleteTodo(todo.id)}>
              <CloseIcon />
            </IconButton>
          </TodoItem>
        ))}
      </TodoList>
    </Container>
  );
};

export default TodoUserListPage;
