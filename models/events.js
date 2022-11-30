const mongoose = require('mongoose');

const eventsSchema = new mongoose.Schema({
    liveMusic: { type: String },
    movies: { type: String },
    comedyShows: { type: String },
    wineTasting: { type: String },
    artFestivals: { type: String },
    musicFestivals: { type: String },
});


const Events = mongoose.model('Events', eventsSchema);



module.exports = Events;