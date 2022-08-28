const Logger = require('../services/logger');

const {UserApi, CartApi} = require('../api');

export const validateNewUser = (newUser) => {
    return (!newUser || !newUser.firstName || !newUser.lastName || !newUser.age || !newUser.address || !newUser.address.street || !newUser.address.city)
}

export const getUserByEmail = (email) => {
    UserApi.findByEmail(email)
}

export const createUser = async (userData) => {
    const newUser = await UserApi.create(userData)
    await CartApi.create(newUser._id);
    return newUser;
}

export const isLoggedIn = (req,res,done) =>{
    Logger.info('is Authenticated');
    Logger.info(req.isAuthenticated());
    Logger.info('req.user');
    Logger.info(req.user);
    if (!req.isAuthenticated()) {
        return res.status(401).json({msg: 'No tenes autorizacion'})
    }
    done()
}

export const isAdmin = (req,res,done) => {
    Logger.info('Admin middleware');
    Logger.info(req.user);

    if (!req.user.admin) {
        return res.status(401).json({msg: 'Admin'})
    }

    done()
}