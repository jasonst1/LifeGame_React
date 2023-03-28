import React, {useContext} from "react";
import { StatsData, UserData } from "../Utilities/StoreContext";
import $ from 'jquery';

const ButtonKafe = () => {
    console.log("render kafedobuel");
    let {money, setmoney} = useContext(StatsData);
    let {avatar} = useContext(UserData);

    function addStats(event){
        const sasaran = event.target.id;
        console.log(sasaran)
        if(sasaran === "ButtonKerja"){
            document.getElementById("avatarIMG").src = `./asset/avatar${avatar}study.gif`;
            $(":button").prop("disabled", true);
            setTimeout(() => {document.getElementById("avatarIMG").src = `./asset/avatar${avatar}.gif`; $(":button:not(#KampusButton)").prop("disabled", false); setmoney(money + 100);} , 60000);
        }
    }

    return(
        <div className="col-2 d-flex flex-column text-center">
            <h4 id="AtasColor">Kafe</h4>
            <button id="ButtonKerja" onClick={addStats}>Kerja</button>
        </div>
    );
}

export default ButtonKafe;