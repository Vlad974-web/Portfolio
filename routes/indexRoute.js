// EXPRESS
const router = require('express').Router();

// PAGE D'ACCUEIL CONTROLLER
const indexController = require('../controller/indexController');

// AFFICHER LA PAGE D'ACCUEIL AVEC DES PROJETS
router.get('/', indexController.getIndexController);


// EXPORTER LA ROUTE
module.exports = router;