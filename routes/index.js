var express = require('express');
var router = express.Router();
const controllerFunctions = require('../controllers/controllerApi');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' })
})



router.get('/api/alldata', controllerFunctions.allData);

module.exports = router;
