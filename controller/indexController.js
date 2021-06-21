// AFFICHER LA LISTE DES ARTICLES
exports.getIndexController = async (req, res) => {
  // BASE DE DONNE
  const projet = await querysql('SELECT ??, ??, ??, ??, ?? FROM projets',
  ["titre", "image", "description", "gitURL", "projetID"])

  // AFFICER LA PAGE index.ejs
  res.render('index', {projets: projet});
}