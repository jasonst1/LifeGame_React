import React, {useContext, useEffect} from 'react';
import {StatsData} from '../Utilities/StoreContext';
import Swal from 'sweetalert2';

function DeathFunc(){
    let {hunger, sleep, play} = useContext(StatsData);
    useEffect(() => {
        if(hunger === 0){
          document.getElementById("avatarIMG").src = `./asset/Death.png`;
            Swal.fire({
                title: 'Oops...',
                text: "You Died of Hunger!",
                icon: 'error',
                confirmButtonColor: 'red',
                confirmButtonText: 'Restart Game'
              }).then(() => {
                window.location.reload();
              })
        }
        else if(sleep === 0){
          document.getElementById("avatarIMG").src = `./asset/Death.png`;
            Swal.fire({
                title: 'Oops...',
                text: "You Died due to Lack of Sleep!",
                icon: 'error',
                confirmButtonColor: 'red',
                confirmButtonText: 'Restart Game'
              }).then(() => {
                window.location.reload();
              })

        }
        else if(play === 0){
          document.getElementById("avatarIMG").src = `./asset/Death.png`;
            Swal.fire({
                title: 'Oops...',
                text: "You Died of Boredom",
                icon: 'error',
                confirmButtonColor: 'red',
                confirmButtonText: 'Restart Game'
              }).then(() => {
                window.location.reload();
              })

        }
    },[hunger, sleep, play]);
}

export default DeathFunc;