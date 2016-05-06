var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var bodyParser = require('webpack-body-parser');

var config = require('./../webpack.config');
var mockData = require('./mockData.json');

var app = new (require('express'))();
var port = 5005;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}));
app.use(webpackHotMiddleware(compiler));

app.get("/", function (req, res) {
	res.sendFile(__dirname + '/dist/index.html')
});

app.get("/tags", function (req, res) {
	res.sendFile(__dirname + '/dist/index.html');
});

//-------index-------//

app.post("/api/index", function (req, res) {
	var tags = req.body.tags;
	if(!tags || !tags.length) {
		return res.send(null);
	}
	var item, result = [];
	for (var i = mockData.items.length - 1; i >= 0; i--) {
		item = mockData.items[i];
		if(!item.tags) {
			continue;
		}
		for (var j = tags.length - 1; j >= 0; j--) {
			if (item.tags.indexOf(tags[j]) !== -1) {
				result.push(item);
				break;
			}
		}
	}
	res.send(result);
});

//-------tags-------//

app.get("/api/tags", function (req, res) {
	res.send(mockData.tags);
});

app.post("/api/tags", function (req, res) {
	var newTag = req.body;
	var maxId = 0;
	for (var i = mockData.tags.length - 1; i >= 0; i--) {
		if (mockData.tags[i].id > maxId) {
			maxId = mockData.tags[i].id;
		}
	}
	newTag.id = maxId + 1;
	if (!newTag.description) {
		newTag.description = "";
	}
	mockData.tags.push(newTag);
	res.send(newTag);
});

app.put("/api/tags/:id", function (req, res) {
	var editTag = req.body;
	for (var i = mockData.tags.length - 1; i >= 0; i--) {
		if (mockData.tags[i].id === editTag.id) {
			mockData.tags[i].name = editTag.name;
			mockData.tags[i].description = editTag.description;
			res.send(editTag);
			return;
		}
	}
	res.send(null);
});

app.delete("/api/tags/:id", function (req, res) {
	var tagId = req.body.id;
	var result = {};
	for (var i = mockData.tags.length - 1; i >= 0; i--) {
		if (mockData.tags[i].id === tagId) {
			result.id = tagId;
			res.send({id: tagId});
			return;
		}
	}
	res.send(null);
});

//-------items-------//

app.get("/api/items", function (req, res) {
	var searchString = req.query.searchString;
	var result = [];
	for (var i = mockData.items.length - 1; i >= 0; i--) {
		if (mockData.items[i].name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1) {
			result.push({
				id: mockData.items[i].id,
				name: mockData.items[i].name
			});
		}
	}
	res.send(result);
});

app.get("/api/items/:id", function (req, res) {
	var id = parseInt(req.params.id, 10);
	if (!id) {
		res.status(400).send('Can not parse id ' + req.params.id);
		return;
	}
	for (var i = mockData.items.length - 1; i >= 0; i--) {
		if (mockData.items[i].id === id) {
			res.send(mockData.items[i]);
			return;
		}
	}
	res.status(400).send('Can not get item with id = ' + req.params.id);
});

app.post("/api/items", function (req, res) {
	var newItem = req.body;
	var maxId = 0;
	for (var i = mockData.items.length - 1; i >= 0; i--) {
		if (mockData.items[i].id > maxId) {
			maxId = mockData.items[i].id;
		}
	}
	newItem.id = maxId + 1;
	if (!newItem.description) {
		newItem.description = "";
	}
	mockData.items.push(newItem);
	res.send(newItem);
});

app.put("/api/items/:id", function (req, res) {
	var editItem = req.body;
	for (var i = mockData.items.length - 1; i >= 0; i--) {
		if (mockData.items[i].id === editItem.id) {
			mockData.items[i].name = editItem.name;
			mockData.items[i].description = editItem.description;
			mockData.items[i].tags = editItem.tags;
			res.send(editItem);
			return;
		}
	}
	res.send(null);
});

app.delete("/api/items/:id", function (req, res) {
	var itemId = req.body.id;
	for (var i = mockData.items.length - 1; i >= 0; i--) {
		if (mockData.items[i].id === itemId) {
			res.send(mockData.items[i]);
			mockData.items.splice(i, 1);
			return;
		}
	}
	res.send(null);
});


//-------start-------//

app.listen(port, function (error) {
	if (error) {
		console.error(error);
	} else {
		console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
	}
});
