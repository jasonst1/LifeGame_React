import React from "react";
import { StatsData, UserData} from '../Utilities/StoreContext.js';
import {useContext} from 'react';
import FoodSupply from "./FoodSupply";
import $ from "jquery";
import Swal from 'sweetalert2'

const Button = () => {
    let {hunger, sethunger, sleep, setsleep, play, setplay, fsupply, setfsupply} = useContext(StatsData);
    let {avatar} = useContext(UserData);

    function AddStats(event){
        const sasaran = event.target.id;
        console.log(sasaran)
        if(sasaran === "hungerButton"){
            if(hunger < 100 && fsupply>=20 && (hunger + 10) < 100){
                console.log("eat root");
                console.log(hunger);
                document.getElementById("avatarIMG").src = `./asset/avatar${avatar}eat.gif`;
                $(":button").prop("disabled", true);
                setTimeout(() => {document.getElementById("avatarIMG").src = `./asset/avatar${avatar}.gif`; $(":button:not(#KampusButton)").prop("disabled", false); sethunger(hunger + 10); setfsupply(fsupply - 20);} , 30000);
            }
            else if(hunger < 100 && (hunger + 10) > 100 && fsupply>=20){
                let temp = 100 - hunger;
                console.log("eat root");
                console.log(hunger);
                document.getElementById("avatarIMG").src = `./asset/avatar${avatar}eat.gif`;
                $(":button").prop("disabled", true);
                setTimeout(() => {document.getElementById("avatarIMG").src = `./asset/avatar${avatar}.gif`; $(":button:not(#KampusButton)").prop("disabled", false); sethunger(hunger + temp); setfsupply(fsupply - 20);} , 30000);
            }
            else if(hunger >= 100){
                let timerInterval
                Swal.fire({
                icon: 'warning',
                title: "I'm Full!",
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
            else if(fsupply <= 20){
                let timerInterval
                Swal.fire({
                icon: 'warning',
                title: "I Got No Food Supply!",
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
                /* Read more about handling dismissals below */
                if (result.dismiss === Swal.DismissReason.timer) {
                    console.log('I was closed by the timer')
                }
                })
            }
        }
        else if(sasaran === "sleepButton"){
            if(sleep < 100){
                console.log(sleep);
                document.getElementById("avatarIMG").src = `./asset/avatar${avatar}sleep.gif`;
                $(":button").prop("disabled", true);
                setTimeout(() => {document.getElementById("avatarIMG").src = `./asset/avatar${avatar}.gif`; $(":button:not(#KampusButton)").prop("disabled", false); setsleep(100);} , 480000);
            }
            else{
                let timerInterval
                Swal.fire({
                title: "I don't wanna sleep!",
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
        else if(sasaran === "playButton"){
            if(play < 100 && play + 10 < 100){
                console.log(play);
                document.getElementById("avatarIMG").src = `./asset/avatar${avatar}play.gif`;
                $(":button").prop("disabled", true);
                setTimeout(() => {document.getElementById("avatarIMG").src = `./asset/avatar${avatar}.gif`; $(":button:not(#KampusButton)").prop("disabled", false); setplay(play + 10);} , 30000);
            }
            else if(play < 100 && play + 10 >= 100){
                let temp = 100 - play;
                console.log(temp);
                document.getElementById("avatarIMG").src = `./asset/avatar${avatar}play.gif`;
                $(":button").prop("disabled", true);
                setTimeout(() => {document.getElementById("avatarIMG").src = `./asset/avatar${avatar}.gif`; $(":button:not(#KampusButton)").prop("disabled", false); setplay(play + temp);} , 30000);
            }
            else{
                let timerInterval
                Swal.fire({
                title: "I played too much!",
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
            <h4 id="AtasColor">@ Home</h4>
            <button id="hungerButton" type="button" onClick={AddStats}>Makan</button>
            <button id="sleepButton" onClick={AddStats}>Tidur</button>
            <button id="playButton" onClick={AddStats}>Main</button>
            <FoodSupply />
        </div>
    );
}

export default Button;