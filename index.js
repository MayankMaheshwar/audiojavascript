var email=prompt("Enter your email for subscription and latest updates");
while(email.indexOf("@gmail.com")=== -1){
  var email = prompt("type the correct email");
}
alert("you will get all types of updates and offers")
var song=prompt("what type of music you want to listen");
if(song===DJ){
var audio = document.getElementById("#DJ");
audio.play();
}
var head=document.querySelector("h1");
head.style.color="red";
var body=document.querySelector("body");
var isBlue=false;
setInterval(function(){
  if(isBlue){
    body.style.background = "purple";
  } else{
    body.style.background = "#3498db";
  }
  isBlue = !isBlue;
},1000);
var p=document.querySelector("p");
p.classList.toggle("font");
var sign=document.getElementById("sign");
sign.addEventListener("click",function(){
prompt("Enter your name");
});
