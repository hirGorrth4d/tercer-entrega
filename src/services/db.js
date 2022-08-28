const mongoose = require('mongoose');

const Config = require('../config');

export const db = () => {
    return mongoose.connect(Config.MONGO_ATLAS_URL, {useNewUrlParse: true})
}