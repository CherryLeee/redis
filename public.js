// redis 发布订阅
const redis = require('redis');

let client1 = redis.createClient(6379, '127.0.0.1');
let clinet2 = redis.createClient(6379, '127.0.0.1');

let count = 0;

client1.subscribe('channel_a'); // 监听
client1.subscribe('channel_b');
client1.on('message', function(channel, message) {
    console.log(channel, message);
    // 当收到第一条消息之后，立即取消订阅channel_b，那以后将不再接收频道b发过来的消息
    client1.unsubscribe('channel_b');
});

clinet2.publish('channel_a', 'hello');
clinet2.publish('channel_b', 'world');

setTimeout(function () {
    clinet2.publish('channel_a', 'hello1');
    clinet2.publish('channel_b', 'world1');
}, 2000);