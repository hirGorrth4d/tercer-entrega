const Config = require('../config');

const nodemailer = require('nodemailer');

const twilio = require('twilio');

const twilioApi = twilio(Config.TWILIO_ACCOUNT_ID, Config.TWILIO_TOKEN  )

const propietario = {
    name: Config.GMAIL_NAME,
    address: Config.GMAIL_EMAIL
}

const gmailtransporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user:  propietario.address,
        pass: Config.GMAIL_PASS,
    }
})

const notifyNewUserByEmail = async (userData) =>{
    const mailOptions = {

        from: propietario,
        to: propietario.address,
        subject: 'nuevo usuario registrado',
        html: `Nuevo usuario creado ${userData}`
    };
    const response = await gmailtransporter.sendMail(mailOptions)
    return response


}

const notifyNewOrderByWapp = async (orderData) => {
    const params = {
        body: `Nueva orden ${orderData}`,
        from: `whatsapp: ${Config.TWILIO_WSP_PHONE}`,
        to: `whatsapp: ${Config.ADMIN_PHONE}`
    }

    const response = await twilioApi.messages.create(params)
    return response
}

export const NotificationService = { 
    notifyNewOrderByWapp,
    notifyNewUserByEmail,
}