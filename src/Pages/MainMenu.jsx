import React, {useContext, useEffect} from "react";
import Swal from 'sweetalert2'
import {UserData} from '../Utilities/StoreContext';

function MainMenu({setSubmitControl}){
  const { name, setname, avatar, setavatar, jurusan, setjurusan } = useContext(UserData);
  console.log("render mainmenu");
  function changeAvatar(input){
    if(input === "before"){
      if(avatar === 1){
        setavatar(3);
      }
      else{
        setavatar(avatar - 1);
      }
    }
    else if(input === "after"){
      if(avatar === 3){
        setavatar(1);
      }
      else{
        setavatar(avatar + 1);
      }
    }
  }

  function handleNameChange(event){
    console.log(event.target.value);
    setname(event.target.value);
  }

  function handleJurusanChange(event){
    console.log(event.target.value);
    setjurusan(event.target.value);
  }

  useEffect(() => {console.log("JURUSAN: " + jurusan)} , [jurusan]);

  function avatarString(){
    const stringName = "asset/avatar" + avatar + ".gif";
    console.log("SELECT AVATAR: "+ stringName);
    return stringName;
  }

  function handleSubmit(){
    if(name === "" || jurusan === "Jurusan"){
      Swal.fire({
        icon: 'warning',
        title: 'Error',
        text: 'Nama dan Jurusan harus diisi!',
      })
    }
    else{
      setSubmitControl(1);
    }
  }

  function handleCredits(){
    Swal.fire({
      title: 'Created By:',
      text: 'Jason Sebastian Tjoang (00000055443)',
    })
  }

  return (
          <div id="mainmenu">
            <div className="col-12 mt-5 d-flex justify-content-center align-items-center">
                <div className="col-5 d-flex justify-content-end">
                    <button id="arrowbefore" type="button" onClick={() => changeAvatar("before")} className="btn btn-outline-info buttonavatar"><img src={'./ASSET/arrowleft.png'} alt="prev" width="15px" height="15px" /></button>
                </div>
                <div id="avatarchoicemenu" className="col-2 text-center">
                    <img src={avatarString()} className="avatar" alt="avatar" width="300px" height="400px" />
                </div>
                <div className="col-5 d-flex justify-content-start">
                    <button id="arrowafter" type="button" onClick={() => changeAvatar("after")} className="btn btn-outline-info buttonavatar"><img src={'./ASSET/arrowright.png'} alt="next" width="15px" height="15px"/>
                    </button>
                </div>
            </div>
            <div className="col-12 justify-content-center align-items-center d-flex flex-column">
                <div className="12 text-center">
                    <b>Enter Your Name Here:</b>
                </div>
                <div className="mt-1">
                    <input type="text" className="form-control text-center" id="boxnama" onChange={handleNameChange} value={name}/>
                </div>
                <div className="mt-3">
                    <select id="genderbox" className="form-select text-center" aria-label="Default select example" onChange={handleJurusanChange}>
                        <option value="Jurusan">Jurusan</option>
                        <option value="Informatika">Informatika</option>
                        <option value="Jurnalistik">Jurnalistik</option>
                        <option value="Sistem Informasi">Sistem Informasi</option>
                    </select>
                 </div>
                <div className="mt-3 mb-3">
                    <button id="playbutton" type="button" className="btn btn-success" onClick={() => handleSubmit()}>Play</button>
                </div>
                <div>
                    <button id="CreditsBut" type="button" className="btn btn-primary" onClick={() => handleCredits()}>Credits</button>
                </div>
            </div>
        </div>
  );
}

export default MainMenu;