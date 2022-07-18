const db = require("../models");
const categoryOptions = db.categoryOptions;

exports.findAll = (req, res) => {
    categoryOptions.findAll().then( data => {
            res.send(data);
        }
    )
};