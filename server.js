const { response } = require("express");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const fs = require("fs");
const { request } = require("http");

app.get("/", (request, response) => {
  response.send({
    msg: "ask me with /cityName/categoryName",
  });
});
app.get("/:city/:category", (request, response) => {
  const city = request.params.city;
  const category = request.params.category;
  const cityPath = `./data/${city}.json`;
  if (fs.existsSync(cityPath)) {
    const cityData = require(cityPath);
    if (cityData[category]) {
      response.send(cityData[category]);
    } else {
      response.status(404).send({
        msg: `Category:'${category}' DOES NOT exist in the server`,
      });
    }
  } else {
    response.status(404).send({
      msg: `City:'${city}' DOES NOT exist in the server`,
    });
  }
});

app.listen(PORT, () => {
  console.log("server is running on PORT :" + PORT);
});
