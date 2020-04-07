module.exports = function () {
	var express = require('express');
	var bodyParser = require('body-parser');
	var compression = require('compression');
	var helmet = require('helmet');
	const cookieParser = require('cookie-parser');

	var app = express();


	app.set('view engine', 'ejs');

	app.use(express.static('public'));
	// app.use(express.static(path.join(__dirname,'/public')));
	
	app.use(compression());
	app.use(helmet());

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(cookieParser());
	 

	return app; 
}     