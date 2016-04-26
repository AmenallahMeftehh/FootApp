//import express
var express = require('express');

var routes = function(Foot){
  //definir le foot router pour recuperer la liste complete des livres
  var footRouter = express.Router();
  footRouter.route('/')
    .post(function(req, res){
      var foot = new Foot(req.body);
      foot.save();
      res.status(201).send(foot);
    })
    .get(function(req, res){
      var query = {};
      if(req.query.nom){
        query.genre = req.query.nom;
      }
      Foot.find(query, function(err, foots){
        if(err)
          res.status(500).send(err);
        else
          res.json(foots);
      });
    });
  //definir un middleware pour ne pas répéter
  // Foot.findById
  footRouter.use('/:footId', function(req,res,next){
      Foot.findById(req.params.footId, function(err,foot){
        if(err)
          res.status(500).send(err);
        else if(foot)
        {
          req.foot = foot;
          next();
        }
        else
        {
          res.status(404).send("no player found");
        }
      });
  });

  //definir le foot router pour recuperer un seule livre à partir de la liste des livres
  footRouter.route('/:footId')
    .get(function(req, res){
        res.json(req.foot);
    })
    .put(function(req, res){
        req.foot.nom  = req.body.nom;
        req.foot.photo = req.body.photo;
        req.foot.age = req.body.age;
        req.foot.club = req.body.club;

        req.foot.save(function(err){
          if(err)
            res.status(500).send(err);
          else{
              res.json(req.foot);
            }
        });
    })
    .patch(function(req, res){
        if(req.body._id)
          delete req.body._id;
        for(var p in req.body)
        {
          req.foot[p] = req.body[p];
        }
        req.foot.save(function(err){
          if(err)
            res.status(500).send(err);
          else{
            res.json(req.foot);
          }
        });
    })

    .delete(function(req, res){
      req.foot.remove(function(err){
        if(err)
          res.status(500).send(err);
        else
          res.status(204).send('Removed');
      });
    });
  return footRouter;
};

module.exports = routes;
