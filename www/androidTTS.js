var exec = require('cordova/exec');

exports.coolMethod = function(arg0, success, error) {
    exec(success, error, "androidTTS", "coolMethod", [arg0]);
};

exports.speak = function(successCallback, errorCallback, text){
	var options = {text: text};
	exec(successCallback, errorCallback, "androidTTS", "speak", [options]);
}
