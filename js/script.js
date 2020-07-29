/*************************************************WARMING UP (Fundamentals) *****************************************/
//*******************************************************Vowel Count************************************************
function count(vowels) {
  let vowelsListe = "aeiou",
    vowelscount = 0; // variable liste contenant les voyelles et le compte de voyelle

  for (let i = 0; i < vowels.length; i++) {
    // condition qui ne soit inférieur que langeur de "vowels

    if (vowelsListe.indexOf(vowels[i]) !== -1) {
      // condition renvoie le nombre voyellé trouver dans la liste vowelscount
      vowelscount += 1;
    }
  }
  return vowelscount;
}
console.log(count("vowels in the given string")); // affiche le résultat dans la console

//*******************************************************Even or Odd************************************************

function evenOrOdd(num) {
  if (num % 2 === 0) {
    // Condition si num modulo de 2 % retournes EVEN
    return "Even";
  } else {
    return "Odd"; // dans le cas contraire il retourne ODD
  }
}
console.log(evenOrOdd(2)); // affiche le résultat dans la console

//*************************************************Get the Middle Character******************************************

function getMiddle(string) {
  let position, Get; // Déclaration des variables position et Get

  if (string.length % 2 == 1) {
    // condition si modulo de la taille du mot donne odd
    position = string.length / 2; // la position est la longeur du mot / 2
    Get = 1; // prendre une lettre du milieu
  } else {
    // sinon (modulo de la taille du mot donne even)
    position = string.length / 2 - 1; // la position est la longeur du mot / 2 - 1
    Get = 2; // prendre deux lettre du milieu
  }
  return string.substring(position, position + Get); // retourne la fonction substring
}
console.log(getMiddle("test")); // affiche le résultat dans la console
console.log(getMiddle("testing")); // affiche le résultat dans la console
console.log(getMiddle("middle")); // affiche le résultat dans la console
console.log(getMiddle("A")); // affiche le résultat dans la console

/*************************************************Algorithms ******************************************************/
//************************************************Credit Card Mask*************************************************

function maskify(number) {
  let str = number.toString(); // convertir en string
  let array = str.split(""); // convertir en tableau
  let replacer = "#";
  let replace = array.splice(
    0,
    array.length - 4,
    replacer.repeat(array.length - 4)
  );
  // remplacer les tout sauf les 4 dernier caractére par #
  let someonCouldLook = array.join(""); // concaténer

  return someonCouldLook;
}
console.log(maskify(4556364607935616)); //affiche le resultat dans la console
console.log(maskify("Nananananananananananananananana Batman!")); //affiche le resultat dans la console
console.log(maskify("Skippy")); //affiche le resultat dans la console

//************************************************Sum of odd numbers************************************************

function rowSumOddNumbers(n) {
  let oddNumbers = []; // crée le tableau dans le quel vont etre stokés les nombre pair
  let startNumber = n * n - (n - 1);
  // dans le cas ou n = 2=  (2*2)-(2-1) = 4 -1 = 3 donc 3 est le numero du debut

  while (n > 0) {
    // tant que n > 0
    oddNumbers.push(startNumber); // entrer dans le tableau le numero 3
    startNumber += 2; // ce qui ne donne 5
    n--;
  }
  let sum = oddNumbers.reduce((a, b) => a + b, 0); // accumuler les valeur du tableau
  return sum;
}
console.log(rowSumOddNumbers(1)); //affiche la somme dans la console
console.log(rowSumOddNumbers(2)); //affiche la somme dans la console
console.log(rowSumOddNumbers(3)); //affiche la somme dans la console
console.log(rowSumOddNumbers(4)); //affiche la somme dans la console
console.log(rowSumOddNumbers(5)); //affiche la somme dans la console

//************************************************Find the divisors!************************************************

function divisors(num) {
  let array = []; // // crée le tableau dans le quel seront stokée les diviseur

  for (let i = 2; i < num; i++) {
    // l'espression iniitial 2 et la condition  i inférieur au nombre
    if (num % i == 0) {
      // si modulo num ete i == 0
      array.push(i); // on insert tout les diviseurs i dans le tableau
    }
  }

  if (array.length == 0) {
    // si aucun diviseur na etait ajouté au tableau
    return num + " is prime";
  }

  return array;
}

console.log(divisors(12)); // affiche le resultat dans la console
console.log(divisors(25)); // affiche le resultat dans la console
console.log(divisors(13)); // affiche le resultat dans la console

/*************************************************Data Types******************************************************/
//************************************************Return Negative*************************************************

function makeNegative(num) {
  if (num > 0) {
    //si num supérieur a 0
    return num * -1;
  } else if (num < 0) {
    //si num inférieur a 0
    return num;
  } else if (num == 0) {
    //si num egale a 0
    return num;
  }
}
console.log(makeNegative(1)); // affiche le resultat dans la console
console.log(makeNegative(-5)); // affiche le resultat dans la console
console.log(makeNegative(0)); // affiche le resultat dans la console
console.log(makeNegative(0.12)); // affiche le resultat dans la console

//**********************************Remove First and Last Character*************************************************

function Delete(str) {
  let strDelete = str.substring(1, str.length - 1); // fonction pour supprimer les caractéres du debut et de la fin du mot
  return strDelete;
}

console.log(Delete("Gomycode")); // affiche le resultat dans la console

//*******************************************Remove String Spaces****************************************************

function strSpace(str) {
  return str.split(" ").join(""); // diviser la chaîne de caractères et la mettre dans un tableau puis fusionner en chaine de caractères
}

console.log(strSpace("Remove String Spaces")); // affiche le resultat dans la console

/*************************************************Numbers***************************************************************/
//************************************************Sum of the first nth term of Series*************************************

function SeriesSum(n) {
  let resultat = 0,
    dénominateur = 1; //declaration des variable resultat et dénominateur

  for (let i = 0; i < n; i++) {
    if (i == 0) {
      resultat = 1;
    } else {
      dénominateur = dénominateur + 3; // on incémente le dénominateur de 3
      resultat = resultat + 1 / dénominateur; // le resultat diviser par le dominateur
    }
  }
  return resultat.toFixed(2); // fonction pour afficher 2 chiffre aprés la virgule
}
console.log(SeriesSum(1)); //1 = "1.00"
console.log(SeriesSum(2)); // 1 + 1/4 = "1.25"
console.log(SeriesSum(5)); //1 + 1/4 + 1/7 + 1/10 + 1/13 = "1.57"

//***********************************************Keep Hydrated!**********************************************************

function Time(h) {
  let water = 0.5; // Déclaration de la variable 0.5 litre d'eau/h
  if (h > 0) {
    // si heure et supérieur a 0
    return Math.floor(h * water); // fonction math.floor pour arrondir au plus petit
  } else {
    return "invalid value";
  }
}

console.log(Time(3)); // affiche le resultat dans la console
console.log(Time(6.7)); // affiche le resultat dans la console
console.log(Time(11.8)); // affiche le resultat dans la console

//***********************************************Century From Year*********************************************************

function centuryFromYear(y) {
  switch (
    true // condition switch
  ) {
    case y >= 1001 && y <= 1100: // dans le cas ou y (year) suppérieur ou égale 1001 et inférieur ou égale 1100 doit renvoyer 11th century
      return "11th century";
    case y >= 1101 && y <= 1200:
      return "12th century";
    case y >= 1201 && y <= 1300:
      return "13th century";
    case y >= 1301 && y <= 1400:
      return "14th century";
    default:
      return "invalid value";
  }
}
console.log(centuryFromYear(-1)); // 11th century
console.log(centuryFromYear(1165)); // 12th century
console.log(centuryFromYear(1230)); // 13th century
console.log(centuryFromYear(1399)); // 14th century

/*************************************************Strings***************************************************************/
//****************************************************Reversed Strings*************************************************

function reverseString(str) {
  return str.split("").reverse().join(""); // Diviser la chaîne de caractères et la mettre dans un tableau puis l'inverser ensuite fusionner
}

console.log(reverseString("world")); // retourne le resulat

//***************************************************String ends with?*************************************************

function solution(string, target) {
  if (string.substring(1, string.length) == target) {
    // si strig - le 1er caractère == a target

    return true; // ca renvoie true
  } else {
    return false; // sinon false
  }
}
console.log(solution("abc", "bc")); // retourne le resulat
console.log(solution("abc", "d")); // retourne le resulat

//***************************************************Do I get a bonus?*************************************************

let salary = 500,
  coef = 10; // Declaration de deux variable salaire et coefficient
function one(salary, bonus) {
  if (bonus === true) {
    // si bonus est vrais
    return (
      " Your salary is multiplied by 10 " +
      "and it is " +
      salary * coef +
      " \u00A3"
    ); // retourne salaire multiplier par le coefficient
  } else if (bonus === false) {
    // si le bonus est faux
    return "you receive only his stated salary " + salary + " \u00A3"; // retourne salaire de base
  } else {
    return "invalid value";
  }
}
console.log(one(salary, true)); // retourne le resulat
console.log(one(salary, false)); // retourne le resulat

/*************************************************Arrays***************************************************************/
//****************************************************Counting sheep...*************************************************

let arraySheep = [true,true,true,false,true,true,true,true,true,false,true,false,true,false,false,true,true,true,true,true,false,false,true,true,];
let Counting = arraySheep.filter(Boolean).length;

console.log(Counting);

//****************************************************Ones and Zeros*************************************************

function arrayBinary(number){
  let convert = parseInt(number.split('').join(""), 2); // Diviser la chaîne de caractères et la mettre dans un tableau et la renvoyer en integer avec parseInt 
  return convert;
  
  }
  console.log(arrayBinary('0001')); // retourne le resulat
  console.log(arrayBinary('0010')); // retourne le resulat
  console.log(arrayBinary('0101')); // retourne le resulat
  console.log(arrayBinary('1001')); // retourne le resulat
  console.log(arrayBinary('0010')); // retourne le resulat
  console.log(arrayBinary('0110')); // retourne le resulat
  console.log(arrayBinary('1111')); // retourne le resulat
  console.log(arrayBinary('1011')); // retourne le resulat
  
  
//******************A Needle in the Haystack*************
function findNeedle(haystack) {
  return "found the needle at position " + haystack.indexOf("needle");// renvoi l'index de du mot rechercher
}

console.log (findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']));// retourne le resulat

/*************************************************Objects**************************************************************/
//**************************************************Make a function that does arithmetic!*******************************

function arithmetic(a, b, operator) {
  switch (operator) { // boucle switch applique l'operation selon le nom de l'operateur
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      return a / b;
  }
}

console.log(arithmetic(10, 4, "add"));// affiche le resultat dans la console
console.log(arithmetic(10, 4, "subtract"));// affiche le resultat dans la console
console.log(arithmetic(10, 4, "multiply"));// affiche le resultat dans la console
console.log(arithmetic(10, 4, "divide"));// affiche le resultat dans la console

//**************************************************8Regular Ball Super Ball********************************************

let Ball = function (ballType) {
  if (typeof ballType === "string") { // si typeof balltype = a une chaine de caratére balltype = baltype ( representer le string) 
    this.ballType = ballType;
    
  } else this.ballType = "regular"; // sinon balltype = regular
};

ball1 = new Ball(); // crée une nouvelle instance vide donc elle va renvoyer regular
ball2 = new Ball("super"); // crée une nouvelle instance avec une chaine "super" donc ca va renvoyer cette meme chaine

console.log(ball1.ballType);// affiche le resultat dans la console
console.log(ball2.ballType);// affiche le resultat dans la console

//**************************************************Make them bark!********************************************

function Dog(name, breed, sex, age) {
  this.name = name;
  this.breed = breed;
  this.sex = sex;
  this.age = age;
}
Dog.bark = function () { // construit un nouvel objet bark qui retourn "Woof!
  return "Woof!";
};

console.log(Dog.bark());// affiche le resultat dans la console


/*************************************************Basic Language Features******************************************************/
//*************************************************Grasshopper - Summation****************************************************

function total(num) {
  let sum = 0; //Declaration de la variable sum
  for (var i = 0; i <= num; i++); // boucle avec condition i superieur a num et incérment toujours de 1
  sum += i; 
  return sum;
}
console.log(total(2));// affiche le resultat dans la console
console.log(total(8));// affiche le resultat dans la console

//*************************************************Jenny's secret message****************************************************

function greeting(user) {

  if (user === "user") { 
    return "Hello "+ user ; // renvoi un message de salutation a user
  } else if(user === "Johnny") { // si l'utilsateur est johnny elle retourne un message différente des autre 
    return "Hi "+ user + " I'm glad to see you today";
  }
}
console.log(greeting("user"));// affiche le resultat dans la console
console.log(greeting("Johnny"));// affiche le resultat dans la console

//*************************************************Count the Monkeys!****************************************************


function monkeyCount(m) {
  let array = []; // Declarer la variable tableau ou sera stokée le compte
  for (let i = 1; i <= m; i++) { // boucle ajouter un au tableau tant que i est inférieur ou égale m
    array.push(i);
  }
  return array; // retourne le tableau 
}

console.log(monkeyCount(10));// affiche le resultat dans la console
console.log(monkeyCount(1));// affiche le resultat dans la console


/*************************************************Conditional Statements (Control Flow)**********************************/
//*************************************************Find the capitals*****************************************************

function Capital(word) {
  let assertSimilar = [];
  
  for (let i = 0; i < word.length; i++) { // tant que i est inférieur a la langeur du mot
    if (word[i] === word[i].toUpperCase()) { // si index du mot (i) est egale a une majuscule
      assertSimilar.push(i); // ajouter l'index de la  majuscule dans le tableau
    }
  }
  return assertSimilar; // renvoie le tableau 
}

console.log(Capital("CodEWaRs")); // affiche le resultat dans la console

//*************************************************Drink about*****************************************************

function peopleWithAgeDrink(age) {
  if (age <= 14) { // condition si age et inférieur ou égale ou comprie entre 
       return "drink toddy";
   } else if (age >= 15 && age < 18) {
     return "drink coke";
   } else if (age >= 18 && age < 21) {
     return "drink beer";
   } else if (age >= 21) {
     return "drink whisky";
   }
 }
 console.log(peopleWithAgeDrink(12));// affiche le resultat dans la console
 console.log(peopleWithAgeDrink(17));// affiche le resultat dans la console
 console.log(peopleWithAgeDrink(20));// affiche le resultat dans la console
 console.log(peopleWithAgeDrink(32));// affiche le resultat dans la console

//*************************************************Leonardo Dicaprio and Oscars*******************************************

function leo(oscar) {
  if (oscar == 88) { // condition si oscar == 88 
    return "Leo finally won the oscar! Leo is happy";
  } else if (oscar == 86) {// sinon si oscar == 86 
    return "Not even for Wolf of wallstreet?!";
  } else if (oscar < 88 && oscar !== 86) {// sinon si oscar et inférieur a 88 et pas egale a 86
    return "When will you give Leo an Oscar?";
  } else if (oscar > 88) {// sinon si oscar supérieur a 88 
    return "Leo got one already!";
  }
}
console.log(leo(88));// affiche le resultat dans la console
console.log(leo(86));// affiche le resultat dans la console
console.log(leo(80));// affiche le resultat dans la console
console.log(leo(100));// affiche le resultat dans la console

/*************************************************Loops***************************************************************/
//***********************************************Sentence Smash******************************************************

function smash(words) {
  return words.join(" "); // fonction join(" ") pour fusionner les chaines de caractère du tableau
  
}
let word = smash(['hello', 'world', 'this', 'is', 'great']);

console.log(word);// affiche le resultat dans la console

//*************************************If you can't sleep, just count sheep!!******************************************

let Sheep = function (integer) {
  let murmur = ""; // variable murmur qui contiendra le resultat a envoyer
  for (let i = 0; i < integer; i++) {
    // commence par 0 et ne doit pas dépasser le integer
    murmur += i + 1 + " sheep..."; // il incrémente par 1 jusqu'a attiendre le intéger
  }
  return murmur; // retourne le resulat
};

console.log(Sheep(4)); // affiche le resultat dans la console

//****************************************************Double Char*********************************************************

let string = "Nazim"; // variable string le mot dont les lettre vont etre répéter
let double = ""; // variable double contenant le mot avec les lettre répéter
for (let i = 0; i < string.length; i++) {
  //boucle for si i inférieur a la longeur de string incrémenté de 1
  double += string[i] + string[i];
}

console.log(double); // affiche le resultat dans la console

/*************************************************#Changing Gears***********************************************************/
//**************************************************Double Char***********************************************************

function Multiples(num) {
  let sum = 0; // declaration variable sum dont la valeur = 0
  for (var i = 1; i < num; i++) {
    // répeter de 1 au nombre "num"
    if (i % 3 === 0 || i % 5 === 0) {
      // si i est i est multipe de 3 ou de 5
      sum += i; // ajouter le nombre a la somme
    }
  }
  return sum; // retourne la somme
}
console.log(Multiples(10)); // affiche la somme dans la console

//******************************************Sum of Digits / Digital Root****************************************************

function digitRoot(number) {
  let sum = number; // variable pour la somme
  let array = []; // variable pour le tableau
  let reducer = (a, b) => parseInt(a) + parseInt(b); //variable pour convertir les valeurs en un entier avec parseInt()

  while (sum > 9) {
    // exécuter tant que le nombre est supérieur a 9 le transformer en tableau
    arr = sum.toString().split("");
    sum = arr.reduce(reducer); // pour additionner les elements du tableau
  }
  return sum; // retourne la somme
}
console.log(digitRoot(493193)); // affiche la somme dans la console

//***********************************************Who likes it?*************************************************************


function likes(names) {
  switch (
    names.length // condition que names doit avoir une longeur
  ) {
    case 0:
      return "no one likes this"; // dans le cas ou le tableau est vide
    case 1:
      return names[0] + " likes this"; // dans le cas ou le tableau comporte un nom
    case 2:
      return names[0] + " and " + names[1] + " like this"; // dans le cas ou le tableau comporte deux noms
    case 3:
      return names[0] + ", " + names[1] + " and " + names[2] + " like this"; //dans le cas ou le tableau comporte trois noms
    default:
      return (
        names[0] +
        ", " +
        names[1] +
        " and " +
        (names.length - 2) +
        " others like this"
      ); // dans le cas ou le tableau comporte quatre noms et n'affiche selement les deux 1er et affiche (2 other like this) avec longeur du tableau -2
  }
}

console.log(likes([]));
console.log(likes(["Peter"]));
console.log(likes(["Jacob", "Alex"]));
console.log(likes(["Max", "John", "Mark"]));
console.log(likes(["Alex", "Jacob", "Mark", "Max"])); // affiche le resultat dans la console

//*********************************************Find The Parity Outlier************************************************************


function find(numbers) {
  let odd = numbers.filter((intriguer) => intriguer % 2 === 1); // la fonction teste si odd pour chaque element du tableau
  let notOdd = numbers.filter((intriguer) => intriguer % 2 === 0); // la fonctionteste si even pour chaque element du tableau
  if (odd.length > 1) {
    // condition pour determiner si l'element est un even
    return notOdd[0];
  } else {
    return odd[0]; // sinon l'element est odd
  }
}
console.log(find([160, 3, 1719, 19, 11, 13, -21]), "the only even number"); // affiche le resultat dans la console

console.log(find([2, 4, 0, 100, 4, 11, 2602, 36]), "the only odd number"); // affiche le resultat dans la console


//*********************************************Stop gninnipS My sdroW!************************************************************

function spinWords(sentence){

  let Array = sentence.split(' ');
  let result ;
  
  Array.map((str, i) => {
        if (str.length >= 5){ // si la langeur du mot est supérieur ou égale a 5
          Array[i] = str.split('').reverse().join(''); // array [index] = mot.split puis reverse ensuite join
        } else {
          Array[i] = str;// sinon le mot reste comme il est 
        }
      result = Array.join(' '); // convert en chaine de caractère
						})
  return result;
}

console.log(spinWords("Hey fellow warriors"));// affiche le resultat dans la console
console.log(spinWords("This is a test"));// affiche le resultat dans la console
console.log(spinWords("This is another test"));// affiche le resultat dans la console
