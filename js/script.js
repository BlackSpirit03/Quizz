// Fichier de Script associé à QUIZ

// Déclaration des variables et initialisation
var solutions = [true,false,false,false,false,true,true,false,false,false,false,true,false,true,false];
var casesCochees = document.getElementsByClassName('custom-control-input');
var labelcasescochees = document.getElementsByClassName('custom-control-description');

document.getElementById('affichage').style.visibility = 'hidden';

function resetall() // Fonction de reset des cases cochées par l'utilisateur
{
	var casesCochees = document.getElementsByClassName('custom-control-input');

	document.getElementById('affichage').style.visibility = 'hidden';
	document.getElementById('boutonValider').style.visibility = 'visible';

	for (var i = 0; i < casesCochees.length; i++) {
		casesCochees[i].checked = false;
		labelcasescochees[i].style.color = "#000000";
		labelcasescochees[i].style.backgroundColor = '#FFFFFF';
	}
}

function valideall() // Fonction de calcul du score
{

	var resultats = 0
	var casescochees = document.getElementsByClassName('custom-control-input');

	for (var i = 0; i < casescochees.length; i++) {

		if ((casescochees[i].checked == solutions[i]) && casescochees[i].checked) {
			
			labelcasescochees[i].style.backgroundColor = '#28A745';
			resultats++; // incrémente les résultats
			
			} else {

				if (casescochees[i].checked) {
					labelcasescochees[i].style.color = "#FFFFFF";
					labelcasescochees[i].style.backgroundColor = '#DC3545';
				}
				
			}

	}

	afficheScore(resultats);
}


function afficheScore(points) // Fonction d'affichage du score
{
	var stringScore = "Votre Score : " + points + " points";
	document.getElementById('boutonValider').style.visibility = 'hidden';
	var test = document.getElementById('boutonReset');
	console.log(test);
	document.getElementById('boutonReset').innerText = 'Rejouer';
	document.getElementById('affichage').style.visibility = 'visible';
	document.getElementById('affichage').innerText = stringScore;
	// alert(stringScore);
}