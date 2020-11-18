# 网关服务

微服务的网关，负责整体系统认证和鉴权，以及日志追踪。

## 网关环境变量说明

|变量名称       |描述   | 默认值 
|------        |------ |---------
|`TYPEORM_HOST`  | 数据库的地址 | `localhost`
|`TYPEORM_PORT`  | 数据库的端口号 | `3306`
|`TYPEORM_USERNAME`| 数据库用户名 | - 
|`TYPEORM_PASSWORD`| 数据库密码   | -
|`TYPEORM_DATABASE`| 数据库的所属库 | -
|`TYPEORM_SYNCHRONIZE`| 是否将数据库和实体进行同步 | `false`
