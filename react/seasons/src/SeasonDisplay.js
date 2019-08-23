import './SeasonDisplay.css';
import React from 'react';

// configuration object that tells us what text and icon we should use if it's summer or winter
const seasonConfig = {
    summer: {
        text: "Let's hit the beach",
        iconName: 'sun'
    },
    winter: {
        text: "Burr, it's cold",
        iconName: 'snowflake'
    }
};

// function to determine the season
const getSeason = (lat, month) => {
    if ( month > 2 && month < 9 ) {
        // ternerary operation
        // if lat is greater than 0  return summer else return winter
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = (props) => {

    // const season uses the getSeason function above and passes the latitude from our props and the month from Date
    const season = getSeason(props.lat, new Date().getMonth());

    // return our object with { text, iconName }
    const { text, iconName } = seasonConfig[season];

    return (
        // className= `${icon} is the name of the icon, icon is the name of the class'
        <div className = {`season-display ${ season }`}>
            <i className={`icon-left massive ${iconName} icon`} /> 
            <h1> { text }  </h1>
            <i className={`icon-right massive ${iconName} icon`} /> 
        </div>
    );
};

export default SeasonDisplay;