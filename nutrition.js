(function(){
  function buildQuiz(){
    const output = [];
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {
        const answers = [];
        for(letter in currentQuestion.answers){
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
        output.push(
          `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
          </div>`
        );
      }
    );
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;
    myQuestions.forEach( (currentQuestion, questionNumber) => {
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
      if(userAnswer === currentQuestion.correctAnswer){
        numCorrect++;
        answerContainers[questionNumber].style.color ='light green'
      }
      else{
        answerContainers[questionNumber].style.color ='red'
      }
    });
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
      previousButton.style.display = 'none';
    }
    else{
      previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    }
    else{
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "What is a complex carbohydrate that is found in plants which helprs prevent constipation among other benefits?",
      answers: {
        a: "Plaque",
        b: "Vitamins",
        c: "Fiber",
        d: "Nutrient Dense"
      },
      correctAnswer: "c"
    },
    {
      question: "What is an excessive cholesterol stored in the body?",
      answers: {
        a: "Vitamins",
        b: "Fiber",
        c: "Minerals",
        d: "Plaque"
      },
      correctAnswer: "d"
    },
    {
      question: "What is Atherosclerosis?",
      answers: {
        a: "A type of cancer",
        b: "A mineral",
        c: "Inorganic element that aid in body processes",
        d: "A disease in the arteries from fatty material in the inner walls"
      },
      correctAnswer: "d"

    },
    {
      question: "What provides a variety of nutrients rather than only calories, sugar, and fat?",
      answers: {
        a: "Nutrient Dense",
        b: "Minerals",
        c: "Trans Fat",
        d: "Unsaturated Fats"
      },
      correctAnswer: "a"

    },
    {
      question: "What is a mineral?",
      answers: {
        a: "Vitamin Z",
        b: "Calories",
        c: "An indestructible element that aids in body processes",
        d: "A type of disease"
      },
      correctAnswer: "c"

    },
    {
      question: "What is derived mostly from plants, and are liquid at room temperature.",
      answers: {
        a: "Unsaturated Fat",
        b: "Vitamins",
        c: "Trans Fat",
        d: "Minerals"
      },
      correctAnswer: "a"

    },
    {
      question: "What are Water-Soulable Vitamins",
      answers: {
        a: "Vitamins D, E, A, K",
        b: "Excess cholesterol, saturated fat, & trans fat",
        c: "Essential organic compounds that promote growth, reproduction, and help maintain life and health.",
        d: "B Vitamins & Vitamin C"
      },
      correctAnswer: "c"

    },
    {
      question: "What is the definition of Fat-Soulable Vitamins?",
      answers: {
        a: "B Vitamins & Vitamin C",
        b: "Derived mostly from plants, and are liquid at room temperature",
        c: "Vitamins D, E, A, K",
        d: "Inorganic, indestructible elements that aid in body processes."
      },
      correctAnswer: "c"

    },
    {
      question: "Produced when manufacturers turn liquid oils into solid fat (in order to increase shelf-life)?",
      answers: {
        a: "Unsaturated Fat",
        b: "Trans Fat",
        c: "Fat-Soluble Vitamins",
        d: "Water-Soluble Vitamins"
      },
      correctAnswer: "b"

    },
    {
      question: "What is the definition of Vitamins?",
      answers: {
        a: "Essential organic compounds that promote growth, reproduction, and help maintain life and health.",
        b: "Inorganic, indestructible elements that aid in body processes.",
        c: "Derived mostly from plants, and are liquid at room temperature.",
        d: "Produced when manufacturers turn liquid oils into solid fat (in order to increase shelf-life)"
      },
      correctAnswer: "a"

    },
  ];
  buildQuiz();
  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;
  showSlide(currentSlide);
  submitButton.addEventListener('click', showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();