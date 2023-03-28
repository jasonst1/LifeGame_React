import React from 'react';
import { useState } from 'react';
import {PageData} from '../Utilities/StoreContext';

function PageDataProvider({children}){
    const [page, setpage] = useState("");

    return(
        <PageData.Provider value={React.useMemo(() => ({ page, setpage }), [page, setpage])}>
            {children}
        </PageData.Provider>
    );
}

export {PageDataProvider};