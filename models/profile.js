const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    userName: { type: String },
    photo: { type: String },
    about: { type: String },
    personality: { type: String },
    interest: { type: String },  
});



const Profile = mongoose.model('Profile', profileSchema);


module.exports = Profile;