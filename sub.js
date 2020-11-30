const cote = require('cote')

const randomSubscriber = new cote.Subscriber({
    name: 'Random Subscriber',
    subscribesTo: ['randomUpdate'],
});

randomSubscriber.on('randomUpdate', (req) =>{
    console.log('notified of', req);
});