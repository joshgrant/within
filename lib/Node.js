const mongo = require("mongodb");
const Import = require("./Import");

function Node(par_id, cont) {

	mongo.MongoClient.connect(Import.db_url, (err, db) => {
		if (err) throw err;
		var new_node = { content: cont, parent_id: par_id, children_ids: [], _id: new mongo.ObjectID() };
		db.collection(Import.db_table).insertOne(new_node, (err, res) => {
			if (err) throw err;
			console.log(cont);

			db.collection(Import.db_table).updateOne(
				{ _id: par_id }, 
				{ $push: { children_ids: new_node._id}}
				);
			db.close();
		});
	});
}

Node.root = function(db) {
	db.collection(Import.db_table).find({ _id: 1 }).toArray((err, res) => {
		console.log(res[0]);
	});
}


Node.parentStack = function(node, stack = []) {

	if (node.parent_id !== null) {

		mongo.MongoClient.connect(Import.db_url, (err, db) => {
			if (err) throw err;

			db.collection(Import.db_table).findOne({_id: node.parent_id}, (err, result) => {
				if (err) throw err;

				if (result !== null && result !== undefined) {
					Node.parentStack(result, stack);
					stack.push(result);
				}

				db.close();

			});
		});
	}

	return stack;
};

Node.prototype.printParentStack = function() {
	var array = Node.parentStack(this);

	for (var i = 0; i < array.length; i++) {
		console.log(array[i].content);
	}
}


Node.addChild = function(node, child) {
	
	this.children.push(child);

	mongo.MongoClient.connect(Import.db_url, (err, db) => {
		if (err) throw err;
	});
}

Node.parent = function(node) {
	mongo.MongoClient.connect(Import.db_url, (err, db) => {
		if (err) throw err;

		db.collection(Import.db_table).findOne({_id: node.parent_id}, (err, result) => {
			if (err) throw err;

			if (result !== null && result !== undefined) {
				Node.parentStack(result, stack);
				stack.push(result);
			}

			db.close();

		});
	});
}

Node.children = function(node) {

}


module.exports = Node;