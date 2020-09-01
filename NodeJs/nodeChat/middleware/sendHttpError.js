module.exports = function (req, res, next) {

    res.sendHttpError = function (error) {
console.log('error = ' + error);
        res.status(error.status);
        if (res.req.headers['x-requested-with'] == 'XMLHttpRequest') {
            res.json(error);
        } else {
            res.render("../template/error.ejs", {error: error});
        }
    };

    next();
};