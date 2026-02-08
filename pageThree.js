//---------------------    PAGE THREE     ---------------------

function pageThree() {
  app.innerHTML = "";
  app.style.flexDirection = "column";
  app.style.position = "relative";
  app.style.overflow = "hidden";

  // Title
  const title = document.createElement("h1");
  title.id = "page-title";
  title.textContent = "Slider Chaos";
  title.style.fontFamily = "monospace";
  title.style.fontSize = "48px";
  title.style.color = "#000000";
  title.style.textAlign = "center";
  title.style.transition = "all 0.3s ease";
  title.style.zIndex = "100";
  app.appendChild(title);

  // Subtitle that changes
  const subtitle = document.createElement("p");
  subtitle.id = "subtitle";
  subtitle.textContent = "Move the sliders... if you dare";
  subtitle.style.fontFamily = "monospace";
  subtitle.style.fontSize = "18px";
  subtitle.style.color = "#666";
  subtitle.style.textAlign = "center";
  subtitle.style.marginTop = "-10px";
  subtitle.style.transition = "all 0.3s ease";
  app.appendChild(subtitle);

  // Container for chaos elements
  const chaosContainer = document.createElement("div");
  chaosContainer.id = "chaos-container";
  chaosContainer.style.position = "relative";
  chaosContainer.style.width = "90vw";
  chaosContainer.style.height = "70vh";
  chaosContainer.style.marginTop = "20px";
  app.appendChild(chaosContainer);

  // Array of weird slider effects
  const sliderEffects = [
    {
      label: "Title Scrambler",
      color: "#ff6b6b",
      effect: (value) => {
        const titles = ["Slider Chaos", "S̷l̷i̷d̷e̷r̷ ̷C̷h̷a̷o̷s̷", "rediLS soahC", "SLIDER CHAOS!!!", "slider chaos", "Sl1d3r Ch40s", "🎚️ Chaos 🎚️", "?????", "Help", "Why did you touch that?"];
        const index = Math.floor((value / 100) * (titles.length - 1));
        title.textContent = titles[index];
      }
    },
    {
      label: "Page Tilt",
      color: "#4ecdc4",
      effect: (value) => {
        const rotation = (value - 50) * 0.3;
        app.style.transform = `rotate(${rotation}deg)`;
      }
    },
    {
      label: "Reality Blur",
      color: "#45b7d1",
      effect: (value) => {
        const blur = (value / 100) * 10;
        chaosContainer.style.filter = `blur(${blur}px)`;
      }
    },
    {
      label: "Color Storm",
      color: "#96ceb4",
      effect: (value) => {
        const hue = (value / 100) * 360;
        document.body.style.backgroundColor = `hsl(${hue}, 70%, 90%)`;
      }
    },
    {
      label: "Font Madness",
      color: "#dda0dd",
      effect: (value) => {
        const fonts = ["monospace", "cursive", "fantasy", "serif", "sans-serif", "Comic Sans MS", "Impact", "Papyrus"];
        const index = Math.floor((value / 100) * (fonts.length - 1));
        title.style.fontFamily = fonts[index];
        subtitle.style.fontFamily = fonts[index];
      }
    },
    {
      label: "Size Shifter",
      color: "#ffcc5c",
      effect: (value) => {
        const scale = 0.5 + (value / 100) * 1.5;
        title.style.transform = `scale(${scale})`;
      }
    },
    {
      label: "Cursor Curse",
      color: "#ff8a5c",
      effect: (value) => {
        const cursors = ["default", "wait", "crosshair", "not-allowed", "grab", "zoom-in", "zoom-out", "cell", "move", "progress", "help"];
        const index = Math.floor((value / 100) * (cursors.length - 1));
        document.body.style.cursor = cursors[index];
      }
    },
    {
      label: "Subtitle Panic",
      color: "#a8e6cf",
      effect: (value) => {
        const messages = [
          "Move the sliders... if you dare",
          "What have you done?",
          "Stop! STOP!",
          "This was a mistake",
          "Why are you still going?",
          "I can't take much more!",
          "ERROR ERROR ERROR",
          "Please... no more...",
          "YOU'VE DOOMED US ALL",
          "🔥🔥🔥 EVERYTHING IS FINE 🔥🔥🔥"
        ];
        const index = Math.floor((value / 100) * (messages.length - 1));
        subtitle.textContent = messages[index];
      }
    },
    {
      label: "Page Flip",
      color: "#ffd93d",
      effect: (value) => {
        const flipY = (value / 100) * 180;
        chaosContainer.style.transform = `rotateY(${flipY}deg)`;
      }
    },
    {
      label: "HTML Title",
      color: "#6c5ce7",
      effect: (value) => {
        const titles = ["UnconventionalUI", "Help Me", "AAAAAAAA", "Error 404", "undefined", "null", "🎵 Never Gonna Give You Up 🎵", "*screaming*", "This Browser Tab Has Feelings Too", "Close This Tab NOW"];
        const index = Math.floor((value / 100) * (titles.length - 1));
        document.title = titles[index];
      }
    },
    {
      label: "Gravity Pull",
      color: "#fd79a8",
      effect: (value) => {
        const translateY = (value / 100) * 100 - 50;
        title.style.marginTop = `${translateY}px`;
      }
    },
    {
      label: "Letter Spacing",
      color: "#00b894",
      effect: (value) => {
        const spacing = (value / 100) * 30;
        title.style.letterSpacing = `${spacing}px`;
      }
    },
    {
      label: "Opacity Thief",
      color: "#e17055",
      effect: (value) => {
        const opacity = 1 - (value / 100) * 0.9;
        title.style.opacity = opacity;
        subtitle.style.opacity = opacity;
      }
    },
    {
      label: "Shake Level",
      color: "#74b9ff",
      effect: (value) => {
        if (value > 50) {
          const intensity = ((value - 50) / 50) * 10;
          app.style.animation = `shake ${0.5 - (value/200)}s infinite`;
          if (!document.getElementById('shake-style')) {
            const style = document.createElement('style');
            style.id = 'shake-style';
            style.textContent = `
              @keyframes shake {
                0%, 100% { transform: translateX(0); }
                25% { transform: translateX(-${intensity}px) rotate(-1deg); }
                75% { transform: translateX(${intensity}px) rotate(1deg); }
              }
            `;
            document.head.appendChild(style);
          }
        } else {
          app.style.animation = 'none';
        }
      }
    },
    {
      label: "Invert World",
      color: "#636e72",
      effect: (value) => {
        const invert = (value / 100) * 100;
        document.body.style.filter = `invert(${invert}%)`;
      }
    }
  ];

  // Create sliders at random positions
  const numSliders = 8; // Number of sliders to create
  const usedEffects = [];
  const sliderElements = [];

  for (let i = 0; i < numSliders; i++) {
    // Pick a random effect that hasn't been used
    let effectIndex;
    do {
      effectIndex = Math.floor(Math.random() * sliderEffects.length);
    } while (usedEffects.includes(effectIndex));
    usedEffects.push(effectIndex);
    
    const effect = sliderEffects[effectIndex];

    // Create slider container
    const sliderContainer = document.createElement("div");
    sliderContainer.style.position = "absolute";
    sliderContainer.style.left = `${Math.random() * 70 + 5}%`;
    sliderContainer.style.top = `${Math.random() * 70 + 5}%`;
    sliderContainer.style.display = "flex";
    sliderContainer.style.flexDirection = "column";
    sliderContainer.style.alignItems = "center";
    sliderContainer.style.padding = "10px";
    sliderContainer.style.background = "transparent";
    sliderContainer.style.cursor = "move";
    sliderContainer.style.zIndex = "10";
    
    // Random rotation for splattered look
    const randomRotation = Math.random() * 360 - 180; // -180 to 180 degrees
    sliderContainer.style.transform = `rotate(${randomRotation}deg)`;
    sliderContainer.dataset.rotation = randomRotation;

    // Make draggable
    let isDragging = false;
    let offsetX, offsetY;
    
    sliderContainer.addEventListener("mousedown", (e) => {
      if (e.target.tagName !== "INPUT") {
        isDragging = true;
        offsetX = e.clientX - sliderContainer.getBoundingClientRect().left;
        offsetY = e.clientY - sliderContainer.getBoundingClientRect().top;
        sliderContainer.style.zIndex = "1000";
      }
    });

    document.addEventListener("mousemove", (e) => {
      if (isDragging) {
        const containerRect = chaosContainer.getBoundingClientRect();
        let newX = e.clientX - containerRect.left - offsetX;
        let newY = e.clientY - containerRect.top - offsetY;
        sliderContainer.style.left = `${newX}px`;
        sliderContainer.style.top = `${newY}px`;
      }
    });

    document.addEventListener("mouseup", () => {
      isDragging = false;
      sliderContainer.style.zIndex = "10";
    });

    // Hover effect (preserve rotation)
    sliderContainer.addEventListener("mouseenter", () => {
      sliderContainer.style.transform = `rotate(${randomRotation}deg) scale(1.05)`;
    });
    sliderContainer.addEventListener("mouseleave", () => {
      sliderContainer.style.transform = `rotate(${randomRotation}deg)`;
    });

    // Label
    const label = document.createElement("span");
    label.textContent = effect.label;
    label.style.fontFamily = "monospace";
    label.style.fontSize = "12px";
    label.style.fontWeight = "bold";
    label.style.color = "#000";
    label.style.marginBottom = "5px";
    sliderContainer.appendChild(label);

    // Slider
    const slider = document.createElement("input");
    slider.type = "range";
    slider.min = "0";
    slider.max = "100";
    slider.value = "0";
    slider.style.width = "200px";
    slider.style.height = "6px";
    slider.style.cursor = "pointer";
    slider.style.accentColor = "#000";

    slider.addEventListener("input", () => {
      effect.effect(parseInt(slider.value));
    });

    sliderContainer.appendChild(slider);

    // Value display
    const valueDisplay = document.createElement("span");
    valueDisplay.textContent = "0";
    valueDisplay.style.fontFamily = "monospace";
    valueDisplay.style.fontSize = "10px";
    valueDisplay.style.color = "#000";
    valueDisplay.style.marginTop = "3px";
    
    slider.addEventListener("input", () => {
      valueDisplay.textContent = slider.value;
    });
    
    sliderContainer.appendChild(valueDisplay);
    chaosContainer.appendChild(sliderContainer);
    sliderElements.push({ container: sliderContainer, slider, effect });
  }

  // Reset button
  const resetButton = document.createElement("button");
  resetButton.textContent = "Reset Chaos";
  resetButton.style.position = "fixed";
  resetButton.style.bottom = "20px";
  resetButton.style.right = "20px";
  resetButton.style.padding = "10px 20px";
  resetButton.style.fontSize = "14px";
  resetButton.style.fontFamily = "monospace";
  resetButton.style.border = "1px solid #000";
  resetButton.style.borderRadius = "4px";
  resetButton.style.background = "#fff";
  resetButton.style.cursor = "pointer";
  resetButton.style.opacity = "0.5";
  resetButton.style.zIndex = "9999";
  
  resetButton.addEventListener("mouseenter", () => resetButton.style.opacity = "1");
  resetButton.addEventListener("mouseleave", () => resetButton.style.opacity = "0.7");
  
  resetButton.addEventListener("click", () => {
    // Reset all sliders to 0
    sliderElements.forEach(({ slider }) => {
      slider.value = "0";
      slider.dispatchEvent(new Event('input'));
    });
    
    // Reset all styles
    app.style.transform = "none";
    app.style.animation = "none";
    title.style.transform = "none";
    title.style.marginTop = "0";
    title.style.letterSpacing = "0";
    title.style.opacity = "1";
    title.style.fontFamily = "monospace";
    title.textContent = "Slider Chaos";
    subtitle.textContent = "Move the sliders... if you dare";
    subtitle.style.opacity = "1";
    subtitle.style.fontFamily = "monospace";
    chaosContainer.style.filter = "none";
    chaosContainer.style.transform = "none";
    document.body.style.backgroundColor = "";
    document.body.style.cursor = "default";
    document.body.style.filter = "none";
    document.title = "UnconventionalUI";
  });
  
  app.appendChild(resetButton);

  // Random chaos button
  const randomButton = document.createElement("button");
  randomButton.textContent = "Random Chaos";
  randomButton.style.position = "fixed";
  randomButton.style.bottom = "20px";
  randomButton.style.right = "150px";
  randomButton.style.padding = "10px 20px";
  randomButton.style.fontSize = "14px";
  randomButton.style.fontFamily = "monospace";
  randomButton.style.border = "1px solid #000";
  randomButton.style.borderRadius = "4px";
  randomButton.style.background = "#fff";
  randomButton.style.cursor = "pointer";
  randomButton.style.opacity = "0.5";
  randomButton.style.zIndex = "9999";
  
  randomButton.addEventListener("mouseenter", () => randomButton.style.opacity = "1");
  randomButton.addEventListener("mouseleave", () => randomButton.style.opacity = "0.7");
  
  randomButton.addEventListener("click", () => {
    sliderElements.forEach(({ slider }) => {
      slider.value = Math.floor(Math.random() * 100);
      slider.dispatchEvent(new Event('input'));
    });
  });
  
  app.appendChild(randomButton);
}
