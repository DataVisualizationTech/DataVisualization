为了防止冲突，建议每个人写自己的类和界面

一个请求的大致流程:
url->controller->servicce->
mapper(dataVisualization)->RecordMapper.xml(resources.mapper)

java包介绍：
不多说，Java类

resources包介绍：
mapper保存Mapper文件，里面是SQL语句和Service的联系
mybaits保存了MyBaits的配置文件件
static保存静态资源，如js的包等
templates保存前端页面，一般是HTML。
templates的页面只能通过url连接到Controller返回，不可以通过localhost:8080/trace.html访问

webapp包介绍：
这里保存了url可以直接访问的页面，如直接输入localhost:8080/trace.html就能访问的
