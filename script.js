function Ready(){
    navigator.mediaDevices.getUserMedia({
      audio:true  
    });
    classifier=ml5.soundClassifier("",modelReady);
}
function modelReady(){
    classifier.classify(gotResult);
}
function gotResult(error,result){
    if(error){
        console.log(error);
    }
    else{
        console.log(result);
        Random_R=Math.floor(Math.random()*255);
        Random_G=Math.floor(Math.random()*255);
        Random_B=Math.floor(Math.random()*255);
        document.getElementById("sound").innerHTML=result[0].label;
        document.getElementById("con").innerHTML=result[0].confidence.toFixed(3);
        document.getElementById("sound").style.color="rgb("+Random_R+","+Random_G+","+Random_B+")";
        document.getElementById("con").style.color="rgb("+Random_R+","+Random_G+","+Random_B+")";
        img1=document.getElementById("woolf");
    }
}