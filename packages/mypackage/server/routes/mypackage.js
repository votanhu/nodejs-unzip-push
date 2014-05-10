'use strict';

// The Package is past automatically as first parameter
module.exports = function(Mypackage, app, auth, database) {

    app.get('/mypackage/installmanager', function(req, res, next) {
        res.send('Hello!');
    });

    app.get('/mypackage/installing', function(req, res, next){
        var fs = require('fs');
        var path = require('path');
        var unzip = require('unzip');
        var appDir = path.dirname(require.main.filename);
        if (!fs.existsSync(appDir + '/packages/' + 'zippackage')) {
            fs.createReadStream(appDir + '/zippackage.zip').pipe(unzip.Extract({ path: appDir + '/packages/' }));
        }
    });

    app.get('/mypackage/example', function(req, res, next) {
        res.send('Only authenticated users can access this');
    });

    app.get('/mypackage/example/auth', auth.requiresLogin, function(req, res, next) {
        res.send('Only authenticated users can access this');
    });

    app.get('/mypackage/example/admin', auth.requiresAdmin, function(req, res, next) {
        res.send('Only users with Admin role can access this');
    });

    app.get('/mypackage/example/render', function(req, res, next) {
        Mypackage.render('index', {
            package: 'mypackage'
        }, function(err, html) {
            //Rendering a view from the Package server/views
            res.send(html);
        });
    });
};
