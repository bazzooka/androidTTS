var exec = require('cordova/exec');

exports.coolMethod = function(arg0, success, error) {
    exec(success, error, "androidTTS", "coolMethod", [arg0]);
};

exports.speak = function(successCallback, errorCallback, text, queue){
	var options = {text: text, queue: queue};
	exec(successCallback, errorCallback, "androidTTS", "speak", [options]);
}
