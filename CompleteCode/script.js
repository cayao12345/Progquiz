$(document).ready(() => {
    var queryString = decodeURIComponent(window.location.search);
    queryString = queryString.substring(1)
    var queries = queryString.split("&")
    let currentUser = queries[0]
    let alluserScore;
    let questionCounter = 0,
        displayQuestionCounter = 1,
        questionCount = 5, // eto yung nasa display
        currentScore = 0;

    JSON.parse(queries[1]).length > 0 ? alluserScore = JSON.parse(queries[1]) :
        alluserScore = [];
    console.log('currentUser')
    console.log(currentUser)
    console.log(alluserScore)


    const startGame = (completeTheCodeQuestion) => {
        currentScore = 0;
        questionCount = 5;

        $(".homeContainer").removeClass("active")
        let questionContainer = document.querySelector(".questionContainer");
        questionContainer.classList.add("active")

        $(".questionNumber").text(`Question ${displayQuestionCounter} / ${questionCount}`)

        $(".questionContainer .question").text(completeTheCodeQuestion[questionCounter].mainQuestion)
        $(".mainQuestion").html(completeTheCodeQuestion[questionCounter].question)
        let nextButtonClickable = true;
        let answerCorrect = false;

        $(".nextButton").click((e) => {
            if (nextButtonClickable) {

                if (!$(".questionContainer .mainQuestion input").val()) {
                    alert("Please enter your answer.")
                } else {    
                    nextButtonClickable = false
                    let userAnswer = $(".questionContainer .mainQuestion input").val()
                    let correctAnswer = completeTheCodeQuestion[questionCounter].answer
                    if (userAnswer === correctAnswer) {
                        
                        answerCorrect = true;
                        currentScore = currentScore + 10

                    }

                    console.log(userAnswer)
                    console.log(correctAnswer)
                    questionCounter++;
                    displayQuestionCounter++;

                    $(".questionContainer .answer").text(
                        answerCorrect ? ` Correct : ${correctAnswer} `: `Incorrect : ${correctAnswer}`)

                    setTimeout(() => {
                        if (questionCounter <= 4) {
                            $(".questionNumber").text(`Question ${displayQuestionCounter} / ${questionCount}`)
                            $(".mainQuestion").html(completeTheCodeQuestion[questionCounter].question)
                            $(".questionContainer .question").text(completeTheCodeQuestion[questionCounter].mainQuestion)
                        } else {
                            endGame();
                        }

                        $(".questionContainer .answer").text(``)
                        nextButtonClickable = true
                        answerCorrect = false
                    }, 1000)
                }
            }
        })
    }

    const endGame = () => {

        let lastScoreF = ()=>{
            let lastScore = 0;
            alluserScore.forEach((data,index)=>{
                if(data.username === currentUser){
                    lastScore = data.game.completeTheCode
                    return;
                }
            })
            return lastScore
        }

        let lastScore = lastScoreF();
        
        if(lastScore < currentScore){
            changeDesc(currentUser,currentUser,alluserScore)
        }
        alluserScore = add(alluserScore,currentUser,currentScore)
        currentUser = currentUser;


        let questionContainer = document.querySelector(".questionContainer");
        questionContainer.classList.remove("active")
        $(".endContainer .finalScoretext").text("Final score : " + currentScore)
        $(".endContainer").addClass("active")
    }

    $(".homeContainer .startButton").click(() => {
        startGame(searchRandom(5, completeTheCode))
    })

    function searchRandom(count, arr) {
        let answer = [],
            counter = 0;

        while (counter < count) {
            let rand = arr[Math.floor(Math.random() * arr.length)];
            if (!answer.some(an => an === rand)) {
                answer.push(rand);
                counter++;
            }
        }
        return answer;
    }
       //eto naman ay ang mag pupush kung ang array ay given na
       function add(arr, name,cscore) {
        const { length } = arr;
        const id = length + 1;
        const found = arr.some(el => el.username === name);
        if (!found) arr.push({ id, username: name ,game : { quizGame : 0,whackaMole : 0,completeTheCode : cscore,game4 : 0, game5:0 }
            ,quizGameArray:[0,0,0]});
        return arr;
    }


    function changeDesc( objectname, score ,arr) {
        for (var i in arr) {
          if (arr[i].username == objectname) {
             arr[i].game.completeTheCode = score;
             break; //Stop this loop, we found it!
          }
        }
     }

    
    $(".buttonQuit").click(() => {
        //ipapasa sya pabalik sa index.html yung mga variable
        let query = "?" + currentUser + "&" + JSON.stringify(alluserScore) + '&' + 'whackamole';
        window.location.href = `../index.html${query}`
    })



})