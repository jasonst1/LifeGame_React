import React, {useContext, useEffect} from "react";
import { PageData, WeatherData, HourMinute } from "../Utilities/StoreContext";

function BackgroundController(){
    let {page} = useContext(PageData);
    let {weather} = useContext(WeatherData);
    let {hour} = useContext(HourMinute);

    useEffect(()=>{
        if(weather === "Clear"){
            if(hour >= 6 && hour < 19){
                if(page === "Home"){
                    document.body.style.backgroundImage = "url('./ASSET/RumahCerahSiang.png')";
                    document.getElementById("nameGreet").style.color = "black";
                }
                if(page === "Kampus"){
                    document.body.style.backgroundImage = "url('./ASSET/KampusSunny.png')";
                    document.getElementById("nameGreet").style.color = "black";
                }
                if(page === "Kafe"){
                    document.body.style.backgroundImage = "url('./ASSET/CafePagiSiangSunny.png')";
                    document.getElementById("nameGreet").style.color = "black";
                    document.getElementById("AtasColor").style.color = "black";
                    document.getElementById("AtasXColor").style.color = "black";
                }
                if(page === "Supermarket"){
                    document.body.style.backgroundImage = "url('./ASSET/Supermarket.png')";
                    document.getElementById("nameGreet").style.color = "black";
                }
            }
            else if((hour >= 19 && hour<24) || (hour>=0 && hour < 6)){
                if(page === "Home"){
                    document.body.style.backgroundImage = "url('./ASSET/RumahMalamCerah.png')";
                    document.getElementById("nameGreet").style.color = "black";
                }
                if(page === "Kampus"){
                    document.body.style.backgroundImage = "url('./ASSET/KampusSunny.png')";
                    document.getElementById("nameGreet").style.color = "black";
                }
                if(page === "Kafe"){
                    document.body.style.backgroundImage = "url('./ASSET/CafeNightCerah.png')";
                    document.getElementById("nameGreet").style.color = "red";
                    document.getElementById("AtasColor").style.color = "white";
                    document.getElementById("AtasXColor").style.color = "white";
                }
                if(page === "Supermarket"){
                    document.body.style.backgroundImage = "url('./ASSET/Supermarket.png')";
                    document.getElementById("nameGreet").style.color = "black";
                }
            }
        }
        else if(weather === "Clouds" || weather==="Mist" || weather === "Smoke" || weather === "Haze" || weather === "Dust" || weather === "Fog" || weather === "Sand"){
            if(hour >= 6 && hour < 19){
                if(page === "Home"){
                    document.body.style.backgroundImage = "url('./ASSET/RumahBerawanSiang.png')";
                    document.getElementById("nameGreet").style.color = "black";
                }
                if(page === "Kampus"){
                    document.body.style.backgroundImage = "url('./ASSET/KampusAwan.png')";
                    document.getElementById("nameGreet").style.color = "black";
                }
                if(page === "Kafe"){
                    document.body.style.backgroundImage = "url('./ASSET/CafePagiSiangCloudy.png')";
                    document.getElementById("nameGreet").style.color = "black";
                    document.getElementById("AtasColor").style.color = "black";
                    document.getElementById("AtasXColor").style.color = "black";
                }
                if(page === "Supermarket"){
                    document.body.style.backgroundImage = "url('./ASSET/Supermarket.png')";
                    document.getElementById("nameGreet").style.color = "black";
                }
            }
            else if((hour >= 19 && hour<24) || (hour>=0 && hour < 6)){
                if(page === "Home"){
                    document.body.style.backgroundImage = "url('./ASSET/RumahMalamAwan.png')";
                    document.getElementById("nameGreet").style.color = "black";
                }
                if(page === "Kampus"){
                    document.body.style.backgroundImage = "url('./ASSET/KampusAwan.png')";
                    document.getElementById("nameGreet").style.color = "black";
                }
                if(page === "Kafe"){
                    document.body.style.backgroundImage = "url('./ASSET/CafeNightCloudy.png')";
                    document.getElementById("nameGreet").style.color = "red";
                    document.getElementById("AtasColor").style.color = "white";
                    document.getElementById("AtasXColor").style.color = "white";
                }
                if(page === "Supermarket"){
                    document.body.style.backgroundImage = "url('./ASSET/Supermarket.png')";
                    document.getElementById("nameGreet").style.color = "black";
                }
            }
        }
        else if(weather === "Rain"){
            if(hour >= 6 && hour < 19){
                if(page === "Home"){
                    document.body.style.backgroundImage = "url('./ASSET/RumahHujanSiang.png')";
                    document.getElementById("nameGreet").style.color = "black";
                }
                if(page === "Kampus"){
                    document.body.style.backgroundImage = "url('./ASSET/KampusHujan.png')";
                    document.getElementById("nameGreet").style.color = "black";
                }
                if(page === "Kafe"){
                    document.body.style.backgroundImage = "url('./ASSET/CafePagiSiangRain.png')";
                    document.getElementById("nameGreet").style.color = "black";
                    document.getElementById("AtasColor").style.color = "black";
                    document.getElementById("AtasXColor").style.color = "black";
                }
                if(page === "Supermarket"){
                    document.body.style.backgroundImage = "url('./ASSET/Supermarket.png')";
                    document.getElementById("nameGreet").style.color = "black";
                }
            }
            else if((hour >= 19 && hour<24) || (hour>=0 && hour < 6)){
                if(page === "Home"){
                    document.body.style.backgroundImage = "url('./ASSET/RumahMalamHujan.png')";
                    document.getElementById("nameGreet").style.color = "black";
                }
                if(page === "Kampus"){
                    document.body.style.backgroundImage = "url('./ASSET/KampusAwan.png')";
                    document.getElementById("nameGreet").style.color = "black";
                }
                if(page === "Kafe"){
                    document.body.style.backgroundImage = "url('./ASSET/CafeNightRain.png')";
                    document.getElementById("nameGreet").style.color = "red";
                    document.getElementById("AtasColor").style.color = "white";
                    document.getElementById("AtasXColor").style.color = "white";
                }
                if(page === "Supermarket"){
                    document.body.style.backgroundImage = "url('./ASSET/Supermarket.png')";
                    document.getElementById("nameGreet").style.color = "black";
                }
            }
        }
        else{
            if(hour >= 6 && hour < 19){
                if(page === "Home"){
                    document.body.style.backgroundImage = "url('./ASSET/RumahCerahSiang.png')";
                    document.getElementById("nameGreet").style.color = "black";
                }
                if(page === "Kampus"){
                    document.body.style.backgroundImage = "url('./ASSET/KampusSunny.png')";
                    document.getElementById("nameGreet").style.color = "black";
                }
                if(page === "Kafe"){
                    document.body.style.backgroundImage = "url('./ASSET/CafePagiSiangSunny.png')";
                    document.getElementById("nameGreet").style.color = "black";
                    document.getElementById("AtasColor").style.color = "black";
                    document.getElementById("AtasXColor").style.color = "black";
                }
                if(page === "Supermarket"){
                    document.body.style.backgroundImage = "url('./ASSET/Supermarket.png')";
                    document.getElementById("nameGreet").style.color = "black";
                }
            }
            else if((hour >= 19 && hour<24) || (hour>=0 && hour < 6)){
                if(page === "Home"){
                    document.body.style.backgroundImage = "url(./ASSET/RumahMalamCerah.png)";
                    document.getElementById("nameGreet").style.color = "black";
                }
                if(page === "Kampus"){
                    document.body.style.backgroundImage = "url('./ASSET/KampusSunny.png')";
                    document.getElementById("nameGreet").style.color = "black";
                }
                if(page === "Kafe"){
                    document.body.style.backgroundImage = "url('./ASSET/CafeNightCerah.png')";
                    document.getElementById("nameGreet").style.color = "red";
                    document.getElementById("AtasColor").style.color = "white";
                    document.getElementById("AtasXColor").style.color = "white";
                    
                }
                if(page === "Supermarket"){
                    document.body.style.backgroundImage = "url(./ASSET/Supermarket.png)";
                    document.getElementById("nameGreet").style.color = "black";
                }
            }
        }
    }, [weather, hour, page]);
}

export default BackgroundController;