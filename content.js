// const marks = document.querySelectorAll("table tr");

// marks.forEach((item) => {
//   let mark = item.querySelector("td:nth-child(6)");
//   if (mark != null) {
//     console.log(mark.innerHTML);
//   }
// });

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  if (msg.text === "report_back") {
    sendResponse(document.all[0].outerHTML);
  }
});
