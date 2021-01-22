# Compatibility

Each plugin version is (usually) released to support the latest engine version only.

Plugin    | Engine
-------   | ------
beta-0.12 | 4.26
beta-0.11 | 4.26  

# Release Notes

## beta-0.12

- Fixed crash when attempting to resimulate a cable that has too few spline points, now resimulating requires at least 2 points
- Fixed tangents on adjacent points being lost when adding a point with the Unreal spline tools
- Can now set normal-aligned tangents by holding alt when placing a point, even when left mouse button is not down
- Removed the ability to realtime simulation preview on multiple selected cables at the same time, as it's not useful and can lead to inconsistent results

## beta-0.11

- Initial beta release for UE 4.26