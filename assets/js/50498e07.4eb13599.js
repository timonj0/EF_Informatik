"use strict";(self.webpackChunkef_website_template=self.webpackChunkef_website_template||[]).push([[1918],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>c});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=r.createContext({}),s=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(t),c=i,f=m["".concat(d,".").concat(c)]||m[c]||p[c]||a;return t?r.createElement(f,l(l({ref:n},u),{},{components:t})):r.createElement(f,l({ref:n},u))}));function c(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=m;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5221:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var r=t(7462),i=(t(7294),t(3905));const a={},l="API mit nodeRED erstellen",o={permalink:"/EF_Informatik/2023/03/10/api-mit-nodered",editUrl:"https://github.com/timonj0/EF_Informatik/tree/main/blog/2023-03-10-api-mit-nodered.md",source:"@site/blog/2023-03-10-api-mit-nodered.md",title:"API mit nodeRED erstellen",description:"Anleitung",date:"2023-03-10T00:00:00.000Z",formattedDate:"10. M\xe4rz 2023",tags:[],readingTime:1.45,hasTruncateMarker:!1,authors:[],frontMatter:{},nextItem:{title:"NumTrip",permalink:"/EF_Informatik/2023/01/23/final"}},d={authorsImageUrls:[]},s=[{value:"Anleitung",id:"anleitung",level:2},{value:"Erkl\xe4rung",id:"erkl\xe4rung",level:2},{value:"Erfahrungen",id:"erfahrungen",level:2}],u={toc:s};function p(e){let{components:n,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"anleitung"},"Anleitung"),(0,i.kt)("p",null,"Um eine simple API auf nodRED zu erstellen, mussn als ersten eine neue http in node erstellt werden. In der http in node kann dann die URL definiert werden, unter der die API erreichbar ist. Zum beispiel ",(0,i.kt)("inlineCode",{parentName:"p"},"/api"),"."),(0,i.kt)("p",null,"Danach kann ein Skript angef\xfcgt werden, wo die Daten verarbeitet werden. Was mit den empfangenen Daten angefangen wird, ist frei w\xe4hlbar. Zur Demonstration kann ein Skript angef\xfcgt werden, welches nur die Zeile ",(0,i.kt)("inlineCode",{parentName:"p"},"retunr msg;")," enth\xe4lt. Dieses Skript leitet einfach die empfangenen Daten weiter."),(0,i.kt)("p",null,"Als letzes wird eine http response node angef\xfcgt, welche auf die Anfrage mit den Datenm, welches das Skript ausgiebt, antwortet. In unserem beispiel mit dem ",(0,i.kt)("inlineCode",{parentName:"p"},"return msg;")," Skript werden also einfach die Daten, welche wir an die API gesendet haben, wieder zur\xfcckgesendet."),(0,i.kt)("p",null,"Hier eine Visualisierung der simplen API in NodeRED:\n",(0,i.kt)("img",{src:t(664).Z,width:"771",height:"171"})),(0,i.kt)("h2",{id:"erkl\xe4rung"},"Erkl\xe4rung"),(0,i.kt)("p",null,"Unsere API kommuniziert via HTTP. Der Client sendet eine Anfrage an die API-Endpunkt-URL. Die Anfrage kann verschiedene Arten von Informationen enthalten, wie z.B. eine Anfrage-Methode wie ",(0,i.kt)("inlineCode",{parentName:"p"},"GET"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"POST"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"PUT")," oder ",(0,i.kt)("inlineCode",{parentName:"p"},"DELETE"),", Parameter, Header-Informationen und manchmal auch einen Anfrage-Body, der Daten enth\xe4lt, die an die API gesendet werden sollen."),(0,i.kt)("p",null,"Die API empf\xe4ngt die Anfrage und verarbeitet sie, indem sie die notwendigen Daten aus der Anfrage extrahiert, in unserem Fall die Daten manipuliert, um eine Antwort zu generieren. Die Antwort wird dann als HTTP-Antwort zur\xfcck an den Client gesendet, die in der Regel einen Statuscode, Header-Informationen und manchmal auch einen Antwort-Body enth\xe4lt, der die Daten enth\xe4lt, die an den Client zur\xfcckgesendet werden."),(0,i.kt)("h2",{id:"erfahrungen"},"Erfahrungen"),(0,i.kt)("p",null,"Meine Erfahrungen mit dem Erstellen einer eigenen API mit NodeRED waren durchaus positiv. Das Erstellen geschieht durch die simple Natur von NodeRED mit grosser M\xfchelosigkeit. Trotzdem denke ich, dass mit NodeRED ganz sch\xf6n n\xfctzliche und vielleicht sogar m\xe4chtige APIs erstellt werden k\xf6nnen."))}p.isMDXComponent=!0},664:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/nodered_api-640478f4cb17f126fa9573d2499fe0f3.png"}}]);