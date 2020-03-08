const path = require('path'),
	fs = require('fs');

function malta_rename(o, options) {
	const self = this,
		start = new Date(),
        pluginName = path.basename(path.dirname(__filename));
    
    let msg;

	return function (solve, reject){
		var dir = path.dirname(o.name);
		fs.rename(o.name, dir + '/' +  options.to, err => {
  			err && self.doErr(err, o, pluginName);
  			var old = o.name + '';
  			o.name = dir + '/' +  options.to;
  			msg = 'plugin ' + pluginName.white() + ' renamed ' + old + ' to ' + o.name;
  			err
                ? reject(`Plugin ${pluginName} error:\n${err}`)
                : solve(o);
  			self.notifyAndUnlock(start, msg);
		});
	};
}
module.exports = malta_rename;