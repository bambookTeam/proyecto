document.getElementsByTagName('title')[0].innerHTML = "0041 - ValidateISBN_Demo";

var body = document.getElementsByTagName('body')[0];
var print = function ( text ) {
	
	if ( text === undefined )
		text = "";	
	
	text = addHTMLWhitespaces( text );
	text = justifyText( text, 200 );

	body.innerHTML += text;
}
var println = function ( text ) {
		
	if ( text === undefined )
		text = "";	
	
	print( text + '</br>' );
}
String.prototype.format = function() {
	
	var result = this;
	
	for ( i = 0; i < arguments.length; i++ ) {
		
		var pattern = new RegExp("\\{" + i + "\\}", "g" );
		result = result.replace( pattern, arguments[i] );
	}
	
	return result;
}
var addHTMLWhitespaces = function ( text ) {
	
	var pattern = new RegExp(" ", "g" );
	return text.replace( pattern, '&nbsp;' );
}
var justifyText = function ( text, inlineChars ) {
	
	var result = "";
	
	for ( var i = 0, counter = 1; i < text.length; i++ ) {
		
		if ( counter == inlineChars ) {
			
			if ( text[ i ] == " " || text[ i ] == "&" && isWhiteSpaceCode( text, i ) ) {
				
				result += "</br>";
				counter = 1;
			}
		}
		else {
			counter++;
		}
		result += text[ i ];
	}

	return result;
}
var isWhiteSpaceCode = function ( text, index ) {
	
	var result = true;
	
	var code = "&nbsp;";
	if ( ( index + code.length ) <= text.length ) {
		
		for ( var i = 0; result && i < code.length; )
			if ( text[ index++ ] != code[ i++ ] )
				result = false;
	}

	return result;
}
var run = function () {

// let isValidISBN = isValidISBN();
// isValidISBN = document.querySelector('#txt_isbn').value;

// Swal.fire({
//     type: 'warning',
//     title: 'ISBN ingresado no es válido',
//     text: 'Revise los datos y vuelva a intentarlo'
// })
}

function isValidISBN ( isbn ) {
	
	var result = false;
	
	if ( isbn != null ) {
		
		isbn = isbn.replace( /-/g, "" ); // remove '-' symbols
		isbn = isbn.replace( / /g, "" ); // remove whiteSpace
		
		switch ( isbn.length ) {
			
			case 10 :
				result = isValidISBN10( isbn );
				break;
			case 13 :
				result = isValidISBN13( isbn );
				break;
		}
	}
	
	return result;
}

function isValidISBN10( isbn ) {
	
	var result = false;
	
	// ^ - start string
	// \d - digit
	// {9} - nine 
	// \d{9} - nine digits
	// (\d|X) - digit or 'X' char
	// (\d|X){1} - one digit or 'X' char
	// $ - end string
	var regex = new RegExp( /^\d{9}(\d|X){1}$/ );
	
	if ( regex.test( isbn ) ) {
		
		var sum = 0;
		
/*
* result = (isbn[0] * 1 + isbn[1] * 2 + isbn[2] * 3 + isbn[3] * 4 + ... + isbn[9] * 10) mod 11 == 0
*/		
		for ( var i = 0; i < 9; i++ ) {
			
			sum += isbn[ i ] * ( i + 1 );
		}
		sum += isbn[ 9 ] == 'X' ? 10 : isbn[ 9 ] * 10;
		
		result = sum % 11 == 0;
	}
	
	return result;
}

function isValidISBN13( isbn ) {
	
	var result = false;

	if ( !isNaN( isbn ) ) { // isNaN - is Not a Number, !isNaN - is a number
		
		var index = 0;
		var sum = 0;
		
/*
* result = (isbn[0] * 1 + isbn[1] * 3 + isbn[2] * 1 + isbn[3] * 3 + ... + isbn[12] * 1) mod 10 == 0
*/		
		for ( var i = 0; i < isbn.length; i++ ) {
			
			sum += isbn[ i ] * ( isOddNumber( index++ ) ? 3 : 1 );
		}
		
		result = sum % 10 == 0;
	}

	return result;
}

function isOddNumber ( value ) {
	
	return value % 2 != 0;
}


let ISBN = isValidISBN();
ISBN = document.querySelector('#txt_isbn').value;
 if (isValidISBN == true ) {
     Swal.fire({
    type: 'warning',
    title: 'ISBN ingresado no es válido',
    text: 'Revise los datos y vuelva a intentarlo'
})
 }


//run();
document.querySelector('#txt_isbn').addEventListener('keyup', run);
