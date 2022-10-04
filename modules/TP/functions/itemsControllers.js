//require fs
const fs = require('fs');
//import ids.json
var items = {}
var path = require('path');


module.exports = {
    name: 'itemsControllers',
    description: 'itemsControllers',

    initIdsList(dataController) {

        //init itmes list
        walk(path.join(__dirname, '../data/items'), function (err, results) {
            if (err) throw err;
            results.forEach(function (result) {
                if (result.includes(".json")) {
                    var item = require(result);
                    if (typeof (items[item.id]) == "undefined") {
                        items[item.id] = item;
                    }
                }
            });
        });
        //save ids list
        dataController.mainData["tp"].items = items;
        console.log(dataController.mainData["tp"].items)
    }



}

var walk = function(dir, done){ //https://stackoverflow.com/questions/5827612/node-js-fs-readdir-recursive-directory-search
    var results = [];
    fs.readdir(dir, function(err, list) {
      if (err) return done(err);
      var i = 0;
      (function next() {
        var file = list[i++];
        if (!file) return done(null, results);
        file = path.resolve(dir, file);
        fs.stat(file, function(err, stat) {
          if (stat && stat.isDirectory()) {
            walk(file, function(err, res) {
              results = results.concat(res);
              next();
            });
          } else {
            results.push(file);
            next();
          }
        });
      })();
    });
  }