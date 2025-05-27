const EventEmitter = require('events');

const emitter = new EventEmitter();

// Listen for the event
emitter.on('bellRing', () => {
  console.log('We Need to run ');
});

setTimeout(()=>{
  emitter.emit('bellRing');

},2000)
// Raise the event
