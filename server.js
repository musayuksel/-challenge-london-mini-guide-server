const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const Stratford = require("./data/Stratford.json");

app.get("/pharmacies", (request, response) => {
  response.send(Stratford.pharmacies);
});
app.listen(PORT, () => {
  console.log("server is running on PORT :" + PORT);
});
