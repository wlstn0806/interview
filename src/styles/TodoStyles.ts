import styled from "@emotion/styled";

export const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F8F9FD;
  padding: 20px;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 40px;
  background: white;
  border-radius: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 36px;
  margin-bottom: 40px;
  font-weight: 600;
  color: #333;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  border-radius: 12px;
  border: none;
  background-color: #F8F9FD;
  margin-bottom: 40px;
  font-size: 14px;
  box-sizing: border-box;

  &::placeholder {
    color: #999;
  }

  &:focus {
    outline: none;
  }
`;

export const TabContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
  justify-content: center;
`;

export const Tab = styled.button<{ isActive: boolean }>`
  padding: 8px 24px;
  border: none;
  background: ${props => props.isActive ? '#EDF2FF' : 'transparent'};
  border-radius: 20px;
  cursor: pointer;
  color: ${props => props.isActive ? '#4D7FE8' : '#666'};
  font-weight: ${props => props.isActive ? '600' : 'normal'};
  font-size: 14px;
  transition: all 0.2s ease;

  &:hover {
    background: ${props => props.isActive ? '#EDF2FF' : '#f8f8f8'};
  }
`;

export const TodoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #DDD;
  margin-left: 8px;

  svg {
    width: 20px;
    height: 20px;
    path {
      fill: currentColor;
    }
  }
`;

export const TodoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  border-radius: 8px;

  &:hover {
    background-color: #fafafa;

    .delete-button {
      color: #999;

      &:hover {
        color: #666;
      }
    }
  }
`;

export const TodoCount = styled.div`
  margin-bottom: 16px;
  font-size: 14px;
  color: #666;
`;

export const TodoText = styled.span<{ completed?: boolean }>`
  color: ${props => props.completed ? '#999' : '#333'};
  font-size: 14px;
  line-height: 1.4;
`;

export const CheckButton = styled(IconButton)<{ completed?: boolean }>`
  width: 22px;
  height: 22px;
  min-width: 22px;
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
  color: white;

  &:hover {
    border-color: #4D7FE8;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.5);

    path {
      fill: white;
      transform-origin: center;
    }
  }
`;