function showHome(req, res){
  res.render('index/home', { title: "Nada" });
};


module.exports = {
  index: showHome
}
