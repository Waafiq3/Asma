console.log(typeof 'true');
console.log(typeof true);

const score={
    Wins:0,
    Losses:0,
    Tie:0
};
gameScore();//Here we used the gameScore() to display the intial score
function playGame(playerMove) 
{
    let result = '';
    pickComputerMove();

    if (playerMove == 'rock') {
        if (computerMove === 'rock') {
            result = 'Tie';
        }
        else if (computerMove === 'paper') {
            result = 'You Lose';
        }
        else if (computerMove === 'scissors') {
            result = 'You Win';
        }
    }
    else if (playerMove == 'paper') {
        if (computerMove === 'rock') {
            result = 'You Win';
        }
        else if (computerMove === 'paper') {
            result = 'Tie';
        }
        else if (computerMove === 'scissors') {
            result = 'You Lose';
        }
    }
    else if (playerMove == 'scissors') {
        if (computerMove === 'rock') {
            result = 'You Lose';
        }
        else if (computerMove === 'paper') {
            result = 'You Win';
        }
        else if (computerMove === 'scissors') {
            result = 'Tie';
        }
    }
    
    document.querySelector('.js-result').innerHTML=`${result}`;

    document.querySelector('.js-moves').innerHTML=
    `You
    <img class="images" src="${playerMove}-emoji.png">
    <img class="images" src="${computerMove}-emoji.png">
    Computer`;


    if(result==='You Win')
    {score.Wins+=1;}
    else if(result==='You Lose')
    {score.Losses+=1;}
    else if(result==='Tie')
    {score.Tie+=1;}
    gameScore();//Here we used the gameScore() to display the score after we play

   // localStorage.setItem('score',JSON.stringfy(score));

   // alert(`you picked ${playerMove}.computer picked ${computerMove}.${result}.
//Wins:${score.Wins},Losses:${score.Losses},Ties:${score.Tie}`);

}

let computerMove = '';
function pickComputerMove() 
{
    const randomNumber = Math.random();


    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    }
    else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    }
    else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors';
    }
}
function gameResult()
{
    
}
function gameScore()
{
    document.querySelector('.js-score').innerHTML=`Wins:${score.Wins},Losses:${score.Losses},Ties:${score.Tie}`;
}