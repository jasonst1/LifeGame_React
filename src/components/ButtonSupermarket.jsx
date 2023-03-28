import React, {useContext} from "react";
import { StatsData, UserData } from "../Utilities/StoreContext";
import $ from 'jquery';
import Swal from 'sweetalert2'

const ButtonSupermarket = () => {
    console.log("render haha");
    let {fsupply, setfsupply, money, setmoney} = useContext(StatsData);
    let {avatar} = useContext(UserData);

    function addStats(event){
        const sasaran = event.target.id;
        console.log(sasaran)
        if(sasaran === "ButtonBelanjaMak"){
            if(fsupply<100 && money>=50){
                document.getElementById("avatarIMG").src = `./asset/avatar${avatar}eat.gif`;
                $(":button").prop("disabled", true);
                setTimeout(() => {document.getElementById("avatarIMG").src = `./asset/avatar${avatar}.gif`; $(":button:not(#KampusButton)").prop("disabled", false); setfsupply(fsupply + 20); setmoney(money - 50);} , 30000);
            }
            else if(fsupply>=100){
                let timerInterval
                Swal.fire({
                icon: 'warning',
                title: 'Food Supply Full!',
                timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading()
                    const b = Swal.getHtmlContainer().querySelector('b')
                    timerInterval = setInterval(() => {
                    b.textContent = Swal.getTimerLeft()
                    }, 100)
                },
                willClose: () => {
                    clearInterval(timerInterval)
                }
                }).then((result) => {
                if (result.dismiss === Swal.DismissReason.timer) {
                    console.log('I was closed by the timer')
                }
                })
            }
            else if(money<50){
                let timerInterval
                Swal.fire({
                icon: 'warning',
                title: 'Damn, I got no money!',
                timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading()
                    const b = Swal.getHtmlContainer().querySelector('b')
                    timerInterval = setInterval(() => {
                    b.textContent = Swal.getTimerLeft()
                    }, 100)
                },
                willClose: () => {
                    clearInterval(timerInterval)
                }
                }).then((result) => {
                if (result.dismiss === Swal.DismissReason.timer) {
                    console.log('I was closed by the timer')
                }
                })
            }
        }
    }

    return(
        <div className="col-2 d-flex flex-column text-center">
            <h4 id="AtasColor">@ Supermarket</h4>
            <button id="ButtonBelanjaMak" onClick={addStats}>Beli Makanan: $ 50</button>
        </div>
    );
}

export default ButtonSupermarket;