import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    
    // state - constructor
    state = { lat: null, errorMessage: ''};

    // lifecycle method
    componentDidMount(){
        // geolocation to get user's location
            // position is the response observable
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            error => this.setState({ errorMessage: error.message })
        );
    }

    // conditonal option to decide what content to render
    renderContent(){
        if( this.state.errorMessage && !this.state.lat ){
            return <div>Error: { this.state.errorMessage }</div>
        }

        if( !this.state.errorMessage && this.state.lat ){
            return <SeasonDisplay lat={ this.state.lat }/>
        }

        return <Spinner message="Please accept the location request" />;
    }

    // page render
    render(){
        return (
            <div>
                { this.renderContent() }
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)