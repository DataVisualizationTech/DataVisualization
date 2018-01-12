一个请求的大致流程:
url->controller->servicce->
mapper(dataVisualization)->RecordMapper.xml(resources.mapper)

resources包介绍：
mapper保存Mapper文件，里面是SQL语句和Service的联系
mybaits保存了MyBaits的配置文件件
static保存静态资源，如js的包等
templates保存前端页面，一般是HTML