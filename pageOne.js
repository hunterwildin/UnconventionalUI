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
byLine.style.marginBottom = "-100px"; //SYD CHANGED THIS! 
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


buttonIcon.src = "icon assets/double_forward_arrow.svg"; //SYD CHANGED THIS! 

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
