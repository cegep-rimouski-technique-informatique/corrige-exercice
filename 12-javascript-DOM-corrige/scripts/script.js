// 1. Dessinez le modèle par arborescence du DOM (Document Object Model) de index.html


// Éxecuter le Javascript après la création du DOM
window.onload = () => {
  // 2. Remplacez le texte du titre par "DOMaine des Arbres"
  
  let titre = document.getElementById('titre');
  titre.innerHTML = "DOMaine des Arbres";
  
  // 3. Changez l'ordre de présentation des images avec flex

  let container = document.getElementsByClassName("container");
  container[0].style["flex-direction"] = "column-reverse"

  // 4. Ajoutez le point "Terre" à la liste d'éléments (Défis: en troisième position)

  let nouveauLi = document.createElement("li");
  nouveauLi.appendChild(document.createTextNode("Terre"));
  document.getElementsByTagName("ul")[0].append(nouveauLi);

  // 5. Ajoutez l'attribut href manquant à la balise lien de l'image d'arbre.
  // avec la valeur  href="https://www.gardeningknowhow.com/wp-content/uploads/2017/07/hardwood-tree.jpg"
  // Avec le sélecteur suivant, utilisez un "accès par relation" pour faire votre modification.
  const imageSansLien = document.querySelectorAll(
    'img[src="https://www.gardeningknowhow.com/wp-content/uploads/2017/07/hardwood-tree.jpg"]'
  )[0];
  // code ici
  imageSansLien.parentElement.href = "https://www.gardeningknowhow.com/wp-content/uploads/2017/07/hardwood-tree.jpg";

  // 6. Modifiez la police du texte pour toutes les éléments de la liste

  let elemList = document.getElementsByTagName("li");

  for (const elem of elemList) {
    elem.style["font-family"] =  "Georgia, serif";
  }

};
