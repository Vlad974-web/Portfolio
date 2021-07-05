// EXPRESS
const router = require('express').Router();

// PAGE D'ACCUEIL CONTROLLER
const adminController = require('../../controller/admin/adminController');

// AFFICHER LA PAGE D'ACCUEIL AVEC DES PROJETS
// GET
router.get('/inscription_admin', adminController.getInscriptionPage);

// EXPORTER LA ROUTE
module.exports = router;