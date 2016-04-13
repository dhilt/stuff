var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

var config = require('./../webpack.config');
var mockData = require('./mockData.json');

var app = new (require('express'))();
var port = 5006;

var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.get("/", function(req, res) {
	res.sendFile(__dirname + '/dist/index.html')
});

app.get("/api/tags", function(req, res) {
	res.send(mockData.tags);
});

app.listen(port, function(error) {
	if (error) {
		console.error(error);
	} else {
		console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
	}
});
