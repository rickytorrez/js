import React from 'react';

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

    // ternary operation to display text
    const text = season === 'winter' ? 'Burr, it is chilly!' : 'Lets hit the beach';

    return (
        <div> 
            <h1> { text }  </h1>
        </div>
    );
};

export default SeasonDisplay;