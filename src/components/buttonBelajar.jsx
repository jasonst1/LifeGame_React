import React, {useContext, useEffect} from "react";
import { UserData, StatsData, PageData} from "../Utilities/StoreContext";
import matkulJurusan from "../DataJs.js/matkulJurusan";
import $ from 'jquery';
import Swal from 'sweetalert2'

const FilteredData = () => {
    let{jurusan} = useContext(UserData);
    const filterMatkul = matkulJurusan.filter(matkul => matkul.name === jurusan); 
    return(filterMatkul[0].matkul);
}

const ButtonBelajar = () => {
    console.log("render belajar");
    let listMatkul = FilteredData();
    let {study, setstudy} = useContext(StatsData);
    let {avatar} = useContext(UserData);
    let {page, setpage} = useContext(PageData);
    let timer = null;
    console.log("TIMER"+timer);

    function addStats(event){
        const sasaran = event.target.id;
        console.log(sasaran)
        if(sasaran === "buttonBelajar"){
            if(study<100 && (study+5 < 100)){
                document.getElementById("avatarIMG").src = `./asset/avatar${avatar}study.gif`;
                $(":button").prop("disabled", true);
                timer = setTimeout(() => {document.getElementById("avatarIMG").src = `./asset/avatar${avatar}.gif`; $(":button").prop("disabled", false); setstudy(study + 5);} , 120000);
            }
            else if(study < 100 && (study + 5 >= 100)){
                let temp = 100 - study;
                $(":button").prop("disabled", true);
                timer = setTimeout(() => {document.getElementById("avatarIMG").src = `./asset/avatar${avatar}.gif`; $(":button").prop("disabled", false); setstudy(study + temp);} , 120000);
            }
            else{
                let timerInterval
                Swal.fire({
                icon: 'warning',
                title: 'Study Complete!',
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

    useEffect(() => {
        return () => {clearTimeout(timer)};
    }, [page, setpage, timer]);

    return(
        <div className="col-2 d-flex flex-column text-center">
            <h4>@ Kampus</h4>
            {listMatkul.map((matkul, i) => <button key={i} id="buttonBelajar" onClick={addStats}>Belajar {matkul}</button>)}
        </div>
    );
}

export default ButtonBelajar;