const Gameboards=((e)=>{
    
const gameboard=[]
return {
    gameboard,
}
})()

const Players=()=>{
    let playerX=document.querySelector("#playerX")
    let player=document.querySelector("#player0")
    
    
    const nameDisplay=(name1,name2)=>{
        playerX.name=name1
        player0.name=name2

    }
return{
    nameDisplay
}
}

const Gameflow=(b)=>{
    let turn=false;
    let squares=document.querySelectorAll(".grid-squares")
    const gameboardMaker=()=>{
        squares.forEach(square=>{
             square.addEventListener("click",function (){
                 turn=!turn

                 if(turn){
                     if(square.textContent==="X"||square.textContent==="0"){
                         return 
                     }
                    Gameboards.gameboard.push(0)

                    square.textContent=Gameboards.gameboard[Gameboards.gameboard.length-1]
                    gameEnd.gameEnd()

                 }
                 else { 
                     
                    if(square.textContent==="X"||square.textContent==="0"){
                    return 
                }
                    Gameboards.gameboard.push("X")
                    square.textContent=Gameboards.gameboard[Gameboards.gameboard.length-1]
                    gameEnd.gameEnd()

                }
                })
        })
    }
    return {
        gameboardMaker,
       
    }
}


const GameOver=()=>{
    let first=document.getElementById("0")
    let second=document.getElementById("1")
    let third=document.getElementById("2")
    let fourth=document.getElementById("3")
    let fifht=document.getElementById("4")
    let sixth=document.getElementById("5")
    let seventh=document.getElementById("6")
    let eighte=document.getElementById("7")
    let nineth=document.getElementById("8")
    let score=document.querySelector("#score")
    let squares=document.querySelectorAll(".grid-squares")
    let scoreX=document.querySelector("#playerX")
    let score0=document.querySelector("#player0")
    scoreX.value=0
    score0.value=0
    const playersName=()=>{
        scoreX.name=prompt("Submit the First players name")
        score0.name=prompt("Submit the Second players name")

    }
    const gameEnd=()=>{
        if( 
        (first.textContent==="X"&&second.textContent==="X"&&third.textContent==="X") 
        || (first.textContent==="X"&&fifht.textContent==="X"&&nineth.textContent==="X") 
        || (first.textContent==="X"&&fourth.textContent==="X"&&seventh.textContent==="X") 
        || (fourth.textContent==="X"&&fifht.textContent==="X"&&sixth.textContent==="X") 
        || (seventh.textContent==="X"&&eighte.textContent==="X"&&nineth.textContent==="X") 
        || (second.textContent==="X"&&fifht.textContent==="X"&&eighte.textContent==="X") 
        || (third.textContent==="X"&&sixth.textContent==="X"&&nineth.textContent==="X") 
        || (third.textContent==="X"&&fifht.textContent==="X"&&seventh.textContent==="X") 
        ) 
        {      squares.forEach(square=>{ square.textContent=""})
        scoreX.value=scoreX.value+1
             score.textContent=`${scoreX.name}:${scoreX.value} -- ${score0.name}:${score0.value}`
            if(scoreX.value===3){
                score.textContent=`${scoreX.name}:${scoreX.value} -- ${score0.name}:${score0.value}, Mr${scoreX.name} won, Congratulations!`
            }
        }

        else if(
            (first.textContent==="0" &&second.textContent==="0"&&third.textContent==="0") 
            || (first.textContent==="0" &&fifht.textContent==="0"&&nineth.textContent==="0") 
            || (first.textContent==="0" &&fourth.textContent==="0" &&seventh.textContent==="0") 
            || (fourth.textContent==="0"&&fifht.textContent==="0"&&sixth.textContent==="0") 
            || (seventh.textContent==="0"&&eighte.textContent==="0"&&nineth.textContent==="0") 
            || (second.textContent==="0"&&fifht.textContent==="0"&&eighte.textContent==="0") 
            || (third.textContent==="0"&&sixth.textContent==="0"&&nineth.textContent==="0") 
            || (third.textContent==="0"&&fifht.textContent==="0"&&seventh.textContent==="0") 
            ) 
            {
                squares.forEach(square=>{ square.textContent=""})
                score0.value=score0.value+1
                score.textContent=` ${scoreX.name}:${scoreX.value} -- ${score0.name}:${score0.value}` 
                if(score0.value===3){
                    score.textContent=` ${score0.name}:${scoreX.value} -- ${score0.name}:${score0.value}, Mr.${score0.name} won, Congratulations!`
                }  
            }   

    }

                 const startGame=()=>{
                let start=document.querySelector("#start")
                 start.addEventListener("click",(e)=>{
                playersName()
                gameFlow.gameboardMaker()

    score.textContent=``
    squares.forEach(square=>{ square.textContent=""})})


}

    const restartGame=()=>{
        let restart=document.querySelector("#restart")
        restart.addEventListener("click",(e)=>{
            score.textContent=``
            squares.forEach(square=>{ square.textContent=""})
        })
        
    }
    return {
       gameEnd,
       startGame,
       restartGame,
       playersName,
    }
}

Gameboards.gameboard=[]
const gameFlow=Gameflow()
const gameEnd=GameOver()
gameEnd.startGame()
gameEnd.restartGame()
