const mongoose = require("mongoose")
const bcrypt = require('bcrypt')

const userSchema = mongoose.schema({
    name: {
        type: string,
        required: [true, "please input your full name"],
    },
    email: {
        type: string,
        required: [true, "please input your email"],
        unique: true,
    },
    password: {
        type: string,
        required: [true, "please input your password"],
    },
    matricno: {
        type: string,
        required: [true, "please input your matricno"],
        unique: true,
    },
    levelCode: {
        type: string,
        required: [true],
    },
    facultyId: {
        type: string,
        required: [true],
    },
    departmentId: {
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



// static signup method
userSchema.statics.signup = async function (email, password) {

    // validation
    if (!email || !password) {
        throw Error('All fields must be filled')
    }
    if (!validator.isEmail(email)) {
        throw Error('Email not valid')
    }
    if (!validator.isStrongPassword(password)) {
        throw Error('Password not strong enough')
    }

    const exists = await this.findOne({ email })

    if (exists) {
        throw Error('Email already in use')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({ email, password: hash })

    return user
}
module.exports = mongoose.model('User', userSchema)