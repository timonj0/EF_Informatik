"use strict";(self.webpackChunkef_website_template=self.webpackChunkef_website_template||[]).push([[2315],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>c});var t=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var d=t.createContext({}),o=function(e){var n=t.useContext(d),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},u=function(e){var n=o(e.components);return t.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,l=e.originalType,d=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=o(r),c=i,f=m["".concat(d,".").concat(c)]||m[c]||p[c]||l;return r?t.createElement(f,s(s({ref:n},u),{},{components:r})):t.createElement(f,s({ref:n},u))}));function c(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=r.length,s=new Array(l);s[0]=m;var a={};for(var d in n)hasOwnProperty.call(n,d)&&(a[d]=n[d]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var o=2;o<l;o++)s[o]=r[o];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},454:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>o});var t=r(7462),i=(r(7294),r(3905));const l={},s="NumTrip",a={permalink:"/EF_Informatik/2023/01/23/final",editUrl:"https://github.com/timonj0/EF_Informatik/tree/main/blog/2023-01-23-final.md",source:"@site/blog/2023-01-23-final.md",title:"NumTrip",description:"Konsolen- und Fensterbasiert",date:"2023-01-23T00:00:00.000Z",formattedDate:"23. Januar 2023",tags:[],readingTime:2.385,hasTruncateMarker:!1,authors:[],frontMatter:{},prevItem:{title:"API mit nodeRED erstellen",permalink:"/EF_Informatik/2023/03/10/api-mit-nodered"},nextItem:{title:"Weiterarbeit an NumTrip",permalink:"/EF_Informatik/2023/01/22/weiterarbeit-an-numtrip"}},d={authorsImageUrls:[]},o=[{value:"Konsolen- und Fensterbasiert",id:"konsolen--und-fensterbasiert",level:2},{value:"Ziel des spiels",id:"ziel-des-spiels",level:3},{value:"Top-Down Entwurf",id:"top-down-entwurf",level:3},{value:"Auff\xfcllen des Spielfelds",id:"auff\xfcllen-des-spielfelds",level:3},{value:"Herausforderungen und Tipps",id:"herausforderungen-und-tipps",level:3}],u={toc:o};function p(e){let{components:n,...l}=e;return(0,i.kt)("wrapper",(0,t.Z)({},u,l,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"konsolen--und-fensterbasiert"},"Konsolen- und Fensterbasiert"),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(1608).Z,width:"1300",height:"738"})),(0,i.kt)("h3",{id:"ziel-des-spiels"},"Ziel des spiels"),(0,i.kt)("p",null,"Im Spiel NumTrip k\xf6nnen in einem Spielfeld Felder, welche einen Wert besitzen, kombiniert werden. Dabei werden alle Nachbarfelder absorbiert, welche den selben Wert haben wie das ausgew\xe4hlte Feld. Das Ziel des Spiels ist es, bis zum erreichen eines Feldes mit dem Wert 1024 einen m\xf6glichst hohen Score zu erzielen, ohne Game Over zu gehen. Game Over ist man, wenn keine Felder mehr kombiniert werden k\xf6nnen und der Score wird berechnet, indem die Anzahl im Zug absorbierter Felder mit dem Wert des resultierenden Feldes multipliziert und zu dem vorherigen Score addiert wird."),(0,i.kt)("h3",{id:"top-down-entwurf"},"Top-Down Entwurf"),(0,i.kt)("p",null,"Der Top-Down Entwurf meines NumTrip Spiels sieht wiefolgt aus:\n",(0,i.kt)("img",{src:r(6602).Z,width:"1980",height:"1175"})),(0,i.kt)("h3",{id:"auff\xfcllen-des-spielfelds"},"Auff\xfcllen des Spielfelds"),(0,i.kt)("p",null,"Das Auff\xfcllen des Spielfeldes habe ich auf eine meiner Meinung nach naheliegende und doch kreative Art gel\xf6st. Der Ablauf ist ziemlich simpel und beinhaltet nur wenige Schritte. Das Spielfeld ist bei der \xdcbergabe in die Funktion als zweidimensionale Liste Zeile um Zeile gespeichert. Im ersten Schritt wird das Spielfeld quasi rotiert, so dass das Spielfeld nun Spalte um Spalte in der Liste gespeichert ist."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"columns = [[board[j][i] for j in range(len(board))] for i in range(len(board[0]))]\n")),(0,i.kt)("p",null,"Danach wird durch jede Spalte iteriert und \xfcberpr\xfcft, ob sich in ihr Felder mit dem Wert -1 befinden. Ist dies der Fall, wird die Liste mit der Spalte umgekehrt, damit sie die Felder in der Reihenfolge unten -> oben enth\xe4lt. F\xfcr jedes Feld mit dem Wert -1 in der Spalte wird nun eben dieses Feld entfernt und ein neues Feld mit einem zuf\xe4lligen Wert 2, 4, oder 8 hinzugef\xfcgt. Die Liste wird am Schluss erneut umgekehrt, damit sie die Felder wieder in der urspr\xfcnglichen Anordnung enth\xe4lt."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"if -1 in column:\n    column.reverse()\n    for i in range(column.count(-1)):\n        column.pop(column.index(-1))\n        column.append(2 ** random.randint(1, 3))\n    column.reverse()\n")),(0,i.kt)("p",null,'Dieses Vorgehen macht das Prinzip der "Gravitation", welche in dem Spiel implementiert ist, ganz nat\xfcrlich, da die Felder mit dem Wert -1 aus beliebigen Positionen entfernt werden, die neuen Felder aber immer an der obersten Position angef\xfcgt werden.'),(0,i.kt)("p",null,"Schlussendlich wird das Spielfeld zur\xfcck in seine ursp\xfcngliche From rotiert und zur\xfcckgegeben."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"return [[columns[j][i] for j in range(len(columns))] for i in range(len(columns[0]))]\n")),(0,i.kt)("h3",{id:"herausforderungen-und-tipps"},"Herausforderungen und Tipps"),(0,i.kt)("p",null,"Die gr\xf6sste Herausforderung, die mir beim Entwickeln des Spiels in den Weg kam, war, oft simple aber daf\xfcr umso hartn\xe4ckigere Fehler zu finden. Syntaxfehler oder fehlender Code sind schnell zu beheben, bei tief sitzenden Logikfehlern oder un\xfcberlegtem gebrauchen von Funktionen, wie bei mir die list.index() Funktion, sind oftmals schwierig zu finden, da man ihnen zu wenig Beachtung schenkt oder sich nicht gut genug mit ihnen besch\xe4ftigt. Es lohnt sich also, auch kleine Details in seinem Code zu \xfcberdenken und zu hinterfragen, ob man wirklich versteht was er macht. Um Logikfehler schnell zu finden und sogar vorzubeugen ist es ratsam, einen sehr genauen Plan zu haben, was man \xfcberhaupt programmieren will. Wildes Drauflosschreiben f\xfchrt sehr schnell zu einem sehr grossen Chaos."))}p.isMDXComponent=!0},1608:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/numtrip_screenshots-d729286cf7bbda299954710b3b649f36.png"},6602:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/numtrip_topdown-5c474300e54201d7bf2fb79cfedc0ca2.png"}}]);