var myQuestions = [
    {
      question: "1. Which set contains \\({prime}~{numbers}\\) less than \\({20}\\)?",
    answers: {
      a: '\{2,4,6,8,10,12,14,16,18\}<br>',
      b: '\{1,3,5,7,9,11,13,15,17,19\}<br>',
      c: '\{2,3,5,7,11,13,17,19\}<br>',
      d: '\{1,2,3,5,7,11,13,17,19\}'
      },
      correctAnswer: 'c'
    },
   
    {
      question: "2. What is the \\({prime}~{factorization}\\) of \\({36}\\)?",
      answers: {
        a: '\\({4}\\times\{9}\\)<br>',
        b: '\\({2}\\times\{2}\\times\{3}\\times\{3}\\)<br>',
        c: '\\({2}\\times\{18}\\)<br>',
        d: '\\({3}\\times\{6}\\times\{2}\\)'
        },
      correctAnswer: 'b'
    },

    {
      question: "3. What is the \\({prime}~{factorization}\\) of \\({24}\\)?",
      answers: {
        a: '\\({2}\\times\{12}\\)<br>',
        b: '\\({1}\\times\{2}\\times\{4}\\times\{3}\\)<br>',
        c: '\\({6}\\times\{4}\\)<br>',
        d: '\\({2}\\times\{2}\\times\{2}\\times\{3}\\)'
        },
      correctAnswer: 'd'
    },

    {
      question: "4. What is the \\({greatest}~{common}~{factor}~(GCF)\\) of \\({24}\\) and \\({36}\\)?",
      answers: {
        a: '\\({12}\\) <br>',
        b: '\\({6}\\) <br>',
        c: '\\({96}\\) <br>',
        d: '\\({72}\\)'
      },
      correctAnswer: 'a'
    },

    {
      question: "5. What is the \\({least}~{common}~{denominator}~(LCD)\\) of \\({5\\over 24}\\) and \\({7\\over 36}\\)?",
      answers: {
        a: '\\({12}\\) <br>',
        b: '\\({6}\\) <br>',
        c: '\\({96}\\) <br>',
        d: '\\({72}\\)'
      },
      correctAnswer: 'd'
    },

    {
      question: "6. What is the \\({prime}~{factorization}\\) of \\({243}\\)?",
      answers: {
        a: '\\({81}\\times\{3}\\)<br>',
        b: '\\({3}\\times\{3}\\times\{3}\\times\{3}\\times\{3}\\times\{3}\\)<br>',
        c: '\\({3}\\times\{3}\\times\{3}\\times\{3}\\times\{3}\\)<br>',
        d: '\\({9}\\times\{3}\\times\{18}\\)'
        },
      correctAnswer: 'c'
    },

    {
      question: "7. What is the \\({prime}~{factorization}\\) of \\({405}\\)?",
      answers: {
        a: '\\({27}\\times\{3}\\times\{5}\\)<br>',
        b: '\\({3}\\times\{3}\\times\{3}\\times\{3}\\times\{5}\\)<br>',
        c: '\\({1}\\times\{3}\\times\{3}\\times\{5}\\times\{9}\\)<br>',
        d: '\\({15}\\times\{9}\\times\{3}\\)'
        },
      correctAnswer: 'b'
    },

    {
      question: "8. What is the \\({greatest}~{common}~{factor}~(GCF)\\) of \\({243}\\) and \\({405}\\)?",
      answers: {
        a: '\\({1,215}\\) <br>',
        b: '\\({27}\\) <br>',
        c: '\\({108}\\) <br>',
        d: '\\({81}\\)'
      },
      correctAnswer: 'd'
    },

    {
      question: "9. What is the \\({least}~{common}~{denominator}~(LCD)\\) of \\({7\\over 243}\\) and \\({11\\over 405}\\)?",
      answers: {
        a: '\\({1,215}\\) <br>',
        b: '\\({27}\\) <br>',
        c: '\\({108}\\) <br>',
        d: '\\({81}\\)'
      },
      correctAnswer: 'a'
    },


    {
      question: "<h4>10. What is the reading below in \\({inches}\\)?</h4> <img src='images/decimal_in.png' width='500' height='250'>",
      answers: {
        a: '\\(1.1250~{inches}\\)<br>',
        b: '\\(1.8750~{inches}\\)<br>',
        c: '\\(1.4375~{inches}\\)<br>',
        d: '\\(1.7000~{inches}\\)'
  
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