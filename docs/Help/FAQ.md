# Frequently Asked Questions (FAQ)

This article contains answers to some frequently asked questions regarding game setup, Drehmal gameplay, and other outside resources related to the map. 

If you have a question that is not answered by this article, or by the [[Getting Started]] article, then ask in one of the questions channels in the [Discord](https://discord.com/invite/drehmal).

## World Setup

These questions are related to the setup of the world: server setup for multiplayer, mod compatibility, common resource pack issues, and so on.

### Is There a Bedrock Version of the Map?

No, unfortunately, there is no Bedrock version of Drehmal. Drehmal will only function on the intended version of Minecraft: Java Edition, which is currently version 1.20.1. 

Previously, Drehmal v2.1 was built for JE version 1.16.5, and v2.2: Apotheosis was initially developed for version 1.17.1. The Apotheosis update was ported to 1.20.1 in mid-2024, and the 1.20.1 port, known officially as version 2.2.1, is currently the official version, and the only version available for download on [drehmal.net](https://drehmal.net). 

### How Do I Play Drehmal With Others?

There are several ways to play Drehmal with friends, with both paid server hosting and free self-hosting options. The Drehmal development team is officially sponsored by Apex for paid hosting, and you can follow the [[Getting Started#Drehmal Installer|instructions from the installer's]] "Server Installation" option. Most options for hosting are viable, with some notable exceptions.

Do NOT use Minecraft Realms. Realms only supports the latest version of Minecraft, and Drehmal is built for Java Edition 1.20.1, which has not been the most recent version of Minecraft since August 2023. Loading Drehmal on any version besides the version it was built for is almost guaranteed to break parts of the map.

Some free server hosts, such as Aternos, may not be able to run Drehmal due to the world's large file size.

There are several free options for server hosting, some of which are elaborated on in a pinned message in the #general channel of the Discord.

Further information will be added to this section at a later date. If you are struggling with multiplayer setup, ask in the Discord!

### Can I Add Other Mods/Plugins/Datapacks to Drehmal?

Strictly speaking, most additional mods will be technically *compatible* with Drehmal, as long as they do not affect commands—**mods that interfere with command block logic or vanilla commands should be strongly avoided, as they will break parts of the map.** Drehmal's required mods are mostly quality-of-life features, replacing Optifine, which was previously required for Drehmal v2.1, but is no longer needed to play the map. There is already a massive amount of custom content in Drehmal. While additional mods *can* be used, it is generally suggested to play the map with its default mods only, especially on a first playthrough, with the exception of small QoL mods such as [Mouse Tweaks](https://modrinth.com/mod/mouse-tweaks/versions?g=1.20.1&l=fabric) or [Easy Shulker Boxes](https://modrinth.com/mod/easy-shulker-boxes/versions?g=1.20.1&l=fabric). 

Common server alternatives such as Paper or Spigot have been known to cause issues on Drehmal, so it is strongly recommended that you do not use these or other modified servers. Plugins may not work, or may cause issues as well.

Additional datapacks (such as Vanilla Tweaks datapacks) are not recommended.

The following table discusses suggestions and compatibility for some common mods and mod types that people often wish to use in Drehmal.

| **Mod Type** | **Recommendation/Discussion** |
|:------------:|:----------------------------------------------------------------------------------------------------------------------|
| **Map Mods** | Map mods are fully compatible with Drehmal, although there are in-game maps that can be used as a more rough guide for exploration. Players who wish to discover the terrain and structures of the map for themselves may wish to forgo using a map mod, and minimaps in particular can lead to players seeing out of bounds in certain enclosed areas. On singleplayer, mods such as Xaero's World Map will show the entire world to the player immediately, which some people consider a spoiler, while mods like JourneyMap instead reveal the world as the player explores, which is sometimes preferred by players who are wary of map spoilers. The map will also need to be discovered by default on multiplayer servers when using Xaero's World Map. <br>Additionally, on version 2.2.1, some parts of the world map may appear corrupted. If you are using Xaero's World Map, turn ON the "Ignore Server Heightmaps" setting to fix this. |
| **Distant Horizons** | Distant Horizons is compatible with Drehmal, with similar caveats about terrain spoilers as the map mods above (as well as sharing the same potential bug). If you would like to use DH, there are also pre-generated LOD files available for download on the Discord, pinned in the #creations channel. |
| **Shaders**  | Shaders besides the default Drehmal shader (Sildur's Enhanced Default) can absolutely be used in Drehmal, although they may require some additional configuration to ensure that you still see the world's custom skyboxes. Shaders may negatively impact performance and make some areas more difficult to navigate due to lighting changes, but they are fully compatible with Drehmal. |
| **Terrain/Structure/Loot Generation** | Mods which change world generation (such as those which add new biomes), add new randomly spawned structures, or change loot tables, should not have any effect in Drehmal (and if they do, they will break things). Drehmal's world is already fully generated with manually placed loot, and so no new terrain should be generated as you play. |
| **Inventory Management (Backpacks)** | Backpack mods can be used in Drehmal, but there are intended solutions for inventory management which do not involve them, as Drehmal does have lots of loot. At any [[Adventuring Merchant]], you can buy bundles and shulker boxes, serving as the main use for the [[Runic Catalyst]] items found as uncommon loot throughout the world. |
| **New Mobs** | Mods that add new mobs may or may not work in Drehmal, but are not a part of the intended experience, and there are already existing custom enemies and [bosses](/Story_and_Features/Bosses/). |

**Known Conflicts:**

| **Mod** | **Issue** |
|:--------:|:----------------------------------------|
| Debugify | Known to cause game crashes when added to Drehmal. |

### Does This Map Work With Other Launchers?

Yes, Drehmal can be played on third-party Minecraft launchers such as TLauncher, ATLauncher, or Prism, although the installer can only set up the world on the vanilla Minecraft Launcher. Therefore, if you wish to use these launchers, you will need to [[Getting Started#Manual Installation|install Drehmal manually]].

### My Game Is Stuck on the Resource Pack Loading Screen. What Do I Do?

Are you stuck on an infinite Mojang loading screen, particularly when you try to select the resource pack? Try downloading the [alternative resource pack](https://drive.google.com/drive/folders/1kgF-wYFpuGT1fCPRjd4f8YB-vQIhJ4yz) from the Google Drive folder, in the second folder named "open this if you have resource pack errors". Replace the default resource pack with this one, and try running the game again.

This second version of the resource pack decreases the resolution and file size of the title screen panorama, among other small atlas changes, which can cause this infinite loading screen issue.

## Wiki Content

Questions about this wiki itself, and its scope.

### What Is the Difference Between This Wiki and the Fandom Wiki?

The Drehmal developers and prominent community members have been meaning to move away from Fandom for a while at this point, citing incompleteness, inaccurate information, advertisements, and disregard for spoiler warnings/protections as issues on that wiki. This project was started in 2022 as an attempt to make an independent wiki. Work stalled before the release of 2.2 in late 2023, but was eventually resumed by new volunteers in August 2024, leading to a massive (ongoing) revamp of the site with updates for content added in the 2.2 update.

This wiki is the only one that is directly supported by the Drehmal dev team, is updated by knowledgeable and coordinated Drehmal fans, and incorporates many pre-existing community resources into one place. It is still a work in progress, but this wiki serves as the most comprehensive resource for all things Drehmal. It has a larger scope than the Fandom wiki, and is designed much more thoughtfully with regard to spoiler warnings and new players.

### Is There Any DLC Content on this Wiki?

No, this wiki does not contain any information on the [unofficial "DLC" modpack](https://modrinth.com/modpack/drehmal-apotheosis-2.2-dlc) for Drehmal v2.2, created by developer tworoundcats. None of the people who work on this wiki have played the DLC, and it is not an official part of Drehmal, so it is unlikely that it will be added in the future, although a separate, much smaller wiki/guide may be created.

## Gameplay

Frequently asked questions about the gameplay of Drehmal.

### I'm Getting Really Bad Lag. What Should I Do?

There are a number of things that can cause lag in Drehmal, and in Minecraft in general. Here are some options to try:

- If you have shaders on, turn them off. Shaders are very cool, but can have a very strong negative impact on performance. <br>
- Turn down your render/simulation distance (ensure they stay the same). A higher render distance can be advantageous when exploring the world, but you may see diminishing returns above a render distance of about 20 chunks. Just don't go lower than 8 chunks. <br>
- Try tweaking other settings in Minecraft's "Video Settings" tab which impact performance, such as turning graphics to "Fast," turning leaves to "Fast," and so on. <br>
- Ensure that you have allocated the proper amount of RAM to your Drehmal Minecraft installation. Sometimes, allocating either too little (less than 4 GB) or too much (the majority of your machine's total RAM) can cause persistent lag issues. On an existing installation, the RAM can be changed by changing the number in the "JVM Arguments" dropdown box of the installation in the vanilla launcher. This box, underneath "More Options," should have a string that looks like `-Xmx8192M`, where "8192" is a number referring to the Megabytes of RAM allocated (this number is about 8GB of RAM). You can simply adjust this number to something else (like 10240 for just over 10 GB of RAM), save the installation, and play.

### I Lost a Custom Item. Can I Get It Back?

Drehmal has many custom items, most of which can be recovered if lost or destroyed. [Legendaries](/Items/Legendary_Items/) and [Mythicals](/Items/Mythical_Weapons/) can be crafted via the recipes that you learn when you first find them. [[Artisan Items]] can be purchased again from their original vendor, and [[Runic Catalyst|Runic Catalysts]] can be bought in the late-game, or simply duplicated using creative mode.

Some custom items, however, cannot be crafted or purchased again if lost. This includes [[Artifacts]], which have exactly one copy in the map and cannot be re-created if broken or lost, as well as [[Fervor Stones]]. Fervor Stones can be acquired using custom commands that are built in to the datapack, found [[Fervor Stones#Extras|here]].

Artifacts can be cheated back into the game using a `/give` command with the item's full NBT data, which will be a part of the default datapack starting in the 2.2.2 update. However, as of now, these simple commands do not exist, and players must create the /give command to restore their artifact (we have people in the Discord who can help with this). 

[[Relics]] can also be obtained using a [[Trinkets#Relic Vessel|Relic Vessel]], by throwing one onto the altar of the relic's Deity/Aspect. Lost relics can also be cheated in using built-in `/function` commands. See [[Relics#Extras|this page]] for a full list of those commands.

### I'm Stuck On [A Puzzle]. What Do I Do?

Depends! If we have an article on that location, it should have your answer. Many of the game's true puzzles are confined to [Story Locations](/Story_and_Features/Story_Locations/), so if you're somewhere along the story's main path, then the wiki article for that location almost certainly can help.

### I Found Something, But I Can't Seem to Do Anything With It. What Should I Do?

There are many knowledge gates in Drehmal—structures you technically *can* find and use at any point, but whose solutions are not readily apparent, only learned later in the map's story. You can always come back to interesting places later if you feel like you're missing something, and often, this is the best course of action, and what people will tell you if you ask.

## Other Resources

### Is There A World Map I Can Use?

Yes, there are fully annotated world maps, although they are typically not shared outside of completion-locked Discord channels due to heavy spoilers. This wiki may have an interactive map in the future, but this does not currently exist. It is generally recommended to explore the world without use of external maps on your first playthrough, but if you really want to use a map, then we recommend a map mod such as [JourneyMap](https://modrinth.com/mod/journeymap/versions?g=1.20.1&l=fabric). 

If you truly must have a more detailed map, then we may recommend the [Drehmal Overviewer](https://map.drehmal.cyou/). The maps found at this website have toggle-able markers that can show chests, passive mob spawn locations, and various other items, as well as the full terrain of the world. 

!!! warning "If you decide to use these maps during your first playthrough, then we STRONGLY advise that you do not switch dimensions on these maps away from the overworld for spoiler reasons. Some late-game and end-game areas are made in custom dimensions, and even briefly viewing these may massively spoil your experience playing the map."
