const mongoose = require("mongoose");



const ActivitySchema = new mongoose.Schema ({
    activityName: { type: String },
    description: { type: String },
});



const Activity = mongoose.model("Activity", ActivitySchema);



module.exports = Activity;