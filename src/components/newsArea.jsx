import React from 'react';
import News from '../API/news';
import WeatherDisplay from '../components/weatherDisplay';
import AvatarImg from './AvatarImg.jsx';

const NewsD = () => {
    return(
        <div className="d-flex flex-row justify-content-start">
            <div id="newsArea" className="col-2">
                <div className="smartphone">
                    <div className="content">
                        <WeatherDisplay />
                        <News />
                    </div>
                </div>
            </div>
            <AvatarImg />
        </div>
    );
}

export default NewsD;