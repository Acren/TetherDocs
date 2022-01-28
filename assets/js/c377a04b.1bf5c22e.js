"use strict";(self.webpackChunktether_docs_2=self.webpackChunktether_docs_2||[]).push([[971],{1269:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var a=n(7462),i=n(3366),s=(n(7294),n(3905)),r=["components"],o={sidebar_position:1,slug:"/"},l="Intro",c={unversionedId:"index",id:"index",isDocsHomePage:!1,title:"Intro",description:"Tether is a tool for creating cables, ropes, chains, flexible pipes, and other long bending objects, in the Unreal Engine editor, for environment art and set-dressing purposes.",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/TetherDocs/",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"Installation",permalink:"/TetherDocs/installation"}},u=[{value:"Current Features",id:"current-features",children:[],level:2}],d={toc:u};function p(e){var t=e.components,o=(0,i.Z)(e,r);return(0,s.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"intro"},"Intro"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Tether")," is a tool for creating cables, ropes, chains, flexible pipes, and other long bending objects, in the ",(0,s.kt)("strong",{parentName:"p"},"Unreal Engine")," editor, for environment art and set-dressing purposes.\nTether simulates physics and builds static meshes in-editor, allowing rapid creation and iteration of cables using a non-destructive workflow."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Title",src:n(2737).Z})),(0,s.kt)("h2",{id:"current-features"},"Current Features"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Editor mode:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The ",(0,s.kt)("strong",{parentName:"li"},"Tether editor mode")," allows easy placement of cables by clicking points in the world."),(0,s.kt)("li",{parentName:"ul"},"Adjust slack, set tangents, and chain multiple cable segments together as part of the cable creation workflow.")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Cable Actors:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Tether Cable Actors")," are self-contained objects in the world that handle all the functionality for a single cable, including settings, physics simulation, mesh generation, and the resultant static mesh."),(0,s.kt)("li",{parentName:"ul"},"The overall path of the cable before simulation can be controlled using Unreal's spline tools."),(0,s.kt)("li",{parentName:"ul"},"When modified, cables are automatically resimulated and rebuilt for the fastest possible iteration time."),(0,s.kt)("li",{parentName:"ul"},"Simulation supports physics collision with other objects in the world, including other cables, allowing them to coil up on the ground and hang on eachother."),(0,s.kt)("li",{parentName:"ul"},"The mesh for the cable can be generated procedurally using a specified resolution for the number of sides and edge loops, or use a user-specified mesh for full control of the final result."),(0,s.kt)("li",{parentName:"ul"},"The generated static mesh is saved inside of the Actor in the world, removing the need for any asset management by the developer. The developer can still open it and modify the static mesh properties as usual."),(0,s.kt)("li",{parentName:"ul"},"At runtime, all physics simulation and mesh generation functionality is stripped away leaving the final static mesh. There's no physics simulation slowing down the game at runtime, which allows areas in the game to have many more cables than if they were dynamically simulated."),(0,s.kt)("li",{parentName:"ul"},"Optionally, sets of one or more cables can be saved as a static mesh asset to be reused across multiple places in a game.")))}p.isMDXComponent=!0},2737:function(e,t,n){t.Z=n.p+"assets/images/title-31d0ba249bd395835564a2589a092783.png"}}]);