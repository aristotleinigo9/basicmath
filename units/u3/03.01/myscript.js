var myQuestions = [
    {
      question: "1. What is \\({108}\\) in the mathematical statement \\({12}&times{9}={108}\\)?",
      answers: {
        a: 'product<br>',
        b: 'quotient<br>',
        c: 'dividend<br>',
        d: 'divisor'
  
      },
      correctAnswer: 'a'
    },
   
    {
      question: "2. What is \\({108}\\) in the mathematical statement \\({108}&divide{12}={9}\\)?",
      answers: {
        a: 'product<br>',
        b: 'quotient<br>',
        c: 'dividend<br>',
        d: 'divisor'
  
      },
      correctAnswer: 'c'
    },

    {
      question: "3. What is \\({12}\\) in the mathematical statement \\({108}&divide{12}={9}\\)?",
      answers: {
        a: 'product<br>',
        b: 'quotient<br>',
        c: 'dividend<br>',
        d: 'divisor'
  
      },
      correctAnswer: 'd'
    },

    {
      question: "4. What is \\({9}\\) in the mathematical statement \\({108}&divide{12}={9}\\)?",
      answers: {
        a: 'product<br>',
        b: 'quotient<br>',
        c: 'dividend<br>',
        d: 'divisor'
  
      },
      correctAnswer: 'b'
    },

    {
      question: "5. Which number must be multiplied by \\({83}\\) to get \\({6,557}\\)?",
      answers: {
        a: '\\({69}\\)<br>',
        b: '\\({59}\\)<br>',
        c: '\\({89}\\)<br>',
        d: '\\({79}\\)'
  
      },
      correctAnswer: 'd'
    },
   
    {
      question: "<h4>6. What is the total cost to pay for \\({64}~L\\) of Gasoline 95 given the price list below?</h4> <img src='images/petrol.png' width='250' height='200'>",
      answers: {
        a: '\\({SR}~{139.52}\\) <br>',
        b: '\\({SR}~{139.12}\\)<br>',
        c: '\\({SR}~{149.12}\\)<br>',
        d: '\\({SR}~{149.52}\\)'
  
      },
      correctAnswer: 'c'
    },

    {
      question: "7. When a number is divided by \\({6}\\), the remainder is \\({3}\\). When the same number is divided by \\({7}\\), the remainder is \\({5}\\). Which of the following numbers satisfies the given conditions?",
      answers: {
        a: '\\({33}\\) <br>',
        b: '\\({55}\\) <br>',
        c: '\\({63}\\) <br>',
        d: '\\({35}\\)'
      },
      correctAnswer: 'a'
    },

    {
      question: "8. What is the quotient of \\({45.8}\\) divided by \\({5.2}\\) rounded to the nearest thoudandths?",
      answers: {
        a: '\\({8.806}\\) <br>',
        b: '\\({8.808}\\) <br>',
        c: '\\({8.807}\\) <br>',
        d: '\\({8.809}\\)'
      },
      correctAnswer: 'b'
    },

    {
      question: "9. Find the total cost of \\({2.4}~{kg}\\) of dates if a kilogram costs \\({SR}~{126.95}\\).",
      answers: {
        a: '\\({SR}~{303.82}\\) <br>',
        b: '\\({SR}~{308.32}\\) <br>',
        c: '\\({SR}~{306.86}\\) <br>',
        d: '\\({SR}~{304.68}\\)'
      },
      correctAnswer: 'd'
    },

    {
      question: "10. What is the car's fuel tank capacity, rounded to the nearest \\({Liters}\\), if \\({SR}~{76.00}\\) is the total cost paid in the petrol station and if the price per \\({Liter}\\) is \\({SR}~{2.18}\\)?",
      answers: {
        a: '\\({34}~{Liters}\\) <br>',
        b: '\\({34.86}~{Liters}\\) <br>',
        c: '\\({35}~{Liters}\\) <br>',
        d: '\\({34.9}~{Liters}\\)'
      },
      correctAnswer: 'c'
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