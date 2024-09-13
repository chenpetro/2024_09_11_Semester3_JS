
const test = 'I am happy'
console.log(test.length);
console.log(test[3], test[5]);
console.log(test.indexOf('m'));
console.log(test.includes('y'));

// const message = 'Mango ' + 'is' + ' happy';
//  console.log(message); // Mango is happy


//  // Тепер подивимося на порядок операндів
//  let result;


//  result = 5 + '5';
//  console.log(result); // '55'
//  console.log(typeof result); // string


//  result = 5 + '5' + 5;
//  console.log(result); // '555'
//  console.log(typeof result); // string


//  /*
//   * Зверніть увагу, сталася математична операція
//   * складання для перших двох п'ятірок, після чого 10 було
//   * перетворено в рядок '10' і зшито з '5'
//  */
//  result = 5 + 5 + '5';
//  console.log(result); // '105'
//  console.log(typeof result); // string

// const message = 'Welcome to Bahamas!';


//  console.log(message.length); // 19
//  console.log('There is nothing impossible to him who will  try'.length); // 47


//  console.log(message.toLowerCase()); // welcome to bahamas!
//  console.log(message.toUpperCase()); // WELCOME TO BAHAMAS!


//  // При цьому вихідний рядок не змінюється
//  console.log(message); // Welcome to Bahamas!


//  console.log(message.indexOf('to')); // 8
//  console.log(message.indexOf('hello')); // -1


//  // Всі методи рядків чутливі до регістру
//  console.log(message.includes('welcome')); // false
//  console.log(message.includes('Welcome')); // true


//  console.log(message.startsWith('Wel')); // true
//  console.log(message.endsWith('!')); // true


//  console.log(message.padEnd(22, '!')); 
// // Welcome to Bahamas!!!!
//  console.log(message.padStart(21, ')')); 
// // ))Welcome to Bahamas!


const name = 'Mango';
 const age = 2;
 const mood = 'happy';


 const message =
  'My name is ' + name + ", I'm " + age + ' years old and '  + mood + '.';


 console.log(message); // My name is Mango, I'm 2 years old  and happy.

 const newmessage =
 `My name is ${name} , I'm ${age} years old and ${mood}.`

 console.log(newmessage); // My name is Mango, I'm 2 years old  and happy.


 const vardas = 'Ivan'
 console.log(vardas.toUpperCase());

 const firstvardas = 'Petro'
 console.log(firstvardas.charAt(2));
 
 const surNameSpace = 'Petro Petrovych'
 console.log(surNameSpace.indexOf('y'));

 const Replace = 'Petro'
 console.log(Replace.replace('P', '@'));

 const language = 'JavaScript'
 console.log(language.substring(4));

 
 const language1 = 'JavaScript'
 console.log(language1.substring(0, 4));
