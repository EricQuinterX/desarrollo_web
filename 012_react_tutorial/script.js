import React from 'react';
import ReactDOM from 'react-dom';
import {HelloPlanet} from './components/HelloPlanet';

var myObj = {
    myFavNumber: 0
}

ReactDOM.render(
    <div>
        <HelloPlanet name="Earth" />
    </div>,
    document.getElementById('firstApp')
)
