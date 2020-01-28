# Lambdas are Function Expressions Used as Parameters/Aguements/Data

Lambdas are Function Expressions Used as Parameters/Aguements/Data. Anonymous functions are simply unnamed functions.

It matters how they are used, not only how they are defined. 

The implementation and rules between languages may be slightly different, but share core commonalities.

Let's explore some resources to get some more data on the subject. 

From the elisp documentation:

> A lambda expression, by itself, has no name; it is an anonymous function. Although lambda expressions can be used this way (see Anonymous Functions), they are more commonly associated with symbols to make named functions.
https://www.gnu.org/software/emacs/manual/html_node/elisp/Lambda-Expressions.html#Lambda-Expressions

> In practice, nearly all functions have names, and are referred to by their names. You can create a named Lisp function by defining a lambda expression and putting it in a function cell (see Function Cells). However, it is more common to use the defun special form.
https://www.gnu.org/software/emacs/manual/html_node/elisp/Function-Names.html#Function-Names

Other sources referencing other languages concur.

> the distinction [between lambdas and anonymous functions] matters in JavaScript in order to avoid confusion when you learn functional programming concepts.
It is functions used as data which is the true salient, defining feature of lambdas, not anonymity.
...
If you don't consider a named function to be a lambda, you're missing the point of lambdas.
https://gist.github.com/ericelliott/414be9be82128443f6df

> You can use a lambda expression or an anonymous method to create an anonymous function. We recommend using lambda expressions as they provide more concise and expressive way to write inline code. Unlike anonymous methods, some types of lambda expressions can be converted to the expression tree types.
https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/statements-expressions-operators/anonymous-functions

Commonalities between implementation of lambda functions between each source include that a function expression is used as either an input parameter/arguement, or an output type, and that the function expression creates a closure for itself in the scope it is defined in.

(a note moving forward: higher order functions are functions that take a function as an argument, and/or return functions as their result.)

So, a named or unnamed IIFE would not be considered a lambda unless it's also a higher order function whose return value's type is a function expression that is being used as input to another higher order function. Only then is the function expression returned considered a lambda. However, a function expression with or without an associated symbol or name that is not invoked immediately, and is instead passed into a higher order function, would be considered a lambda.

This distiction is important, beacause if one who is learning functional programming incorrectly thinks that anonymous functions and lambda functions are equivilent and that they are only useful when needing to skip naming a function that only needs to be used once, then the point and power of lambda functions is missed and very likely lost. 

When understanding that a function expression can be used as input to a higher order function, then the power of lambda functions are manifest. 