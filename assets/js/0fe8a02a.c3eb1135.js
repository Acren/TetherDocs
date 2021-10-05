"use strict";(self.webpackChunktether_docs_2=self.webpackChunktether_docs_2||[]).push([[244],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return n?i.createElement(h,l(l({ref:t},c),{},{components:n})):i.createElement(h,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<r;u++)l[u]=n[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7599:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),l=["components"],o={sidebar_position:6},s={unversionedId:"versions",id:"versions",isDocsHomePage:!1,title:"Versions",description:"Compatibility",source:"@site/docs/versions.md",sourceDirName:".",slug:"/versions",permalink:"/TetherDocs/versions",version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Example Project",permalink:"/TetherDocs/example-project"},next:{title:"Support",permalink:"/TetherDocs/support"}},u=[{value:"Compatibility",id:"compatibility",children:[]},{value:"Release Notes",id:"release-notes",children:[{value:"1.0",id:"1_0",children:[]},{value:"beta-0.14",id:"0_14",children:[]},{value:"beta-0.13",id:"0_13",children:[]},{value:"beta-0.12",id:"0_12",children:[]},{value:"beta-0.11",id:"0_11",children:[]}]}],c={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"compatibility"},"Compatibility"),(0,r.kt)("p",null,"Each plugin version is (usually) released to support the latest engine version only."),(0,r.kt)("h2",{id:"release-notes"},"Release Notes"),(0,r.kt)("h3",{id:"1_0"},"1.0"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"UE 4.26")," ",(0,r.kt)("inlineCode",{parentName:"p"},"UE 4.27")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added an example project with various cable setups"),(0,r.kt)("li",{parentName:"ul"},"Added an option to auto-tile the material UVs across the length of the cable"),(0,r.kt)("li",{parentName:"ul"},"Changed various simulation options to multipliers that scale based on the width of the cable"),(0,r.kt)("li",{parentName:"ul"},"Reduced minimum cable width from 1 to 0.1"),(0,r.kt)("li",{parentName:"ul"},"Increased default mesh resolution to be more practical for larger pipe-sized cables"),(0,r.kt)("li",{parentName:"ul"},"Fixed crash when duplicating a cable"),(0,r.kt)("li",{parentName:"ul"},"Fixed crash when duplicating map that contains a cable"),(0,r.kt)("li",{parentName:"ul"},"Fixed crash from cable sometimes trying to simulated in play mode"),(0,r.kt)("li",{parentName:"ul"},"Fixed occasional crashes during simulation"),(0,r.kt)("li",{parentName:"ul"},"Fixed issue with undoing segments"),(0,r.kt)("li",{parentName:"ul"},"Fixed tangents being incorrect on linear cable spline segments"),(0,r.kt)("li",{parentName:"ul"},"Fixed ensures triggering in some cases"),(0,r.kt)("li",{parentName:"ul"},"Added console variables to disable various internal simulation features for debugging"),(0,r.kt)("li",{parentName:"ul"},"Internal changes to support automated testing")),(0,r.kt)("h3",{id:"0_14"},"beta-0.14"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"UE 4.26")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed crashes in Standalone play mode"),(0,r.kt)("li",{parentName:"ul"},"Fixed cable invalidating static lighting for packaged builds during cook process"),(0,r.kt)("li",{parentName:"ul"},"Fixed errors in packaged builds about missing components"),(0,r.kt)("li",{parentName:"ul"},"Fixed ensures triggering in packaged builds about mesh UVChannelData not being initialized"),(0,r.kt)("li",{parentName:"ul"},"Fixed realtime simulation preview not behaving correctly with higher substep times"),(0,r.kt)("li",{parentName:"ul"},"Cables no longer collide with Trigger actors")),(0,r.kt)("h3",{id:"0_13"},"beta-0.13"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"UE 4.26")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added a cable property to specify the collision profile to use during simulation"),(0,r.kt)("li",{parentName:"ul"},"Holding ctrl will now suspend simulation of the current cable until it is released"),(0,r.kt)("li",{parentName:"ul"},"The modifier to adjust cable slack more finely has been changed from ctrl to shift"),(0,r.kt)("li",{parentName:"ul"},"Fixed an ensure being triggered when the cable end point is set while the first simulation is running"),(0,r.kt)("li",{parentName:"ul"},"Fixed incorrect tangent being used when setting normal-aligned tangents while holding alt when left mouse button is not down"),(0,r.kt)("li",{parentName:"ul"},"Changed FTetherAsyncMeshBuildTaskParams object pointers to weak pointers, which may have been causing crashes before"),(0,r.kt)("li",{parentName:"ul"},"Fixed being able to destroy the static mesh component and cause a crash using the property on the cable actor details"),(0,r.kt)("li",{parentName:"ul"},"Source code cleanup and comments")),(0,r.kt)("h3",{id:"0_12"},"beta-0.12"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"UE 4.26")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed crash when attempting to resimulate a cable that has too few spline points, now resimulating requires at least 2 points"),(0,r.kt)("li",{parentName:"ul"},"Fixed tangents on adjacent points being lost when adding a point with the Unreal spline tools"),(0,r.kt)("li",{parentName:"ul"},"Can now set normal-aligned tangents by holding alt when placing a point, even when left mouse button is not down"),(0,r.kt)("li",{parentName:"ul"},"Removed the ability to realtime simulation preview on multiple selected cables at the same time, as it's not useful and can lead to inconsistent results")),(0,r.kt)("h3",{id:"0_11"},"beta-0.11"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"UE 4.26")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Initial beta release for UE 4.26")))}p.isMDXComponent=!0}}]);