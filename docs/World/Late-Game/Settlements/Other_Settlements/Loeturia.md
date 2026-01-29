# Loeturia

--8<-- "spoiler.md"

--8<-- "LD_spoiler.md"

![[loe_domain.png]]

**Loeturia** is a settlement in western [[Loe's Domain]], easily distinguishable for its large blackstone wall. It is, notably, the site of one of Lo'Dahr's two [[gates]] that can be opened from the moon side, as well as the source of one of the hints on how to do so.

!!! abstract "Location"
    Approximate Coordinates: `-920, 75, 739`

Loeturia is home to four lore books and a [[Runic Blacksmith]].

## Layout

Loeturia is built at the base of a large hill in the west of Loe's Domain, and is mostly contained by a large blackstone brick wall, forming a box shape. Homes are built around the wall's inner edges, around the main entrance to the east. The centerpiece of the town is an ice rink, with lines very reminiscent of a hockey rink or soccer field.

Steps on either wall lead up to the main feature of the town, a large temple-like structure with one large room. In the center of this room is one of the quartz [[gates]] found throughout Drehmal and Lo'Dahr, inactive.

## Unique Villagers

### Runic Blacksmith

A [[Runic Blacksmith]] is located in a tent in the southeast corner, selling [[Artisan Items#Loeturia|two artisan items]].

**Coordinates:** (-973, 75, 762)

**Trades:**

|  **Cost**  | **Item** |
|:----------:|:---------------------------:|
| 7 Amethyst Shards | *Hand-Stitched Sweater* |
| 10 Amethyst Shards | *Sliding Shield* |

### Hot Chocolate Merchant

A merchant named "Hot Chocolate Merchant" stands in a booth near the entrance to the town, selling potions themed around hot chocolate and cider.

**Coordinates:** (-969, 75, 739)

**Trades:**

|  **Cost**  | **Item** |
|:----------:|:---------------------------:|
| 2 Amethyst Shards | *Hot Chocolate* <br> Effects: Resistance (30s) |
| 3 Amethyst Shards | *Hot Chocolate with Marshmallows* <br> Effects: Resistance (45s) |
| 7 Amethyst Shards | *Lai Cider* <br> Effects: Slowness II (2m) <br> Absorption V (2m) |

## Lore

Loeturia was once the only place on Lo'Dahr where non-ascended [[Drehmari]] were allowed to live alongside the local [[Tehrmari]]. During the time of [[Avsohm]], the empire built the [[Inscription Complex]] just outside of the town, and there was notable tension between their forces and the Tehrmari locals. However, the town appears to have remained open to Drehmari after the empire's fall, although they were asked to remain inside the walls. Eventually, large influxes of Drehmari migrants forced the town to build homes beyond their walls, expanding into the dangers of the surrounding biome, and the village elders made the decision to shut down the portal.

### Books

- [[Castle to the North]] - Hints at the existence and location of [[Greyspire Castle]]. <br>
- [[Gifts for the Visitors]] - A written record from a Drehmari inhabitant of the town. <br>
- [[That Ugly Construction]] - Written about the nearby [[Inscription Complex]]. <br>
- [[The Elders' Decision]] - An account of the portal being closed, and an explicit hint for how to open it. 

## Extras

### Merchant Respawn Commands

In the event that one of the custom merchants in Loeturia is turned into a witch or dies, the following commands can be used (through a command block) in order to respawn them. See [[FAQ#Can Custom Villagers Be Respawned?|this page]] for more information on these commands.

??? question "Loeturia Villager Respawn Commands"
    ??? info "Runic Blacksmith"
        `/summon minecraft:villager -972.50 75.00 762.50 {DeathTime: 0s, RestocksToday: 0, Xp: 0, LeftHanded: 0b, OnGround: 0b, AbsorptionAmount: 0.0f, FoodLevel: 0b, LastRestock: 0L, Attributes: [{Name: "minecraft:generic.movement_speed", Base: 0.5d}], Invulnerable: 1b, Brain: {memories: {"minecraft:golem_detected_recently": {value: 1b, ttl: 600L}}}, Age: 0, HandDropChances: [0.085f, 0.085f], ArmorDropChances: [0.085f, 0.085f, 0.085f, 0.085f], Rotation: [135.0f, 0.0f], HurtByTimestamp: 0, ForcedAge: 0, CustomName: '{"text":"Runic Blacksmith"}', ArmorItems: [{}, {}, {}, {}], Tags: ["lodahr_mob"], Air: 300s, HandItems: [{}, {}], NoAI: 1b, Offers: {Recipes: [{xp: 1, buy: {id: "minecraft:amethyst_shard", Count: 7b}, sell: {id: "minecraft:leather_chestplate", tag: {display: {color: 14687744, Name: '{"text":"Hand-Stitched Sweater","color":"yellow","italic":false,"underlined":true}', Lore: ['{"text":"An elderly Ro\'Tehrmari grandmother gives these"}', '{"text":"to each of the children of Loeturia each year."}', '{"text":"Larger sizes are also available for a small cost."}', '{"text":" "}', '{"text":"When on body:","color":"gray","italic":false}', '{"text":"+10 Max Health","color":"blue","italic":false}', '{"text":"+1 Armor","color":"blue","italic":false}', '{"text":" "}', '{"text":"Artisan","color":"yellow","italic":false}']}, Enchantments: [{id: "minecraft:unbreaking", lvl: 10s}], HideFlags: 2, Damage: 0, AttributeModifiers: [{Amount: 10, Operation: 0, Slot: "chest", UUID: [I; 145979396, -707509620, -2114734792, -1058648321], AttributeName: "generic.max_health", Name: "generic.max_health"}, {Amount: 1, Operation: 0, Slot: "chest", UUID: [I; 603142750, 1941064118, -1590607540, 485284133], AttributeName: "generic.armor", Name: "generic.armor"}]}, Count: 1b}, uses: 0, priceMultiplier: 0.0f, maxUses: 999999, rewardExp: 1b, demand: 0, specialPrice: 0, buyB: {id: "minecraft:air", Count: 0b}}, {xp: 1, buy: {id: "minecraft:amethyst_shard", Count: 10b}, sell: {id: "minecraft:shield", tag: {display: {Name: '{"text":"Sliding Shield ","color":"yellow","italic":false,"underlined":true}', Lore: ['{"text":"This enormous tower shield is outfitted with cozy fur and a"}', '{"text":"rope on the grip side so that a warm passenger can slide"}', '{"text":"down snowy slopes. A perfect gift! "}', '{"text":" "}', '{"text":"When in offhand:","color":"gray","italic":false}', '{"text":"+10 Max Health ","color":"blue","italic":false}', '{"text":"-2 Attack Damage","color":"blue","italic":false}', '{"text":" "}', '{"text":"Artisan","color":"yellow","italic":false}']}, HideFlags: 2, Enchantments: [{id: "minecraft:unbreaking", lvl: 3s}], BlockEntityTag: {id: "minecraft:banner", Patterns: [{Pattern: "ms", Color: 15}, {Pattern: "cbo", Color: 0}], Base: 14}, Damage: 0, AttributeModifiers: [{Amount: 10, Operation: 0, Slot: "offhand", UUID: [I; -217632364, 945046550, -1824980708, -1698996561], AttributeName: "generic.max_health", Name: "generic.max_health"}, {Amount: -2, Operation: 0, Slot: "offhand", UUID: [I; -321232872, 1046498737, -1459462208, 1582815662], AttributeName: "generic.attack_damage", Name: "generic.attack_damage"}]}, Count: 1b}, uses: 0, priceMultiplier: 0.0f, maxUses: 999999, rewardExp: 1b, demand: 0, specialPrice: 0, buyB: {id: "minecraft:air", Count: 0b}}]}, Inventory: [], Gossips: [], FallDistance: 0.0f, NoGravity: 1b, Motion: [0.0d, 0.0d, 0.0d], VillagerData: {type: "minecraft:plains", profession: "minecraft:toolsmith", level: 99}, Fire: 0s, CanPickUpLoot: 1b, Health: 20.0f, HurtTime: 0s, FallFlying: 0b, PersistenceRequired: 1b, LastGossipDecay: 1135286759L, PortalCooldown: 0}`
    ??? info "Hot Chocolate Merchant"
        `/summon minecraft:villager -968.50 75.00 739.50 {DeathTime: 0s, RestocksToday: 0, Xp: 0, LeftHanded: 0b, OnGround: 0b, AbsorptionAmount: 0.0f, FoodLevel: 0b, LastRestock: 0L, Attributes: [{Name: "minecraft:generic.movement_speed", Base: 0.5d}], Invulnerable: 1b, Brain: {memories: {}}, Age: 0, HandDropChances: [0.085f, 0.085f], Rotation: [0.0f, 0.0f], ArmorDropChances: [0.085f, 0.085f, 0.085f, 0.085f], HurtByTimestamp: 0, ForcedAge: 0, CustomName: '{"text":"Hot Chocolate Merchant"}', ArmorItems: [{}, {}, {}, {}], Tags: ["lodahr_mob"], Air: 300s, HandItems: [{}, {}], NoAI: 1b, Offers: {Recipes: [{xp: 1, buy: {id: "minecraft:amethyst_shard", Count: 2b}, sell: {id: "minecraft:potion", tag: {display: {Name: '{"text":"Hot Chocolate","italic":false}'}, CustomPotionColor: 6373935, CustomPotionEffects: [{Id: 11b, Amplifier: 0b, Duration: 600}]}, Count: 1b}, uses: 0, priceMultiplier: 0.0f, maxUses: 999999, rewardExp: 1b, demand: 0, specialPrice: 0, buyB: {id: "minecraft:air", Count: 0b}}, {xp: 1, buy: {id: "minecraft:amethyst_shard", Count: 3b}, sell: {id: "minecraft:potion", tag: {display: {Name: '{"text":"Hot Chocolate with Marshmallows","italic":false}'}, CustomPotionColor: 7031092, CustomPotionEffects: [{Id: 11b, Amplifier: 0b, Duration: 900}]}, Count: 1b}, uses: 0, priceMultiplier: 0.0f, maxUses: 999999, rewardExp: 1b, demand: 0, specialPrice: 0, buyB: {id: "minecraft:air", Count: 0b}}, {xp: 1, buy: {id: "minecraft:amethyst_shard", Count: 7b}, sell: {id: "minecraft:potion", tag: {display: {Name: '{"text":"Lai Cider","italic":false}'}, CustomPotionColor: 13075512, CustomPotionEffects: [{Id: 2b, Amplifier: 1b, Duration: 2400}, {Id: 22b, Amplifier: 4b, Duration: 2400}]}, Count: 1b}, uses: 0, priceMultiplier: 0.0f, maxUses: 999999, rewardExp: 1b, demand: 0, specialPrice: 0, buyB: {id: "minecraft:air", Count: 0b}}]}, Inventory: [], Gossips: [], FallDistance: 0.0f, Motion: [0.0d, 0.0d, 0.0d], VillagerData: {type: "minecraft:snow", profession: "minecraft:farmer", level: 99}, Fire: 0s, CanPickUpLoot: 1b, Health: 20.0f, HurtTime: 0s, FallFlying: 0b, PersistenceRequired: 1b, LastGossipDecay: 1139398564L, PortalCooldown: 0}`
