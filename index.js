var path = require('path'),
	fs = require('fs');

function malta_rename(o, options) {
	
	var self = this,
		start = new Date(),
		msg,
		pluginName = path.basename(path.dirname(__filename)),
		doErr = function (e) {
			console.log(('[ERROR on ' + o.name + ' using ' + pluginName + '] :').red());
			console.dir(e);
			self.stop();
		};
	return function (solve, reject){
		var dir = path.dirname(o.name);
		fs.rename(o.name, dir + '/' +  options.to, function (err) {
  			err && doErr(err);
  			var old = o.name + '';
  			o.name = dir + '/' +  options.to;
  			msg = 'plugin ' + pluginName.white() + ' renamed ' + old + ' to ' + o.name;
  			solve(o);
  			self.notifyAndUnlock(start, msg);
		});
	};
}
// malta_rename.ext = ['*'];
module.exports = malta_rename;