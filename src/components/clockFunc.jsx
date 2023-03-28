import React from 'react';
import days from '../DataJs.js/days';
import { useState, useEffect, useContext } from "react";
import { UserData, HourMinute } from '../Utilities/StoreContext';

const clockFunction = React.memo(() => {
    let {name, jurusan} = useContext(UserData);
    const [control, setcontrol] = useState(0);
    let {hour, sethour, dayindex, setdayindex} = useContext(HourMinute);
    let {minute, setminute} = useContext(HourMinute);
    const [greeting, setgreeting] = useState("");
    
    useEffect(() => {
        let timer = null;
        timer = setInterval(() => {
                setminute(minute + 1);
            }, 1000);
        return () => clearInterval(timer);
    });

    useEffect(() => {
        if(minute >= 60){
            setminute(0);
            setcontrol(1);
        }
    }, [minute]);

    useEffect(() => {
        if(control === 1){
            sethour(hour + 1);
            setcontrol(0);
        }
    }, [control]);

    useEffect(() => {
        // console.log("Hour: " + hour);
        if(hour >= 24){
            sethour(0);
            setdayindex(dayindex + 1);
        }
    }, [hour]);

    useEffect(() => { 
        dayFunction();
    }, [hour]);

    function dayFunction(){
        if(hour>=6 && hour<12){
            setgreeting("Morning");
        }
        else if(hour>=12 && hour<16){
            setgreeting("Afternoon");
        }
        else if(hour>=16 && hour<19){
            setgreeting("Evening");
        }
        else if((hour>=19 && hour<=23) || (hour>=0 && hour<6)){
            setgreeting("Night");
        }
    }


    // console.log("renderclock");
    // console.log(name);
    // console.log(jurusan);
    return(
    <div id="nameGreet" className="col-12 text-center">
        <h3 id="headsem"> {days[dayindex].name} - {("0" + hour).slice(-2)}:{("0" + minute).slice(-2)}</h3> 
        <h3>Good {greeting} {name}</h3>
        <h3>Jurusan {jurusan}</h3>
    </div>
    );
});

export default React.memo(clockFunction);