// AFFICHER LA LISTE DES ARTICLES
exports.getIndexController = async (req, res) => {
  // AFFICER LA PAGE index.ejs
  res.render('index');
}