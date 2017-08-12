var http = require("http");
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
// Here we define a port to listen to
var PORT = 8080;

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.listen(PORT, function() {

 console.log("App listening on PORT " + PORT);

});

var tables = [];

var waitlist = [];

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

// Get all characters
app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/api/tables", function(req, res) {
 
  return res.json(tables);
});

app.get("/api/waitlist", function(req, res) {
 
  return res.json(waitlist);
});
//table
app.post("/api/tables", function(req, res) {
  var newTable = req.body;
  
if(tables.length <5){
  console.log(newTable);

  tables.push(newTable);

  res.json(true);
}
else{
	waitlist.push(newTable)
	console.log("Waitlisted!");
	res.json(false);
}
});
//waitlist
app.post("/api/waitlist", function(req, res) {
	
//   var newWaitlist = req.body;
//   newWaitlist.routeName = newWaitlist.name.replace(/\s+/g, "").toLowerCase();

//   console.log(newWaitlist);

//   waitlist.push(newWaitlist);

//   res.json(newWaitlist);
 });