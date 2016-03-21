exports.renderPartial = function(req, res, next) {
    var partialName = req.params.name;
    return res.render('core/server/views/pages/' + partialName);
};


exports.render404 = function(req, res, next) {
    console.error('404 Not found');
    return res.render('core/server/views/pages/404');
};

exports.renderLayout = function(req, res, next) {
    return res.render('core/server/views/main');
};