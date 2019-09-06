import { combineReducers } from 'redux';

const playerReducer = () => {
    return [
        { name: 'Lionel Messi', club: 'Barcelona'  },
        { name: 'Cristiano Ronaldo', club: 'Juventus'  },
        { name: 'Neymar', club: 'PSG'  },
        { name: `N'golo Kante`, club: 'Chelsea'  },
        { name: 'Virgil Van Dijk', club: 'Liverpool'  },
    ];
};

const selectedPlayerReducer = (selectedPlayer=null, action) => {
    if(action.type === 'PLAYER_SELECTED'){
        return action.payload;
    }
    return selectedPlayer;
};

// wiring up the provider
export default combineReducers({
    players: playerReducer,
    selectedPlayer: selectedPlayerReducer
});