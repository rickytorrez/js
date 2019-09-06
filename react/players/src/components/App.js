import React from 'react';

import PlayerList from './PlayerList';
import PlayerItem from './PlayerItem';

const App = () => {
    return(
     <div className="ui container grid">
         <div className="ui row">
             <div className="column eight wide">
                <PlayerList />
             </div>
             <div className="column eight wide">
                <PlayerItem />
             </div>
         </div>
     </div>
    );
};

export default App;