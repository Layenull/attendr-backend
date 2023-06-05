const mongoose = require("mongoose")

const courseSchema = mongoose.schema({
    name: {
        type: string,
        required: [true, "please input your full name"],
    },
    courseCode: {
        type: string,
        required: [true, "please input your matricno"],
    },
    levelCode: {
        type: string,
        required: [trues],
    },
    semesterId: {
        type: string,
        required: [true],
    },
    programmeId: {
        type: string,
        required: [true],
    },

}, {
    timestamps: true,
});

module.exports = mongoose.model('Course', courseSchema)