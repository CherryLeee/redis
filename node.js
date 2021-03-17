const redis = require('redis');

let client  = redis.createClient(6379, '127.0.0.1');
// 打印错误日志
client.on('error', function(err) {
    console.error(err);
});

// 字符串
// 可以正确的设置和读取字符串
client.set('name', 'cherry', redis.print);
client.get('name', redis.print);

// 哈希值
client.hset('person', 'name', 'cherry', redis.print);
client.hget('person', 'name', redis.print);

// 列表
client.lpush('links', 'a', redis.print);
client.lpush('links', 'b', redis.print);
client.lrange('links', 0, -1, redis.print);

// 集合
client.sadd('tags', 'a', redis.print);

// 如何在redis中模拟对象操作
client.hset('person', 'name', 'lyc', redis.print);
client.hset('person', 'age', '28', redis.print);
client.hset('person', 'home', 'beijing', redis.print);

// 保存在对象中
client.hkeys('person', (err, replies) => {
    console.log('replies', replies);
    let person = {};
    replies.forEach((key) => {
        client.hget('person', key, (err, val) => {
            person[key] = val;
            console.log('person', person);
        });
    });
})