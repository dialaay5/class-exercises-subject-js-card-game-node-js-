let player_points = 0
let computer_points = 0
const cardsValue = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', ' Q', 'K', 'A']   


function cardGame(cardsValue){
    while(true){
        // Math.floor(Math.random() * (max - min + 1)) + min
        // between min (included) and max (included): (2-14)
        playerCard = Math.floor(Math.random()* 13) + 2   
        computerCard = Math.floor(Math.random()* 13) + 2
        console.log(`${checkCard(playerCard)}`)
        console.log(`${checkCard1(computerCard)}`)

        if (playerCard > computerCard){
            player_points++
            console.log(`player won , score points ${player_points}`) }
        
        else if (playerCard < computerCard){
            computer_points++
            console.log(`computer won , score points ${computer_points}`) }

        else {console.log('teko')}
    
        if(player_points == 5 || computer_points == 5 ){
            break; }             
    }

    
}
cardGame()

function checkCard(playerCard){
switch(playerCard){
    case 11: return 'J';
    case 12: return 'Q';
    case 13: return 'K';
    case 14: return 'A';
    default: return playerCard ;}
}
function checkCard1(computerCard){
switch(computerCard){
    case 11: return 'J';
    case 12: return 'Q';
    case 13: return 'K';
    case 14: return 'A';
    default: return computerCard ;}
}

