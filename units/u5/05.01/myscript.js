var myQuestions = [
    {
      question: "1. What is \\({16}\\) in \\({3\\over 16}\\)?",
    answers: {
      a: 'numerator<br>',
      b: 'denominator<br>',
      c: 'mixed numeral<br>',
      d: 'improper fraction'
      },
      correctAnswer: 'b'
    },
   
    {
      question: "2. What is \\({3}\\) in \\({3\\over 16}\\)?",
      answers: {
        a: 'numerator<br>',
        b: 'denominator<br>',
        c: 'mixed numeral<br>',
        d: 'improper fraction'
        },
      correctAnswer: 'a'
    },

    {
      question: "3. Classify \\(5{5\\over 12}\\).",
    answers: {
      a: 'numerator<br>',
      b: 'denominator<br>',
      c: 'mixed numeral<br>',
      d: 'improper fraction'
  
      },
      correctAnswer: 'c'
    },

    {
      question: "4. Classify \\({17\\over 13}\\).",
      answers: {
        a: 'numerator<br>',
        b: 'denominator<br>',
        c: 'mixed numeral<br>',
        d: 'improper fraction'
  
      },
      correctAnswer: 'd'
    },

    {
      question: "5. Convert \\({16\\over 3}\\) to mixed numeral.",
      answers: {
        a: '\\(5{1\\over 2}\\)<br>',
        b: '\\(5{2\\over 3}\\)<br>',
        c: '\\(5{1\\over 4}\\)<br>',
        d: '\\(5{1\\over 3}\\)'
  
      },
      correctAnswer: 'd'
    },

    {
      question: "6. Convert \\(5{5\\over 12}\\) to improper fraction.",
      answers: {
        a: '\\({65\\over 12}\\)<br>',
        b: '\\({63\\over 12}\\)<br>',
        c: '\\({22\\over 12}\\)<br>',
        d: '\\({37\\over 5}\\)'
  
      },
      correctAnswer: 'a'
    },

    {
      question: "7. Which fraction is not equivalent to  the other three fractions?",
      answers: {
        a: '\\({16\\over 28}\\)<br>',
        b: '\\({32\\over 65}\\)<br>',
        c: '\\({44\\over 77}\\)<br>',
        d: '\\({20\\over 35}\\)'
  
      },
      correctAnswer: 'b'
    },
   

    {
      question: "<h4>8. What is the reading below in \\({inches}\\)?</h4> <img src='images/decimal_in.png' width='500' height='250'>",
      answers: {
        a: '\\(1{1\\over 8}~{inches}\\)<br>',
        b: '\\(1{7\\over 8}~{inches}\\)<br>',
        c: '\\(1{7\\over 16}~{inches}\\)<br>',
        d: '\\(1{1\\over 16}~{inches}\\)'
  
      },
      correctAnswer: 'c'
    },

    {
      question: "9. What is the greatest common factor (GCF) of \\({24}\\) and \\({36}\\)?",
      answers: {
        a: '\\({6}\\) <br>',
        b: '\\({12}\\) <br>',
        c: '\\({9}\\) <br>',
        d: '\\({18}\\)'
      },
      correctAnswer: 'b'
    },

    {
      question: "10. What is the greatest common factor (GCF) of \\({240}\\) and \\({420}\\)?",
      answers: {
        a: '\\({60}\\) <br>',
        b: '\\({120}\\) <br>',
        c: '\\({30}\\) <br>',
        d: '\\({90}\\)'
      },
      correctAnswer: 'a'
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