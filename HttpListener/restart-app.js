var forever = require('forever');

  var child = new(forever.Monitor)('http-listener.js', {
    max: 3,
    silent: false,
    'killTree': false
    })
  .on('start',function(){
    console.log('engine has loaded. - ');
    })
  .on('exit',function(){
    console.log('engine has exited after 3 restarts. - ');
    s();
    })
  .on('error',function(){
    console.log('err???');
    s();
  });


function s(){
  forever.startDaemon(child)
  //all produce errors I am misunderstanding
  forever.tail(child);
  //forever.tail(child,10);//length?
  //forever.tail(child,{stream:true});
}s()
