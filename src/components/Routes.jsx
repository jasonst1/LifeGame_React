import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import React from "react";

import {Home} from "../Pages/Home";
import Kafe from "../Pages/Kafe";
import Kampus from "../Pages/Kampus";
import Supermarket from "../Pages/Supermarket";

const RouteComp = React.memo(() => {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route exact path="/kafe" element={<Kafe />}/>
                <Route exact path="/kampus" element={<Kampus />}/>
                <Route exact path="/supermarket" element={<Supermarket />}/>
                <Route path="/*" element={<Navigate replace to="/" />} />
            </Routes>
        </BrowserRouter>
    );
});

export {RouteComp};