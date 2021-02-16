var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let products=[
    {
      name:"ewd",
      category:'fgfggh',
      description:"nmfghnh",
      image:""
    },
    {
      name:"ewd",
      category:'fgfggh',
      description:"nmfghnh",
      image:""
    },
    {
      name:"ewd",
      category:'fgfggh',
      description:"nmfghnh",
      image:""
    },{
      name:"ewd",
      category:'fgfggh',
      description:"nmfghnh",
      image:""
    },{
      name:"ewd",
      category:'fgfggh',
      description:"nmfghnh",
      image:""
    },{
      name:"ewd",
      category:'fgfggh',
      description:"nmfghnh",
      image:""
    }
  ]
  res.render('index', {products });
});

module.exports = router;
