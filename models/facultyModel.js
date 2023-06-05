const mongoose = require("mongoose")

const facultySchema = mongoose.schema({
    name: {
        type: string,
        required: [true, "please input your full name"],
    },

}, {
    timestamps: true,
});

module.exports = mongoose.model('Faculty', facultySchema)