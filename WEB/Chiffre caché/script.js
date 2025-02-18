document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startButton');
    const gameArea = document.getElementById('gameArea');
    const message = document.getElementById('message');
    const guessInput = document.getElementById('guessInput');
    const submitGuess = document.getElementById('submitGuess');
    const attemptsDisplay = document.getElementById('attempts');
    const replayButton = document.getElementById('replayButton');

    let nombreAleatoire;
    let tentativeRestantes;
    let parametres;

    startButton.addEventListener('click', () => {
        const niveau = prompt("Choisissez le niveau de difficulté (facile, intermediaire, difficile):").toLowerCase();
        parametres = obtenirParametresDifficulte(niveau);
        nombreAleatoire = genererNombreAleatoire(parametres.min, parametres.max);
        tentativeRestantes = parametres.tentatives;

        gameArea.classList.remove('hidden');
        startButton.classList.add('hidden');
        message.textContent = `Devinez le nombre entre ${parametres.min} et ${parametres.max}.`;
        attemptsDisplay.textContent = `Tentatives restantes: ${tentativeRestantes}`;
    });

    submitGuess.addEventListener('click', () => {
        const devinette = parseInt(guessInput.value);

        if (devinette === nombreAleatoire) {
            message.textContent = "Félicitations ! Vous avez trouvé le nombre !";
            finDePartie();
        } else if (devinette < nombreAleatoire) {
            message.textContent = "Trop bas !";
        } else {
            message.textContent = "Trop haut !";
        }

        tentativeRestantes--;
        attemptsDisplay.textContent = `Tentatives restantes: ${tentativeRestantes}`;

        if (tentativeRestantes === 0) {
            message.textContent = `Désolé, vous n'avez plus de tentatives. Le nombre était ${nombreAleatoire}.`;
            finDePartie();
        }

        guessInput.value = '';
    });

    replayButton.addEventListener('click', () => {
        gameArea.classList.add('hidden');
        replayButton.classList.add('hidden');
        startButton.classList.remove('hidden');
    });

    function finDePartie() {
        submitGuess.disabled = true;
        replayButton.classList.remove('hidden');
    }

    function genererNombreAleatoire(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function obtenirParametresDifficulte(niveau) {
        switch (niveau) {
            case 'facile':
                return { tentatives: 10, min: 1, max: 50 };
            case 'intermediaire':
                return { tentatives: 7, min: 1, max: 100 };
            case 'difficile':
                return { tentatives: 5, min: 1, max: 200 };
            default:
                return { tentatives: 10, min: 1, max: 50 }; // Par défaut, facile
        }
    }
});