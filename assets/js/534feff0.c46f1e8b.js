"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[618],{5601:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>d});var l=n(1527),r=n(8672);const o={title:"K8S&AMP \u5b89\u88c5\u6b65\u9aa4"},i=void 0,t={id:"amp-install",title:"K8S&AMP \u5b89\u88c5\u6b65\u9aa4",description:"\u4e00.\u5b89\u88c5\u5305\u6784\u6210",source:"@site/docs/amp-install.md",sourceDirName:".",slug:"/amp-install",permalink:"/docs/amp-install",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"K8S&AMP \u5b89\u88c5\u6b65\u9aa4"},sidebar:"docs",next:{title:"Tuna\u7528\u6237\u624b\u518c",permalink:"/docs/user-manual/"}},a={},d=[{value:"\u4e00.\u5b89\u88c5\u5305\u6784\u6210",id:"\u4e00\u5b89\u88c5\u5305\u6784\u6210",level:2},{value:"\u4e8c.\u5b89\u88c5\u6b65\u9aa4",id:"\u4e8c\u5b89\u88c5\u6b65\u9aa4",level:2},{value:"2.1 \u62f7\u8d1d\u5b89\u88c5\u5305",id:"21-\u62f7\u8d1d\u5b89\u88c5\u5305",level:3},{value:"2.2 \u914d\u7f6e\u65e0\u5bc6\u7801\u8bbf\u95ee",id:"22-\u914d\u7f6e\u65e0\u5bc6\u7801\u8bbf\u95ee",level:3},{value:"2.3 \u52a0\u8f7d\u5b89\u88c5\u955c\u50cf",id:"23-\u52a0\u8f7d\u5b89\u88c5\u955c\u50cf",level:3},{value:"2.3 \u542f\u52a8\u5b89\u88c5\u5bb9\u5668",id:"23-\u542f\u52a8\u5b89\u88c5\u5bb9\u5668",level:3},{value:"2.4 \u914d\u7f6e\u96c6\u7fa4\u4fe1\u606f",id:"24-\u914d\u7f6e\u96c6\u7fa4\u4fe1\u606f",level:3},{value:"2.5 \u5b89\u88c5k8s\u96c6\u7fa4",id:"25-\u5b89\u88c5k8s\u96c6\u7fa4",level:3},{value:"2.6 \u5b89\u88c5kubevela",id:"26-\u5b89\u88c5kubevela",level:3},{value:"\u4e09. \u5df2\u9a8c\u8bc1OS\u7248\u672c",id:"\u4e09-\u5df2\u9a8c\u8bc1os\u7248\u672c",level:2},{value:"\u56db. \u6dfb\u52a0k8s worker\u8282\u70b9",id:"\u56db-\u6dfb\u52a0k8s-worker\u8282\u70b9",level:2},{value:"\u4e94. \u5220\u9664k8s worker\u8282\u70b9",id:"\u4e94-\u5220\u9664k8s-worker\u8282\u70b9",level:2},{value:"\u516d. \u6dfb\u52a0k8s master\u8282\u70b9",id:"\u516d-\u6dfb\u52a0k8s-master\u8282\u70b9",level:2},{value:"\u4e03. \u5220\u9664k8s master\u8282\u70b9",id:"\u4e03-\u5220\u9664k8s-master\u8282\u70b9",level:2}];function c(e){const s={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.h2,{id:"\u4e00\u5b89\u88c5\u5305\u6784\u6210",children:"\u4e00.\u5b89\u88c5\u5305\u6784\u6210"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"kubespray\uff1akubespray\u6e90\u7801\u5305"}),"\n",(0,l.jsx)(s.li,{children:"kubespray_cache\uff1a\u5b89\u88c5k8s\u548cAMP\u5e73\u53f0\u9700\u8981\u7528\u5230\u7684\u5b89\u88c5\u5305\u548c\u5bb9\u5668\u955c\u50cf"}),"\n",(0,l.jsx)(s.li,{children:"kubespray-v2.23.0.tar\uff1aansible\u8fd0\u884c\u73af\u5883docker\u955c\u50cf"}),"\n"]}),"\n",(0,l.jsx)(s.h2,{id:"\u4e8c\u5b89\u88c5\u6b65\u9aa4",children:"\u4e8c.\u5b89\u88c5\u6b65\u9aa4"}),"\n",(0,l.jsx)(s.h3,{id:"21-\u62f7\u8d1d\u5b89\u88c5\u5305",children:"2.1 \u62f7\u8d1d\u5b89\u88c5\u5305"}),"\n",(0,l.jsx)(s.p,{children:"\u628a\u5b89\u88c5\u5305\u62f7\u8d1d\u5230\u5b89\u88c5\u673a\u5668\u4e0a\uff0c\u89e3\u538b\uff0c\u8fdb\u5165AMP\u76ee\u5f55"}),"\n",(0,l.jsx)(s.h3,{id:"22-\u914d\u7f6e\u65e0\u5bc6\u7801\u8bbf\u95ee",children:"2.2 \u914d\u7f6e\u65e0\u5bc6\u7801\u8bbf\u95ee"}),"\n",(0,l.jsxs)(s.p,{children:["\u914d\u7f6e\u5b89\u88c5\u8282\u70b9\u5230\u5bb9\u5668\u96c6\u7fa4\u8282\u70b9\u7684ssh\u514d\u5bc6\u767b\u5f55\uff0c\u4ee5\u53ca\u7b2c\u4e00\u4e2amaster\u8282\u70b9\u5230node\u8282\u70b9\u4e4b\u95f4\u7684ssh\u514d\u5bc6\u767b\u5f55\u3002\n(",(0,l.jsx)(s.code,{children:"sync_host"})," \u662f\u5c06 ",(0,l.jsx)(s.code,{children:"master[0]"})," \u4e0a\u7684 ",(0,l.jsx)(s.code,{children:"/etc/hosts"})," \u540c\u6b65\u5230\u5176\u4ed6node \u8282\u70b9\uff0c\u56e0\u6b64\u9700\u8981 \u4ece ",(0,l.jsx)(s.code,{children:"master[0]"}),"\u53ef\u4ee5\u514d\u5bc6\u767b\u5f55\u5176\u4ed6node\u8282\u70b9)"]}),"\n",(0,l.jsx)(s.h3,{id:"23-\u52a0\u8f7d\u5b89\u88c5\u955c\u50cf",children:"2.3 \u52a0\u8f7d\u5b89\u88c5\u955c\u50cf"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-shell",children:"docker load -i kubespray-v2.23.0.tar\n"})}),"\n",(0,l.jsx)(s.h3,{id:"23-\u542f\u52a8\u5b89\u88c5\u5bb9\u5668",children:"2.3 \u542f\u52a8\u5b89\u88c5\u5bb9\u5668"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-shell",children:'docker run -it -d --mount type=bind,source="$(pwd)"/kubespray,dst=/kubespray \\\n--mount type=bind,source="$(pwd)"/kubespray_cache,dst=/tmp/kubespray_cache \\\n--mount type=bind,source="${HOME}"/.ssh/,dst=/root/.ssh/ quay.io/kubespray/kubespray:v2.23.0 bash\n'})}),"\n",(0,l.jsx)(s.h3,{id:"24-\u914d\u7f6e\u96c6\u7fa4\u4fe1\u606f",children:"2.4 \u914d\u7f6e\u96c6\u7fa4\u4fe1\u606f"}),"\n",(0,l.jsx)(s.p,{children:"\u767b\u5f55\u5bb9\u5668\uff0cdocker exec -it \u5bb9\u5668id\n\u4fee\u6539/kubespray/inventory/mycluster/hosts.yaml \u6587\u4ef6\uff0c\u914d\u7f6emaster\u8282\u70b9\u3001worker\u8282\u70b9\u548cetcd\u8282\u70b9"}),"\n",(0,l.jsx)(s.h3,{id:"25-\u5b89\u88c5k8s\u96c6\u7fa4",children:"2.5 \u5b89\u88c5k8s\u96c6\u7fa4"}),"\n",(0,l.jsx)(s.p,{children:"\u767b\u5f55\u5bb9\u5668\uff0cdocker exec -it \u5bb9\u5668id"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-shell",children:"ansible-playbook -i inventory/mycluster/hosts.yaml --private-key /root/.ssh/id_rsa --become --become-user=root cluster.yml\n"})}),"\n",(0,l.jsx)(s.h3,{id:"26-\u5b89\u88c5kubevela",children:"2.6 \u5b89\u88c5kubevela"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-shell",children:"ansible-playbook -i inventory/mycluster/hosts.yaml --private-key /root/.ssh/id_rsa amp.yml\n"})}),"\n",(0,l.jsx)(s.h2,{id:"\u4e09-\u5df2\u9a8c\u8bc1os\u7248\u672c",children:"\u4e09. \u5df2\u9a8c\u8bc1OS\u7248\u672c"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-text",children:"Centos7.9 minimal\nUbuntu 20.04 LTS\nKylinOS V10 server\n"})}),"\n",(0,l.jsx)(s.h2,{id:"\u56db-\u6dfb\u52a0k8s-worker\u8282\u70b9",children:"\u56db. \u6dfb\u52a0k8s worker\u8282\u70b9"}),"\n",(0,l.jsxs)(s.ol,{children:["\n",(0,l.jsx)(s.li,{children:"\u7f16\u8f91hosts.yaml\u6587\u4ef6\uff0c\u5c06\u9700\u8981\u589e\u52a0\u7684worker\u8282\u70b9\u4fe1\u606f\u6dfb\u52a0\u8fdb\u53bb\uff0c\u4fdd\u5b58\u3002"}),"\n",(0,l.jsx)(s.li,{children:"\u6267\u884c ansible-playbook -i inventory/mycluster/hosts.yaml --private-key /root/.ssh/id_rsa --become --become-user=root scale.yml"}),"\n"]}),"\n",(0,l.jsx)(s.h2,{id:"\u4e94-\u5220\u9664k8s-worker\u8282\u70b9",children:"\u4e94. \u5220\u9664k8s worker\u8282\u70b9"}),"\n",(0,l.jsxs)(s.ol,{children:["\n",(0,l.jsx)(s.li,{children:"\u5982\u679c\u8981\u5220\u9664\u7684\u8282\u70b9\u4ecd\u7136\u5904\u4e8eReady\u72b6\u6001\uff0c\u6267\u884c ansible-playbook -i inventory/mycluster/hosts.yaml --private-key /root/.ssh/id_rsa --become --become-user=root remove-node.yml -e node=NODE_NAME \u5c06NODE_NAME\u66ff\u6362\u6210\u8981\u5220\u9664\u7684\u8282\u70b9\u540d\u79f0"}),"\n",(0,l.jsx)(s.li,{children:"\u5982\u679c\u8981\u5220\u9664\u7684\u8282\u70b9\u5df2\u79bb\u7ebf\uff0c\u6267\u884cansible-playbook -i inventory/mycluster/hosts.yaml --private-key /root/.ssh/id_rsa --become --become-user=root remove-node.yml -e node=NODE_NAME -e reset_nodes=false -e allow_ungraceful_removal=true \u5f3a\u5236\u5220\u9664\u8282\u70b9\u3002\u5c06NODE_NAME\u66ff\u6362\u6210\u8981\u5220\u9664\u7684\u8282\u70b9\u540d\u79f0"}),"\n",(0,l.jsx)(s.li,{children:"\u7f16\u8f91host.yaml\u5c06\u5df2\u5220\u9664\u8282\u70b9\u7684\u4fe1\u606f\u53bb\u9664\u3002"}),"\n"]}),"\n",(0,l.jsx)(s.h2,{id:"\u516d-\u6dfb\u52a0k8s-master\u8282\u70b9",children:"\u516d. \u6dfb\u52a0k8s master\u8282\u70b9"}),"\n",(0,l.jsxs)(s.ol,{children:["\n",(0,l.jsx)(s.li,{children:"\u7f16\u8f91hosts.yaml\u6587\u4ef6\uff0c\u5c06\u9700\u8981\u589e\u52a0\u7684master \u8282\u70b9\u4fe1\u606f\u6dfb\u52a0\u8fdb\u53bb\uff0c\u4fdd\u5b58\u3002"}),"\n",(0,l.jsx)(s.li,{children:"\u6267\u884c ansible-playbook -i inventory/mycluster/hosts.yaml --private-key /root/.ssh/id_rsa --become --become-user=root cluster.yml"}),"\n"]}),"\n",(0,l.jsx)(s.h2,{id:"\u4e03-\u5220\u9664k8s-master\u8282\u70b9",children:"\u4e03. \u5220\u9664k8s master\u8282\u70b9"}),"\n",(0,l.jsxs)(s.ol,{children:["\n",(0,l.jsx)(s.li,{children:"\u5982\u679c\u8981\u5220\u9664\u7684\u8282\u70b9\u4ecd\u7136\u5904\u4e8eReady\u72b6\u6001\uff0c\u6267\u884cansible-playbook -i inventory/mycluster/hosts.yaml --private-key /root/.ssh/id_rsa --become --become-user=root remove-node.yml -e node=NODE_NAME  \u5c06NODE_NAME\u66ff\u6362\u6210\u8981\u5220\u9664\u7684\u8282\u70b9\u540d\u79f0"}),"\n",(0,l.jsx)(s.li,{children:"\u5982\u679c\u8981\u5220\u9664\u7684\u8282\u70b9\u5df2\u79bb\u7ebf\uff0c\u6267\u884cansible-playbook -i inventory/mycluster/hosts.yaml --private-key /root/.ssh/id_rsa --become --become-user=root remove-node.yml -e node=NODE_NAME -e reset_nodes=false -e allow_ungraceful_removal=true \u5f3a\u5236\u5220\u9664\u8282\u70b9\u3002\u5c06NODE_NAME\u66ff\u6362\u6210\u8981\u5220\u9664\u7684\u8282\u70b9\u540d\u79f0"}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},8672:(e,s,n)=>{n.d(s,{Z:()=>t,a:()=>i});var l=n(959);const r={},o=l.createContext(r);function i(e){const s=l.useContext(o);return l.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),l.createElement(o.Provider,{value:s},e.children)}}}]);