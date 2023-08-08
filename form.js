// Fonction pour valider le formulaire
function validerFormulaire() {
    // Récupérer les champs du formulaire
    var nom = document.getElementById('nom').value;
    var prenom = document.getElementById('prenom').value;
    var email = document.getElementById('email').value;
    var telephone = document.getElementById('telephone').value;
    var niveau = document.getElementById('niveau').value;
    
    // Effectuer les validations
    if (nom === '' || prenom === '' || email === '' || telephone === '' || niveau === '') {
      alert('Veuillez remplir tous les champs obligatoires.');
      return false;
    }
    
    return true;
  }
  
  // Attacher la fonction de validation au formulaire
  var formulaire = document.getElementById('formulaire');
  formulaire.addEventListener('submit', function(event) {
    if (!validerFormulaire()) {
      event.preventDefault(); // Empêcher la soumission du formulaire si la validation échoue
    }
  });
  