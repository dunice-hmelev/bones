var middleware = require('..').middleware;

server = Bones.Server.extend({});

server.prototype.initialize = function(app) {
    this.use(middleware.bodyParser());
    this.use(middleware.cookieParser());
    this.use(middleware.csrf());
    this.use(middleware.fragmentRedirect());
};
