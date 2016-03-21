var express = require('express');
var router = express.Router();


var coreCtrl = require('./CoreController');
/* GET home page. */

router.get('/partials/core/404', coreCtrl.render404);

router.get('/core/partials/:name', coreCtrl.renderPartial);



// router.get('/404', function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

router.get('/*', coreCtrl.renderLayout);

module.exports = router;
