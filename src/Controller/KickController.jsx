import React, {useEffect, useContext} from 'react';
import { HourMinute, PageData, UserData } from '../Utilities/StoreContext';
import {
    useNavigate
} from "react-router-dom";
import Swal from 'sweetalert2';

function KickFunction(){
    let {page, setpage} = useContext(PageData);
    let {hour} = useContext(HourMinute);
    let {avatar} = useContext(UserData);
    let navigate = useNavigate();
    useEffect(() => {
        if(page === "Kampus" && hour>= 17){
            setpage("Home");
            document.getElementById("avatarIMG").src = `./asset/avatar${avatar}.gif`;
            navigate("/");
            let timerInterval
                Swal.fire({
                icon: 'warning',
                title: 'Kampus Sudah Tutup!',
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
    }, [hour, page, setpage]);
}

export default KickFunction;