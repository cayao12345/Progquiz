$(document).ready(()=>{
    let navigation = $(".navigation")
    let navigationCloseButton = $(".navigation .navigationCloseButton")
    let navigationOpenButton = $(".navigationOpenButton")

    navigationOpenButton.on("click",()=>{
        navigation.toggleClass("active")
    })
    navigationCloseButton.on('click',()=>{
        navigation.toggleClass("active")
    })


    $(".navigationItem").each((index,data)=>{
        if(index === 0){
            $(data).click(()=>{
                let classList = $(".homeContainer").attr("class").split(/\s+/)
                if(!classList.includes("active")){
                    $(".homeContainer").addClass("active")
                    $(".changeNameContainer").removeClass("active")
                    $(".aboutContainer").removeClass("active")
                    $(".highscoreContainer").removeClass("active")
                    $(".gameLobby").removeClass("active")
                }
            })
        }

        else if(index === 1){
            $(data).click(()=>{
                let classList = $(".highscoreContainer").attr("class").split(/\s+/)
                if(!classList.includes("active")){
                    $(".highscoreContainer").addClass("active")
                    $(".homeContainer").removeClass("active")
                    $(".changeNameContainer").removeClass("active")
                    $(".aboutContainer").removeClass("active")
                    $(".gameLobby").removeClass("active")
                }
            })


            
        }
        else if(index === 2){
            $(data).click(()=>{
                let classList = $(".aboutContainer").attr("class").split(/\s+/)
                if(!classList.includes("active")){
                    $(".aboutContainer").addClass("active")
                    $(".highscoreContainer").removeClass("active")
                    $(".homeContainer").removeClass("active")
                    $(".changeNameContainer").removeClass("active")
                    $(".gameLobby").removeClass("active")
                }
            })
        }

        else if(index === 3){
            $(data).click(()=>{
                let classList = $(".changeNameContainer").attr("class").split(/\s+/)
                if(!classList.includes("active")){
                    $(".changeNameContainer").addClass("active")
                    $(".homeContainer").removeClass("active")
                    $(".highscoreContainer").removeClass("active")
                    $(".aboutContainer").removeClass("active")
                    $(".gameLobby").removeClass("active")
                }
            })
        }
    })


    //this is the button play
    $('.playButton').click(()=>{
        let classList = $(".gameLobby").attr("class").split(/\s+/)
        if(!classList.includes("active")){
            $(".gameLobby").addClass("active")
            $(".changeNameContainer").removeClass("active")
            $(".homeContainer").removeClass("active")
            $(".highscoreContainer").removeClass("active")
            $(".aboutContainer").removeClass("active")
        }
    })
    //end here

})