const mongoose = require("mongoose")

const levelSchema = mongoose.schema({
    code: {
        type: string,
        required: [true, "please input your full name"],
    },

}, {
    timestamps: true,
});

module.exports = mongoose.model('Level', levelSchema)