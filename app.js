let secondPar = document.querySelector('#secondPar');
let exploreTools = document.querySelector('#exploreTools');
let toolsDiv = document.querySelector('#toolsDiv');

let readPaper = document.querySelector('#readPaper');

let paperText = document.querySelector('#paperText');

let exploreflag = false;
let paperflag = false;

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
    } else{
        paperText.style.display = 'none';
        paperflag = false;
        readPaper.innerText = "Read the Paper"
    }
}
)