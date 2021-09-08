//======================================================= PAGE DE CONNEXION
// GET
exports.getInscriptionPage = async (req, res) => {

  /* AFFICHER LA PAGE, inscription.ejs */
  res.render('admin/login')
}