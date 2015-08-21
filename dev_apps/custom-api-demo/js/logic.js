function api_success(value) {
	var p = document.getElementById('result');
	p.textContent = "Plugin return: " + value;
}

function api_fail(value) {
	var p = document.getElementById('result');
	p.textContent = value;
}

function test_api(ev) {
	navigator.engineeringMode.getValue("JrdSrv:Common:BatteryTemp").then(
		api_success,
		api_fail);
}

var button = document.getElementById('testapi');

button.addEventListener('click', test_api, false);
