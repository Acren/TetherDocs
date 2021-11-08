"use strict";(self.webpackChunktether_docs_2=self.webpackChunktether_docs_2||[]).push([[839],{9694:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return r},metadata:function(){return c},toc:function(){return h},default:function(){return d}});var s=a(7462),n=a(3366),i=(a(7294),a(3905)),o=["components"],l={sidebar_position:4},r="Cable Actors",c={unversionedId:"cable-actors",id:"cable-actors",isDocsHomePage:!1,title:"Cable Actors",description:"Tether Cable Actors are self-contained objects in the world that are responsible for handling all of the functionality for a single cable, including settings, physics simulation, mesh generation, and the resultant static mesh.",source:"@site/docs/cable-actors.md",sourceDirName:".",slug:"/cable-actors",permalink:"/TetherDocs/cable-actors",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Cable Placement Mode",permalink:"/TetherDocs/editor-mode"},next:{title:"Example Project",permalink:"/TetherDocs/info/example-project"}},h=[{value:"Physics Simulation",id:"physics-simulation",children:[],level:2},{value:"Mesh Generation",id:"mesh-generation",children:[{value:"Basic Mesh Generation",id:"basic-mesh-generation",children:[],level:3},{value:"Custom Mesh Generation",id:"custom-mesh-generation",children:[],level:3}],level:2}],u={toc:h};function d(e){var t=e.components,l=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,s.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"cable-actors"},"Cable Actors"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Tether Cable Actors")," are self-contained objects in the world that are responsible for handling all of the functionality for a single cable, including settings, physics simulation, mesh generation, and the resultant static mesh."),(0,i.kt)("p",null,"The overall path of the cable before simulation is determined by a ",(0,i.kt)("strong",{parentName:"p"},"Spline Component")," on the Actor, which may have already been set up using the ",(0,i.kt)("a",{parentName:"p",href:"/TetherDocs/editor-mode"},"Cable Placement Mode")),(0,i.kt)("h2",{id:"physics-simulation"},"Physics Simulation"),(0,i.kt)("p",null,"Tether runs an asynchronous physics simulation for the cable, simulating for a certain amount of time and skipping ahead to the final result so that you don't need to wait for it.\nWhen the cable path or any applicable properties are modified, the simulation is run again automatically so that the cable stays up to date."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Title",src:a(2301).Z})),(0,i.kt)("h2",{id:"mesh-generation"},"Mesh Generation"),(0,i.kt)("p",null,"Once the physics simulation is complete, Tether generates a mesh for the cable using one of two methods which the user can specify per-cable:"),(0,i.kt)("h3",{id:"basic-mesh-generation"},"Basic Mesh Generation"),(0,i.kt)("p",null,"This mode generates simple geometry for the cable using a specified number of sides and edge loop resolution.\nUnncessary edge loops can be culled automatically based on the angle to optimize the final geometry."),(0,i.kt)("h3",{id:"custom-mesh-generation"},"Custom Mesh Generation"),(0,i.kt)("p",null,"This mode takes a user-specified Static Mesh asset and repeats it along the length of the cable, deforming it similar to how a Spline Mesh would."),(0,i.kt)("p",null,"The number of instances of the mesh to be repeated can be specified by the user, or calculated automatically based on the width and length of the cable and the source mesh.\nMaterial IDs are also copied, allowing the use of the same number of materials as the source mesh."),(0,i.kt)("p",null,"The source mesh must be x axis aligned and be sufficiently tesselated to allow for proper deformation, just like with spline meshes. When simulating physics with collision with other objects, it's also recommended to keep the mesh as cylindrical as possible as the collision for the cable while it is simulating is approximate and does not factor in the shape of the mesh."),(0,i.kt)("p",null,"As the geometry is copied from the source mesh when the mesh is generated, any changes to the source mesh won't be reflected afterward unless the cable mesh is regenerated."),(0,i.kt)("p",null,"This mode is very powerful for creating more detailed cables, but has the potential to create very dense geometry if not used carefully."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Title",src:a(4068).Z})))}d.isMDXComponent=!0},2301:function(e,t,a){t.Z=a.p+"assets/images/collapsed-3716c31ccd61154fad3290b5a41fd855.png"},4068:function(e,t,a){t.Z=a.p+"assets/images/meshtypes-9f10356d1858f328ffa5e24a89d20dcf.png"}}]);