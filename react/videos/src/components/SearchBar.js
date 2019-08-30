import React from 'react';

class SearchBar extends React.Component {

    // state helps us turn the uncontrolled input to a controlled one
    state = { term : '' };

    // updates input by updating state on event change
    onInputChange = (event) => {
        this.setState({ term: event.target.value })
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        // TODO: make sure we call
        // callback from parent component
    };

    render(){
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit}  className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                            type="text" 
                            onChange={ this.onInputChange }
                            value={ this.state.term } 
                            />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;