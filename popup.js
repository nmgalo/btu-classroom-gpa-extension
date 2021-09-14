
function init() {
    let bkg = chrome.extension.getBackgroundPage();
    document.getElementById("gpa").innerHTML = bkg.exportedGPA.toFixed(2)
}

window.onload = init;

