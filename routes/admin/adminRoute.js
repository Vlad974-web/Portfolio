// EXPRESS
const router = require('express').Router();

// PAGE D'ACCUEIL CONTROLLER
const adminController = require('../../controller/admin/adminController');

// AFFICHER LA PAGE D'ACCUEIL AVEC DES PROJETS
// GET
router.get('/login', adminController.getInscriptionPage);

// EXPORTER LA ROUTE
module.exports = router;