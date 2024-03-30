---
title: K8S&AMP 安装步骤
---

## 一.安装包构成

- kubespray-master.zip：kubespray源码包
- kubespray_cache20240109.tar.gz：安装k8s和AMP平台需要用到的安装包和容器镜像
- kubespray-v2.23.0.tar：ansible运行环境docker镜像
下载地址：链接：https://pan.baidu.com/s/107wpbEV_ZNhSm4wYJNNLnw  提取码：jvd4 


## 二.安装步骤

### 2.1 准备安装节点，建议使用Centos、Ubuntu。
1. 首先安装docker，支持的版本是18.09, 19.03, 20.10, 23.0 and 24.0. 推荐使用20.10。
2. 将下载好的kubespray-master.zip和kubespray_cache20240109.tar.gz拷贝到安装节点并解压。

### 2.2 配置无密码访问

配置安装节点到容器集群节点的ssh免密登录，以及第一个master节点到node节点之间的ssh免密登录。
(`sync_host` 是将 `master[0]` 上的 `/etc/hosts` 同步到其他node 节点，因此需要 从 `master[0]`可以免密登录其他node节点)

### 2.3 加载安装镜像

```shell
docker load -i kubespray-v2.23.0.tar
```

### 2.3 启动安装容器

```shell
docker run -it -d --mount type=bind,source="$(pwd)"/kubespray,dst=/kubespray \
--mount type=bind,source="$(pwd)"/kubespray_cache,dst=/tmp/kubespray_cache \
--mount type=bind,source="${HOME}"/.ssh/,dst=/root/.ssh/ quay.io/kubespray/kubespray:v2.23.0 bash
```

### 2.4 配置集群信息

登录容器，docker exec -it 容器id
修改/kubespray/inventory/mycluster/hosts.yaml 文件，配置master节点、worker节点和etcd节点。

hosts.yaml文件示例：
(node1是master节点，也是etcd节点，并且作为node节点。node2仅作为node节点)
```
all:
  hosts:
    node1:
      ansible_host: 192.168.0.201
      ip: 192.168.0.201
      access_ip: 192.168.0.201
    node2:
      ansible_host: 192.168.0.202
      ip: 192.168.0.202
      access_ip: 192.168.0.202
  children:
    kube_control_plane:
      hosts:
        node1:
    kube_node:
      hosts:
        node1:
        node2:
    etcd:
      hosts:
        node1:
    k8s_cluster:
      children:
        kube_control_plane:
        kube_node:
    calico_rr:
      hosts: {}
```

### 2.5 安装k8s集群

登录容器，docker exec -it 容器id

```shell
ansible-playbook -i inventory/mycluster/hosts.yaml --private-key /root/.ssh/id_rsa --become --become-user=root cluster.yml
```
![k8s安装完成](https://github.com/dreamer-club/docs/assets/16743178/6ac5f231-9432-4858-9f5a-4b2b0a059aee)

### 2.6 安装kubevela

```shell
ansible-playbook -i inventory/mycluster/hosts.yaml --private-key /root/.ssh/id_rsa amp.yml
```
![AMP安装完成](https://github.com/dreamer-club/docs/assets/16743178/262f79cf-33bf-4c17-9279-0430cae22390)

### 2.7 登录Tuna
1. 浏览器输入k8s控制节点IP地址，我这里是 http://192.168.0.201/，首先设定登录账号密码。
   ![输入账号密码](https://github.com/dreamer-club/docs/assets/16743178/93648e30-922a-4efb-81e1-5f826fa31b5d)
2. 登录
   ![登录界面](https://github.com/dreamer-club/docs/assets/16743178/eddb87e6-2a9f-4956-823b-f487453f47bc)
3. 开始使用
   ![登录之后](https://github.com/dreamer-club/docs/assets/16743178/57f466e6-9bfa-499b-97ac-6e801c5e7615)


## 三. 已验证OS版本

```text
Centos7.9 minimal
Ubuntu 20.04 LTS
KylinOS V10 server
```
## 四. 添加k8s worker节点
1. 编辑hosts.yaml文件，将需要增加的worker节点信息添加进去，保存。
2. 执行 ansible-playbook -i inventory/mycluster/hosts.yaml --private-key /root/.ssh/id_rsa --become --become-user=root scale.yml
## 五. 删除k8s worker节点
1. 如果要删除的节点仍然处于Ready状态，执行 ansible-playbook -i inventory/mycluster/hosts.yaml --private-key /root/.ssh/id_rsa --become --become-user=root remove-node.yml -e node=NODE_NAME 将NODE_NAME替换成要删除的节点名称
2. 如果要删除的节点已离线，执行ansible-playbook -i inventory/mycluster/hosts.yaml --private-key /root/.ssh/id_rsa --become --become-user=root remove-node.yml -e node=NODE_NAME -e reset_nodes=false -e allow_ungraceful_removal=true 强制删除节点。将NODE_NAME替换成要删除的节点名称
3. 编辑host.yaml将已删除节点的信息去除。
## 六. 添加k8s master节点
1. 编辑hosts.yaml文件，将需要增加的master 节点信息添加进去，保存。
2. 执行 ansible-playbook -i inventory/mycluster/hosts.yaml --private-key /root/.ssh/id_rsa --become --become-user=root cluster.yml
## 七. 删除k8s master节点
1. 如果要删除的节点仍然处于Ready状态，执行ansible-playbook -i inventory/mycluster/hosts.yaml --private-key /root/.ssh/id_rsa --become --become-user=root remove-node.yml -e node=NODE_NAME  将NODE_NAME替换成要删除的节点名称
2. 如果要删除的节点已离线，执行ansible-playbook -i inventory/mycluster/hosts.yaml --private-key /root/.ssh/id_rsa --become --become-user=root remove-node.yml -e node=NODE_NAME -e reset_nodes=false -e allow_ungraceful_removal=true 强制删除节点。将NODE_NAME替换成要删除的节点名称
