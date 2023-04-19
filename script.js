
function nam(){
setInterval(() => {
document.querySelector("#show").innerHTML=new Date().toLocaleTimeString() 
  })
  document.querySelector("#min").style.display= "none";
  document.querySelector("#min").style.transition = "width 2s, height 4s";
  document.body.style.backgroundColor = ("red","purple");
  document.querySelector("#show").style.color= "white";
}