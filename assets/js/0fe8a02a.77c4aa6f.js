"use strict";(self.webpackChunktether_docs_2=self.webpackChunktether_docs_2||[]).push([[244],{8767:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return d},default:function(){return c}});var a=n(7462),i=n(3366),l=(n(7294),n(3905)),r=["components"],o={sidebar_position:6},s="Versions",u={unversionedId:"versions",id:"versions",isDocsHomePage:!1,title:"Versions",description:"Release Notes",source:"@site/docs/versions.md",sourceDirName:".",slug:"/versions",permalink:"/TetherDocs/versions",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Example Project",permalink:"/TetherDocs/example-project"},next:{title:"Support",permalink:"/TetherDocs/support"}},d=[{value:"Release Notes",id:"release-notes",children:[{value:"1.0.2",id:"1_0_2",children:[]},{value:"1.0.1",id:"1_0_1",children:[]},{value:"1.0",id:"1_0",children:[]},{value:"beta-0.14",id:"0_14",children:[]},{value:"beta-0.13",id:"0_13",children:[]},{value:"beta-0.12",id:"0_12",children:[]},{value:"beta-0.11",id:"0_11",children:[]}]}],p={toc:d};function c(e){var t=e.components,n=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"versions"},"Versions"),(0,l.kt)("h2",{id:"release-notes"},"Release Notes"),(0,l.kt)("h3",{id:"1_0_2"},"1.0.2"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"UE 4.25")," ",(0,l.kt)("inlineCode",{parentName:"p"},"UE 4.26")," ",(0,l.kt)("inlineCode",{parentName:"p"},"UE 4.27")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Fixed a crash in Standalone mode when loading a map with a cable that has Lock State enabled"),(0,l.kt)("li",{parentName:"ul"},"Fixed a crash when using a custom mesh that has the pivot on one end"),(0,l.kt)("li",{parentName:"ul"},"Fixed a crash when undoing after deleting a cable spline point"),(0,l.kt)("li",{parentName:"ul"},"Fixed a crash when deleting a spline point on a cable that was loaded with the map")),(0,l.kt)("h3",{id:"1_0_1"},"1.0.1"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"UE 4.25")," ",(0,l.kt)("inlineCode",{parentName:"p"},"UE 4.26")," ",(0,l.kt)("inlineCode",{parentName:"p"},"UE 4.27")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"UE 4.25 now supported"),(0,l.kt)("li",{parentName:"ul"},"Added plugin icon and updated descriptions and category"),(0,l.kt)("li",{parentName:"ul"},"Internal fixes for automation tests that were failing in some scenarios")),(0,l.kt)("h3",{id:"1_0"},"1.0"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"UE 4.26")," ",(0,l.kt)("inlineCode",{parentName:"p"},"UE 4.27")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Added an example project with various cable setups"),(0,l.kt)("li",{parentName:"ul"},"Added an option to auto-tile the material UVs across the length of the cable"),(0,l.kt)("li",{parentName:"ul"},"Changed various simulation options to multipliers that scale based on the width of the cable"),(0,l.kt)("li",{parentName:"ul"},"Reduced minimum cable width from 1 to 0.1"),(0,l.kt)("li",{parentName:"ul"},"Increased default mesh resolution to be more practical for larger pipe-sized cables"),(0,l.kt)("li",{parentName:"ul"},"Fixed crash when duplicating a cable"),(0,l.kt)("li",{parentName:"ul"},"Fixed crash when duplicating map that contains a cable"),(0,l.kt)("li",{parentName:"ul"},"Fixed crash from cable sometimes trying to simulated in play mode"),(0,l.kt)("li",{parentName:"ul"},"Fixed occasional crashes during simulation"),(0,l.kt)("li",{parentName:"ul"},"Fixed issue with undoing segments"),(0,l.kt)("li",{parentName:"ul"},"Fixed tangents being incorrect on linear cable spline segments"),(0,l.kt)("li",{parentName:"ul"},"Fixed ensures triggering in some cases"),(0,l.kt)("li",{parentName:"ul"},"Added console variables to disable various internal simulation features for debugging"),(0,l.kt)("li",{parentName:"ul"},"Internal changes to support automated testing")),(0,l.kt)("h3",{id:"0_14"},"beta-0.14"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"UE 4.26")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Fixed crashes in Standalone play mode"),(0,l.kt)("li",{parentName:"ul"},"Fixed cable invalidating static lighting for packaged builds during cook process"),(0,l.kt)("li",{parentName:"ul"},"Fixed errors in packaged builds about missing components"),(0,l.kt)("li",{parentName:"ul"},"Fixed ensures triggering in packaged builds about mesh UVChannelData not being initialized"),(0,l.kt)("li",{parentName:"ul"},"Fixed realtime simulation preview not behaving correctly with higher substep times"),(0,l.kt)("li",{parentName:"ul"},"Cables no longer collide with Trigger actors")),(0,l.kt)("h3",{id:"0_13"},"beta-0.13"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"UE 4.26")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Added a cable property to specify the collision profile to use during simulation"),(0,l.kt)("li",{parentName:"ul"},"Holding ctrl will now suspend simulation of the current cable until it is released"),(0,l.kt)("li",{parentName:"ul"},"The modifier to adjust cable slack more finely has been changed from ctrl to shift"),(0,l.kt)("li",{parentName:"ul"},"Fixed an ensure being triggered when the cable end point is set while the first simulation is running"),(0,l.kt)("li",{parentName:"ul"},"Fixed incorrect tangent being used when setting normal-aligned tangents while holding alt when left mouse button is not down"),(0,l.kt)("li",{parentName:"ul"},"Changed FTetherAsyncMeshBuildTaskParams object pointers to weak pointers, which may have been causing crashes before"),(0,l.kt)("li",{parentName:"ul"},"Fixed being able to destroy the static mesh component and cause a crash using the property on the cable actor details"),(0,l.kt)("li",{parentName:"ul"},"Source code cleanup and comments")),(0,l.kt)("h3",{id:"0_12"},"beta-0.12"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"UE 4.26")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Fixed crash when attempting to resimulate a cable that has too few spline points, now resimulating requires at least 2 points"),(0,l.kt)("li",{parentName:"ul"},"Fixed tangents on adjacent points being lost when adding a point with the Unreal spline tools"),(0,l.kt)("li",{parentName:"ul"},"Can now set normal-aligned tangents by holding alt when placing a point, even when left mouse button is not down"),(0,l.kt)("li",{parentName:"ul"},"Removed the ability to realtime simulation preview on multiple selected cables at the same time, as it's not useful and can lead to inconsistent results")),(0,l.kt)("h3",{id:"0_11"},"beta-0.11"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"UE 4.26")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Initial beta release for UE 4.26")))}c.isMDXComponent=!0}}]);