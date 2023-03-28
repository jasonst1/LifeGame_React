import React from 'react';
import { useState, createContext} from 'react';
import {UserData} from '../Utilities/StoreContext';

function UserDataProvider({children}){
    const [name, setname] = useState("");
    const [avatar, setavatar] = useState(1);
    const [jurusan, setjurusan] = useState("Jurusan");

    return(
        <UserData.Provider value={React.useMemo(() => ({ name, setname, avatar, setavatar, jurusan, setjurusan }), [name, setname, avatar, setavatar, jurusan, setjurusan])}>
            {children}
        </UserData.Provider>
    );
}

export {UserDataProvider};