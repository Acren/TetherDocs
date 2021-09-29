---
sidebar_position: 6
---

# Versions

## Compatibility

Each plugin version is (usually) released to support the latest engine version only.

## Release Notes

### 1.0
`UE 4.26` `UE 4.27`

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

### beta-0.14
`UE 4.26`

- Fixed crashes in Standalone play mode
- Fixed cable invalidating static lighting for packaged builds during cook process
- Fixed errors in packaged builds about missing components
- Fixed ensures triggering in packaged builds about mesh UVChannelData not being initialized
- Fixed realtime simulation preview not behaving correctly with higher substep times
- Cables no longer collide with Trigger actors

### beta-0.13
`UE 4.26`

- Added a cable property to specify the collision profile to use during simulation
- Holding ctrl will now suspend simulation of the current cable until it is released
- The modifier to adjust cable slack more finely has been changed from ctrl to shift
- Fixed an ensure being triggered when the cable end point is set while the first simulation is running
- Fixed incorrect tangent being used when setting normal-aligned tangents while holding alt when left mouse button is not down
- Changed FTetherAsyncMeshBuildTaskParams object pointers to weak pointers, which may have been causing crashes before
- Fixed being able to destroy the static mesh component and cause a crash using the property on the cable actor details
- Source code cleanup and comments

### beta-0.12
`UE 4.26`

- Fixed crash when attempting to resimulate a cable that has too few spline points, now resimulating requires at least 2 points
- Fixed tangents on adjacent points being lost when adding a point with the Unreal spline tools
- Can now set normal-aligned tangents by holding alt when placing a point, even when left mouse button is not down
- Removed the ability to realtime simulation preview on multiple selected cables at the same time, as it's not useful and can lead to inconsistent results

### beta-0.11
`UE 4.26`

- Initial beta release for UE 4.26