---
sidebar_position: 1
---
# AMP 安装包

## 一.安装包构成
kubespray：k8s集群和AMP平台的安装文件
kubespray_cache：安装k8s和AMP平台需要用到的安装包和容器镜像
kubespray-v2.23.0.tar：kubespray安装环境镜像

## 二.安装步骤
### 2.1 拷贝安装包
把安装包拷贝到安装机器上，解压，进入AMP目录

### 2.2 配置无密码访问
配置安装节点到容器集群节点的ssh免密登录，以及第一个master节点到node节点之间的ssh免密登录。
(sync_host 是将master[0]上的 /etc/hosts 同步到其他node 节点，因此需要 从 master[0]可以免密登录其他node节点)

### 2.3 加载安装镜像
docker load -i kubespray-v2.23.0.tar              

### 2.3 启动安装容器
docker run -it -d --mount type=bind,source="$(pwd)"/kubespray,dst=/kubespray \
--mount type=bind,source="$(pwd)"/kubespray_cache,dst=/tmp/kubespray_cache  \
--mount type=bind,source="${HOME}"/.ssh/,dst=/root/.ssh/ quay.io/kubespray/kubespray:v2.23.0 bash

### 2.4 配置集群信息
登录容器，docker exec -it 容器id
修改/kubespray/inventory/mycluster/hosts.yaml 文件，配置master节点、worker节点和etcd节点

### 2.5 安装k8s集群
登录容器，docker exec -it 容器id
ansible-playbook -i inventory/mycluster/hosts.yaml --private-key /root/.ssh/id_rsa  --become --become-user=root cluster.yml

### 2.6 安装kubevela
ansible-playbook -i inventory/mycluster/hosts.yaml --private-key /root/.ssh/id_rsa amp.yml

### 2.7 重置集群
登录容器，docker exec -it 容器id
ansible-playbook -i inventory/mycluster/hosts.yaml --private-key /root/.ssh/id_rsa  --become --become-user=root reset.yml

## 三. 已验证OS版本
Centos7.9 minimal
Ubuntu 20.04 LTS
KylinOS V10 server
