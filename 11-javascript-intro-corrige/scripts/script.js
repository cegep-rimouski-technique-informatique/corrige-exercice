//1. Un programme qui imprime les nombres de 1 à 100. Mais pour les multiples de trois,
// écrivez Fizz au lieu du nombre, et pour les multiples de cinq, écrivez Buzz.
// Pour les nombres qui sont des multiples de trois et de cinq, écrivez FizzBuzz.

function fizzBuzz() {
  for (var i = 1; i < 101; i++) {
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
  }
}

function fizzBuzz2() {
  for (let i = 1; i < 101;) console.log((i++ % 3 ? '' : 'fizz') + (i % 5 ? '' : 'buzz') || i);
}

//2. Une fonction qui vérifie si un mot est un palindrome.

function renverser(mot) {
  return mot.split("").reverse().join("");
}

function estPalindrome(mot) {
  return mot === renverser(mot)
}

estPalindrome("allo")

//3. Une fonction qui retourne le nombre `x` de la série de Fibonacci.

function fibonacci(x) {
  if (x <= 1) {
    return x;
  } else {
    return fibonacci(x - 1) + fibonacci(x - 2);
  }
}

function fibonacci2(x) {
  let nb1 = 0;
  let nb2 = 1;
  for (let i=0; i<x; i++) {
    let temp = nb1 + nb2;
    nb1 = nb2;
    nb2 = temp;
  }
  return nb1;
}

//4. Un programme qui calcule le nombre de jours entre deux dates. (Vous pouvez rajouter des entrées d'utilisateur)

function calculDate(debut, fin) {
  let diffSeconde = fin.getTime() - debut.getTime();
  let diffJour = diffSeconde / (1000 * 60 * 60 * 24);
  return diffJour;
}

//5. **Défis!** Une fonction qui reverse les mots dans une phrase, mais garde la ponctuation.

function estUneLettre(a) {
  return (a >= "a" && a <= "z") || (a >= "A" && a <= "Z");
}

function inverserPhrase(phrase) {
  let y = 0;
  for (let i = 0; i < phrase.length; i++) {
    if (!estUneLettre(phrase[i])) {
      let mot = phrase.substring(y, i);
      let motinverse = renverser(mot);

      phrase = phrase.replace(mot, motinverse);
      for (; i < phrase.length; i++) {
        if (estUneLettre(phrase[i])) {
          y = i;
          break;
        }
      }
    }
  }

  console.log(phrase);
}

inverserPhrase("allo! oui?");

//6. Programmez les classes du diagramme suivant.

class Ferme {
  adresse;
  animals = [];
}

class Animal {
  nom;
  #nbPattes;

  constructor(nom, nbPattes) {
    this.nom = nom;
    this.#nbPattes = nbPattes;
  }

  manger() {
    console.log(`${this.nom} mange beaucoup`);
  }

  cris() {
    throw new Error('Méthode abstraite');
  }
}

class Poulet extends Animal {
  cris() {
    console.log('Cocorico');
  }
}

class Vache extends Animal {
  cris() {
    console.log('Meuh');
  }
}

let vache = new Vache("pico", 4);
