var should = require('should');
var gtwConsole = require('../asa-gtw-console');
var con;

describe('#init', function() {
  

  it('Create instance of console', function() {    
    should.doesNotThrow(() => {
      con = new gtwConsole(true);  
    }, 'The constructor must run.');
  });
  it('It\'s valid Obj', function() {    
    should.exist(con, 'The module return undefined.');
  });
  it('It\'s in debug mode', function() {
    should.exist(con._conf, '_debug field is undefined.');
    should.equal(con._conf.debug, true, '_debug field is false.');
  });
});

describe('#instanced', function() {  
  it('Pleacing LOG message', function() {    
    should.doesNotThrow(() => {
      con.log('it\'s a log');
    }, 'Log message.');
  });
  it('Pleacing DEBUG message', function() {    
    should.doesNotThrow(() => {
      con.debug('it\'s a debug message');
    }, 'Debug message.');
  });
  it('Pleacing ERROR message', function() {    
    should.doesNotThrow(() => {
      con.error('it\'s a debug message');
    }, 'Error message.');
  });
  it('Pleacing WARNING message', function() {    
    should.doesNotThrow(() => {
      con.warn('it\'s a debug message');
    }, 'Warning message.');
  });
  it('Pleacing GREEN message', function() {    
    should.doesNotThrow(() => {
      con.green('it\'s a debug message');
    }, 'Green message.');
  });
  it('Pleacing CYAN message', function() {    
    should.doesNotThrow(() => {
      con.cyan('it\'s a debug message');
    }, 'Cyan message.');
  });
  it('Pleacing MAGENTA message', function() {    
    should.doesNotThrow(() => {
      con.magenta('it\'s a debug message');
    }, 'Magenta message.');
  });  
});

describe('#prepare', function() {  
  it('Set app for testing', function() {    
    should.doesNotThrow(() => {
      gtwConsole._app = '[utest]';
    }, 'Log message.');
    should.equal(gtwConsole._app, '[utest]', 'The _app value must be \'[utest]\'.');
  });
});

describe('#static', function() {  
  it('Pleacing LOG message', function() {    
    should.doesNotThrow(() => {
      gtwConsole.log('it\'s a log');
    }, 'Log message.');
  });
  it('Pleacing DEBUG message', function() {    
    should.doesNotThrow(() => {
      con.debug('it\'s a debug message');
    }, 'Debug message.');
  });
  it('Pleacing ERROR message', function() {    
    should.doesNotThrow(() => {
      con.error('it\'s a debug message');
    }, 'Error message.');
  });
  it('Pleacing WARNING message', function() {    
    should.doesNotThrow(() => {
      con.warn('it\'s a debug message');
    }, 'Warning message.');
  });
  it('Pleacing GREEN message', function() {    
    should.doesNotThrow(() => {
      con.green('it\'s a debug message');
    }, 'Green message.');
  });
  it('Pleacing CYAN message', function() {    
    should.doesNotThrow(() => {
      con.cyan('it\'s a debug message');
    }, 'Cyan message.');
  });
  it('Pleacing MAGENTA message', function() {    
    should.doesNotThrow(() => {
      con.magenta('it\'s a debug message');
    }, 'Magenta message.');
  });  
});

