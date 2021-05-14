
    var queryString = decodeURIComponent(window.location.search);
    queryString = queryString.substring(1)
    var queries = queryString.split("&")
    let currentUser = queries[0]
    let alluserScore;
    JSON.parse(queries[1]).length >  0 ? alluserScore = JSON.parse(queries[1]) 
    : alluserScore = [];
    console.log(alluserScore)
    
    //simpleng even listener
    let closeButtonFinishedContainer = $(".closeButton")
    let finishedContainer = $(".finishedContainer")
    closeButtonFinishedContainer.click(() => {
        finishedContainer.removeClass("active")
    })
    //end here

    let gameContainer = $(".container")

    let questions = whackamoleQuestion
    let questionContainer = $(".questionContainer ")
    let choicesP = $(".choice p")
    let answerDivNumber = 0; //eto yung sagot nang user
    let currentAnswer = 0; // eto ung tamang sagot
    let timePerQuestion = 20000,
        scorePerQuestion = 10,
        currentScore = 0, //eto yng currentScore
        questionLength = 5,
        questionCount = 0,
        currentQuestionIndex = 0
    let questionAvailable = [...questions],
        questionIndex = 0
    let quest = searchRandom(questionAvailable.length, questionAvailable)
    let timer
    let finished = false

    const startGame = {
        start: () => {

            loadQuestion()
            questionCount++;
            $(".questionStatistic .question").text(
                `Question ${questionCount} / ${questionLength}`)
            
            console.log(currentAnswer)
            timer = setInterval(() => {
                if (answerDivNumber != 0) {
                    answerDivNumber = 0
                    loadQuestion()
                    questionCount++;
                    $(".questionStatistic .question").text(
                        `Question ${questionCount} / ${questionLength}`
                    )
                }
                
                if (questionCount == questionLength+1) {
                    //eto guys yung finished
                    clearInterval(timer)
                    finished = true;
                    if (finished) {
                        $(".homeContainer").addClass("active")
                        $(".homeContainer .beginContainer").removeClass("active")
                        $(".homeContainer .endContainer").addClass("active")
                        $(".homeContainer .endContainer .endScore").text(`Your score :  ${currentScore}`)
                        

                        //eto ay kukunin nya kung mataas yung last score 
                        //kung mataas ang last score hindi na nya babaguhin
                        let lastScoreF = ()=>{
                            let lastScore = 0;
                            alluserScore.forEach((data,index)=>{
                                if(data.username === currentUser){
                                    lastScore = data.game.whackaMole
                                    return;
                                }
                            })
                            return lastScore
                        }

                        let lastScore = lastScoreF()
                        console.log('currentScore : ' + currentScore)
                        console.log('lastScore :' + lastScore)
                        if(lastScore < currentScore){
                            console.log("pumasok lots")
                            changeDesc(currentUser,currentScore,alluserScore)
                        }
                        alluserScore = add(alluserScore,currentUser,currentScore)
                        
                        currentUser = currentUser
                        console.log(alluserScore)
                    }

                    answerDivNumber= 0
                    currentScore =   0
                    currentAnswer =  0
                    questionCount =  0
                    questionIndex =  0

                }
            }, 100)
        }
    }

    $(".greetings").text(`Welcome ${currentUser}`)


    $(".moleStart").click(() => {
        let image = $(".moleStart .molePic")
        setTimeout(() => {
            $(image).removeClass("dead")
            $(image).addClass("alive")
            startGame.start();
            $(".homeContainer").removeClass("active")
            $(".homeContainer .beginContainer").removeClass("active")
        }, 500)
        $(image).removeClass("alive")
        $(image).addClass("dead")
    })
    
    $(".moleQuit").click(()=>{
        //ipapasa sya pabalik sa index.html yung mga variable
        let query = "?"+ currentUser + "&" + JSON.stringify(alluserScore) + '&' + 'whackamole';
        window.location.href = `../index.html${query}`
    })


    const loadQuestion = () => {
        let {
            questions,
            choice1,
            choice2,
            choice3,
            choice4,
            answer
        } = quest[questionIndex]
        

        questionContainer.text(questions)
        let currentChoices = [choice1, choice2, choice3, choice4]
        choicesP.each((index, data) => {
            data.innerText = currentChoices[index]
        })
        currentAnswer = answer //eto yung current na sagot

        console.log('QuestionCount :' + questionCount)
        console.log('QuestionIndexCount :' + questionIndex)
        questionIndex++;
    }

    
    //eto ay mag bibigay nang data na distinct
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
        if (!found) arr.push({ id, username: name ,game : 
            { quizGame : 0,whackaMole : cscore,completeTheCode : 0,game4 : 0, game5:0 }
            ,quizGameArray:[0,0,0] });
        return arr;
    }

    function changeDesc( objectname, score ,arr) {
        for (var i in arr) {
          if (arr[i].username == objectname) {
             arr[i].game.whackaMole = score;
             break; //Stop this loop, we found it!
          }
        }
     }

     let choiceClickable = true
    $(".choice").each((index, data) => {
        $(data).click(() => {
            if(choiceClickable){
            choiceClickable = false
            answerDivNumber = $(data).data("number");
            console.log(answerDivNumber)
            if (answerDivNumber === currentAnswer) {
                currentScore += scorePerQuestion
            }
            let image = data.children[0]
            setTimeout(() => {
                $(image).removeClass("dead")
                $(image).addClass("alive")
                choiceClickable = true
            }, 300)
            console.log("outside Timeout")
            $(image).removeClass("alive")
            $(image).addClass("dead")
        }
        })
    })