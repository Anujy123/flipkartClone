console.log("hello world ")

var hamburger  = document.getElementById("hamburger")
var icons  = document.getElementById("icons")

hamburger.addEventListener('click',()=>{
    icons.classList.toggle('show')
})