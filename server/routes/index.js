var express = require('express');
var router = express.Router();

let Media = require('../models/media');

/* GET home page. */
// 127.0.0.1 (/)

/* GET home page. */
router.get('/', async function (req, res, next) {
  try {
    const mediaList = await Media.find();  // get all media docs
    res.render('Media/list', {
      title: 'Media',
      mediaList: mediaList
    });
  } catch (err) {
    console.error(err);
    next(err); // let the error.ejs handler show a friendly error
  }
});

/* GET Add page. */
router.get('/media/add',function(req, res, next) {
  res.render('Media/add', { title: 'Add Review' });
});

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

/* GET contact us page. */
router.get('/contactus', function(req, res, next)  {
  res.render('contactus', { title: 'Contact us' });
});

module.exports = router;

