// static list of songs reducer
const songsReducer = () => {
    return [
        {title: 'All night long', duration: '3:26' },
        {title: 'Sail On', duration: '6:12' },
        {title: 'BrickHouse', duration: '4:37' },
        {title: 'Say you, Say Me', duration: '4:01' },
    ];
};

// select song reducer
// selectedSong defaulted to null, when our app first starts, no song is selected
// as a second argument, is our action object
const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
};