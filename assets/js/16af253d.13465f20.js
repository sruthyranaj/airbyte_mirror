"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[29928],{67194:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>i});var a=r(87462),n=(r(67294),r(3905));const o={},s="SurveySparrow",p={unversionedId:"integrations/sources/survey-sparrow",id:"integrations/sources/survey-sparrow",title:"SurveySparrow",description:"This page guides you through the process of setting up the SurveySparrow source connector.",source:"@site/../docs/integrations/sources/survey-sparrow.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/survey-sparrow",permalink:"/integrations/sources/survey-sparrow",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/survey-sparrow.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Sugar CRM",permalink:"/integrations/sources/sugar-crm"},next:{title:"SurveyCTO",permalink:"/integrations/sources/surveycto"}},l={},i=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"For Airbyte Open Source:",id:"for-airbyte-open-source",level:3},{value:"Setup guide",id:"setup-guide",level:2},{value:"Step 1: Set up SurveySparrow",id:"step-1-set-up-surveysparrow",level:3},{value:"Step 2: Set up the source connector in Airbyte",id:"step-2-set-up-the-source-connector-in-airbyte",level:2},{value:"Supported streams and sync modes",id:"supported-streams-and-sync-modes",level:2},{value:"Changelog",id:"changelog",level:2}],u={toc:i},c="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"surveysparrow"},"SurveySparrow"),(0,n.kt)("p",null,"This page guides you through the process of setting up the SurveySparrow source connector."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("h3",{id:"for-airbyte-open-source"},"For Airbyte Open Source:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Access Token")),(0,n.kt)("h2",{id:"setup-guide"},"Setup guide"),(0,n.kt)("h3",{id:"step-1-set-up-surveysparrow"},"Step 1: Set up SurveySparrow"),(0,n.kt)("p",null,"Please read this ",(0,n.kt)("a",{parentName:"p",href:"https://developers.surveysparrow.com/rest-apis"},"docs"),"."),(0,n.kt)("p",null,"In order to get access token, follow these steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Login to your surveysparrow account and go to Settings \u2192 Apps & Integrations"),(0,n.kt)("li",{parentName:"ol"},"Create a Private App"),(0,n.kt)("li",{parentName:"ol"},"Enter Name, Description, select scope and generate the access token"),(0,n.kt)("li",{parentName:"ol"},"Copy and keep the access token in a safe place (Access token will be displayed only once and you may need to re-generate if you misplaced)"),(0,n.kt)("li",{parentName:"ol"},"Save your app and you are good to start developing your private app")),(0,n.kt)("h2",{id:"step-2-set-up-the-source-connector-in-airbyte"},"Step 2: Set up the source connector in Airbyte"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"For Airbyte Open Source:")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to local Airbyte page"),(0,n.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,n.kt)("strong",{parentName:"li"},"Sources"),". In the top-right corner, click ",(0,n.kt)("strong",{parentName:"li"},"+ new source")),(0,n.kt)("li",{parentName:"ol"},"On the source setup page, select ",(0,n.kt)("strong",{parentName:"li"},"SurveySparrow")," from the Source type dropdown and enter a name for this connector"),(0,n.kt)("li",{parentName:"ol"},"Add ",(0,n.kt)("strong",{parentName:"li"},"Access Token")),(0,n.kt)("li",{parentName:"ol"},"Select whether SurveySparrow account location is EU-based"),(0,n.kt)("li",{parentName:"ol"},"Add Survey ID (optional)"),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("inlineCode",{parentName:"li"},"Set up source"))),(0,n.kt)("h2",{id:"supported-streams-and-sync-modes"},"Supported streams and sync modes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.surveysparrow.com/rest-apis/contacts#getV3Contacts"},"Contacts")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.surveysparrow.com/rest-apis/contact_lists#getV3Contact_lists"},"ContactLists")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.surveysparrow.com/rest-apis/questions#getV3Questions"},"Questions")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.surveysparrow.com/rest-apis/response#getV3Responses"},"Responses")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.surveysparrow.com/rest-apis/roles#getV3Roles"},"Roles")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.surveysparrow.com/rest-apis/survey#getV3Surveys"},"Surveys")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.surveysparrow.com/rest-apis/survey_folder#getV3Survey_folders"},"SurveyFolders")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.surveysparrow.com/rest-apis/users#getV3Users"},"Users"))),(0,n.kt)("h2",{id:"changelog"},"Changelog"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.2.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-18"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/19143"},"19143")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Allow users to change base_url based on account's location")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-03"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/18395"},"18395")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Initial Release")))))}d.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),i=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=i(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=i(r),m=n,y=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return r?a.createElement(y,s(s({ref:t},u),{},{components:r})):a.createElement(y,s({ref:t},u))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:n,s[1]=p;for(var i=2;i<o;i++)s[i]=r[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);