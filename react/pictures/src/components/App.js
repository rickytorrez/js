import React from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';

class App extends React.Component {

    // defines callback function
    onSearchSubmit(term){
        axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID f16bb67e98c77b55a89894015e010d68f7ce0d17cfdb603fd6cc25cf52153e26'
            }
        })
    }

    render(){
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={ this.onSearchSubmit }/>
            </div>
        );
    }
}

export default App;