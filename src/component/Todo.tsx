import React, { useState } from "react";
import useTodo from "../hooks/useTodo";
import {RootState} from "../modules";
import styled from 'styled-components'
import TodoItem from "./TodoItem";

const TodoWrapper = styled.div`
  display: flex;
  width: 450px;
  background: #e5e5e5;
  position: relative;
  margin: 100px auto 0 auto;
  flex-direction: column;
  padding: 10px;
`;

const TodoTitle = styled.p`
  font-size: 40px;
  font-weight: bold;
  color: #666;
  padding: 0 0 10px 10px;
  border-bottom: 3px solid #666;
  margin-bottom: 10px;
`;

const AddTodo = styled.p`
  line-height: 44px;
  height: 44px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-top: 10px;
  cursor:pointer;
  
  > i {
    font-size: 16px;
    font-weight: bold;
    margin-right: 5px;
  }
`

const AddTodoWrapper = styled.div`
  width: 100%;
  height: 44px;
  line-height: 44px;
  display: ${props => props.isShow ? "flex" : "none"};
  padding: 0 10px;
  align-items: center;
  background: #ccc;
  border-radius: 5px;
`

const AddTodoCheckbox = styled.input`
  width: 18px;
  height: 18px;
  cursor: pointer;
  margin-right: 10px;
`

const AddTodoInput = styled.input`
  line-height: 30px;
  width: 100%;
  background: #f5f5f5;
  outline: 0;
  border: 1px solid #666;
  border-radius: 5px;
  padding: 0 10px;
  font-size: 18px;
`

const Todo: React.FC<RootState> = () => {
    const {todo, onAddTodo} = useTodo();
    const [add, setAdd] = useState(false);
    const [payload, setPayload] = useState({
        text: "",
        checked: false
    });

    const onChangeTodoInput = (e) => {
        setPayload({...payload, text: e.target.value});
    };

    const onChangeTodoCheckbox = (e) => {
        setPayload({...payload, checked: e.target.checked});
    };

    const addTodoToggle = () => {
        if (add) {
            if (payload.text.replace(/\s/g, "").length <= 0) {
                return;
            }
            onAddTodo(payload);
            setPayload({text: "", checked: false});
            setAdd(false);
            return;
        }

        setAdd(!add);
    };

    return (
        <TodoWrapper>
            <TodoTitle>Todo</TodoTitle>
            <div>
                {todo.map((v, i) => {
                    return (<TodoItem key={v.idx} last={i + 1 === todo.length} item={v}/>)
                })}
            </div>
            <AddTodo onClick={addTodoToggle}><i className="xi-plus"/>ADD ITEM</AddTodo>
            <AddTodoWrapper isShow={add}>
                <AddTodoCheckbox onChange={onChangeTodoCheckbox} value={payload.checked} type="checkbox" />
                <AddTodoInput onChange={onChangeTodoInput} checked={payload.text} type="text" />
            </AddTodoWrapper>
        </TodoWrapper>
    )
}

export default Todo;
