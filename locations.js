//Game mechanics
import { goStore, goCave, goBoss, goTown, goCheck, treasure, statboost, mystery, buyCrit, XPboost, inspectZwei, inspectShortbow, inspectWand, inspectKat, inspectClay, inspectGem, inspectGreat, inspectShadow, inspectMech, gainBarbedSlime, gainPatriarch, gainArchgoyle, inspectBarbedSlime, inspectKingSoul, inspectArchgoyle, } from "./script.js";
import { opt1, opt2, opt3 } from "./script.js";
import { attack, defend, run} from "./script.js";
//Roles
import { warriorSelect, mageSelect, rogueSelect, } from "./script.js";
//Store
import { weaponShop, potionShop, exchangeStore } from "./script.js";
import { healPot, ATKPot, MiscSelect } from "./script.js";
import { debuff, buff, luckPot } from "./script.js";
import { buyPower, buyDef, buyReset } from "./script.js";
import { ATKdebuff, DEFdebuff, AGdebuff } from "./script.js";
import { powerPot, defPot, critPot, resetStats } from "./script.js";
import { goCommon, goRare, goLegendary } from "./script.js";
import { zweiHander, shortBow, magicWand, rareKatana, clayMore, gemStaff, greatestSword, shadowBow, mechanicalStaff } from "./script.js";
import { sellMats, lifeEx, goldEx } from "./script.js";
import { buyHealth, buyStat } from "./script.js";
import { empowerment, vitalDef, borne } from "./script.js";
import { goldBoost } from "./script.js";
//Enemies
import { fightSlime,fightFang,fightGargoyle } from "./script.js";
import { fightGolem,fightMagus,fightReve } from "./script.js";
import { fightAbom,fightStalker,fightMimic } from "./script.js";
//Mob drops
import { gainSlimeSuit,gainTreasureSlimeTreasure,gainWolfSoul,gainGargoyle,gainStoneFist,gainScepter, gainRevenant, gainAbomination, gainStalker, gainMimic, gainDetermination } from "./script.js";
import { gainSlimeMats,gainWolfMats,gainGarMats,gainRockMats,gainMagusMats, gainReveMats, gainAbomMats, gainStalkerMats, gainMimicMats } from "./script.js";
//Inventory
import { openInventory, openWeapons, openRare,openConsumables } from "./script.js";
import { checkCommon, checkRare, checkLeg } from "./script.js";
import { inspectOpt1, inspectOpt2, inspectOpt3, } from "./script.js";
import { inspectSlime, inspectWolf, inspectGargoyle, inspectGolem, inspectMagus, inspectRevenant, inspectAbomination, inspectStalker, inspectMimic, inspectTreasureSlime, placeHolder, inspectDragon, } from "./script.js";
import { useChest,useHeal,useGems } from "./script.js";
import { playerStatus } from "./variables.js";

const town = [
    {
        name: "Town",
        "button text": ["Store", "Dungeon", "Dragon"],
        "button functions": [goStore, goCave, goBoss],
        text: "You stand amongst the cheerful crowd of the local town.",
        source: "./Images/townsquare.jpg"
    }
]

const locations = [
    {
        name: "Store",
        "button text": ["Weapons", "Potions", "Exchange"],
        "button functions": [weaponShop, potionShop, exchangeStore, goTown],
        text: "The shopkeep's artifical design greets you",
        source: "./Images/shopkeep.jpg",
    },
    {
        name: "Cave",
        "button text": ["Option 1", "Option 2", "Option 3"],
        "button functions": [opt1, opt2, opt3, goTown],
        text: "You enter the local dungeon",
        source: "./Images/left.jpg",
    },
]

const dungeon = [
    {
        name: "option1",
        "button text": ["Fight Slime", "Fight fanged beast", "Fight gargoyle"],
        "button functions": [fightSlime, fightFang, fightGargoyle, goCave],
        text: "You observe the area to see monsters among monsters.",
        source: "./Images/left.jpg",
    },
    {
        name: "option2",
        "button text": ["Fight Golem", "Fight Magus", "Fight Revenant"],
        "button functions": [fightGolem, fightMagus, fightReve, goCave],
        text: "cc",
        source: "./Images/left.jpg",
    },
    {
        name: "option2",
        "button text": ["Fight Abomination", "Fight Stalker", "???"],
        "button functions": [fightAbom, fightStalker, fightMimic, goCave],
        text: "cc",
        source: "./Images/left.jpg",
    },
]

const weapons = [
    {
        name: "Weapons",
        "button text": ["Common Lv1-10+", "Rare Lv10-20+", "Legendary Lv40+"],
        "button functions": [goCommon, goRare, goLegendary, goStore],
        text: "bb",
        source: "./Images/weapon.jpg"
    },
    {
        name: "Weapons Common",
        "button text": ["Zweihander (300G)", "Shortbow (200G)", "Magic Wand (500G)"],
        "button functions": [zweiHander, shortBow, magicWand, weaponShop],
        text: "The common section",
        source: "./Images/right.jpg"
    },
    {
        name: "Weapons Rare",
        "button text": ["Katana (1200G)", "Claymore (1800G)", "Gem Staff (2500G)"],
        "button functions": [rareKatana, clayMore, gemStaff, weaponShop],
        text: "The rare section",
        source: "./Images/right.jpg"
    },
    {
        name: "Weapons Legendary",
        "button text": ["Greatest Sword (8000G)", "Shadow Bow (7700G)", "Mechanical Staff (15000G)"],
        "button functions": [greatestSword, shadowBow, mechanicalStaff, weaponShop],
        text: "Leg",
        source: "./Images/right.jpg"
    }
]

const potions = [
    {
        name: "Potions",
        "button text": ["Healing (20HP/30G)", "ATK Boost - 1500G (50% ATK/ 1 Battle)", "Misc"],
        "button functions": [healPot, ATKPot, MiscSelect, goStore],
        text: "ppoti",
        source: "./Images/right.jpg"
    },
    {
        name: "Misc",
        "button text": ["Battle de-buffs", "Battle buffs", "Luck increase (7777G)"],
        "button functions": [debuff, buff, luckPot, potionShop],
        text: "ppoti",
        source: "./Images/right.jpg"
    },
    {
        name: "Debuffs",
        "button text": ["ATK weakening (1250G)", "DEF weakening (1500G)", "AG weakening (2000G)"],
        "button functions": [ATKdebuff, DEFdebuff, AGdebuff, MiscSelect],
        text: "ppoti",
        source: "./Images/right.jpg"
    },
    {
        name: "Buffs",
        "button text": ["ATK stat-up (2250HP)", "DEF stat-up (2250HP)", "CRIT boost (2250HP)"],
        "button functions": [buyPower, buyDef, buyCrit, MiscSelect],
        text: "ppoti",
        source: "./Images/right.jpg"
    },
]

const exchange = [
    {
        name: "Exchange",
        "button text": ["Material sell", "Life exchange", "Gold exchange"],
        "button functions": [sellMats, lifeEx, goldEx, goStore],
        text: "sjecnahcnge",
        source: "./Images/right.jpg"
    },
    {
        name: "Life Exchange",
        "button text": ["Crimson Empowerment (50HP)", "Vital Defense (50HP)", "Bloodborne (25HP)"],
        "button functions": [empowerment, vitalDef, borne, exchangeStore],
        text: "life",
        source: "./Images/right.jpg"
    },
    {
        name: "Gold Exchange",
        "button text": ["Stat reset potion (9999G)", "Gilded Vitality (800G)", "Gilded Power (3200G)"],
        "button functions": [buyReset, buyHealth, buyStat, exchangeStore],
        text: "goldss",
        source: "./Images/right.jpg"
    },
]

const monsters = [
    {
        name: "slime",
        class: "common",
        atkPower: 3,
        peakATKPower: 3,
        def: 0,
        peakDef: 0,
        health: 10,
        peakHealth: 10,
        goldReward: 8,
        xpYield: 50,
        ag: 10,
        peakAg: 10,
        rareDrop: gainSlimeSuit,
        rareDropChance: 98,
        materialDrop: gainSlimeMats,
        materialDropChance: 30,
        treasureYield: 2,
        "button text": ["Attack", "Defend", "Run"],
        "button functions": [() => attack(monsters[0]), () => defend(monsters[0]), run],
        text: "You encounter a slime",
        source: "./Images/slime.jpg"
    },
    {
        name: "Fanged Beast",
        class: "common",
        atkPower: 7,
        peakATKPower: 7,
        def: 25,
        peakDef: 25,
        health: 25,
        peakHealth: 25,
        goldReward: 25,
        xpYield: 400,
        ag: 75,
        peakAg: 75,
        rareDrop: gainWolfSoul,
        rareDropChance: 98,
        materialDrop: gainWolfMats,
        materialDropChance: 40,
        treasureYield: 6,
        "button text": ["Attack", "Defend", "Run"],
        "button functions": [() => attack(monsters[1]), () => defend(monsters[1]), run],
        text: "You encounter a fanged beast",
        source: "./Images/fanged.jpg"
    },
    {
        name: "Gargoyle",
        class: "danger",
        atkPower: 14,
        peakATKPower: 14,
        def: 50,
        peakDef: 50,
        health: 75,
        peakHealth: 75,
        goldReward: 50,
        xpYield: 2250,
        ag: 50,
        peakAg: 50,
        rareDrop: gainGargoyle,
        rareDropChance: 98,
        materialDrop: gainGarMats,
        materialDropChance: 40,
        treasureYield: 10,
        "button text": ["Attack", "Defend", "Run"],
        "button functions": [() => attack(monsters[2]), () => defend(monsters[2]), run],
        text: "You encounter a reanimated gargoyle",
        source: "./Images/gargoyle.jpg"
    },
    {
        name: "Golem",
        class: "common",
        atkPower: 20,
        peakATKPower: 20,
        def: 200,
        peakDef: 200,
        health: 50,
        peakHealth: 50,
        goldReward: 75,
        xpYield: 5000,
        ag: 10,
        peakAg: 10,
        rareDrop: gainStoneFist,
        rareDropChance: 98,
        materialDrop: gainRockMats,
        materialDropChance: 50,
        treasureYield: 12,
        "button text": ["Attack", "Defend", "Run"],
        "button functions": [() => attack(monsters[3]), () => defend(monsters[3]), run],
        text: "A massive sentient rock controlled by ominous magic stands before you",
        source: "./Images/golem.jpg"
    },
    {
        name: "Magus",
        class: "common",
        atkPower: 150,
        peakATKPower: 150,
        def: 10,
        peakDef: 10,
        health: 250,
        peakHealth: 250,
        goldReward: 100,
        xpYield: 15000,
        ag: 60,
        peakAg: 60,
        rareDrop: gainScepter,
        rareDropChance: 98,
        materialDrop: gainMagusMats,
        materialDropChance: 75,
        treasureYield: 16,
        "button text": ["Attack", "Defend", "Run"],
        "button functions": [() => attack(monsters[4]), () => defend(monsters[4]), run],
        text: "A malevolent spellcaster stands in the darkness, any encounter will be hostile",
        source: "./Images/magus.jpg"
    },
    {
        name: "Revenant",
        class: "danger",
        atkPower: 75,
        peakATKPower: 75,
        def: 125,
        peakDef: 125,
        health: 750,
        peakHealth: 750,
        goldReward: 800,
        xpYield: 40000,
        ag: 50,
        peakAg: 50,
        rareDrop: gainRevenant,
        rareDropChance: 98,
        materialDrop: gainReveMats,
        materialDropChance: 75,
        treasureYield: 24,
        "button text": ["Attack", "Defend", "Run"],
        "button functions": [() => attack(monsters[5]), () => defend(monsters[5]), run],
        text: "A ghoul stand sharply and raises his sword against you, it appears to be a dragnant.",
        source: "./Images/revenant.jpg"
    },
    {
        name: "Abomination",
        class: "danger",
        atkPower: 125,
        peakATKPower: 125,
        def: 10,
        peakDef: 10,
        health: 1250,
        peakHealth: 1250,
        goldReward: 550,
        xpYield: 30000,
        ag: 45,
        peakAg: 45,
        rareDrop: gainAbomination,
        rareDropChance: 98,
        materialDrop: gainAbomMats,
        materialDropChance: 75,
        treasureYield: 18,
        "button text": ["Attack", "Defend", "Run"],
        "button functions": [() => attack(monsters[6]), () => defend(monsters[6]), run],
        text: "A wretched creation lumbers towards you, a gaping mouth can be seen across his stomach...",
        source: "./Images/abomination.jpg"
    },
    {
        name: "Stalker",
        class: "danger",
        atkPower: 95,
        peakATKPower: 95,
        def: 50,
        peakDef: 50,
        health: 400,
        peakHealth: 400,
        goldReward: 900,
        xpYield: 50000,
        ag: 120,
        peakAg: 120,
        rareDrop: gainStalker,
        rareDropChance: 98,
        materialDrop: gainStalkerMats,
        materialDropChance: 75,
        treasureYield: 32,
        "button text": ["Attack", "Defend", "Run"],
        "button functions": [() => attack(monsters[7]), () => defend(monsters[7]), run],
        text: "Creaking in the darkness, a skinny figure stands hunchback and cackling loudly...",
        source: "./Images/stalker.jpg"
    },
    {
        name: "Doppelganger",
        class: "danger",
        atkPower: 125,
        peakATKPower: 125,
        def: 125,
        peakDef: 125,
        health: 1750,
        peakHealth: 1750,
        goldReward: 0,
        xpYield: 80000,
        ag: 100,
        peakAg: 100,
        rareDrop: gainMimic,
        rareDropChance: 98,
        materialDrop: gainMimicMats,
        materialDropChance: 75,
        treasureYield: 50,
        "button text": ["Attack", "Defend", "Run"],
        "button functions": [() => attack(monsters[8]), () => defend(monsters[8]), run],
        text: "A creature stands before you, resembling yourself...",
        source: "./Images/mimic.jpg"
    },
]

const rare = [
    {
        name: "Treasure slime",
        class: "timed",
        atkPower: 2,
        peakATKPower: 2,
        def: 66,
        peakDef: 66,
        health: 100,
        peakHealth: 100,
        goldReward: 3333,
        xpYield: 3333,
        ag: 10,
        peakAg: 10,
        rareDrop: gainTreasureSlimeTreasure,
        rareDropChance: 98,
        materialDrop: gainSlimeMats,
        materialDropChance: 0,
        treasureYield: 50,
        "button text": ["Attack", "Defend", "Run"],
        "button functions": [() => attack(rare[0]), () => defend(rare[0]), run],
        text: "You encounter a TREASURE slime",
        source: "./Images/treasureslime.jpg"
    },
]

const elite = [
    {
        name: "Barbed slime",
        class: "elite",
        atkPower: 10,
        peakATKPower: 10,
        def: 25,
        peakDef: 25,
        health: 250,
        peakHealth: 250,
        goldReward: 750,
        xpYield: 2000,
        ag: 40,
        peakAg: 40,
        rareDrop: gainBarbedSlime,
        rareDropChance: 98,
        materialDrop: gainSlimeMats,
        materialDropChance: 10,
        treasureYield: 6,
        "button text": ["Attack", "Defend", "Run"],
        "button functions": [() => attack(elite[0]), () => defend(elite[0]), run],
        text: "An elite variant of the common slime has arrived!",
        source: "./Images/barbed.jpg"
    },
    {
        name: "Fanged Patriarch",
        class: "elite",
        atkPower: 20,
        peakATKPower: 20,
        def: 30,
        peakDef: 30,
        health: 500,
        peakHealth: 500,
        goldReward: 1000,
        xpYield: 15000,
        ag: 100,
        peakAg: 100,
        rareDrop: gainPatriarch,
        rareDropChance: 98,
        materialDrop: gainWolfMats,
        materialDropChance: 10,
        treasureYield: 15,
        "button text": ["Attack", "Defend", "Run"],
        "button functions": [() => attack(elite[1]), () => defend(elite[1]), run],
        text: "The patriarch of the Fanged Beasts pack has arrived!",
        source: "./Images/patriarch.jpg"
    },
    {
        name: "Archgoyle",
        class: "elite",
        atkPower: 60,
        peakATKPower: 60,
        def: 150,
        peakDef: 150,
        health: 300,
        peakHealth: 300,
        goldReward: 1000,
        xpYield: 15000,
        ag: 90,
        peakAg: 90,
        rareDrop: gainArchgoyle,
        rareDropChance: 98,
        materialDrop: gainGarMats,
        materialDropChance: 10,
        treasureYield: 15,
        "button text": ["Attack", "Defend", "Run"],
        "button functions": [() => attack(elite[2]), () => defend(elite[2]), run],
        text: "The highest ranking gargoyle of the dungeon has descended upon you!",
        source: "./Images/archgoyle.jpg"
    },
]

const boss = [
    {
        name: "Dragon",
        class: "calamity",
        atkPower: 200,
        peakATKPower: 200,
        def: 150,
        peakDef: 150,
        health: 2250,
        peakHealth: 2250,
        goldReward: 100000,
        xpYield: 50000,
        ag: 150,
        peakAg: 150,
        rareDrop: gainDetermination,
        rareDropChance: 0,
        treasureYield: 100,
        "button text": ["Attack", "Defend", "Run"],
        "button functions": [() => attack(boss[0]), () => defend(boss[0]), run],
        text: "The calamity stands before you",
        source: "./Images/dragon.jpg"
    },
    {
        name: "Ruination",
        class: "destroyer",
        atkPower: 8000,
        peakATKPower: 8000,
        def: 800,
        peakDef: 800,
        health: 10000,
        peakHealth: 10000,
        goldReward: 10000,
        xpYield: 999999,
        ag: 300,
        peakAg: 300,
        "button text": ["Attack", "Defend", "Run"],
        "button functions": [() => attack(boss[1]), () => defend(boss[1]), run],
        text: "A destroyer of many galaxies stands before you",
        source: "./Images/destroyer.jpg"
    },
]

const role = [
    {
        name: "Profession selection",
        "button text": ["Warrior", "Mage", "Rogue"],
        "button functions": [warriorSelect, mageSelect, rogueSelect],
        text: "Beyond you, a spiritual doorway leading to 5 differing paths? Which will you pursue?",
        source: "./Images/left.jpg",
    }
]

const inventoryDisplay = [
    {
        name: "Inventory",
        "button text": ["Display Weapons", "Display Consumables", "Display Key Items"],
        "button functions": [openWeapons, openConsumables, openRare, goCheck],
        text: "You opened your inventory",
        source: "./Images/inventory.jpg",
    },
    {
        name: "Weapons",
        "button text": ["Common", "Rare", "Legendary"],
        "button functions": [checkCommon, checkRare, checkLeg, openInventory],
        text: "You ponder over your weapons",
        source: "./Images/inventory.jpg",
    },
    {
        name: "Consumables",
        "button text": ["Treasure", "Stat boosting", "Prayer/Misc"],
        "button functions": [treasure, statboost, mystery,openInventory],
        text: "You opened your inventory",
        source: "./Images/inventory.jpg",
    },
    {
        name: "Rare drops",
        "button text": ["Option 1", "Option 2", "Option 3"],
        "button functions": [inspectOpt1, inspectOpt2, inspectOpt3,openInventory],
        text: "You opened your inventory",
        source: "./Images/inventory.jpg",
    },
]

const weaponDisplay = [
    {
        name: "Common inspect",
        "button text": ["Zweihander", "Shortbow", "Magic wand"],
        "button functions": [inspectZwei, inspectShortbow, inspectWand, openWeapons],
        text: "You admire over the so called common weaponry.",
        source: "./Images/inventory.jpg",
    },
    {
        name: "Rare inspect",
        "button text": ["Katana", "Claymore", "Gem staff"],
        "button functions": [inspectKat, inspectClay, inspectGem, openWeapons],
        text: "You gaze over the rare weaponry.",
        source: "./Images/inventory.jpg",
    },
    {
        name: "Legendary inspect inspect",
        "button text": ["Greatest Sword", "Shadow bow", "Mechanical staff"],
        "button functions": [inspectGreat, inspectShadow, inspectMech, openWeapons],
        text: "The shining light coming from this section blinds you, it is the legendary weaponry.",
        source: "./Images/inventory.jpg",
    },
]

const consumables = [
    {
        name: "Treasure",
        "button text": ["Chests", "Healthstones", "Fortune gems"],
        "button functions": [useChest, useHeal, useGems,openConsumables],
        text: "You opened your treasury",
        source: "./Images/inventory.jpg",
    },
    {
        name: "Stat boosting",
        "button text": ["ATK++", "DEF++", "Crit++"],
        "button functions": [powerPot, defPot, critPot,openConsumables],
        text: "You opened your inventory",
        source: "./Images/inventory.jpg",
    },
    {
        name: "Mysterious potions",
        "button text": ["Reset stats", "Wealth prayer (100-150HP)", "XP prayer (100-150HP)"],
        "button functions": [resetStats, goldBoost, XPboost,openConsumables],
        text: "You opened your inventory",
        source: "./Images/inventory.jpg",
    },
]

const rareDrops = [
    {
        name: "Opt 1",
        "button text": ["???", "???", "???"],
        "button functions": [inspectSlime, inspectWolf, inspectGargoyle,openRare],
        text: "First layer",
        source: "./Images/inventory.jpg",
    },
    {
        name: "Opt 2",
        "button text": ["???", "???", "???"],
        "button functions": [inspectGolem, inspectMagus, inspectRevenant,openRare],
        text: "Second layer",
        source: "./Images/inventory.jpg",
    },
    {
        name: "Opt 3",
        "button text": ["???", "???", "???"],
        "button functions": [inspectAbomination, inspectStalker, inspectMimic,openRare],
        text: "Third layer",
        source: "./Images/inventory.jpg",
    },
    {
        name: "Special",
        "button text": ["???", "???", "???"],
        "button functions": [inspectTreasureSlime, placeHolder, placeHolder,openRare],
        text: "Special layer",
        source: "./Images/inventory.jpg",
    },
    {
        name: "Elite",
        "button text": ["???", "???", "???"],
        "button functions": [inspectBarbedSlime, inspectKingSoul, inspectArchgoyle,openRare],
        text: "Elite layer",
        source: "./Images/inventory.jpg",
    },
    {
        name: "Boss",
        "button text": ["???", "???", "???"],
        "button functions": [inspectDragon, placeHolder, placeHolder,openRare],
        text: "Third layer",
        source: "./Images/inventory.jpg",
    },
]
export { town, locations, weapons, potions, exchange, monsters, dungeon, role, inventoryDisplay, consumables, rare, elite, boss, weaponDisplay, rareDrops};