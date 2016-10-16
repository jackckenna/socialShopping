function showIndex(req, res){
  res.render('sockets/io', { title: "Nada" });
};


module.exports = {
  show: showIndex
}
