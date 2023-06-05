const mongoose = require("mongoose")

const departmentSchema = mongoose.schema({
    name: {
        type: string,
        required: [true, "please input your full name"],
    },
    facultyId: {
        type: string,
        required: [true],
    },

}, {
    timestamps: true,
});

module.exports = mongoose.model('Department', departmentSchema)