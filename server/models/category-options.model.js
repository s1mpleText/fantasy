module.exports = (sequelize, Sequelize) => {
    const CategoryOptions = sequelize.define("category_option", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        options: {
            type: Sequelize.JSON,
        },
        category_id: {
            type: Sequelize.INTEGER,
        }
    });
    return CategoryOptions;
};