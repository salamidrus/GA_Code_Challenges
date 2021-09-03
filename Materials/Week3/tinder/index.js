const express = require("express");
const app = express();

const { data } = require("./data");

app.get("/", (req, res) => {
  let filteredData = data.filter((el) => el && typeof el == "number");
  
  res.status(200).json(filteredData);
});

app.get("/jihad", (req, res) =>
  res.json({
    page: "Welcome Jihad",
  })
);

const PORT = 3000;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
