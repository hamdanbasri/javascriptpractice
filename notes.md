# Notes
The notes below are for my own personal reference. This is to help me understand
the terms and the use of the syntax. 

# Template Strings
"`Hello`"  
The method below is called **Interpolation**  
NOTE: Uses Backtick (`) preferred method for calculating

`Items (${1 + 1}): $${(2095 + 799) / 100}`


# Strings
The method below is called **Concatenation**  
Note: Combination of strings using single quote (') or double quote (") 

`'Items (' + ( 1 + 1) + '): $' + (2095 + 799) / 100`

# Double Quotes 
Can be useful for:

"I'm learning javascript"

# Escape characters
**\n** - (Backward slash and the letter n)  
creates newline  
some\ntext

**\'** - (Backward slash and single quote)  
'I\'m learning Javascript'

# dot notation
use dot notation by default

console.log(product.name);

# bracket notation
Example below shows a particular case if dot notation is used, javascript will think the '-' is a minus sign.

console.log(product['delivery-time']);

# Object, Function, & Method
Object = console

log = function

Method = console.log();

const console = {

  log: ''

};

When working with Object, be careful with Const, as we can still change the value inside the object.

# JSON
## Object to JSON
**JSON.stringify();**  
localStorage.setItem('score', JSON.stringify(score));
## JSON to Object
**JSON.parse();**  
const score = JSON.parse(localStorage.getItem('score'));

# Local Storage
Can be used to store, retrieve and remove values

**localStorage.setItem(someValueHere);**  
localStorage.setItem('score', JSON.stringify(score));

**localStorage.getItem(someValueHere);**  
const score = JSON.parse(localStorage.getItem('score'));

**localStorage.removeItem(someValueHere);**  
(Becareful with this as a default value must be set to not fully delete the Object values)  
localStorage.removeItem('score');

# null vs undefined
null: intentionally want something to be empty  
undefined: almost the same