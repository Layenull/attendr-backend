const mongoose = require("mongoose")

const semesterSchema = mongoose.schema({
    name: {
        type: string,
        required: [true, "please input your full name"],
    },

}, {
    timestamps: true,
});

module.exports = mongoose.model('Semester', semesterSchema)