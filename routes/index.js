var express = require('express');
var router = express.Router();

var shell = require('shelljs')

// prepare web
function prepare(){
	return new Promise((res,rej) =>{
		let resultado = "";
		if(arguments.length == 0){
			rej("Error no arguments found");
		}

		for (var i = 0; i < arguments.length; i++){
			if(arguments[i] != ""){
				if(i == arguments.length-1)
					resultado += arguments[i];
				else
					resultado += arguments[i] + ' ';
			}

		}

		if(resultado != "") {
			console.log("resultado da " +resultado);
			res(resultado);
		}
		else res(" ");
	});

}


router.get('/', function(req, res, next) {
    res.render('index', { title: 'Service Nmap'});
});

router.get('/scan', function(req, res, next) {
    let range = ""
    let t = ""
    let string = ""
    let ip = req.query.ip || "127.0.0.1";
    let result;

    if (req.query.range != undefined) {
        range += "-p [" + req.query.range + "]";
    }
})