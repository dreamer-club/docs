---
title: K8S&AMP 安装步骤
---

## 一.安装包构成

- kubespray：k8s集群和AMP平台的安装文件
- kubespray_cache：安装k8s和AMP平台需要用到的安装包和容器镜像
- kubespray-v2.23.0.tar：kubespray安装环境镜像

## 二.安装步骤

### 2.1 拷贝安装包

把安装包拷贝到安装机器上，解压，进入AMP目录

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
修改/kubespray/inventory/mycluster/hosts.yaml 文件，配置master节点、worker节点和etcd节点

### 2.5 安装k8s集群

登录容器，docker exec -it 容器id

```shell
ansible-playbook -i inventory/mycluster/hosts.yaml --private-key /root/.ssh/id_rsa --become --become-user=root cluster.yml
```

### 2.6 安装kubevela

```shell
ansible-playbook -i inventory/mycluster/hosts.yaml --private-key /root/.ssh/id_rsa amp.yml
```

### 2.7 重置集群

登录容器，docker exec -it 容器id

```shell
ansible-playbook -i inventory/mycluster/hosts.yaml --private-key /root/.ssh/id_rsa --become --become-user=root reset.yml
```

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
