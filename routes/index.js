var express = require("express");
var router          = express.Router();
var mongoose        = require("mongoose");
var sanctDescription = require("../models/sanctuaryDesc");
//var User            = require("../models/user");
//test

//Root Route
router.get("/", function(req, res){
    sanctDescription.find({},{},function(err,sanctuaryDesc){
        res.render("landing.ejs", {
            "sanctuaryDesc1" : sanctuaryDesc,
            "sanctuaryDesc2" : sanctuaryDesc
        });
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
    var newDesc1 = new sanctuaryDesc({
        sanctuaryDesc1: req.body.sanctuaryDesc1,
        sanctuaryDesc2: req.body.sanctuaryDesc2,
    });
    
    //sanctDescription.update({currentDPCost: req.body.dpcost});
    newDesc1.save();
   //console.log(req.body.dpcost);
   res.redirect("/admin");
});

module.exports = router;