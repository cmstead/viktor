'use strict';

var fs = require('fs'),
    handlebars = require('handlebars'),
    j = require('jfp');

function captureTemplate(sourceMap, filename, callback){
    fs.readFile('templates/' + filename, { encoding: 'utf-8' }, function(error, data){
        sourceMap[filename] = !error ? handlebars.compile(data) : j.identity;
        callback(error, sourceMap);
    });
}

function getTemplateFiles(filenames, callback){
    var templateMap = {},
        sourceHandlers = filenames.map(function(filename){
            captureSource.bind(sourceMap, filename);
        });

    async.parallel(sourceHandlers, function(error){
        callback(error, sourceMap);
    });
}

function getTemplates(callback){
    fs.readdir('templates', function(error, filenames){
        if(!error){
            getTemplateFiles(filenames, callback);
        } else {
            callback(error, null);
        }
    });
}
