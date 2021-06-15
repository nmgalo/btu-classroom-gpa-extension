if (window == top) {
    chrome.runtime.onMessage.addListener(function (req, sender, sendResponse) {
        calculateGpa()
    });
}

const calculateGpa = () => {
	const gpaData = []
	const dataTable = document.getElementsByTagName("table")[0];
    const rows = dataTable.querySelectorAll("tr");
	for (let i = 1; i <= rows.length; i++) {
		let row = rows[i]
		if (typeof(row) != "undefined")
			gpaData.push({
				"mark": parseFloat(rows[i].childNodes[11].innerHTML.replace(/(<([^>]+)>)/gi, "")),
				"credit": parseInt(rows[i].childNodes[13].innerHTML.replace(/(<([^>]+)>)/gi, "")),
			})
	}
	let gpas = [];
	gpaData.map((item, index) => {
		if (item.mark >= 51)
			gpas = ((item.mark - 50) * 0.06 + 1) * item.credit
	})
	export_gpa = gpas.reduce((a, b) => a.mark + b.mark)
	console.log(export_gpa)


}
