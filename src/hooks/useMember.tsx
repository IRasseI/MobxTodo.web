import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "../modules";
import {IMemberInfo, updateMember} from "../modules/member";
import { useCallback } from 'react';

export default () => {
    const member = useSelector((state: RootState) => state.member);
    const dispatch = useDispatch();

    const onUpdateMember = useCallback(
        (payload: IMemberInfo) => dispatch(updateMember(payload)), [dispatch]
    );

    return {
        member,
        onUpdateMember
    }
};
