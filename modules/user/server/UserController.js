var jwt = require('jsonwebtoken');
var config = require('../../../config/config');

var user = {
    name: 'admin',
};


exports.profile = function(req, res, next) {
    return res.json(user);
};

exports.checkIfAuthorized = function(req, res, next) {
    // check header or url parameters or post parameters for token

    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    // decode token
    if (token) {

    // verifies secret and checks exp
        jwt.verify(token, config.secret, function(err, decoded) {

            if (err) {
                return res.status(401).json({
                    success: false,
                    message: 'Failed to authenticate token.'
                });
            }


            req.user = decoded;
            console.log(req.user);
            return next();

        });

    } else {
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });

    }
};


exports.login = function(req, res, next) {
    if (req.body.username === 'admin' && req.body.password === '123123') {


        var token = jwt.sign(user, config.secret, {
            expiresIn: '5m'
        });

        return res.json({
            success: true,
            message: 'You are logged in',
            token: token,
            username: user.name
        });
    }

    return res.status(401).json({
        success: false,
        message: 'Wrong credentials'
    });
};



exports.renderPartial = function(req, res, next) {
    var partialName = req.params.name;
    return res.render('user/server/views/' + partialName);
};