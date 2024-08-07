var myQuestions = [
    {
      question: "1. Round \\({45,786,800}\\) to the nearest ten thousand.",
      answers: {
        a: '\\({45,786,000}\\) <br>',
        b: '\\({45,787,800}\\) <br>',
        c: '\\({45,787,000}\\) <br>',
        d: '\\({45,790,000}\\)'
      },
      correctAnswer: 'd'
    },
   
    {
      question: "<h4>2. A car is traveling at an average speed of  \\({56.8}\\) miles per hour. The destination is \\({175}\\) miles away. Round the average speed and distance to the nearest tens. Then, estimate the number of hours, rounded to the nearest whole number, needed to reach the destination. </h4> <img src='images/car.png' width='250' height='150'>",
      answers: {
        a: '2 <br>',
        b: '3<br>',
        c: '3.0 <br>',
        d: '2.0'
  
      },
      correctAnswer: 'b'
    },

    {
      question: "3. Round \\({1,845,983}\\) to the nearest hundred.",
      answers: {
        a: '\\({1,846,000}\\) <br>',
        b: '\\({1,840,000}\\) <br>',
        c: '\\({1,845,000}\\) <br>',
        d: '\\({1,850,000}\\)'
      },
      correctAnswer: 'a'
    },

    {
      question: "4. The whole number \\({687,219,043}\\) becomes \\({690,000,000}\\) when rounded to the nearest _____________.",
      answers: {
        a: 'million<br>',
        b: 'hundred thousand <br>',
        c: 'ten million<br>',
        d: 'ten thousand'
      },
      correctAnswer: 'c'
    },

      {
        question: "5. The whole number \\({819,965,536}\\) becomes \\({820,000,000}\\) when rounded to any of the following except to the nearest _____________.",
        answers: {
          a: 'ten thousand<br>',
          b: 'hundred thousand<br>',
          c: 'million<br>',
          d: 'ten million'
        },
        correctAnswer: 'a'
      },

      {
        question: "6. Express \\({7.05784}\\) to the nearest hundredth.",
        answers: {
          a: '\\({7.60}\\) <br>',
          b: '\\({7.50}\\) <br>',
          c: '\\({7.07}\\) <br>',
          d: '\\({7.06}\\)'
        },
        correctAnswer: 'd'
      },
      {
        question: "7. Round \\({4.15637}\\) to the nearest thousandth.",
        answers: {
          a: '\\({4.157}\\) <br>',
          b: '\\({4.1563}\\) <br>',
          c: '\\({4.156}\\) <br>',
          d: '\\({4.150}\\)'
        },
        correctAnswer: 'c'
      },
      {
        question: "8. Round \\({98,156.98156}\\) to the nearest ten-thousandth.",
        answers: {
          a: '\\({98,156.9815}\\) <br>',
          b: '\\({98,156.9816}\\) <br>',
          c: '\\({100,000}\\) <br>',
          d: '\\({98,156,98156}\\)'
        },
        correctAnswer: 'b'
      },
    {
      question: "9. Round \\({98,156.98156}\\) to the nearest ten thousand.",
      answers: {
        a: '\\({98,156.9815}\\) <br>',
        b: '\\({98,156.9816}\\) <br>',
        c: '\\({100,000}\\) <br>',
        d: '\\({98,156,98156}\\)'
      },
      correctAnswer: 'c'
    },
      
    {
      question: "10. Which of the following decimal numbers is rounded to the nearest hundred thousandth?",
      answers: {
        a: '\\({6.8093}\\) <br>',
        b: '\\({6.809}\\) <br>',
        c: '\\({6.81}\\) <br>',
        d: '\\({6.80935}\\)'
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