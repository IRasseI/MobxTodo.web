const INCREASE = 'counter/INCREASE' as const;
const DECREASE = 'counter/DECREASE' as const;
const INCREASE_BY = 'counter/INCREASE_BY' as const;

interface CounterState {
    count: number;
}

const initialState: CounterState = {
    count: 0
};

export const increase = () => ({type: INCREASE});
export const decrease = () => ({type: DECREASE});
export const increaseBy = (value: number) => ({
    type: INCREASE_BY,
    payload: value
});

type CounterAction =
    | ReturnType<typeof increase>
    | ReturnType<typeof decrease>
    | ReturnType<typeof increaseBy>

const counter = (state: CounterState = initialState, action: CounterAction) => {
    switch (action.type) {
        case INCREASE:
            return { count: state.count + 1 };

        case DECREASE:
            return { count: state.count - 1 };

        case INCREASE_BY:
            return { count: state.count + action.payload };

        default:
            return state;
    }
};

export default counter;
