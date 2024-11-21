let imageIndex = 36;
// Fonction pour mélanger les questions de manière aléatoire
function shuffleQuestions(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
// Sélectionner la div .col2
const col2 = document.querySelector('.row2 .col2');

// Fonction pour ajouter 35 éléments à la grille
function createGridItems() {
    for (let i = 0; i < imageIndex; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');

        // Ajouter l'image à chaque div
        const img = document.createElement('img');
        img.src = `src/image/yazakiLogo.png`; // Assurez-vous que le chemin est correct
        img.alt = `${i}`;
        img.dataset.index = i;

        // Ajouter l'image dans la div
        gridItem.appendChild(img);
        
        // Ajouter l'élément à la grille
        col2.appendChild(gridItem);
    }
}


let shuffledQuestions = shuffleQuestions([...questions]); // Dupliquer et mélanger les questions
let currentQuestionIndex = 0;
let score = 0;
let totalTime = 600; // 10 minutes en secondes
let timerInterval;

// Charger les effets sonores
const soundCorrect = document.getElementById("sound-correct");
const soundIncorrect = document.getElementById("sound-incorrect");
const soundFlip = document.getElementById("sound-flip");

const popupOverlay = document.getElementById("popup-overlay");
const popupScore = document.getElementById("popup-score");
const popupTime = document.getElementById("popup-time");
const closePopupBtn = document.getElementById("close-popup");
const cardContainer = document.getElementById("card-container");
const feedback = document.getElementById("feedback");

// Fonction pour démarrer le chronomètre global de 10 minutes
function startGlobalTimer() {
    const timeElement = document.getElementById("time");
    updateTimerDisplay(totalTime);

    timerInterval = setInterval(() => {
        totalTime--;
        updateTimerDisplay(totalTime);

        if (totalTime <= 0) {
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000);
}

// Fonction pour mettre à jour l'affichage du chronomètre
function updateTimerDisplay(seconds) {
    const timeElement = document.getElementById("time");
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    timeElement.textContent = `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

// Fonction pour charger une question
function loadQuestion(index) {
    if (index >= shuffledQuestions.length) {
        endQuiz();  // Fin du quiz quand toutes les questions ont été répondues
        return;
    }

    const questionElement = document.getElementById("question-text");
    const answersContainer = document.getElementById("answers-container");
    const questionTitle = document.getElementById("question-title");
    const logoElement = document.getElementById("question-image");

    const currentQuestion = shuffledQuestions[index];
    questionElement.textContent = currentQuestion.question;
    questionTitle.textContent = `Question ${index + 1}`;
    answersContainer.innerHTML = "";  // Clear previous answers

    currentQuestion.answers.forEach((answer, i) => {
        const answerElement = document.createElement("div");
        answerElement.classList.add("answer");
        answerElement.textContent = answer;
        answerElement.onclick = () => checkAnswer(i);
        answersContainer.appendChild(answerElement);
    });  

    // Réinitialiser l'effet clignotant pour toutes les images
    const allImages = document.querySelectorAll('.row2 .col2 img');
    allImages.forEach(img => {
        img.parentElement.classList.remove('blink');
    });
    // Ajouter l'effet clignotant à l'image correspondante au photoIndex
    const imageToBlink = document.querySelector(`.row2 .col2 img[data-index="${currentQuestion.photoIndex}"]`);
    if (imageToBlink) {
        imageToBlink.parentElement.classList.add("blink");
        imageToBlink.parentElement.classList.add("clickedflash");
        imageToBlink.src = `src/image/${currentQuestion.photoIndex}.png`;
    }
    // Charger l'image associée à la question
    logoElement.src = `src/image/${currentQuestion.photoIndex}.png`;


}

// Fonction pour vérifier la réponse sélectionnée
function checkAnswer(selectedIndex) {
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    const isCorrect = selectedIndex === currentQuestion.correctAnswer;

    const answersContainer = document.getElementById("answers-container");
    const answerElements = answersContainer.children;
    //masquecard
    // Afficher le résultat (correct ou incorrect)
    if (isCorrect) {
        answerElements[selectedIndex].classList.add("correct");
        score++;
        soundCorrect.play();
    } else {
        answerElements[selectedIndex].classList.add("incorrect");
        soundIncorrect.play();
    }

    // Mise à jour du score
    document.getElementById("score").textContent = `${score}`;

    // Désactiver les clics sur les réponses après avoir sélectionné
    for (let i = 0; i < answerElements.length; i++) {
        answerElements[i].onclick = null;
    }

    // Jouer l'animation de retournement
    setTimeout(() => {
        cardContainer.classList.add("clicked");
        soundFlip.play();

        // Charger la prochaine question après l'animation
        setTimeout(() => {
            resetCard();
            currentQuestionIndex++;
            loadQuestion(currentQuestionIndex);
        }, 800);  // Temps d'animation
    }, 500);
}

// Réinitialiser l'animation de la carte après la réponse
function resetCard() {
    feedback.textContent = "";
    cardContainer.classList.remove("clicked");
}
function getmatricul() {
     // Récupérer l'URL actuelle
     const urlParams = new URLSearchParams(window.location.search);

     // Obtenir la valeur du paramètre "matricule"
     const matricule = urlParams.get('matricule');
     const gettime = urlParams.get('time');
     // Afficher le matricule dans le HTML
     if (matricule) {
         document.getElementById('display-matricule').textContent += matricule;
     } else {
         document.getElementById('display-matricule').textContent = 'Matricule introuvable';
     }
     if (gettime) {
        totalTime = gettime*60;
    }
}
// Fonction pour gérer la fin du quiz
function endQuiz() {
    const minutes = Math.floor(totalTime / 60);
    const secs = totalTime % 60;

    // Afficher les résultats dans le pop-up
    popupScore.textContent = `Votre score final est : ${score}`;
    const elapsedMinutes = Math.floor((600 - totalTime) / 60);
    const elapsedSeconds = (600 - totalTime) % 60;
    popupTime.textContent = `Temps écoulé : ${elapsedMinutes}:${elapsedSeconds < 10 ? '0' + elapsedSeconds : elapsedSeconds}`;


    // Afficher le modal
    popupOverlay.style.display = 'flex';
}

// Gérer la fermeture du modal
    closePopupBtn.onclick = function() {
    popupOverlay.style.display = 'none';
    window.location.href = `index.html`;
};
    getmatricul();
    setTimeout(() => {
        createGridItems();
        setTimeout(() => {
            cardContainer.classList.remove("masquecard");      
            loadQuestion(currentQuestionIndex);
        }, 1000);  // Temps d'animation
    }, 1500);
    async function playSound() {
        try {
          await soundFlip.play();
        } catch (error) {
          console.error('Lecture échouée :', error);
        }
      }
      
      document.addEventListener('click', playSound);
// Appeler la fonction pour créer la grille
startGlobalTimer();