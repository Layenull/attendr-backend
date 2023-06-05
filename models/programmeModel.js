const mongoose = require("mongoose")

const programmeSchema = mongoose.schema({
    name: {
        type: string,
        required: [true, "please input your full name"],
    },
    facultyId: {
        type: string,
        required: [true],
    },
    departmentId: {
        type: string,
        required: [true],
    },

}, {
    timestamps: true,
});