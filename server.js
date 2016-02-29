#!/usr/bin/env node

var app        = require( 'express' )( );
var http       = require( 'http' ).Server( app );
var bodyParser = require( 'body-parser' );

var pg         = require( 'pg-native' );
var connection = new pg();

connection.connect( function( err ) {
  if( err ) {
    return console.error( 'could not connect to postgres', err );
  }
});

app.use( bodyParser.urlencoded(
  { extended: false }
));
app.use( bodyParser.json() );

	
app.get( '/', function( req, res ) {
	var data = {
		"Data":""
	};
	data["Data"] = "Welcome to Book Store DEMO...";
	res.json( data );
});

app.get( '/book', function( req, res ) {
	var data = {
		"error": 1,
		"Books": ""
	};
	
	connection.query( 'SELECT * FROM "projectTemplate".user', function( err, rows, fields ) {
		if( rows.length != 0 ) {
			data[ "error" ] = 0;
			data[ "Books" ] = rows;
			res.json( data );
		}else{
			data[ "Books" ] = 'No books Found..';
			res.json( data );
		}
	});
});

app.post( '/book', function( req, res ) {
	var Bookname   = req.body.bookname;
	var Authorname = req.body.authorname;
	var Price      = req.body.price;
	var data       = {
		"error":1,
		"Books":""
	};
	if( !!Bookname && !!Authorname && !!Price ) {
		connection.query( "INSERT INTO \"projectTemplate\".user VALUES( '',?,?,?)", [
				Bookname,
				Authorname,
				Price
		],function( err, rows, fields ) {
			if( !!err ) {
				data[ "Books" ] = "Error Adding data";
			} else {
				data[ "error" ] = 0;
				data[ "Books" ] = "Book Added Successfully";
			}
			res.json( data );
		});
	} else {
		data[ "Books" ] = "Please provide all required data (i.e : Bookname, Authorname, Price)";
		res.json( data );
	}
});

app.put( '/book', function( req, res ) {
	var Id         = req.body.id;
	var Bookname   = req.body.bookname;
	var Authorname = req.body.authorname;
	var Price      = req.body.price;
	var data       = {
		"error": 1,
		"Books": ""
	};
	if( !!Id && !!Bookname && !!Authorname && !!Price ) {
		connection.query( "UPDATE FROM \"projectTemplate\".user SET BookName=?, AuthorName=?, Price=? WHERE id=?", [
				Bookname,
				Authorname,
				Price,
				Id
		], function( err, rows, fields ) {
			if( !!err ) {
				data[ "Books" ] = "Error Updating data";
			} else {
				data[ "error" ] = 0;
				data[ "Books" ] = "Updated Book Successfully";
			}
			res.json( data );
		});
	} else {
		data[ "Books" ] = "Please provide all required data (i.e : id, Bookname, Authorname, Price)";
		res.json( data );
	}
});

app.delete( '/book', function( req, res ) {
	var Id   = req.body.id;
	var data = {
		"error": 1,
		"Books": ""
	};
	if( !!Id ) {
		connection.query( "DELETE FROM \"projectTemplate\".user WHERE id=?",[
				Id
		], function( err, rows, fields ) {
			if( !!err ) {
				data[ "Books" ] = "Error deleting data";
			} else {
				data[ "error" ] = 0;
				data[ "Books" ] = "Delete Book Successfully";
			}
			res.json( data );
		});
	} else {
		data[ "Books" ] = "Please provide all required data (i.e : id )";
		res.json( data );
	}
});

var myServerAddress = '0.0.0.0';
var myServerPort    = 8080;

http.listen( myServerPort, function() {
	console.log( "Connected & Listen to port " + myServerPort );
});
