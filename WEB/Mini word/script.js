// Récupérer les éléments du DOM
const colorPicker = document.getElementById('colorPicker');
const fontSizeInput = document.getElementById('fontSize');
const fontFamilySelect = document.getElementById('fontFamily');
const editableParagraph = document.getElementById('editableParagraph');

// Fonction pour changer la couleur du texte
function changeTextColor() {
    editableParagraph.style.color = colorPicker.value;
}

// Fonction pour changer la taille de la police
function changeFontSize() {
    editableParagraph.style.fontSize = `${fontSizeInput.value}px`;
}

// Fonction pour changer la police d'écriture
function changeFontFamily() {
    editableParagraph.style.fontFamily = fontFamilySelect.value;
}

// Ajouter des écouteurs d'événements
colorPicker.addEventListener('input', changeTextColor);
fontSizeInput.addEventListener('input', changeFontSize);
fontFamilySelect.addEventListener('change', changeFontFamily);