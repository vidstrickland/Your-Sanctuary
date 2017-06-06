var express = require("express");
var router          = express.Router();
var mongoose        = require("mongoose");
var sanctDescription1 = require("../models/sanctuaryDesc1");
var sanctDescription2 = require("../models/sanctuaryDesc2");
//var User            = require("../models/user");
//test

//Root Route
    router.get("/", function(req, res){
        sanctDescription1.find({},{},function(err,sanctuaryDesc1){
            sanctDescription2.find({},{},function(err,sanctDescription2){
                res.render("landing", {
                    "sanctuaryDesc1" : sanctuaryDesc1,
                    "sanctuaryDesc2" : sanctuaryDesc2
            })
        })
    })
});

//About Route
router.get("/about", function(req, res){
    DPCost.find({},{},function(err, currentDPCost){
        res.render("about", {
            "currentDPCost" : currentDPCost
        });    
    });
    //console.log("CLOCK COUNT: " + timer.currentClock());
});

//show login form
router.get("/login", function (req, res){
    res.render("login");
});

//show admin tools
router.get("/admin", function(req, res){
        res.render("admin");
});

//admin logic
router.post("/admin", function(req, res){
    var newDesc1 = new sanctDescription1({
        sanctuaryDesc1: req.body.sanctuaryDesc1,
    });
    var newDesc2 = new sanctDescription2({
        sanctuaryDesc2: req.body.sanctuaryDesc2,
    });
    
    //sanctDescription.update({currentDPCost: req.body.dpcost});
    newDesc1.save();
    newDesc2.save();
   //console.log(req.body.dpcost);
   res.redirect("/admin");
});

module.exports = router;