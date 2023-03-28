import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import React, { useState } from "react";
import MainMenu from "./Pages/MainMenu";
import ClockFunc from "./components/clockFunc";
import {StatsBar} from  "./components/statsBar.jsx";
import {RouteComp} from "./components/Routes";
import { UserDataProvider } from "./StatsProvider/UserDataProvider";
import { StatsDataProvider } from "./StatsProvider/StatsDataProvider";
import { PageDataProvider } from "./StatsProvider/PageDataProvider";
import NewsArea from './components/newsArea.jsx';
import Weather from './API/Weather';
import { HourMinuteProvider } from "./StatsProvider/HourMinuteProvider";
import { WeatherProvider } from "./StatsProvider/WeatherProvider";
import BackgroundController from "./Controller/BackgroundController";
import ReduceStatsData from "./Controller/DecreaseStatsController";
import LocationController from "./Controller/LocationController";
import DeadController from "./Controller/DeadController";
import GameOverController from "./Controller/7DayController";
import IndexFunc from "./Controller/DayIndexController";
import WarningFunction from "./Controller/WarningFunc";


const AppRouter = React.memo(() => {
    console.log("render AppRouter");
    const [submitControl, setSubmitControl] = useState(0);

    if(submitControl === 0){
        return(
            <UserDataProvider>
                <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<MainMenu setSubmitControl = {setSubmitControl} />} />
                            <Route path="/*" element={<Navigate replace to="/" />} />
                        </Routes>
                </BrowserRouter>
            </UserDataProvider>
        );
    }
    else if(submitControl === 1){
        return (
            <UserDataProvider>
                <PageDataProvider>
                    <StatsDataProvider>
                        <HourMinuteProvider>
                            <WeatherProvider>
                                        <StatsBar /> 
                                        <ClockFunc />
                                        <RouteComp />
                                        <NewsArea />
                                        <Weather />
                                        <BackgroundController />
                                        <ReduceStatsData />
                                        <LocationController />
                                        <DeadController />
                                        <WarningFunction />
                                        <GameOverController />
                                        <IndexFunc />
                            </WeatherProvider>
                        </HourMinuteProvider>
                    </StatsDataProvider>
                </PageDataProvider>
            </UserDataProvider>
        );
    }
});

export {AppRouter};