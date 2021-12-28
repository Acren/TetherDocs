---
sidebar_position: 7
---

# Unreal Engine 5

Unreal Engine 5 is currently in Early Access and is not officially supported through the launcher.
However, the plugin can be manually compiled for Unreal 5 using the steps below.

:::info
Please note the **Self-collision** feature does not currently work with Unreal 5 or the Chaos physics system. The option will be ignored when enabled.
:::

## Manual Compilation

1. Install or update the plugin to at least **1.0.3** on another engine version through the launcher. You can verify the version in the Plugins window in a project with that engine version. This is important as it won't work on previous versions.
2. Copy the plugin from the engine you installed it to, from `Engine/Plugins/Marketplace` into your own 5.0 project at `Project/Plugins`.
3. Inside `Tether.uplugin`, update the `EngineVersion` line to `5.0.0`, or remove the line completely and the previous comma. Save the file.
4. Either:
    * Run the project. Click Yes when prompted to rebuild the plugin.

      OR

    * Build the project through Visual Studio or IDE of your choice.
