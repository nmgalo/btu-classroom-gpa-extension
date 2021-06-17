// let gpas = {};
// let gpa = null;
// let selectedId = null;

// function updateSelected(tabId) {
//   gpa = gpas[tabId];
// }

// function updateGPA(tabId) {
//   chrome.tabs.sendMessage(tabId, {}, function (gpaData) {
//     gpas[tabId] = gpaData;
//   });
// }

// chrome.tabs.onUpdated.addListener(function (tabId, change, tab) {
//   updateGPA(tabId);
// });

// chrome.tabs.onActivated.addListener(function (activeInfo) {
//   selectedId = activeInfo.tabId;
// });

// chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//   updateGPA(tabs[0].id);
// });
