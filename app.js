let elQuestionScreen = document.getElementById("questionscreen")
let elScreenResult = document.getElementById("resultscreen")
let elWelcomeScr = document.getElementById("welcomescreen")
let elResumenScr = document.getElementById("resumenscreen")

let nombreUsuario = document.getElementById("username")

// console.log(nombreUsuario)
//added conditional function that redirect to other question if answer is correct




        

function Quiz() {
    this.questions = []   // Traigo el Array con la Data 
    this.counter = 0
    this.indexCurrentQuestion = 0
    this.addQuestion = function(question) {
        this.questions.push(question)
    }
    this.showCurrentQuestion = function() {
        if (this.indexCurrentQuestion < this.questions.length) {
            this.questions[this.indexCurrentQuestion].getElement()  // recupera dato del array[x]
        } else {
            elQuestionScreen.classList.add('hidden')                                // --
                                                                                    //
            let elCorrectAnswers = document.querySelector("#correctAnswers")        //  -->> Activa Ventna de Resultados
            elCorrectAnswers.innerHTML = quiz.counter                               // 
                                                                                    // 
            // elScreenResult.classList.add('block')                                //
            elScreenResult.style.display = "block"                                  // --
        }
    }
}


function Question(numeroPregunta, title, answers, correctAnswer, condicionante, numeroCondicionante) {
    this.title = title
    this.answers = answers
    this.correctAnswer = correctAnswer
    this.condicionante = condicionante
    this.numeroPregunta = numeroPregunta
    this.numeroCondicionante = numeroCondicionante

    console.log("SOY CONDICIONANTE: " + this.condicionante)

    this.getBody = function() {
        let body = this.title.toUpperCase() + '\n'
        for (let i=0; i<this.answers.length; i++) {
             body += (i+1) + '. ' + this.answers[i] + '\n'
        }
        return body
    }
    this.addAnswer = function(answer) {
        // this.answers[this.answers.length] = answer
        this.answers.push(answer)
    }

    this.getElement = function() {

        // Suma Nombre de Usuario
        let questionNombreUsuario = document.createElement("h2")
        questionNombreUsuario.textContent = `Nombre de Usuario`
        elQuestionScreen.append(questionNombreUsuario)


        // Suma el Titulo  
        let questionNumber = document.createElement("h2")
        questionNumber.textContent = "Pregunta " + this.numeroPregunta  + " / " + this.answers.length 
        elQuestionScreen.append(questionNumber)

        // Suma la Pregunta
        let questionTitle = document.createElement("h3")
        questionTitle.textContent = this.title
        elQuestionScreen.append(questionTitle)

        // Valor para ver si es --->>> Pregunta Condicionante
        let questionCondicionante = document.createElement("h3")
        questionCondicionante.textContent = this.condicionante
        elQuestionScreen.append(questionCondicionante)


        // crea el Encabezado de la lista en Html
        let questionAnswers = document.createElement("ul")
        questionAnswers.classList.add("question__awswers")

        // las opciones estan en this.answers   y lo maneja como "answer" dentro del ciclo forEach
        this.answers.forEach((answer, index) => {
            let elAnswer = document.createElement("li")
            elAnswer.classList.add("awswer")
            elAnswer.textContent = answer
            elAnswer.id = index+1
            elAnswer.addEventListener("click", this.checkAnswer)
            questionAnswers.append(elAnswer)
        })

        elQuestionScreen.append(questionAnswers)
    }

    this.checkAnswer = (event) => {
        let anwserSelected = event.target
        console.log(event.target)
       //  console.log(anwserSelected)
        if (this.isCorrectAnswer(anwserSelected.id)) {
            anwserSelected.classList.add('answer--correct')
            quiz.counter++
        } else {
            anwserSelected.classList.add('answer--wrong')
            let elCorrectAnswer = document.getElementById(this.correctAnswer)
            elCorrectAnswer.classList.add('answer--correct')
        }
        //Preguntas Condicionante
        if (condicionante === true && (this.isCorrectAnswer(anwserSelected.id)) ) {
            quiz.indexCurrentQuestion++ 
        }
                          
        setTimeout(function() {
            elQuestionScreen.textContent = ''
            quiz.indexCurrentQuestion++
            quiz.showCurrentQuestion()
        }, 1000)
    }
 
    this.isCorrectAnswer = function(userAnswer) {
        if (this.correctAnswer == userAnswer) return true
        else return false
    }

}
function conditionalQuestion() {
    
}


let question1 = new Question(1, '¿La calidad del producto o servicio es la esperada?', ["Si", "No", "Quizás", "Nunca"], 1, true, 2)
let question2 = new Question(2, '¿Repetiría la experiencia de compra?', ["Si", "No", "Quizás", "Nunca"], 1, false, 4)
let question3 = new Question(3, '¿Nos recomendaría a sus amigos o familiares?', ["Si", "No", "Quizás", "Nunca"], 1, false, 0)
let question4 = new Question(4, '¿Ha tenido algún problema en el proceso de compra?', ["Si", "No", "Quizás", "Nunca"], 1, false, 0)

let question5 = new Question('¿Cuántas veces ha utilizado el producto o servicio?', ["Si", "No", "Quizás", "Nunca"], 1, false, 0)
let question6 = new Question('¿Cuánto tiempo hace que conoce nuestra empresa? ¿Desde cuándo es nuestro cliente?', ["Si", "No", "Quizás", "Nunca"], 1, false, 0)
let question7 = new Question('¿Qué le ha parecido la relación entre la calidad ofrecida y el precio?', ["Si", "No", "Quizás", "Nunca"], 1,true, 0)
let question8 = new Question('¿Con qué frecuencia se puede permitir comprar nuestro producto o servicio?', ["Si", "No", "Quizás", "Nunca"], 3, false, 0)
let question9 = new Question('¿Volvería a invertir su dinero en nuestros productos o servicios?', ["Si", "No", "Quizás", "Nunca"], 1, false, 0)
let question10 = new Question('¿Es nuestra marca la primera que tiene en mente en nuestro sector?', ["Si", "No", "Quizás", "Nunca"], 2, false, 0)
let question11 = new Question('¿Cómo valora usted la relación calidad-precio?', ["Si", "No", "Quizás", "Nunca"], 1, false, 0)
let question12 = new Question('¿Cómo valora usted la atención recibida?', ["Si", "No", "Quizás", "Nunca"], 1, true, 0)
let question13 = new Question('¿Cómo ha sido tratado?', ["Si", "No", "Quizás", "Nunca"], 1, 0, 0)
let question14 = new Question('¿Considera suficientes los conocimientos de la persona que le ha atendido?', ["Si", "No", "Quizás", "Nunca"], 1, false, 0)
let question15 = new Question('¿Le ha inspirado confianza la atención recibida?', ["Si", "No", "Quizás", "Nunca"], 1, false, 0)
let question16 = new Question('¿La persona que le ha atendido ha comprendido sus necesidades?', ["Si", "No", "Quizás", "Nunca"], 1, false, 0)
let question17 = new Question('¿Añadiría alguna pregunta a esta encuesta de satisfacción?', ["Si", "No", "Quizás", "Nunca"], 1, true, 0)
let question18 = new Question('Aproveche este apartado para comunicarnos cualquier tema que considere relevante y sobre el cual no ha sido preguntado.', ["Si", "No", "Quizás", "Nunca"], 1, false, 0)
let question19 = new Question('¿Tiene alguna sugerencia adicional sobre nuestro producto o servicio?', ["Si", "No", "Quizás", "Nunca"], 1, false, 0)
let question20 = new Question('', ["Si", "No", "Quizás", "Nunca"], 1, false, 0)


let quiz = new Quiz()
quiz.addQuestion(question1)
quiz.addQuestion(question2)
quiz.addQuestion(question3)
quiz.addQuestion(question4)
/*
quiz.addQuestion(question5)
quiz.addQuestion(question6)
quiz.addQuestion(question7)
quiz.addQuestion(question8)
quiz.addQuestion(question9)
quiz.addQuestion(question10)
quiz.addQuestion(question11)
quiz.addQuestion(question12)
quiz.addQuestion(question13)
quiz.addQuestion(question14)
quiz.addQuestion(question15)
quiz.addQuestion(question16)
quiz.addQuestion(question17)
quiz.addQuestion(question18)
quiz.addQuestion(question19)
quiz.addQuestion(question20)
*/





let elNumberOfQuestions = document.querySelectorAll(".numberOfQuestions")

elNumberOfQuestions.forEach(function(elnumberofquestions) {
    elnumberofquestions.textContent = quiz.questions.length
})

// Puntapie Inicial ...!! en el Codigo.. 
// -------------------------------------
function seeFirstQuestion() {
    
   //  elWelcomeScr.style.display = "block"

    // con este suma una class 
    let userName = document.getElementById("username").value;
    console.log(userName);
    elWelcomeScr.classList.add('hidden')
    elWelcomeScr.style.display = "none"

    elQuestionScreen.style.display = "block"

    quiz.showCurrentQuestion()
}

function seeEncuestas() {
    
    elWelcomeScr.classList.add('hidden')

//    elWelcomeScr.style.display = "none"
    elScreenResult.style.display = "none"
    elResumenScr.style.display = "block"

}

function seeInicio() {
    
    elWelcomeScr.style.display = "block"
    elScreenResult.style.display = "none"
    elResumenScr.style.display = "none"

}


let elWelcomeBtn = document.getElementById("welcome_btn")
elWelcomeBtn.addEventListener("click", seeFirstQuestion)

let elResumenBtn = document.getElementById("resumen_btn")
elResumenBtn.addEventListener("click", seeEncuestas)

let elInicioBtn = document.getElementById("inicio_btn")
elInicioBtn.addEventListener("click", seeInicio)



