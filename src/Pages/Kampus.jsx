import React from "react";
import {useContext, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import ButtonBelajar from '../components/buttonBelajar.jsx';
import { PageData } from '../Utilities/StoreContext.js';
import KickFunction from "../Controller/KickController.jsx";

function Kampus(){
    console.log("renderKampus");

    let {page, setpage} = useContext(PageData);
    useEffect(()=>setpage("Kampus"),[setpage]);
    useEffect(()=> console.log("PAGE: " + page), [page]);

    return(
    <div id="Kampus">
        <div className="col-12">
            <div id="controlBar" className="col-12 d-flex flex-row justify-content-between">
                <div className="col-2 d-flex flex-column text-center justify-content-between">
                    <div id="navBars"  className="d-flex flex-column">
                        <h4 id="AtasXColor">Go To:</h4>
                        <Link to="/">
                            <button>Rumah</button>
                        </Link>
                        <Link to="/kafe">
                            <button>Kafe</button>
                        </Link>
                        <Link to="/supermarket">
                            <button>Supermarket</button>    
                        </Link>
                    </div>
                </div>
                <ButtonBelajar />
                <KickFunction />
            </div>
        </div>
    </div>
    );
}

export default Kampus;