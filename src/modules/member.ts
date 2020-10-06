const UPDATE_AUTH = 'member/UPDATE_AUTH' as const;

interface MemberState {
    auth: Boolean,
    id: String,
    password: String
}

export interface IMemberInfo {
    id: String,
    password: String
}

const initialState: MemberState = {
    auth: false,
    id: "",
    password: ""
};

export const updateMember = (payload: IMemberInfo) => ({
    type: UPDATE_AUTH,
    payload
});

type MemberAction =
    ReturnType<typeof updateMember>

const member = (state: MemberState = initialState, action: MemberAction) => {
    switch (action.type) {
        case UPDATE_AUTH:
            return {...state, ...action.payload, auth: true}

        default:
            return state
    }
}

export default member;
