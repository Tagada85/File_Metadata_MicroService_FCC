const express = require('express');
const multer = require('multer');
const path = require('path');
const upload = multer({dest : 'uploads/'});

const port = process.env.PORT || 3000;

const app = express();

app.use(function (req, res, next) {
  next();
});


app.get('/', function(req, res){
	 res.sendFile(path.join(__dirname+'/index.html'));
});

app.post('/upload',upload.single('myfile'),function(req, res){
	const size = req.file.size;
	res.json({size : size});
});

app.listen(port);