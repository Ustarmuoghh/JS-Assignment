import "./styles.css";

//Javascript Assessment
/**
1. if we have const fruits = new Array( "apple", "orange", "mango" );
Extract => "apple+mango" from the array and log to the console
append "Guava" to the end of the array and log out the fruits to the console
remove the first element from fruits.
finally log out the length.
*/
const fruit = ["apple", "orange", "mango"];
fruit.pop();
console.log("pop", fruit);


fruit.push("Guava");
console.log("push", fruit);


fruit.shift();
console.log("shift", fruit);



/**2. Write a program that outputs sequentially the integers from 1 to 99 but on some conditions prints a string instead:
when the integer is a multiple of 3 print “Open” instead of the number,
when it is a multiple of 7 print “Source” instead of the number,
when it is a multiple of both 3 and 7 print “OpenSource” instead of the number.
*/
for ( var i = 1; i < 100; i++) 
{
  if (i % 21 === 0) 
  {
  console.log("OpenSource");
  }

  else if (i % 3 === 0) 
  {
  console.log("Open");
  }
  else if (i % 7 === 0) 
  {
  console.log("Source");
  }
  else 
  {
  console.log(i);
}
}


/**3. Given an Integer, return an Integer that is the reverse of ordering of numbers
e.g  the reverse of 15 should be  51
       the reverse of 981 should be 189
       the reverse of -15 should be -51
*/
function reverseInt(n)
{
  const reversed = n.toString().split('').reverse().join('');
  return Math.sign(n) * parseInt(reversed); 
}

console.log("reverseInt", reverseInt(15));
console.log("reverseInt", reverseInt(981));
console.log("reverseInt", reverseInt(-15));

/**4. Given the following Array
const locations = [
  {
    name: "Nigeria",
    population: 400_000_000,
    states: 36
  },

  {
    name: "Ghana",
    population: 200_000_000,
    states: 26
  },

];


Return a new Array like this;
const newLocations = [
  {
    name: "Nigeria = 400_000_000",
    states: 36
  },
  {
    name: "Ghana = 200_000_000",
    states: 26
  },
];

*/


/**5. Given the following

 Score            Grade     
(100 - 90) -->   'A'
(89 - 80)   -->  'B'
(79 - 70)   -->  'C'
(69 - 60)  -->   'D'
(59 - 0)    -->  'F'

Write a javascript function that accepts a score number and outputs a Grade based on the score using the Grading system above. (Please use a switch case to attempt this)
*/
function myGrad(score) {
  var gscore;

  switch(true) {
    case (score <= 100 && score >= 90):
       gscore = 'A';
        break;
    case (score <= 89 && score >= 80):
        gscore = 'B';
         break;
    case (score <= 79 && score >= 70):
        gscore = 'C';
         break;
       case (score <= 69 && score >= 60):
        gscore = 'D';
         break;
    case (score <= 59 && score >= 0):
        gscore = 'F';
        break;

    case (score > 100 && score < 0):
        gscore = 'Nill';
        break; 

    default:
      return 'INVALID SCORE';
}

  return gscore;
}
var output = ("myGrad", myGrad(91));
console.log(output);


/**6. Check out the array from this link
https://gist.github.com/allindeveloper/d5ba3e03d00a19b01549386c75524b94
Copy the array to your code editor, then write a function that accepts a state code as an argument,
your function should check through the states... if the code exists in the array, your function should 
return the corresponding code and state name as an object, if the code does not exist, your function should return 
"State with the following code ${code} does not exist"
[
  {
    "code": "FC",
    "name": "Abuja"
  },
  {
    "code": "AB",
    "name": "Abia"
  },
  {
    "code": "AD",
    "name": "Adamawa"
  },
  {
    "code": "AK",
    "name": "AkwaIbom"
  },
  {
    "code": "AN",
    "name": "Anambra"
  },
  {
    "code": "BA",
    "name": "Bauchi"
  },
  {
    "code": "BY",
    "name": "Bayelsa"
  },
  {
    "code": "BE",
    "name": "Benue"
  },
  {
    "code": "BO",
    "name": "Borno"
  },
  {
    "code": "CR",
    "name": "CrossRiver"
  },
  {
    "code": "DE",
    "name": "Delta"
  },
  {
    "code": "EB",
    "name": "Ebonyi"
  },
  {
    "code": "ED",
    "name": "Edo"
  },
  {
    "code": "EK",
    "name": "Ekiti"
  },
  {
    "code": "EN",
    "name": "Enugu"
  },
  {
    "code": "GO",
    "name": "Gombe"
  },
  {
    "code": "IM",
    "name": "Imo"
  },
  {
    "code": "JI",
    "name": "Jigawa"
  },
  {
    "code": "KD",
    "name": "Kaduna"
  },
  {
    "code": "KN",
    "name": "Kano"
  },
  {
    "code": "KT",
    "name": "Katsina"
  },
  {
    "code": "KE",
    "name": "Kebbi"
  },
  {
    "code": "KO",
    "name": "Kogi"
  },
  {
    "code": "KW",
    "name": "Kwara"
  },
  {
    "code": "LA",
    "name": "Lagos"
  },
  {
    "code": "NA",
    "name": "Nassarawa"
  },
  {
    "code": "NI",
    "name": "Niger"
  },
  {
    "code": "OG",
    "name": "Ogun"
  },
  {
    "code": "ON",
    "name": "Ondo"
  },
  {
    "code": "OS",
    "name": "Osun"
  },
  {
    "code": "OY",
    "name": "Oyo"
  },
  {
    "code": "PL",
    "name": "Plateau"
  },
  {
    "code": "RI",
    "name": "Rivers"
  },
  {
    "code": "SO",
    "name": "Sokoto"
  },
  {
    "code": "TA",
    "name": "Taraba"
  },
  {
    "code": "YO",
    "name": "Yobe"
  },
  {
    "code": "ZA",
    "name": "Zamfara"
  }
]
*/