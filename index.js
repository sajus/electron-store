'use strict';
const electron = require('electron');
const Conf = require('conf');

class ElectronConfig extends Conf {
	constructor(opts) {
		opts = Object.assign({name: 'config'}, opts);

		try {
			opts.cwd = electron.remote.app.getPath('userData');
		} catch(e) {
			try {
				opts.cwd = electron.app.getPath('userData');
			} catch(e) {
				opts.cwd = ''
			}
		}

		opts.configName = opts.name;
		delete opts.name;
		super(opts);
	}
}

module.exports = ElectronConfig;
