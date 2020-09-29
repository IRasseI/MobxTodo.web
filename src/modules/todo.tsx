const ADD_TODO = 'todo/ADD_TODO' as const;
const EDIT_TODO = 'todo/EDIT_TODO' as const;
const REMOVE_TODO = 'todo/REMOVE_TODO' as const;

export interface Todo {
    idx: number;
    text: string;
    state: boolean;
}

const initialState: Array<Todo> = [
    {idx: 1, text: "1번", state: true},
    {idx: 2, text: "2번", state: false},
    {idx: 3, text: "3번", state: true},
];

export const addTodo = (payload: {text: string, checked: boolean}) => ({
    type: ADD_TODO,
    payload
});

export const editTodo = (value: { idx: number, text: string }) => ({
    type: EDIT_TODO,
    payload: value
});

export const removeTodo = (idx: number) => ({
    type: REMOVE_TODO,
    payload: idx
});

type TodoAction =
    | ReturnType<typeof addTodo>
    | ReturnType<typeof editTodo>
    | ReturnType<typeof removeTodo>

export default (state: Array<Todo> = initialState, action: TodoAction): Array<Todo> => {
    switch (action.type) {
        case ADD_TODO:
            const nextIdx = Math.max(...state.map(v => v.idx)) + 1;
            return state.concat({idx: nextIdx, text: action.payload.text, state: action.payload.checked})

        case EDIT_TODO:
            let findIdx = state.findIndex(v => v.idx === action.payload.idx)
            state[findIdx].text = action.payload.text;
            return state;

        case REMOVE_TODO:
            return state.filter(v => v.idx !== action.payload)

        default:
            return state;
    }
}
