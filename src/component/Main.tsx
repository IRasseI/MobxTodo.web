import React, { useEffect, useState } from 'react';
import useMember from "../hooks/useMember";

const Main: React.FC = () => {
    const { member, onUpdateMember } = useMember();
    const [ id, setId ] = useState("");
    const [ password, setPassword ] = useState("");

    const onClickLogin = () => {
        let payload = {
            id,
            password
        };

        onUpdateMember(payload);
    };

    return (
        <div>
            <input type="text" value={id} onChange={
                (e) => { setId(e.target.value) }
            } />
            <br/>
            <input type="password" value={password} onChange={
                (e) => { setPassword(e.target.value) }
            } />
            <br/>
            <button onClick={onClickLogin}>로그인</button>
            <br/>
            {JSON.stringify(member)}
        </div>
    );
}

export default Main;
