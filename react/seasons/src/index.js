import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
    
    // state - constructor
    state = { lat: null, errorMessage: ''};

    componentDidMount(){
        // geolocation to get user's location
            // position is the response observable
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            error => this.setState({ errorMessage: error.message })
        );
    }

    // React says we have to define render
    render(){
        if( this.state.errorMessage && !this.state.lat ){
            return <div>Error: { this.state.errorMessage }</div>
        }

        if( !this.state.errorMessage && this.state.lat ){
            return <SeasonDisplay lat={ this.state.lat }/>
        }

        return <div>Loading... </div>
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)