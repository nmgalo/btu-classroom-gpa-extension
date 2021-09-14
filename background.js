var gpas = {};
var exportedGPA = null;
var selectedId = null;

function updateResult(tabId) {
    chrome.tabs.sendMessage(tabId, {}, function (gpa) {
        gpas[tabId] = gpa;
        if (!gpa) {
            chrome.pageAction.hide(tabId);
        } else {
            chrome.pageAction.show(tabId);
            if (selectedId == tabId) {
                updateSelected(tabId);
            }
        }
    });
}

function updateSelected(tabId) {
    exportedGPA = gpas[tabId];
    if (exportedGPA)
        chrome.pageAction.setTitle({ tabId: tabId, title: `${exportedGPA}` });
}

chrome.tabs.onUpdated.addListener(function (tabId, change, tab) {
    if (change.status == "complete") {
        updateResult(tabId);
    }
});

chrome.tabs.onActivated.addListener(function (activeInfo) {
    selectedId = activeInfo.tabId;
    updateSelected(activeInfo.tabId);
});

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    updateResult(tabs[0].id);
});