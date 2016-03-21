var express = require('express');
var router = express.Router();


var userCtrl = require('./UserController');
/* GET home page. */

router.post('/login', userCtrl.login);


router.get('/getprofile', userCtrl.checkIfAuthorized, userCtrl.profile);





router.get('/partials/:name', userCtrl.renderPartial);

// router.get('/', userCtrl.renderLayout);

// router.get('/404', function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

module.exports = router;
