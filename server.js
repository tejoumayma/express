const express = require("express");
const path = require("path");
const app = express();
const exphbs = require("express-handlebars");
const port = process.env.PORT || 5000;
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");
const days = (req, res, next) => {
  const d = new Date();
  if (d.getDay() === 0 || d.getDay() === 6) {
    res.send("available from monday to friday ");
  } else {
    console.log("Success");
    next();
  }
};
const hours = (req, res, next) => {
  const h = new Date();
  if (h.getHours() > 17 || h.getHours() < 9) {
    res.send("working hours from 9am to 5pm");
  } else {
    console.log("Success");
    next();
  }
};
app.listen(port, () => console.log(`Server is running on port ${port}`));
app.use(days);
app.use(hours);
app.use(express.static(path.join(__dirname, "pub")));
