import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectPlayer } from '../actions';

class PlayerList extends Component {
    
    // helper function to render the list of players
    renderList(){
        return this.props.players.map((player) => {
            return(
                <div className="item" key={ player.name }>
                    <div className="right floated content">
                        <button
                            className="ui button primary"
                            onClick={() => this.props.selectPlayer(player)}>
                                Select
                        </button>
                    </div>
                    <div className="content">
                        { player.name }
                    </div>
                </div>
            );
        });
    };

    // render method - MUST HAVE
    render(){
        return <div className="ui divided list">{ this.renderList() }</div>
    }
}

// returns the players as a JS object
const mapStateToProps = (state) => {
    return { players: state.players };
}

// connects redux store to our component
export default connect(mapStateToProps, { selectPlayer })(PlayerList);