//--------------------------------------------------------------
//**** IMPORTS *************************************************
//--------------------------------------------------------------
/*
https://www.npmjs.com/package/colour
*/
//--------------------------------------------------------------
//**** INFO ****************************************************
//--------------------------------------------------------------
/*
Emphasis: bold, italic, underline, inverse
Colors: yellow, cyan, white, magenta, green, red, grey, blue
Sequencers: rainbow, zebra, random
*/
//--------------------------------------------------------------
//**** MODULES *************************************************
//--------------------------------------------------------------
var Colour = require('colour');
//--------------------------------------------------------------
//**** VARS ****************************************************
//--------------------------------------------------------------
Colour.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'underline yellow', // Applies two styles at once 
  debug: 'blue',
  error: 'red bold' // Again, two styles 
});
//--------------------------------------------------------------
//**** OOD *****************************************************
//--------------------------------------------------------------
/**
 * Class GtwConsole
 */
var GtwConsole = function(conf){
	if(conf)
		this.config(conf);
};

GtwConsole._conf = { debug : true };

/**
 * Log test in standar color
 * @param {string} str - Text to log.
 */
GtwConsole.prototype.config = function(conf){
	if(conf === true){
		GtwConsole._conf.debug = true;
		this._conf = { debug : true };
	}
	else{
		GtwConsole._conf = conf;
		this._conf = conf;
	}
};

/**
 * Log test in standar color
 * @param {string} str - Text to log.
 */
GtwConsole.prototype.log = function(str){
	GtwConsole.log(str);
};
/**
 * Log test in red color
 * @param {string} str - Text to log.
 */
GtwConsole.prototype.error = function(str){
	GtwConsole.error(str);
};
/**
 * Log test in yellow color
 * @param {string} str - Text to log.
 */
GtwConsole.prototype.warn = function(str){
	GtwConsole.warn(str);
};
/**
 * Log test in green color
 * @param {string} str - Text to log.
 */
GtwConsole.prototype.green = function(str){
	GtwConsole.green(str);
};
/**
 * Log test in cyan color
 * @param {string} str - Text to log.
 */
GtwConsole.prototype.cyan = function(str){
	GtwConsole.cyan(str);
};
/**
 * Log test in magenta color
 * @param {string} str - Text to log.
 */
GtwConsole.prototype.magenta = function(str){
	GtwConsole.magenta(str);
};
/**
 * Log test in blue color
 * @param {string} str - Text to log.
 */
GtwConsole.prototype.debug = function(str){
	GtwConsole.debug(str);
};

//--------------------------------------------------------------¿ 
//**** STATIC **************************************************
//--------------------------------------------------------------
GtwConsole._logInFile = function(str){
	//
};

GtwConsole._app = "";

GtwConsole.log = function(str){
	console.log(GtwConsole._app + str.data);
	GtwConsole._logInFile("[inf]" + str);
};

GtwConsole.error = function(str){
	console.log(GtwConsole._app + str.error);
	GtwConsole._logInFile("[err]" + str);
};
GtwConsole.warn = function(str){
	console.log(GtwConsole._app + str.warn);
	GtwConsole._logInFile("[war]" + str);
};
GtwConsole.green = function(str){
	console.log(GtwConsole._app + str.green);
	GtwConsole._logInFile(str);
};
GtwConsole.cyan = function(str){
	console.log(GtwConsole._app + str.cyan);
	GtwConsole._logInFile(str);
};
GtwConsole.magenta = function(str){
	console.log(GtwConsole._app + str.magenta);
	GtwConsole._logInFile(str);
};
GtwConsole.debug = function(str){
	if(GtwConsole._conf.debug){
		console.log(GtwConsole._app + str.debug);
		GtwConsole._logInFile("[deb]" + str);	
	}	
};

//--------------------------------------------------------------
//**** EXPORT **************************************************
//--------------------------------------------------------------
global.GtwConsole = GtwConsole;
module.exports = GtwConsole;