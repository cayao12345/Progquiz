let globalInterval;

localStorage.clear();


let queryString = decodeURIComponent(window.location.search)
queryString = queryString.substring(1)
var queries = queryString.split('&')
let isFromWhackamole = (queries[2] === 'whackamole') //if kung galing sa whack a mole
console.log(queries[2])
console.log(isFromWhackamole)   

if (isFromWhackamole) {
    localStorage.setItem('progQuizcurrentuser', JSON.stringify(queries[0]))
    localStorage.setItem('alluserGamescore', JSON.stringify(JSON.parse(queries[1])))
    console.log(JSON.parse(queries[1]))
}

let alluserScore = JSON.parse(localStorage.getItem('alluserGamescore'))
let warningNousername = false; //ginawa kong false if kung dadaan
let playingWithusername = false;




if (!alluserScore) {
    let tempArr = []
    localStorage.setItem('alluserGamescore', JSON.stringify(tempArr));
}




globalInterval = setInterval(() => {
    let currentUser = JSON.parse(localStorage.getItem('progQuizcurrentuser'))

    if (!currentUser) {
        if (!warningNousername) {
            let classList = $(".warningNoUsername").attr('class').split(/\s+/)
            if (!classList.includes("active")) {
                $(".warningNoUsername").addClass("active")
                $(".playingWithUsername").removeClass("active")
            }
            warningNousername = true

        }
    } else {
        if (!playingWithusername) {
            let classList = $(".playingWithUsername").attr('class').split(/\s+/)
            if (!classList.includes("active")) {
                $(".warningNoUsername").removeClass("active")
                $(".playingWithUsername").addClass("active")
            }
            playingWithusername = true
            $(".playerName").text(`Hi welcome ${currentUser}`)
        }
    }
}, 100)



//this is the change name div
$(".saveUsernamebutton").on('click', () => {
    let inputValue = $(".username").val();
    localStorage.setItem("progQuizcurrentuser", JSON.stringify(inputValue))
    playingWithusername = false
    alert("Name changed")
})



//this is the game lobby
$(".wackAmoleButtongame").click(() => {
    let queryString =
        "?" + JSON.parse(localStorage.getItem('progQuizcurrentuser')) +
        "&" + "" + JSON.stringify(JSON.parse(localStorage.getItem('alluserGamescore')))
    window.location.href = `whackamole/startGame.html${queryString}`
})


$(".quizGameButtongame").click(() => {
    let queryString =
        "?" + JSON.parse(localStorage.getItem('progQuizcurrentuser')) +
        "&" + "" + JSON.stringify(JSON.parse(localStorage.getItem('alluserGamescore')))
    window.location.href = `Quizgame/startGame.html${queryString}`
})
$(".completeCodegame").click(() => {
    let queryString =
        "?" + JSON.parse(localStorage.getItem('progQuizcurrentuser')) +
        "&" + "" + JSON.stringify(JSON.parse(localStorage.getItem('alluserGamescore')))
    window.location.href = `CompleteCode/startGame.html${queryString}`
})










//the highscore system
const highScoreDatas = () => {
    if (alluserScore.length > 0) {

        //Game 1
        let quizGameScore = alluserScore.map((data, index) => {
            return [data.username, data.game.quizGame]
        })
        let quizGamescoresorted = quizGameScore.sort((a, b) => {
            return b[1] - a[1]
        })
        console.log('quizGame')
        console.log(quizGamescoresorted)
        console.log('end here')
        let quizGamescoresortedString = quizGamescoresorted.map((data, index) => {
            return `${data[0]} :  ${data[1]}`
        })


        let game1 = document.querySelector('.playerListContainer .game1')
        game1.innerHTML = ''
        quizGamescoresortedString.forEach((data, index) => {
            game1.innerHTML += `<div class='player'>${data}</div>`;
        })
        //end here Game1




        //whack a Mole
        let whackaMoleScore = alluserScore.map((data, index) => {
            return [data.username, data.game.whackaMole]
        })
        let whackaMolesorted = whackaMoleScore.sort((a, b) => {
            return b[1] - a[1]
        })
        console.log('sorted')
        console.log(whackaMolesorted)
        console.log('end here')

        let whackaMolesortedString = whackaMolesorted.map((data, index) => {
            return `${data[0]} :  ${data[1]}`
        })

        let game2 = document.querySelector('.playerListContainer .game2')
        game2.innerHTML = ''
        whackaMolesortedString.forEach((data, index) => {
            game2.innerHTML += `<div class='player'>${data}</div>`;
        })
        //end here whack amole


        //game3

        let game3Score = alluserScore.map((data, index) => {
            return [data.username, data.game.completeTheCode]
        })
        let game3sorted = game3Score.sort((a, b) => {
            return b[1] - a[1]
        })
        console.log('sorted')
        console.log(game3sorted)
        console.log('end here')
        let game3sortedString = game3sorted.map((data, index) => {
            return `${data[0]} :  ${data[1]}`
        })

        let game3 = document.querySelector('.playerListContainer .game3')
        game3.innerHTML = ''
        game3sortedString.forEach((data, index) => {
            game3.innerHTML += `<div class='player'>${data}</div>`;
        })

        //end here


        //game4
        let game4Score = alluserScore.map((data, index) => {
            return [data.username, data.game.game4]
        })
        let game4sorted = game4Score.sort((a, b) => {
            return b[1] - a[1]
        })
        console.log('sorted')
        console.log(game4sorted)
        console.log('end here')
        let game4sortedString = game4sorted.map((data, index) => {
            return `${data[0]} :  ${data[1]}`
        })

        let game4 = document.querySelector('.playerListContainer .game4')
        game4.innerHTML = ''
        game4sortedString.forEach((data, index) => {
            game4.innerHTML += `<div class='player'>${data}</div>`;
        })

        //end here


        //game5

        let game5Score = alluserScore.map((data, index) => {
            return [data.username, data.game.game5]
        })
        let game5sorted = game5Score.sort((a, b) => {
            return b[1] - a[1]
        })
        console.log('sorted')
        console.log(game5sorted)
        console.log('end here')
        let game5sortedString = game5sorted.map((data, index) => {
            return `${data[0]} :  ${data[1]}`
        })

        let game5 = document.querySelector('.playerListContainer .game5')
        game5.innerHTML = ''
        game5sortedString.forEach((data, index) => {
            game5.innerHTML += `<div class='player'>${data}</div>`;
        })

        //end here
    }
}

//the refreshButton
$('.highscoreContainer .refreshButton').click(() => {
    highScoreDatas()
})


highScoreDatas()

//end here