import React, {useContext, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import ButtonSupermarket from "../components/ButtonSupermarket.jsx";
import { PageData } from '../Utilities/StoreContext.js';

function Supermarket(){
    console.log("renderSupermarket");

    let {page, setpage} = useContext(PageData);
    setpage("Supermarket")
    useEffect(()=> console.log("PAGE: " + page), [page]);

    return(
    <div id="Supermarket">
        <div className="col-12">
            <div id="controlBar" className="col-12 d-flex flex-row justify-content-between">
                <div className="col-2 d-flex flex-column text-center justify-content-between">
                    <div id="navBars"  className="d-flex flex-column">
                        <h4 id="AtasXColor">Go To:</h4>
                        <Link to="/">
                            <button>Rumah</button>
                        </Link>
                        <Link to="/kampus">
                            <button type="button" id="KampusButton">Kampus</button>
                        </Link>
                        <Link to="/kafe">
                            <button>Kafe</button>
                        </Link>
                    </div>
                </div>
                <ButtonSupermarket />
            </div>
        </div>
    </div>
    );
}

export default Supermarket;