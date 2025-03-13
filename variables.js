export const mainButtons = {
  town: document.getElementById("town"),

  mainButtonsHud: document.getElementById("mainButtons"),

  shopButton: document.getElementById("button1"),
  dungeonButton: document.getElementById("button2"),
  bossButton: document.getElementById("button3"),
  text: document.getElementById("text"),
  visual: document.getElementById("image"),

  levelButton: document.getElementById("button4"),
  Inventory: document.getElementById("button5"),
  backButton: document.getElementById("button6"),

  healthText: document.getElementById("healthText"),
  displayMaxHealth: document.getElementById("displayMaxHealth"),
  xpText: document.getElementById("xpText"),
  displayXpReq: document.getElementById("displayXpReq"),
  levelText: document.getElementById("levelText"),
  goldText: document.getElementById("goldText"),
  playerStats: document.getElementById("playerStats"),
  statDisplay: document.getElementById("statDisplay"),
  displayStatsButton: document.getElementById("displayStatsbutton"),
  controls: document.getElementById("controls"),
  mainButtons: document.getElementById("mainButtons"),
  secondButtons: document.getElementById("secondButtons"),

  checkInv: document.getElementById("checkInv"),
  visualBox: document.getElementById("visual"),
  back: document.getElementById("button7"),
  defaultText: "Welcome to Dragon Repeller. You must defeat the dragon that is preventing people from leaving the town. You are in the town square. Where do you want to go? Use the buttons above.",
  monsterStats: document.getElementById("monsterStats"),
  monsterName: document.getElementById("monsterName"),
  monsterHealth: document.getElementById("monsterHealth"),
  monsterATK: document.getElementById("monsterATK"),
  monsterDEF: document.getElementById("monsterDEF"),
  monsterAG: document.getElementById("monsterAG"),

  displayHealth: document.getElementById("displayHealth"),
  displayStatPoints: document.getElementById("displayStatPoints"),
  displayST: document.getElementById("displayST"),
  displayDEF: document.getElementById("displayDEF"),
  displayAG: document.getElementById("displayAG"),
  displayINT: document.getElementById("displayINT"),
  displayCritR: document.getElementById("displayCritR"),
  displayCritATK: document.getElementById("displayCritATK"),

  STPlus: document.getElementById("STPlus"),
  DEFPlus: document.getElementById("DEFPlus"),
  AGPlus: document.getElementById("AGPlus"),
  INTPlus: document.getElementById("INTPlus"),
};

export const playerStatus = {
  xp: 0,
  xpRequired: 10,
  level: 0,
  statPoints: 0,
  health: 100,
  maxHealth: 100,
  BonusMaxHealth: 0,
  gold: 0,
  playerDamage: null,
  st: 0,
  def: 0,
  ag: 0,
  int: 0,
  BonusSt: 0,
  BonusDef: 0,
  BonusAg: 0,
  BonusInt: 0,
  intDecimal: null,
  critRate: 100,
  critATK: 100,
  intCritRate: null,
  intCritATK: null,
  aquiredWeapons: 0,
  aquiredItems: 0,
  aquiredRare: 0,
  luck: 0,
};

export const checkCrit = {
  rolledDrop: false,
  achievedCrit: false,
};

export const ownerShip = {
  ownedZwei: false,
  ownedShort: false,
  ownedWand: false,
  ownedKat: false,
  ownedClay: false,
  ownedGem: false,
  ownedGreat: false,
  ownedShadow: false,
  ownedMechanic: false,

  ownedSlime: false,
  ownedTreasureSlime: false,
  ownedWolf: false,
  ownedGargoyle: false,
  ownedGolem: false,
  ownedMagus: false,
  ownedA: false,
  ownedB: false,
  ownedC: false,
  ownedD: false,

  ownede: false,
};

export const endgameCheck = {
  dragonSlayed: false,
  destroyerSlayed: false,
  selectWarrior: false,
  selectMage: false,
  selectRogue: false,
  selectBard: false,
  selectRanger: false,
};

export const materialOwnership = {
  materialSlimeOwned: 0,
  materialWolfOwned: 0,
  materialGargoyleOwned: 8,
  materialRockOwned: 0,
  materialMagusOwned: 0,
};
