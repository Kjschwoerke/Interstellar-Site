// const spaceShip = document.getElementById('ship-animated')
// spaceShip.style.zIndex = "1"

// function flyingShip() {
//     spaceShip.style.animation = "ship-flying 10s linear forwards"  
// }

// flyingShip()

//Above code works!!!



const spaceShip = document.getElementById('ship-animated')

const transAnimation = () => {
  spaceShip.style.animation = 'ship-flying 3s linear forwards'
}

$('#ship-animated').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', 
function() {
    //window.open('https://kjschwoerke.com/')
    window.location.href = 'https://kjschwoerke.com/' 
});