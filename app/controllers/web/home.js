
var HomeController = {}

HomeController.getHome = function(req, res) {
    res.render('home/index')
}


module.exports = HomeController;
