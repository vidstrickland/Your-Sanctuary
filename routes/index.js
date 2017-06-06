var express = require("express");
var router          = express.Router();
var mongoose        = require("mongoose");
//var User            = require("../models/user");


//Root Route
router.get("/", function(req, res){
    res.render("landing");
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

/*
//admin logic
router.post("/admin", function(req, res){
    var newDPCost = new DPCost({currentDPCost: req.body.dpcost});
    DPCost.update({currentDPCost: req.body.dpcost});
    newDPCost.save();
   console.log(req.body.dpcost);
   res.redirect("/admin");
});
*/

module.exports = router;