//Game mechanics
import { goStore, goCave, goBoss, goTown, goCheck, explosives, statboost, mystery} from "./script.js";
import { opt1, opt2, opt3 } from "./script.js";
import { attack, defend, run} from "./script.js";
//Roles
import { warriorSelect, mageSelect, rogueSelect, } from "./script.js";
//Store
import { weaponShop, potionShop, exchangeStore } from "./script.js";
import { healPot, ATKPot, MiscSelect } from "./script.js";
import { debuff, buff, luckPot } from "./script.js";
import { ATKdebuff, DEFdebuff, AGdebuff } from "./script.js";
import { ATKbuff, DEFbuff, AGbuff } from "./script.js";
import { goCommon, goRare, goLegendary } from "./script.js";
import { zweiHander, shortBow, magicWand, rareKatana, clayMore, gemStaff, greatestSword, shadowBow, mechanicalStaff } from "./script.js";
//Enemies
import { fightSlime,fightFang,fightGargoyle } from "./script.js";
import { fightA,fightB,fightC } from "./script.js";
//Mob drops
import { gainSlimeSuit,gainWolfSoul,gainStoneFist,gainScepter,gainDetermination } from "./script.js";
import { gainSlimeMats,gainWolfMats,gainRockMats,gainMagusMats } from "./script.js";
//Inventory
import { openInventory, openWeapons,openKey,openConsumables } from "./script.js";

const town = [
    {
        name: "Town",
        "button text": ["Store", "Dungeon", "Dragon"],
        "button functions": [goStore, goCave, goBoss],
        text: "aa",
        source: "./Images/townsquare.jpg"
    }
]

const locations = [
    {
        name: "Store",
        "button text": ["Weapons", "Potions", "Exchange"],
        "button functions": [weaponShop, potionShop, exchangeStore, goTown],
        text: "aa",
        source: "./Images/shopkeep.jpg",
    },
    {
        name: "Cave",
        "button text": ["Option 1", "Option 2", "Option 3"],
        "button functions": [opt1, opt2, opt3, goTown],
        text: "cc",
        source: "./Images/left.jpg",
    },
]

const dungeon = [
    {
        name: "option1",
        "button text": ["Slime", "Fang", "Gargoyle"],
        "button functions": [fightSlime, fightFang, fightGargoyle, goCave],
        text: "cc",
        source: "./Images/left.jpg",
    },
    {
        name: "option2",
        "button text": ["A", "B", "C"],
        "button functions": [fightA, fightB, fightC, goCave],
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
        "button text": ["Healing (20HP/30G)", "ATK Boost (50% ATK/ 1 Battle)", "Misc"],
        "button functions": [healPot, ATKPot, MiscSelect, goStore],
        text: "ppoti",
        source: "./Images/right.jpg"
    },
    {
        name: "Misc",
        "button text": ["Battle de-buffs", "Battle buffs", "Luck increase (7777G)"],
        "button functions": [debuff, buff, luckPot, goStore],
        text: "ppoti",
        source: "./Images/right.jpg"
    },
    {
        name: "Debuffs",
        "button text": ["ATK weakening (1250G)", "DEF weakening (1500G)", "AG weakening (2000G)"],
        "button functions": [ATKdebuff, DEFdebuff, AGdebuff, goStore],
        text: "ppoti",
        source: "./Images/right.jpg"
    },
    {
        name: "Buffs",
        "button text": ["ATK boost", "DEF boost", "AG boost"],
        "button functions": [ATKbuff, DEFbuff, AGbuff, goStore],
        text: "ppoti",
        source: "./Images/right.jpg"
    },
]

const exchange = [
    {
        name: "Exchange",
        "button text": ["Material sell", "Life exchange", "Gold exchange"],
        "button functions": [goStore, goCave, goBoss, goStore],
        text: "golds",
        source: "./Images/right.jpg"
    }
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
        baseATKChance: 66,
        ag: 20,
        peakAg: 20,
        rareDrop: gainSlimeSuit,
        rareDropChance: 95,
        materialDrop: gainSlimeMats,
        materialDropChance: 30,
        "button text": ["Attack", "Defend", "Run"],
        "button functions": [() => attack(monsters[0]), () => defend(monsters[0]), run],
        text: "You encounter a slime",
        source: "./Images/slime.jpg"
    },
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
        baseATKChance: 100,
        ag: 10,
        peakAg: 10,
        rareDrop: gainSlimeSuit,
        rareDropChance: 10,
        materialDrop: gainSlimeMats,
        materialDropChance: 0,
        "button text": ["Attack", "Defend", "Run"],
        "button functions": [() => attack(monsters[1]), () => defend(monsters[1]), run],
        text: "You encounter a TREASURE slime",
        source: "./Images/treasureslime.jpg"
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
        baseATKChance: 75,
        ag: 80,
        peakAg: 80,
        rareDrop: gainWolfSoul,
        rareDropChance: 90,
        materialDrop: gainWolfMats,
        materialDropChance: 40,
        "button text": ["Attack", "Defend", "Run"],
        "button functions": [() => attack(monsters[2]), () => defend(monsters[2]), run],
        text: "You encounter a fanged beast",
        source: "./Images/fanged.jpg"
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
        goldReward: 125,
        xpYield: 5000,
        baseATKChance: 90,
        ag: 10,
        peakAg: 10,
        rareDrop: gainStoneFist,
        rareDropChance: 90,
        materialDrop: gainRockMats,
        materialDropChance: 50,
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
        goldReward: 1000,
        xpYield: 15000,
        baseATKChance: 100,
        ag: 5,
        peakAg: 5,
        rareDrop: gainScepter,
        rareDropChance: 90,
        materialDrop: gainMagusMats,
        materialDropChance: 75,
        "button text": ["Attack", "Defend", "Run"],
        "button functions": [() => attack(monsters[4]), () => defend(monsters[4]), run],
        text: "A malevolent spellcaster stands in the darkness, any encounter will be hostile",
        source: "./Images/magus.jpg"
    },
    {
        name: "Dragon",
        class: "calamity",
        atkPower: 80,
        peakATKPower: 80,
        def: 80,
        peakDef: 80,
        health: 1000,
        peakHealth: 1000,
        goldReward: 100000,
        xpYield: 50000,
        baseATKChance: 90,
        ag: 75,
        peakAg: 75,
        rareDrop: gainDetermination,
        rareDropChance: 0,
        "button text": ["Attack", "Defend", "Run"],
        "button functions": [() => attack(monsters[5]), () => defend(monsters[5]), run],
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
        goldReward: 1000000,
        xpYield: 999999,
        baseATKChance: 90,
        ag: 100,
        peakAg: 100,
        "button text": ["Attack", "Defend", "Run"],
        "button functions": [() => attack(monsters[6]), () => defend(monsters[6]), run],
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
        "button functions": [openWeapons, openConsumables, openKey, goCheck],
        text: "You opened your inventory",
        source: "./Images/inventory.jpg",
    },
    {
        name: "Weapons",
        "button text": ["Common", "Rare", "Legendary"],
        "button functions": [warriorSelect, mageSelect, rogueSelect, openInventory],
        text: "You ponder over your weapons",
        source: "./Images/inventory.jpg",
    },
    {
        name: "Consumables",
        "button text": ["Damage dealing", "Stat boosting", "Mystery potions"],
        "button functions": [explosives, statboost, mystery,openInventory],
        text: "You opened your inventory",
        source: "./Images/inventory.jpg",
    },
    {
        name: "Inventory",
        "button text": ["Hero's insignia", "Dragon's Mark", "???"],
        "button functions": [warriorSelect, mageSelect, rogueSelect,openInventory],
        text: "You opened your inventory",
        source: "./Images/inventory.jpg",
    },
]

const consumables = [
    {
        name: "Damage dealing",
        "button text": ["Damage dealing", "Stat boosting", "Mystery potions"],
        "button functions": [warriorSelect, mageSelect, rogueSelect,openInventory],
        text: "You opened your inventory",
        source: "./Images/inventory.jpg",
    },
    {
        name: "Stat boosting",
        "button text": ["Damage dealing", "Stat boosting", "Mystery potions"],
        "button functions": [warriorSelect, mageSelect, rogueSelect,openInventory],
        text: "You opened your inventory",
        source: "./Images/inventory.jpg",
    },
    {
        name: "Mysterious potions",
        "button text": ["Damage dealing", "Stat boosting", "Mystery potions"],
        "button functions": [warriorSelect, mageSelect, rogueSelect,openInventory],
        text: "You opened your inventory",
        source: "./Images/inventory.jpg",
    },
]
export { town, locations, weapons, potions, exchange, monsters, dungeon, role, inventoryDisplay, consumables};