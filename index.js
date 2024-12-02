var randomNumber1=Math.floor(Math.random()*6)+1;
var randomSource="./images/dice"+randomNumber1+".png";
//console.log(randomSource)
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomSource);


var randomNumber2=Math.floor(Math.random()*6)+1;
var randomSource2="./images/dice"+randomNumber2+".png";
//console.log(randomSource)
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomSource2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 wins 🏁"
}
else if(randomNumber2>randomNumber1){
    
        document.querySelector("h1").innerHTML="Player 2 wins 🏁"
    
}
else{
    document.querySelector("h1").innerHTML="Draw 🤝"
}