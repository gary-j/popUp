const startbutton = document.querySelector('#start');
const popUp = document.querySelector('section.popUp');
let startOne = 0;

startbutton.addEventListener('click', function(event){
    popUp.classList.add('hidden')

})

popUp.addEventListener('click', function(){
    popUp.classList.add('hidden')
})


function startGame(starOne){
    if(startOne > 1){
        return
    }
}

function handleKey(key){

    startOne++
}
// startgamae

function clearGame(){
// Your code
// but think to reset the startOne
    startOne = 0
}

// EVENT LISTENERS
