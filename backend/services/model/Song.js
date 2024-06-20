const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    title: String,
    artist: String,
    album: String,
    genre:String
});

const Song = mongoose.model('Song', userSchema);

module.exports = Song;
