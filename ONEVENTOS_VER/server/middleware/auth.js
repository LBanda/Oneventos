import { verify } from 'jsonwebtoken';
import { findById } from '../models/User';

const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;

    // check json web token exists & is verified
    if (token) {
        verify(token, 'cambien esto por un secreto', (err, decodedToken) => {
            if (err) {
                console.log(err.message);
                res.redirect('/login');
            } else {
                console.log(decodedToken);
                next();
            }
        });
    } else {
        res.redirect('/login');
    }
};

// validate current user
const validateUser = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
        verify(token, 'cambien esto por un secreto', async (err, decodedToken) => {
            if (err) {
                res.locals.user = null;
                next();
            } else {
                let user = findById(decodedToken.id);
                res.locals.user = user;
                next();
            }
        });
    } else {
        res.locals.user = null;
        next();
    }
};


export default { requireAuth, validateUser };