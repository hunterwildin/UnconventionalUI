const app = document.createElement("div");
document.body.appendChild(app);

app.style.width = "100vw";
app.style.height = "100vh";
app.style.display = "flex";
app.style.alignItems = "center";
app.style.justifyContent = "center";
app.style.fontFamily = "monospace";




function pageOne() {


//body of site


app.style.width = "100vw";
app.style.height = "100vh";
app.style.display = "flex";
app.style.alignItems = "center";
app.style.justifyContent = "center";
app.style.fontFamily = "monospace";
app.style.color = "#eee";

app.innerHTML = "";


//Title and byLine
const title = document.createElement("h1");
const byLine = document.createElement("p");



title.textContent = "Unconventional UI";
title.style.fontFamily = "monospace";
title.style.fontSize = "32px";
title.style.marginBottom = "20px";
title.style.color = "#000000";

app.appendChild(title);

byLine.textContent = "by Hunter Weiland";
byLine.style.fontFamily = "monospace";
byLine.style.fontSize = "14px";
byLine.style.marginBottom = "40px";
byLine.style.color = "#000000";
byLine.style.marginTop = "-10px";

app.appendChild(byLine);

//creates text field
const input = document.createElement("input");
input.type = "text";
input.readOnly = true;
input.placeholder = "Name";





//styles the text field
input.style.marginTop = "150px";

input.style.fontFamily = "monospace";
input.style.padding = "10px";
input.style.fontSize = "16px";
input.style.fontFamily = "monospace";
input.style.border = "1px solid #000000";

input.style.borderRadius = "4px";
input.style.outline = "none";
input.style.background = "#ffffff";

app.appendChild(input);


//alphabet array
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const slider = document.createElement("input");
slider.type = "range";
slider.min = "0";
slider.max = (alphabet.length - 1);
slider.value = "0";

//styles the slider

slider.style.height = "8px";
slider.style.borderRadius = "4px";
slider.style.background = "#ddd";
slider.style.outline = "none";
slider.style.accentColor = "#000000";
slider.style.cursor = "pointer";    




slider.style.width = "300px";

app.style.flexDirection = "column";
app.style.gap = "20px";

//updates letter display when slider is moved
const letterDisplay = document.createElement("div");
letterDisplay.textContent = alphabet[slider.value];

letterDisplay.style.fontSize = "48px";
letterDisplay.style.fontFamily = "monospace";
letterDisplay.style.fontWeight = "bold";
letterDisplay.style.color = "#000000";
letterDisplay.style.marginTop = "20px";

//event listener for slider
slider.addEventListener("input", () => {
  const index = slider.value;
  letterDisplay.textContent = alphabet[index];
});

app.appendChild(letterDisplay);
app.appendChild(slider);

//eneter button

const enterButton = document.createElement("button");
enterButton.textContent = "Enter";



enterButton.style.padding = "10px 20px";
enterButton.style.fontSize = "16px";
enterButton.style.fontFamily = "monospace";
enterButton.style.border = "1px solid #000000";
enterButton.style.borderRadius = "4px";
enterButton.style.background = "#ffffff";
enterButton.style.cursor = "pointer";
enterButton.style.opacity = "0.5";


app.appendChild(enterButton);

//hover effect for enter button
enterButton.addEventListener("mouseenter", () => {
    enterButton.style.opacity = "1";
});

enterButton.addEventListener("mouseleave", () => {
    enterButton.style.opacity = "0.5";
});

//event listener for enter button
enterButton.addEventListener("click", () => {
  input.value += letterDisplay.textContent;
});

//backspace button

const backspaceButton = document.createElement("button");
backspaceButton.textContent = "Backspace";

backspaceButton.style.padding = "10px 20px";
backspaceButton.style.fontSize = "16px";
backspaceButton.style.fontFamily = "monospace";
backspaceButton.style.border = "1px solid #000000";
backspaceButton.style.borderRadius = "4px";
backspaceButton.style.background = "#ffffff";
backspaceButton.style.cursor = "pointer";
backspaceButton.style.opacity = "0.5";

//hover effect for backspace button
backspaceButton.addEventListener("mouseenter", () => {
    backspaceButton.style.opacity = "1";
});

backspaceButton.addEventListener("mouseleave", () => {
    backspaceButton.style.opacity = "0.5";
});

//event listener for backspace button
backspaceButton.addEventListener("click", () => {
  input.value = input.value.slice(0, -1);
});

//container for buttons
const buttonContainer = document.createElement("div");
buttonContainer.style.display = "flex";
buttonContainer.style.gap = "10px";
buttonContainer.style.justifyContent = "center";

buttonContainer.appendChild(enterButton);
buttonContainer.appendChild(backspaceButton);

app.appendChild(buttonContainer);



//continue button with icon
const continueButton = document.createElement("button");
const buttonIcon = document.createElement("img");


buttonIcon.src = "/Users/hunter/Documents/web proj/WEBSITE DEMO/DEMO2/icon assets/double_forward_arrow.svg";

buttonIcon.style.width = "24px";
buttonIcon.style.height = "24px";


continueButton.appendChild(buttonIcon);
app.appendChild(continueButton);

continueButton.style.padding = "10px 25px";
continueButton.style.marginTop = "50px";
continueButton.style.background = "#ffffff";
continueButton.style.border = "1px solid #000000";
continueButton.style.borderRadius = "4px";
continueButton.style.cursor = "pointer";
continueButton.style.opacity = "0.5";

//hover effect for continue button
continueButton.addEventListener("mouseenter", () => {
    continueButton.style.opacity = "1";
});

continueButton.addEventListener("mouseleave", () => {
    continueButton.style.opacity = "0.5";
});

continueButton.addEventListener("click", () => {
  if (input.value.length >= 2) {
  pageTwo();
  } else {
    input.style.border = "2px solid red";
    input.style.opacity = "0.5";
    
    setTimeout(() => {
      input.style.border = "1px solid #000000";
      input.style.opacity = "1";
    }, 1000);
  }

});
}

//---------------------    PAGE TWO     ---------------------

function pageTwo() {
  app.innerHTML = "";

  const title = document.createElement("h1");
  title.textContent = "only 10 seconds..."
  title.style.fontFamily = "monospace";
  title.style.fontSize = "32px";
  title.style.marginBottom = "100px";
  title.style.color = "#000000";
  app.appendChild(title);


  // ----- Audio Element -----
  const controls = document.createElement("audio"     );
  controls.style.display = "none";
  app.appendChild(controls);

  // ----- Voice Record Button -----
  const voiceRecord = document.createElement("button");
  voiceRecord.textContent = "Record";
  voiceRecord.style.padding = "10px 20px";
  voiceRecord.style.fontFamily = "monospace";
  voiceRecord.style.cursor = "pointer";
  voiceRecord.style.background = "#fff";
  voiceRecord.style.border = "1px solid #000";
  voiceRecord.style.borderRadius = "4px";
  voiceRecord.style.opacity = "0.5";
  voiceRecord.addEventListener("mouseenter", () => voiceRecord.style.opacity = "1");
  voiceRecord.addEventListener("mouseleave", () => voiceRecord.style.opacity = "0.5");

  // ----- Play & Pause Buttons -----
  const playButton = document.createElement("button");
  const playIcon = document.createElement("img");
  playIcon.src = "/Users/hunter/Documents/web proj/WEBSITE DEMO/DEMO2/icon assets/play.svg";
  playIcon.style.width = "24px";
  playIcon.style.height = "36px";
  playButton.appendChild(playIcon);
  playButton.style.opacity = "0.5";
  playButton.style.cursor = "pointer";
  playButton.style.padding = "10px";
  playButton.style.background = "none";
  playButton.style.borderRadius = "4px";
  playButton.style.border = "1px solid #000";
  playButton.style.cursor = "pointer";
  playButton.style.padding = "10px";
  playButton.addEventListener("mouseenter", () => playButton.style.opacity = "1");
  playButton.addEventListener("mouseleave", () => playButton.style.opacity = "0.5");
  playButton.addEventListener("click", () => controls.play());



  const pauseButton = document.createElement("button");
  const pauseIcon = document.createElement("img");
  pauseIcon.src = "/Users/hunter/Documents/web proj/WEBSITE DEMO/DEMO2/icon assets/pause.svg";
  pauseIcon.style.width = "24px";
  pauseIcon.style.height = "36px";
  pauseButton.appendChild(pauseIcon);
  pauseButton.style.opacity = "0.5";
  pauseButton.style.background = "none";
  pauseButton.style.borderRadius = "4px";
  pauseButton.style.border = "1px solid #000";
  pauseButton.style.cursor = "pointer";
  pauseButton.style.padding = "10px";
  pauseButton.addEventListener("mouseenter", () => pauseButton.style.opacity = "1");
  pauseButton.addEventListener("mouseleave", () => pauseButton.style.opacity = "0.5");
  pauseButton.addEventListener("click", () => controls.pause());

  // ----- Progress Bar -----
  const barContainer = document.createElement("div");
  barContainer.id = "record-bar";
  barContainer.style.width = "300px";
  barContainer.style.height = "8px";
  barContainer.style.border = "1px solid black";
  barContainer.style.overflow = "hidden";
  barContainer.style.opacity = "0.5";
  barContainer.style.marginTop = "20px";
  const barFill = document.createElement("div");
  barFill.id = "record-bar-fill";
  barFill.style.height = "100%";
  barFill.style.width = "0%";
  barFill.style.background = "black";
  barFill.style.opacity = "0.8";
  barContainer.appendChild(barFill);

  // ----- Play/Pause Button Container -----
  const buttonContainer2 = document.createElement("div");
  buttonContainer2.style.display = "flex";
  buttonContainer2.style.justifyContent = "center";
  buttonContainer2.style.gap = "10px";
  buttonContainer2.style.marginTop = "20px";
  buttonContainer2.appendChild(playButton);
  buttonContainer2.appendChild(pauseButton);

  // ----- Buttons + Progress Bar Column -----
  const buttonsAndBar = document.createElement("div");
  buttonsAndBar.style.display = "flex";
  buttonsAndBar.style.flexDirection = "column";
  buttonsAndBar.style.gap = "10px";
  buttonsAndBar.appendChild(voiceRecord);
  buttonsAndBar.appendChild(buttonContainer2);
  buttonsAndBar.appendChild(barContainer);

  // ----- Volume Slider -----
  const volumeSlider = document.createElement("input");
  volumeSlider.type = "range";
  volumeSlider.min = "0";
  volumeSlider.max = "1";
  volumeSlider.step = "0.01";
  volumeSlider.value = "0.5";
  volumeSlider.style.transform = "rotate(-90deg)";
  volumeSlider.style.width = "200px"; // slider length
  volumeSlider.style.height = "8px";   // slider thickness
volumeSlider.style.accentColor = "#000000";


  
  volumeSlider.addEventListener("input", () => controls.volume = 1 - volumeSlider.value);

  // ----- Wrapper for slider + buttons -----
  const controlsWrapper = document.createElement("div");
  controlsWrapper.style.display = "flex";
  controlsWrapper.style.alignItems = "center";
  controlsWrapper.style.gap = "20px";
  controlsWrapper.appendChild(volumeSlider);
  controlsWrapper.appendChild(buttonsAndBar);

  app.appendChild(controlsWrapper);

  // ----- Recording Logic -----
  let mediaRecorder;
  let audioChunks = [];
  let recordAnimation;
  let recordingStartTime;

  async function setupRecorder() {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorder = new MediaRecorder(stream);
    mediaRecorder.ondataavailable = (e) => audioChunks.push(e.data);
    mediaRecorder.onstop = () => {
      const audioBlob = new Blob(audioChunks, { type: "audio/webm" });
      controls.src = URL.createObjectURL(audioBlob);
      audioChunks = [];
      cancelAnimationFrame(recordAnimation);
      barFill.style.width = "0%";
    };
  }

  function startRecordingProgress() {
    recordingStartTime = performance.now();
    function update() {
      const elapsed = performance.now() - recordingStartTime;
      const progress = Math.min(elapsed / 10000, 1);
      barFill.style.width = `${progress * 100}%`;
      if (progress < 1) requestAnimationFrame(update);
    }
    update();
  }

  voiceRecord.addEventListener("click", async () => {
    if (!mediaRecorder) await setupRecorder();
    if (mediaRecorder.state === "recording") return;

    audioChunks = [];
    mediaRecorder.start();
    startRecordingProgress();
    voiceRecord.disabled = true;
    voiceRecord.textContent = "RECORDING...";

    setTimeout(() => {
      if (mediaRecorder.state === "recording") {
        mediaRecorder.stop();
        voiceRecord.disabled = false;
        voiceRecord.textContent = "RECORD";
      }
    }, 10000);
  });
}













































//initial call to page one
pageOne();


