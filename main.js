const fs = require('fs');
const http = require('http');
const url = require('url');

const Database = require('./lib/Database');
const Node = require('./lib/Node');

Database.connect((db) => {

	console.log('Connected to the database.');

	// Database.delete(db);

	Database.populate(db, (populated) => {

		if (populated) {
			console.log('Populated the database');
		}
		else {
			console.log('Did not populate the database');
		}

		Node.root(db);
	});
});

// 	db.collection(imports.db_table).find({ _id: 1 }).toArray((err, result) => {
// 		if (err) throw err;

// 		if (result.length === 1) {
// 			node = result[0];
// 			console.log('Found the root: ' + node.content);
// 		} else {
// 			console.log("There were multiple items with an ID of 1");
// 		}
// 	});

// 	http.createServer((request, response) => {

// 		var Node = require('./lib/Node');
// 		var Utilities = require('./lib/Utilities');

// 		var html = ""

// 		console.log(request.url);

// 		var url = request.url;

// 		if (url === "/") {
// 			fs.readFile("./index.html", "utf8", (error, data) => {
// 				if (error) {
// 					throw error;
// 				} 

// 				console.log("Here is the node: " + node.content);

// 				var parents = Utilities.pretty(Node.parentStack(node));
// 				var children = Utilities.pretty(node.children);
// 				var nodes = parents;

// 				console.log(nodes);
// 				nodes.push(node.content);
// 				console.log(nodes);

// 				nodes = nodes.concat(children);
// 				console.log(nodes);

// 				var string = "";

// 				for (var i = 0; i < nodes.length; i++) {
// 					if (nodes[i] === node.content)
// 					{
// 						string += '<div class="node current-node"><a href="#node"><p class="current-text">' 
// 						+ nodes[i] 
// 						+  '</p></a></div><div class="child-line child-line-current"></div>';
// 					}
// 					else
// 					{
// 						string += '<div class="node"><a href="#node"><p>' 
// 						+ nodes[i] 
// 						+  '</p></a></div><div class="child-line"></div>';
// 					}
// 				}

// 				var html = data.replace(/<%== 1 ==%>/g, string);

// 		response.writeHead(200);//, {'Content-Type': "text/html"})
// 		response.write(html);
// 		response.end();
// 	});
// 		} 
// 		else if (url === "/style.css") {
// 			fs.readFile("./style.css", "utf8", (error, data) => {
// 				if (error) {
// 					throw error;
// 				} 

// 		response.writeHead(200);//, {'Content-Type': "text/html"})
// 		response.write(data);
// 		response.end();
// 	});
// 		}
// 		else if (url === "/favicon.ico") {

// 		}
// 	}).listen(3000);

// });