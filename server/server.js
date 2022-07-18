const express = require("express");
const cors = require("cors");
const app = express();
const corsOptions = {
    origin: "http://localhost:4200"
};

const db = require("./models");

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});


require('./routes/category.routes')(app);
require('./routes/category-options.routes')(app);
db.sequelize.sync();