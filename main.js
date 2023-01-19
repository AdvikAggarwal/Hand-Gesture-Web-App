
Webcam.set({
    width: 350,
    height: 300,
    img_format: 'jpeg',
    jpeg_quality:90
});
camera = document.getElementById("camera")

Webcam.attach('camera');

function take_Snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_img" src= "'+data_uri + '"/>'
    });
}

console.log('ml5.version', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/n_ZsOCy51/model.json', modelLoaded);

function modelLoaded()
{
   console.log("modeLoaded");
}

function speak()
{
    var synth = window.speechSynthesis;
    speak_data = "The Prediction is" + prediction;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}

function check()
{
    img = document.getElementById("captured_img");
    classifier.classify(img, gotResult);
}
function gotResult(error, results)
{
    if (error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        document.getElementById("Name").innerHTML = results[0].label;
        prediction = results[0].label;
        speak();
        if (results[0].label == "Raised Hand")
        {
            document.getElementById("prediction").innerHTML = "&#9995;";
        }
        if (results[0].label == "Victory Hand")
        {
            document.getElementById("prediction").innerHTML = "&#9996;";
        }
        if (results[0].label == "Double Victory")
        {
            document.getElementById("prediction").innerHTML = "&#128406;";
        }
        if (results[0].label == "Wow Hand")
        {
            document.getElementById("prediction").innerHTML = "&#128076;";
        }
        if (results[0].label == "Crossed Fingers")
        {
            document.getElementById("prediction").innerHTML = "&#129310;";
        }
        if (results[0].label == "Yo Yo Hand")
        {
            document.getElementById("prediction").innerHTML = "&#129311;";
        }
        if (results[0].label == "Thumbs Up")
        {
            document.getElementById("prediction").innerHTML = "&#128077;";
        }
        if (results[0].label == "Thumbs Down")
        {
            document.getElementById("prediction").innerHTML = "&#128078;";
        }
        if (results[0].label == "Hooray")
        {
            document.getElementById("prediction").innerHTML = "&#128588;";
        }
        if (results[0].label == "Namaste")
        {
            document.getElementById("prediction").innerHTML = "&#128591;";
        }

    }
}