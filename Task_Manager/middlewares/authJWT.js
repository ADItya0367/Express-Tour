const jwt = require('jsonwebtoken');

const authJWT = async(req, res, next) => {
    let token = req.header('Authorization');
    if(!token) return res.status(401).send('Access Denied');
    jwt.verify(token, 'secret', (err, user) => {
        if(err) return res.status(403).send('Invalid Token');
        req.user = user;
        next();
    });
}

module.exports = authJWT;