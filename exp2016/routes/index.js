var express = require('express');
var router = express.Router();

var database = {
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
	],

	software: [
		{
			headerText:"Adobe-Acrobat Pro",
			descriptionText:"Instantly edit scanned documents, created protected PDFs, edit PDF text and images, and export PDFs to Office.",
		},

		{
			headerText:"Adobe - Audition",
			descriptionText:"Mix, edit, and create audio content with a comprehensive toolset that includes multitraack, waveform, and spectral display.",
		},

		{
			headerText:"Adobe - Creative Cloud All Apps",
			descriptionText:"Includes the entire collection o creative apps for desktop, from favoroites like Adobe Photoshop and Illustrator, also Experience Design CC.",
		},

		{
			headerText:"Adobe - Illustrator",
			descriptionText:"Create logos, icons, and sketches, typography, and complex illustrations for print, web, video, and mobile.",
		},

		{
			headerText:"Adobe - InCopy ",
			descriptionText:"Professional word processor",
		},

		{
			headerText:"Adobe - InDesign",
			descriptionText:"Page design and layout toolset to create interactive media",
		},

		{
			headerText:"Adobe - Premiere Pro ",
			descriptionText:"Video production toolset",
		},

		{
			headerText:"Balsamiq Mockups",
			descriptionText:"Rapid wireframing tool",
		},

		{
			headerText:"Beyond Compare",
			descriptionText:"Compare files and folders using simple, powerful commands that focus n the differences you're interested in and ignore those you're not.",
		},

		{
			headerText:"Camtasia",
			descriptionText:"Computer screen recording",
		},

		{
			headerText:"Charles Proxy",
			descriptionText:"Charles is an HTTP proxy / HTTP monitor /Reverse Proxy that enables a developer to view all the HTTP and SSL / HTTPS traffic between their machine and the internet.",
		},

		{
			headerText:"Dash for OS",
			descriptionText:"Cloud Operating System",
		},

		{
			headerText:"DbVisualizer Pro",
			descriptionText:"Universal database tool for developers",
		},

		{
			headerText:"Droplr",
			descriptionText:"Make communication clearer by adding visuals to conversations.",
		},

		{
			headerText:"Genymotion",
			descriptionText:"Powerful virtualization platform",
		},

		{
			headerText:"Gliffy",
			descriptionText:"Web-based diagram editor.",
		},

		{
			headerText:"iA Writer",
			descriptionText:"iA Writer the reference plain text editor.",
		},

		{
			headerText:"JetBrains - All Products Pack",
			descriptionText:"All JetBrains products",
		},

		{
			headerText:"JetBrains - AppCode",
			descriptionText:"AppCode is an integrated development environment (IDE for Swift, Object-C, C, Javascript, and C++",
		},

		{
			headerText:"JetBrains - DataGrip",
			descriptionText:"DataGrip provides context-sensitive code completion, helping you to write SQL code faster.",
		},

		{
			headerText:"JetBrains - IntelliJ IDEA ",
			descriptionText:"IntelliJ IDEA's indexed your source code, ir offers blazing fast and intelligent experience giving relevant suggestions in every context instant.",
		},

		{
			headerText:"JetBrains - PhpStorm",
			descriptionText:"Cross-platform IDE for pHP built on JetBrains IntelliJ IDEA platform",
		},

		{
			headerText:"JetBrains - ReSharper",
			descriptionText:"Productivity and code refactoring plugin for Visual Studio.",
		},

		{
			headerText:"JetBrains - RubyMine",
			descriptionText:"Most intelligent Ruby on Rails IDE with rails code refactorings and code completion.",
		},

		{
			headerText:"JetBrains - WebStorm",
			descriptionText:"Lightweight yet powerful JavaScript, IDE, perfectly equipped for client-side development and server-side development with Node.js.",
		},

		{
			headerText:"Microsoft - Visual Studio",
			descriptionText:"Integrated development environment for creating applications for Windows, Android, and iOS.",
		},

		{
			headerText:"OmniGraffle",
			descriptionText:"Create precise, beautiful graphics, like wireframes or electrical system design.",
		},

		{
			headerText:"Pluralsight",
			descriptionText:"On-demand technology learning platform",
		},

		{
			headerText:"Quip",
			descriptionText:"Write, edit,share, and discuss documents - online or offline",
		},

		{
			headerText:"Red Gate - Data Compare",
			descriptionText:"Tool for comparing and deploying SQL Server database contents",
		},

		{
			headerText:"Red Gate - SQL Compare",
			descriptionText:"Create error free deployment scripts in minutes, find and fix errors caused by differences between databases.",
		},

		{
			headerText:"Sketch",
			descriptionText:"Interactive design application for UX/UI",
		},

		{
			headerText:"SmartSheet",
			descriptionText:"Intuitive online project managment tool",
		},

		{
			headerText:"Snagit",
			descriptionText:"Screen capture",
		},

		{
			headerText:"Sublime Text",
			descriptionText:"Sophisticated text editor for code, markup, and prose.",
		},

		{
			headerText:"VMware Fusion ",
			descriptionText:"Run Windows applications on a Mac without rebooting.",
		},
	],

	accessories: [
		{
			headerText:"Apple Magic Mouse 2",
			imageUrl:"df"
		},

		{
			headerText:"Apple Magic Keyboard",
			imageUrl:"df6"
		},

		{
			headerText:"Apple Keyboard (w/ numeric pad)",
			imageUrl:"df66"
		},

		{
			headerText:"Apple Magic Tracpad 2",
			imageUrl:"df666"
		},

		{
			headerText:"Dell Mice",
			imageUrl:"df"
		},

		{
			headerText:"Jabra Pro 925 Wireless Headset",
			imageUrl:"df"
		},
		
		{
			headerText:"Fellowes 8 Surge Protector",
			imageUrl:"df"
		},
		
		{
			headerText:"Microsoft Ergo 4000 Keyboard",
			imageUrl:"df"
		},
		
		{
			headerText:"HDMI to DVI",s
			imageUrl:""
		},
		
		{
			headerText:"Mini DisplayPort to DisplayPort",
			imageUrl:""
		},
		
		{
			headerText:"12w USB Charger for iPad",
			imageUrl:""
		},

		{
			headerText:"USB to Lighting",
			imageUrl:""
		},
		
		{
			headerText:"Anker Ergo Wireless Mouse",
			imageUrl:"df"
		},

		{
			headerText:"Anker Ergo Wired Mouse",
			imageUrl:"df"
		},

		{
			headerText:"ShoreTel IP480 Phone",
			imageUrl:"df"
		},

		{
			headerText:"Apple MagSafe-85w Charger",
			imageUrl:""
		},

		{
			headerText:"Apple LandingZone Dock 13 inch",
			imageUrl:""
		},

		{
			headerText:"Apple LandingZone Dock 15 inch",
			imageUrl:""
		},

		{
			headerText:"Dell E-Dock",
			imageUrl:""
		},

		{
			headerText:"Dell KB216 Keyboard",
			imageUrl:""
		},

		{
			headerText:"Jabra Pro 9450 Wireless Headset",
			imageUrl:""
		},

		{
			headerText:"Rain Deisgn mStand",
			imageUrl:""
		},

		{
			headerText:"Apple USB-C to USB Adapter",
			imageUrl:""
		},
		
		{
			headerText:"130W PS for Dell Dock",
			imageUrl:""
		},

		{
			headerText:"HDMI Cable",
			imageUrl:""
		},
		
		{
			headerText:"Apple Thunderbolt to Ethernet Adapater",
			imageUrl:""
		},
		
		{
			headerText:"USB Drives",
			imageUrl:""
		},

		{
			headerText:"Dell 90W Laptop Power Adapter",
			imageUrl:""
		},

	],

	mobile: [
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
};

router.get('/', function (req, res) {
	var x = {hello:"World"}
  	res.send(x);
});

router.get('/computers/:computerId', function (req, res) {
	
	var computer = database.computers[req.params.computerId]
  	res.send(computer);
});

router.get('/computers/', function (req, res) {
  	res.send(database.computers);
});


router.get('/software/:softwareId', function (req, res) {

	var softwares = database.software[req.params.softwareId]
	res.send(softwares);
});

router.get('/software/', function (req, res) {
	res.send(database.software);
});

router.get('/accessories/:accessoriesId', function (req, res) {
	var accessory = database.accessories[req.params.accessoriesId]
	res.send(accessory);
});

router.get('/accessories/', function(req,res) {
	res.send(database.accessories);
});

router.get('/mobile/:mobileId', function (req, res) {
	var mobiles = database.mobile[req.params.mobileId]
	res.send(mobiles);
		
});

router.get('/mobile/', function(req, res) {
	res.send(database.mobile);
});


module.exports = router;

