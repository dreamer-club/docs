"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[857],{6320:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var l=n(1527),r=n(8672);const o={title:"K8S&AMP \u5b89\u88c5\u6b65\u9aa4"},t=void 0,i={id:"AMP-install",title:"K8S&AMP \u5b89\u88c5\u6b65\u9aa4",description:"\u4e00.\u5b89\u88c5\u5305\u6784\u6210",source:"@site/docs/AMP-install.md",sourceDirName:".",slug:"/AMP-install",permalink:"/docs/AMP-install",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"K8S&AMP \u5b89\u88c5\u6b65\u9aa4"},sidebar:"docs",next:{title:"\u7528\u6237\u624b\u518c",permalink:"/docs/user-manual/"}},a={},c=[{value:"\u4e00.\u5b89\u88c5\u5305\u6784\u6210",id:"\u4e00\u5b89\u88c5\u5305\u6784\u6210",level:2},{value:"\u4e8c.\u5b89\u88c5\u6b65\u9aa4",id:"\u4e8c\u5b89\u88c5\u6b65\u9aa4",level:2},{value:"2.1 \u51c6\u5907\u5b89\u88c5\u8282\u70b9\uff0c\u5efa\u8bae\u4f7f\u7528Centos\u3001Ubuntu\u3002",id:"21-\u51c6\u5907\u5b89\u88c5\u8282\u70b9\u5efa\u8bae\u4f7f\u7528centosubuntu",level:3},{value:"2.2 \u914d\u7f6e\u65e0\u5bc6\u7801\u8bbf\u95ee",id:"22-\u914d\u7f6e\u65e0\u5bc6\u7801\u8bbf\u95ee",level:3},{value:"2.3 \u52a0\u8f7d\u5b89\u88c5\u955c\u50cf",id:"23-\u52a0\u8f7d\u5b89\u88c5\u955c\u50cf",level:3},{value:"2.3 \u542f\u52a8\u5b89\u88c5\u5bb9\u5668",id:"23-\u542f\u52a8\u5b89\u88c5\u5bb9\u5668",level:3},{value:"2.4 \u914d\u7f6e\u96c6\u7fa4\u4fe1\u606f",id:"24-\u914d\u7f6e\u96c6\u7fa4\u4fe1\u606f",level:3},{value:"2.5 \u5b89\u88c5k8s\u96c6\u7fa4",id:"25-\u5b89\u88c5k8s\u96c6\u7fa4",level:3},{value:"2.6 \u5b89\u88c5kubevela",id:"26-\u5b89\u88c5kubevela",level:3},{value:"2.7 \u767b\u5f55Tuna",id:"27-\u767b\u5f55tuna",level:3},{value:"\u4e09. \u5df2\u9a8c\u8bc1OS\u7248\u672c",id:"\u4e09-\u5df2\u9a8c\u8bc1os\u7248\u672c",level:2},{value:"\u56db. \u6dfb\u52a0k8s worker\u8282\u70b9",id:"\u56db-\u6dfb\u52a0k8s-worker\u8282\u70b9",level:2},{value:"\u4e94. \u5220\u9664k8s worker\u8282\u70b9",id:"\u4e94-\u5220\u9664k8s-worker\u8282\u70b9",level:2},{value:"\u516d. \u6dfb\u52a0k8s master\u8282\u70b9",id:"\u516d-\u6dfb\u52a0k8s-master\u8282\u70b9",level:2},{value:"\u4e03. \u5220\u9664k8s master\u8282\u70b9",id:"\u4e03-\u5220\u9664k8s-master\u8282\u70b9",level:2}];function d(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.h2,{id:"\u4e00\u5b89\u88c5\u5305\u6784\u6210",children:"\u4e00.\u5b89\u88c5\u5305\u6784\u6210"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"kubespray-master.zip\uff1akubespray\u6e90\u7801\u5305"}),"\n",(0,l.jsx)(s.li,{children:"kubespray_cache20240109.tar.gz\uff1a\u5b89\u88c5k8s\u548cAMP\u5e73\u53f0\u9700\u8981\u7528\u5230\u7684\u5b89\u88c5\u5305\u548c\u5bb9\u5668\u955c\u50cf"}),"\n",(0,l.jsxs)(s.li,{children:["kubespray-v2.23.0.tar\uff1aansible\u8fd0\u884c\u73af\u5883docker\u955c\u50cf\n\u4e0b\u8f7d\u5730\u5740\uff1a\u94fe\u63a5\uff1a",(0,l.jsx)(s.a,{href:"https://pan.baidu.com/s/107wpbEV_ZNhSm4wYJNNLnw",children:"https://pan.baidu.com/s/107wpbEV_ZNhSm4wYJNNLnw"}),"  \u63d0\u53d6\u7801\uff1ajvd4"]}),"\n"]}),"\n",(0,l.jsx)(s.h2,{id:"\u4e8c\u5b89\u88c5\u6b65\u9aa4",children:"\u4e8c.\u5b89\u88c5\u6b65\u9aa4"}),"\n",(0,l.jsx)(s.h3,{id:"21-\u51c6\u5907\u5b89\u88c5\u8282\u70b9\u5efa\u8bae\u4f7f\u7528centosubuntu",children:"2.1 \u51c6\u5907\u5b89\u88c5\u8282\u70b9\uff0c\u5efa\u8bae\u4f7f\u7528Centos\u3001Ubuntu\u3002"}),"\n",(0,l.jsxs)(s.ol,{children:["\n",(0,l.jsx)(s.li,{children:"\u9996\u5148\u5b89\u88c5docker\uff0c\u652f\u6301\u7684\u7248\u672c\u662f18.09, 19.03, 20.10, 23.0 and 24.0. \u63a8\u8350\u4f7f\u752820.10\u3002"}),"\n",(0,l.jsx)(s.li,{children:"\u5c06\u4e0b\u8f7d\u597d\u7684kubespray-master.zip\u548ckubespray_cache20240109.tar.gz\u62f7\u8d1d\u5230\u5b89\u88c5\u8282\u70b9\u5e76\u89e3\u538b\u3002"}),"\n"]}),"\n",(0,l.jsx)(s.h3,{id:"22-\u914d\u7f6e\u65e0\u5bc6\u7801\u8bbf\u95ee",children:"2.2 \u914d\u7f6e\u65e0\u5bc6\u7801\u8bbf\u95ee"}),"\n",(0,l.jsxs)(s.p,{children:["\u914d\u7f6e\u5b89\u88c5\u8282\u70b9\u5230\u5bb9\u5668\u96c6\u7fa4\u8282\u70b9\u7684ssh\u514d\u5bc6\u767b\u5f55\uff0c\u4ee5\u53ca\u7b2c\u4e00\u4e2amaster\u8282\u70b9\u5230node\u8282\u70b9\u4e4b\u95f4\u7684ssh\u514d\u5bc6\u767b\u5f55\u3002\n(",(0,l.jsx)(s.code,{children:"sync_host"})," \u662f\u5c06 ",(0,l.jsx)(s.code,{children:"master[0]"})," \u4e0a\u7684 ",(0,l.jsx)(s.code,{children:"/etc/hosts"})," \u540c\u6b65\u5230\u5176\u4ed6node \u8282\u70b9\uff0c\u56e0\u6b64\u9700\u8981 \u4ece ",(0,l.jsx)(s.code,{children:"master[0]"}),"\u53ef\u4ee5\u514d\u5bc6\u767b\u5f55\u5176\u4ed6node\u8282\u70b9)"]}),"\n",(0,l.jsx)(s.h3,{id:"23-\u52a0\u8f7d\u5b89\u88c5\u955c\u50cf",children:"2.3 \u52a0\u8f7d\u5b89\u88c5\u955c\u50cf"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-shell",children:"docker load -i kubespray-v2.23.0.tar\n"})}),"\n",(0,l.jsx)(s.h3,{id:"23-\u542f\u52a8\u5b89\u88c5\u5bb9\u5668",children:"2.3 \u542f\u52a8\u5b89\u88c5\u5bb9\u5668"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-shell",children:'docker run -it -d --mount type=bind,source="$(pwd)"/kubespray,dst=/kubespray \\\n--mount type=bind,source="$(pwd)"/kubespray_cache,dst=/tmp/kubespray_cache \\\n--mount type=bind,source="${HOME}"/.ssh/,dst=/root/.ssh/ quay.io/kubespray/kubespray:v2.23.0 bash\n'})}),"\n",(0,l.jsx)(s.h3,{id:"24-\u914d\u7f6e\u96c6\u7fa4\u4fe1\u606f",children:"2.4 \u914d\u7f6e\u96c6\u7fa4\u4fe1\u606f"}),"\n",(0,l.jsx)(s.p,{children:"\u767b\u5f55\u5bb9\u5668\uff0cdocker exec -it \u5bb9\u5668id\n\u4fee\u6539/kubespray/inventory/mycluster/hosts.yaml \u6587\u4ef6\uff0c\u914d\u7f6emaster\u8282\u70b9\u3001worker\u8282\u70b9\u548cetcd\u8282\u70b9\u3002"}),"\n",(0,l.jsx)(s.p,{children:"hosts.yaml\u6587\u4ef6\u793a\u4f8b\uff1a\n(node1\u662fmaster\u8282\u70b9\uff0c\u4e5f\u662fetcd\u8282\u70b9\uff0c\u5e76\u4e14\u4f5c\u4e3anode\u8282\u70b9\u3002node2\u4ec5\u4f5c\u4e3anode\u8282\u70b9)"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{children:"all:\n  hosts:\n    node1:\n      ansible_host: 192.168.0.201\n      ip: 192.168.0.201\n      access_ip: 192.168.0.201\n    node2:\n      ansible_host: 192.168.0.202\n      ip: 192.168.0.202\n      access_ip: 192.168.0.202\n  children:\n    kube_control_plane:\n      hosts:\n        node1:\n    kube_node:\n      hosts:\n        node1:\n        node2:\n    etcd:\n      hosts:\n        node1:\n    k8s_cluster:\n      children:\n        kube_control_plane:\n        kube_node:\n    calico_rr:\n      hosts: {}\n"})}),"\n",(0,l.jsx)(s.h3,{id:"25-\u5b89\u88c5k8s\u96c6\u7fa4",children:"2.5 \u5b89\u88c5k8s\u96c6\u7fa4"}),"\n",(0,l.jsx)(s.p,{children:"\u767b\u5f55\u5bb9\u5668\uff0cdocker exec -it \u5bb9\u5668id"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-shell",children:"ansible-playbook -i inventory/mycluster/hosts.yaml --private-key /root/.ssh/id_rsa --become --become-user=root cluster.yml\n"})}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.img,{src:"https://github.com/dreamer-club/docs/assets/16743178/6ac5f231-9432-4858-9f5a-4b2b0a059aee",alt:"k8s\u5b89\u88c5\u5b8c\u6210"})}),"\n",(0,l.jsx)(s.h3,{id:"26-\u5b89\u88c5kubevela",children:"2.6 \u5b89\u88c5kubevela"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-shell",children:"ansible-playbook -i inventory/mycluster/hosts.yaml --private-key /root/.ssh/id_rsa amp.yml\n"})}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.img,{src:"https://github.com/dreamer-club/docs/assets/16743178/262f79cf-33bf-4c17-9279-0430cae22390",alt:"AMP\u5b89\u88c5\u5b8c\u6210"})}),"\n",(0,l.jsx)(s.h3,{id:"27-\u767b\u5f55tuna",children:"2.7 \u767b\u5f55Tuna"}),"\n",(0,l.jsxs)(s.ol,{children:["\n",(0,l.jsxs)(s.li,{children:["\u6d4f\u89c8\u5668\u8f93\u5165k8s\u63a7\u5236\u8282\u70b9IP\u5730\u5740\uff0c\u6211\u8fd9\u91cc\u662f ",(0,l.jsx)(s.a,{href:"http://192.168.0.201/%EF%BC%8C%E9%A6%96%E5%85%88%E8%AE%BE%E5%AE%9A%E7%99%BB%E5%BD%95%E8%B4%A6%E5%8F%B7%E5%AF%86%E7%A0%81%E3%80%82",children:"http://192.168.0.201/\uff0c\u9996\u5148\u8bbe\u5b9a\u767b\u5f55\u8d26\u53f7\u5bc6\u7801\u3002"}),"\n",(0,l.jsx)(s.img,{src:"https://github.com/dreamer-club/docs/assets/16743178/93648e30-922a-4efb-81e1-5f826fa31b5d",alt:"\u8f93\u5165\u8d26\u53f7\u5bc6\u7801"})]}),"\n",(0,l.jsxs)(s.li,{children:["\u767b\u5f55\n",(0,l.jsx)(s.img,{src:"https://github.com/dreamer-club/docs/assets/16743178/eddb87e6-2a9f-4956-823b-f487453f47bc",alt:"\u767b\u5f55\u754c\u9762"})]}),"\n",(0,l.jsxs)(s.li,{children:["\u5f00\u59cb\u4f7f\u7528\n",(0,l.jsx)(s.img,{src:"https://github.com/dreamer-club/docs/assets/16743178/57f466e6-9bfa-499b-97ac-6e801c5e7615",alt:"\u767b\u5f55\u4e4b\u540e"})]}),"\n"]}),"\n",(0,l.jsx)(s.h2,{id:"\u4e09-\u5df2\u9a8c\u8bc1os\u7248\u672c",children:"\u4e09. \u5df2\u9a8c\u8bc1OS\u7248\u672c"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-text",children:"Centos7.9 minimal\nUbuntu 20.04 LTS\nKylinOS V10 server\n"})}),"\n",(0,l.jsx)(s.h2,{id:"\u56db-\u6dfb\u52a0k8s-worker\u8282\u70b9",children:"\u56db. \u6dfb\u52a0k8s worker\u8282\u70b9"}),"\n",(0,l.jsxs)(s.ol,{children:["\n",(0,l.jsx)(s.li,{children:"\u7f16\u8f91hosts.yaml\u6587\u4ef6\uff0c\u5c06\u9700\u8981\u589e\u52a0\u7684worker\u8282\u70b9\u4fe1\u606f\u6dfb\u52a0\u8fdb\u53bb\uff0c\u4fdd\u5b58\u3002"}),"\n",(0,l.jsx)(s.li,{children:"\u6267\u884c ansible-playbook -i inventory/mycluster/hosts.yaml --private-key /root/.ssh/id_rsa --become --become-user=root scale.yml"}),"\n"]}),"\n",(0,l.jsx)(s.h2,{id:"\u4e94-\u5220\u9664k8s-worker\u8282\u70b9",children:"\u4e94. \u5220\u9664k8s worker\u8282\u70b9"}),"\n",(0,l.jsxs)(s.ol,{children:["\n",(0,l.jsx)(s.li,{children:"\u5982\u679c\u8981\u5220\u9664\u7684\u8282\u70b9\u4ecd\u7136\u5904\u4e8eReady\u72b6\u6001\uff0c\u6267\u884c ansible-playbook -i inventory/mycluster/hosts.yaml --private-key /root/.ssh/id_rsa --become --become-user=root remove-node.yml -e node=NODE_NAME \u5c06NODE_NAME\u66ff\u6362\u6210\u8981\u5220\u9664\u7684\u8282\u70b9\u540d\u79f0"}),"\n",(0,l.jsx)(s.li,{children:"\u5982\u679c\u8981\u5220\u9664\u7684\u8282\u70b9\u5df2\u79bb\u7ebf\uff0c\u6267\u884cansible-playbook -i inventory/mycluster/hosts.yaml --private-key /root/.ssh/id_rsa --become --become-user=root remove-node.yml -e node=NODE_NAME -e reset_nodes=false -e allow_ungraceful_removal=true \u5f3a\u5236\u5220\u9664\u8282\u70b9\u3002\u5c06NODE_NAME\u66ff\u6362\u6210\u8981\u5220\u9664\u7684\u8282\u70b9\u540d\u79f0"}),"\n",(0,l.jsx)(s.li,{children:"\u7f16\u8f91host.yaml\u5c06\u5df2\u5220\u9664\u8282\u70b9\u7684\u4fe1\u606f\u53bb\u9664\u3002"}),"\n"]}),"\n",(0,l.jsx)(s.h2,{id:"\u516d-\u6dfb\u52a0k8s-master\u8282\u70b9",children:"\u516d. \u6dfb\u52a0k8s master\u8282\u70b9"}),"\n",(0,l.jsxs)(s.ol,{children:["\n",(0,l.jsx)(s.li,{children:"\u7f16\u8f91hosts.yaml\u6587\u4ef6\uff0c\u5c06\u9700\u8981\u589e\u52a0\u7684master \u8282\u70b9\u4fe1\u606f\u6dfb\u52a0\u8fdb\u53bb\uff0c\u4fdd\u5b58\u3002"}),"\n",(0,l.jsx)(s.li,{children:"\u6267\u884c ansible-playbook -i inventory/mycluster/hosts.yaml --private-key /root/.ssh/id_rsa --become --become-user=root cluster.yml"}),"\n"]}),"\n",(0,l.jsx)(s.h2,{id:"\u4e03-\u5220\u9664k8s-master\u8282\u70b9",children:"\u4e03. \u5220\u9664k8s master\u8282\u70b9"}),"\n",(0,l.jsxs)(s.ol,{children:["\n",(0,l.jsx)(s.li,{children:"\u5982\u679c\u8981\u5220\u9664\u7684\u8282\u70b9\u4ecd\u7136\u5904\u4e8eReady\u72b6\u6001\uff0c\u6267\u884cansible-playbook -i inventory/mycluster/hosts.yaml --private-key /root/.ssh/id_rsa --become --become-user=root remove-node.yml -e node=NODE_NAME  \u5c06NODE_NAME\u66ff\u6362\u6210\u8981\u5220\u9664\u7684\u8282\u70b9\u540d\u79f0"}),"\n",(0,l.jsx)(s.li,{children:"\u5982\u679c\u8981\u5220\u9664\u7684\u8282\u70b9\u5df2\u79bb\u7ebf\uff0c\u6267\u884cansible-playbook -i inventory/mycluster/hosts.yaml --private-key /root/.ssh/id_rsa --become --become-user=root remove-node.yml -e node=NODE_NAME -e reset_nodes=false -e allow_ungraceful_removal=true \u5f3a\u5236\u5220\u9664\u8282\u70b9\u3002\u5c06NODE_NAME\u66ff\u6362\u6210\u8981\u5220\u9664\u7684\u8282\u70b9\u540d\u79f0"}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},8672:(e,s,n)=>{n.d(s,{Z:()=>i,a:()=>t});var l=n(959);const r={},o=l.createContext(r);function t(e){const s=l.useContext(o);return l.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),l.createElement(o.Provider,{value:s},e.children)}}}]);