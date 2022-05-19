let secondPar = document.querySelector('#secondPar');
let exploreTools = document.querySelector('#exploreTools');
let toolsDiv = document.querySelector('#toolsDiv');

let readPaper = document.querySelector('#readPaper');

let paperText = document.querySelector('#paperText');

let gameDiv = document.querySelector('#gameDiv');

let startGame = document.querySelector('#playGame');

let thirdPar = document.querySelector('#thirdPar')
let scoreDiv = document.querySelector('#scoreDiv')

let reset = document.querySelector('#reset');

let gameScore = 0;

let exploreflag = false;
let paperflag = false;
let gameflag = false;

let rightAnswers = document.querySelectorAll('.correct');
let wrongAnswers = document.querySelectorAll('.wrong');





startGame.addEventListener('click',function(e){
    if(gameflag == false){
        thirdPar.style.display = 'none';
        scoreDiv.style.display = 'inline';
        gameDiv.style.display = 'flex';
        gameflag = true;
        startGame.innerText = "Close Game";
        paperText.style.display = 'none';
        paperflag = false;
        reset.style.display = 'inline';
        readPaper.innerText = "Read the Paper";
    } else{
        gameDiv.style.display = 'none';
        gameflag = false;
        startGame.innerText = 'Play the Game';
        scoreDiv.style.display = 'none';
        thirdPar.style.display = 'inline';
        rightAnswers.style.backgroundColor = 'white';
        reset.style.display = 'none';
    }
})





exploreTools.addEventListener('click',function(e){
    if(exploreflag == false){
        secondPar.style.display = 'none';
        toolsDiv.style.display = 'flex';
        exploreflag = true;
        exploreTools.innerText = "Return"
    } else{
        secondPar.style.display = 'inline';
        toolsDiv.style.display = 'none';
        exploreflag = false;
        exploreTools.innerText = "Explore Tools"
    }
    
    
})

readPaper.addEventListener('click',function(e){
    if(paperflag == false){
        paperText.style.display = 'block';
        paperText.style.paddingTop = '100px';
        paperText.style.backgroundColor = '#FAF9F6';
        
        readPaper.innerText = "Close Paper"
        paperflag = true;

        gameDiv.style.display = 'none';
        gameflag = false;
        startGame.innerText = 'Play the Game';
        scoreDiv.style.display = 'none';
        thirdPar.style.display = 'inline';
        rightAnswers.style.backgroundColor = 'white';
        reset.style.display = 'none';
    } else{
        paperText.style.display = 'none';
        paperflag = false;
        readPaper.innerText = "Read the Paper"
    }
}
)

for(let i = 0; i < rightAnswers.length;i++){
    rightAnswers[i].addEventListener('click',function(e){
        if(gameflag == true){
            this.style.backgroundColor = '#20C20E';
            gameScore += 1;
            scoreDiv.innerText = `Score: ${gameScore}/5`;
            this.disabled = true;
        }
    })
}
for(let i = 0; i < wrongAnswers.length;i++){
    wrongAnswers[i].addEventListener('click',function(e){
        if(gameflag == true){
            this.style.backgroundColor = 'red';
            
            
            this.disabled = true;
        }
    })
}
reset.addEventListener('click',function(e){
    
    gameScore = 0;
    scoreDiv.innerText = `Score: ${gameScore}/5`;
    for(let i = 0; i < wrongAnswers.length;i++){
        wrongAnswers[i].style.backgroundColor = null;
        wrongAnswers[i].disabled = false;
    }
    for(let i = 0; i < rightAnswers.length;i++){
        rightAnswers[i].style.backgroundColor = null;
        rightAnswers[i].disabled = false;
    }

})