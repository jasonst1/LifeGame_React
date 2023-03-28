import React, {useContext, useEffect} from 'react';
import {HourMinute, UserData, StatsData} from '../Utilities/StoreContext';
import Swal from 'sweetalert2';

function FinishFunc(){
    let {dayindex} = useContext(HourMinute);
    let {name} = useContext(UserData);
    let {hunger, sleep, play, study} = useContext(StatsData);
    let temp = name;
    useEffect(() => {
      if(dayindex === 7){
          if(hunger <=30){
            Swal.fire({
                title: 'Evaluasi 7 Hari',
                text: temp + ", Kamu Sejak Masuk Kuliah Jarang Makan. Kamu Harus Ingat Makan!",
                icon: 'success',
                confirmButtonColor: 'green',
                confirmButtonText: 'Restart Game'
              }).then(() => {
                window.location.reload();
              })
          }
          else if(sleep <=30){
            Swal.fire({
                title: 'Evaluasi 7 Hari',
                text: temp +", Kamu Sejak Masuk Kuliah Jarang Tidur. Tidur itu Penting Lho!",
                icon: 'success',
                confirmButtonColor: 'green',
                confirmButtonText: 'Restart Game'
              }).then(() => {
                window.location.reload();
              })
          }
          else if(play <=30){
            Swal.fire({
                title: 'Evaluasi 7 Hari:',
                text: temp + ", Kamu Sejak Masuk Kuliah Jarang Main. Mainlah Sekali-Kali!",
                icon: 'success',
                confirmButtonColor: 'green',
                confirmButtonText: 'Restart Game'
              }).then(() => {
                window.location.reload();
              })
          }
          else if(study <= 30){
            Swal.fire({
                title: 'Evaluasi 7 Hari:',
                text: temp + ", Kamu Sejak Masuk Kuliah Jarang Belajar. Mulailah Belajar!",
                icon: 'success',
                confirmButtonColor: 'green',
                confirmButtonText: 'Restart Game'
              }).then(() => {
                window.location.reload();
              })
          }
          else if(play <=30){
            Swal.fire({
                title: 'Evaluasi 7 Hari:',
                text: temp + ", Kamu Sejak Masuk Kuliah Jarang Main. Mainlah Sekali-Kali",
                icon: 'success',
                confirmButtonColor: 'green',
                confirmButtonText: 'Restart Game'
              }).then(() => {
                window.location.reload();
              })
          }
          else if(hunger >= 70){
            Swal.fire({
                title: 'Evaluasi 7 Hari:',
                text: temp + ", Kulineran Mulu Bos",
                icon: 'success',
                confirmButtonColor: 'green',
                confirmButtonText: 'Restart Game'
              }).then(() => {
                window.location.reload();
              })
          }
          else if(play >= 70){
            Swal.fire({
                title: 'Evaluasi 7 Hari:',
                text: temp + ", Lebih Cocok Jadi Pro Gamer Kamu",
                icon: 'success',
                confirmButtonColor: 'green',
                confirmButtonText: 'Restart Game'
              }).then(() => {
                window.location.reload();
              })
          }
          else if(sleep >= 70){
            Swal.fire({
                title: 'Evaluasi 7 Hari:',
                text: temp + ", Nyenyak Tidur Mulu Ya",
                icon: 'success',
                confirmButtonColor: 'green',
                confirmButtonText: 'Restart Game'
              }).then(() => {
                window.location.reload();
              })
          }
          else if(study >= 70){
            Swal.fire({
                title: 'Evaluasi 7 Hari:',
                text: temp + ", Rajin Bener Kamu Belajar",
                icon: 'success',
                confirmButtonColor: 'green',
                confirmButtonText: 'Restart Game'
              }).then(() => {
                window.location.reload();
              })
          }
          else if(study >= 70 && hunger >= 70 && sleep >= 70 && play >= 70){
            Swal.fire({
                title: 'Evaluasi 7 Hari:',
                text: temp + ", Work Life Balance Indeed! Amazing Job!",
                icon: 'success',
                confirmButtonColor: 'green',
                confirmButtonText: 'Restart Game'
              }).then(() => {
                window.location.reload();
              })
          }
      }
    }, [dayindex]);
}

export default FinishFunc;