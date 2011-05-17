var Backbone = require('./backbone');
var _ = require('underscore');
var HTTPServer = require('express').HTTPServer;
var middleware = require('..').middleware;

module.exports = Server;
function Server(plugin) {
    HTTPServer.call(this, []);
    this.init([]);
    this.plugin = plugin;
    this.initialize(plugin);
    this.conclude(plugin);
};

Server.prototype.__proto__ = HTTPServer.prototype;

_.extend(Server.prototype, Backbone.Events, {
    initialize : function(plugin) {},

    conclude: function(plugin) {
        if (this.port) {
            this.use(middleware.notFound());
            this.error(middleware.showError());
        }
    },

    port: null,

    start: function(callback) {
        this.port && this.listen(this.port, callback);
        return this;
    },

    toString: function() {
        if (this.port) {
            return '[Server ' + this.constructor.title + ':' + this.address().port + ']';
        } else {
            return '[Server ' + this.constructor.title + ']';
        }
    }
});

Server.augment = Backbone.Controller.augment;
Server.extend = Backbone.Controller.extend;
Server.toString = function() {
    return '<Server ' + this.title + '>';
};
