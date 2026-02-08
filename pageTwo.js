//---------------------    PAGE TWO     ---------------------

function pageTwo() {
  app.innerHTML = "";

  app.style.flexDirection = "column"; //SYD ADDED THIS

  const title = document.createElement("h1");
  title.textContent = "only 10 seconds..."
  title.style.fontFamily = "monospace";
  title.style.fontSize = "48px"; //Syd Changed
  title.style.marginBottom = "100px";
  title.style.color = "#000000";
  title.justifyContent = "center"; //Syd Added
  title.style.textAlign = "center"; //Syd Added
  title.style.marginRight = "100px"; //Syd Changed
  app.appendChild(title);


  // ----- Audio Element -----
  const controls = document.createElement("audio"     );
  controls.style.display = "none";
  app.appendChild(controls);

  // ----- Voice Record Button -----
  const voiceRecord = document.createElement("button");
  voiceRecord.textContent = "Record";
  voiceRecord.style.padding = "15px 30px"; //Syd Changed
  voiceRecord.style.fontSize = "18px"; //Syd Changed
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
  playIcon.src = "icon assets/play.svg";
  playIcon.style.width = "36px"; //Syd Changed
  playIcon.style.height = "54px"; //Syd Changed
  playButton.appendChild(playIcon);
  playButton.style.opacity = "0.5";
  playButton.style.cursor = "pointer";
  playButton.style.padding = "15px"; //Syd Changed
  playButton.style.background = "none";
  playButton.style.borderRadius = "4px";
  playButton.style.border = "1px solid #000";
  playButton.style.cursor = "pointer";
  playButton.style.padding = "15px"; //Syd Changed
  playButton.addEventListener("mouseenter", () => playButton.style.opacity = "1");
  playButton.addEventListener("mouseleave", () => playButton.style.opacity = "0.5");
  playButton.addEventListener("click", () => controls.play());



  const pauseButton = document.createElement("button");
  const pauseIcon = document.createElement("img");
  pauseIcon.src = "icon assets/pause.svg";
  pauseIcon.style.width = "36px"; //Syd Changed
  pauseIcon.style.height = "54px"; //Syd Changed
  pauseButton.appendChild(pauseIcon);
  pauseButton.style.opacity = "0.5";
  pauseButton.style.background = "none";
  pauseButton.style.borderRadius = "4px";
  pauseButton.style.border = "1px solid #000";
  pauseButton.style.cursor = "pointer";
  pauseButton.style.padding = "15px"; //Syd Changed
  pauseButton.addEventListener("mouseenter", () => pauseButton.style.opacity = "1");
  pauseButton.addEventListener("mouseleave", () => pauseButton.style.opacity = "0.5");
  pauseButton.addEventListener("click", () => controls.pause());

  // ----- Progress Bar -----
  const barContainer = document.createElement("div");
  barContainer.id = "record-bar";
  barContainer.style.width = "450px"; //Syd Changed
  barContainer.style.height = "12px"; //Syd Changed
  barContainer.style.border = "1px solid black";
  barContainer.style.overflow = "hidden";
  barContainer.style.opacity = "0.5";
  barContainer.style.marginTop = "30px"; //Syd Changed
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
  buttonContainer2.style.gap = "15px"; //Syd Changed
  buttonContainer2.style.marginTop = "30px"; //Syd Changed
  buttonContainer2.appendChild(playButton);
  buttonContainer2.appendChild(pauseButton);

  // ----- Buttons + Progress Bar Column -----
  const buttonsAndBar = document.createElement("div");
  buttonsAndBar.style.display = "flex";
  buttonsAndBar.style.flexDirection = "column";
  buttonsAndBar.style.gap = "15px"; //Syd Changed
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
  volumeSlider.style.width = "300px"; //Syd Changed // slider length
  volumeSlider.style.height = "12px"; //Syd Changed  // slider thickness
volumeSlider.style.accentColor = "#000000";


  
  volumeSlider.addEventListener("input", () => controls.volume = 1 - volumeSlider.value);

  // ----- Wrapper for slider + buttons -----
  const controlsWrapper = document.createElement("div");
  controlsWrapper.style.display = "flex";
  controlsWrapper.style.alignItems = "center";
  controlsWrapper.style.gap = "30px"; //Syd Changed
  controlsWrapper.style.marginRight = "100px"; //Syd Changed
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

  // ----- Continue Button to Page Three -----
  const continueButton = document.createElement("button");
  const buttonIcon = document.createElement("img");
  buttonIcon.src = "icon assets/double_forward_arrow.svg";
  buttonIcon.style.width = "24px";
  buttonIcon.style.height = "24px";
  continueButton.appendChild(buttonIcon);
  
  continueButton.style.padding = "10px 25px";
  continueButton.style.marginTop = "30px";
  continueButton.style.background = "#ffffff";
  continueButton.style.border = "1px solid #000000";
  continueButton.style.borderRadius = "4px";
  continueButton.style.cursor = "pointer";
  continueButton.style.opacity = "0.5";
  
  continueButton.addEventListener("mouseenter", () => continueButton.style.opacity = "1");
  continueButton.addEventListener("mouseleave", () => continueButton.style.opacity = "0.5");
  continueButton.addEventListener("click", () => pageThree());
  
  app.appendChild(continueButton);
}
