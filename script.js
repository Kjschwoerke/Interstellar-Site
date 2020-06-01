
const spaceShip = document.getElementById('ship-animated')
const slogan = document.getElementById("slogan")

const transAnimation = () => {
  spaceShip.style.animation = 'ship-flying 5s linear forwards'
  slogan.style.animation = 'reveal 5s linear forwards'
}

$('#ship-animated').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', 
function() {
    //window.open('https://kjschwoerke.com/')
    window.location.href = 'https://kjschwoerke.com/' 
});