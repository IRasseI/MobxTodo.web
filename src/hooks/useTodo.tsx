import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../modules";
import { addTodo, editTodo, removeTodo } from "../modules/todo";
import { useCallback } from 'react';

export default () => {
    const todo = useSelector((state: RootState) => state.todo);
    const dispatch = useDispatch();

    const onAddTodo = useCallback(
        (payload: {text: string, checked: boolean}) => dispatch(addTodo(payload)), [dispatch]
    );
    const onRemoveTodo = useCallback((idx: number) => dispatch(removeTodo(idx)), [dispatch]);
    const onEditTodo = useCallback(
        (payload: {idx: number, text: string}) => dispatch(editTodo(payload)), [dispatch]
    );

    return {
        todo,
        onAddTodo,
        onRemoveTodo,
        onEditTodo
    }
};
