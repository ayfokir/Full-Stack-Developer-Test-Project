const { createSong}  = require('../services/add-song-service')

async function Create(req, res, next) {
    // Create a new song
    let song = req.body
    console.log("see the song")
    console.log(song)
    const newUser = await createSong(song);
}

module.exports = {
    Create
};