module.exports = (sequelize, Sequelize) => {
    const Category = sequelize.define("category", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING
        },
        catalog_child_id: {
            type: Sequelize.INTEGER
        },
        path: {
            type: Sequelize.STRING
        },
    });
    return Category;
};