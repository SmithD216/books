function foo(a) {
	var b = a;
	return a + b;
}

var c = foo( 2 );

/*

LHS #1
var c = foo(2);
We look to see if c exists
The compiler doesn't see it so it creates it
The engine then assigns foo(2) to it

LHS #2 
foo(2) >>> function foo(a)
We look to see if a exists
The compiler has declared it as a parameter of foo
The engine then assigns 2 to a

LHS #3 
var b = a;
We look to see if b exists
The compiler can't see it so it creates it
The engine then assigns a to b

RHS #1
var c = foo(2);
We look to see if foo exists
The compiler sees it
The engine executes it

RHS #2
var b = a;
We look to see if a exists
The compiler sees it
The engine assigns a to b

RHS #3
return a + b
We check to see if a exists
The compiler sees it
The engine adds it to b

RHS #4
return a + b
We check to see if b exists
The compiler sees it
The engine adds it to a

*/