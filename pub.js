const cote = require('cote');

const randomPublisher = new cote.Publisher({
    name: 'Random Publisher',
    broadcasts: ['randomUpdate'],
});


setInterval(function(){
    const val = {
        val: Math.floor(Math.random() * 1000),
    };

    console.log('emitting', val);
    randomPublisher.publish('randomUpdate', val);

}, 3000);

