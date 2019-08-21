import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

    // super is a reference to the parent's constructor function
    constructor(props){
        super(props);

        // this is the only time we do direct assignment to this.state
        this.state = { lat: null };

        // geolocation to get user's location
            // position is the response observable
        window.navigator.geolocation.getCurrentPosition(
            position => {
                // to update our state object, we call setState
                this.setState({ lat: position.coords.latitude })
            },
            error => console.log(error) 
        );
    }

    // React says we have to define render
    render(){
        return <div>Latitude: { this.state.lat } </div>
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)