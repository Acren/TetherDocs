"use strict";(self.webpackChunktether_docs_2=self.webpackChunktether_docs_2||[]).push([[971],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3874:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:1,slug:"/"},l={unversionedId:"index",id:"index",isDocsHomePage:!1,title:"Intro",description:"Tether is a tool for creating cables, ropes, hoses, and anything similar, in the Unreal Engine 4 editor, for environment art and set-dressing purposes.",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/TetherDocs/",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"Installation",permalink:"/TetherDocs/installation"}},c=[{value:"Current Features",id:"current-features",children:[]}],u={toc:c};function p(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Tether")," is a tool for creating cables, ropes, hoses, and anything similar, in the ",(0,o.kt)("strong",{parentName:"p"},"Unreal Engine 4")," editor, for environment art and set-dressing purposes.\nTether simulates physics and builds static meshes in-editor, allowing rapid creation and iteration of cables using a non-destructive workflow."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Title",src:n(2737).Z})),(0,o.kt)("h2",{id:"current-features"},"Current Features"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Editor mode:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},"Tether editor mode")," allows easy placement of cables by clicking points in the world."),(0,o.kt)("li",{parentName:"ul"},"Adjust slack, set tangents, and chain multiple cable segments together as part of the cable creation workflow.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Cable Actors:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Tether Cable Actors")," are self-contained objects in the world that handle all the functionality for a single cable, including settings, physics simulation, mesh generation, and the resultant static mesh."),(0,o.kt)("li",{parentName:"ul"},"The overall path of the cable before simulation can be controlled using Unreal's spline tools."),(0,o.kt)("li",{parentName:"ul"},"When modified, cables are automatically resimulated and rebuilt for the fastest possible iteration time."),(0,o.kt)("li",{parentName:"ul"},"Simulation supports physics collision with other objects in the world, including other cables, allowing them to coil up on the ground and hang on eachother."),(0,o.kt)("li",{parentName:"ul"},"The mesh for the cable can be generated procedurally using a specified resolution for the number of sides and edge loops, or use a user-specified mesh for full control of the final result."),(0,o.kt)("li",{parentName:"ul"},"The generated static mesh is saved inside of the Actor in the world, removing the need for any asset management by the developer. The developer can still open it and modify the static mesh properties as usual."),(0,o.kt)("li",{parentName:"ul"},"At runtime, all physics simulation and mesh generation functionality is stripped away leaving the final static mesh. There's no physics simulation slowing down the game at runtime, which allows areas in the game to have many more cables than if they were dynamically simulated."),(0,o.kt)("li",{parentName:"ul"},"Optionally, sets of one or more cables can be saved as a static mesh asset to be reused across multiple places in a game.")))}p.isMDXComponent=!0},2737:function(e,t,n){t.Z=n.p+"assets/images/title-31d0ba249bd395835564a2589a092783.png"}}]);