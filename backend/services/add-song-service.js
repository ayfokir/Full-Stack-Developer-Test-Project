const mongoose = require('../config/db.config'); // Importing mongoose config ensures the connection is established
const Song = require('./model/Song'); // Import the User model

async function createSong(songData) {
    const song = new Song({
        title: songData.title,
        artist: songData.artist,
        album: songData.album,
        genre: songData.genre
    });
    await song.save();
    console.log('Song created:', song);
    return song;
    // The below lines are unreachable and thus removed
    // console.log("yes inside service")
    // console.log(song)
}

module.exports = {
    createSong
};
