var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    flash           = require("connect-flash"),
    mongoose        = require("mongoose"),
    sanctuaryDesc  = require("./models/sanctuaryDesc"),
    methodOverride  = require("method-override");

//requiring routes
var indexRoutes = require("./routes/index");

//database url
var url = process.env.DATABASEURL
mongoose.connect(url);

var milkyWell = new sanctuaryDesc({
    sanctuaryDesc1: "Milky",
    sanctuaryDesc2: "Well"
});

milkyWell.save();

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"))
app.use(methodOverride("_method"));
app.use(flash());

app.use("/", indexRoutes);

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Your Sanctuary server has started");
});