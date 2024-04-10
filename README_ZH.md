# Ant Design Pro

This project is initialized with [Ant Design Pro](https://pro.ant.design). Follow is the quick guide for how to use.

### 安装

案例使用 `umi@4`

### 启动

```bash
npm run start
```

### 问题处理

ssh 问题：

```bash
export NODE_OPTIONS=--openssl-legacy-provider
```

## SQl

```sql
create table user
(
    username     varchar(256)                       null comment '用户昵称',
    id           bigint auto_increment comment 'id'
        primary key,
    userAccount  varchar(256)                       null comment '账号',
    avatarUrl    varchar(1024)                      null comment '用户头像',
    gender       tinyint                            null comment '性别',
    userPassword varchar(512)                       not null comment '密码',
    phone        varchar(128)                       null comment '电话',
    email        varchar(512)                       null comment '邮箱',
    userStatus   int      default 0                 not null comment '状态 0 - 正常',
    createTime   datetime default CURRENT_TIMESTAMP null comment '创建时间',
    updateTime   datetime default CURRENT_TIMESTAMP null on update CURRENT_TIMESTAMP,
    isDelete     tinyint  default 0                 not null comment '是否删除',
    userRole     int      default 0                 not null comment '用户角色 0 - 普通用户 1 - 管理员',
    planetCode   varchar(512)                       null comment '星球编号'
)
    comment '用户';

INSERT INTO yupi.`user` (username,userAccount,avatarUrl,gender,userPassword,phone,email,userStatus,createTime,updateTime,isDelete,userRole,planetCode) VALUES
	 ('1111','1111','https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',NULL,'f8de235116ca2ec0b8ee885b5c743072',NULL,NULL,0,'2024-04-09 10:20:16','2024-04-09 10:20:16',0,0,NULL);

```

## 参考

https://www.yuque.com/moyan-awh3b/nccb2c/rwfw3y?#kuHLs

https://ant-design.antgroup.com/index-cn
