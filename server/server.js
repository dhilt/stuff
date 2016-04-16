var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var bodyParser = require('webpack-body-parser');

var config = require('./../webpack.config');
var mockData = require('./mockData.json');

var app = new (require('express'))();
var port = 5007;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}));
app.use(webpackHotMiddleware(compiler));

app.get("/", function (req, res) {
	res.sendFile(__dirname + '/dist/index.html')
});

app.get("/api/tags", function (req, res) {
	res.send(mockData.tags);
});

var generateNewTag =  function(newTag) {
	if(newTag.id) {
		return newTag;
	}
	var maxId = 0;
	for (var id, i = mockData.tags.length - 1; i >= 0; i--) {
		if (mockData.tags[i].id > maxId) {
			maxId = mockData.tags[i].id;
		}
	}
	newTag.id = maxId + 1;
	if(!newTag.description) {
		newTag.description = "";
	}
	mockData.tags.push(newTag);
	return newTag;
};

app.post("/api/newTag", function (req, res) {
	res.send(generateNewTag(req.body));
});

app.post("/api/editTag", function (req, res) {
	var editTag = req.body;
	var result = {};
	if(!editTag.id) {
		result.tag = generateNewTag(editTag);
		result.isNew = true;
	}
	else {
		for (var id, i = mockData.tags.length - 1; i >= 0; i--) {
			if (mockData.tags[i].id === editTag.id) {
				mockData.tags[i].name = editTag.name;
				result.tag = editTag;
				break;
			}
		}
	}
	res.send(result);
});

app.listen(port, function (error) {
	if (error) {
		console.error(error);
	} else {
		console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
	}
});
