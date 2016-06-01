var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var bodyParser = require('webpack-body-parser');
var uuid = require('node-uuid');

var config = require('./../webpack.config');
var mockData = require('./mockData.json');

var app = new (require('express'))();
var port = 5005;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}));
app.use(webpackHotMiddleware(compiler));

var redirect302 = function (res) {
	res.statusCode = 302;
	res.send('Authorization is needed.');
};

var handle = function (method, url, callback) {
	var processedCallback = function (req, res) {
		var authHeader = req.headers.authorization;
		if(!authHeader) {
			return redirect302(res);
		}
		var bearer = authHeader.substr(7);
		if(!bearer || bearer.length < 10) {
			return redirect302(res);
		}
		for(var i = mockData.users.length - 1; i >= 0; i--) {
			if(mockData.users[i].token === bearer) {
				return callback(req, res);
			}
		}
		redirect302(res);
	};
	app[method](url, processedCallback);
};

//-------login-------//

app.post("/api/login", function (req, res) {
	var login = req.body.login;
	var password = req.body.password;
	for(var i = mockData.users.length - 1; i >= 0; i--) {
		if(mockData.users[i].name === login) {
			if(mockData.users[i].password_hash === password) {
				var token = uuid.v4();
				mockData.users[i].token = token;
				res.send({ok: true, token: token});
				return;
			}
		}
	}
	res.statusCode = 400;
	res.send('Bad credentials');
});

app.get("/api/logout", function (req, res) {
	var authHeader = req.headers.authorization;
	if(authHeader) {
		var bearer = authHeader.substr(7);
		if(bearer && bearer.length > 10) {
			for(var i = mockData.users.length - 1; i >= 0; i--) {
				if(mockData.users[i].token === bearer) {
					mockData.users[i].token = null;
					res.send({ ok: true });
					return;
				}
			}
			res.statusCode = 400;
			res.send('User not found.');
			return;
		}
	}
	res.statusCode = 400;
	res.send('No authorization token.');
	return;
});

//-------index-------//

handle("post", "/api/index", function (req, res) {
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

handle("get", "/api/tags", function (req, res) {
	res.send(mockData.tags);
});

handle("post", "/api/tags", function (req, res) {
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

handle("put", "/api/tags/:id", function (req, res) {
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

handle("delete", "/api/tags/:id", function (req, res) {
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

handle("get", "/api/items", function (req, res) {
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

handle("get", "/api/items/:id", function (req, res) {
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

handle("post", "/api/items", function (req, res) {
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

handle("put", "/api/items/:id", function (req, res) {
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

handle("delete", "/api/items/:id", function (req, res) {
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

//-------redirects-------//

app.get("/tags", function (req, res) {
	res.redirect('/');
});

app.get("/items", function (req, res) {
	res.redirect('/');
});

app.get("/settings", function (req, res) {
	res.redirect('/');
});

//-------start-------//

app.listen(port, function (error) {
	if (error) {
		console.error(error);
	} else {
		console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
	}
});
