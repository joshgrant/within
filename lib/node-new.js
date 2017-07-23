const mongo = require('mongodb');

function Node(content = '', parent = null, children = [], _id = new mongo.ObjectID()) {
	mongo.MongoClient.collection('nodes');
}

