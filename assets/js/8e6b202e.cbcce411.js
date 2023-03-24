"use strict";(self.webpackChunkef_website_template=self.webpackChunkef_website_template||[]).push([[2841],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>p});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(t),p=i,m=f["".concat(c,".").concat(p)]||f[p]||d[p]||o;return t?r.createElement(m,a(a({ref:n},u),{},{components:t})):r.createElement(m,a({ref:n},u))}));function p(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=f;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},854:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=t(7462),i=(t(7294),t(3905));const o={},a="Cookies",s={permalink:"/EF_Informatik/2023/03/24/cookies",editUrl:"https://github.com/timonj0/EF_Informatik/tree/main/blog/2023-03-24-cookies.md",source:"@site/blog/2023-03-24-cookies.md",title:"Cookies",description:"Funktionsweise",date:"2023-03-24T00:00:00.000Z",formattedDate:"24. M\xe4rz 2023",tags:[],readingTime:.68,hasTruncateMarker:!1,authors:[],frontMatter:{},nextItem:{title:"API mit nodeRED erstellen",permalink:"/EF_Informatik/2023/03/10/api-mit-nodered"}},c={authorsImageUrls:[]},l=[{value:"Funktionsweise",id:"funktionsweise",level:2},{value:"Wie Cookies Logins vereinfachen",id:"wie-cookies-logins-vereinfachen",level:2},{value:"Unsichere Benutzerdatenbanken",id:"unsichere-benutzerdatenbanken",level:2}],u={toc:l};function d(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"funktionsweise"},"Funktionsweise"),(0,i.kt)("p",null,"Cookies sind kleine Dateien, welche von einem Webserver an den Client gesendet und von diesem gespeichert werden. Bei einer erneuten Anfrage an den Webserver kann der Cookie mitgesendet werden, damit der Server gewisse Informationen wie Login-Daten automatisiert erh\xe4lt."),(0,i.kt)("h2",{id:"wie-cookies-logins-vereinfachen"},"Wie Cookies Logins vereinfachen"),(0,i.kt)("p",null,"Wie bereits erw\xe4hnt, k\xf6nnen Cookies den Login-Prozess auf Websiten stark vereinfachen. Das geschieht dadurch, dass die Logindaten oder ein Schl\xfcsselwert bei der Anfrage an den Webserver mitgeschickt werden. Akzeptiert der Server das Login, kann er die nicht \xf6ffentlich zug\xe4nglichen Daten direkt zur\xfcckschicken, ohne dass sich der User m\xfchsam einloggen muss."),(0,i.kt)("h2",{id:"unsichere-benutzerdatenbanken"},"Unsichere Benutzerdatenbanken"),(0,i.kt)("p",null,"In einer Benutzerdatenbank d\xfcrfen Passw\xf6rter niemals unverschl\xfcsselt gesichert werden. Ist das der Fall, werden bei Data-Breaches die hochsensiblen Userdaten unzensiert ver\xf6ffentlicht. Stattdessen m\xfcssen zu diesem Zweck Hashes verwendet werden, welche selbst bei Leaks f\xfcr Aussenstehende g\xe4nzlich nutzlos sind."))}d.isMDXComponent=!0}}]);