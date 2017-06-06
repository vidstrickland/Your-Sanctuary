var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    flash           = require("connect-flash"),
    mongoose        = require("mongoose"),
    sanctuaryDesc1  = require("./models/sanctuaryDesc1"),
    sanctuaryDesc2  = require("./models/sanctuaryDesc2"),
    methodOverride  = require("method-override");

console.log(process.env.ip);