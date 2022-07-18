const db = require("../models");
const category = db.categories;

exports.findAll = (req, res) => {
    category.findAll().then( data => {
            res.send(data);
        }
    )
};

exports.findFirst = (req,res) => {
    category.findAll({
        where: {
            catalog_child_id: 0
        }
    }).then( data => {
            res.send(data);
        }
    ).catch(error => {
        res.status(500).send({message: error.message})
    })
}

exports.findSecond = (req,res) => {
    category.findAll({
        where: {
            catalog_child_id: req.params.catalog_child_id
        }
    }).then( data => {
            res.send(data);
        }
    ).catch(error => {
        res.status(500).send({message: error.message})
    })
}

exports.findThird = (req,res) => {
    category.findAll({
        where: {
            catalog_child_id: req.params.catalog_child_id
        }
    }).then( data => {
            res.send(data);
        }
    ).catch(error => {
        res.status(500).send({message: error.message})
    })
}