var myQuestions = [
    {
      question: "<h4>1. Suppose there are \\({612}\\) holes drilled into a piece of metal plate. If there are \\({18}\\)  holes in each row, how many rows are there?</h4> <img src='images/holes.png' width='250' height='200'>",
      answers: {
        a: '\\({24}\\)<br>',
        b: '\\({43}\\)<br>',
        c: '\\({42}\\)<br>',
        d: '\\({34}\\)'
  
      },
      correctAnswer: 'd'
    },
   
    {
      question: "2. A trainee pays \\({SAR}~{535}\\) rent in a month for his apartment. How much is his quarterly rent pay?",
      answers: {
        a: '\\({SAR}~{1,605}\\)<br>',
        b: '\\({SAR}~{1,506}\\)<br>',
        c: '\\({SAR}~{6,420}\\)<br>',
        d: '\\({SAR}~{6,240}\\)'
  
      },
      correctAnswer: 'a'
    },

    {
      question: "3. An employee last year had a salary of \\({SAR}~{14,250}\\) per month. This year, she got a raise of \\({SAR}~{1,840}\\). What is her new monthly salary?",
      answers: {
        a: '\\({SAR}~{16,900}\\)<br>',
        b: '\\({SAR}~{16,090}\\)<br>',
        c: '\\({SAR}~{32,650}\\)<br>',
        d: '\\({SAR}~{32,560}\\)'
  
      },
      correctAnswer: 'b'
    },

    {
      question: "<h4>4. Burj Khalifa is ____________ \\({m}\\) taller than Taipei 101.</h4> <img src='images/buildings.png' width='1200' height='500'>",
      answers: {
        a: '\\({319.2}~{m}\\)<br>',
        b: '\\({320}~{m}\\)<br>',
        c: '\\({319}~{m}\\)<br>',
        d: '\\({318.8}~{m}\\)'
  
      },
      correctAnswer: 'd'
    },

    {
      question: "<h4>5. What is the difference (in \\({USD})\\) between the Average Crude Oil Spot Price in June 2024 and December 2023?</h4> <img src='images/oil.png' width='1000' height='500'>",
      answers: {
        a: '\\({USD}~{14.50}\\)<br>',
        b: '\\({USD}~{4.52}\\)<br>',
        c: '\\({USD}~{5.48}\\)<br>',
        d: '\\({USD}~{6.52}\\)'
  
      },
      correctAnswer: 'c'
    },
   
    {
      question: "6. The production capacity, in million barrels per day or \\({MMbbl}\\), of Oil Field 1 was \\({3.8}~{MMbbl}\\) while Oil Field 2 was \\({1.3}~{MMbbl}\\). How much is the combined production of the two oil fields?",
      answers: {
        a: '\\({510,000}\\) <br>',
        b: '\\({5,100,000}\\)<br>',
        c: '\\({51,000,000}\\)<br>',
        d: '\\({51,000}\\)'
  
      },
      correctAnswer: 'b'
    },

    {
      question: "7. The total weight of \\({37}\\) dry chemical fire extinguishers is \\({85.1}~{kg}\\). What is the weight of each dry chemcial fire extinguisher?",
      answers: {
        a: '\\({1.3}~{kg}\\) <br>',
        b: '\\({3.3}~{kg}\\) <br>',
        c: '\\({4.3}~{kg}\\) <br>',
        d: '\\({2.3}~{kg}\\)'
      },
      correctAnswer: 'd'
    },

    {
      question: "8. Determine the salary of \\({17}\\) employees in a department if each employee receives \\({SAR}~{9,550.35}\\) per month.",
      answers: {
        a: '\\({SAR}~{162,355.95}\\) <br>',
        b: '\\({SAR}~{162,359.01}\\) <br>',
        c: '\\({SAR}~{162,401.85}\\) <br>',
        d: '\\({SAR}~{160,440.10}\\)'
      },
      correctAnswer: 'a'
    },

    {
      question: "9. An accounting clerk can finish the payroll of one employee in  \\({0.75}~{hours}\\). How many hours are needed to finish the payroll of \\({17}\\) employees.",
      answers: {
        a: '\\({9.69}~{hours}\\) <br>',
        b: '\\({12.57}~{hours}\\) <br>',
        c: '\\({12.75}~{hours}\\) <br>',
        d: '\\({9.96}~{hours}\\)'
      },
      correctAnswer: 'c'
    },

    {
      question: "10. A metal fabricator has a \\({28.75}{ft}\\) metal rod. He needs to cut the metal rod into shorter rods of length \\({0.25}{ft}\\). How many \\({0.25-ft}\\) rods will he end up with?",
      answers: {
        a: '\\({114}\\) <br>',
        b: '\\({115}\\) <br>',
        c: '\\({116}\\) <br>',
        d: '\\({117}\\)'
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