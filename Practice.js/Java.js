const firstName = 'Adeoluwa';
const lastName = 'Adebunmi';
const age = 15

let val;

val = firstName + lastName;
//concatenation
val = firstName +" " + lastName;
//Append
val = "Brad ";
val += "Traversy";
val = 'Hello, my name is ' + firstName + ' ' + lastName + ' ' + 'and I am' + ' ' + age + ' ' + 'years old';
//Ecaping
val = 'That\'s is awesome, I can\'t wait';
//Length
val = firstName.length;
//Concat
val = firstName.concat(' ' + lastName); 


console.group(val);