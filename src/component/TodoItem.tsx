import React, { useState } from 'react';
import styled from 'styled-components';
import { Todo } from "../modules/todo";
import useTodo from "../hooks/useTodo";

interface TodoItemProps {
    last: boolean;
    item: Todo
}

const TodoItemWrapper = styled.div`
  width: 100%;
  display: flex;
  height: 44px;
  line-height: 44px;
  align-items: center;
  background: #ccc;
  padding: 0 10px;
  border-radius: 5px;
  margin-bottom: ${props => props.last ? "0" : "10px" };
  position: relative;
  
  :hover > i {
    display: inherit;
  }
`;

const TodoItemCheck = styled.input`
  width: 18px;
  height: 18px;
  cursor: pointer;
  margin-right: 10px;
`;

const TodoItemText = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

const TodoItemRemove = styled.i`
  position:absolute;
  right: 10px;
  cursor:pointer;
  display: none;
  z-index: 999;
`

const TodoItem: React.FC<TodoItemProps> = ({last, item}) => {
    const { onRemoveTodo } = useTodo();
    const [checked, setChecked] = useState(item.state);

    const onClickItem = () => {
        setChecked(!checked);
    };

    return (
        <TodoItemWrapper last={last}>
            <TodoItemCheck checked={checked} type="checkbox" onChange={onClickItem} />
            <TodoItemText>{item.text}</TodoItemText>
            <TodoItemRemove className="xi-trash" onClick={() => onRemoveTodo(item.idx)} />
        </TodoItemWrapper>
    );
};

export default TodoItem;
