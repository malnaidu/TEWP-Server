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
				descriptionText:"2.9 GHz dual-core Intel Core i5 processor (Turbo Boost up to 3.1 GHz) 3MB shared L3 cache 512GB PCle-based flash storage Built-in battery (10 hours)",
				imageUrl:"https://i.imgur.com/wHqio3i.png",
			},
			{
				headerText:"15 inch MacBook Pro with Retina display",
				descriptionText:"2.5 GHz quad-core Intel Core i7 procesor (Turbo  Boost up 3.7 GHz) 6MB shared L3 cache 128 GB PCle-based flash storage Built-in battery (10 hours)",
				imageUrl:"https://i.imgur.com/wHqio3i.png",
			},
			{
				headerText:"27 inch Dell U2715H LED Backlit LCD Monitor",
				descriptionText:"IPS Technology HDMI / Mini DisplayPort / DisplayPort 2560 x 1440 Resolution",
				imageUrl:"https://i.imgur.com/GR04M3X.png",
			},
			{
				headerText:"Apple Mac Mini",
				descriptionText:"2.8GHz dual-core intel Core i5 8GB memory, 1TB Fusion Drive Intel Iris Graphics, OS X EL Capitan",
				imageUrl:"https://i.imgur.com/mEEDfev.jpg",
			},

			{
				headerText:"23 inch Dell P2314H LED Backlit LCD Monitor",
				descriptionText:"1920 x 1080 8ms IPS Technology D-Sub, DVI, DisplayPort, USB 2.0",
				imageUrl:"https://i.imgur.com/1kPEglM.png"
			},

			{
				headerText:"14 inch Dell Latitude 7000 Series (E7450)",
				descriptionText:"Intel Core TM i5-5300U (Dual Core, 2.3GHz, 3M cache, 15W) 4GB 1600Hz DDR2L Memory, 128GB SATA Class 20 SSD, Built-in battery (11.5 hours)",
				imageUrl:"https://i.imgur.com/8ObFu9H.png"
			},
		]
	}
	var computer = x.computers[req.params.computerId]
  	res.send(computer);
});

app.get('/software/:softwareId', function (req, res) {
	var x = {
		accessories:[
			{
				headerText:"Macbook Pro 13 inch",
				description:"wordz",
				imageUrl:"df"
			},
			{
				headerText:"Macbook Pro 15 inch",
				description:"wordzz",
				imageUrl:"df6"
			},
			{
				headerText:"Macbook Pro 16 inch",
				description:"wordz",
				imageUrl:"df66"
			},
			{
				headerText:"Macbook Pro 17 inch",
				description:"wordzzz",
				imageUrl:"df666"
			},
		]
	}
	var computer = x.computers[req.params.computerId]
  	res.send(computer);
});app.get('/computers/:computerId', function (req, res) {
	var x = {
		software:[
			{
				headerText:"Adobe-Acrobat Pro",
				descriptionText:"",
				imageUrl:"",
			},
			{
				headerText:"Adobe - Audition",
				descriptionText:"",
				imageUrl:"",
			},
			{
				headerText:"Adobe - Creative Cloud All Apps",
				descriptionText:"wordz",
				imageUrl:"",
			},
			{
				headerText:"Adobe - Illustrator",
				descriptionText:"",
				imageUrl:"",
			},
			{
				headerText:"Adobe - InCopy ",
				descriptionText:"",
				imageUrl:"",
			},
			{
				headerText:"Adobe - InDesign",
				descriptionText:"",
				imageUrl:"",
			},
			{
				headerText:"Adobe - Premiere Pro ",
				descriptionText:"",
				imageUrl:"",
			},
			{
				headerText:"Balsamiq Mockups",
				descriptionText:"",
				imageUrl:"",
			},
			{
				headerText:"Beyond Compare",
				descriptionText:"6 inch cable",
				imageUrl:"",
			},
			{
				headerText:"Camtasia",
				descriptionText:"6 inch cable",
				imageUrl:"",
			},
			{
				headerText:"Charles Proxy",
				descriptionText:"",
				imageUrl:"",
			},
			{
				headerText:"Dash for OS",
				descriptionText:"",
				imageUrl:"",
			},
			{
				headerText:"DbVisualizer Pro",
				descriptionText:"",
				imageUrl:"",
			},
			{
				headerText:"Droplr",
				descriptionText:"",
				imageUrl:"",
			},
			{
				headerText:"Genymotion",
				descriptionText:"",
				imageUrl:"",
			},
			{
				headerText:"Gliffy",
				descriptionText:"",
				imageUrl:"",
			},
			{
				headerText:"iA Writer",
				descriptionText:"",
				imageUrl:"",
			},
			{
				headerText:"JetBrains - All Products Pack",
				descriptionText:"",
				imageUrl:"",
			},
			{
				headerText:"JetBrains - AppCode",
				descriptionText:"",
				imageUrl:"",
			},
			{
				headerText:"JetBrains - DataGrip",
				descriptionText:"",
				imageUrl:"",
			},
			{
				headerText:"Apple USB-C to USB Adapter",
				descriptionText:"",
				imageUrl:"",
			},
			{
				headerText:"JetBrains - IntelliJ IDEA ",
				descriptionText:"",
				imageUrl:"",
			},
			{
				headerText:"JetBrains - PhpStorm",
				descriptionText:"",
				imageUrl:"",
			},
			{
				headerText:"JetBrains - PyCharm",
				descriptionText:"6 inch cable",
				imageUrl:"",
			},
			{
				headerText:"JetBrains - ReSharper",
				descriptionText:"",
				imageUrl:"",
			},
			{
				headerText:"JetBrains - RubyMine",
				descriptionText:"",
				imageUrl:"",
			},
			{
				headerText:"JetBrains - WebStorm",
				descriptionText:"",
				imageUrl:"",
			},
			{
				headerText:"Microsoft - Visual Studio",
				descriptionText:"",
				imageUrl:"",
			},
			{
				headerText:"OmniGraffle",
				descriptionText:"",
				imageUrl:"",
			},
			{
				headerText:"Pluralsight",
				descriptionText:"",
				imageUrl:"",
			},
			{
				headerText:"Quip",
				descriptionText:"",
				imageUrl:"",
			},
			{
				headerText:"Red Gate - Data Compare",
				descriptionText:"",
				imageUrl:"",
			},
			{
				headerText:"Red Gate - SQL Compare",
				descriptionText:"",
				imageUrl:"",
			},
			{
				headerText:"Sketch",
				descriptionText:"",
				imageUrl:"",
			},
			{
				headerText:"SmartSheet",
				descriptionText:"",
				imageUrl:"",
			},
			{
				headerText:"Snagit",
				descriptionText:"",
				imageUrl:"",
			},
			{
				headerText:"Sublime Text",
				descriptionText:"",
				imageUrl:"",
			},
			{
				headerText:"VMware Fusion ",
				descriptionText:"",
				imageUrl:"",
			},
		]
	}
	var computer = x.computers[req.params.computerId]
  	res.send(computer);
});
app.get('/computers/:computerId', function (req, res) {
	var x = {
		mobile:[
			{
				headerText:"Apple iPad Air",
				descriptionText:"16GB with Wifi, Lighting to USB Cable USB Power Adapter, with Retina display",
				imageUrl:"http://i.imgur.com/Sug0tqK.png",
			},
			{
				headerText:"Verison Mifi",
				descriptionText:"Connect up to 15 Wifi enabled devices to 4G LTE and 3G.",
				imageUrl:"http://i.imgur.com/ywx7XAw.png?1",
			},
		]
	}
	var computer = x.computers[req.params.computerId]
  	res.send(computer);
});
app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});