import React from 'react';
import './App.css';
import SkyOne from '../img/parallax-surface/SkyOne.png';
import Mountains from '../img/parallax-surface/Mountains.png';
import Water from '../img/parallax-surface/water.png';

function App() {
    return (
        <div className="parallax">
            <div className="parallax__layer parallax__layer_one">
                <img src={SkyOne} alt="" />
            </div>
            <div className="parallax__layer_two">
                <img src={Mountains} alt="" />
            </div>
            <div className="parallax__layer_three">
                <img src={Water} alt="" />
            </div>
            <div className="parallax__cover" />
        </div>
    );
}

export default App;
