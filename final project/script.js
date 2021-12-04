let negative = ['Bitter', 'Gloomy', 'Somber', 'Forlorning'];
let neutral = ['Static', 'Lucid', 'Silent', 'Quiet'];
let neutral2 = ['Nostalgic', 'Serene', 'Calm'];
let positive = ['Lucent', 'Stunning', 'Bright', 'Warm'];
let final = [];
let randomWord1;
let randomWord2;
let randomWord3;
let randomWord4;
let imgNum = 1;

window.onload = function(){
  if(imgNum = 1){
    setRandomWord();
  }

  document.getElementById('wordFL').addEventListener('click', function(){
    if(imgNum === 1){
      document.getElementById('object1').src = "images/grey-bg.PNG";
      document.getElementById('object1').style = "opacity: 0.5";
      final.push(`The sky was ${randomWord1} as the moon rose`);
      imgNum += 1;
      setRandomWord();
    } else if(imgNum === 2){
      document.getElementById('object2').src = "images/moon.PNG";
      document.getElementById('object2').style = "opacity: 0.5";
      final.push(`<br>I coudln't stand all the ${randomWord1} memories`);
      imgNum += 1;
      setRandomWord();
    } else if(imgNum === 3){
      document.getElementById('object3').src = "images/mountains.PNG";
      document.getElementById('object3').style = "opacity: 0.5";
      final.push(`<br>I walk back to ${randomWord1} home`);
      imgNum += 1;
      setRandomWord();
    } else if(imgNum === 4){
      final.push(`&emsp;I fall asleep to wait until tomorrow...`);
      document.getElementById('object1').style = "opacity: 0.5";
      document.getElementById('object2').style = "opacity: 0.5";
      document.getElementById('object3').style = "opacity: 0.5";

      let imgOpacity = 0.5;
      setInterval(function(){
        if (imgOpacity <= 1){
          imgOpacity += 0.1;
          document.getElementById('object1').style = `opacity: ${imgOpacity}`;
          document.getElementById('object2').style = `opacity: ${imgOpacity}`;
          document.getElementById('object3').style = `opacity: ${imgOpacity}`;
          document.getElementById('background').style = `opacity: ${imgOpacity}`;
        }
      }, 100);

      let textOpacity = 1;
      setInterval(function(){
        if (textOpacity >= 0){
          textOpacity -= 0.1;
          document.getElementById('wordFL').style = `opacity: ${textOpacity}`;
          document.getElementById('wordL').style = `opacity: ${textOpacity}`;
          document.getElementById('wordR').style = `opacity: ${textOpacity}`;
          document.getElementById('wordFR').style = `opacity: ${textOpacity}`;
        }
      }, 100);

      document.getElementById('background').style = "opacity: 0.5";

      document.getElementById('finalText').style = "display: block";
      let poem = final.toString();
      document.getElementById('finalText').innerHTML = poem;
      let finalOpacity = 0;
      setInterval(function(){
        if (finalOpacity <= 1){
          finalOpacity += 0.1;
          document.getElementById('finalText').style = `opacity: ${finalOpacity}`;
        }
      }, 100);
    }
  });

  document.getElementById('wordL').addEventListener('click', function(){
    if(imgNum === 1){
      document.getElementById('object1').src = "images/blue-bg.PNG";
      document.getElementById('object1').style = "opacity: 0.5";
      final.push(`The sky was ${randomWord2} as the sun rose`);
      imgNum += 1;
      setRandomWord();
    } else if(imgNum === 2){
      document.getElementById('object2').src = "images/sun.PNG";
      document.getElementById('object2').style = "opacity: 0.5";
      final.push(`<br>I am overcome with ${randomWord2} memories`);
      imgNum += 1;
      setRandomWord();
    } else if(imgNum === 3){
      document.getElementById('object3').src = "images/forest.PNG";
      document.getElementById('object3').style = "opacity: 0.5";
      final.push(`<br>As I stand there in a ${randomWord2} world`);
      imgNum += 1;
      setRandomWord();
    } else if(imgNum === 4){
      final.push(`&emsp;I float away...`);
      document.getElementById('object1').style = "opacity: 0.5";
      document.getElementById('object2').style = "opacity: 0.5";
      document.getElementById('object3').style = "opacity: 0.5";

      let imgOpacity = 0.5;
      setInterval(function(){
        if (imgOpacity <= 1){
          imgOpacity += 0.1;
          document.getElementById('object1').style = `opacity: ${imgOpacity}`;
          document.getElementById('object2').style = `opacity: ${imgOpacity}`;
          document.getElementById('object3').style = `opacity: ${imgOpacity}`;
          document.getElementById('background').style = `opacity: ${imgOpacity}`;
        }
      }, 100);

      let textOpacity = 1;
      setInterval(function(){
        if (textOpacity >= 0){
          textOpacity -= 0.1;
          document.getElementById('wordFL').style = `opacity: ${textOpacity}`;
          document.getElementById('wordL').style = `opacity: ${textOpacity}`;
          document.getElementById('wordR').style = `opacity: ${textOpacity}`;
          document.getElementById('wordFR').style = `opacity: ${textOpacity}`;
        }
      }, 100);

      document.getElementById('background').style = "opacity: 0.5";

      document.getElementById('finalText').style = "display: block";
      let poem = final.toString();
      document.getElementById('finalText').innerHTML = poem;
      let finalOpacity = 0;
      setInterval(function(){
        if (finalOpacity <= 1){
          finalOpacity += 0.1;
          document.getElementById('finalText').style = `opacity: ${finalOpacity}`;
        }
      }, 100);
    }
  });

  document.getElementById('wordR').addEventListener('click', function(){
    if(imgNum === 1){
      document.getElementById('object1').src = "images/blue-bg.PNG";
      document.getElementById('object1').style = "opacity: 0.5";
      final.push(`The sky was ${randomWord3} as the sun rose`);
      imgNum += 1;
      setRandomWord();
    } else if(imgNum === 2){
      document.getElementById('object2').src = "images/sun.PNG";
      document.getElementById('object2').style = "opacity: 0.5";
      final.push(`<br>I am overcome with ${randomWord3} memories`);
      imgNum += 1;
      setRandomWord();

    } else if(imgNum === 3){
      document.getElementById('object3').src = "images/forest.PNG";
      document.getElementById('object3').style = "opacity: 0.5";
      final.push(`<br>As I stand there in a ${randomWord3} world`);

      imgNum += 1;
      setRandomWord();
    } else if(imgNum === 4){
      final.push(`&emsp;I float away...`);
      document.getElementById('object1').style = "opacity: 0.5";
      document.getElementById('object2').style = "opacity: 0.5";
      document.getElementById('object3').style = "opacity: 0.5";

      let imgOpacity = 0.5;
      setInterval(function(){
        if (imgOpacity <= 1){
          imgOpacity += 0.1;
          document.getElementById('object1').style = `opacity: ${imgOpacity}`;
          document.getElementById('object2').style = `opacity: ${imgOpacity}`;
          document.getElementById('object3').style = `opacity: ${imgOpacity}`;
          document.getElementById('background').style = `opacity: ${imgOpacity}`;
        }
      }, 100);

      let textOpacity = 1;
      setInterval(function(){
        if (textOpacity >= 0){
          textOpacity -= 0.1;
          document.getElementById('wordFL').style = `opacity: ${textOpacity}`;
          document.getElementById('wordL').style = `opacity: ${textOpacity}`;
          document.getElementById('wordR').style = `opacity: ${textOpacity}`;
          document.getElementById('wordFR').style = `opacity: ${textOpacity}`;
        }
      }, 100);

      document.getElementById('background').style = "opacity: 0.5";

      document.getElementById('finalText').style = "display: block";
      let poem = final.toString();
      document.getElementById('finalText').innerHTML = poem;
      let finalOpacity = 0;
      setInterval(function(){
        if (finalOpacity <= 1){
          finalOpacity += 0.1;
          document.getElementById('finalText').style = `opacity: ${finalOpacity}`;
        }
      }, 100);
    }
  });

  document.getElementById('wordFR').addEventListener('click', function(){
    if(imgNum === 1){
      document.getElementById('object1').src = "images/sunset-bg.PNG";
      document.getElementById('object1').style = "opacity: 0.5";
      final.push(`The sky was ${randomWord4} as the sun rose`);
      imgNum += 1;
      setRandomWord();
    } else if(imgNum === 2){
      document.getElementById('object2').src = "images/sun.PNG";
      document.getElementById('object2').style = "opacity: 0.5";
      final.push(`<br>I look up to the ${randomWord4} sky`);
      imgNum += 1;
      setRandomWord();
    } else if(imgNum === 3){
      document.getElementById('object3').src = "images/beach.PNG";
      document.getElementById('object3').style = "opacity: 0.5";
      final.push(`<br>As I daydream about ${randomWord4} memories`);
      imgNum += 1;
      setRandomWord();
    } else if(imgNum === 4){
      final.push(`&emsp;I float away...`);

      document.getElementById('object1').style = "opacity: 0.5";
      document.getElementById('object2').style = "opacity: 0.5";
      document.getElementById('object3').style = "opacity: 0.5";

      let imgOpacity = 0.5;
      setInterval(function(){
        if (imgOpacity <= 1){
          imgOpacity += 0.1;
          document.getElementById('object1').style = `opacity: ${imgOpacity}`;
          document.getElementById('object2').style = `opacity: ${imgOpacity}`;
          document.getElementById('object3').style = `opacity: ${imgOpacity}`;
          document.getElementById('background').style = `opacity: ${imgOpacity}`;
        }
      }, 100);

      let textOpacity = 1;
      setInterval(function(){
        if (textOpacity >= 0){
          textOpacity -= 0.1;
          document.getElementById('wordFL').style = `opacity: ${textOpacity}`;
          document.getElementById('wordL').style = `opacity: ${textOpacity}`;
          document.getElementById('wordR').style = `opacity: ${textOpacity}`;
          document.getElementById('wordFR').style = `opacity: ${textOpacity}`;
        }
      }, 100);

      document.getElementById('background').src = "images/blsnk.PNG";

      document.getElementById('finalText').style = "display: block";
      let poem = final.toString();
      document.getElementById('finalText').innerHTML = poem;

      let finalOpacity = 0;
      setInterval(function(){
        if (finalOpacity <= 1){
          finalOpacity += 0.1;
          document.getElementById('finalText').style = `opacity: ${finalOpacity}`;
        }
      }, 100);
    }
  });
}

function setRandomWord(){
  document.getElementById('wordFL').style = `opacity: 0;`;
  document.getElementById('wordL').style = `opacity: 0;`;
  document.getElementById('wordR').style = `opacity: 0;`;
  document.getElementById('wordFR').style = `opacity: 0;`;
  randomWord1 = negative[Math.floor(Math.random()*negative.length)];
  randomWord2 = neutral[Math.floor(Math.random()*neutral.length)];
  randomWord3 = neutral2[Math.floor(Math.random()*neutral2.length)];
  randomWord4 = positive[Math.floor(Math.random()*positive.length)];
  document.getElementById('wordFL').innerHTML = randomWord1;
  document.getElementById('wordL').innerHTML = randomWord2;
  document.getElementById('wordR').innerHTML = randomWord3;
  document.getElementById('wordFR').innerHTML = randomWord4;

  let opacity = 0;
  setInterval(function(){
    if (opacity <= 1){
      opacity += 0.1;
      document.getElementById('wordFL').style = `opacity: ${opacity}`;
      document.getElementById('wordL').style = `opacity: ${opacity}`;
      document.getElementById('wordR').style = `opacity: ${opacity}`;
      document.getElementById('wordFR').style = `opacity: ${opacity}`;
    }
  }, 100);
}
