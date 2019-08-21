import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render(){
        // geolocation to get user's location
            // position is the response observable
        window.navigator.geolocation.getCurrentPosition(
            position => console.log(position),
            error => console.log(error) 
        );

        return <div>Latitude: </div>
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)