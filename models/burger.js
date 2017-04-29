var orm = require('../config/orm.js');

// inside burger.js create teh code that will call the orm fucntions using burger specific input for the orm

// export at the end of burger.js file		

var burger = {

	all: function(cb){
		orm.all("burgers", function(res) {
			cb(res);

		});

	},

	create: function(cols, vals, cb){
		orm.create("burgers", cols, vals, function(res){
			cb(res);
		});
	},
	update: function(objColVals, condition, cb){
		orm.update("burgers", objColVals, condition, function(res) {
			cb(res);
	});

	}

};







module.exports = burger;
// selectall() done i think
// insertOne() done i think
// updateone() 