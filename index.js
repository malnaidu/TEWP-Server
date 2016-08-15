var express = require('express');
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (req, res) {
	var x = {hello:"World"}
  	res.send(x);
});

app.get('/computers/:computerId', function (req, res) {
	var x = {
		computers:[
			{
				headerText:"13 inch MacBook Pro with Retina display",
				:"2.9 GHz dual-core Intel Core i5 processor (Turbo Boost up to 3.1 GHz) 3MB shared L3 cache 512GB PCle-based flash storage Built-in battery (10 hours)"
				stockImage:"https://i.imgur.com/wHqio3i.png"
			},
			{
				name:"15 inch MacBook Pro with Retina display",
				description:"2.5 GHz quad-core Intel Core i7 procesor (Turbo  Boost up 3.7 GHz) 6MB shared L3 cache 128 GB PCle-based flash storage Built-in battery (10 hours)",
				imageUrl:"https://i.imgur.com/wHqio3i.png"
			},
			{
				name:"27 inch Dell U2715H LED Backlit LCD Monitor",
				description:"IPS Technology HDMI / Mini DisplayPort / DisplayPort 2560 x 1440 Resolution",
				imageUrl:"https://i.imgur.com/GR04M3X.png"
			},
			{
				name:"Apple Mac Mini",
				description:"2.8GHz dual-core intel Core i5 8GB memory, 1TB Fusion Drive Intel Iris Graphics, OS X EL Capitan",
				imageUrl:"https://i.imgur.com/mEEDfev.jpg"
			},

			{
				name:"23 inch Dell P2314H LED Backlit LCD Monitor",
				description:"1920 x 1080 8ms IPS Technology D-Sub, DVI, DisplayPort, USB 2.0",
				imageUrl:"https://i.imgur.com/1kPEglM.png"
			},

			{
				name:"14 inch Dell Latitude 7000 Series (E7450)",
				description:"Intel Core TM i5-5300U (Dual Core, 2.3GHz, 3M cache, 15W) 4GB 1600Hz DDR2L Memory, 128GB SATA Class 20 SSD, Built-in battery (11.5 hours)",
				imageUrl:"https://i.imgur.com/8ObFu9H.png"
			},
		]
	}
	var computer = x.computers[req.params.computerId]
  	res.send(computer);
});

app.get('/software/:softwareId', function (req, res) {
	var x = {
		software:[
			{
				name:"Macbook Pro 13 inch",
				description:"wordz",
				imageUrl:"df"
			},
			{
				name:"Macbook Pro 15 inch",
				description:"wordzz",
				imageUrl:"df6"
			},
			{
				name:"Macbook Pro 16 inch",
				description:"wordz",
				imageUrl:"df66"
			},
			{
				name:"Macbook Pro 17 inch",
				description:"wordzzz",
				imageUrl:"df666"
			},
		]
	}
	var computer = x.computers[req.params.computerId]
  	res.send(computer);
});app.get('/computers/:computerId', function (req, res) {
	var x = {
		computers:[
			{
				name:"Macbook Pro 13 inch",
				description:"wordz",
				imageUrl:"df"
			},
			{
				name:"Macbook Pro 15 inch",
				description:"wordzz",
				imageUrl:"df6"
			},
			{
				name:"Macbook Pro 16 inch",
				description:"wordz",
				imageUrl:"df66"
			},
			{
				name:"Macbook Pro 17 inch",
				description:"wordzzz",
				imageUrl:"df666"
			},
		]
	}
	var computer = x.computers[req.params.computerId]
  	res.send(computer);
});
app.get('/computers/:computerId', function (req, res) {
	var x = {
		computers:[
			{
				name:"Macbook Pro 13 inch",
				description:"wordz",
				imageUrl:"df"
			},
			{
				name:"Macbook Pro 15 inch",
				description:"wordzz",
				imageUrl:"df6"
			},
			{
				name:"Macbook Pro 16 inch",
				description:"wordz",
				imageUrl:"df66"
			},
			{
				name:"Macbook Pro 17 inch",
				description:"wordzzz",
				imageUrl:"df666"
			},
		]
	}
	var computer = x.computers[req.params.computerId]
  	res.send(computer);
});
app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});