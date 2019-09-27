import React from 'react';

class SearchBar extends React.Component {

    state = { term: '' };

    // event.preventDefault() prevents submission of the form and refreshing of the page
    // the arrow function will make sure that the value of 'this' is always equal to the value of the instance 
    // of our SearchBar
    onFormSubmit = event =>  {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    // setState s1
    render(){
        return (
            <div className="ui segment">
                <form onSubmit={ this.onFormSubmit }  className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                            type="text" 
                            value={ this.state.term } 
                            onChange={ (e) => this.setState({ term: e.target.value }) }
                        />   
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;