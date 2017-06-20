//import dependencies
var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    db = require('./model');


//create instances
var app = express(),
    router = express.Router();

// set port to env or 3000
var port = process.env.API_PORT || 3001;

//db config
//ADD YOUR INFO HERE!
mongoose.connect('mongodb://benjamin:password@ds133162.mlab.com:33162/dronedb');

//config API to use bodyParser and look for JSON in req.body
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());

//Prevent CORS errors
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

  //Remove caching
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

//set route path and init API
router.get('/', function(req,res) {
  res.json({message: 'API Initialized!'});
});

// delete all comments
router.route('/nuke').get(function(req,res){
  Comment.remove(function(err,succ){
  res.json(succ);
  });
});

//add /parts route to our /api router here
// router.route('/api/parts')
  //retrieve all parts from the database
app.get('/api/parts/', function(req, res) {
    //looks at our Part Schema

    if(req.query.category){

      db.Part.find({category: req.query.category}, function(err, parts) {
        if (err) {
          res.send(err);
        }
        //responds with a json object of our database parts.
        res.json({parts: parts});
      });

    } else {

      db.Part.find(function(err, parts) {
        if (err)
        res.send(err);
        //responds with a json object of our database parts.
        res.json({parts: parts});
      });
    }
  })



  // router.route('/api/parts')
  //   //retrieve a part from the database
  //   .get(function(req, res) {
  //     // to get category: req.query.category
  //     //looks at our Part Schema
  //     db.Part.find({category: 'frame'}, function(err, parts) {
  //       if (err) {
  //         res.send(err);
  //       }
  //       //responds with a json object of our database parts.
  //       res.json(parts);
  //     });
  //   })



  // //post new drone to the database
  //   .post(function(req, res) {
  //     var drone = new Drone();
  //     //body parser lets us use the req.body
  //     comment.author = req.body.author;
  //     comment.text = req.body.text;
  //
  //     comment.save(function(err) {
  //       if (err)
  //         res.send(err);
  //       res.json({ message: 'Comment successfully added!' });
  //     });
  //   });

//use router config when we call /API
app.use('/api', router);

//start server
app.listen(port, function() {
  console.log(`api running on port ${port}`);
});
