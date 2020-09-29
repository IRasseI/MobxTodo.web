import { combineReducers } from "redux";
import counter from './conter';
import todo from './todo';

const rootReducer = combineReducers({
    counter,
    todo
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;