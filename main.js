//https://teachablemachine.withgoogle.com/models/l38udgL_q//

https://teachablemachine.withgoogle.com/models/tFILN8ata/

function dance(){
    navigator.mediaDevices.getUserMedia({audio:true})
    classify = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/tFILN8ata/model.json",loaded) 
}
function loaded(){
   console.log("e")
   classify.classify(Results);
}
function Results(error,result){
if(error){
    console.log(error)
}
else{
console.log(result)
document.getElementById("name_sound").innerHTML="I can hear: "+result[0].label
document.getElementById("accuracy").innerHTML="confidence: "+(result[0].confidence*100).toFixed(3)
r=Math.floor(Math.random()*255)
g=Math.floor(Math.random()*255)
b=Math.floor(Math.random()*255)
document.getElementById("name_sound").style.color="rgb("+r+","+g+","+b+")"
document.getElementById("accuracy").style.color="rgb("+r+","+g+","+b+")"
if(result[0].label=="Dog"){
document.getElementById("img_1").src="dog.jpg"
}
else if(result[0].label=="Background Noise"){
    document.getElementById("img_1").src="listen.gif"
}
else if(result[0].label=="Roar"){
    document.getElementById("img_1").src="Lion.jpg"
}
else if(result[0].label=="Cat"){
    document.getElementById("img_1").src="cat.jpg"
}
}
}