// action creator
// assume we're going to pass the selected song as a prop to the action creator
// name export
export const selectSong = (song) => {
    // return an action
    return {
        // must have a type property
        type: 'SONG_SELECTED',
        // payload is optional
        payload: song
    };
};