const mongoose = require('mongoose')

const connectDB = async() => {

    await mongoose.connect("mongodb+srv://vibhanimbalkar97_db_user:uLodkdjz620LcqPB@notesapp.qu1aazb.mongodb.net/notes")

    console.log("Connected to DB")
}

module.exports = connectDB