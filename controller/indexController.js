// AFFICHER LA LISTE DES ARTICLES
exports.getIndexController = async (req, res) => {
  // BASE DE DONNE
  const projet = await querysql(
    'SELECT titre, image, description, gitURL, projetID FROM projets')

  // AFFICER LA PAGE index.ejs
  res.render('index', {projets: projet});
}