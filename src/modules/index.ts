import { combineReducers } from "redux";
import counter from './conter';
import todo from './todo';
import member from './member';

const rootReducer = combineReducers({
    counter,
    todo,
    member
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
