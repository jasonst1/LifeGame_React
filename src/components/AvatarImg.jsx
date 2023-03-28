import React, {useContext} from 'react';
import {UserData} from '../Utilities/StoreContext';

function AvatarImg(){
    let {avatar} = useContext(UserData);
    console.log("render avatar");

    return(
        <div  id="avatardiv" className="col-3">
            <img id="avatarIMG" src={`./asset/avatar${avatar}.gif`} alt="avatar" className="avatarImg" />
        </div>
    );
}

export default AvatarImg;