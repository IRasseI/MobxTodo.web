import React, { useEffect } from 'react';
import useCounter from "../hooks/useCounter";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import API from '../util/api';
import axios from 'axios';

const GoTodoList = styled(Link)`
  font-size: 30px;
  text-decoration: underline;
  color: #000;
  font-weight: bold;
`;

const Counter: React.FC = () => {
    useEffect(() => {
        (async () => {
            let payload = {
                id: "cube",
                password: "1234"
            };
            API.post("/member/login", {}, payload)
                .then(res => {
                    console.log(res);
                })
                .catch(({response}) => {
                    alert(response.data);
                    console.log(response);
                });
        })();
    });
    const { count, onIncrease, onDecrease, onIncreaseBy } = useCounter();

    return (
        <div>
            <h1>{ count }</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
            <button onClick={() => onIncreaseBy(5)}>+5</button>
            <br/>
            <GoTodoList to="/todo">Go Todo List</GoTodoList>
        </div>
    )
}

export default Counter;
