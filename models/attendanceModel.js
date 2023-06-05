const mongoose = require("mongoose")

const attendanceSchema = mongoose.schema({
    userId: {
        type: string,
        required: [true, "please input your full name"],
    },
    courseId: {
        type: string,
        required: [true],
    },
    date: {
        type: Date,
        default: Date.now,
    },
    session: {
        type: string,
        required: [true],
    },

}, {
    timestamps: true,
});

module.exports = mongoose.model('Attendance', attendanceSchema)