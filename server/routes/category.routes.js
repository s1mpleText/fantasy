const controller = require("../controllers/category.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get("/api/category/findAll", controller.findAll);
    app.get("/api/category/findFirst", controller.findFirst);
    app.get("/api/category/findSecond/:catalog_child_id", controller.findSecond);
    app.get("/api/category/findThird/:catalog_child_id", controller.findThird);
};