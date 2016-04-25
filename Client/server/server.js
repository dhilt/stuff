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

//-------tags-------//

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

app.post("/api/pushTag", function (req, res) {
	var pushTag = req.body;
	var result = {};
	if(!pushTag.id) {
		result.tag = generateNewTag(pushTag);
		result.isNew = true;
	}
	else {
		for (var i = mockData.tags.length - 1; i >= 0; i--) {
			if (mockData.tags[i].id === pushTag.id) {
				mockData.tags[i].name = pushTag.name;
				mockData.tags[i].description = pushTag.description;
				result.tag = pushTag;
				break;
			}
		}
	}
	res.send(result);
});

app.post("/api/deleteTag", function (req, res) {
	var tagId = req.body.id;
	var result = {};
	for (var i = mockData.tags.length - 1; i >= 0; i--) {
		if (mockData.tags[i].id === tagId) {
			result.id = tagId;
			mockData.tags.splice(i, 1);
			break;
		}
	}
	res.send(result);
});

//-------items-------//

app.post("/api/items", function (req, res) {
	var searchString = req.body.searchString;
	var result = [];
	for (var i = mockData.items.length - 1; i >= 0; i--) {
		if (mockData.items[i].name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1) {
			result.push(mockData.items[i]);
		}
	}
	res.send(result);
});

var generateNewItem =  function(newItem) {
	if(newItem.id) {
		return newItem;
	}
	var maxId = 0;
	for (var id, i = mockData.items.length - 1; i >= 0; i--) {
		if (mockData.items[i].id > maxId) {
			maxId = mockData.items[i].id;
		}
	}
	newItem.id = maxId + 1;
	if(!newItem.description) {
		newItem.description = "";
	}
	mockData.items.push(newItem);
	return newItem;
};

app.post("/api/pushItem", function (req, res) {
	var pushItem = req.body;
	var result = {};
	if(!pushItem.id) {
		result.item = generateNewItem(pushItem);
		result.isNew = true;
	}
	else {
		for (var i = mockData.items.length - 1; i >= 0; i--) {
			if (mockData.items[i].id === pushItem.id) {
				mockData.items[i].name = pushItem.name;
				mockData.items[i].description = pushItem.description;
				mockData.items[i].tags = pushItem.tags;
				result.item = pushItem;
				break;
			}
		}
	}
	res.send(result);
});

app.post("/api/deleteItem", function (req, res) {
	var itemId = req.body.id;
	var result = {};
	for (var i = mockData.items.length - 1; i >= 0; i--) {
		if (mockData.items[i].id === itemId) {
			result.id = itemId;
			mockData.items.splice(i, 1);
			break;
		}
	}
	res.send(result);
});



//-------start-------//

app.listen(port, function (error) {
	if (error) {
		console.error(error);
	} else {
		console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
	}
});
