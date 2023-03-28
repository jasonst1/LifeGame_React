import React, {useContext, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import ButtonStatsHome from '../components/buttonStatsHome.jsx';
import { PageData } from '../Utilities/StoreContext.js';

const Home = React.memo(() => {
    console.log("renderhome");
    let {page, setpage} = useContext(PageData);
    useEffect(()=>setpage("Home"),[setpage]);
    useEffect(()=> console.log("PAGE: " + page), [page]);

    return(
    <div id="Home">
        <div className="col-12">
            <div id="controlBar" className="col-12 d-flex flex-row justify-content-between">
                <div className="col-2 d-flex flex-column text-center justify-content-between">
                    <div id="navBars" className="d-flex flex-column">
                        <h4 id="AtasXColor">Go To:</h4>
                        <Link to="/kampus">
                            <button type="button" id="KampusButton">Kampus</button>
                        </Link>
                        <Link to="/kafe">
                            <button>Kafe</button>
                        </Link>
                        <Link to="/supermarket">
                            <button>Supermarket</button>    
                        </Link>
                    </div>
                </div>
                <ButtonStatsHome />
            </div>
        </div>
    </div>
    );
});

export {Home};