$(document).ready(() => {
    var queryString = decodeURIComponent(window.location.search);
    queryString = queryString.substring(1)
    var queries = queryString.split("&")
    let currentUser = queries[0]
    let alluserScore;

    JSON.parse(queries[1]).length > 0 ? alluserScore = JSON.parse(queries[1]) :
        alluserScore = [];
    console.log('currentUser')
    console.log(currentUser)
    console.log(alluserScore)


    $(".quizQuit").click(() => {
        //ipapasa sya pabalik sa index.html yung mga variable
        let query = "?" + currentUser + "&" + JSON.stringify(alluserScore) + '&' + 'whackamole';
        window.location.href = `../index.html${query}`
    })


    //screen manipu
    $('.welcomeScreen').text(`Hi Welcome ${currentUser}`)
    //end here


    //question loader
    let currentAnswer = 0,
        questionCount = 0,
        answerDivNumber = 0,
        finished = false,
        currentScore = 0,
        questionIndex = 0,
        questionLength = 5;
        scorePerQuestion = 10;
    let timer

    let choiceClickable = true;
    const startGame = {

        start: (question, questionIndex) => {
            console.log('nasa start ')
            console.log(`quetionIndex ${questionIndex}`)
            loadQuestion(question);
            questionCount++;
            console.log(currentScore)

            $(".questionContainer .questionCount").text(
                `Question ${questionCount} / ${questionLength}`
            )
            timer = setInterval(() => {
                if (answerDivNumber != 0) {

                    answerDivNumber = 0;
                    //eto yung design
                    $(".buttonContainer .choice").each((index, data) => {
                        if ($(data).data("number") === currentAnswer) {
                            $(data).addClass('correct')
                        }
                    })
                    setTimeout(() => {
                        $(".buttonContainer .choice").each((index, data) => {
                            $(data).removeClass('correct')
                        })
                        choiceClickable = true
                        loadQuestion(question);
                        questionCount++;
                        console.log(`questionCount ${questionCount}`)
                        $(".questionContainer .questionCount").text(
                            `Question ${questionCount} / ${questionLength}`
                        )
                    }, 500)
                    //eto yung end
                }
                console.log('running')


                if (questionCount === questionLength + 1) {
                    clearInterval(timer)
                    finished = true;
                    if (finished) {
                        $(".container .endContainer").addClass('active')
                        $(".container .questionContainer").removeClass('active')
                        $(".container .beginContainer").removeClass('active')


                        let lastScoreF = () => {
                            let lastScore = 0;
                            alluserScore.forEach((data, index) => {
                                if (data.username === currentUser) {
                                    lastScore = data.quizGameArray[questionIndex]
                                    return;
                                }
                            })
                            return lastScore
                        }

                        let lastScore = lastScoreF();
                        console.log(lastScore)

                        $(".endContainer .finalScore").text(`YOUR SCORE : ${currentScore}`)
                        console.log(`currentScore : ${currentScore}`)
                        console.log(`lastScore : ${lastScore}`)
                        if (lastScore < currentScore) {
                            console.log('pumasok lots')
                            changeDesc(currentUser, currentScore, alluserScore, questionIndex)
                        }
                        let summingAlltheScore = () => {
                            let allscore = 0;
                            alluserScore.forEach((data, index) => {
                                if (data.username === currentUser) {
                                    allscore = data.quizGameArray.reduce((total, number) => {
                                        return total + number
                                    })
                                }
                            })
                            return allscore;
                        }
                        //this will sum all the data 
                        changeDesc2(currentUser, summingAlltheScore(), alluserScore);
                        //end here
                        console.log(`SUM :${summingAlltheScore()}`)
                        alluserScore = add(alluserScore, currentUser, currentScore, questionIndex)

                    }
                    answerDivNumber = 0
                    currentScore = 0
                    questionIndex = 0
                    questionCount = 0
                    currentAnswer = 0
                    console.log(alluserScore)
                }
            }, 100)
        }
    }


    const loadQuestion = (question) => {
        console.log(questionIndex)
        console.log(`${questionIndex} length`)
        let {

            questions,
            choice1,
            choice2,
            choice3,
            choice4,
            answer
        } = question[questionIndex]

        $(".questionContainer .question").text(questions)
        let currentChoice = [choice1,
            choice2,
            choice3,
            choice4
        ]
        $(".buttonContainer .choice").each((index, data) => {

            $(`.${data.classList[1]}`).html(currentChoice[index])
            console.log(`${data.classList[1]}`)
        
        })
        currentAnswer = answer
        console.log(` currentAnswer :  ${currentAnswer}`)
        questionIndex++;
    }
    //end here


    let questionTypeIndex = 0
    //addingOnClickOn button
    $(".beginContainer .buttonContainer button").each((index, data) => {
        $(data).click(() => {
            $(".beginContainer").removeClass('active')
            $('.questionContainer').addClass('active')
            console.log('clicked')
            if (index === 0) {
                startGame.start(searchRandom([...htmlQuestions].length, [...htmlQuestions]), index)
                questionTypeIndex = 0
                questionIndex = 0

            } else if (index === 1) {
                startGame.start(searchRandom([...cssQuestions].length, [...cssQuestions]), index)
                questionTypeIndex = 1
                questionIndex = 0
            } else if (index === 2) {
                startGame.start(searchRandom([...scriptQuestions].length, [...scriptQuestions]), index)
                questionTypeIndex = 2
                questionIndex = 0
            } else if (index === 3) {
                let query = "?" + currentUser + "&" + JSON.stringify(alluserScore) + '&' + 'whackamole';
                window.location.href = `../index.html${query}`
            }
        })
        console.log(data)
    })
    //end here




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
    function add(arr, name, cscore, index) {
        const {
            length
        } = arr;
        const id = length + 1;
        const found = arr.some(el => el.username === name);
        if (!found)


            if (index === 0) {
                arr.push({
                    id,
                    username: name,
                    game: {

                        quizGame: 0,
                        whackaMole: 0,
                        completeTheCode: 0,
                        game4: 0,
                        game5: 0
                    },
                    quizGameArray: [cscore, 0, 0]
                });
            } else if (index === 1) {
            arr.push({
                id,
                username: name,
                game: {

                    quizGame: 0,
                    whackaMole: 0,
                    completeTheCode: 0,
                    game4: 0,
                    game5: 0

                },
                quizGameArray: [0, cscore, 0]
            });
        } else if (index === 2) {
            arr.push({
                id,
                username: name,
                game: {

                    quizGame: 0,
                    whackaMole: 0,
                    completeTheCode : 0,
                    game4: 0,
                    game5: 0
                },
                quizGameArray: [0, 0, cscore]
            });
        }

        return arr;
    }

    //this will change  ths quizGame
    function changeDesc2(objectname, score, arr) {
        for (var i in arr) {
            if (arr[i].username == objectname) {
                arr[i].game.quizGame = score;
                break; //Stop this loop, we found it!
            }
        }
    }

    function changeDesc(objectname, score, arr, index) {
        for (var i in arr) {
            if (arr[i].username == objectname) {
                arr[i].quizGameArray[index] = score;
                break; //Stop this loop, we found it!
            }
        }
    }




    $(".buttonContainer .choice").each((index, data) => {
        $(data).click(() => {
            if (choiceClickable) {
                choiceClickable = false
                answerDivNumber = $(data).data("number");
                console.log(`realAnswer : ${answerDivNumber}`)
                if (answerDivNumber === currentAnswer) {
                    currentScore += scorePerQuestion
                }


                //dito ko ilalagay yung effect na tama

            }
        })
    })


    $('.endContainer .buttonContainer button').each((index, data) => {
        if (index === 0) {
            console.log('yep')
            $(data).click(() => {
                $(".container .endContainer").removeClass('active')
                $(".container .questionContainer").addClass('active')
                $(".container .beginContainer").removeClass('active')
                startGame.start(searchRandom([...htmlQuestions].length, [...htmlQuestions]), questionTypeIndex)
                console.log(`questionIndex ${questionIndex}`)
                questionIndex = 0
                console.log('clicked')
            })


        } else if (index === 1) {
            $(data).click(() => {
                $(".container .endContainer").removeClass('active')
                $(".container .questionContainer").removeClass('active')
                $(".container .beginContainer").addClass('active')

            })
        }

    })


})