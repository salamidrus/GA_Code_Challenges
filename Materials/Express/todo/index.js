const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const router = require("./routes");

app.use("/api/v1", router);

const PORT = 3000;
app.listen(PORT, () => console.log(`Listening to ${PORT}`));
