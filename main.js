let pageOneOn =true
let pageTwoOn = true;  
let pageThreeOn = false;

const app = document.createElement("div");
document.body.appendChild(app);

app.style.width = "100vw";
app.style.height = "100vh";
app.style.display = "flex";
app.style.alignItems = "center";
app.style.justifyContent = "center";
app.style.fontFamily = "monospace";
app.style.zIndex = '-1';





//initial call to page one
if (pageOneOn) {
    pageOne();

} else if (pageTwoOn) {
    pageTwo();

} else if (pageThreeOn) {
    pageThree();
}
