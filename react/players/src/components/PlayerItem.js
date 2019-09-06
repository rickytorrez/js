import React from 'react';

import { connect } from 'react-redux';

const PlayerItem = ({ player }) => {
    if(!player){
        return <div>Please choose your favorite player.</div>
    }
    return(
         <div>
             <h4>Details for your favorite player:</h4>
             <p>
                Name: { player.name }
                <br />
                Club: { player.club }
             </p>
        </div>
    );
};

// the return object is referenced as a passed prop on line 5.
const mapStateToProps = (state) => {
    return { player: state.selectedPlayer }
}

export default connect(mapStateToProps)(PlayerItem);