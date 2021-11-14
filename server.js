const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/:city/:catog", (request, response) => {
  const city = request.params.city;
  const catog = request.params.catog;
  const dataCity = require(`./data/${city}.json`);
  if (catog in dataCity) {
    response.send(dataCity[catog]);
  } else {
    response.sendStatus(404);
  }
});
// app.get("/:city/colleges", (request, response) => {
//   cit
//   response.send(Stratford.colleges);
// });
// app.get("/doctors", (request, response) => {
//   response.send(Stratford.doctors);
// });
// app.get("/hospitals	", (request, response) => {
//   response.send(Stratford.hospitals);
// });

app.listen(PORT, () => {
  console.log("server is running on PORT :" + PORT);
});
