const express = require('express');
const app = express();


// EJS
app.set('view engine', 'ejs');






// Sur quel port functionnera application
const port = 1996
app.listen(port, () => {
    console.log(`ecoute Vlad, le port 1996, lancè à : ${new Date().toLocaleString()}, bon courage pour les codes!`);
});