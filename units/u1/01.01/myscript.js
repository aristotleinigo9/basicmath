var myQuestions = [
    {
      question: "1. What is the place value of  \\({9}\\) in \\({15,928}\\)?",
      answers: {
        a: 'ones <br>',
        b: 'tens <br>',
        c: 'hundreds <br>',
        d: 'thousands'
      },
      correctAnswer: 'c'
    },
   
    {
      question: "<h4>2. There are \\({45}~{738}\\) fans at a football match. What is the place value of  \\({5}\\) in \\({45}~{738}\\)? </h4> <img src='images/football.png' width='125' height='150'>",
      answers: {
        a: 'tens <br>',
        b: 'ten thousands <br>',
        c: 'hundreds <br>',
        d: 'thousands'
  
      },
      correctAnswer: 'd'
    },

    {
        question: "3. A certain country has a population of  \\({98.07}~{million}\\). What is the place value of \\({7}\\)?",
        answers: {
          a: 'millions <br>',
          b: 'ten thousands <br>',
          c: 'ten millions<br>',
          d: 'hundred thousands'
        },
        correctAnswer: 'b'
      },

      {
        question: "4. An oil rig produces \\({670}~{000}\\) barrels per day (bpd). The production is _________ million bpd.",
        answers: {
          a: '\\({0.670}\\) <br>',
          b: '\\({670}\\) <br>',
          c: '\\({67.0}\\)<br>',
          d: '\\({0.067}\\)'
        },
        correctAnswer: 'a'
      },

      {
        question: "5. The world population at a certain time was \\({8,110,080,941}\\). What are the place values of the \\({0s}\\).",
        answers: {
          a: 'ten thousands, hundred thousands, ten millions<br>',
          b: 'thousands, ten thousands, millions <br>',
          c: 'thousands, hundred thousands, millions<br>',
          d: 'ten thousdands, millions, billions'
        },
        correctAnswer: 'c'
      },

      {
        question: "6. What is the place value of  \\({3}\\) in \\({19.3754}\\)?",
        answers: {
          a: 'tenths <br>',
          b: 'hundredths <br>',
          c: 'hundreds<br>',
          d: 'tens'
        },
        correctAnswer: 'a'
      },

      {
        question: "7. Which digit has a place value of thousandths in \\({4732.1809}\\)?",
        answers: {
          a: '\\({4}\\) <br>',
          b: '\\({7}\\) <br>',
          c: '\\({8}\\)<br>',
          d: '\\({0}\\)'
        },
        correctAnswer: 'd'
      },
      {
        question: "8. Which digit has a place value of thousands in \\({4732.1809}\\)?",
        answers: {
          a: '\\({4}\\) <br>',
          b: '\\({7}\\) <br>',
          c: '\\({8}\\)<br>',
          d: '\\({0}\\)'
        },
        correctAnswer: 'a'
      },

      {
        question: "9. What is the place value of  \\({0}\\) in \\({0.9873}\\)?",
        answers: {
          a: 'tens <br>',
          b: 'ones <br>',
          c: 'tenths<br>',
          d: 'hundredths'
        },
        correctAnswer: 'b'
      },
      
      {
      question: "10. What is the place value of  \\({1}\\) in \\({0.00001}\\)?",
        answers: {
          a: 'hundredths <br>',
          b: 'thousandths <br>',
          c: 'ten thousandths<br>',
          d: 'hundred thousandths'
        },
        correctAnswer: 'd'
      },
  
  
  ];
  
  var quizContainer = document.getElementById('quiz');
  var resultsContainer = document.getElementById('results');
  var submitButton = document.getElementById('submit');
  
  generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
  
  function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
  
    function showQuestions(questions, quizContainer){
      var output = [];
      var answers;
      for(var i=0; i<questions.length; i++){
        answers = [];
        for(choices in questions[i].answers){
  
          answers.push(
            '<label>'
              + '<input type="radio" name="question'+i+'" value="'+choices+'">'+ choices + '. '+ questions[i].answers[choices] + 
              '</label>'
              +'<br>'
          );
  
        }
        output.push(
          '<div class="question">'  + questions[i].question + '</div>' + '<div class="answers">'  + answers.join('') + '<br>' + '</div>'
        );
      }
      quizContainer.innerHTML = output.join('');
  
    }
  
  
    function showResults(questions, quizContainer, resultsContainer){
      var answerContainers = quizContainer.querySelectorAll('.answers');
      var userAnswer = '';
      var numCorrect = 0;
    
      for(var i=0; i<questions.length; i++){
  
        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
        if(userAnswer===questions[i].correctAnswer){
  
          numCorrect++;
          answerContainers[i].style.color = 'green';
        }
        else{
          answerContainers[i].style.color = 'red';
        }
      }
      resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length + " or " + (numCorrect/questions.length * 100).toFixed(2) + "%";
    }
  
  
    showQuestions(questions, quizContainer);
    
    submitButton.onclick = function(){
      showResults(questions, quizContainer, resultsContainer);
    }
  
  }