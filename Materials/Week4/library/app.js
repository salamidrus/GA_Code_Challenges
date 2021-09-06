const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res, next) => res.send("<h1>Welcome!</h1>"));

app.post("/generate-file", (req, res, next) => {
  try {
    fs.writeFileSync("tes.txt", "Tes woi");

    res.status(200).json({ message: "File successflly created!" });
  } catch (err) {
    res.status(400).json({ message: "Failed to write a file" });
  }
});

app.put("/update-file/:file_name", (req, res, next) => {
  try {
    let { file_name } = req.params;
    let { content } = req.body;

    fs.writeFileSync(file_name, content);

    res.status(200).json({ message: "File successflly updated!" });
  } catch (err) {
    res.status(400).json({ message: "Failed to update a file" });
  }
});

app.delete("/delete-file", (req, res, next) => {
  try {
    fs.unlinkSync("tes.txt");

    res.status(200).json({ message: "File successflly deleted!" });
  } catch (err) {
    res.status(400).json({ message: "Failed to delete a file" });
  }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Listening to PORT: ${PORT}`));
