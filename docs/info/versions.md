---
sidebar_position: 6
---

# Versions

## Release Notes

### 1.6.1 {#1_6_1}
`UE 5.5`

- Speculative fix for a crash occuring with the editor tools

### 1.6 {#1_6}
`UE 5.5`

- UE 5.5 now supported

### 1.5 {#1_5}
`UE 5.4`

- UE 5.4 now supported

### 1.4 {#1_4}
`UE 5.3`

- UE 5.3 now supported

### 1.3.1 {#1_3_1}
`UE 5.2`

- Added a static check to make sure projects are using the new 5.2 engine include order version, as older versions prevent the plugin from compiling

### 1.3 {#1_3}
`UE 5.2`

- UE 5.2 now supported

### 1.2.2 {#1_2_2}
`UE 5.1`

- Fixed a crash when loading a cable that was saved with missing point data

### 1.2.1 {#1_2_1}
`UE 5.1`

- Stability improvements and crash fixes

### 1.2 {#1_2}
`UE 5.1`

- UE 5.1 now supported

### 1.1.1 {#1_1_1}
`UE 5.0` `UE 4.27`

- Fixed a crash when adding a Blueprint property get or set node for Cable Properties
- Possible fix for a rare crash after cable simulation
- Removed the 'Materials' property section on Tether Cable Actor that was appearing in UE5 and causing confusion (the intended way of applying materials is in Cable Properties)

### 1.1 {#1_1}
`UE 5.0`

- UE 5.0 now supported
- Fixed an issue sometimes causing a crash when modifying a material on multiple cables at the same time

:::note
UE5 changes the physics engine from PhysX to Chaos. The plugin mostly still works as expected, however the "self-collision" feature does not work with Chaos yet and is therefore disabled in this release.
It may also be more difficult to get cables to rest on other cables with the default settings - if so you can increase the Collision Friction in the Simulation Properties.
:::

:::note
The release for this version was incorrectly labelled as 1.0.4. Apologies for any confusion.
:::

### 1.0.3 {#1_0_3}
`UE 4.27` `UE 4.26` `UE 4.25` 

- Fixes for UE 5.0 EA
- Plugin can now be compiled using Clang

### 1.0.2 {#1_0_2}
`UE 4.27` `UE 4.26` `UE 4.25` 

- Fixed a crash in Standalone mode when loading a map with a cable that has Lock State enabled
- Fixed a crash when using a custom mesh that has the pivot on one end
- Fixed a crash when undoing after deleting a cable spline point
- Fixed a crash when deleting a spline point on a cable that was loaded with the map

### 1.0.1 {#1_0_1}
`UE 4.27` `UE 4.26` `UE 4.25` 

- UE 4.25 now supported
- Added plugin icon and updated descriptions and category
- Internal fixes for automation tests that were failing in some scenarios

### 1.0 {#1_0}
`UE 4.27` `UE 4.26`

- Added an example project with various cable setups
- Added an option to auto-tile the material UVs across the length of the cable
- Changed various simulation options to multipliers that scale based on the width of the cable
- Reduced minimum cable width from 1 to 0.1
- Increased default mesh resolution to be more practical for larger pipe-sized cables
- Fixed crash when duplicating a cable
- Fixed crash when duplicating map that contains a cable
- Fixed crash from cable sometimes trying to simulated in play mode
- Fixed occasional crashes during simulation
- Fixed issue with undoing segments
- Fixed tangents being incorrect on linear cable spline segments
- Fixed ensures triggering in some cases
- Added console variables to disable various internal simulation features for debugging
- Internal changes to support automated testing

### beta-0.14 {#0_14}
`UE 4.26`

- Fixed crashes in Standalone play mode
- Fixed cable invalidating static lighting for packaged builds during cook process
- Fixed errors in packaged builds about missing components
- Fixed ensures triggering in packaged builds about mesh UVChannelData not being initialized
- Fixed realtime simulation preview not behaving correctly with higher substep times
- Cables no longer collide with Trigger actors

### beta-0.13 {#0_13}
`UE 4.26`

- Added a cable property to specify the collision profile to use during simulation
- Holding ctrl will now suspend simulation of the current cable until it is released
- The modifier to adjust cable slack more finely has been changed from ctrl to shift
- Fixed an ensure being triggered when the cable end point is set while the first simulation is running
- Fixed incorrect tangent being used when setting normal-aligned tangents while holding alt when left mouse button is not down
- Changed FTetherAsyncMeshBuildTaskParams object pointers to weak pointers, which may have been causing crashes before
- Fixed being able to destroy the static mesh component and cause a crash using the property on the cable actor details
- Source code cleanup and comments

### beta-0.12 {#0_12}
`UE 4.26`

- Fixed crash when attempting to resimulate a cable that has too few spline points, now resimulating requires at least 2 points
- Fixed tangents on adjacent points being lost when adding a point with the Unreal spline tools
- Can now set normal-aligned tangents by holding alt when placing a point, even when left mouse button is not down
- Removed the ability to realtime simulation preview on multiple selected cables at the same time, as it's not useful and can lead to inconsistent results

### beta-0.11 {#0_11}
`UE 4.26`

- Initial beta release for UE 4.26