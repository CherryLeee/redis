redis

**优点:**

1、性能极高：读写速度极快，读是110000次/s，写是81000次/s。

2、丰富的数据类型，支持二进制的字符串、列表、哈希值、集合和有序集合等数据类型操作。

3、原子性：所有操作都是原子性的，意思就是要么成功执行要么失败完全不执行。

4、单个操作是原子性的。多个操作也支持事务，即原子性，通过MUTIL和EXEC指令包起来。

5、丰富的特性。支持 发布/订阅，通知，key过期等等特性。

**缺点:**

并不是我们所说的关系型数据库和非关系型数据库。支持key/value的存储格式。

**redis与mysql与mongodb的区别**

mysql安全性非常高，但是性能稍微差一点儿。
mongodb 性能非常高，容易丢数据。
redis 性能高，稳定性强。但是只是key/value数据库。