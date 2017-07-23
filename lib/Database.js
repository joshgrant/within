const mongo = require('mongodb');

const Import = require('./Import');

function Database() {

}

Database.connect = function(callback) {
	mongo.MongoClient.connect(Import.db_url, (err, db) => {
		if (err) throw err;
		callback(db);
	});
}

Database.count = function(db, callback ) {
	var count = db.collection(Import.db_table).count();
	console.log('Number of elements in the database: ' + count);
	return count;
}

Database.populate = function(db, callback) {
	var initial_nodes = [
	{ content: "josh_grant", parent_id: null, _id: 1 },
	{ content: "School", parent_id: 1, _id: 2 },
	{ content: "Home", parent_id: 1, _id: 3 }, 
	{ content: "Work", parent_id: 3, _id: 4 },
	{ content: "Fun", parent_id: 4, _id: 5 }
	]

	if (Database.count(db) === 0) {
		db.collection(Import.db_table).insertMany(initial_nodes, (err, res) => {
			if (err) throw err;
			callback(true);
		});
	} 
	else {
		callback(false);
	}
}

Database.delete = function(db) {
	db.collection(Import.db_table).drop();

	console.log('Deleted the "nodes" collection.');
}

module.exports = Database;