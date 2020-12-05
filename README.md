# Startup modded Minecraft server (WIP)

Docs:
- [Whitelist Application](./WHITELIST_APPLICATION.md)


## Modpack

> Note: 1.12.2 packs have the advantage of [SpongeForge's](https://www.spongepowered.org/downloads/spongeforge/stable) optimizations

### Websites to find modpacks:

1. [CurseForge - most popular](https://www.curseforge.com/minecraft/modpacks?filter-sort=4)

   - [SkyFactory 4 - 1.12.2](https://www.curseforge.com/minecraft/modpacks/skyfactory-4)
   - [Valhelsia 2 - 1.15.2](https://www.curseforge.com/minecraft/modpacks/valhelsia-2)
   - [MC Eternal - 1.12.2](https://www.curseforge.com/minecraft/modpacks/minecraft-eternal)
   - [FTB Stoneblock 2 - 1.12.2](https://www.curseforge.com/minecraft/modpacks/ftb-presents-stoneblock-2)

2. [Technic Launcher - trending](https://www.technicpack.net/modpacks)
   - [The 1.12.2 Pack - 1.12.2 (obviously)](https://www.technicpack.net/modpack/the-1122-pack.1406454)
   - [Tekxit 3 - 1.12.2](https://www.technicpack.net/modpack/tekxit-3-official-1122.1253751)
3. [AT Launcher - all](https://atlauncher.com/packs/all)
   - [Resonant Rise - 1.12.2](https://atlauncher.com/pack/ResonantRise)
4. [FTB Launcher](https://www.feed-the-beast.com/modpack)
   - [FTB Interactions - 1.12.2](https://www.feed-the-beast.com/modpack/ftb_interactions)

## Hosting

We will be comparing price/performances of various hosting services for dedicated servers. These requirements may change depending on the chosen modpack.

Dedicated server requirements:

- `32 GB` of RAM
- High clock speeds per CPU core (hopefully at least `3.5 GHz`)
- SSD Storage (at least `512 GB`)
- Included backup storage (at least `1 TB`)
- Under `€100` per month
- Available in `US/Canada` or `Germany`

This dedicated server will also be used to run other programs/applications, mainly minecraft-related services (forums/websites).

### Hosting companies:

1.  [OVH Cloud](https://www.ovhcloud.com/en-ie/bare-metal/)
    | Name | CPU | RAM | Bandwith | Storage | Backup | Price (EURO) | Price (RON) |
    | --------------------------------------------------------------- | --------------------------------------- | ----- | -------- | ----------------- | ------ | ------------ | ----------- |
    | [Game-1](https://www.ovhcloud.com/en-ie/bare-metal/game/game-1) | Ryzen 5 3600X - 6 cores at 3.8GHz | 32 GB | 1GBps | 2x500 GB SSD NVMe | 500GB | 90 | 437 |
    | [Rise-3](https://www.ovhcloud.com/en-ie/bare-metal/rise/rise-3) | Intel Core i7-7700K - 4 cores at 4.2GHz | 32 GB | 500mbps | 2x450 GB SSD NVMe | 500GB | 74.5 | 362 |

2.  [Hetzner](https://www.hetzner.com/dedicated-rootserver) - Germany based
    | URL | CPU | RAM | Bandwith | Storage | Backup | Price (EURO) | Price (RON) |
    | -------------------------------------------------------------------------------- | ------------------------------------ | ----- | -------- | ----------------- | ------ | ----------------- | -------------------- |
    | [AX41-NVMe](https://www.hetzner.com/dedicated-rootserver/ax41-nvme/configurator) | AMD Ryzen 5 3600 Hexa-Core - 3.6 GHz | 64 GB | 1GBps | 2x500 GB SSD NVMe | 0 | 45 + 45(one time) | 218 + 218 (one time) |

## Forum

1. [Flarum](https://flarum.org/)
   First thoughts:
   - Customizable
   - BETA - it might break
   - Running MySQL (possibility to upgrade to hasura with a custom frontend later)
2. [Discourse](https://www.discourse.org/)

## Technical implementations

## Total monthly cost
