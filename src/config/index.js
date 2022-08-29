const dotenv = require('dotenv');
dotenv.config();

export default {

    PORT: process.env.PORT || 5000,
    MONGO_ATLAS_URL: process.env.MONGO_ATLAS_SRV || 'mongoSRV',
    MONGO_LOCAL_SRV: process.env.MONGO_LOCAL_SRV,
    SESSION_SECRET_KEY: process.env.SESSION_SECRET_KEY || 'secretKey',
    GMAIL_EMAIL: process.env.GMAIL_EMAIL || 'email@gmail.com',
    GMAIL_PASSWORD: process.env.GMAIL_PASSWORD || 'password',
    GMAIL_NAME: process.env.GMAIL_NAME || 'Gmail propietario',
    TWILIO_ACCOUNT_ID: process.env.TWILIO_ACCOUNT_ID || 'twilioId',
    TWILIO_TOKEN: process.env.TWILIO_TOKEN ||  'twiliotoken',
    TWILIO_WSP_PHONE: process.env.TWILIO_WSP_PHONE || '+123456789',
    ADMIN_PHONE: process.env.ADMIN_PHONE || '+5491112345678'
}