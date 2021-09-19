getHomePage = (req, res, next) => {
  res.render("index", { title: "Jihad" });
};

module.exports = {
  getHomePage,
};
