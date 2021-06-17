// chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
//   sendResponse(calculateGpa());
// });

calculateGpa();

function calculateGpa() {
  const marks = document.querySelectorAll("table tr");
  const marks_result = [];
  marks.forEach((item) => {
    let mark = item.querySelector("td:nth-child(6)");
    if (
      mark != null &&
      item.querySelector("td:nth-child(2).text-success") != null
    ) {
      marks_result.push({
        mark: parseInt(mark.innerHTML),
        credit: parseInt(item.querySelector("td:nth-child(7)").innerHTML),
      });
    }
  });
  let gpas = [];
  let credits_sum = 0;
  marks_result.map((item, _) => {
    let gpa = (item["mark"] - 50) * 0.06 + 1;
    gpas.push(gpa * item["credit"]);
    credits_sum += item["credit"];
  });
  console.log(gpas.reduce((a, b) => a + b) / credits_sum);
  return gpas.reduce((a, b) => a + b) / credits_sum;
}
