var myQuestions = [
    {
      question: "1. What is \\({9}\\) in the mathematical statement \\({7}+{9}={16}\\)?",
      answers: {
        a: 'minuend <br>',
        b: 'sum<br>',
        c: 'addend<br>',
        d: 'difference'
  
      },
      correctAnswer: 'c'
    },
   
    {
      question: "2. What is \\({83}\\) in the mathematical statement \\({74}+{9}={83}\\)?",
      answers: {
        a: 'minuend <br>',
        b: 'sum<br>',
        c: 'addend<br>',
        d: 'difference'
  
      },
      correctAnswer: 'b'
    },

    {
      question: "3. What is \\({2024}\\) in the mathematical statement \\({2024}-{24}={2000}\\)?",
      answers: {
        a: 'difference <br>',
        b: 'subtrahend<br>',
        c: 'sum<br>',
        d: 'minuend'
  
      },
      correctAnswer: 'd'
    },

    {
      question: "4. What is \\({17}\\) in the mathematical statement \\({40}-{17}={23}\\)?",
      answers: {
        a: 'difference <br>',
        b: 'subtrahend<br>',
        c: 'sum<br>',
        d: 'minuend'
  
      },
      correctAnswer: 'b'
    },

    {
      question: "5. What is \\({31}\\) in the mathematical statement \\({51}-{20}={31}\\)?",
      answers: {
        a: 'difference <br>',
        b: 'subtrahend<br>',
        c: 'sum<br>',
        d: 'minuend'
  
      },
      correctAnswer: 'a'
    },
   
    {
      question: "<h4>6. What is total price to pay given the order below plus  a tax of \\({$}~{1.75}\\).</h4> <img src='images/menu.png' width='250' height='150'>",
      answers: {
        a: '\\({$}~{16.77}\\) <br>',
        b: '\\({$}~{18.52}\\)<br>',
        c: '\\({$}~{16.52}\\)<br>',
        d: '\\({$}~{18.77}\\)'
  
      },
      correctAnswer: 'b'
    },

    {
      question: "7. Subtract \\({4.368}\\) from \\({7.5}\\).",
      answers: {
        a: '\\({3.132}\\) <br>',
        b: '\\({3.268}\\) <br>',
        c: '\\({11.860}\\) <br>',
        d: '\\({11.680}\\)'
      },
      correctAnswer: 'a'
    },

    {
      question: "8. Find the sum of \\({1,865}\\) and \\({222}\\). Then, round the answer to the nearest hundreds.",
      answers: {
        a: '\\({1,700}\\) <br>',
        b: '\\({1,600}\\) <br>',
        c: '\\({2,000}\\) <br>',
        d: '\\({2,100}\\)'
      },
      correctAnswer: 'd'
    },

    {
      question: "9. Find the difference between \\({1,865}\\) and \\({222}\\). Then, round the answer to the nearest hundreds.",
      answers: {
        a: '\\({1,700}\\) <br>',
        b: '\\({1,600}\\) <br>',
        c: '\\({2,000}\\) <br>',
        d: '\\({2,100}\\)'
      },
      correctAnswer: 'b'
    },

    {
      question: "10. Express the difference between \\({85.04}\\) and \\({76.0876}\\) to the nearest hundredths.",
      answers: {
        a: '\\({9.95}\\) <br>',
        b: '\\({8.95}\\) <br>',
        c: '\\({9.07}\\) <br>',
        d: '\\({8.07}\\)'
      },
      correctAnswer: 'b'
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