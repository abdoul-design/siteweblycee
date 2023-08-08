// Script pour ajouter une classe "active" au lien de navigation correspondant à la page en cours
var navLinks = document.querySelectorAll("nav ul li a");
for (var i = 0; i < navLinks.length; i++) {
	if (navLinks[i].href === window.location.href) {
		navLinks[i].classList.add("active");
		break;
	}
}

// Sélectionnez les éléments du menu de navigation
const navItems = document.querySelectorAll('nav ul li');

// Ajoutez des écouteurs d'événements pour le survol de la souris
navItems.forEach((item) => {
  item.addEventListener('mouseover', (event) => {
    const menuItem = event.target;
    const sectionName = menuItem.textContent.trim().toLowerCase();

    // Vérifiez la section et affichez les informations correspondantes
    switch (Headers) {
      case 'accueil':
        showInfo('Informations sur l\'accueil');
        break;
      case 'parcours':
        showInfo('Informations sur les parcours');
        break;
      case 'admission':
        showInfo('Informations sur l\'admission');
        break;
      case 'galerie':
        showInfo('Informations sur la galerie');
        break;
      default:
        showInfo('Aucune information disponible');
    }
  });
});

// Fonction pour afficher les informations dans une fenêtre modale
function showInfo(info) {
  // Créez une fenêtre modale
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.textContent = info;

  // Ajoutez la fenêtre modale à la page
  document.body.appendChild(modal);

  // Ajoutez un écouteur d'événement pour fermer la fenêtre modale
  modal.addEventListener('click', () => {
    modal.remove();
  });
}

// Exemple d'effet de mouvement sur les liens du menu de navigation
const navLinks = document.querySelectorAll('nav ul li');

navLinks.forEach(function (link) {
  link.addEventListener('mouseover', () => {
    link.style.color = '#ff0000';
  });

  link.addEventListener('mouseout', () => {
    link.style.color = '#333';
  });
});