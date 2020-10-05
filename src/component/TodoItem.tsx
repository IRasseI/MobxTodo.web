import React, { useState } from 'react';
import styled from 'styled-components';
import {Todo} from "../modules/todo";
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
`;

const TodoItemEdit = styled.i`
  position:absolute;
  right: 30px;
  cursor:pointer;
  display: none;
  z-index: 999;
`

const TodoItemInput = styled.input`
  line-height: 30px;
  width: 80%;
  background: #f5f5f5;
  outline: 0;
  border: 1px solid #666;
  border-radius: 5px;
  padding: 0 10px;
  font-size: 18px;
`

const TodoItem: React.FC<TodoItemProps> = ({last, item}) => {
    const { onRemoveTodo, onEditTodo } = useTodo();
    const [checked, setChecked] = useState(item.state);
    const [isEdit, setIsEdit] = useState(false);
    const [editText, setEditText] = useState(item.text);

    const onClickItem = () => {
        setChecked(!checked);
    };

    const onClickDelete = (idx: number) => {
        if (isEdit) {
            setIsEdit(false);
            setEditText(item.text);
            return;
        }
        onRemoveTodo(idx);
    };

    const onClickEdit = (idx: number) => {
        if (isEdit) {
            if (editText.replace(/\s/g, "").length <= 0) {
                return;
            }
            let payload = {
                text: editText,
                idx: idx
            };
            onEditTodo(payload);
            setIsEdit(false);
            return;
        }
        setIsEdit(true);
    };

    const onChangeEditText = (e) => {
        setEditText(e.target.value);
    }

    return (
        <TodoItemWrapper last={last}>
            <TodoItemCheck checked={checked} type="checkbox" onChange={onClickItem} />
            {(() => {
                if (isEdit) {
                    return <TodoItemInput value={editText} onChange={onChangeEditText} />;
                }
                return <TodoItemText>{item.text}</TodoItemText>;
            })()}
            <TodoItemRemove className="xi-trash" onClick={() => onClickDelete(item.idx)} />
            <TodoItemEdit className="xi-pen" onClick={() => onClickEdit(item.idx)} />
        </TodoItemWrapper>
    );
};

export default TodoItem;
