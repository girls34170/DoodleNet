function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    background("white");
    canvas.mouseReleased(ClassifyCanvas);
    synth=window.SpeechSynthesis;
}
function preload(){
    Classifier=ml5.imageClassifier("DoodleNet");
}
function clearcanvas(){
    background("white");
}
function ClassifyCanvas(){
    Classifier.classify(canvas,gotresults);
}
function gotresults(error,results){
   if(error){
       console.error(error);
   }
   console.log(results);
   document.getElementById("label").innerHTML="LABEL : " +results[0].label;
   document.getElementById("confidence").innerHTML="CONFIDENCE : " +floor(results[0].confidence*100)+"%";
   utterThis = new SpeechSynthesisUtterance(results[0].label);
   synth.speak(utterThis);
}
function draw(){
    strokeWeight(15);
    stroke(0);
    if(mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY);
    }
}