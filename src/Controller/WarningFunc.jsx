import React, {useContext, useEffect} from 'react';
import {StatsData} from '../Utilities/StoreContext';
import Swal from 'sweetalert2';

function WarningFunc(){
    let {hunger, sleep, play} = useContext(StatsData);
    useEffect(() => {
        if(hunger <=20 && hunger > 0){
            Swal.fire({
                title: 'Warning',
                text: "I'm Hungry",
                icon: 'warning',
                confirmButtonColor: 'red',
                confirmButtonText: 'Ok'
                })
        }
        else if(sleep <= 20 && sleep > 0){
            Swal.fire({
                title: 'Warning!',
                text: "I'm Sleepy",
                icon: 'warning',
                confirmButtonColor: 'blue',
                confirmButtonText: 'Ok'
                })

        }
        else if(play <= 20 && play > 0){
            Swal.fire({
                title: 'Warning!',
                text: "I'm Bored",
                icon: 'warning',
                confirmButtonColor: 'yellow',
                confirmButtonText: 'Ok'
                })
        }
    },[hunger, sleep, play]);
}

export default WarningFunc;