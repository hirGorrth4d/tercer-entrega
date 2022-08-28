const dotenv = require('dotenv');
dotenv.config();

export default {

    PORT: process.env.PORT || 5000,
    MONGO_ATLAS_URL: process.env.MONGO_ATLAS_SRV || 'mongoSRV',
    MONGO_LOCAL_SRV: process.env.MONGO_LOCAL_SRV,
    SESSION_SECRET_KEY: process.env.SESSION_SECRET_KEY || 'secretKey',
    
}