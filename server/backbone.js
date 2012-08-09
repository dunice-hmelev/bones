var Backbone = module.exports = require('../shared/backbone');

/*
Backbone.sync = function() {
    throw new Error('No default sync method');
};
*/


// Create a new backbone-couch handler for a database 'documents'.
var couch = require('backbone-couch')({
    host: '127.0.0.1',
    port: '5984',
    name: 'documents'
});

// Create database, push default design documents to it and
// assign sync method to Backbone.
couch.install(function(err) {
    Backbone.sync = couch.sync;
});

// Backbone.sync will now load and save models from a 'documents' couch db.

